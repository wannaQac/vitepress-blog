### Form 表单提交过多 PHP 无法处理

自从 `PHP5.3` 之后，最多接收 1000 项 `form` 表单的数据，这个参数可以在 `php.ini` 里调整

```bash
max_input_var = 2000
```

如果使用 `nginx` 做服务器，配置好之后需要重启 `php-fpm`
