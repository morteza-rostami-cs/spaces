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

npm run i

# create a .env file
# copy env stuff manually

npm run start

# available locally
curl http://localhost:3000

#====================

# install nginx

sudo apt install nginx -y

sudo systemctl status nginx

# configure nginx
sudo nano /etc/nginx/sites-available/spaces

####

server {
    listen 80;

    server_name YOUR_DOMAIN_OR_IP;

    location / {
        proxy_pass http://127.0.0.1:3000;

        proxy_http_version 1.1;

        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
    }
}

####

# create a link
sudo ln -s \
  /etc/nginx/sites-available/spaces \
  /etc/nginx/sites-enabled/spaces

# test config file
sudo nginx -t

sudo systemctl reload nginx

/etc/nginx/sites-available

# create a process manger -- so node server runs in the background

# create a systemd service
sudo nano /etc/systemd/system/spaces.service

####

[Unit]
Description=Spaces App
After=network.target

[Service]
WorkingDirectory=/var/www/spaces
ExecStart=/root/.nvm/versions/node/v25.9.0/bin/node --env-file=.env src/server.js
Restart=always
Environment=NODE_ENV=production

[Install]
WantedBy=multi-user.target

####

sudo systemctl daemon-reload
sudo systemctl enable spaces
sudo systemctl start spaces
sudo systemctl restart spaces
sudo systemctl status spaces

# view app logs -- running in systemd process
journalctl -u spaces -f

# if you change systemd file -- do daemon-reload

# if you change project files -- reset service to see the changes
sudo systemctl restart spaces

# something like this for updating the project
cd /var/www/spaces
git pull
npm install          # only if package.json changed
sudo systemctl restart spaces

####

# how to setup vps key on remote server

# add local ssh key to remote
ssh-copy-id -i ~/.ssh/vps_server.pub root@213.176.7.243

ssh -i ~/.ssh/vps_server root@213.176.7.243

####

```

```bash

# database setup

npm install better-sqlite3

```
