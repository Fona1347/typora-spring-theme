#!/usr/bin/env node
// Real Chromium computed-style checks, with no npm dependencies.
import assert from 'node:assert/strict';
import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import { mkdir, mkdtemp, readFile, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { once } from 'node:events';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
function option(name) {
  const i = args.indexOf(name);
  if (i < 0) return undefined;
  if (!args[i + 1] || args[i + 1].startsWith('--')) throw new Error(`Missing value for ${name}`);
  return args[i + 1];
}
const browser = option('--browser') || [
  path.join(process.env.ProgramFiles || '', 'Google/Chrome/Application/chrome.exe'),
  path.join(process.env['ProgramFiles(x86)'] || '', 'Microsoft/Edge/Application/msedge.exe'),
  '/usr/bin/chromium', '/usr/bin/chromium-browser', '/usr/bin/google-chrome',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
].find(existsSync);
if (!browser) throw new Error('Chrome/Edge not found. Pass --browser PATH.');
const baselineDir = option('--baseline-dir');
const screenshotsDir = option('--screenshots-dir');
const fixture = await readFile(path.join(root, 'tests/theme-fixture.html'), 'utf8');
const profile = await mkdtemp(path.join(tmpdir(), 'spring-theme-verify-'));
const child = spawn(browser, [
  '--headless=new', '--disable-gpu', '--no-first-run', '--no-default-browser-check',
  '--remote-debugging-port=0', `--user-data-dir=${profile}`, 'about:blank',
], { stdio: ['ignore', 'ignore', 'pipe'], windowsHide: true });
let socket;
let nextId = 0;
const pending = new Map();
const differences = [];
let checks = 0;
function equal(actual, expected, label) {
  checks++;
  assert.equal(actual, expected, label);
}
function send(method, params = {}, sessionId) {
  const id = ++nextId;
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => { pending.delete(id); reject(new Error(`${method} timed out`)); }, 15000);
    pending.set(id, { resolve, reject, timer });
    socket.send(JSON.stringify({ id, method, params, ...(sessionId ? { sessionId } : {}) }));
  });
}

