# Wan2.2-I2V-A14B-Diffusers

### 下载模型

```bash
export HF_ENDPOINT=https://hf-mirror.com
hf download Wan-AI/Wan2.2-I2V-A14B-Diffusers --local-dir ./I2V 
````


### 直接调用huggingface提供的接口

```python
import os
from huggingface_hub import InferenceClient

client = InferenceClient(
    provider="auto",
    api_key="key",
)

with open("./2560x1440.jpg", "rb") as image_file:
   input_image = image_file.read()

video = client.image_to_video(
    input_image,
    prompt="The wedding reception was lively, charming, full of love, of high quality and with low noise. The bride and groom first exchanged a tender glance, then turned towards the audience and waved to everyone.",
    model="Wan-AI/Wan2.2-I2V-A14B-Diffusers",
)

output_path = "output_video.mp4"
with open(output_path, "wb") as f:
    f.write(video)

print(f"视频已保存至: {os.path.abspath(output_path)}")
```