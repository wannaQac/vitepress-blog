# flash-attn

### 错误的安装方式
不要直接使用
```bash
pip install flash-attn
```
这样安装要么卡在 `Building wheel for flash-attn (setup.py)...` 要么直接报错


### 正确的安装方式
直接去 `github` 下载 `whl` 文件，然后使用 `pip install` 安装，[项目地址](https://github.com/Dao-AILab/flash-attention)

```bash
pip install path/flash_attn-2.8.3+cu12torch2.8cxx11abiTRUE-cp310-cp310-linux_x86_64.whl
```
