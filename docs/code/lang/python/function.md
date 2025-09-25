# 函数
> python的函数是一等对象


### 为函数动态添加属性
```python
def myfunc():
    myfunc.dyattr = '1'

myfunc()
print(myfunc.dyattr)  # 1
```

静态变量的替代方案：如果有一个 `python` 函数，它每次被调用时都会进行初始化，比如引入字体，那么就可以使用函数属性来实现静态变量的替代方案，反复执行该函数时，只会初始化一次字体，后续调用时直接复用该字体。

```python
from PIL import ImageFont

def get_text_width_or_height(text):
    # 检查是否已经初始化过字体（函数属性）
    if not hasattr(get_text_width_or_height, "font"):
        # 第一次调用时初始化字体（只执行一次）
        font_path = "your_font.ttf"  # 替换为你的字体路径
        font_size = 24
        get_text_width_or_height.font = ImageFont.truetype(font_path, font_size)
    
    font = get_text_width_or_height.font
    # 下面写你的逻辑，比如获取宽度或高度
    width, height = font.getsize(text)
    return height  # 或者 width，根据你需求

# 第一次调用会初始化字体
print(get_text_width_or_height("你好"))

# 第二次调用复用已经初始化的字体，不会重复加载
print(get_text_width_or_height("世界"))
```