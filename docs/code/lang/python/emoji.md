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
print(is_emoji('❤'))    # True
print(is_emoji('👍'))   # True
print(is_emoji('A'))    # False
```

### 判断一个字符串是否包含emoji
```python
import emoji
def contains_emoji(text):
    emojis = emoji.emoji_list(text)
    return len(emojis) > 0

print(contains_emoji('Hello, world! 😊')) # True
print(contains_emoji('Hello, world!')) # False 
```