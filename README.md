<p align="center">
  <img src=".assets/logo-spring.png" alt="Spring Theme Logo" width="460" />
</p>

<h1 align="center">Typora Spring Theme · Light &amp; Dark Edition</h1>

<p align="center">
  A refreshing, readable Typora theme with full <strong>Light</strong>, <strong>Dark (SprIngNight)</strong>, and <strong>Auto</strong> support.<br/>
  一款令人如沐春风的 Typora 主题个人维护版：内置<strong>暖白浅色</strong>、<strong>SprIngNight 深色</strong>与<strong>跟随系统自动切换</strong>。
</p>

<p align="center">
  <a href="https://github.com/Fona1347/typora-spring-theme/blob/hy-spring/LICENSE"><img src="https://img.shields.io/github/license/Fona1347/typora-spring-theme" alt="License" /></a>
  <a href="https://github.com/SprInec/typora-spring-theme"><img src="https://img.shields.io/badge/upstream-SprInec%2Ftypora--spring--theme-2f845e" alt="Upstream" /></a>
  <img src="https://img.shields.io/badge/modes-Light%20%7C%20Dark%20%7C%20Auto-3ea174" alt="Modes" />
  <img src="https://img.shields.io/badge/language-CSS-purple" alt="CSS" />
</p>

<p align="center">
  <strong>English</strong> · <a href="./README_cn.md">简体中文</a> · <a href="./DEMO.md">Interactive Demo (<code>DEMO.md</code>)</a> · <a href="./CUSTOMIZATION.md">Maintenance &amp; Sync Guide</a>
</p>

> **Branch guide:** This fork uses **`hy-spring`** as its default branch. Install the standalone themes directly from [`dist/`](dist/), and edit [`styles/`](styles/) for personal overrides. Root [`spring.css`](spring.css) stays identical to upstream `main` (`SprInec/typora-spring-theme`) for clean upstream syncing.

---

## Light &amp; Dark Preview

Both screenshots below are rendered directly from the generated [`dist/spring-light.css`](dist/spring-light.css) and [`dist/spring-dark.css`](dist/spring-dark.css) themes, showcasing typography, search highlights, IEEE citation hover cards, nested blockquotes, GitHub Alerts, tables, code blocks, task lists, math equations, and Mermaid diagrams.

<table>
  <thead>
    <tr>
      <th width="50%">Light Mode · <code>dist/spring-light.css</code></th>
      <th width="50%">Dark Mode (SprIngNight) · <code>dist/spring-dark.css</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href=".assets/preview-light.png"><img src=".assets/preview-light.png" alt="Spring Light Theme Preview" /></a></td>
      <td><a href=".assets/preview-dark.png"><img src=".assets/preview-dark.png" alt="Spring Dark Theme Preview" /></a></td>
    </tr>
  </tbody>
</table>

| Area | Light (`spring-light.css`) | Dark (`spring-dark.css`) |
| --- | --- | --- |
| **Canvas &amp; Text** | Warm paper `#fffdf8` · soft ink `#282c34` | Low-glare charcoal `#232222` · warm stone `#c9c5bc` |
| **Accent Palette** | Forest &amp; spring green (`#06621e`, `#2f845e`, `#3ea174`) | Fresh sprout green (`#91D462`, `#5ea67c`, `#3ea174`) |
| **Search Highlights** | High-contrast amber `#ffe69a` / current `#ffb454` | High-contrast gold `#e7c76b` / current `#ffad4d` |
| **Images** | Original brightness | Gentle dimming (`brightness(0.9)`), full brightness on hover &amp; print |
| **UI &amp; Focus Mode** | Matched selection &amp; native focus-mode variables | Full sidebar, source mode, modal, cursor &amp; focus-mode adaptation |

---

## What's Enhanced in This Fork

- **Three Standalone Themes (`dist/`)**:
  - `dist/spring.css` — Automatically follows OS light/dark mode (`prefers-color-scheme`).
  - `dist/spring-light.css` — Always uses the warm-paper light palette.
  - `dist/spring-dark.css` — Always uses the dark **SprIngNight** palette.
- **Layered, Upstream-Friendly Architecture**:
  - Upstream [`spring.css`](spring.css) is never modified directly.
  - Personal layers live in [`styles/common.css`](styles/common.css), [`styles/light.css`](styles/light.css), and [`styles/dark.css`](styles/dark.css), compiled via zero-dependency `python scripts/build.py`.
- **Reading &amp; Editing Refinements**:
  - **Search Highlight Legibility**: `.md-search-hit`, `.md-search-select`, `.cm-searching`, and sidebar matches stay readable over bold, italic, links, and syntax-highlighted code.
  - **Footnote &amp; Citation Hover Previews**: Single-surface opaque card (`opacity: 1`) with crisp typography so underlying body text never bleeds through.
  - **Focus Mode &amp; Selection Alignment**: Typora native `--text-color`, `--blur-text-color`, `--select-text-bg-color`, and `--select-text-font-color` are aligned in both themes.
  - **Typography &amp; Layout**: Comfortable `1280px` reading width, balanced heading hierarchy, refined nested blockquotes, five-color GitHub Alerts, and clean scrollbars.

---

## Installation

