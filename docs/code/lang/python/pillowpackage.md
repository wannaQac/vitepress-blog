# pillow package

### 有损压缩
有损压缩通常用于 `JPEG` 格式，可以通过降低图像质量来显著减小文件大小。如果是 `PNG` 转 `JPG` 则需要注意检测图像模式，如果是 `RGBA` 则需要转换为 `RGB` 再进行压缩。
```python
from PIL import Image

def compress_image_lossy(input_path, output_path, quality=85):
    img = Image.open(input_path)

    # 如果图像有透明度（即RGBA模式），将其转换为RGB模式，否则直接保存会报错：OSError: cannot write mode RGBA as JPEG
    if img.mode == 'RGBA':
        img = img.convert('RGB')

    img.save(output_path, format='JPEG', quality=quality, optimize=True)

input_path = 'input.png'  
output_path = 'output.jpg'  

compress_image_lossy(input_path, output_path, quality=85)
``` 
### 无损压缩
无损压缩通常用于PNG格式，优化文件大小但不损失图像质量。
```python
from PIL import Image

def compress_image_lossless(input_path, output_path):
    img = Image.open(input_path)
    img.save(output_path, format='PNG', optimize=True)


input_path = 'input.png'  
output_path = 'output.png'  

compress_image_lossless(input_path, output_path)
```