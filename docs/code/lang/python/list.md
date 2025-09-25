# 列表

### 匹配忽略大小写
在匹配字体时或者是一些包含大小写字符串时，直接用 `in` 容易因为大小写问题匹配不到
```python
my_list = ["Apple", "Banana", "Orange", "PEAR"]
target = "apple"

# 检查是否有某个元素，忽略大小写匹配 target
found = any(item.lower() == target.lower() for item in my_list)

print(found)  # True，因为 "Apple".lower() == "apple".lower()
```