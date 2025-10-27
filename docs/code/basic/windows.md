# Windows

### 因为在系系统上禁止运行脚本

* 首先，使用“以管理员身份运行”打开 `PowerShell`。 
* 然后，在 `PowerShell` 中运行此命令 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`。
* 之后，键入 `Y` 并按 `Enter` 键。

### 远程链接身份验证错误，阻止NTLM身份验证

修改注册表，WIN+R 输入 `regedit` 打开注册表，找到 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters`。如果没有就使用 `新建项` 一路新建，然后在右侧新建一个名为 `AllowEncryptionOracle` 的 `DWORD` 值，将其值设置为 `2`（易受攻击）。


### 开机自启

#### 使用的启动文件夹
* 当前用户的启动文件夹：如 `C:\Users\Administrator\AppData\Roaming\Microsoft\Windows\Start Menu\Programs\Startup`。
* 所有用户的启动文件夹：如 `C:\ProgramData\Microsoft\Windows\Start Menu\Programs\Startup` 

把程序的快捷方式或者是一些 `bat` 文件放进去，系统会在登录时自动启动对应的程序。
```bat
cmd /k "cd /d C:\Users\Administrator\pythonProject\pythonProject4&&python.exe C:\Users\Administrator\pythonProject\pythonProject4\localhost.py"
```


还可以按 `Win` + `R` 打开运行框，输入以下内容快速打开文件夹。
```bash
# 打开当前用户的启动文件夹
shell:startup
# 打开所有用户的启动文件夹
shell:Common Startup​ 
```