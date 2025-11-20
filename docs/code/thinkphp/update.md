# 更新数据

### 更新一条数据
#### update()方法

```php
Db::name('user')
    ->where('id', 1)
    ->update(['name' => 'thinkphp']);

Db::name('user')
    ->where('id', 1)
    ->data(['name' => 'thinkphp'])
    ->update();

Db::name('user')
    ->where('id', 1)
    ->update([
        'name'		=>	Db::raw('UPPER(name)'),
        'score'		=>	Db::raw('score-3'),
        'read_time'	=>	Db::raw('read_time+1')
    ]);
```