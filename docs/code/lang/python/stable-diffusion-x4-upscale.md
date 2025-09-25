# Stable Diffusion with x4 Upscaling

> 该模型通过先进的扩散模型技术，能够在保持图像质量的同时，显著提升放大效率。

### 模型与部署
[stabilityai/stable-diffusion-x4-upscaler模型链接](https://huggingface.co/stabilityai/stable-diffusion-x4-upscaler)

```python
from diffusers import StableDiffusionUpscalePipeline

import torch

from PIL import Image
# 可以传入模型的路径，也可以是官方的名字
# pipe = StableDiffusionUpscalePipeline.from_pretrained("stabilityai/stable-diffusion-x4-upscaler", torch_dtype=torch.float16)
pipe = StableDiffusionUpscalePipeline.from_pretrained("/root/shared-nvme/stable-diffusion-x4-upscaler", torch_dtype=torch.float16)
pipe = pipe.to("cuda")

low_res_img = Image.open("middle.jpg").convert("RGB")
prompt = "a detailed high resolution image"
result = pipe(
        prompt=prompt,
        image=low_res_img,
        num_inference_steps=45,
).images[0]

result.save("middle_high.jpg")
```