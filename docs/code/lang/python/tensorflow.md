## Tensorflow报错

### 初始化动态链接库DDL失败
```bash
from tensorflow.python._pywrap_tensorflow_internal import *
ImportError: DLL load failed while importing _pywrap_tensorflow_internal: 动态链接库(DLL)初始化例程失败。
```

尝试下载 `VC++` 运行库，2015-2022即可。如果没有安装会导致 `DDL` 加载失败