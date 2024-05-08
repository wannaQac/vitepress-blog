# Ubuntu 里的一些配置流程
## 1.开启 ssh 登录

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
Port 22                    // 取消注释并将端口改为 22
PasswordAuthentication yes // 允许密码登录
PermitRootLogin yes        // 默认为 prohibit-password， root账户默认都是使用 RSA 登录，如果想要使用密码，就改成 yes
```

### 1.3 重启 ssh 服务

```bash
sudo service ssh restart
```
