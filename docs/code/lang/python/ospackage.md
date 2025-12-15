# os package

## 文件和目录操作
#### 获取当前工作目录
```python
cwd = os.getcwd()
print(f"当前工作目录是: {cwd}")
```

### 改变当前工作目录
```python
os.chdir('/path/to/directory')
print(f"新的工作目录是: {os.getcwd()}")
```

### 列出目录内容
```python
contents = os.listdir('.')
print(f"当前目录的内容: {contents}")
```

### 创建目录
```python
os.mkdir('new_directory')
print("目录 new_directory 创建成功")
```
### 创建多级目录
```python
os.makedirs('parent_directory/child_directory')
print("多级目录 parent_directory/child_directory 创建成功")
```

### 删除目录
```python
os.rmdir('new_directory')
print("目录 new_directory 删除成功")
```

### 删除多级目录
```python
os.removedirs('parent_directory/child_directory')
print("多级目录 parent_directory/child_directory 删除成功")
```

### 删除文件
```python
os.remove('file.txt')
print("文件 file.txt 删除成功")
```

### 重命名文件或目录
```python
os.rename('old_name.txt', 'new_name.txt')
print("文件 old_name.txt 重命名为 new_name.txt")
```

## 路径操作
> os.path 模块提供了一系列用于处理路径的函数。

### 检查路径是否存在
```python
path_exists = os.path.exists('new_name.txt')
print(f"路径 new_name.txt 存在: {path_exists}")
```
### 检查是否是文件
```python
is_file = os.path.isfile('new_name.txt')
print(f"new_name.txt 是文件: {is_file}")
```

### 检查是否是目录
```python
is_dir = os.path.isdir('some_directory')
print(f"some_directory 是目录: {is_dir}")
```

### 获取文件大小
```python
file_size = os.path.getsize('new_name.txt')
print(f"文件 new_name.txt 的大小: {file_size} 字节")
```

### 获取绝对路径
```python
abs_path = os.path.abspath('new_name.txt')
print(f"文件 new_name.txt 的绝对路径: {abs_path}")
```
### 合并路径
```python
combined_path = os.path.join('/path/to', 'file.txt')
print(f"合并后的路径: {combined_path}")
```
### 分割路径
```python
directory, filename = os.path.split('/path/to/file.txt')
print(f"目录: {directory}, 文件名: {filename}")
```

### 获得文件扩展名
```python
root, ext = os.path.splitext('file.txt')
print(f"文件名: {root}, 扩展名: {ext}")
```


## 环境变量
> os.environ 是一个包含当前环境变量的字典。

### 获取环境变量
```python
path = os.getenv('PATH')
print(f"PATH 环境变量: {path}")
```

### 设置环境变量
```python
os.environ['NEW_VAR'] = 'new_value'
print("环境变量 MY_VAR 已设置")

# os.environ["CUDA_VISIBLE_DEVICES"] = visible
```