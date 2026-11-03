> **Personal fork:** use the `hy-spring` branch. Install the three standalone themes from
> [`dist/`](dist/), and edit [`styles/`](styles/) for personal changes.
> The root `spring.css` is the unchanged upstream base.
> See [customization and upstream sync](CUSTOMIZATION.md).

<img src=".assets/logo-spring.png" alt="logo-spring" />

<p align="center">
    一款令人如沐春风的 Typora 灵动主题
    <br/>
    A refreshing and graceful Typora theme, like a gentle spring breeze.
    <br>
    Dynamic Interaction / Custom Configuration
    <br>
    动态交互 / 自定义配置
</p>
<p align="center">
  <a>
    <img src="https://img.shields.io/github/license/SprInec/typora-spring-theme" alt="GitHub license">
  </a>
  <a>
    <img src="https://badgen.net/github/stars/SprInec/typora-spring-theme?color=green&icon=github" alt="GitHub stars">
  </a>
  <a>
    <img src="https://badgen.net/github/commits/SprInec/typora-spring-theme?icon=github" alt="GitHub commits">
  </a>
  <a>
    <img src="https://badgen.net/github/watchers/SprInec/typora-spring-theme?color=purple" alt="GitHub watchers">
  </a>
  <a>
      <img src="https://img.shields.io/badge/language-CSS-purple" />
  </a>
</p>



<p align="center">
    <a>English</a>
    ·
    <a href="./README_cn.md">简体中文</a>
</p>

