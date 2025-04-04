# 贡献指南

感谢你考虑为 VueDir 做出贡献！在提交你的贡献之前，请花点时间阅读以下指南。

## 🛠️ 环境准备

### pnpm 安装

本项目**仅支持使用 pnpm** 作为包管理工具。请确保你已经安装了最新版本的 pnpm：

```bash
# 使用 npm 安装
npm install -g pnpm

# 使用 Homebrew 安装 (macOS)
brew install pnpm

# 使用 Scoop 安装 (Windows)
scoop install pnpm

# 使用 Chocolatey 安装 (Windows)
choco install pnpm

# 使用官方安装脚本 (Linux/macOS)
curl -fsSL https://get.pnpm.io/install.sh | sh -
```

更多安装方式请参考 [pnpm 官方安装指南](https://pnpm.io/zh/installation)。

## 🌟 开发流程

1. Fork 这个仓库
2. 克隆你 fork 的仓库到本地：

```bash
git clone <your-fork-url>
cd vuedir
```

3. 安装依赖：

```bash
pnpm install
```

4. 创建新的分支：

```bash
git checkout -b feat/your-feature
# 或
git checkout -b fix/your-bug-fix
```

5. 启动开发环境：

```bash
pnpm dev
```

这将同时启动：

- Core 库的构建监听（自动重新构建）
- Play 项目的开发服务器（用于测试和开发）
- 文档网站的开发服务器

## 📝 代码规范

### Prettier 代码格式化

本项目使用 Prettier 来保持一致的代码风格。配置文件位于项目根目录的 `.prettierrc`

格式化你的代码：

```bash
# 格式化所有文件
pnpm format

# 检查代码格式是否符合规范
pnpm format:check
```

**编辑器设置**

我们建议在你的编辑器中安装 Prettier 插件，并启用保存时自动格式化：

- **VS Code**: 安装 [Prettier 扩展](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)，并在设置中配置 prettier 配置文件路径。
- **WebStorm/IntelliJ**: 在设置中启用 Prettier 集成

### 命名规范

- 文件名：使用 kebab-case（例如：`v-focus.ts`）
- 组件名：使用 PascalCase（例如：`VFocus`）
- 变量名：使用 camelCase（例如：`focusElement`）

### TypeScript

- 所有的新代码都应该使用 TypeScript 编写
- 确保添加适当的类型注解
- 避免使用 `any` 类型

### 提交规范

提交信息应该遵循 [Conventional Commits](https://www.conventionalcommits.org/) 规范：

```bash
feat: add v-focus directive
fix: handle edge case in v-focus
docs: update v-focus documentation
style: format code
refactor: optimize v-focus performance
test: add v-focus unit tests
chore: update dependencies
```

## 🔍 提交 PR

1. 确保你的代码通过了所有测试
2. 更新相关的文档
3. 提交你的改动：

```bash
git add .
git commit -m "feat: add new feature"
git push origin feat/your-feature
```

4. 创建一个 Pull Request
5. 在 PR 描述中：
   - 描述你解决的问题
   - 描述你的解决方案
   - 提供相关的截图（如果适用）
   - 标注是否需要更新文档

## 📋 开发清单

- [ ] 代码符合项目规范
- [ ] 添加/更新测试用例
- [ ] 更新相关文档
- [ ] 本地测试通过
- [ ] 提交信息符合规范

## 🤝 行为准则

请确保你的行为符合我们的行为准则：

1. 尊重每一位贡献者
2. 接受建设性的批评
3. 关注问题本身
4. 保持专业和包容的交流氛围

## 📝 报告问题

报告问题时，请包含：

1. 问题的详细描述
2. 复现步骤
3. 预期行为
4. 实际行为
5. 相关的错误信息
6. 运行环境信息

## 🎉 致谢

再次感谢你的贡献！你的参与对于改进 VueDir 项目非常重要。
