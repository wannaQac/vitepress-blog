# Docker

## 1. Docker Desktop
[下载链接](https://docs.docker.com/desktop/setup/install/)

## 2. 常用的命令

### 查看容器
```bash
#查看正在运行的容器
docker ps
#查看所有的容器
docker ps -a 
```
### 操作容器
```bash
docker stop <容器ID或容器名称>
docker restart <容器ID或容器名称>
docker rm <容器ID或容器名称>
# 进入容器
docker exec -it <容器ID或容器名称>  /bin/bash 
```