# Charles抓包工具使用

### 本教程的环境
* PC端：Windows 11
* 手机端：小米17pro
* charles版本：

### 下载安装Charles

下载地址：https://www.charlesproxy.com/
![login](/code/basic/charles/charles_download.jpg)
### 抓包教程

#### 安装证书
打开 charles，**HELP -> SSL Proxying -> Install Charles Root Certificate**，安装证书。
![login](/code/basic/charles/ssl_install.jpg)
点击 **安装证书 -> 当前用户 -> 选择受信任的根证书颁发机构 -> 选择安装**。
![login](/code/basic/charles/1.jpg)
![login](/code/basic/charles/2.jpg)

#### 配置代理设置
**Proxy -> Proxy Settings**，端口默认用8888即可，勾选 **Enable transparent HTTP proxying**
![login](/code/basic/charles/3.jpg)
![login](/code/basic/charles/4.jpg)

**Proxy ->SSL Proxying Setting->SSL Proxying**， 勾选 **Enable SSL Proxying ->add**， host为空不填， port填 443
![login](/code/basic/charles/5.jpg)
![login](/code/basic/charles/6.jpg)

### 手机端配置
#### 手机端和pc端必须要在一个局域网下
查看电脑端的 `ip` 地址
![login](/code/basic/charles/8.jpg)
然后将手机端的 `wifi` 代理设置成查看到的 `ip`， 端口为 `8888`
![login](/code/basic/charles/13.jpg)
或许需要安装 `ssl` 证书，手机端访问对应的链接就可以了，不过或许不安装证书也可以使用
![login](/code/basic/charles/10.jpg)
如果弹出，一定选同意
![login](/code/basic/charles/11.jpg)

#### 使用过滤条件
因为 `charles` 启动后，电脑的请求也会展现，所以如果说对某些 `app` 进行抓包，使用筛选来进行过滤
![login](/code/basic/charles/12.jpg)
