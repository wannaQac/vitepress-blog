# Multipass 配置流程
## 1.Multipass 是什么

Multipass 是一个轻量虚拟机管理器，是由 Ubuntu 运营公司 Canonical 所推出的开源项目。运行环境支持 Linux、Windows、macOS。在不同的操作系统上，使用的是不同的虚拟化技术。

## 2.Windows 配置 Multipass 流程

### 2.1 确保电脑开启了虚拟化

在任务管理器中可以看到，具体开启的方法各家BIOS都不一样，自己搜吧
![virtualization](/code/basic/multipass/virtualization.png)

### 2.2 确保电脑启动了 hyper-v

`Windows` 要支持 `hyper-v`，我的是win11专业版，如果是win10/11的家庭版，tb自己10块钱买一个升级一下，启动方法为控制面板-程序-启动或关闭windows功能-Hyper-V，勾选后等待系统配置，会提醒你重启
![hyperv](/code/basic/multipass/hyperv.png)

### 2.3 安装 Multipass

::: warning
Note: You need Windows 10 Pro/Enterprise/Education v 1803 or later, or any Windows 10 with VirtualBox
:::
[Install link](https://multipass.run/install)

推荐使用 `hyper-v`, 其他的一路点下来即可
![installselect](/code/basic/multipass/installselect.png)
