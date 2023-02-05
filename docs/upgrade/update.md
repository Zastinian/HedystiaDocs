---
id: update
title: Updating
---

## Backup Current Installation

```bash
cd /var/www
mv billing billing-backup
mysqldump -u username -p password mydatabase > /path/to/billing-backup.sql
```

## Install the New Version

```bash
cd /var/www/billing

php artisan down

curl -Lo EsmileBilling.zip https://github.com/Zastinian/EsmileBilling/releases/latest/download/EsmileBilling.zip

unzip EsmileBilling.zip

chmod -R 755 storage/* bootstrap/cache

composer install --no-dev --optimize-autoloader

php artisan view:clear
php artisan config:clear

php artisan migrate --seed --force
```

## Set Permissions

```bash
# If using NGINX or Apache (not on CentOS):
chown -R www-data:www-data /var/www/billing/*

# If using NGINX on CentOS:
chown -R nginx:nginx /var/www/billing/*

# If using Apache on CentOS
chown -R apache:apache /var/www/billing/*
```

## Install

```bash
php artisan queue:restart

php artisan up
```
