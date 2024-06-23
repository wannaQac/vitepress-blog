# Bandwagonhost 简易教程

## 简单介绍
搬瓦工隶属于加拿大 `IT7 Networks` 旗下，从 2004 年开始，`IT7 Networks` 便开始提供虚拟主机、`VPS`、独立服务器等服务。搬瓦工的英文名为 `BandwagonHost`，发音类似搬瓦工（BanWaGong）。

搬瓦工目前已经实现全自动化运维和管理，所有的 `VPS` 都会在购买后实时开通。搬瓦工的 `VPS` 管理面板 `KiwiVM` 由搬瓦工亲自开发，并已实现高度自动化。搬瓦工的所有 `VPS` 方案都提供 99.99% 的在线率保障，并且背后有专业的运维团队提供技术支持，所有机房、线路的问题基本都能在半小时之内得到解决，值得信赖，非常适合建站。



## 注册与登录
直接访问 [官网链接](https://bandwagonhost.com/index.php) 进入官网，右上角
![login](/code/basic/bandwagonhost/login.jpg)

## 购买与优惠

购买 `VPS` 即可，无论是搭建中转站点，亦或是进行网站建设，都绰绰有余了。可以查看  [搬瓦工中文网](https://www.bandwagonhost.net/) 首页有无最新的优惠推荐，如果没有则直接去 [搬瓦工官网](https://bandwagonhost.com/vps-hosting.php) 进行购买

## 登录查看已购买的服务器
点击官网右上角 `Client Area` 进入登录页面。
![loginpage](/code/basic/bandwagonhost/loginpage.jpg)

登录后点击 `Servers` 查看服务器。
![servers](/code/basic/bandwagonhost/servers.jpg)

在服务器列表中，点击列表末端的管理页面，即可进入 `KiwiVM` 后台管理面板。
![serverlist](/code/basic/bandwagonhost/serverlist.jpg)

## KiwiKW 后台面板
![main-control](/code/basic/bandwagonhost/main-control.jpg)

有了服务器，第一步肯定是要进行 SSH 连接，先连上再说，在后台中我们可以轻松找到 `IP` 和 `SSH Port`, 接下来我们只要重装一个系统，就可以获得系统的默认密码了，先 `force stop` 停止虚拟机，去 `Install new OS`，成功后会看到仅显示一次的密码，记录下来即可(直接走改密码逻辑也行，因为出于安全策略，搬瓦匠不再将密码发送至邮箱，不过他默认的系统是 `CentOS`，我用 `Ubuntu` 习惯了，所以只能重装系统)