---
title: SelectMenuBuilder
sidebar:
  order: 4
---

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
