# Npm (Node Package Manager)
## 1.Npm 是什么
`npm` 通常称为 `node` 包管理器，主要功能就是管理 `node` 包，包括：安装、卸载、更新、查看、搜索、发布等。
## 2.Npm可能遇到的问题
### 2.1 系统禁止运行脚本
::: danger 报错
无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。npm.ps1 cannot be loaded
:::

这个错误是因为系统禁止运行 `PowerShell` 脚本，以管理员身份打开 `PowerShell` 并执行以下命令: `Set-ExecutionPolicy RemoteSigned` ，如果询问是否更改，输入 "Y" 确认即可

### 2.2 npm install 时一直卡在 idealTree: sill idealTree buildDeps

#### 方案一：采用新的镜像地址
在 `cmd` 中输入 `npm config set registry https://registry.npmmirror.com` 后重试
