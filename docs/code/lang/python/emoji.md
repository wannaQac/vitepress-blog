# Emoji表情
### 安装
```bash
pip install emoji
```     
### 判断字符是不是一个Emoji

```python
import emoji

def is_emoji(s):
    return s in emoji.EMOJI_DATA

# 测试
print(is_emoji('😊'))   # True
print(is_emoji('❤️'))   # True
print(is_emoji('❤'))    # False
print(is_emoji('👍'))   # True
print(is_emoji('A'))    # False
```