# Spring 个人版维护说明

个人版分支：`hy-spring`。上游：[SprInec/typora-spring-theme](https://github.com/SprInec/typora-spring-theme)。

## 文件分工

| 文件 | 用途 |
| --- | --- |
| `spring.css` | 上游原文件，不在这里修改个人风格 |
| `styles/common.css` | 公共排版、字号、编辑区宽度、引用块、脚注与滚动条 |
| `styles/light.css` | 个人浅色配色 |
| `styles/dark.css` | 个人深色配色、专注模式、图片亮度、代码与界面样式 |
| `dist/spring.css` | 生成的自动主题，跟随系统浅色/深色 |
| `dist/spring-light.css` | 生成的固定浅色主题 |
| `dist/spring-dark.css` | 生成的固定深色主题 |
| `upstream.json` | 已核对的上游提交及基础 CSS 校验值 |
| `legacy/font-variants/` | 已归档的三份字体实验版本，不再维护或安装 |

安装时只复制 `dist/` 下的三份 CSS 到 Typora 主题文件夹。文件都是独立成品，
不依赖 `@import` 或额外资源，不需要将 `styles/` 放入 Typora。
根目录的 `spring.css` 是上游基础，并不是个人自动主题的安装文件。

## 调整与构建

在 `styles/` 修改源文件，然后在仓库根目录运行：

```shell
python scripts/build.py
python scripts/build.py --check
```

构建只使用 Python 3.10 或更高版本的标准库，无需安装依赖。三个成品会一同生成；不要手改 `dist/`。

- 字号、行高、最大宽度：`common.css` 中的 `--hy-font-size`、
  `--hy-line-height`、`--hy-editor-max-width`。
- 浅色颜色：`light.css` 的变量。
- 深色正文：`dark.css` 的 `--body-text-color`（当前 `#c9c5bc`）。
- 深色图片：`--img-brightness`（当前 `0.9`）；悬停恢复原亮度，打印不调暗。
- 专注模式：深色层中 Typora 原生的 `--text-color`、`--blur-text-color`、
  `--select-text-bg-color`、`--select-text-font-color` 必须与主题配色配合。

加载顺序为“上游 → 公共 → 浅色 → 深色”。自动主题将同一份深色层包裹在
`prefers-color-scheme: dark` 中，固定深色主题直接加载它，因此只需修改一处。
这里使用普通 CSS 覆写顺序，没有引入会改变 `!important` 优先级的 `@layer`。

## 同步上游

远程 `origin` 指向个人 fork，`upstream` 指向原作者；`main` 保持干净，
个人工作在跟踪 `origin/hy-spring` 的 `hy-spring` 分支进行。
先提交当前修改，确认 `git status` 干净，再执行：

```shell
git fetch upstream
git switch main
git merge --ff-only upstream/main
git push origin main
git switch hy-spring
git merge upstream/main
```

如果合并有冲突，先解决并完成合并。保留上游 `spring.css`，将需要的个人适配放在
`styles/`，不要用整份旧主题覆盖上游。随后核对变化并更新记录、构建：

```shell
python scripts/build.py --record-upstream upstream/main
python scripts/build.py --check
node scripts/verify-browser.mjs
git add upstream.json styles dist
git commit -m "Refresh personal themes after upstream update"
git push
```

记录命令会验证根目录 `spring.css` 与指定提交完全一致；未经记录的基础 CSS 改动会
阻止构建，避免误把个人修改混入上游层。浏览器检查需要 Node.js 22 或更高版本及
Chrome/Edge，也可以通过 `--browser` 指定 Chromium 可执行文件。

无 Git 文本冲突不代表视觉兼容。升级后还应在 Typora 检查浅色/深色、专注与选区、
引用与提示块、代码、侧边栏、图片悬停和打印。公共兼容性修复可以从最新上游
另开短分支提 PR；不要直接拿整个个人风格分支向上游提 PR。

## 历史与许可证

`15f8951` 保存了分层前的六份主题及深色修复。字体实验另存于 `legacy/`。
原作者的 MIT `LICENSE` 与版权声明保持在仓库中，发布生成主题时一并保留。
