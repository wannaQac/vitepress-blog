# Windows

#### 因为在系系统上禁止运行脚本

* 首先，使用“以管理员身份运行”打开 `PowerShell`。 
* 然后，在 `PowerShell` 中运行此命令 `Set-ExecutionPolicy -ExecutionPolicy RemoteSigned`。
* 之后，键入 `Y` 并按 `Enter` 键。

#### 远程链接身份验证错误，阻止NTLM身份验证

修改注册表，WIN+R 输入 `regedit` 打开注册表，找到 `HKEY_LOCAL_MACHINE\SOFTWARE\Microsoft\Windows\CurrentVersion\Policies\System\CredSSP\Parameters`。如果没有就使用 `新建项` 一路新建，然后在右侧新建一个名为 `AllowEncryptionOracle` 的 `DWORD` 值，将其值设置为 `2`（易受攻击）。