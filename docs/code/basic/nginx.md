# Nginx

## 常用的命令
```
sudo service nginx start
sudo service nginx stop
sudo service nginx status
```

## 常用的 Nginx 配置模板（以禅道为例）

```
server {
	listen 80;
	listen [::]:80;

	root /home/scx/wwwroot/zentaopms/www/;
	autoindex on;

	index index.html index.php;

	server_name pms74.scx.oop.cc;

        location / {
          index  index.htm index.html index.php;
          try_files  $uri  /index.php$uri;

          if (!-e $request_filename) {
                   #一级目录
                  rewrite ^/(.*)$ /index.php/$1 last;
                   #二级目录
                   rewrite ^/./(.*)$ /MYAPP/index.php/$1 last;
             }
        }

        #pathinfo设置
        location ~ \.php($|/) {
            fastcgi_pass unix:/var/run/php/php7.4-fpm.sock;
            fastcgi_index  index.php;
            fastcgi_split_path_info ^(.+\.php)(.*)$;
            fastcgi_param   PATH_INFO $fastcgi_path_info;
            fastcgi_param  SCRIPT_FILENAME   $document_root$fastcgi_script_name;
            include        fastcgi_params;
        }
}

```