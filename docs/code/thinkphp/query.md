# 查询数据

### 查询单个数据
查询单个数据可以使用 `find` 方法
```php
Db::name('user')->where('id', 1)->find();
```
`find` 方法返回的是结果数组，如果没有数据，则返回 `NULL`。

如果希望查询数据不存在的时候返回空数据，则使用 `findOrEmpty` 方法
```php
Db::name('user')->where('id', 999)->findOrEmpty();
```
### 查询多个数据（数据集）
查询多个数据可以使用 `select` 方法
```php
Db::name('user')->select();
```
`select` 方法返回的是结果数组，如果没有数据，则返回空数组。

### 查询某个值
查询某个值可以使用 `value` 方法
```php
Db::name('user')->where('id', 1)->value('name');
```
`value` 方法返回的是单个值，如果没有数据，则返回 `NULL`。

### 查询某个列
查询某个列可以使用 `column` 方法
```php
Db::name('user')->column('name');
```
`column` 方法返回的是一维数组，如果没有数据，则返回空数组。

    




