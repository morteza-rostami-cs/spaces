```bash

mkdir spaces
cd spaces

npm init -y
npm install express ejs

# layouts for ejs
npm i express-ejs-layouts


```

```bash

# vps setup

ssh root@ip

sudo apt update
sudo apt upgrade -y

# install node
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.4/install.sh | bash

export NVM_DIR="$HOME/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"

nvm install 25.9.0

# install some dependency
sudo apt update
sudo apt install libatomic1

node -v
npm --version

# set as default
nvm alias default 25.9.0

# app directory
mkdir -p /var/www
cd /var/www

# app folder
mkdir spaces
cd spaces

```
