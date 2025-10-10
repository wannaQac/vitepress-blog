# 打印Emoji

### 一个简单的Python程序来打印Emoji。

```python
from PIL import Image, ImageDraw, ImageFont

# 创建空白图像（白色背景）
image = Image.new("RGB", (300, 200), "white")
draw = ImageDraw.Draw(image)

# 加载seguiemj字体（替换为实际路径）
font_path = "./seguiemj.ttf"
font_size = 70  # 定义字体大小（支持任意正整数）
emoji_font = ImageFont.truetype(font_path, size=font_size)

# 指定embedding color为True来使用字体嵌入的彩色字形
emojitext = "👍"  # 替换为目标emoji
draw.text((30, 30), emojitext, font=emoji_font, fill=None, embedded_color=True)

# 保存图像
image.save("emoji_output.png")
# 显示图像
image.show()
```

### 使用regex正确分割emoji
`regex` 库可以用来正确分割 `Emoji`，正确处理基础 `Emoji`（如😊）和组合 `Emoji`（如👍🏻），避免打印错误
```python
# 一个示例，不使用regex库处理直接迭代数组，部分emoji会被分割错误，识别为多个emoji。
import emoji
import regex

str = ':thumbs_up_light_skin_tone::victory_hand::pensive_face::smiling_face_with_smiling_eyes::unamused_face::rolling_on_the_floor_laughing:'
print(str)
print(emoji.emojize(str))

for index,value in enumerate(emoji.emojize(str)):
    print(value, emoji.demojize(value))

for match in regex.finditer(r'\X', emoji.emojize(str)):
    char = match.group()
    print(char, emoji.demojize(char))
```
可以定义一个专门处理的函数，在进行字符串遍历打印时，调用一下
```python
import emoji
import regex
def is_emoji(char):
    return char in emoji.EMOJI_DATA

# 简单版本
def safe_string_iter(text):
    return regex.findall(r'\X', text)

# 增强版本，只对emoji保留原始长度，非emoji拆分为单字符，应用场景中发生了藏文也被保留长度的情况
def safe_string_iter_strong(text):
    chars = []
    for char in regex.findall(r'\X', text):
        if is_emoji(char):
            chars.append(char)  # Emoji保留原始长度
        else:
            chars.extend(list(char))  # 非Emoji拆分为单字符
    return chars

for num, element in enumerate(safe_string_iter(t)):
    # 代码
```
### 现在可以使用的emoji字体ttf

#### 微软官方的Segoe UI Symbol字体
微软开发，商用需要授权的字体。[官网](https://learn.microsoft.com/en-us/typography/font-list/segoe-ui-emoji)，对 `windows` 支持的很好，网上下的往往是较老的版本，直接去 `windows` 以下路径找就行
```
C:\Windows\Fonts\ 
搜索 Segoe UI Emoji，名字可能是 Segoe UI Emoji 常规，点开之后只要字体名称对即可
```
![emoji](/lang/python/segoe_emoji.jpg)

#### Google的Noto Color
谷歌开发并开源的字体。[github](https://github.com/googlefonts/noto-emoji)
直接去 `font` 目录下载对应的字体就行，该链接的字体是有色的，需要注意的是，字号大小是109，不支持别的字号。如果能接受纯色，可以去找这个字体对应的纯色，貌似支持可变字体
```
NotoColorEmoji.ttf 仅支持字号为109，是位图不支持别的字号
Noto-COLRv1.ttf 目前用ImageFont.truetype加载不出来
```

#### twemoji
> Twitter Color Emoji SVGinOT Font

推特的字体。[github](https://github.com/13rac1/twemoji-color-font)，可以打印并支持可变字体，不过貌似无法使用彩色，只能单色

