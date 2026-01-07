# Florence-2-base-PromptGen-v1.5

> 一个提示词反推模型


### 安装
官方没有说具体要安装的依赖，以下是我在使用过程中发现缺一个安一个，版本也不一定完全匹配，但它能工作，显卡是RTX5090

```
python==3.12
```

```
torch==2.8.0
torchvision==0.23.0
transformers==4.38.0
timm==0.9.8
einops==0.8.1
accelerate==0.24.1
flash_attn==2.8.3
```

### 运行代码
```python
import torch
from PIL import Image
from transformers import AutoProcessor, AutoModelForCausalLM

# 1. 加载模型与处理器（trust_remote_code 必须）
model_name = "/home/hunbei/modelscopemodel/Florence_PromptGen"
processor = AutoProcessor.from_pretrained(model_name, trust_remote_code=True)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    trust_remote_code=True,
    torch_dtype=torch.float16,  # RTX 5090 用 fp16 速度快、显存省
).to("cuda")

# 2. 加载图像（本地路径或 PIL 图像）
image_path = "letsgo.jpg"
image = Image.open(image_path).convert("RGB")

# 3. 选择指令（根据需求替换）
task_prompt = "<MORE_DETAILED_CAPTION>"  # 或 <GENERATE_TAGS>/<MIXED_CAPTION>

# 4. 预处理与生成
inputs = processor(images=image, text=task_prompt, return_tensors="pt").to("cuda", torch.float16)
generated_ids = model.generate(
    input_ids=inputs["input_ids"],
    pixel_values=inputs["pixel_values"],
    max_new_tokens=1024,  # 控制输出长度，足够生成详细 prompt
    do_sample=False,  # 确定性生成，避免重复
    num_beams=3
)

# 5. 解码与后处理（提取纯 prompt）
generated_text = processor.batch_decode(generated_ids, skip_special_tokens=False)[0]
parsed_prompt = processor.post_process_generation(
    generated_text,
    task=task_prompt,
    image_size=(image.width, image.height)
)

# 输出结果
print("生成的提示词：")
print(parsed_prompt)
```