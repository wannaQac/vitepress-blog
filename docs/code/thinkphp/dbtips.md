# thinkphp有关数据库操作的一些小tips

### Db::name()和Db::table()的区别

Db::table必须指定完整的表名，但Db::name()可以省略前缀，自动从配置中获取表前缀。如果在 /config/database.php 中没有设置前缀，则二者效果相同。
```php
// 如果设置了前缀为prefix_，则以下两行代码效果相同
Db::table('prefix_user')->where('id', 1)->find();
Db::name('user')->where('id', 1)->find();
```