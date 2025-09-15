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

```bash
sudo apt install php7.4
sudo apt install php7.4-fpm
sudo apt install php7.4-{dev,mysql,curl,json,mbstring,xml,intl,yaml,zip}
```

## 2. 在 Ubuntu 下切换 PHP 版本

或许安装了很多个 `PHP` ，难免会遇到切换版本的时候

### 2.1 使用 update-alternatives 工具管理 PHP
一共有三条命令，都需要执行并选择
```bash
# 选择系统中可用的 PHP 版本
sudo update-alternatives --config php
# 选择系统中可用的 phpize 版本，phpize 是一个用于为 PHP 扩展编译生成配置文件的工具
sudo update-alternatives --config phpize
# 选择系统中可用的 php-config 版本，php-config 是一个用于获取 PHP 配置信息的工具，比如编译参数、安装路径等
sudo update-alternatives --config php-config
```
以第一条为例，执行 `sudo update-alternatives --config php` ，这个命令会列出所有安装的 `PHP` 版本，并允许你选择默认的命令行版本

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

```bash
# 禁用PHP 7.4
sudo a2dismod php7.4
# 启用PHP 8.1
sudo a2enmod php8.1
sudo service apache2 restart
```

### 2.3 Nginx 配置
对于 `nginx` ，你需要编辑你的 `nginx` 配置文件，通常位于 `/etc/nginx/sites-available/` 中，然后重启nginx服务：

```bash
# 编辑对应的nginx配置文件，更新fastcgi_pass指向到新的PHP FPM socket

sudo service nginx restart
```

## 3. Composer
在 `Linux` 或者 `Mac OS` 上安装
```bash
curl -sS https://getcomposer.org/installer | php
mv composer.phar /usr/local/bin/composer
```

有的 `composer.json` 或许还要求你安装一些其他的扩展，不能直接使用 `composer install` 就装好，如：
```bash
Your requirements could not be resolved to an installable set of packages.

  Problem 1
    - Root composer.json requires stil/gd-text ^1.1 -> satisfiable by stil/gd-text[v1.1.0].
    - stil/gd-text v1.1.0 requires ext-gd * -> it is missing from your system. Install or enable PHP's gd extension.
  Problem 2
    - Root composer.json requires topthink/think-image ^1.0 -> satisfiable by topthink/think-image[v1.0.0, ..., v1.0.8].
    - topthink/think-image[v1.0.0, ..., v1.0.8] require ext-gd * -> it is missing from your system. Install or enable PHP's gd extension.
  Problem 3
    - Root composer.json requires phpoffice/phpspreadsheet ^1.6 -> satisfiable by phpoffice/phpspreadsheet[1.6.0, ..., 1.30.0].
    - phpoffice/phpspreadsheet[1.6.0, ..., 1.30.0] require ext-gd * -> it is missing from your system. Install or enable PHP's gd extension.
```

这要求安装 `php gd` 扩展，安装后，去 `fpm` 的 `php.ini` 里开启扩展，并重启 `fpm`
```
sudo apt-get install php7.4-gd
