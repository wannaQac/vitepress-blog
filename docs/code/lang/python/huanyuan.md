## 换源

`Python` 使用 `pip` 作为包管理器默认的下载可能会比较慢，会造成超时，此时就要换源，往往用的是阿里源：`https://mirrors.aliyun.com/pypi/simple`。

#### 临时使用
在使用 `pip install` 时可以临时指定镜像源

```bash
pip install <包名> -i <源>
```

#### 永久更改

```bash
pip config set global.index-url <源>
```