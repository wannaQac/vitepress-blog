### 上传文件大小限制

`php.ini` 中有默认的上传文件大小限制，可能不足以完成业务需求，注意 `post_max_size` 包含了文件，所以应该 `post_max_size` > `upload_max_filesize`

```bash
file_uploads = on ;       // 是否允许上传，默认为ON
upload_max_filesize = 2m; // 允许上传文件大小的最大值
post_max_size = 8m ;      // 指通过表单 POST 给 PHP 的所能接收的最大值，包括文件
max_execution_time = 600; // PHP 页面运行的最大时间值(秒)，默认 30 秒
max_input_time = 600;     // PHP 页面接收数据所需的最大时间，默认 60 秒
memory_limit = 8m ;       // 每个 PHP 页面所吃掉的最大内存
```

如果使用了 `nginx` 反向代理，需要在对应的配置中加入 `client_max_body_size` 参数

```bash
server
{
    listen 80;
    client_max_body_size 10m;

    其他配置
}
```
