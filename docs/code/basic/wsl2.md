#### 1.获取WSL2的IP
`WSL2` 的 `IP` 是固定的，不再是动态的了
```bash
ip addr show eth0 | grep -oP '(?<=inet\s)\d+(\.\d+){3}'
```