## Catalog
- [Preview](#Preview)
- [Feature](#Feature)
- [Custom Configuration](#Custom-Configuration)
- [Installation](#Installation)
- [Font recommendations and configuration](#font-recommendations-and-configuration)
- [Todo List](#Todo-List)
- [Credits](#Credits)
- [License](#License)

## Preview

![preview](.assets/preview.png)

## Feature

### 1. Spring-themed color palette

![image-20241113191409991](.assets/image-20241113191409991.png)

### 2. Flexible interaction with different effects

- h1

  <p align="center">
    <img src=".assets/h1.gif" width="100%" />
  </p>

- h2

  <p align="center">
    <img src=".assets/h2.gif" width="80%" />
  </p>

- h3 h4 h5 h6

  <p align="left">
    <img src=".assets/hx.gif" width="10%" />
  </p>

- Paragraph Hover Responsiveness

  <p align="center">
    <img src=".assets/paragraph_hover.gif" width="100%" />
  </p>

- Inline styles

  <p align="left">
    <img src=".assets/inline_en.gif" width="65%" />
  </p>

- Unordered list

  <p align="left">
    <img src=".assets/ul.gif" width="50%" />
  </p>

- Ordered List

  <p align="left">
    <img src=".assets/ol.gif" width="50%" />
  </p>

- Image

  <p align="center">
    <img src=".assets/image.gif" width="100%" />
  </p>

- Table

  <p align="center">
    <img src=".assets/table.gif" width="80%" />
  </p>

- Code block

  <p align="center">
    <img src=".assets/code_block.gif" width="70%" />
  </p>

- blockquote

  <p align="center">
    <img src=".assets/blockquote.gif" width="70%" />
  </p>

- Alert

  <p align="center">
    <img src=".assets/alert.gif" width="70%" />
  </p>

### 3. Typora interface with unified style

<img align="center" src=".assets/sys.gif" style="zoom:50%;" />

## Custom Configuration

### Interaction Effect Configuration

You can customize the interactive effects of any element to be turned on or off as needed. The specific operations are as follows:

1. Read the available interactive variables in the upstream `spring.css`, then add your chosen overrides inside `:root` in `styles/common.css`;

2. Set the corresponding variable to `0` (off) or `1` (on), then run `python scripts/build.py` and reinstall the generated themes from `dist/`;

3. Restart Typora to apply the changes.

> [!important]
>
> 1. To enable interactive effects, first set `--use-dynamic-effect` to `1`, and then configure it for specific types.
>
> 2. To turn off all interactive effects, simply set `–use-dynamic-effect` to `0`. (`–use-dynamic-effect` cannot disable some interactive effects of ordered lists. If you want to turn off all interactive effects of ordered lists, set `--list-ol-text-style` to `italic`)

|           Type           |                   Variable Name                   |          Values           |                        Function                         |   Default   |
| :----------------------: | :-----------------------------------------------: | :-----------------------: | :-----------------------------------------------------: | :---------: |
| **Global Configuration** |              `--use-dynamic-effect`               |           0 / 1           | Turn off all interactive effect/ Use interactive effect |      1      |
|            H1            |                `--h1-hover-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|            H2            |                `--h2-after-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|       H3 H4 H5 H6        |               `--h3-6-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |
|        Paragraph         |                `--p-hover-effect`                 |           0 / 1           |                      Close / Open                       |      1      |
|          Image           |               `--img-hover-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|        Blockquote        |            `--blockquote-hover-effect`            |           0 / 1           |                      Close / Open                       |      1      |
|          Alert           |              `--alert-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |
|          Strong          |              `--strong-hover-effect`              |           0 / 1           |                      Close / Open                       |      1      |
|          Italic          |                `--em-hover-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|        Underline         |                `--u-hover-effect`                 |           0 / 1           |                      Close / Open                       |      1      |
|       Marked text        |               `--mark-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |
|       Deleted text       |               `--del-hover-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|       Inline code        |               `--code-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |
|        Code block        |              `--fence-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |
|           List           | `--list-marker-effect`<br/>`--list-ol-text-style` | 0 / 1<br/>italic / normal |              Close / Open<br>Close / Open               | 1<br>normal |
|         Divider          |               ` --hr-hover-effect`                |           0 / 1           |                      Close / Open                       |      1      |
|          Table           |              `--table-hover-effect`               |           0 / 1           |                      Close / Open                       |      1      |

## Installation

1. Clone the personal branch, or download this branch as a ZIP from GitHub.

    ```bash
    git clone --branch hy-spring https://github.com/Fona1347/typora-spring-theme.git
    ```

2. Click ‘Themes’ in the menu of Typora, and click the ‘Open Theme Folder’ button to open it on the ‘Themes’ page.

3. Copy the theme file you want from `dist/` into the opened Typora theme folder:
    - `dist/spring.css`: automatically follows the system light/dark mode.
    - `dist/spring-light.css`: always uses the light Spring theme.
    - `dist/spring-dark.css`: always uses the dark SpringNight theme.

   The generated files are committed and ready to install. To rebuild them after
   editing `styles/`, run `python scripts/build.py`. Archived font experiments are
   kept under `legacy/font-variants/` and are not maintained.

4. Restart Typora, and then you can choose **Spring**, **Spring Light**, or **Spring Dark** in the ‘Themes’ list.

## Font recommendations and configuration

All three personal themes use the following stack for body text, headings, and the UI.
Code retains the base theme's `Fira Code → Consolas → … → monospace` stack. The themes
reference installed fonts only: this repository bundles no font files and loads no
remote fonts. The files in `legacy/font-variants/` are historical snapshots; installing
them is unnecessary to use this configuration.

```css
/* styles/common.css: current body and UI configuration */
:root {
    --hy-font-ui: "Roboto", "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", sans-serif;
}
```

Fallback happens per character. Latin text and digits prefer Roboto; Chinese text can
use PingFang on macOS, then Microsoft YaHei UI or Noto Sans SC when PingFang is absent
on Windows. Use the installed font family name, which can differ from the file name.

| Font | Suggested use | License | Official download or availability |
| --- | --- | --- | --- |
| Roboto | Latin body text, digits, and UI | Current releases: [OFL 1.1](https://github.com/googlefonts/roboto-3-classic/blob/main/OFL.txt); some older releases: [Apache 2.0](https://github.com/google/roboto/blob/main/LICENSE). Check the downloaded package. | [Google Fonts](https://fonts.google.com/specimen/Roboto) |
| Noto Sans SC | Simplified Chinese body text; a portable open-source pairing | [OFL 1.1](https://github.com/google/fonts/blob/main/ofl/notosanssc/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) |
| Fira Code | The base theme's preferred code font | [OFL 1.1](https://github.com/tonsky/FiraCode/blob/master/LICENSE) | [Official releases](https://github.com/tonsky/FiraCode/releases) |
| Cascadia Code | Code blocks and source mode; used by the historical font variants | [OFL 1.1](https://github.com/microsoft/cascadia-code/blob/main/LICENSE) | [Official releases](https://github.com/microsoft/cascadia-code/releases) |
| JetBrains Mono | An alternative code font | [OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt) | [Official website](https://www.jetbrains.com/lp/mono/) |
| Sarasa Mono SC | Mixed Latin/Chinese code and comments; choose the Mono SC package | [OFL 1.1](https://github.com/be5invis/Sarasa-Gothic/blob/master/LICENSE) | [Official releases](https://github.com/be5invis/Sarasa-Gothic/releases) |
| Maple Mono CN / NF CN | Monospaced code with Chinese glyphs; NF variants also include icons | OFL 1.1; retain the license files supplied with the chosen release | [Official project and download guide](https://github.com/subframe7536/maple-font#readme) |
| LXGW WenKai | An optional handwritten-style Chinese reading face | [OFL 1.1](https://github.com/lxgw/LxgwWenKai/blob/master/OFL.txt) | [Official releases](https://github.com/lxgw/LxgwWenKai/releases) |
| PingFang SC | Chinese system font on macOS | Proprietary; governed by the [Apple software license](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf) | Supplied through macOS; see [Apple's font list](https://support.apple.com/en-us/122869). No Windows font package is provided here. |
| Microsoft YaHei UI | Chinese system font on Windows | Proprietary; governed by [Windows font licensing](https://learn.microsoft.com/en-us/typography/fonts/font-faq) | Supplied with applicable Windows installations; see [Microsoft's font page](https://learn.microsoft.com/en-us/typography/font-list/microsoft-yahei) |

Extract an official open-source font package, install the desktop `.ttf` / `.otf`
files you need, and restart Typora. Installing every recommendation is unnecessary;
choose one body pairing and one code family. System-font usage rights do not grant
redistribution rights for PingFang or Microsoft YaHei font files. This theme's MIT
license does not replace any font license. If distributing OFL fonts separately in
the future, include their copyright and license notices and observe conditions such
as Reserved Font Names.

To prefer an open-source Chinese font, change the variable in `styles/common.css`:

```css
:root {
    --hy-font-ui: "Roboto", "Noto Sans SC", sans-serif;
}
```

Code typography can be selected independently. For example, add this to
`styles/common.css`:

```css
#write code,
#write pre,
.md-fences,
.CodeMirror,
.CodeMirror pre,
#typora-source,
#typora-source .CodeMirror {
    font-family: "Cascadia Code", "Sarasa Mono SC", Consolas, monospace;
}
```

After editing, run `python scripts/build.py` and `python scripts/build.py --check`,
then copy the generated themes from `dist/` to Typora. See the
[customization guide](CUSTOMIZATION.md) for the complete workflow.

## Todo List

- [x] Light theme SprIng
- [x] Smart Interaction
- [x] Interactive animation configuration
- [ ] HTML export configuration
- [ ] Document layout configuration
- [x] Dark theme SprIngNight
- [ ] Custom color palette
- [ ] Custom style
- [ ] A variety of interactive effects to choose from
- [ ] [typora-plugin](https://github.com/obgnail/typora_plugin) unified style adaptation

## [Credits](credits.md)

This project is based on *typora-mo-theme* for secondary development of visual and interactive design. The [template](template/) comes from *typora-theme-Jinxiu-template*. 

- [MarMomento/typora-mo-theme](https://github.com/MarMomento/typora-mo-theme)
- [Sophomoresty/typora-theme-Jinxiu](https://github.com/Sophomoresty/typora-theme-Jinxiu)

## License

This project is based on the MIT open source protocol. You can freely copy, modify and distribute the code of this project, but please keep the original author's [LICENSE](LICENSE).

<p align="center">
    <img src="https://api.star-history.com/svg?repos=SprInec/typora-spring-theme&type=Date"/>
</p>
