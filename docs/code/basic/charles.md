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