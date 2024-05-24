# MySQL 适配 DuckDB

`DuckDB` 使用 `PostgreSQL` 解析器，`PostgreSQL` 执行更标准的 `SQL` 标准

#### 1. 不能用反引号号

`MySQL` 在对一些保留字字段做引用的时候，通常需要使用反引号，但反引号是 `MySQL` 自己的实现，不在 `SQL` 标准中。在 `DuckDB` 中，永远不要使用反引号，对字段的引用可以用双引号也可以不用
```sql
-- 错误
select id,`date` from zt_action;
-- 正确
select id,date from zt_action;
```
在 `DuckDB` 中，永远不要使用反引号，对字段的引用可以用双引号也可以不用
#### 2.对字段使用双引号，对具体的值使用单引号
对字段的引用可以用双引号也可以不用，对确切的值，应该使用单引号
```sql
-- 错误
select id,date from zt_action where deleted = "1"
(case when t3.multiple="1" then t1.name else "" end)
-- 正确
select id,date from zt_action where deleted = '1'
(case when t3.multiple='1' then t1.name else '' end)
```

#### 3.尽量使用 case when 语法而不是 if，官方没明说支持 if
```sql
-- 错误
if(t3.multiple='1',t1.name,'')
-- 正确
(case when t3.multiple='1' then t1.name else '' end)
```

#### 4.绝大多数的日期函数
反正基本上都不能直接拿过来用，要去找对应的 `DuckDB` 实现，举个例子
```sql
-- 错误
select curdate();
-- 正确
select current_date();
```

#### 5.不要使用 IFNULL
`COALESCE` 函数接受一个参数列表，并返回第一个非 `NULL` 值
```
IFNULL(t3.name, '/')
COALESCE(t3.name, '/')
```
