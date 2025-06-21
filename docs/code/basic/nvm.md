# Nvm 配置流程
## 1.Nvm 是什么

nvm 是可以帮助我们快速切换 node 版本的工具，安装 nvm 之前，请确保 Windows 上没有任何 nodejs 环境。

## 2.下载 Nvm 安装包

### 2.1 Windows 安装 Nvm

[Nvm github release](https://github.com/coreybutler/nvm-windows/releases)
![nvm_list](/code/basic/nvm/nvm_list.png)
如果nvm官方不提供exe，访问[nvm windows](https://github.com/coreybutler/nvm-windows/releases)

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

## 4.Nvm可能遇到的问题
### 4.1 安装 nodejs 版本超时
给 `nvm` 配置 `npm` 镜像即可，
`nvm settings.txt` 的文件路径在 `C:\Users\<username>\AppData\Roaming\nvm\settings.txt`

加入以下内容
```
node_mirror: https://npmmirror.com/mirrors/node/
npm_mirror: https://npmmirror.com/mirrors/npm/
```
