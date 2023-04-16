---
id: start
title: Getting Started
description: Getting Started Section
sidebar_position: 1
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

# Manual Installation

## Required Dependencies

- Pterodactyl panel **v1.4 or above** already installed on the same or different server
- **PHP >= 8.2** and the following extensions: `BCMath`, `Ctype`, `Fileinfo`, `JSON`, `Mbstring`, `OpenSSL`, `PDO`, `MySQL`, `Tokenizer`, `XML`, `GD`, `cURL`, and `Zip` (`FPM` if using nginx)
- Composer 2
- Web server (**nginx** is recommended)
- MySQL >= 5.7 or **MariaDB >= 10.2** (MariaDB is recommended)
- Redis server
- SMTP server

## Example Dependencies Installation

If you have already installed Pterodactyl panel on the same server, you usually need not install the dependencies again as HedystiaBilling requires the same dependencies as it does.

### Update apt

```bash
apt update -y
```

### Certbot

```bash
apt install -y certbot
# Run this if you use Nginx
sudo apt install -y python3-certbot-nginx
# Run this if you use Apache
sudo apt install -y python3-certbot-apache
```

### Dependency Installation

```bash
# Add "add-apt-repository" command
apt -y install software-properties-common curl apt-transport-https ca-certificates gnupg

# Add additional repositories for PHP, Redis, and MariaDB
LC_ALL=C.UTF-8 add-apt-repository -y ppa:ondrej/php

# Add Redis official APT repository
curl -fsSL https://packages.redis.io/gpg | sudo gpg --dearmor -o /usr/share/keyrings/redis-archive-keyring.gpg
echo "deb [signed-by=/usr/share/keyrings/redis-archive-keyring.gpg] https://packages.redis.io/deb $(lsb_release -cs) main" | sudo tee /etc/apt/sources.list.d/redis.list

# MariaDB repo setup script can be skipped on Ubuntu 22.04
curl -sS https://downloads.mariadb.com/MariaDB/mariadb_repo_setup | sudo bash

# Update repositories list
apt update

# Add universe repository if you are on Ubuntu 18.04
apt-add-repository universe

# Install Dependencies
apt -y install php8.2 php8.2-{common,cli,gd,mysql,mbstring,bcmath,xml,fpm,curl,zip} mariadb-server nginx tar unzip git redis-server
```

### Composer

```bash
curl -sS https://getcomposer.org/installer | sudo php -- --install-dir=/usr/local/bin --filename=composer
```

### MariaDB

```bash
apt install -y mariadb-common mariadb-server mariadb-client

systemctl start mariadb
systemctl enable mariadb

mysql_secure_installation

Change to your own secure password
Set root password? [Y/n] Y

Get rid of users that could access the db by default
Remove anonymous users? [Y/n] Y

Keep root off the external interfaces
Disallow root login remotely? [Y/n] Y

Extra databases that aren't needed
Remove test database and access to it? [Y/n] Y

Clears and sets all the changes made
Reload privilege tables now? [Y/n] Y
```

### Redis

```bash
apt install -y redis-server

systemctl start redis-server
systemctl enable redis-server
```

### SMTP Server

If you don't have one, you may use Gmail SMTP server for free.
[https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server](https://www.hostinger.com/tutorials/how-to-use-free-google-smtp-server)

## Download Files

```shell
mkdir -p /var/www/billing
cd /var/www/billing
```

```shell
curl -Lo HedystiaBilling.zip https://github.com/Zastinian/HedystiaBilling/releases/latest/download/HedystiaBilling.zip
unzip HedystiaBilling.zip
chmod -R 755 storage/* bootstrap/cache/
```

## Configure

```sql
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'hedystiabilling'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE billing;
GRANT ALL PRIVILEGES ON billing.* TO 'hedystiabilling'@'127.0.0.1' WITH GRANT OPTION;
exit
```

```shell
cp .env.example .env
composer install --no-dev --optimize-autoloader

php artisan key:generate --force
```

## Environment Configuration

:::warning

## Please read!

If these steps are omitted, billing may not work.
:::

```shell
php artisan p:update:config

php artisan migrate --seed --force

php artisan p:update:settings
```

## Optimize Performance

Cache the configurations and views to optimize the performance.

```shell
php artisan config:cache
php artisan view:cache
```

## Set Up Cron Job

Then, let's set up a cron job. Run the following command to open the crontab configuration.

```shell
crontab -e
```

Copy and paste the following line to the file.

```shell
* * * * * php /var/www/billing/artisan schedule:run >> /dev/null 2>&1
```

## Admin User

```shell
php artisan p:make:client example@domain.com --admin
```

## For Nginx Users

### Create Virtual Host Configuration

Next, create a file named `/etc/nginx/sites-available/billing.conf`. Then, copy and paste the content below into the file. Replace &lt;domain&gt; with your domain name.

#### Example

```bash
nano /etc/nginx/sites-available/billing.conf
```

#### Conf File

```conf
server {
    # Replace the example <domain> with your domain name or IP address
    listen 80;
    server_name <domain>;


    root /var/www/billing/public;
    index index.html index.htm index.php;
    charset utf-8;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    access_log off;
    error_log  /var/log/nginx/billing.app-error.log error;

    # allow larger file uploads and longer script runtimes
    client_max_body_size 100m;
    client_body_timeout 120s;

    sendfile off;

    location ~ \.php$ {
        fastcgi_split_path_info ^(.+\.php)(/.+)$;
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        include fastcgi_params;
        fastcgi_param PHP_VALUE "upload_max_filesize = 100M \n post_max_size=100M";
        fastcgi_param SCRIPT_FILENAME $document_root$fastcgi_script_name;
        fastcgi_param HTTP_PROXY "";
        fastcgi_intercept_errors off;
        fastcgi_buffer_size 16k;
        fastcgi_buffers 4 16k;
        fastcgi_connect_timeout 300;
        fastcgi_send_timeout 300;
        fastcgi_read_timeout 300;
    }

    location ~ /\.ht {
        deny all;
    }
}
```

### Create Certificate If You Don't Have One Or If You Need One

```bash
# Nginx
certbot certonly --nginx -d example.com
# Apache
certbot certonly --apache -d example.com
# Standalone - Use this if neither works. Make sure to stop your webserver first when using this method.
certbot certonly --standalone -d example.com
```

### Enable the Configuration

Finally, enable the configuration and restart the Nginx server.

```bash
ln -s /etc/nginx/sites-available/billing.conf /etc/nginx/sites-enabled/billing.conf
systemctl restart nginx
```

## For Non-Nginx users

HedystiaBilling should work on most of the popular web servers, such as Nginx, Apache, and LiteSpeed. However, we currently only focus on supporting Nginx. If you need help set up HedystiaBilling on Apache, please take a look at [the guide from Pterodactyl](https://pterodactyl.io/panel/1.0/webserver_configuration.html#apache-with-ssl).

## Increase Panel API Rate Limit

The following steps are completely optional. If you want to prevent HedystiaBilling from failing to communicate with Pterodactyl panel, please add the following lines to the end of the **.env file of Pterodactyl panel**.

```
APP_API_CLIENT_RATELIMIT=1440
APP_API_APPLICATION_RATELIMIT=480
```

The above lines tell Pterodactyl to accept more API requests. If there are more than 300 users using HedystiaBilling at the same time, consider increase both values to avoid reaching the limit.

## Enable the Configuration

To apply the changes we just made, run the following command **where Pterodactyl panel is installed**:

```shell
php artisan config:cache
```
