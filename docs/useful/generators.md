---
id: generators
title: Generators
description: Use of the generators section
sidebar_position: 3
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="generateKey"></a>

## generateKey([prefix]) ⇒ <code>string</code>

Generates a unique key with the specified prefix.

**Kind**: global function  
**Returns**: <code>string</code> - The generated key.

| Param    | Type                | Description                                           |
| -------- | ------------------- | ----------------------------------------------------- |
| [prefix] | <code>string</code> | The prefix to use for the key (defaults to "PREFIX"). |

**Example**

```js
console.log(generateKey("PREFIX"));
```

<a name="generatePassword"></a>

## generatePassword([length]) ⇒ <code>string</code>

Generates a random password of the specified length.

**Kind**: global function  
**Returns**: <code>string</code> - The generated password.

| Param    | Type                | Default         | Description                             |
| -------- | ------------------- | --------------- | --------------------------------------- |
| [length] | <code>number</code> | <code>10</code> | The length of the password to generate. |

**Example**

```js
console.log(generatePassword(10));
```

<a name="generateCaptcha"></a>

## generateCaptcha([captchaLength]) ⇒ <code>String</code>

Generates a random captcha string with the specified length.

**Kind**: global function  
**Returns**: <code>String</code> - The generated captcha string.

| Param           | Type                | Default        | Description                                                   |
| --------------- | ------------------- | -------------- | ------------------------------------------------------------- |
| [captchaLength] | <code>number</code> | <code>5</code> | The length of the captcha string to generate (defaults to 5). |

**Example**

```js
console.log(generateCaptcha(number));
```
