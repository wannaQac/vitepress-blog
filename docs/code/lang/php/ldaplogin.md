
```php
<?php
$ldap_server   = "<ldap_server>";   // LDAP服务器地址
$ldap_port     = 389;               // LDAP服务器端口 往往是389
$ldap_user     = "<ldap_user>";     // LDAP服务器用户 类似"CN=<CN>,OU=<OU>,OU=<OU>,DC=<DC>,DC=<DC>"
$ldap_password = "<ldap_password>"; // LDAP服务器密码

$username = "<domain>";   // 测试连接的账户名，往往是邮箱
$password = "<password>"; // 测试连接的密码

ldap_set_option(NULL, LDAP_OPT_DEBUG_LEVEL, 7); // 开启调试模式

$ldap_conn = ldap_connect($ldap_server, $ldap_port);
if(!$ldap_conn)
{
    die("无法连接到LDAP服务器");
}

ldap_set_option($ldap_conn, LDAP_OPT_PROTOCOL_VERSION, 3); // 设置LDAP协议版本
ldap_set_option($ldap_conn, LDAP_OPT_REFERRALS, 0);        // 禁用LDAP引用
ldap_set_option($ldap, LDAP_OPT_NETWORK_TIMEOUT, 6)        // 设置超时时间

$user_bind = ldap_bind($ldap_conn, $username, $password);
if($user_bind)
{
    echo "登录成功";
}
else
{
    echo "登录失败";
}

ldap_unbind($ldap_conn);
```