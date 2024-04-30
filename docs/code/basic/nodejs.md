# Nvm 配置流程
## 1.Nvm 是什么

nvm 是可以帮助我们快速切换 node 版本的工具，安装 nvm 之前，请确保 Windows 上没有任何 nodejs 环境。

## 2.下载 Nvm 安装包

### 2.1 Windows 安装 Nvm

[Nvm github release](https://github.com/coreybutler/nvm-windows/releases)
![nvm_list](/code/basic/nvm/nvm_list.png)

### 2.2 Linux(以Ubuntu举例) 安装 Nvm

[Nvm github readme](https://github.com/nvm-sh/nvm)

```
wget -qO- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.7/install.sh | bash
```
安装完后在 `.bashrc` 等配置文件中会出现以下配置，如果没有自己新增并 `source ~/.bashrc`使配置生效
```
export NVM_DIR="$([ -z "${XDG_CONFIG_HOME-}" ] && printf %s "${HOME}/.nvm" || printf %s "${XDG_CONFIG_HOME}/nvm")"
[ -s "$NVM_DIR/nvm.sh" ] && \. "$NVM_DIR/nvm.sh" # This loads nvm
```

## 3. 使用 Nvm
### 3.1 Windows下的命令

```bash
nvm ls                        // 查看目前已经安装的版本
nvm list available            // 显示可下载版本的部分列表
nvm install/uninstall 20.12.2 // 安装/删除指定的版本的nodejs
nvm use 20.12.2               // 使用指定版本的nodejs
```

### 3.2 Linux下的命令

```bash
nvm ls                        // 查看目前已经安装的版本
nvm ls-remote                 // 显示可下载版本的部分列表
nvm install/uninstall 20.12.2 // 安装/删除指定的版本的nodejs
nvm use 20.12.2               // 使用指定版本的nodejs
```

### 3.3 第一次安装流程：
```bash
nvm ls-remote
nvm install 20.12.2
nvm use 20.12.2
```

## 4.Node可能遇到的问题
### 4.1 系统禁止运行脚本
::: danger 报错
无法加载文件 C:\Program Files\nodejs\npm.ps1，因为在此系统上禁止运行脚本。npm.ps1 cannot be loaded
:::

这个错误是因为系统禁止运行 `PowerShell` 脚本，以管理员身份打开 `PowerShell` 并执行以下命令: `Set-ExecutionPolicy RemoteSigned` ，如果询问是否更改，输入 "Y" 确认即可
