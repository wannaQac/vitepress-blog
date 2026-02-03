# python变量

### 赋值
在Python中，变量的赋值通过等号（=）进行。可以同时给多个变量赋值，甚至可以进行交换赋值。

```python
# 单个赋值
x = 5
y = "Hello"

# 多重赋值
z1 = z2 = 3

# 多个赋值
a, b, c = 1, 2, 3

# 交换赋值
a, b = b, a
```

### 变量的类型
#### 数值类型
Python中有四种数值类型：整数（int）、浮点数（float）、复数（complex）
```python
# 整数
x = 10

# 浮点数
y = 3.14

# 复数
z = 1 + 2j
```

#### 字符串类型
```python
# 单引号字符串
s1 = 'Hello'

# 双引号字符串
s2 = "World"

# 三引号字符串（多行）
s3 = '''This is a
multi-line string.'''

# 可插入变量的字符串
var = "Python"
s4 = f"Hello, {var}!"
```