try {
  const endpoint = await new Promise((resolve, reject) => {
    let output = '';
    const timer = setTimeout(() => reject(new Error('Chromium startup timed out')), 20000);
    child.once('error', error => { clearTimeout(timer); reject(error); });
    child.once('exit', code => { clearTimeout(timer); reject(new Error(`Chromium exited: ${code}`)); });
    child.stderr.on('data', chunk => {
      output += chunk;
      const match = output.match(/DevTools listening on (ws:\/\/[^\s]+)/);
      if (match) { clearTimeout(timer); resolve(match[1]); }
    });
  });
  socket = new WebSocket(endpoint);
  socket.addEventListener('message', event => {
    const result = JSON.parse(event.data);
    const callback = pending.get(result.id);
    if (!callback) return;
    pending.delete(result.id);
    clearTimeout(callback.timer);
    if (result.error) callback.reject(new Error(JSON.stringify(result.error)));
    else callback.resolve(result.result);
  });
  await once(socket, 'open');
  const { targetId } = await send('Target.createTarget', { url: 'about:blank' });
  const { sessionId } = await send('Target.attachToTarget', { targetId, flatten: true });
  const cdp = (method, params) => send(method, params, sessionId);
  await cdp('Page.enable');
  await cdp('DOM.enable');
  await cdp('CSS.enable');
  const evaluate = async expression => {
    const response = await cdp('Runtime.evaluate', { expression, returnByValue: true, awaitPromise: true });
    if (response.exceptionDetails) throw new Error(JSON.stringify(response.exceptionDetails));
    return response.result.value;
  };
  const snapshot = () => evaluate(`(() => {
    const result = {};
    const properties = ['color','background-color','background-image','font-size','line-height',
      'max-width','min-width','padding-top','padding-right','padding-bottom','padding-left',
      'border-left-color','border-left-width','border-top-width','border-radius','box-shadow','filter','caret-color',
      'opacity','backdrop-filter'];
    for (const node of document.querySelectorAll('[id]:not(style)')) {
      const style = getComputedStyle(node);
      result[node.id] = Object.fromEntries(properties.map(name => [name, style.getPropertyValue(name)]));
    }
    return result;
  })()`);
  const load = async (source, scheme, media = 'screen', width = 1440) => {
    await cdp('Emulation.setDeviceMetricsOverride', { width, height: 1500, deviceScaleFactor: 1, mobile: false });
    await cdp('Emulation.setEmulatedMedia', { media, features: [{ name: 'prefers-color-scheme', value: scheme }] });
    const { frameTree } = await cdp('Page.getFrameTree');
    await cdp('Page.setDocumentContent', {
      frameId: frameTree.frame.id,
      html: fixture.replace('/* THEME_CSS */', () => source),
    });
    // Disable transitions only in this test document so pseudo-state probes are deterministic.
    await evaluate(`(() => { const style=document.createElement('style'); style.textContent='*,*::before,*::after { transition: none !important; animation: none !important; }'; document.head.append(style); })()`);
  };
  const sources = {};
  for (const name of ['spring.css', 'spring-light.css', 'spring-dark.css']) {
    sources[name] = await readFile(path.join(root, 'dist', name), 'utf8');
  }
  const snapshots = {};
  for (const [name, source] of Object.entries(sources)) {
    for (const scheme of ['light', 'dark']) {
      const dark = name === 'spring-dark.css' || (name === 'spring.css' && scheme === 'dark');
      const label = `${name}/${scheme}`;
      await load(source, scheme);
      const actual = await snapshot();
      snapshots[label] = actual;
      const body = dark ? 'rgb(201, 197, 188)' : 'rgb(40, 44, 52)';
      equal(actual.active.color, body, label + ' text');
      equal(actual.write['background-color'], dark ? 'rgb(35, 34, 34)' : 'rgb(255, 253, 248)', label + ' background');
      equal(actual.quote['background-color'], dark ? 'rgb(39, 53, 45)' : 'rgb(232, 244, 235)', label + ' quote');
      equal(actual.nested['border-left-color'], dark ? 'rgb(79, 148, 109)' : 'rgb(43, 118, 85)', label + ' nested quote');
      equal(actual.deep['border-left-color'], dark ? 'rgb(64, 130, 94)' : 'rgb(37, 106, 75)', label + ' deep quote');
      equal(actual.write['max-width'], '1280px', label + ' editor width');
      equal(actual.write['min-width'], '300px', label + ' editor min width');
      equal(actual.write['padding-right'], '80px', label + ' editor padding');
      equal(actual.source['max-width'], '1280px', label + ' source width');
      equal(actual.heading['font-size'], '45px', label + ' heading size');
      equal(actual.active['line-height'], '36px', label + ' line height');
      equal(actual.image.filter, dark ? 'brightness(0.9)' : 'none', label + ' image');
      equal(actual['caution-code'].color, 'rgb(245, 145, 2)', label + ' caution');
      equal(actual['warning-code'].color, 'rgb(220, 38, 38)', label + ' warning');
      equal(actual.list['padding-left'], '30px', label + ' list indentation');
      equal(actual.meta['border-left-width'], '0px', label + ' metadata border');
      // Check each compositing layer: parent opacity fades even fully opaque children.
      equal(actual.tooltip.opacity, '1', label + ' hover preview opacity');
      equal(actual['tooltip-content'].opacity, '1', label + ' preview text opacity');
      equal(actual['tooltip-arrow'].opacity, '1', label + ' preview arrow opacity');
      const tooltipBackground = dark ? 'rgb(48, 59, 53)' : 'rgb(238, 245, 234)';
      equal(actual.tooltip['background-color'], tooltipBackground, label + ' opaque preview surface');
      equal(actual['tooltip-content']['background-color'], 'rgba(0, 0, 0, 0)', label + ' single preview surface');
      equal(actual['tooltip-content']['box-shadow'], 'none', label + ' no duplicate preview shadow');
      equal(actual.tooltip['backdrop-filter'], 'none', label + ' preview backdrop');
      equal(actual['tooltip-content'].color, dark ? body : 'rgb(38, 56, 46)', label + ' preview text color');
      equal(await evaluate(`getComputedStyle(document.querySelector('#tooltip-arrow'), '::after').backgroundColor`), tooltipBackground, label + ' matching preview arrow');
      if (screenshotsDir && name === 'spring.css') {
        await mkdir(screenshotsDir, { recursive: true });
        // Put the preview over real document text to make bleed-through visible.
        await evaluate(`document.querySelector('#tooltip').style.cssText='position:fixed;left:100px;right:100px;top:270px;z-index:100'`);
        const shot = await cdp('Page.captureScreenshot', { format: 'png' });
        await writeFile(path.join(screenshotsDir, `${scheme}.png`), Buffer.from(shot.data, 'base64'));
      }
      const { root: documentRoot } = await cdp('DOM.getDocument');
      const { nodeId } = await cdp('DOM.querySelector', { nodeId: documentRoot.nodeId, selector: '#image' });
      await cdp('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: ['hover'] });
      equal(await evaluate(`getComputedStyle(document.querySelector('#image')).filter`), 'none', label + ' image hover');
      await cdp('CSS.forcePseudoState', { nodeId, forcedPseudoClasses: [] });
      if (dark) {
        await evaluate(`document.body.classList.add('on-focus-mode')`);
        equal(await evaluate(`getComputedStyle(document.querySelector('#active')).color`), body, label + ' focused text');
        equal(await evaluate(`getComputedStyle(document.querySelector('#inactive')).color`), 'rgb(140, 137, 130)', label + ' unfocused text');
        const selection = await evaluate(`(() => {
          const range=document.createRange(); range.selectNodeContents(document.querySelector('#active'));
          getSelection().removeAllRanges(); getSelection().addRange(range);
          const style=getComputedStyle(document.querySelector('#active'), '::selection');
          return {text:style.color, background:style.backgroundColor};
        })()`);
        equal(selection.text, body, label + ' selected text');
        equal(selection.background, 'rgb(79, 77, 77)', label + ' selection background');
      }
      for (const [width, padding] of [[1920, '112px'], [1600, '96px'], [1024, '80px'], [800, '60px'], [375, '32px']]) {
        await load(source, scheme, 'screen', width);
        equal(await evaluate(`getComputedStyle(document.querySelector('#write')).paddingRight`), padding, `${label} width ${width}`);
      }
      await load(source, scheme, 'print');
      equal(await evaluate(`getComputedStyle(document.querySelector('#image')).filter`), 'none', label + ' print image');
      if (baselineDir) {
        const previous = await readFile(path.join(baselineDir, name), 'utf8');
        await load(previous, scheme);
        const before = await snapshot();
        for (const [id, properties] of Object.entries(actual)) {
          for (const [property, value] of Object.entries(properties)) {
            if (before[id][property] !== value) differences.push({ theme: label, id, property, before: before[id][property], after: value });
          }
        }
      }
    }
  }
  for (const scheme of ['light', 'dark']) {
    const automatic = snapshots[`spring.css/${scheme}`];
    const fixed = snapshots[`spring-${scheme}.css/${scheme}`];
    assert.deepEqual(automatic, fixed, `Automatic ${scheme} matches fixed ${scheme}`);
    checks++;
  }
  if (baselineDir) {
    await writeFile(path.join(baselineDir, 'browser-comparison.json'), JSON.stringify(differences, null, 2) + '\n');
    console.log(`Baseline comparison: ${differences.length} property changes; see browser-comparison.json in the baseline directory.`);
  }
  console.log(`PASS: ${checks} checks; 3 themes × 2 system modes, focus/selection, hover, responsive layout, and print.`);
} finally {
  if (socket?.readyState === WebSocket.OPEN) {
    const closed = once(child, 'exit');
    socket.send(JSON.stringify({ id: ++nextId, method: 'Browser.close' }));
    await Promise.race([closed, new Promise(resolve => setTimeout(resolve, 3000))]);
    socket.close();
  }
  if (child.exitCode === null) child.kill();
  for (const request of pending.values()) clearTimeout(request.timer);
  // Only remove the exact temporary profile that this process just created.
  if (path.dirname(path.resolve(profile)) === path.resolve(tmpdir()) && path.basename(profile).startsWith('spring-theme-verify-')) {
    await rm(profile, { recursive: true, force: true, maxRetries: 5, retryDelay: 200 });
  }
}
