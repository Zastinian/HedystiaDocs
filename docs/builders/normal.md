---
id: normal
title: Normal
description: Normal Section
sidebar_position: 3
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="Button"></a>

## Button
Represents a button element with various properties.

**Kind**: global class  
<a name="new_Button_new"></a>

### new Button(options)
Constructs a button object with the provided properties.

**Returns**: <code>Object</code> - - The constructed button object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object containing the button properties. |
| options.emoji | <code>Object</code> | The emoji object for the button. |
| options.label | <code>string</code> | The label text for the button. |
| options.url | <code>string</code> | The URL to open when the button is clicked. |
| options.customid | <code>string</code> | The custom ID for the button. |
| options.style | <code>number</code> | The style of the button. |
| options.disabled | <code>boolean</code> | Whether the button is disabled or not. |


<a name="Embed"></a>

## Embed
Represents an embed object with various properties.

**Kind**: global class  
<a name="new_Embed_new"></a>

### new Embed(options)
Constructs an embed object with the provided properties.

**Returns**: <code>Object</code> - - The constructed embed object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options object containing the properties for the embed. |
| options.title | <code>string</code> | The title of the embed. |
| options.color | <code>string</code> | The color of the embed. |
| options.author | <code>Object</code> | The author of the embed. |
| options.url | <code>string</code> | The URL of the embed. |
| options.description | <code>string</code> | The description of the embed. |
| options.image | <code>string</code> | The image URL of the embed. |
| options.footer | <code>Object</code> | The footer of the embed. |
| options.timestamp | <code>string</code> | The timestamp of the embed. |


<a name="Row"></a>

## Row
Represents a row in a table.

**Kind**: global class  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| components | <code>Array</code> | The components of the row. |

<a name="new_Row_new"></a>

### new Row([data])
Constructs a new instance of the class.

**Returns**: <code>object</code> - - The constructed instance.  

| Param | Type | Description |
| --- | --- | --- |
| [data] | <code>object</code> | Optional data object to initialize the instance. |


<a name="SelectMenu"></a>

## SelectMenu
Represents a select menu component.

**Kind**: global class  
<a name="new_SelectMenu_new"></a>

### new SelectMenu(options)
Constructs a select object with the given parameters.

**Returns**: <code>Object</code> - The constructed select object.  

| Param | Type | Description |
| --- | --- | --- |
| options | <code>Object</code> | The options for the select menu. |
| options.customid | <code>string</code> | The custom ID of the select menu. |
| options.placeholder | <code>string</code> | The placeholder text for the select menu. |
| options.disabled | <code>boolean</code> | Whether the select menu is disabled or not. |
| options.minvalues | <code>number</code> | The minimum number of values that can be selected. |
| options.maxvalues | <code>number</code> | The maximum number of values that can be selected. |
| options.options | <code>Array</code> | The options for the select menu. |


