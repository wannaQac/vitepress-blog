# 图片分辨率调整

### Image.resize()
需要安装 `pillow` 库，下面的代码是一个将短边缩放到指定尺寸的函数，重点就是使用 `Image.resize()` 函数进行图片缩放。
```python
from PIL import Image

def smart_resize(image_path, output_path, max_size=1024):
    """
    智能等比缩放图片，至少一个边达到目标尺寸
    如果没有任何一边达到目标尺寸，则原封不动返回
    
    参数:
        image_path: 输入图片路径
        output_path: 输出图片路径
        max_size: 目标最大边长(默认1024)
    """
    with Image.open(image_path) as img:
        # 获取原始尺寸
        width, height = img.size
        print(f"原始尺寸: {width}×{height}")

        # 检查是否已经有任意一边达到或超过目标尺寸
        if width >= max_size or height >= max_size:
            print("已有边达到目标尺寸，进行缩放处理")
            
            # 计算缩放比例
            if width < height:
                # 竖版图片：宽度缩放到max_size，高度按比例缩放
                new_width = max_size
                new_height = int(height * (max_size / width))
            else:
                # 横版图片：高度缩放到max_size，宽度按比例缩放
                new_height = max_size
                new_width = int(width * (max_size / height))

            print(f"缩放后尺寸: {new_width}×{new_height}")

            # 使用LANCZOS高质量抗锯齿滤波器
            resized_img = img.resize((new_width, new_height), Image.LANCZOS)
            
            # 保存缩放后的图片
            resized_img.save(output_path, quality=95)
            print(f"缩放后的图片已保存到: {output_path}")
            
        else:
            print("没有任何边达到目标尺寸，原样保存")
            # 直接保存原图
            img.save(output_path, quality=95)
            print(f"原图已保存到: {output_path}")

# 使用示例
smart_resize("try.png", "tryoutput.png", 1024)
```

### OpenCV

```python
import cv2
img = cv2.imread("input.jpg")
resized = cv2.resize(img, (new_width, new_height), 
                    interpolation=cv2.INTER_AREA)
cv2.imwrite("output.jpg", resized)

```