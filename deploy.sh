# #!/usr/bin/env sh

# # 确保脚本抛出遇到的错误
# set -e

# # 生成静态文件
# npm run docs:build

# # 进入生成的文件夹
# cd docs/.vuepress/dist

# # 如果是发布到自定义域名
# # echo 'www.example.com' > CNAME
# time=$(date "+%Y-%m-%d %H:%M:%S")
# git init
# git add -A
# git commit -m "Deploy time: ${time}"

# # 如果发布到 https://<USERNAME>.github.io
# # ssh -v git@github.com
# # git push -f git@github.com:ganwujing/ganwujing.github.io.git master
# ssh -T git@github.com
# # 如果发布到 https://<USERNAME>.github.io/<REPO>
# # git push -f git@github.com:<USERNAME>/<REPO>.git master:gh-pages

# # 删除生成的文件夹
# cd ..
# rm -rf dist

# rm -rf .git
# time=$(date "+%Y-%m-%d %H:%M:%S")
# git init
# git add -A
# git commit -m "Deploy time: ${time}"
# ssh -T git@github.com
eval "$(ssh-agent -s)"
# 1
