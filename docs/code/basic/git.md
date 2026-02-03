# Git 常用操作

## Github 初始化仓库后的第一次提交
在网页端创建好了仓库后（暂时先不创建readme），在shell里依次执行
```bash
git add .
git commit -m "first commit"
git branch -M main
git remote add origin https://<token>@github.com/<username>/<reponame>.git
git push -u origin main
```

## config 操作

```bash
# 屏蔽文件权限的改动
git config --add core.filemode false
# 保存git的用户名和密码
git config --global credential.helper store

# Windows 系统下，拉取代码自动将 LF 转为 CRLF，提交时转为 LF
git config --global core.autocrlf true

# 忽略换行符相关的文件差异（避免 Git 把换行符变化当作文件修改）
git config --global core.safecrlf warn
```
## Github 设置 Accesstoken

在 `Settings/Developer Settings` 里找到 `token` 然后生成一个
![login](/code/basic/git/git_token.jpg)

在使用 `git push` 遭到拒绝时（如下）

```bash
remote: Support for password authentication was removed on August 13, 2021.
remote: Please see https://docs.github.com/get-started/getting-started-with-git/about-remote-repositories#cloning-with-https-urls for information on currently recommended modes of authentication.
fatal: Authentication failed for <url>
```
应当设置 `origin`
```bash
# 如果原来的 `url` 是
https://github.com/<username>/<project>.git、

git remote add origin https://<token>@github.com/<username>/<project>.git     # 设置 origin url
git remote set-url origin https://<token>@github.com/<username>/<project>.git # 更换 origin url
```
## 撤销操作
### 撤销 git add
如果你已经执行了 `git add` 命令将文件添加到了暂存区（staging area），但还没有进行提交，可以使用 `git reset` 命令来撤销
```bash
# 撤销某个文件的添加操作
git reset <file>
# 撤销所有文件的添加操作
git reset
```
### 撤销 git commit
```bash
# 撤销 commit，此时需要 commit 才能恢复到未执行命令前的状态
git reset --soft HEAD^
# 撤销 commit 和 add，此时需要先 add 再 commit 才能恢复到未执行命令前的状态
git reset --mixed HEAD^
# 撤销 commit 和 add，并进行 checkout 操作，这将会丢失所有未提交的更改
git reset --hard HEAD^
```

## Git pull
* `git pull` 的默认行为是 `git fetch` + `git merge`
* `git pull --rebase` 是 `git fetch` + `git rebase`
* `git fetch` 从远程获取最新版本到本地，不会自动合并分支

## Git rebase
`git rebase` 用于把一个分支的修改合并到当前分支。

如果在开发中，开发者A修改了 `deploy.sh` 文件后，进行了提交，开发者B没有拉取最新的代码，也修改了 `deploy.sh` 进行了提交，此时提交不允许，因为本地落后远程分支，必须先拉代码才行，报错可能是这样的
```bash
Updates were rejected because the remote contains work that you do not have locally
```

使用 `git pull --rebase` 与远程代码同步并检查冲突，执行后如果有合并冲突，可以使用以下方案解决
```bash
# 撤销 rebase， 回到没有执行 git pull --rebase 的状态
git rebase --abort
# 引起冲突的 commits 会被丢弃, 例子中B开发者的提交会被丢弃
git rebase --skip
# 手动解决冲突之后，用 git add 命令去更新这些内容的索引(index)，执行该命令就可以线性的连接本地分支和远程分支
git rebase --continue
```
## 暂存区

```bash
# 暂存当前内容
git stash
# 查看stash列表
git stash list
# 清空所有stash
git stash clear
# 删除队列中的第一个
git stash drop stash@{0}
```

## 更改分支名称

```bash
# 切换到要更改的分支
git checkout <branch_name>
# 重命名当前的分支
git branch -m <new_branch_name>
# 如果当前的分支已经推送到远程仓库了，那么需要执行这句话将更改的分支推送到远程仓库
git push origin :<old_branch_name> <new_branch_name>
# 更新本地仓库并追踪新分支的名称，获取最新分支信息并删除不再存在的远程分支
git fetch --all --prune
# 切换到新的分支
git checkout <new_branch_name>
```
注意事项
* 在更改分支名称前，确保当前处于需要改名的分支上，可以使用 `git branch` 命令查看当前所在的分支
* 分支名称的更改可能会影响其他成员的工作，所以应该事前同步
* 如果在推送时遇到问题，或许是由于其他团队成员已经更新了远程分支，此时可以使用 `git push --force` 来强行推送，不过可能会覆盖他人的更改，所以应该事前同步确认
* 更改分支后，如果本地仓库仍然保留了旧的分支的引用，使用 `git branch -d <old_branch_name>` 来删除，这是本地操作不会影响远程分支

## 分支合并
确保在要合并的目标分支上，如果将 `feature` 分支合并到 `master`，则你应该在 `master` 分支上，如果出现了冲突，解决完之后再提交即可
```bash
git checkout master
git merge feature
```

## 更改remote url

如果已经存在了远程url，基本逻辑就是先移除然后再添加，可以使用`-v`来检查当前的`url`
```bash
# 查看当前远程仓库url
git remote -v
# 移除当前的远程仓库url
git remote remove origin
# 添加新的远程仓库url
git remote add origin
```

## 项目本地忽略文件（夹）

编辑 `.git/info/exclude` 文件，添加需要忽略的文件（夹），规则是专属于自己的本地仓库，完全静默，不会被提交或影响他人