# huggingface
[链接](https://huggingface.co/)，一个机器学习（ML）和数据科学平台和社区，帮助用户构建，部署和训练机器学习模型
> The AI community building the future

### 从huggingface下载模型
```bash
pip install huggingface-hub
```
此后就可以使用 `df` 命令下载模型了，例如：
```bash
export HF_ENDPOINT=https://hf-mirror.com
hf download ff2416/kontext --local-dir ./kontext
```

# modelscope
[链接](https://modelscope.cn/models)，超多的模型

### 从modelscope下载模型
```bash
pip install modelscope
```
具体的用法: [链接](https://www.modelscope.cn/docs/models/download)
```bash
modelscope download --model Qwen/Qwen-Image-Edit-2511 --local_dir Qwen-Image-Edit-2511
```