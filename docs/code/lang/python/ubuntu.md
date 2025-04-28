## Ubuntu 环境搭建

### 下载python
```bash
sudo apt update
# 安装 Python 3
sudo apt install python3
# 安装 pip 包管理工具
sudo apt install python3-pip
# 安装虚拟环境模块
sudo apt install python3-venv 
```

### 使用虚拟管理模块
```bash
# 创建虚拟环境，会在当前路径下新建一个文件夹
python3 -m venv myenv
# 激活虚拟环境
source myenv/bin/activate
# 退出虚拟环境
deactivate
```