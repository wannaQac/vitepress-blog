## SFTP
> SFTP是Secure File Transfer Protocol的缩写，安全文件传送协议。相比FTP，它是安全的

## 最简使用
直接去下载一个FTP客户端，比如FileZilla，然后输入服务器的IP、端口、用户名、密码，就可以连接到服务器上进行文件操作了。[FileZilla下载地址](https://filezilla-project.org/)

![download](/code/basic/stfp/filezillaguanwang.png)
![download](/code/basic/stfp/connectserver.png)

因为SFTP需要使用SSH协议，所以需要服务器配置好SSH服务，比如OpenSSH。具体的配置方式可以参考 本站点**文章基建-环境搭建-Ubuntu**中的开启SSH登录部分：[Ubuntu](./ubuntu)