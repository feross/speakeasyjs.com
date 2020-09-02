#!/bin/sh
# Trigger a deploy on server
set -e

figlet "Deploying..."
git push
ssh future -t zsh -ci "/home/feross/www/speakeasy.com/tools/deploy.sh"
# curl https://api.rollbar.com/api/1/deploy/ -F access_token=$(node tools/print-rollbar-token.js) -F environment=production -F revision=$(git log -n 1 --pretty=format:"%H") -F local_username=$(whoami)
figlet "Deployed"
