# OpenClaw
> 文档：[https://docs.openclaw.ai](https://docs.openclaw.ai)
### 安装
事先准备好 Node.js(>22) 环境，然后安装 OpenClaw CLI 工具。
```
npm install -g openclaw
```
截止到 `2026.02.27` 日，比较稳定的社区版本是 `2.15` 日的版本，所以我们可以
```
npm install -g openclaw@2026.2.15
```

### 配置
安装完成之后，使用 `openclaw onboard` 进行初始化

### 命令行操作
- 打开管理后台 openclaw dashboard
- 查看管理后台 openclaw dashboard --no-open
- 停止网关 openclaw gateway stop
- 打开网关 openclaw gateway 


### 定时任务

添加每天的定时任务
```
openclaw cron add \
--name "errorlog" \
--cron "0 8 * * *" \
--tz "Asia/Shanghai" \
--session isolated \
--message "分析/Users/gaobin/Desktop/longxia/errorlog/errorlog/errorlog.json文件中的错误日志，并提出修复方案" \
--announce \
--channel feishu \
--to "chat:oc_90c0f96984b407ee9326accdf757adab"
```

### 多Agent

#### Agent目录结构
在 OpenClaw 中，每个 Agent 不只是一个名字，而是一个完全独立的虚拟员工。理解这一点非常关键：

```
~/.openclaw/agents/<agentId>/
├── agent/                    # 身份证件
│   ├── auth-profiles.json    # 认证配置（用哪个 API Key）
│   └── models.json           # 模型配置（用哪个模型）
└── sessions/                 # 私人日记
    ├── <session-id>.jsonl    # 独立的聊天记录
    └── sessions.json         # 会话索引

~/.openclaw/workspace-<agentId>/
├── SOUL.md                   # 灵魂/人格定义
├── AGENTS.md                 # Agent 行为规范
├── USER.md                   # 用户信息
├── PROMPT.md                 # 提示词模板
├── IDENTITY.md               # 身份定义
└── memory/                   # 记忆存储
```

#### 添加Agent
新增一个名为 writer 的 Agent
```
openclaw agents add writer \
  --model deepseek/deepseek-chat \
  --workspace ~/.openclaw/workspace-writer
```
配置SOUL.md
```
# Writer Agent

## 角色
你是一位资深的公众号写作专家，擅长用犀利、真实的视角剖析技术话题。

## 风格
- 开头必须用一个引人入胜的场景或反直觉的观点
- 段落短小精悍，移动端阅读友好
- 善用类比，让小学生也能听懂复杂概念
- 结尾必须有行动号召（CTA）

## 禁忌
- 不使用"众所周知""不言而喻"等空洞词汇
- 不堆砌术语，每个专业名词第一次出现时必须解释
```
配置Agent.md
```
# 工作规范

## 输出格式
- 所有文章使用 Markdown 格式
- 标题层级不超过三级（H2 > H3 > H4）
- 代码块必须标注语言类型

## 工作流程
1. 先列大纲，确认后再展开
2. 每个段落不超过 150 字
3. 完成后自检 SEO 要素
```
配置User.md
```
# 用户信息

## 身份
博主，技术自媒体作者，专注 AI 工具和效率提升。

## 偏好
- 语言风格：专业但不学术，有温度
- 目标读者：对 AI 感兴趣的技术人和产品经理
- 发布平台：微信公众号 + 个人博客
```
### 频道

#### 配置飞书
```
openclaw plugins install @m1heng-clawd/feishu
openclaw config set channels.feishu.appId ""
openclaw config set channels.feishu.appSecret ""
openclaw config set channels.feishu.enabled true
openclaw config set channels.feishu.connectionMode "webhook"
openclaw gateway stop
openclaw gateway
```

配置完飞书机器人后，并且完成上述绑定，在飞书向机器人发送消息，第一次会遇到一个验证，在 `openclaw` 的机器上运行配对命令即可

```
OpenClaw: access not configured.
Your Feishu user id: ou_8b3d927e936d77cb84199fe878a97b71
Pairing code: SRZQLCEZ
Ask the bot owner to approve with:
openclaw pairing approve feishu XXXXXXX
```

### 搜索服务
默认继承了 `Brave Search API`，可以直接配上 `API Key` 进行搜索。
```
openclaw configure --section web
```

### 升级
```
openclaw update
```
升级之后，如 `2026.3.2` 的版本，可能会出现定时任务没有权限访问文件的情况，这种情况可以尝试重新使用命令行配置定时任务。
### 卸载
```
openclaw uninstall
```
```
npm uninstall -g openclaw
```
