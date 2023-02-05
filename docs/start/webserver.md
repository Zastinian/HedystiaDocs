---
id: webserver
title: Webserver Configuration
---

## For Nginx Users

### Create SSL Certificate

First, create an SSL certificate. Please follow [the guide from Pterodactyl](https://pterodactyl.io/tutorials/creating_ssl_certificates.html).

### Create Virtual Host Configuration

Next, create a file named `/etc/nginx/sites-available/billing.conf`. Then, copy and paste the content below into the file. Replace &lt;domain&gt; with your domain name.

#### Example

```bash
nano /etc/nginx/sites-available/billing.conf
```

#### Conf File

```conf
server {
    listen 80;
    server_name <domain>;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name <domain>; # Edit this
    root /var/www/billing/public;

    add_header X-Frame-Options "SAMEORIGIN";
    add_header X-Content-Type-Options "nosniff";
    add_header X-XSS-Protection "1; mode=block";
    add_header X-Robots-Tag none;
    add_header Content-Security-Policy "frame-ancestors 'self'";
    add_header Referrer-Policy same-origin;

    index index.php;

    charset utf-8;

    access_log /var/log/nginx/billing.access.log;
    error_log  /var/log/nginx/billing.error.log error;

    ssl_certificate /etc/letsencrypt/live/<domain>/fullchain.pem; # Edit this
    ssl_certificate_key /etc/letsencrypt/live/<domain>/privkey.pem; # Edit this
    ssl_session_cache shared:SSL:10m;
    ssl_protocols TLSv1.2 TLSv1.3;
    ssl_ciphers "ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES256-GCM-SHA384:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-CHACHA20-POLY1305:ECDHE-RSA-CHACHA20-POLY1305:DHE-RSA-AES128-GCM-SHA256:DHE-RSA-AES256-GCM-SHA384";
    ssl_prefer_server_ciphers on;

    location / {
        try_files $uri $uri/ /index.php?$query_string;
    }

    location = /favicon.ico { access_log off; log_not_found off; }
    location = /robots.txt  { access_log off; log_not_found off; }

    error_page 404 /index.php;

    location ~ \.php$ {
        fastcgi_pass unix:/run/php/php8.2-fpm.sock;
        fastcgi_index index.php;
        fastcgi_param SCRIPT_FILENAME $realpath_root$fastcgi_script_name;
        include fastcgi_params;
    }

    location ~ /\.ht {
        deny all;
    }

    location ~ /\.(?!well-known).* {
        deny all;
    }
}
```

### Enable the Configuration

Finally, enable the configuration and restart the Nginx server.

```bash
ln -s /etc/nginx/sites-available/billing.conf /etc/nginx/sites-enabled/billing.conf
systemctl restart nginx
```

## For Non-Nginx users

EsmileBilling should work on most of the popular web servers, such as Nginx, Apache, and LiteSpeed. However, we currently only focus on supporting Nginx. If you need help set up EsmileBilling on Apache, please take a look at [the guide from Pterodactyl](https://pterodactyl.io/panel/1.0/webserver_configuration.html#apache-with-ssl).
