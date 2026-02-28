# macOS

### 容易遇到的问题

#### Crontab执行后在 /var/mail/{user} 中提示 Operation not permitted

- 赋予cron全磁盘访问权限: `系统偏好设置->安全性和隐私->完全磁盘访问权限`
- 点击 `+` 号，按住 `command+shift+g` ，添加 `usr/sbin` 下的 `cron`
