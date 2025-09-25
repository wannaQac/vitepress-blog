# FLUX.1-Kontext
> FLUX.1 Kontext 是由 黑森林实验室（Black Forest Labs）开发的一款专业图像生成与编辑模型，专注于通过上下文感知技术实现精准的图像编辑。该模型支持文本和图像的混合输入，能够智能理解图像内容并执行对象修改、风格转换、背景替换等多种编辑任务，同时在多轮编辑中较好地保持主体一致性，解决了传统模型在这一领域的痛点⁠⁣ 。

### 模型与部署
[huggingface模型链接](https://huggingface.co/black-forest-labs/FLUX.1-Kontext-dev)

```python
import torch
from diffusers import FluxKontextPipeline
from diffusers.utils import load_image

pipe = FluxKontextPipeline.from_pretrained("black-forest-labs/FLUX.1-Kontext-dev", torch_dtype=torch.bfloat16)
pipe.to("cuda")

input_image = load_image("https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/diffusers/cat.png")

image = pipe(
  image=input_image,
  prompt="Add a hat to the cat",
  guidance_scale=2.5
).images[0]

```