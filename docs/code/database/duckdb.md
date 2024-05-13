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

## 5.提前下好扩展
[DuckDB扩展下载链接](https://duckdb.org/docs/extensions/working_with_extensions)

下载好了之后存放到某个路径下，以 `mysql` 为例，下载链接可以是 `http://extensions.duckdb.org/v0.10.2/windows_amd64/mysql_scanner.duckdb_extension.gz`，之后便不必使用 `INSTALL mysql`，将 `{mysql_extension_path}` 替换为一个确切的路径
```bash
./duckdb
LOAD {mysql_extension_path};
ATTACH 'host=localhost user=root password=!Ss12345678 port=3306 database=mysql' AS mysqldb (TYPE MYSQL);
USE mysqldb;
SHOW TABLES;
```

## 6.以 PHP 或者其他语言执行

```php
$exec = '/home/songchenxuan/wwwroot/maxmaster/bin/duck/duckdb :memory: < /home/songchenxuan/wwwroot/maxmaster/tmp/duckdb/run.sql 2>&1';
exec($exec, $output);
```

其中 `run.sql` 可以是

```sql
LOAD {EXTENSIONPATH};
ATTACH 'host={HOST} user={USER} password={PASSWORD} port={PORT} database={DATABASE}' as mysqldb(TYPE MYSQL);
USE mysqldb;
COPY {TABLE} TO {COPYPATH};
```

命令行中不允许有一些特殊字符，通过从文件中读取可以规避直接运行命令行的这种问题。`mysql` 的扩展先下载再使用也不是不行，只是会可能遇到以下的错误，所以不推荐
```sql
INSTALL mysql
LOAD mysql
```

::: danger 报错
IO Error: Failed to create directory "/var/www/.duckdb/"!
IO Error: Extension "/var/www/.duckdb/extensions/v0.10.2/linux_amd64_gcc4/mysql_scanner.duckdb_extension" not found.

IO Error: Cannot open file "/var/www/.duckdb/extensions/v0.10.2/linux_amd64_gcc4/mysql_scanner.duckdb_extension": Permission denied
:::

PHP 脚本（特别是通过 Web 服务器运行的脚本）可能以不同于命令行用户的用户身份执行。通常，Web 服务器（例如 Apache、Nginx）运行在其自己的用户（如 www-data 或 http）下。这可能导致权限不足，无法访问某些目录或文件。确保 PHP 执行时使用的用户具有足够的权限来访问和修改所需的文件和目录。需要调整 /var/www 或其他相关目录的权限。

