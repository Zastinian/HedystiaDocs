---
id: install
title: Installation
---

## Download Files

```shell
mkdir -p /var/www/billing
cd /var/www/billing
```

```shell
curl -Lo EsmileBilling.zip https://github.com/Zastinian/EsmileBilling/releases/latest/download/EsmileBilling.zip
unzip EsmileBilling.zip
chmod -R 755 storage/* bootstrap/cache/
```

## Configure

```sql
mysql -u root -p

# Remember to change 'yourPassword' below to be a unique password
CREATE USER 'esmilebilling'@'127.0.0.1' IDENTIFIED BY 'yourPassword';
CREATE DATABASE billing;
GRANT ALL PRIVILEGES ON billing.* TO 'esmilebilling'@'127.0.0.1' WITH GRANT OPTION;
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
