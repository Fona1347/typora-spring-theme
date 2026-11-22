<p align="center">
  <img src=".assets/logo-spring.png" alt="Spring Theme Logo" width="460" />
</p>

<h1 align="center">Typora Spring Theme · 浅色 / 深色增强版</h1>

<p align="center">
  面向<strong>科研写作、论文阅读与硕博日常笔记</strong>打磨的 Typora 灵动主题个人维护版。<br/>
  完整支持 <strong>暖白浅色（Light）</strong>、<strong>SprIngNight 深色（Dark）</strong> 与 <strong>跟随系统自动切换（Auto）</strong>。
</p>

<p align="center">
  <a href="https://github.com/Fona1347/typora-spring-theme/blob/hy-spring/LICENSE"><img src="https://img.shields.io/github/license/Fona1347/typora-spring-theme" alt="License" /></a>
  <a href="https://github.com/SprInec/typora-spring-theme"><img src="https://img.shields.io/badge/upstream-SprInec%2Ftypora--spring--theme-2f845e" alt="Upstream" /></a>
  <img src="https://img.shields.io/badge/modes-Light%20%7C%20Dark%20%7C%20Auto-3ea174" alt="Modes" />
  <img src="https://img.shields.io/badge/language-CSS-purple" alt="CSS" />
</p>

<p align="center">
  <a href="./README.md">English</a> · <strong>简体中文</strong> · <a href="./DEMO.md">本地演示文档（<code>DEMO.md</code>）</a> · <a href="./CUSTOMIZATION.md">个人版维护与同步说明</a>
</p>

> **分支说明：** 本仓库默认分支为 **`hy-spring`**。日常使用直接从 [`dist/`](dist/) 安装三款独立成品主题；个性化调整写在 [`styles/`](styles/) 中。根目录 [`spring.css`](spring.css) 与 `main` 分支始终保持上游原样，便于后续同步原作者更新。

---

## 快速安装与应用

### 方式一：AI Agent 一键安装（推荐）

如果你正在使用 Claude Code、Cursor、Codex、Antigravity 等 Agent 工具，直接复制下面这段提示词发给它，即可自动完成下载、备份、安装、字体核查并给你一句简报：

```text
请帮我自动安装 Typora 的 Spring 科研主题（https://github.com/Fona1347/typora-spring-theme）：
1. 识别我当前的操作系统并定位 Typora 主题目录（Windows: %APPDATA%\Typora\themes；macOS: ~/Library/Application Support/abnerworks.Typora/themes；Linux: ~/.config/Typora/themes）。
2. 从该仓库的最新 GitHub Release 下载发布包（若无 Release 则从默认分支 hy-spring 的 dist/ 获取），若目标目录已有同名 spring*.css 请先备份为 .bak，再安装 spring.css（自动）、spring-light.css（浅色）、spring-dark.css（深色）。
3. 验收：确认 3 个 CSS 文件存在且非空、未破坏其他主题；顺便检查本机是否安装了推荐字体（Roboto、Noto Sans SC 或 霞鹜文楷、Fira Code）。
4. 完成后只给我一句简洁汇报：包含安装路径、已安装的主题名、是否缺少推荐字体，以及提示我重启 Typora 即可切换。
```

### 方式二：手动下载安装（Release 压缩包或 Git）

