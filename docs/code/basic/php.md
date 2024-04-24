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