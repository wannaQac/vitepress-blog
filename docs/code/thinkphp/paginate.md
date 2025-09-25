# 分页

### 分页查询
在 Db 查询的时候调用 `paginate` 方法可以实现分页查询。主要的分页参数如下：
- `list_rows`：每页显示条数
- `var_page`：当前页码
- `query`：url额外参数
- `path`：url路径
- `fragment`：url锚点
- `var_page`: 分页变量
```php
Db::name('user')->paginate([
    'list_rows' => 10, // 每页显示条数
    'var_page' => 1, // 当前页码
]);
```