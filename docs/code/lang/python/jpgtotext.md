# 图像转文本

### Tesseract OCR 方案

#### 安装系统级Tesseract
```bash
sudo apt update
sudo apt install tesseract-ocr
```
#### 安装语言包
```bash
# 查看可用的语言包
apt search tesseract-ocr-
# 安装英文 + 中文简体
sudo apt install tesseract-ocr-eng tesseract-ocr-chi-sim
```

#### 安装python级tesseract绑定
```bash
pip install tesseract
```

#### 基本运行代码
```py
import pytesseract
from PIL import Image

image = Image.open('image.jpg')

# 使用简体中文识别（lang='chi_sim'）
# 自动识别多行文本（config='--psm 6'）
text = pytesseract.image_to_string(image, lang='chi_sim', config='--psm 6 --oem 3')

print(text)
```