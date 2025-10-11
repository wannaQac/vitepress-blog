
# 图片画质修复

## Real-ESRGAN

### 报错信息：
#### ImportError: libGL.so.1: cannot open shared object file: No such file or directory

解决方案：
```bash
# ubuntu
sudo apt update
sudo apt install libgl1
```