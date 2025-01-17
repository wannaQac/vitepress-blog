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
