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

# clone git repo
git clone https://github.com/morteza-rostami-cs/spaces.git .

run npm i

# create a .env file
# copy env stuff manually



####

# how to setup vps key on remote server

# add local ssh key to remote
ssh-copy-id -i ~/.ssh/vps_server.pub root@213.176.7.243

ssh -i ~/.ssh/vps_server root@213.176.7.243

####


```
