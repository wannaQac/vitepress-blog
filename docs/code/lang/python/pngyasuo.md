# PNG图片压缩

### ImageMagick
> 功能强大，支持多种格式的图片处理，但压缩效果不如 `pngquant` 好。

[官网](https://imagemagick.org/index.php)

在压缩 `PNG` 图像这一块，我无意中发现可以先转换为 `webp` 格式，再压缩为 `png` 格式，并且压缩比会更高、速度也更快。强烈推荐这种方式
```python
import os
import subprocess
import time

def compress_image(input_path, output_path, output_convert_image, quality=80, resize_percent=None):
    try:
        if not os.path.exists(input_path):
            raise FileNotFoundError(f"输入文件不存在: {input_path}")
            
        output_dir = os.path.dirname(output_path)
        if output_dir and not os.path.exists(output_dir):
            os.makedirs(output_dir)
            
        # 构建magick命令
        cmd = ['magick', input_path]
        cmd.extend(['-define',  'webp:lossless=false']) #设置webp的无损压缩
        if resize_percent is not None: cmd.extend(['-resize', f'{resize_percent}%']) #设置缩放比例
        cmd.extend(['-quality', str(quality), output_path]) #设置质量和输出文件夹

        print(cmd)
        # 执行命令
        result = subprocess.run(cmd, capture_output=True, text=True)
        # 二次执行将webp转换为png
        result = subprocess.run(['magick', output_path, output_convert_image], capture_output=True, text=True)
        
        if result.returncode != 0:
            raise RuntimeError(f"Magick命令执行失败: {result.stderr}")
            
        print(f"图片压缩成功: {input_path} -> {output_path}")
        
    except Exception as e:
        print(f"图片压缩失败: {e}")
        raise

file_name = '24M-PNG'
inext = 'png'
outext = 'webp'
input_image = rf"C:\Users\10971\Desktop\python\{file_name}.{inext}"
output_image = rf"C:\Users\10971\Desktop\python\magick\{file_name}.{outext}"
output_convert_image = rf"C:\Users\10971\Desktop\python\magick\{file_name}.{inext}"

start_time = time.time()  # 记录开始时间

compress_image(input_image, output_image, output_convert_image, quality=80)

end_time = time.time()  # 记录结束时间
elapsed_time = end_time - start_time  # 计算耗时（秒）
print(f"代码运行耗时: {elapsed_time:.4f} 秒")
```
### pngquant
> 转换后的文件大小显著减小（通常可达 70%），并保留完整的 Alpha 透明度。生成的图像兼容所有 Web 浏览器和操作系统。

缺点是 `pngquant` 使用自适应的量化算法，往往通过削减图片的色深来达到压缩目的，所以有可能出现色彩的断层或颜色失真（比如模特的嘴唇发灰而不是原先的口红色），这是无法通过参数指定避免的

[官网](https://pngquant.org/)

```python
import os
import subprocess
import time

def compress_png(input_path, output_path, quality="85-100"):
    # 创建输出目录（如果不存在）
    output_dir = os.path.dirname(output_path)
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)
            
    try:
        cmd =   [
                r"C:\Users\10971\Desktop\pngquant\pngquant.exe",
                "--quality", f"{quality}",
                "--speed", "1",      # 速度1=质量最好
                "--force",       # 强制覆盖输出文件
                input_path,
                "--output", output_path
            ]
        print(cmd)
        subprocess.run(cmd, check=True)
        print(f"压缩成功: {input_path} -> {output_path}")
    except FileNotFoundError:
        print("错误: 请先安装 pngquant 并添加到系统 PATH")
    except subprocess.CalledProcessError:
        print("错误: 压缩失败（可能图片已是最优状态）")


start_time = time.time()  # 记录开始时间

file_name = '24M-PNG.png'
input_image = rf"C:\Users\10971\Desktop\python\{file_name}"
output_image = rf"C:\Users\10971\Desktop\python\pngquant\{file_name}"

compress_png(input_image, output_image)

end_time = time.time()  # 记录结束时间
elapsed_time = end_time - start_time  # 计算耗时（秒）
print(f"代码运行耗时: {elapsed_time:.4f} 秒")
```

### tinypng API
每个月有免费额度，压缩很快，并且压缩比很高，压缩速度和压缩比都接近甚至超越 `pngquant`，但是仍然无法避免色彩的断层或颜色失真。并且也是无法通过调参数解决的。调用 `API` 时需要科学上网。

[官网](https://tinypng.com/)

```python
import tinify
import time

# 在线压缩
def compress_online(input_path, output_path):
    tinify.key = 'l4zcfRmRpWxzrmMfv5FshNQJ7W8vBNvs'
    
    source = tinify.from_file(input_path)
    print(source.url)
    source.to_file(output_path)

if __name__ == '__main__':
    input_path = r"C:\Users\10971\Desktop\python\24M-PNG.png"
    output_path = r"C:\Users\10971\Desktop\python\tinify\24M-PNG.png"

    start_time = time.time()  # 记录开始时间
    compress_online(input_path, output_path)
    end_time = time.time()  # 记录结束时间
    elapsed_time = end_time - start_time  # 计算耗时（秒）
    print(f"代码运行耗时: {elapsed_time:.4f} 秒")
    
```

### oxipng
> 功能强大，支持多种格式的图片处理。它的前身是 `optipng`，但现在已经不再维护，并且速度相比而言非常慢，不建议使用

设置不同的 `--opt` 参数可以获得不同的压缩效果，但往往推荐用较低的参数换更快的压缩时间
[github](https://github.com/shssoichiro/oxipng)

```python
import subprocess
import os
import time

def compress_png(input_path, output_path, level=2):

    output_dir = os.path.dirname(output_path)
    if output_dir and not os.path.exists(output_dir):
        os.makedirs(output_dir)

    try:
        cmd = [
            r"C:\Users\10971\Desktop\oxipng-9.1.5-x86_64-pc-windows-msvc\oxipng.exe",
            "--opt", str(level),  # 正确写法：分开为两个参数
            "--strip", "safe",
            "--out", output_path,
            input_path,
            "--quiet"  # 可选：静默模式
        ]
        print(cmd)
        
        subprocess.run(cmd, check=True)
        print(f"压缩成功: {input_path} -> {output_path}")
    except FileNotFoundError:
        print("错误: 请先安装 optipng 并添加到系统 PATH")
    except subprocess.CalledProcessError:
        print("错误: 压缩失败（可能图片已优化过）")


input_image = r"C:\Users\10971\Desktop\python\24M-PNG.png"
output_image = r"C:\Users\10971\Desktop\python\oxipng\24M-PNG.png"

start_time = time.time()  # 记录开始时间
compress_png(input_image, output_image)
end_time = time.time()  # 记录结束时间
elapsed_time = end_time - start_time  # 计算耗时（秒）
print(f"代码运行耗时: {elapsed_time:.4f} 秒")
```