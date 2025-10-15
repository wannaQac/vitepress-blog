## 换源

`Python` 使用 `pip` 作为包管理器默认的下载可能会比较慢，会造成超时，此时就要换源，往往用的是阿里源：`https://mirrors.aliyun.com/pypi/simple`。

#### 临时使用
在使用 `pip install` 时可以临时指定镜像源

```bash
pip install <包名> -i <源>
```
部分的包可以通过指定具体的路径来加速
```bash
pip install torch==2.4.0 torchvision==0.19.0 torchaudio==2.4.0 --index-url https://download.pytorch.org/whl/cu121
```

#### 永久更改

```bash
pip config set global.index-url <源>
```

```bash
pip config set global.index-url https://mirrors.aliyun.com/pypi/simple
```
```bash
pip config set global.index-url https://pypi.tuna.tsinghua.edu.cn/simple
```