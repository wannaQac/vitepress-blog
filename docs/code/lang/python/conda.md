# Conda

### Ubuntu安装
[Conda官网](https://www.anaconda.com/download/)，点击 `Skip registration` 进入下载页面
![Skip registration](/lang/python/condaguanwang.png)
然后直接复制下载的url

![Skip registration](/lang/python/condadownloadurl.png)

```bash
# url要调整为最新的
wget https://repo.anaconda.com/archive/Anaconda3-2025.06-0-Linux-x86_64.sh
bash Anaconda3-2025.06-0-Linux-x86_64.sh
```
执行安装过程中会询问你是否初始化conda bash环境，选择yes即可，source一下就可以在命令行里使用conda了
```bash
source ~/.bashrc
```
如果没有初始化conda bash环境
```bash
# 找到对应的conda下载目录，直接在/bin/conda下执行init
~/anaconda3/bin/conda init bash 
source ~/.bashrc
```
### 创建虚拟环境

```bash
根据名称创建
conda create -n myenv python==3.10 -y #-y自动确认所有提示，在自动化脚本或非交互式场景中很有用，当然为了省实验可以
conda activate myenv

# 根据路径创建
conda create --prefix=/your/custom/path/myenv python==3.10 -y
conda activate /your/custom/path/myenv
```

### 查看虚拟环境
```bash
conda evn list
```

### 删除虚拟环境
```bash
conda evn remove -n myenv
```

### 问题总览


#### 1.报错需要conda init
```bash
CondaError: Run 'conda init' before 'conda activate'
```
即便是执行了init也不好使，正确做法是重新进入虚拟环境、退出虚拟环境、再激活虚拟环境
```bash
# 重新进入虚拟环境
source activate
# 退出虚拟环境
conda deactivate
# 重新激活虚拟环境
conda activate myenv
```