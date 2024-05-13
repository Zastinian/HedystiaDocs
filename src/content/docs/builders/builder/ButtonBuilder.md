---
title: ButtonBuilder
sidebar:
  order: 1
---

The Button class is a class that represents a button.

**Kind**: global class

- [ButtonBuilder](#ButtonBuilder)
  - [new ButtonBuilder()](#new_ButtonBuilder_new)
  - _instance_
    - [.setLabel(label)](#ButtonBuilder+setLabel)
    - [.setEmoji(emoji)](#ButtonBuilder+setEmoji)
    - [.setDisabled()](#ButtonBuilder+setDisabled) ⇒
    - [.setStyle(style)](#ButtonBuilder+setStyle) ⇒
    - [.setUrl(url)](#ButtonBuilder+setUrl)
    - [.setCustomId(customid)](#ButtonBuilder+setCustomId)
    - [.toJSON()](#ButtonBuilder+toJSON) ⇒
  - _static_
    - [.transformFields(fields)](#ButtonBuilder.transformFields) ⇒

<a name="new_ButtonBuilder_new"></a>

### new ButtonBuilder()

The function takes an object as an argument, and then assigns the object's properties to the
function's properties.

<a name="ButtonBuilder+setLabel"></a>

### buttonBuilder.setLabel(label)

This function sets the label property of the component to the value of the label parameter.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Access**: public

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| label | <code>string</code> | The label of the button. |

<a name="ButtonBuilder+setEmoji"></a>

### buttonBuilder.setEmoji(emoji)

This function sets the emoji property of the component to the emoji passed in as an argument.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Access**: public

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| emoji | <code>Object</code> | The emoji to set. |

<a name="ButtonBuilder+setDisabled"></a>

### buttonBuilder.setDisabled() ⇒

`setDisabled()` sets the `disabled` property to `true` and returns the object.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Returns**: The object itself.  
<a name="ButtonBuilder+setStyle"></a>

### buttonBuilder.setStyle(style) ⇒

`setStyle` is a function that takes a parameter called `style` and sets the value of the `style`
property of the object that called it to the value of the `style` parameter.

The `return this` statement at the end of the function is a common pattern in JavaScript. It allows
us to chain function calls together. For example, we can call `setStyle` and then immediately call
`setColor` like this:

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Returns**: The object itself.  
**Access**: public

| Param | Type                | Description                        |
| ----- | ------------------- | ---------------------------------- |
| style | <code>number</code> | The style to apply to the element. |

<a name="ButtonBuilder+setUrl"></a>

### buttonBuilder.setUrl(url)

This function sets the url property of the component to the url passed in as an argument.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Access**: public

| Param | Type                | Description                       |
| ----- | ------------------- | --------------------------------- |
| url   | <code>string</code> | The URL of the page to be loaded. |

<a name="ButtonBuilder+setCustomId"></a>

### buttonBuilder.setCustomId(customid)

This function sets the customid property of the component to the value of the customid parameter.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Access**: public

| Param    | Type                | Description                |
| -------- | ------------------- | -------------------------- |
| customid | <code>string</code> | The custom id of the user. |

<a name="ButtonBuilder+toJSON"></a>

### buttonBuilder.toJSON() ⇒

It returns an object with the properties of the button.

**Kind**: instance method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Returns**: An object with the properties type, custom_id, style, label, emoji, disabled, and url.  
**Access**: public  
<a name="ButtonBuilder.transformFields"></a>

### ButtonBuilder.transformFields(fields) ⇒

This function takes an object with properties named 'emoji', 'text', 'url', 'customid', 'style', and
'disabled', and returns an object with the same properties, but with the names changed to 'emoji',
'label', 'url', 'customid', 'style', and 'disabled'.

**Kind**: static method of [<code>ButtonBuilder</code>](#ButtonBuilder)  
**Returns**: The transformFields function is returning an object with the following properties:
emoji, label, url, customid, style, and disabled.  
**Access**: public

| Param  | Description                                        |
| ------ | -------------------------------------------------- |
| fields | The fields object that is passed to the component. |
