## MiniCPM-V-2_6

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

## MiniCPM-V-4.5

### 安装

对于RTX5090，需要以下的依赖版本

```
torch==2.9.1
torchvision==0.24.1
transformers==4.57.3
decord==0.6.0
sentencepiece==0.2.1
``` 

```python
import torch
from PIL import Image
import logging
import warnings
from transformers import logging as transformers_logging
from modelscope import AutoModel, AutoTokenizer

torch.manual_seed(100)
transformers_logging.set_verbosity_error()
warnings.filterwarnings("ignore")

name = "/home/hunbei/modelscopemodel/MiniCPMV4_5"
model = AutoModel.from_pretrained(name, trust_remote_code=True, # or openbmb/MiniCPM-o-2_6
    attn_implementation='sdpa', dtype=torch.bfloat16) # sdpa or flash_attention_2, no eager
model = model.eval().cuda()
tokenizer = AutoTokenizer.from_pretrained(name, trust_remote_code=True) # or openbmb/MiniCPM-o-2_6

image = Image.open('./girl.jpg').convert('RGB')

enable_thinking=False # If `enable_thinking=True`, the thinking mode is enabled.
stream=False # If `stream=True`, the answer is string

# First round chat 
question = 'Describe the entire scene, providing a detailed account of the characters actions, clothing and appearance, use concise words and keep the total length within 300 words'
msgs = [{'role': 'user', 'content': [image, question]}]

answer = model.chat(
    msgs=msgs,
    tokenizer=tokenizer, 
    enable_thinking=enable_thinking,
    stream=stream
)         
         
print(answer)
```