# 抠图
### 省事命令行简单调用方案
> https://github.com/danielgatis/rembg
```bash
rembg i path/to/input.png path/to/output.png
# 通过-m指定使用的模型
rembg i -m u2netp path/to/input.png path/to/output.png
```
### 代码方案
> https://huggingface.co/ZhengPeng7/BiRefNet

可以直接把模型下载，然后指定模型路径
```bash
export HF_ENDPOINT=https://hf-mirror.com
hf download ZhengPeng7/BiRefNet --local-dir ./BiRefNet
```
```python
import glob
import tqdm
import os

from PIL import Image
import torch
from torchvision import transforms
from transformers import AutoModelForImageSegmentation
import argparse

def main(args):
    # Load BiRefNet with weights
    model = AutoModelForImageSegmentation.from_pretrained(args.model_path, trust_remote_code=True)
    torch.set_float32_matmul_precision(['high', 'highest'][0])
    model.to('cuda')
    model.eval()

    # Data settings
    image_size = (1024, 1024)
    transform_image = transforms.Compose([
        transforms.Resize(image_size),
        transforms.ToTensor(),
        transforms.Normalize([0.485, 0.456, 0.406], [0.229, 0.224, 0.225])
    ])

    paths = sorted(glob.glob(f'{args.input_dir}/*'))
    for img in tqdm.tqdm(paths):
        image = Image.open(img)
        input_images = transform_image(image).unsqueeze(0).to('cuda')

        # Prediction
        with torch.no_grad():
            preds = model(input_images)[-1].sigmoid().cpu()
        pred = preds[0].squeeze()
        pred_pil = transforms.ToPILImage()(pred)
        mask = pred_pil.resize(image.size)
        image.putalpha(mask)

        output_path = os.path.join(args.output_dir, f"foreground_{os.path.splitext(os.path.basename(img))[0]}.png")
        image.save(output_path)

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--model_path', type=str, default='ZhengPeng7/BiRefNet', help='Path to the segmentation model')
    parser.add_argument('--input_dir', type=str, required=True, help='Directory for input images')
    parser.add_argument('--output_dir', type=str, required=True, help='Directory to save output images')
    args = parser.parse_args()
    if not os.path.exists(args.output_dir):
        os.makedirs(args.output_dir)
    main(args)
```