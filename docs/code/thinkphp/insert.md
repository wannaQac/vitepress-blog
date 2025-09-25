# 插入数据
### 插入一条数据
#### insert()方法

`insert()` 方法用于向数据表中插入一条或多条记录。
```php
$data = [
    'name' => '张三',
    'birthday' => '1990-01-01',
    'email' => 'zhangsan@qq.com'
];

$result = Db::name('users')->insert($data);
```
`insert` 方法添加成功后返回添加成功的条数，通常情况返回1

#### strict()方法

`strict()` 方法用于设置严格模式，默认为 `true`，则在插入数据时，如果数据表中不存在相应的字段，则会报错，可以手动设置为 `false` 关闭严格模式。
```php
$result = Db::name('users')->strict(false)->insert($data);
```

#### insertGetId()方法

`insertGetId()` 方法用于插入一条数据并返回数据的自增主键。
```php
$id = Db::name('users')->insertGetId($data);
```