# Docker

## 1. Docker Desktop
[下载链接](https://docs.docker.com/desktop/setup/install/)

## 2. 常用的命令

### 查看容器
```bash
#查看正在运行的容器
docker ps
#查看所有的容器
docker ps -a 
```
### 操作容器
```bash

```


# python-to-image

### 介绍
海报编辑器生成图片

### 软件架构

```
php_makeing/ # php处理模块，图片合并（图片里有透明元素）、图片旋转
thinkpy/     # python主程序，图片合并（图片里没有透明元素），除了图片旋转之外的所有功能，都由python完成
demo/        # 备用，调试用
```

### 安装教程

1. 安装python环境，测试支持3.11
2. 安装依赖包
```bash
pip install -r r.txt
```
如遇网络问题，或者安装较慢，可以换源
```bash
pip install -r r.txt -i https://mirrors.aliyun.com/pypi/simple
```
3. php环境准备
```bash
cd php_makeimg
composer install
```
配置Web服务器，域名和thinkpy/config/Evn.py文件中的 DOMAIN 保持一致

### 配置说明
#### 核心配置文件
版本库thinkpy目录下没有config文件夹，联系开发获取。thinkpy/config/Env.py需配置：
```python
DOMAIN = "http://postertest.hunbei.com?s="    # 域名，与Web服务器配置一致
PATH   = "xxx/python-to-image/thinkpy/public" # 项目的绝对路径
UPLOAD_PATH = sys.path[0]+"/public/uploads"   # 图片上传存储目录，可以不改
```
#### 字体文件
thinkpy/public/fonts/目录，默认仅包含基础字体。需要联系开发或许完整字体包（>1G），解压后放置在thinkpy/public/fonts目录下

#### 常见问题
1. 字体缺失错误
```
{"exception_type": "OSError", "exception_message": "cannot open resource"}
```
需要找到对应的字体，放到thinkpy/public/fonts目录下


2. Pillow版本兼容问题
```
AttributeError: module 'PIL.Image' has no attribute 'ANTIALIAS'
```
可以降级到9.5版本，测试支持。8.x和9.x理论上都可以。

3. TensorFlow DDL加载失败
```
from tensorflow.python._pywrap_tensorflow_internal import *
ImportError: DLL load failed while importing _pywrap_tensorflow_internal: 动态链接库(DLL)初始化例程失败。
```
下载VC++库，2015-2022即可，[下载链接](https://learn.microsoft.com/zh-cn/cpp/windows/latest-supported-vc-redist?view=msvc-170)
