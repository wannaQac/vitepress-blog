# Git 常用操作

## config 操作

```bash
# 屏蔽文件权限的改动
git config --add core.filemode false
# 保存git的用户名和密码
git config --global credential.helper store
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
