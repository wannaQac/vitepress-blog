# Svn 常用操作

## 服务端
VisualSVN server [下载链接](https://www.visualsvn.com/server/download/)
## 客户端
TortoiseSVN [下载链接](https://sourceforge.net/projects/tortoisesvn/files/latest/download)


## 服务端教程
安装好 VisualSVN server后，可以在搜索中进行搜索并启动
![login](/code/basic/svn/home.jpg)

创建版本库
![login](/code/basic/svn/createrepo.jpg)

获取版本库url
![login](/code/basic/svn/geturl.jpg)

## 客户端教程
下载安装完小乌龟后，右键菜单会出现 TortoiseSVN，如果没有或者没有想要的选项且系统是win11，使用右键的显示更多选项
![login](/code/basic/svn/rightclick.jpg)

使用 check 操作来同步 SVN 项目，url在上文提到guo
![login](/code/basic/svn/svncheck.jpg)
![login](/code/basic/svn/svncheckinfo.jpg)

使用 svn update 来拉取最新代码，如果有提交，使用 svn commit 来提交
![login](/code/basic/svn/commandlist.jpg)


## Linux下使用Shell远程操作SVN

### 安装客户端并尝试
```bash
sudo apt install subversion

# 看一下仓库目录试试水
svn list <remote url> --non-interactive --username=<user> --password <password>
```

### 报错SSL认证不通过解决方案
```bash
svn: E170013: Unable to connect to a repository at URL '<remote url>'
svn: E230001: Server SSL certificate verification failed: certificate issued for a different hostname, issuer is not trusted
```
在本地开发的时候，往往给出的远程地址也是本地起的，比如 `linux` 下开发，`Windows` 上装了 `visual svn server`，那么此时在 `linux` 中"远程"调用 `Windows` 的 `svn`，就会出现这种情况，此时先执行
```bash
svn list <remote url>
```
会得到如下结果，选择p，永久忽略就行

```bash
Error validating server certificate for '<remote url>':
 - The certificate is not issued by a trusted authority. Use the
   fingerprint to validate the certificate manually!
 - The certificate hostname does not match.
Certificate information:
 - Hostname: Liberty
 - Valid: from Jan 17 05:38:59 2025 GMT until Jan 15 05:38:59 2035 GMT
 - Issuer: Liberty
 - Fingerprint: B1:31:5D:99:17:65:4A:0F:DD:61:A9:F4:1F:9C:AB:31:25:6E:E2:22
(R)eject, accept (t)emporarily or accept (p)ermanently?
```

