## Conda

### 创建虚拟环境

```
根据名称创建
conda create -n myenv python==3.10 -y #-y自动确认所有提示，在自动化脚本或非交互式场景中很有用，当然为了省实验可以
conda activate myenv

# 根据路径创建
conda create --prefix=/your/custom/path/myenv python==3.10 -y
conda activate /your/custom/path/myenv
```

### 查看虚拟环境
```
conda evn list
```

### 删除虚拟环境
```
conda evn remove -n myenv
```

### 问题总览


#### 1.报错需要conda init
```
CondaError: Run 'conda init' before 'conda activate'
```
即便是执行了init也不好使，正确做法是重新进入虚拟环境、退出虚拟环境、再激活虚拟环境
```
# 重新进入虚拟环境
source activate
# 退出虚拟环境
conda deactivate
# 重新激活虚拟环境
conda activate myenv
```