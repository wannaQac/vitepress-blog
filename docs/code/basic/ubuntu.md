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
sudo netstat -tuln | grep <port>

## 使用netstat的替代品ss，功能更强
# 查看所有端口
sudo ss -tuln
# 指定某个端口
sudo ss -tuln | grep <port>
```

## 3. 命令
### 3.1 wc
```bash
# 展示文件的行数、单词数和字节数
wc <file>

# 展示文件的行数
wc -l <file>
# 展示文件的单词数
wc -w <file>
# 展示文件的字节数
wc -c <file>
# 展示文件的字符数
wc -m <file>
```

### 3.2 curl

curl(client url)是常用的命令行工具，用来请求 Web 服务器。

#### 测试访问url
最基本的用法就是 `curl <url>`，常用于测试一台服务器是否可以访问某个 url
```bash
curl http://www.baidu.com
```
得到响应
```bash
<!DOCTYPE html>
<!--STATUS OK--><html> <head><meta http-equiv=content-type content=text/html;charset=utf-8><meta http-equiv=X-UA-Compatible content=IE=Edge><meta content=always name=referrer><link rel=stylesheet type=text/css href=http://s1.bdstatic.com/r/www/cache/bdorz/baidu.min.css><title>百度一下，你就知道</title></head> <body link=#0000cc> <div id=wrapper> <div id=head> <div class=head_wrapper> <div class=s_form> <div class=s_form_wrapper> <div id=lg> <img hidefocus=true src=//www.baidu.com/img/bd_logo1.png width=270 height=129> </div> <form id=form name=f action=//www.baidu.com/s class=fm> <input type=hidden name=bdorz_come value=1> <input type=hidden name=ie value=utf-8> <input type=hidden name=f value=8> <input type=hidden name=rsv_bp value=1> <input type=hidden name=rsv_idx value=1> <input type=hidden name=tn value=baidu><span class="bg s_ipt_wr"><input id=kw name=wd class=s_ipt value maxlength=255 autocomplete=off autofocus></span><span class="bg s_btn_wr"><input type=submit id=su value=百度一下 class="bg s_btn"></span> </form> </div> </div> <div id=u1> <a href=http://news.baidu.com name=tj_trnews class=mnav>新闻</a> <a href=http://www.hao123.com name=tj_trhao123 class=mnav>hao123</a> <a href=http://map.baidu.com name=tj_trmap class=mnav>地图</a> <a href=http://v.baidu.com name=tj_trvideo class=mnav>视频</a> <a href=http://tieba.baidu.com name=tj_trtieba class=mnav>贴吧</a> <noscript> <a href=http://www.baidu.com/bdorz/login.gif?login&amp;tpl=mn&amp;u=http%3A%2F%2Fwww.baidu.com%2f%3fbdorz_come%3d1 name=tj_login class=lb>登录</a> </noscript> <script>document.write('<a href="http://www.baidu.com/bdorz/login.gif?login&tpl=mn&u='+ encodeURIComponent(window.location.href+ (window.location.search === "" ? "?" : "&")+ "bdorz_come=1")+ '" name="tj_login" class="lb">登录</a>');</script> <a href=//www.baidu.com/more/ name=tj_briicon class=bri style="display: block;">更多产品</a> </div> </div> </div> <div id=ftCon> <div id=ftConw> <p id=lh> <a href=http://home.baidu.com>关于百度</a> <a href=http://ir.baidu.com>About Baidu</a> </p> <p id=cp>&copy;2017&nbsp;Baidu&nbsp;<a href=http://www.baidu.com/duty/>使用百度前必读</a>&nbsp; <a href=http://jianyi.baidu.com/ class=cp-feedback>意见反馈</a>&nbsp;京ICP证030173号&nbsp; <img src=//www.baidu.com/img/gs.gif> </p> </div> </div> </div> </body> </html>
```

#### 保存网页
`curl -o <filename>.html <url>`
```bash
curl -o baidu.html http://www.baidu.com

# 还可以用linux的重定向来保存
curl http://www.baidu.com >> baidu.html
```

#### 测试网页返回值
往往用于在脚本中测试网站是否正常访问 `curl -o /dev/null -s -w %{http_code} <url>`
```bash
-s 静默模式，不显示进度或错误信息
-o /dev/null 将响应体输出到 /dev/null（即丢弃响应体）
-w "%{http_code}"：只输出 HTTP 状态码

curl -o /dev/null -s -w %{http_code} www.baidu.com
# 使用 --max-time 和 --connect-timeout 来指定如果 url 无法访问，及时返回信息
curl -o /dev/null -s -w %{http_code} --max-time "2" --connect-timeout "2" www.baidu.com
```

#### 发送请求
参数列表
```bash
-X 指定用于请求的HTTP方法，如GET、POST、PUT等
-H 设置header
-F 设置form data，设置上传文件时要用@<filepath>，@标明是文件
```
```bash
# 举个例子
curl -X POST \
-H "token:jl6jhkq9pg17g9ii6hlqg6segg" \
-F "title=test1" \
-F "product=1" \
-F "files=@/mnt/svn_Repositories/htpasswd" \
http://localhost:8086/api.php/v1/feedbacks
```

#### 参数列表
* `-d` 发送POST数据体
```bash
curl -d 'login=emma＆password=123' -X POST https://google.com/login
# win下只能用双引号，所以特殊部分需要转义
curl -X POST -H "token:<token>" -d "{\"page\":1,\"pageSize\": 10}" <url>
```
* `-k` 跳过SSL检测，常用于访问本地启的服务，没有配置 SSL 证书

### 3.3 htpasswd
htpasswd 是一个用于创建和更新存储用户名和密码的平面文件（通常用于 HTTP 认证）的命令行工具。它通常与 Apache HTTP 服务器一起使用，用于管理基本身份验证的用户和密码。
```bash
# 基本用法
htpasswd [option] <file> <account>

# 常用option
-c 创建一个新的密码文件，如果文件存在，则被覆盖
-b 允许在命令行中直接提供密码
-D 删除指定用户
-v 验证用户密码
```
示例
```bash
# 创建一个密码文件，并添加user0账户，随后在命令行中交互输入密码
htpasswd  -c /tmp/htpasswd user0

# 创建一个密码文件，并添加user0账户，使用-b参数指定了密码，无需命令行交互
htpasswd -b -c /tmp/htpasswd user0 password1

# 创建/编辑(有则编辑，无则创建)user1用户，并在参数中指定密码
htpasswd -b /tmp/htpasswd user1 pswd2

# 删除用户user1
htpasswd -D /tmp/htpasswd user1

# 验证user1密码是否正确，并在参数中直接指定想要验证的密码
htpasswd -b -v /tmp/htpasswd user1 pswd2
```
### 3.4 ncdu
磁盘使用情况分析工具，使用 `sudo apt install ncdu` 安装依赖包
```bash
# 直接用就行，会扫描完成后按照从大到小列出磁盘使用情况
ncdu
```

## 系统

### 4.1 fstab
/etc/fstab 文件是 Linux 系统中用于定义和管理文件系统的挂载信息的配置文件。它的作用是告诉系统在启动时，应该如何自动挂载各种文件系统。挂载是 Linux 操作系统中一种将存储设备与目录树关联的操作。通过挂载，存储设备中的文件可以通过目录访问。

```bash
# 比如将windows中的一个共享文件夹挂载到linux下，username和password为windows本地账户信息，windows貌似必须用本地账户才可以
//10.0.0.167/SvnRepositories /mnt/svn_Repositories cifs username=songchenxuan,password=Zentao123,uid=33,gid=33,rw 0 0
```
