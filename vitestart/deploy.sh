#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

# 意思为将master构建后的代码合并到gh-pages分支上，然后在gh-pages分支上部署~, 替换<token>为git的token
git push -f https://<token>@github.com/wannaQac/vitepress-blog.git/ master:gh-pages

# 更改token后为了避免提交到github，可以使用 git update-index --assume-unchanged vitestart/deploy.sh 来取消git对文件的跟踪
# 可以使用 git update-index --no-assume-unchanged vitestart/deploy.sh 来恢复git对文件的跟踪

cd -
