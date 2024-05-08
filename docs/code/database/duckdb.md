# DuckDB 配置流程
## 1.DuckDB 是什么

DuckDB 是一个快速的进程内分析数据库，DuckDB 支持功能丰富的 `SQL` 语言，并与客户端 `api` 进行了深度集成


## 2.安装
访问 [DuckDB安装向导](https://duckdb.org/docs/installation/?version=stable&environment=cli&platform=linux&download_method=direct&architecture=x86_64) 选择适合自身环境的安装包进行下载

## 3.在 Ubuntu 中使用 DuckDB

```bash
wget https://duckdb.org/docs/installation/?version=stable&environment=cli&platform=linux&download_method=direct&architecture=x86_64
unzip duckdb_cli-linux-amd64.zip
./duckdb
```

## 4.连接并访问 MySQL

```bash
./duckdb
INSTALL mysql;
LOAD mysql;
ATTACH 'host=localhost user=root password=!Ss12345678 port=3306 database=mysql' AS mysqldb (TYPE MYSQL);
USE mysqldb;
SHOW TABLES;
```

## 5.以 PHP 或者其他语言执行

```php
$exec = '/home/songchenxuan/wwwroot/maxmaster/bin/duck/duckdb :memory: < /home/songchenxuan/wwwroot/maxmaster/tmp/duckdb/run.sql 2>&1';
exec($exec, $output);
```

其中 `run.sql` 可以是

```sql
INSTALL mysql;
LOAD mysql;
ATTACH 'host=127.0.0.1 user=root password=!Ss12345678 port=3306 database=maxmaster' as mysqldb(TYPE MYSQL);
USE mysqldb;
COPY zt_action TO '/home/songchenxuan/wwwroot/maxmaster/tmp/duckdb/zt_action.parquet';
```

或许会遇到以下的错误

::: danger 报错
IO Error: Failed to create directory "/var/www/.duckdb/"!
IO Error: Extension "/var/www/.duckdb/extensions/v0.10.2/linux_amd64_gcc4/mysql_scanner.duckdb_extension" not found.

IO Error: Cannot open file "/var/www/.duckdb/extensions/v0.10.2/linux_amd64_gcc4/mysql_scanner.duckdb_extension": Permission denied
:::

PHP 脚本（特别是通过 Web 服务器运行的脚本）可能以不同于命令行用户的用户身份执行。通常，Web 服务器（例如 Apache、Nginx）运行在其自己的用户（如 www-data 或 http）下。这可能导致权限不足，无法访问某些目录或文件。确保 PHP 执行时使用的用户具有足够的权限来访问和修改所需的文件和目录。需要调整 /var/www 或其他相关目录的权限。

