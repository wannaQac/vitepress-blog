### ModuleNotFoundError: 没有名为“torchvision.transforms.functional_tensor”的模块
解决方案

打开 `path/site-packages/basicsr/data/degradations.py` 第 8 行，只需更改：

```python
from torchvision.transforms.functional_tensor import rgb_to_grayscale
```
到：

```python
from torchvision.transforms.functional import rgb_to_grayscale
```