1. Clone this repository (default branch is `hy-spring`) or download the ZIP archive from GitHub:

   ```bash
   git clone https://github.com/Fona1347/typora-spring-theme.git
   ```

2. Open Typora → **Preferences → Appearance → Open Theme Folder**.
3. Copy the theme file(s) you want from `dist/` into the Typora theme folder:
   - `dist/spring.css` — Auto (follows system Light/Dark)
   - `dist/spring-light.css` — Fixed Light
   - `dist/spring-dark.css` — Fixed Dark (SprIngNight)

   > All files in `dist/` are self-contained. Do **not** copy `styles/` or the root `spring.css` (which is the unmodified upstream base).
4. Restart Typora and choose **Spring**, **Spring Light**, or **Spring Dark** under **Themes**.

---

## Customization &amp; Layered Build

Edit files in [`styles/`](styles/) rather than `dist/`, then rebuild and verify:

```bash
python scripts/build.py
python scripts/build.py --check
node scripts/verify-browser.mjs
```

- **Toggle interactive effects**: Check the effect flags at the top of root `spring.css` (e.g. `--use-dynamic-effect`, `--p-hover-effect`, `--table-hover-effect`), override them in `styles/common.css` (`0` = off, `1` = on), and rebuild.
- **Typography &amp; width**: Adjust `--hy-font-ui`, `--hy-font-size`, `--hy-line-height`, and `--hy-editor-max-width` in `styles/common.css`.
- **Colors &amp; dark image brightness**: Adjust variables in `styles/light.css` and `styles/dark.css` (`--img-brightness` defaults to `0.9`).
- For full build, verification, and upstream-sync instructions, see [CUSTOMIZATION.md](CUSTOMIZATION.md).

---

## Font Recommendations &amp; Configuration

The maintained themes use a local-only font stack (no bundled font files, no network requests); code blocks continue to use `Fira Code → Consolas → … → monospace`:

```css
/* styles/common.css */
:root {
    --hy-font-ui: "Roboto", "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", sans-serif;
}
```

| Font | Suggested Role | License | Official Source |
| --- | --- | --- | --- |
| **Roboto** | Latin body, numbers, and UI | [OFL 1.1](https://github.com/googlefonts/roboto-3-classic/blob/main/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Roboto) |
| **Noto Sans SC** | Open-source Simplified Chinese body | [OFL 1.1](https://github.com/google/fonts/blob/main/ofl/notosanssc/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) |
| **Fira Code** | Default monospace code font | [OFL 1.1](https://github.com/tonsky/FiraCode/blob/master/LICENSE) | [GitHub Releases](https://github.com/tonsky/FiraCode/releases) |
| **Cascadia Code** | Code blocks &amp; source mode | [OFL 1.1](https://github.com/microsoft/cascadia-code/blob/main/LICENSE) | [GitHub Releases](https://github.com/microsoft/cascadia-code/releases) |
| **JetBrains Mono** | Alternative monospace code font | [OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt) | [Official Site](https://www.jetbrains.com/lp/mono/) |
| **Sarasa Mono SC** | Mixed CJK/Latin code &amp; comments | [OFL 1.1](https://github.com/be5invis/Sarasa-Gothic/blob/master/LICENSE) | [GitHub Releases](https://github.com/be5invis/Sarasa-Gothic/releases) |
| **Maple Mono CN** | Monospace with Chinese &amp; NF icons | OFL 1.1 | [GitHub Repo](https://github.com/subframe7536/maple-font#readme) |
| **LXGW WenKai** | Optional calligraphy-style Chinese reading | [OFL 1.1](https://github.com/lxgw/LxgwWenKai/blob/master/OFL.txt) | [GitHub Releases](https://github.com/lxgw/LxgwWenKai/releases) |
| **PingFang SC** | Built-in macOS Chinese UI font | Apple SLA | Bundled with macOS |
| **Microsoft YaHei UI** | Built-in Windows Chinese UI font | Windows License | Bundled with Windows |

---

<details>
<summary><strong>Inherited Upstream Dynamic Interactions (GIF Showcase)</strong></summary>

All original interactive micro-animations from upstream `SprInec/typora-spring-theme` remain available and configurable:

- **Headings (`h1` / `h2` / `h3–h6`)**: subtle hover accents and gradient bars
- **Paragraph &amp; Inline Hover**: responsive highlight feedback on paragraphs, bold, italic, code, and lists
- **Blocks &amp; Tables**: interactive blockquotes, GitHub Alerts, code blocks, tables, and image zoom

<p align="center">
  <img src=".assets/h1.gif" width="48%" alt="h1 interaction" />
  <img src=".assets/paragraph_hover.gif" width="48%" alt="paragraph hover" />
</p>
<p align="center">
  <img src=".assets/alert.gif" width="48%" alt="alert blocks" />
  <img src=".assets/table.gif" width="48%" alt="table hover" />
</p>

</details>

---

## Credits &amp; License

- Original theme created by **[@SprInec](https://github.com/SprInec)** ([SprInec/typora-spring-theme](https://github.com/SprInec/typora-spring-theme)).
- Additional acknowledgments in [credits.md](credits.md).
- Released under the [MIT License](LICENSE).
