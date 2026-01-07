# MiniCPM-V-2_6

### 安装

对于RTX5090，需要以下的依赖版本

```
torch==2.8
torchvision==0.23.0
transformers==4.41.0
numpy==1.26.4
decord==0.6.0
sentencepiece==0.1.99
``` 

### 使用
```python
import torch
from PIL import Image
from modelscope import AutoModel, AutoTokenizer

name = "/home/hunbei/modelscopemodel/MiniCPMV2_6"
model = AutoModel.from_pretrained(name, trust_remote_code=True,
    attn_implementation='sdpa', torch_dtype=torch.bfloat16) # sdpa or flash_attention_2, no eager
model = model.eval().cuda()
tokenizer = AutoTokenizer.from_pretrained(name, trust_remote_code=True)

image = Image.open('xx.jpg').convert('RGB')
question = 'Provide a detailed description of the entire scene, with a particular focus on the characters.'
msgs = [{'role': 'user', 'content': [image, question]}]

res = model.chat(
    image=None,
    msgs=msgs,
    tokenizer=tokenizer
)

generated_text = ""
for new_text in res:
    generated_text += new_text

print(generated_text)
```