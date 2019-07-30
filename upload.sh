#!/bin/bash

rootPath=$PWD

npm run build
echo '已打包'

sleep 1

# 上传 dist/* 到远程
scp -r ${rootPath}/dist/* root@39.106.117.191:/home/ran/www/display/
echo '已更新'