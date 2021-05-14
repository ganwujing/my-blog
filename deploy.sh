# !/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
sudo npm run docs:build

# 进入生成的文件夹
cd docs/.vuepress/dist

# 如果是发布到自定义域名
# echo 'www.example.com' > CNAME
time=$(date "+%Y-%m-%d %H:%M:%S")
sudo git init
sudo git add -A
sudo git commit -m "Deploy time: ${time}"
# 如果发布到 https://<USERNAME>.github.io
# ssh -T git@github.com
git push -f git@github.com:ganwujing/ganwujing.github.io.git master
# 如果发布到 https://<USERNAME>.github.io/<REPO>
# git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# 删除生成的文件夹
cd ..
sudo rm -rf dist