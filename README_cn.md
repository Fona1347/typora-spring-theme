> **个人维护版：** 使用 `hy-spring` 分支，从 [`dist/`](dist/) 安装三款独立主题，
> 在 [`styles/`](styles/) 调整个人风格。根目录 `spring.css` 保持上游原样。
> 构建与同步方法见[个人版维护说明](CUSTOMIZATION.md)。

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
    <img src="https://badgen.net/github/watchers/SprInec/typora-spring-theme?color=purple&icon=github" alt="GitHub watchers">
  </a>
  <a>
      <img src="https://img.shields.io/badge/language-CSS-purple" />
  </a>
</p>



<p align="center">
    <a href="./README.md">English</a>
    ·
    <a>简体中文</a>
</p>

## 目录
- [主题预览](#主题预览)
- [设计元素](#设计元素)
- [自定义配置](#自定义配置)
- [快速安装与应用](#快速安装与应用)
- [字体推荐与配置](#字体推荐与配置)
- [Todo List](#Todo-List)
- [致谢](#致谢)
- [许可](#许可)

## 主题预览

<img src=".assets/preview_cn.png" alt="preview_cn"/>

## 设计元素

### 1. 充满春天气息的配色卡

![image-20241113191409991](.assets/image-20241113191409991.png)

### 2. 不同效果的灵动交互

- 一级标题 h1

<p align="center">
    <img src=".assets/h1.gif" width="100%" />
</p>

- 二级标题 h2

<p align="center">
    <img src=".assets/h2.gif" width="80%" />
</p>

- 三、四、五、六级标题 h3 h4 h5 h6

<p align="left">
    <img src=".assets/hx.gif" width="10%" />
</p>

- 段落悬停响应

 <p align="center">
    <img src=".assets/paragraph_hover.gif" width="100%" />
 </p>

- 内联样式

<p align="left">
    <img src=".assets/inline.gif" width="47%" />
</p>

- 无序列表

<p align="left">
    <img src=".assets/ul.gif" width="50%" />
 </p>

- 有序列表

<p align="left">
    <img src=".assets/ol.gif" width="50%" />
</p>

- 图片

 <p align="center">
    <img src=".assets/image.gif" width="100%" />
</p>

- 表格

<p align="center">
    <img src=".assets/table.gif" width="80%" />
</p>

- 代码块

<p align="center">
    <img src=".assets/code_block.gif" width="70%" />
</p>

- 引用块

<p align="center">
    <img src=".assets/blockquote.gif" width="70%" />
</p>

- 警告框

<p align="center">
    <img src=".assets/alert.gif" width="70%" />
</p>

### 3. 风格统一的 Typora 界面

<img align="center" src=".assets/sys.gif" style="zoom:50%;" />

## 自定义配置

### 交互效果配置

可根据需求自定义开启或关闭任意元素的交互效果，具体操作如下：

1. 在上游 `spring.css` 开头查看可用交互变量，在 `styles/common.css` 的 `:root` 中添加需要覆写的变量；
2. 将变量设为 `0`（关闭）或 `1`（开启），运行 `python scripts/build.py`，再从 `dist/` 安装生成的主题；
3. 重启 Typora 即可应用更改。

> [!important]
>
> 1. 若要开启交互效果，请首先将 `–use-dynamic-effect` 设置为 `1`, 然后在针对具体类型进行配置。
> 2. 若要关闭全部的交互效果，直接将 `–use-dynamic-effect` 设置为 `0` 即可。（`–use-dynamic-effect`无法禁用有序列表的部分交互效果，若想要关闭有序列表的全部交互效果，请将 `--list-ol-text-style` 设置为 `italic`）

|         类型         |                      变量名                      |            值            |              功能               |    默认     |
| :------------------: | :----------------------------------------------: | :----------------------: | :-----------------------------: | :---------: |
|     **全局配置**     |              `--use-dynamic-effect`              |          0 / 1           | 关闭全部交互效果 / 使用交互效果 |      1      |
|       一级标题       |               `--h1-hover-effect`                |          0 / 1           |           关闭 / 开启           |      1      |
|       二级标题       |               `--h2-after-effect`                |          0 / 1           |           关闭 / 开启           |      1      |
| 三、四、五、六级标题 |              `--h3-6-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|         段落         |                `--p-hover-effect`                |          0 / 1           |           关闭 / 开启           |      1      |
|         图片         |               `--img-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|        引用块        |           `--blockquote-hover-effect`            |          0 / 1           |           关闭 / 开启           |      1      |
|        提示框        |              `--alert-hover-effect`              |          0 / 1           |           关闭 / 开启           |      1      |
|         粗体         |             `--strong-hover-effect`              |          0 / 1           |           关闭 / 开启           |      1      |
|         斜体         |               `--em-hover-effect`                |          0 / 1           |           关闭 / 开启           |      1      |
|        下划线        |                `--u-hover-effect`                |          0 / 1           |           关闭 / 开启           |      1      |
|         高亮         |              `--mark-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|        删除线        |               `--del-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|      内联代码块      |              `--code-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|        代码块        |              `--fence-hover-effect`              |          0 / 1           |           关闭 / 开启           |      1      |
|         列表         | `--list-marker-effect`<br>`--list-ol-text-style` | 0 / 1<br>italic / normal |   关闭 / 开启<br>关闭 / 开启    | 1<br>normal |
|        分割线        |               ` --hr-hover-effect`               |          0 / 1           |           关闭 / 开启           |      1      |
|         表格         |              `--table-hover-effect`              |          0 / 1           |           关闭 / 开启           |      1      |

## 快速安装与应用

1. 在终端克隆个人分支，或在 GitHub 下载该分支的 ZIP 压缩包。

    ```bash
    git clone --branch hy-spring https://github.com/Fona1347/typora-spring-theme.git
    ```

2. 在 Typora 的左上角菜单中点击 ‘主题’，在 ‘主题’ 页面中点击打开 ‘主题文件夹’ 按钮。
3. 从 `dist/` 将需要使用的主题文件复制到打开的 Typora 主题文件夹中：
    - `dist/spring.css`：自动跟随系统浅色/暗色模式。
    - `dist/spring-light.css`：始终使用浅色 Spring 主题。
    - `dist/spring-dark.css`：始终使用暗色 SpringNight 主题。

   仓库已包含生成的成品，可以直接安装。修改 `styles/` 后运行
   `python scripts/build.py` 重新生成。三个字体实验版保存在
   `legacy/font-variants/`，不再维护或安装。
4. 重启 Typora，然后主题列表中就可以选择使用 **Spring**、**Spring Light** 或 **Spring Dark** 主题。

## 字体推荐与配置

三款个人主题的正文、标题与界面统一使用下面的字体顺序；代码字体仍沿用基础主题的
`Fira Code → Consolas → … → monospace`。主题只引用本机字体，仓库不包含字体文件，
也不会联网加载字体。`legacy/font-variants/` 是历史快照，无需安装它们来启用此配置。

```css
/* styles/common.css：当前正文与界面配置 */
:root {
    --hy-font-ui: "Roboto", "PingFang SC", "Microsoft YaHei UI", "Noto Sans SC", sans-serif;
}
```

字体按字符选择：英文与数字优先 Roboto；中文在 macOS 上可用苹方，在没有苹方的
Windows 上依次尝试微软雅黑 UI、Noto Sans SC。字体名需要与系统中安装的字体家族名称一致，
并不等同于字体文件名。

| 字体 | 建议用途 | 许可证 | 官方下载或获取入口 |
| --- | --- | --- | --- |
| Roboto | 英文正文、数字和界面 | 新版 [OFL 1.1](https://github.com/googlefonts/roboto-3-classic/blob/main/OFL.txt)；部分旧版为 [Apache 2.0](https://github.com/google/roboto/blob/main/LICENSE)，以下载包为准 | [Google Fonts](https://fonts.google.com/specimen/Roboto) |
| Noto Sans SC | 简体中文正文；跨平台开源字体组合 | [OFL 1.1](https://github.com/google/fonts/blob/main/ofl/notosanssc/OFL.txt) | [Google Fonts](https://fonts.google.com/specimen/Noto+Sans+SC) |
| Fira Code | 基础主题首选的代码字体 | [OFL 1.1](https://github.com/tonsky/FiraCode/blob/master/LICENSE) | [官方发行页](https://github.com/tonsky/FiraCode/releases) |
| Cascadia Code | 代码块、源码模式；历史字体版采用的代码字体 | [OFL 1.1](https://github.com/microsoft/cascadia-code/blob/main/LICENSE) | [官方发行页](https://github.com/microsoft/cascadia-code/releases) |
| JetBrains Mono | 代码字体的另一选择 | [OFL 1.1](https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt) | [官方网站](https://www.jetbrains.com/lp/mono/) |
| Sarasa Mono SC（更纱等宽） | 混合中英文的代码和中文注释；选择 Mono SC 字体包 | [OFL 1.1](https://github.com/be5invis/Sarasa-Gothic/blob/master/LICENSE) | [官方发行页](https://github.com/be5invis/Sarasa-Gothic/releases) |
| Maple Mono CN / NF CN | 带中文字符的等宽代码字体；NF 变体另含图标 | OFL 1.1；保留所选发行包中的许可文件 | [官方项目与下载说明](https://github.com/subframe7536/maple-font#readme) |
| LXGW WenKai（霞鹜文楷） | 偏手写风格的中文阅读；作为可选正文风格 | [OFL 1.1](https://github.com/lxgw/LxgwWenKai/blob/master/OFL.txt) | [官方发行页](https://github.com/lxgw/LxgwWenKai/releases) |
| PingFang SC（苹方） | macOS 的中文系统字体 | 非开源；按 [Apple 系统许可](https://www.apple.com/legal/sla/docs/macOSTahoe.pdf)使用 | 随 macOS 获取，参见 [Apple 字体列表](https://support.apple.com/en-us/122869)；不提供 Windows 字体包 |
| Microsoft YaHei UI（微软雅黑 UI） | Windows 的中文系统字体 | 非开源；按 [Windows 字体许可](https://learn.microsoft.com/en-us/typography/fonts/font-faq)使用 | 随相应 Windows 系统获取，参见 [微软字体页面](https://learn.microsoft.com/en-us/typography/font-list/microsoft-yahei) |

下载开源字体后，解压并安装所需的桌面 `.ttf` / `.otf` 文件，再重启 Typora。
不必安装推荐表中的所有字体；正文与代码各选择一套即可。苹方、微软雅黑的系统使用权
不等于字体文件再分发权；主题的 MIT 许可证也不替代字体各自的许可。若将来另行分发
OFL 字体，应随附版权与许可文本，并遵守保留字体名称等条件。

希望优先使用开源中文字体时，可以把 `styles/common.css` 中的变量改为：

```css
:root {
    --hy-font-ui: "Roboto", "Noto Sans SC", sans-serif;
}
```

代码字体可独立选择，例如将下面这段添加到 `styles/common.css`：

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

修改后运行 `python scripts/build.py` 和 `python scripts/build.py --check`，
再把 `dist/` 中的主题复制到 Typora。完整流程见[个人版维护说明](CUSTOMIZATION.md)。

## Todo List

- [x] 浅色主题 SprIng
- [x] 灵动交互
- [x] 交互效果配置
- [ ] HTML导出配置
- [ ] 文档排版配置
- [x] 暗色主题 SprIngNight
- [ ] 自定义配色卡
- [ ] 自定义样式
- [ ] 可供选择的多种交互效果
- [ ] [typora-plugin](https://github.com/obgnail/typora_plugin) 统一风格适配 

## [致谢](credits.md)

本项目基于 *typora-mo-theme* 进行了视觉与交互设计的二次开发，[template](template/) 来源于 *typora-theme-Jinxiu/template*。

- [MarMomento/typora-mo-theme](https://github.com/MarMomento/typora-mo-theme)
- [Sophomoresty/typora-theme-Jinxiu](https://github.com/Sophomoresty/typora-theme-Jinxiu)

## 许可

 该项目基于 MIT 开源协议，您可以自由地复制、修改和分发本项目的代码，但请保留原作者的[版权声明](LICENSE)。

<p align="center">
    <img src="https://api.star-history.com/svg?repos=SprInec/typora-spring-theme&type=Date"/>
</p>