1. **[直接下载最新 Release 压缩包（`v1.0.0`）](https://github.com/Fona1347/typora-spring-theme/releases/latest)**（推荐，内含 3 份独立成品 CSS、`DEMO.md` 与 `LICENSE`，解压即用），或克隆本仓库（默认分支已是 `hy-spring`）：

   ```bash
   git clone https://github.com/Fona1347/typora-spring-theme.git
   ```

2. 打开 Typora，点击左上角 **文件 → 偏好设置 → 外观 → 打开主题文件夹**。
3. 将 `spring.css`、`spring-light.css`、`spring-dark.css`（位于 Release 压缩包或仓库 `dist/` 目录）复制到 Typora 主题文件夹：
   - `spring.css`：自动跟随系统浅色/暗色模式。
   - `spring-light.css`：固定浅色 Spring 主题。
   - `spring-dark.css`：固定暗色 Spring Dark（SprIngNight）主题。

   > `dist/` 与 Release 中的三个 CSS 均为独立成品，不依赖额外资源；**无需**复制 `styles/` 或根目录的上游 `spring.css`。
4. 重启 Typora，在顶部 **主题** 菜单中选择 **Spring**、**Spring Light** 或 **Spring Dark**，并可直接打开 [`DEMO.md`](DEMO.md) 一键检验全部排版与交互效果。

---

## 浅色 / 深色实景展示

以下两张预览图均直接由仓库当前的 [`dist/spring-light.css`](dist/spring-light.css) 与 [`dist/spring-dark.css`](dist/spring-dark.css) 真实渲染生成，完整覆盖正文排版、搜索高亮、IEEE 引用悬浮窗、嵌套引用、GitHub Alerts、表格、代码块、任务列表、数学公式与 Mermaid 流程图（点击图片可查看 2x 高清原图）。

<table>
  <thead>
    <tr>
      <th width="50%">浅色模式 · <code>dist/spring-light.css</code></th>
      <th width="50%">深色模式（SprIngNight）· <code>dist/spring-dark.css</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href=".assets/preview-light.png"><img src=".assets/preview-light.png" alt="Spring 浅色主题预览" /></a></td>
      <td><a href=".assets/preview-dark.png"><img src=".assets/preview-dark.png" alt="Spring 深色主题预览" /></a></td>
    </tr>
  </tbody>
</table>

### 科研写作专项展示（复杂数学公式 &amp; Mermaid 图表）

专为硕博生与科研党高频写作场景优化：完整呈现多行对齐推导（ELBO 变分下界）、矩阵特征分解（`bmatrix`）、分段损失函数（Huber Loss `cases`）、贝叶斯后验与 AdamW 更新公式，以及三类科研高频 Mermaid 图表（方法框架流程图、可复现实验交互时序图、顶会投稿里程碑甘特图）。

<table>
  <thead>
    <tr>
      <th width="50%">科研浅色 · <code>dist/spring-light.css</code></th>
      <th width="50%">科研深色（SprIngNight）· <code>dist/spring-dark.css</code></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><a href=".assets/preview-research-light.png"><img src=".assets/preview-research-light.png" alt="Spring 科研浅色预览" /></a></td>
      <td><a href=".assets/preview-research-dark.png"><img src=".assets/preview-research-dark.png" alt="Spring 科研深色预览" /></a></td>
    </tr>
  </tbody>
</table>

| 对比维度 | 浅色版（`spring-light.css`） | 深色版（`spring-dark.css`） |
| --- | --- | --- |
| **背景与正文** | 护眼暖白 `#fffdf8` · 柔和墨灰 `#282c34` | 低眩光炭灰 `#232222` · 暖灰正文 `#c9c5bc` |
| **主题强调色** | 清新森绿（`#06621e` / `#2f845e` / `#3ea174`） | 嫩芽春绿（`#91D462` / `#5ea67c` / `#3ea174`） |
| **搜索匹配高亮** | 琥珀黄 `#ffe69a` / 当前焦点 `#ffb454` | 暖金黄 `#e7c76b` / 当前焦点 `#ffad4d` |
| **图片显示** | 保持原图亮度 | 自动柔和降亮（`brightness(0.9)`），悬停与打印恢复原亮度 |
| **界面与专注模式** | 统一选区与原生专注模式变量 | 完整适配侧边栏、源码模式、弹窗、光标与专注模式 |

---

## 个人版核心升级

- **三款开箱即用的独立成品（`dist/`）**：
  - `dist/spring.css`：自动跟随系统浅色/暗色模式（`prefers-color-scheme`）。
  - `dist/spring-light.css`：始终使用暖白浅色主题。
  - `dist/spring-dark.css`：始终使用暗色 **SprIngNight** 主题。
- **分层维护架构，零冲突同步上游**：
  - 根目录 [`spring.css`](spring.css) 保留上游原文件不直接修改。
  - 个人样式拆分为 [`styles/common.css`](styles/common.css)、[`styles/light.css`](styles/light.css)、[`styles/dark.css`](styles/dark.css) 三层，使用无第三方依赖的 `python scripts/build.py` 一键合成成品，并配有 `node scripts/verify-browser.mjs` 浏览器级样式校验。
- **长文阅读与编辑细节打磨**：
  - **搜索高亮清晰可见**：修复加粗、斜体、链接及代码块语法高亮区域被搜索命中时文字对比度不足的问题（`.md-search-hit` / `.md-search-select` / `.cm-searching` / 侧边栏搜索）。
  - **脚注与引用悬浮预览优化**：改为单层实底卡片（`opacity: 1`）与清晰配色，避免半透明叠加导致下方正文透出干扰阅读。
  - **专注模式与选区对齐**：完整接管 Typora 原生 `--text-color`、`--blur-text-color`、`--select-text-bg-color`、`--select-text-font-color`，深浅色下选中文字均清晰可读。
  - **PDF / 周报导出打印专项优化（`@media print`）**：哪怕在深色主题下导出 PDF 也会自动切回清爽白底深字；为标题、表格、代码块、数学公式、Alert 与 Mermaid 图添加防跨页撕裂规则；内置打印图片尺寸控制（`--hy-print-img-max-height: 22cm`、`max-width: 100%`、`object-fit: contain`），防止超高实验图被裁切。
  - **科研扩展能力**：支持 `<div class="img-grid">` 实验对比图自动并排与图注、`<div class="booktabs">` 学术三线表（可一键切全局）、可选 H2–H4 章节自动编号，以及一行开启的 **安静长文模式（Calm Mode）**。
  - **排版与组件增强**：`1280px` 舒适阅读宽度、多级嵌套引用层次、五色 GitHub Alert 提示块、优雅滚动条与表格视觉微调。

---

## 自定义配置与分层构建

所有个人修改均在 [`styles/`](styles/) 中进行（不要直接手改 `dist/`），修改后运行构建与校验：

```bash
python scripts/build.py
python scripts/build.py --check
node scripts/verify-browser.mjs
```

- **安静长文模式（Calm Mode）**：写几万字论文或大量公式时若希望彻底关闭悬停位移动效，取消注释 `styles/common.css` `:root` 中的 `--use-dynamic-effect: 0;` 后重新构建即可。
- **学术三线表（Booktabs）与章节自动编号**：单张表用 `<div class="booktabs">...</div>` 包裹即可生效；如需全局三线表或开启 H2–H4 自动编号（`1. / 1.1 / 1.1.1`），按 `styles/common.css` 注释取消对应区块并重新构建。
- **实验对比图并排**：将 2～3 张图片（`<figure>` 或 `<p>`）放入 `<div class="img-grid">...</div>` 即可自动等宽并排居中（示例见 [`DEMO.md`](DEMO.md)）。
- **字号、行高、宽度与打印图片限高**：调整 `styles/common.css` 中的 `--hy-font-ui`、`--hy-font-size`、`--hy-line-height`、`--hy-editor-max-width`、`--hy-print-img-max-height`。
- **配色与深色图片亮度**：调整 `styles/light.css` 和 `styles/dark.css` 中的变量（`--img-brightness` 默认 `0.9`）。
- 完整的构建脚本用法、浏览器检查及上游同步流程见 [个人版维护说明（CUSTOMIZATION.md）](CUSTOMIZATION.md)。

---

## 字体推荐与配置

> **懒人首选组合**：只需安装 **Roboto**（英文/数字）+ **Noto Sans SC** 或 **霞鹜文楷**（中文）+ **Fira Code**（代码）三套开源字体，即可直接还原预览图效果。

三款个人主题的正文、标题与界面统一使用本机字体栈（仓库不包含字体文件，也不会联网加载字体）；代码块沿用 `Fira Code → Consolas → … → monospace`：

```css
/* styles/common.css：当前正文与界面字体配置 */
:root {
    --hy-font-ui: "Roboto", "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", sans-serif;
}
```

| 字体 | 建议用途 | 许可证 | 官方获取入口 |
| --- | --- | --- | --- |
| **Roboto** | 英文正文、数字与界面 | [OFL 1.1](https://github.com/googlefonts/roboto-3-classic/blob/main/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Roboto) |
| **Noto Sans SC** | 简体中文正文（跨平台开源组合） | [OFL 1.1](https://github.com/google/fonts/blob/main/ofl/notosanssc/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) |
| **Fira Code** | 基础主题首选代码字体 | [OFL 1.1](https://github.com/tonsky/FiraCode/blob/master/LICENSE) | [官方发行页](https://github.com/tonsky/FiraCode/releases) |
| **Cascadia Code** | 代码块与源码模式 | [OFL 1.1](https://github.com/microsoft/cascadia-code/blob/main/LICENSE) | [官方发行页](https://github.com/microsoft/cascadia-code/releases) |
| **JetBrains Mono** | 代码字体的另一选择 | [OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt) | [官方网站](https://www.jetbrains.com/lp/mono/) |
| **Sarasa Mono SC（更纱等宽）** | 混合中英文代码与中文注释 | [OFL 1.1](https://github.com/be5invis/Sarasa-Gothic/blob/master/LICENSE) | [官方发行页](https://github.com/be5invis/Sarasa-Gothic/releases) |
| **Maple Mono CN / NF CN** | 带中文字符的等宽代码字体 | OFL 1.1 | [官方项目页](https://github.com/subframe7536/maple-font#readme) |
| **LXGW WenKai（霞鹜文楷）** | 偏手写风格的中文长文阅读 | [OFL 1.1](https://github.com/lxgw/LxgwWenKai/blob/master/OFL.txt) | [官方发行页](https://github.com/lxgw/LxgwWenKai/releases) |
| **PingFang SC（苹方）** | macOS 中文系统字体 | Apple 系统许可 | 随 macOS 内置 |
| **Microsoft YaHei UI** | Windows 中文系统字体 | Windows 字体许可 | 随 Windows 内置 |

---

<details>
<summary><strong>继承自原版的动态交互展示（点击展开动图）</strong></summary>

本主题完整保留上游 `SprInec/typora-spring-theme` 的灵动交互效果，并支持按需在变量中逐项开关：

<p align="center">
  <img src=".assets/h1.gif" width="48%" alt="一级标题交互" />
  <img src=".assets/paragraph_hover.gif" width="48%" alt="段落悬停反馈" />
</p>
<p align="center">
  <img src=".assets/alert.gif" width="48%" alt="Alert 提示块" />
  <img src=".assets/table.gif" width="48%" alt="表格交互" />
</p>

</details>

---

## 致谢与许可

- 原版主题作者：**[@SprInec](https://github.com/SprInec)**（[SprInec/typora-spring-theme](https://github.com/SprInec/typora-spring-theme)）。
- 更多致谢见 [credits.md](credits.md)。
- 遵循原仓库 [MIT License](LICENSE) 开源协议。
