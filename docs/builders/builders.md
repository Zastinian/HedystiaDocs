---
id: builders
title: Builders
description: Builders Section
sidebar_position: 2
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="ButtonBuilder"></a>

## ButtonBuilder

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

<a name="EmbedBuilder"></a>

## EmbedBuilder

It's a class that creates a Discord embed.

**Kind**: global class

- [EmbedBuilder](#EmbedBuilder)
  - [new EmbedBuilder([data])](#new_EmbedBuilder_new)
  - _instance_
    - [.setTitle(title)](#EmbedBuilder+setTitle) ⇒
    - [.setDescription(description)](#EmbedBuilder+setDescription) ⇒
    - [.setURL(url)](#EmbedBuilder+setURL) ⇒
    - [.setTimestamp(timestamp)](#EmbedBuilder+setTimestamp) ⇒
    - [.setColor(color)](#EmbedBuilder+setColor) ⇒
    - [.setFooter(footer)](#EmbedBuilder+setFooter) ⇒
    - [.setImage(image)](#EmbedBuilder+setImage) ⇒
    - [.setThumbnail(thumbnail)](#EmbedBuilder+setThumbnail) ⇒
    - [.setAuthor(author)](#EmbedBuilder+setAuthor) ⇒
    - [.addFields(...fields)](#EmbedBuilder+addFields) ⇒
    - [.addField(nm, vl, il)](#EmbedBuilder+addField) ⇒
    - [.setFields(...fields)](#EmbedBuilder+setFields) ⇒
    - [.toJSON()](#EmbedBuilder+toJSON) ⇒
  - _static_
    - [.transformFields(fields)](#EmbedBuilder.transformFields) ⇒

<a name="new_EmbedBuilder_new"></a>

### new EmbedBuilder([data])

It takes in an object, and then assigns the values of the object to the class properties.

| Param  | Description                    |
| ------ | ------------------------------ |
| [data] | The data to use for the embed. |

<a name="EmbedBuilder+setTitle"></a>

### embedBuilder.setTitle(title) ⇒

It sets the title of the book and returns the book object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| title | <code>string</code> | The title of the modal. |

<a name="EmbedBuilder+setDescription"></a>

### embedBuilder.setDescription(description) ⇒

The function sets the description of the object and returns the object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param       | Type                | Description                   |
| ----------- | ------------------- | ----------------------------- |
| description | <code>string</code> | The description of the field. |

<a name="EmbedBuilder+setURL"></a>

### embedBuilder.setURL(url) ⇒

This function sets the url property of the object it is called on to the value of the argument
passed in, and then returns the object it was called on.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param | Type                | Description                     |
| ----- | ------------------- | ------------------------------- |
| url   | <code>string</code> | The URL to send the request to. |

<a name="EmbedBuilder+setTimestamp"></a>

### embedBuilder.setTimestamp(timestamp) ⇒

It takes a timestamp and converts it to an ISO string.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param     | Description                   |
| --------- | ----------------------------- |
| timestamp | The timestamp of the message. |

<a name="EmbedBuilder+setColor"></a>

### embedBuilder.setColor(color) ⇒

This function sets the color of the object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The color of the object.

| Param | Description            |
| ----- | ---------------------- |
| color | The color of the line. |

<a name="EmbedBuilder+setFooter"></a>

### embedBuilder.setFooter(footer) ⇒

The setFooter function takes a footer parameter and sets the footer property of the object to the
footer parameter. It then returns the object

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param  | Description      |
| ------ | ---------------- |
| footer | The footer text. |

<a name="EmbedBuilder+setImage"></a>

### embedBuilder.setImage(image) ⇒

It sets the image property of the object to the image parameter if the image parameter is not
null, otherwise it sets the image property to undefined

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param | Description           |
| ----- | --------------------- |
| image | The image to display. |

<a name="EmbedBuilder+setThumbnail"></a>

### embedBuilder.setThumbnail(thumbnail) ⇒

It sets the thumbnail property of the object to the thumbnail parameter if it exists, otherwise it
sets it to undefined

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param     | Description                 |
| --------- | --------------------------- |
| thumbnail | The thumbnail of the embed. |

<a name="EmbedBuilder+setAuthor"></a>

### embedBuilder.setAuthor(author) ⇒

The function sets the author of the book and returns the book object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param  | Description             |
| ------ | ----------------------- |
| author | The author of the book. |

<a name="EmbedBuilder+addFields"></a>

### embedBuilder.addFields(...fields) ⇒

It takes an array of objects, and pushes each object into another array

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is the instance of the class.

| Param     | Description                    |
| --------- | ------------------------------ | ----------------- |
| ...fields | Array&lt;EmbedBuilderField&gt; | EmbedBuilderField |

<a name="EmbedBuilder+addField"></a>

### embedBuilder.addField(nm, vl, il) ⇒

It adds a field to the embed

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.

| Param | Description             |
| ----- | ----------------------- |
| nm    | The name of the field.  |
| vl    | The value of the field. |
| il    | Inline                  |

<a name="EmbedBuilder+setFields"></a>

### embedBuilder.setFields(...fields) ⇒

It takes an array of objects, and then maps over each object, and then returns the mapped array

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The fields are being returned.

| Param     | Description                    |
| --------- | ------------------------------ | ----------------- |
| ...fields | Array&lt;EmbedBuilderField&gt; | EmbedBuilderField |

<a name="EmbedBuilder+toJSON"></a>

### embedBuilder.toJSON() ⇒

It returns an object with the properties of the embed

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is an object with the properties of the embed.  
<a name="EmbedBuilder.transformFields"></a>

### EmbedBuilder.transformFields(fields) ⇒

It takes an array of objects, and returns an array of objects with the same keys, but with the
values transformed

**Kind**: static method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is an object with the properties name, value, and inline.

| Param  | Description                          |
| ------ | ------------------------------------ |
| fields | The fields to be added to the embed. |

<a name="RowBuilder"></a>

## RowBuilder

It's a constructor function that takes an object as an argument and sets the type property to 1 and
the components property to the components property of the object if it exists, otherwise it sets it
to an empty array

**Kind**: global class

- [RowBuilder](#RowBuilder)
  - [new RowBuilder([data])](#new_RowBuilder_new)
  - [.addComponents(button)](#RowBuilder+addComponents) ⇒ [<code>RowBuilder</code>](#RowBuilder)
  - [.build()](#RowBuilder+build) ⇒ <code>Array.&lt;object&gt;</code>

<a name="new_RowBuilder_new"></a>

### new RowBuilder([data])

It's a constructor function that takes an object as an argument and sets the type property to 1 and
the components property to the components property of the object if it exists, otherwise it sets it
to an empty array.

| Param  | Description                                        |
| ------ | -------------------------------------------------- |
| [data] | The data object that is passed to the constructor. |

<a name="RowBuilder+addComponents"></a>

### rowBuilder.addComponents(button) ⇒ [<code>RowBuilder</code>](#RowBuilder)

Add a button to the row.

**Kind**: instance method of [<code>RowBuilder</code>](#RowBuilder)  
**Returns**: [<code>RowBuilder</code>](#RowBuilder) - The updated RowBuilder object.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| button | <code>object</code> | Button object to add to the row. |

<a name="RowBuilder+build"></a>

### rowBuilder.build() ⇒ <code>Array.&lt;object&gt;</code>

Returns the button row.

**Kind**: instance method of [<code>RowBuilder</code>](#RowBuilder)  
**Returns**: <code>Array.&lt;object&gt;</code> - The button row as an array of button objects.

<a name="SelectMenuBuilder"></a>

## SelectMenuBuilder

It's a class that allows you to build a SelectMenu object that can be sent to Discord

**Kind**: global class

- [SelectMenuBuilder](#SelectMenuBuilder)
  - [.type](#SelectMenuBuilder+type) : <code>number</code>
  - [.custom_id](#SelectMenuBuilder+custom_id) : <code>string</code>
  - [.placeholder](#SelectMenuBuilder+placeholder) : <code>string</code>
  - [.options](#SelectMenuBuilder+options) : <code>Array.&lt;Object&gt;</code>
  - [.min_values](#SelectMenuBuilder+min_values) : <code>number</code>
  - [.max_values](#SelectMenuBuilder+max_values) : <code>number</code>
  - [.disabled](#SelectMenuBuilder+disabled) : <code>boolean</code>
  - [.setCustomId(customId)](#SelectMenuBuilder+setCustomId) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.setPlaceholder(placeholder)](#SelectMenuBuilder+setPlaceholder) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.addOption(label, value, [description], [emoji])](#SelectMenuBuilder+addOption) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.setMinValues(minValues)](#SelectMenuBuilder+setMinValues) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.setMaxValues(maxValues)](#SelectMenuBuilder+setMaxValues) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.setDisabled(disabled)](#SelectMenuBuilder+setDisabled) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)
  - [.build()](#SelectMenuBuilder+build) ⇒ <code>Object</code>

<a name="SelectMenuBuilder+type"></a>

### selectMenuBuilder.type : <code>number</code>

The type of the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>3</code>  
<a name="SelectMenuBuilder+custom_id"></a>

### selectMenuBuilder.custom_id : <code>string</code>

The custom ID of the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>&quot;null&quot;</code>  
<a name="SelectMenuBuilder+placeholder"></a>

### selectMenuBuilder.placeholder : <code>string</code>

The placeholder text of the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>&quot;null&quot;</code>  
<a name="SelectMenuBuilder+options"></a>

### selectMenuBuilder.options : <code>Array.&lt;Object&gt;</code>

The options of the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>[]</code>  
<a name="SelectMenuBuilder+min_values"></a>

### selectMenuBuilder.min_values : <code>number</code>

The minimum number of options that can be selected in the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>null</code>  
<a name="SelectMenuBuilder+max_values"></a>

### selectMenuBuilder.max_values : <code>number</code>

The maximum number of options that can be selected in the SelectMenu

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>null</code>  
<a name="SelectMenuBuilder+disabled"></a>

### selectMenuBuilder.disabled : <code>boolean</code>

Whether the SelectMenu is disabled or not

**Kind**: instance property of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Default**: <code>false</code>  
<a name="SelectMenuBuilder+setCustomId"></a>

### selectMenuBuilder.setCustomId(customId) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Set the custom ID of the SelectMenu

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param    | Type                | Description          |
| -------- | ------------------- | -------------------- |
| customId | <code>string</code> | The custom ID to set |

<a name="SelectMenuBuilder+setPlaceholder"></a>

### selectMenuBuilder.setPlaceholder(placeholder) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Set the placeholder text of the SelectMenu

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param       | Type                | Description                 |
| ----------- | ------------------- | --------------------------- |
| placeholder | <code>string</code> | The placeholder text to set |

<a name="SelectMenuBuilder+addOption"></a>

### selectMenuBuilder.addOption(label, value, [description], [emoji]) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Add an option to the SelectMenu

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param         | Type                | Default           | Description                   |
| ------------- | ------------------- | ----------------- | ----------------------------- |
| label         | <code>string</code> |                   | The label text of the option  |
| value         | <code>string</code> |                   | The value of the option       |
| [description] | <code>string</code> | <code>null</code> | The description of the option |
| [emoji]       | <code>string</code> | <code>null</code> | The emoji of the option       |

<a name="SelectMenuBuilder+setMinValues"></a>

### selectMenuBuilder.setMinValues(minValues) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Set the minimum number of options that can be selected in the SelectMenu

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param     | Type                | Description                          |
| --------- | ------------------- | ------------------------------------ |
| minValues | <code>number</code> | The minimum number of options to set |

<a name="SelectMenuBuilder+setMaxValues"></a>

### selectMenuBuilder.setMaxValues(maxValues) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Set the maximum number of options that can be selected in the SelectMenu

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param     | Type                | Description                          |
| --------- | ------------------- | ------------------------------------ |
| maxValues | <code>number</code> | The maximum number of options to set |

<a name="SelectMenuBuilder+setDisabled"></a>

### selectMenuBuilder.setDisabled(disabled) ⇒ [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

Set whether the SelectMenu is disabled or not

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)

| Param    | Type                 | Description                               |
| -------- | -------------------- | ----------------------------------------- |
| disabled | <code>boolean</code> | Whether the SelectMenu is disabled or not |

<a name="SelectMenuBuilder+build"></a>

### selectMenuBuilder.build() ⇒ <code>Object</code>

Build the SelectMenu object

**Kind**: instance method of [<code>SelectMenuBuilder</code>](#SelectMenuBuilder)  
**Returns**: <code>Object</code> - The SelectMenu object that can be sent to Discord
