# Astro

## Astro 是什么
Astro是一个JavaScript web框架，针对构建快速、内容驱动的网站进行了优化。
## 如何使用
[官网链接](https://astro.build/)

[主题链接](https://astro.build/themes/)

可以直接去找心仪的主题，下载下来下载依赖跑就行

## Cloudflare Pages 部署
个人推荐使用 `Cloudflare Pages`，过程简单，且不像 `Github Pages` 一样容易被墙，访问稳定
[部署教程](https://docs.astro.build/zh-cn/guides/deploy/cloudflare/)

## Github Pages 部署
如果你还是想要用 `Github Pages`，这是流程（官方的教程有点问题）

### 设置 astro.config.mjs
```
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://astronaut.github.io',
  base: 'my-repo',
})

// site 设置为 https://<username>.github.io
// base 一般为你版本库的名称，具体看 Github Pages 给你的路径

// 不需要配置 base 的情况：使用了自定义域名；或者仓库名为<YOUR_USERNAME>.github.io，此时部署的网站url无仓库名
```

### 新建 Github workflows
在项目中创建 `.github/workflows/` 目录，并创建一个新文件 `deploy.yml`，写入以下信息
```yml
name: GitHub Pages Astro CI

on:
  # 每次推送到 `main` 分支时触发这个“工作流程”
  # 如果你使用了别的分支名，请按需将 `main` 替换成你的分支名
  push:
    branches: [ main ]
  # 允许你在 GitHub 上的 Actions 标签中手动触发此“工作流程”
  workflow_dispatch:

# 允许 job 克隆 repo 并创建一个 page deployment
permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout your repository using git
        uses: actions/checkout@v3
      - name: Install, build, and upload your site
        uses: withastro/action@v0

  deploy:
    needs: build
    runs-on: ubuntu-latest
    environment:
      name: github-pages
      url: ${{ steps.deployment.outputs.page_url }}
    steps:
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v1
```

### 配置 Github Pages
* 在版本库中跳转到 `Settings` 选项中并找到 `Pages` 部分
* 选择 `Github Actions` 作为 `Source`
* 提交上一步步骤写的 `workflow file`，推送到版本库

此时现在网站就会自动完成发布，当你将新的变动推送到版本库时，`Github` 会自动进行部署