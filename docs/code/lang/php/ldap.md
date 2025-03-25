## LDAP -- Lightweight Directory Access Protocol

### 定义
LDAP是轻量级目录访问协议，是用于访问“目录服务器”的协议。这是一种特殊的数据库，它以树状结构保存信息。
该数据库有很强的读（查询）能力，但只能进行简单的写（更新）操作。

### 名称解释

#### dc -- Domain Component
域组织，用于标识域名的一部分。（可以对应理解为关系型数据库的库）
例如：`dc=example,dc=com` 表示 `example.com`。

#### dn -- Distinguished Name
用于标识唯一一个项，以及它在目录信息树中的位置。（可以对应理解为关系型数据库的一条数据）
例如：`cn=dev,ou=group,dc=example,dc=com` 就是一条dn字符串，从左向右各部分依次向树根靠近。

#### rdn -- Relative Distinguished Name
键值对，一个 `dn` 由若干个 `rdn` 组成，用于标识目录信息树中的一个节点。
例如：一个dn为 `cn=dev,ou=group,dc=example,dc=com`，那么 `cn=dev` 就是 `dn` 中的一个 `rdn`。

#### ou -- Organizational Unit
组织单元、部门。
例如：`ou=group,dc=example,dc=com` 表示 `group.example.com`。

#### cn -- Common Name
通用名称，是LDAP目录中用于标识对象（如用户、组、设备等）的一个关键属性。例如：`cn=张三,ou=技术部,dc=example,dc=com`，表示在 `example.com` 域的技术部组织单元中名为“张三”的对象。

标识对象：CN通常用于表示对象的名称，例如：
* 用户：cn=张三（表示用户“张三”）
* 组：cn=开发组（表示一个组）
* 设备：cn=打印机01（表示一台设备）