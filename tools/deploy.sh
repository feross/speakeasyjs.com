#!/bin/sh
# Update code and restart server (run on server)
set -e

if [ -d "/home/feross/www/build-speakeasyjs.com" ]; then
  echo "ERROR: Build folder exists. Is another build in progress?"
  exit 1
fi

if [ -d "/home/feross/www/old-speakeasyjs.com" ]; then
  echo "ERROR: Old folder exists. Did a previous build crash?"
  exit 1
fi

cp -a /home/feross/www/speakeasyjs.com /home/feross/www/build-speakeasyjs.com

cd /home/feross/www/build-speakeasyjs.com && git pull
cd /home/feross/www/build-speakeasyjs.com && rm -rf node_modules
cd /home/feross/www/build-speakeasyjs.com && npm ci --no-progress
cd /home/feross/www/build-speakeasyjs.com && npm run build
cd /home/feross/www/build-speakeasyjs.com && npm prune --production --no-progress

sudo supervisorctl stop speakeasyjs.com

cd /home/feross/www && mv speakeasyjs.com old-speakeasyjs.com
cd /home/feross/www && mv build-speakeasyjs.com speakeasyjs.com

sudo supervisorctl start speakeasyjs.com

cd /home/feross/www && rm -rf old-speakeasyjs.com
