## python
> Python是一种高级、解释型、动态和面向对象的编程语言

### 设计目标
* 简洁明了的语法
* 跨平台：在多种操作系统上运行
* 可扩展性和可嵌入性：可以与其他语言（如C/C++）集成
### 语言特性
#### 简单且易读的语法
Python语法设计简洁，接近自然语言，使得代码易于编写和理解。以下是一个简单的Python程序
```python
print("Hello, World!")
```

#### 动态类型
Python是动态类型语言，变量不需要声明类型，在赋值时确定类型
```python
x = 10        # x 是整数
x = "hello"   # 现在 x 是字符串
```

#### 多种数据类型
```python
# 列表
list_example = [1, 2, 3, 4, 5]

# 字典
dict_example = {"name": "Alice", "age": 25}

# 集合
set_example = {1, 2, 3, 4, 5}

# 元组
tuple_example = (1, 2, 3, 4, 5)
```

#### 支持面向对象和函数式编程
#### 非常多的标准库
```python
import os
import sys
import math
import datetime
import json

# 文件操作
with open("example.txt", "w") as file:
    file.write("Hello, World!")

# JSON 处理
data = {"name": "Alice", "age": 25}
json_data = json.dumps(data)
```