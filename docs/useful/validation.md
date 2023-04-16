---
id: validation
title: Validations
description: Use of the validation section
sidebar_position: 2
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="isValidEmail"></a>

## isValidEmail(email) ⇒ <code>Boolean</code>

Check if it is a email

**Kind**: global function  
**Returns**: <code>Boolean</code> - Boolean

| Param | Type                |
| ----- | ------------------- |
| email | <code>String</code> |

**Example**

```js
console.log(isValidEmail("test@email.com"));
```

<a name="isValidNumber"></a>

## isValidNumber(number) ⇒ <code>Boolean</code>

Check if it is a number

**Kind**: global function  
**Returns**: <code>Boolean</code> - Boolean

| Param  | Type                |
| ------ | ------------------- |
| number | <code>Number</code> |

**Example**

```js
console.log(isValidNumber(number));
```

<a name="isValidUrl"></a>

## isValidUrl(content, whitelist) ⇒ <code>Boolean</code>

Check that the text is a link | Only texts with http: or https:

**Kind**: global function  
**Returns**: <code>Boolean</code> - Boolean

| Param     | Type                |
| --------- | ------------------- |
| content   | <code>String</code> |
| whitelist | <code>Array</code>  |

**Example**

```js
console.log(isValidUrl("https://google.com"));
```

<a name="isEmptyString"></a>

## isEmptyString(value) ⇒ <code>Boolean</code>

Check if the text is not empty

**Kind**: global function  
**Returns**: <code>Boolean</code> - Boolean

| Param | Type                |
| ----- | ------------------- |
| value | <code>String</code> |

**Example**

```js
console.log(isEmptyString("Something"));
```
