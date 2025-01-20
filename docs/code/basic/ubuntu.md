# Ubuntu 里的一些配置流程
## 1. 开启 ssh 登录

### 1.1 安装 ssh

```
sudo apt upgrade
sudo apt install openssh-client
sudo apt install openssh-server
```
如果安装失败，尝试 `sudo apt install ssh`

### 1.2 配置 ssh 文件

使用 `sudo vim /etc/ssh/sshd_config` 打开配置文件，找到并修改以下三项

```bash
# 取消注释并将端口改为 22
Port 22
# 允许密码登录
PasswordAuthentication yes
# 默认为 prohibit-password， root账户默认都是使用 RSA 登录，如果想要使用密码，就改成 yes
PermitRootLogin yes
```

### 1.3 重启 ssh 服务

```bash
sudo service ssh restart
```

## 2. 端口
### 2.1 查询端口占用
```bash
# 查看所有端口
sudo netstat -tuln
# 指定某个端口
sudo netstat -tuln | grep <端口号>

## 使用netstat的替代品ss，功能更强
# 查看所有端口
sudo ss -tuln
# 指定某个端口
sudo ss -tuln | grep <端口号>
```
