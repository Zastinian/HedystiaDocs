---
id: require
title: Requirements
---

# Manual Installation

## Required Dependencies

- Pterodactyl panel **v1.4 or above** already installed on the same or different server
- **PHP >= 7.4** and the following extensions: `BCMath`, `Ctype`, `Fileinfo`, `JSON`, `Mbstring`, `OpenSSL`, `PDO`, `MySQL`, `Tokenizer`, `XML`, `GD`, `cURL`, and `Zip` (`FPM` if using nginx)
- Composer 2
- Web server (**nginx** is recommended)
- MySQL >= 5.7 or **MariaDB >= 10.2** (MariaDB is recommended)
- Redis server
- SMTP server

## Example Dependencies Installation

If you have already installed Pterodactyl panel on the same server, you usually need not install the dependencies again as EsmileBilling requires the same dependencies as it does.

### Update apt

```bash
apt update -y
```

### Nginx

```bash
apt install -y nginx
```

#### Certbot

```bash
apt install -y certbot
```

### PHP (8.0)

```bash
apt -y install php8.0 php8.0-common php8.0-bcmath php8.0-ctype php8.0-fileinfo php8.0-json php8.0-mbstring openssl php8.0-pdo php8.0-mysql php8.0-tokenizer php8.0-xml php8.0-gd php8.0-curl php8.0-zip php8.0-fpm unzip
systemctl enable php8.0-fpm
systemctl start php8.0-fpm
```

#### Composer

```bash
curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
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
