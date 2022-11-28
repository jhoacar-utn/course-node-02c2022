#!/bin/bash

# Windows -> \r\n -> Salto de linea
# Linux o Mac -> \n -> Salto de linea

set -x

# Git configuration

git remote set-url origin "$GITHUB_SSH_URL"
git config --global user.email "$GIT_EMAIL"
git config --global user.name "$GIT_USERNAME" 

# Generating SSH Key if doesn't exists

ID_RSA=~/.ssh/id_rsa
if [ ! -f "$ID_RSA" ]; then
    ssh-keygen -q -t rsa -N '' -f $ID_RSA <<<y
fi

# Executing main loop for the container
exec tail -f /dev/null