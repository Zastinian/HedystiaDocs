---
id: extensions
title: Extensions
description: Extensions Section
sidebar_position: 3
keywords: [Esmile, MrEsmile, Esmile Bot, Boxmine]
---

## What are extensions?

- **Gateways** add payment gateways, e.g. PayPal

## Paypal

### Obtaining API Credentials

### Sandbox Mode

**NOTE:** You should always test the billing system with Sandbox mode before accepting payments from your clients.

Log into [PayPal Developer dashboard](https://developer.paypal.com/developer/accounts/) and create a new sandbox account.

View the **Business** sandbox account's API credentials. Copy the **NVP/SOAP Sandbox API Credentials** and paste them into the PayPal settings page in EsmileBilling. You may leave the other settings blank. Click `Save Changes` and `Reload Config`.

### Live Mode

Log into your PayPal account and go to this page: [https://www.paypal.com/businessprofile/mytools/apiaccess/firstparty/signature](https://www.paypal.com/businessprofile/mytools/apiaccess/firstparty/signature). Then, copy the **NVP/SOAP Sandbox API Credentials** and paste them into the PayPal settings page in EsmileBilling. You may leave the other settings blank. After that, click `Save Changes` and `Reload Config`.
