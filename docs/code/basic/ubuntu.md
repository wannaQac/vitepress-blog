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

#### 参数列表
* `-d` 发送POST数据体
`curl -d 'login=emma＆password=123' -X POST https://google.com/login`
* `-k` 跳过SSL检测，常用于访问本地启的服务，没有配置 SSL 证书
