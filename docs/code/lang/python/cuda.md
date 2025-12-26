# N卡驱动和CUDA（linux版）

## N卡驱动
### 检查显卡是否被识别
先检查一下是否识别到显卡
```bash
(base) <user@host>:~/pyprojects/model$ lspci | grep -i nvidia
01:00.0 VGA compatible controller: NVIDIA Corporation Device 2b85 (rev a1)
01:00.1 Audio device: NVIDIA Corporation Device 22e8 (rev a1)
21:00.0 VGA compatible controller: NVIDIA Corporation Device 2b85 (rev a1)
21:00.1 Audio device: NVIDIA Corporation Device 22e8 (rev a1)
c1:00.0 VGA compatible controller: NVIDIA Corporation Device 2b85 (rev a1)
c1:00.1 Audio device: NVIDIA Corporation Device 22e8 (rev a1)
c2:00.0 VGA compatible controller: NVIDIA Corporation Device 2b85 (rev a1)
c2:00.1 Audio device: NVIDIA Corporation Device 22e8 (rev a1)
```
如果输出中包含了 `NVIDIA Corporation Device`，说明识别到了。

### 安装N卡驱动
#### 确认驱动是否安装
命令行中输入 ```nvidia-smi```， 如果是 ```zsh:command not found: nvidia-smi```，说明没有安装驱动。

#### 添加官方驱动源
```bash
sudo add-apt-repository ppa:graphics-drivers/ppa
sudo apt update
```
#### 查看可安装的驱动
```bash
ubuntu-drivers devices
```
返回类似：
```bash
== /sys/devices/pci0000:00/0000:00:01.1/0000:01:00.0 ==
modalias : pci:v000010DEd00002B85sv00001462sd00005301bc03sc00i00
vendor   : NVIDIA Corporation
driver   : nvidia-driver-580 - third-party non-free
driver   : nvidia-driver-570 - third-party non-free
driver   : nvidia-driver-570-server-open - distro non-free
driver   : nvidia-driver-580-server - distro non-free
driver   : nvidia-driver-580-open - third-party non-free recommended
driver   : nvidia-driver-570-server - distro non-free
driver   : nvidia-driver-570-open - third-party non-free
driver   : nvidia-driver-580-server-open - distro non-free
driver   : xserver-xorg-video-nouveau - distro free builtin
```
其中带有 `recommended` 的驱动是推荐的驱动，可以安装。

#### 安装驱动
手动安装：
```bash
sudo apt install nvidia-driver-XXX
```
自动安装推荐的驱动
```bash
sudo ubuntu-drivers autoinstall
```
安装成功之后，重启系统，就可以使用 `nvidia-smi` 命令了。

## CUDA下载和安装
### 下载CUDA
访问 [CUDA下载页面](https://developer.nvidia.com/cuda-toolkit-archive) 
![cuda](/lang/python/cuda.jpg)
选择对应的版本，根据系统信息选择，选择`runfile` 文件，选择完成后下方会出现安装命令。
![cudadownload](/lang/python/cudadownload.jpg)
```
wget https://developer.download.nvidia.com/compute/cuda/13.0.0/local_installers/cuda_13.0.0_580.65.06_linux.run
sudo sh cuda_13.0.0_580.65.06_linux.run
```

### 安装CUDA
```bash
sudo sh cuda_13.0.0_580.65.06_linux.run
```
根据提示输入 `accept` 即可。因为已经安装了具体的驱动，所以不需要再次安装驱动。把默认勾选的 `Driver` X去掉。

### 配置环境变量
在 `~/.bashrc` 文件中添加如下内容：
```bash
export PATH=/usr/local/cuda-13.0/bin:$PATH                           
export LD_LIBRARY_PATH=/usr/local/cuda-13.0/lib64:$LD_LIBRARY_PATH
```
```bash
source ~/.bashrc
```
### 验证CUDA安装
在命令行中输入 `nvcc -V` 验证是否安装成功。

### 切换CUDA版本
只要在`~/.bashrc`中切换环境变量即可，不需要卸载旧版本的CUDA。可以多版本CUDA共存的



### 安装过程中CUDA报错
查看提示的log文件，根据具体的错误来解决。
#### gcc版本过高
cuda12.0需要的gcc版本往往是10，cuda13.0可以兼容使用gcc13安装

##### 安装多版本的gcc
```bash
sudo apt update -y
sudo apt install -y gcc-13 g++-13
sudo apt install -y gcc-10 g++-10
```
##### 管理全局 GCC 版本（解决 gcc --version 报错）
```bash
# 注册 GCC 10（优先级 100，数字越小优先级越高，可自定义）
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-10 100
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-10 100

# 注册 GCC 13（优先级 130，低于 GCC 10，默认不生效，按需添加）
sudo update-alternatives --install /usr/bin/gcc gcc /usr/bin/gcc-13 130
sudo update-alternatives --install /usr/bin/g++ g++ /usr/bin/g++-13 130
```
##### 切换默认 GCC 版本
```bash
# 交互式选择默认 GCC 版本（执行后按数字回车即可）
sudo update-alternatives --config gcc
sudo update-alternatives --config g++
```

## 安装cuDNN
### 下载cuDNN
访问 [cuDNN下载页面](https://developer.nvidia.com/cudnn) 
![cudnn](/lang/python/cudnn.jpg)
直接找下载资源
![cudnndownload](/lang/python/cudnndownload.jpg)
![cudnnredist](/lang/python/cudnnredist.jpg)
![cudnnredistos](/lang/python/cudnnredistos.jpg)
![cudnnfinal](/lang/python/cudnnfinal.jpg)

### 安装cuDNN
将 `tar` 包下载之后，解压并复制文件到对应位置

```bash
tar -xvf cudnn-linux-x86_64-9.13.1.26_cuda13-archive.tar.xz
sudo cp cudnn-linux-x86_64-9.13.1.26_cuda13-archive/include/cudnn*.h /usr/local/cuda-12.5/include
sudo cp -P cudnn-linux-x86_64-9.13.1.26_cuda13-archive/lib/libcudnn* /usr/local/cuda-12.5/lib64 
chmod a+r /usr/local/cuda-12.5/include/cudnn*.h /usr/local/cuda-12.5/lib64/libcudnn*
```
### 验证cuDNN安装
```bash
cat /usr/local/cuda/include/cudnn_version.h | grep CUDNN_MAJOR -A 2
```
如果内容如下，就表示安装成功
![cudnnyanzheng](/lang/python/cudnnyanzheng.jpg)