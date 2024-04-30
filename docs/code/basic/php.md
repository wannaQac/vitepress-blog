# PHP 配置流程

## 1. Ubuntu 下配置 PHP

### 1.1 更新 apt
```
sudo apt update
```
### 1.2 添加 PHP PPA

```
sudo add-apt-repository ppa:ondrej/php
sudo apt update
```

### 1.3 安装指定版本的 PHP
此处是以 `PHP7.4` 为例，如果环境中需要用 `nginx` 作为服务器，还需要下载 `php-fpm` 扩展

```
sudo apt install php7.4
sudo apt install php7.4-fpm
sudo apt install php7.4-{dev,mysql,curl,json,mbstring,xml,intl,yaml,zip}
```

## 2. 在 Ubuntu 下切换 PHP 版本

或许安装了很多个 `PHP` ，难免会遇到切换版本的时候

### 2.1 使用 update-alternatives 工具管理 PHP
执行 `sudo update-alternatives --config php` ，这个命令会列出所有安装的 `PHP` 版本，并允许你选择默认的命令行版本

```
There are 3 choices for the alternative php (providing /usr/bin/php).

  Selection    Path             Priority   Status
------------------------------------------------------------
  0            /usr/bin/php8.3   83        auto mode
* 1            /usr/bin/php7.4   74        manual mode
  2            /usr/bin/php8.1   81        manual mode
  3            /usr/bin/php8.3   83        manual mode

Press <enter> to keep the current choice[*], or type selection number:
```

如果你想切换到 `PHP8.1`，那么输入 2，然后回车。
你可能还需要更新 `Apache` 或 `nginx`（如果你使用这些web服务器的话）来使用新版本的PHP。

### 2.2 Apache 配置
对于 `Apache`，你可以禁用旧版本的 `PHP module`，并启用你想要使用的版本：

```
sudo a2dismod php7.4  # 禁用PHP 7.4
sudo a2enmod php8.1   # 启用PHP 8.1
sudo service apache2 restart
```

### 2.3 Nginx 配置
对于 `nginx` ，你需要编辑你的 `nginx` 配置文件，通常位于 `/etc/nginx/sites-available/` 中，然后重启nginx服务：

```
# 编辑对应的nginx配置文件，更新fastcgi_pass指向到新的PHP FPM socket

sudo service nginx restart
```

## 3. 使用 PHP 中遇到的一些问题
### 3.1 Form 表单提交过多 PHP 无法处理

自从 `PHP5.3` 之后，最多接收 1000 项 `form` 表单的数据，这个参数可以在 `php.ini` 里调整

```
max_input_var = 2000
```

### 3.2 上传文件大小限制

`php.ini` 中有默认的上传文件大小限制，可能不足以完成业务需求，注意 `post_max_size` 包含了文件，所以应该 `post_max_size` > `upload_max_filesize`

```
file_uploads = on ;       // 是否允许上传，默认为ON
upload_max_filesize = 2m; // 允许上传文件大小的最大值
post_max_size = 8m ;      // 指通过表单 POST 给 PHP 的所能接收的最大值，包括文件
max_execution_time = 600; // PHP 页面运行的最大时间值(秒)，默认 30 秒
max_input_time = 600;     // PHP 页面接收数据所需的最大时间，默认 60 秒
memory_limit = 8m ;       // 每个 PHP 页面所吃掉的最大内存
```

如果使用了 `nginx` 反向代理，需要在对应的配置中加入 `client_max_body_size` 参数

```
server
{
    listen 80;
    client_max_body_size 10m;

    其他配置
}
```

