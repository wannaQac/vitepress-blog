# DuckDB 函数
## 1. 日期转换函数
`strftime(timestamp, format)` 根据指定的模式将时间戳或日期转换为字符串

```sql
SELECT strftime(DATE '1992-03-02', '%d/%m/%Y');
-- 02/03/1992

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%A, %-d %B %Y - %I:%M:%S %p');
-- Monday, 2 March 1992 - 08:32:45 PM

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%x');
-- 1992-03-02

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%X');
-- 20:32:45

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%Y');
-- 1992

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%-m');
-- 3

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%m');
-- 03

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%-j');
-- 62

SELECT strftime(TIMESTAMP '1992-03-02 20:32:45', '%j');
-- 062
```
常用的格式(format)说明符，[查看更多格式](https://duckdb.org/docs/sql/functions/dateformat)

| 说明符        |      描述                              |  例子      |
| ------------- | :------------------------------------: | ---------: |
| %x            | ISO 日期表示                           | 1992-03-02 |
| %X            | ISO 时间表示                           | 10:30:20   |
| %Y            | 以十进制数表示的年份和世纪。           | 1992       |
| %m            | 以零填充的十进制数表示的月份           | 03         |
| %-m           | 以十进制数表示的月份                   | 3          |
| %j            | 一年中的第几天，以零填充的十进制数表示 | 062        |
| %-j           | 以十进制数表示的一年中的第几天         | 62         |

## 2. 日期提取函数

拼接年月
```mysql
SELECT PRINTF('%04d-%02d', YEAR(DATE '1992-02-03'), MONTH(DATE '1992-02-03')) AS year_month;

-- 1992-02
```
