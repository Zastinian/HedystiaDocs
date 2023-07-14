---
id: builders
title: Builders
description: Builders Section
sidebar_position: 3
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="Button"></a>

## Button

A class representing a Discord button.

**Kind**: global class  
<a name="new_Button_new"></a>

### new Button(options)

Create a new Button.

**Returns**: <code>Object</code> - - The button object.

| Param            | Type                 | Description                                 |
| ---------------- | -------------------- | ------------------------------------------- |
| options          | <code>Object</code>  | The options for the button.                 |
| options.emoji    | <code>Object</code>  | The emoji displayed on the button (if any). |
| options.label    | <code>string</code>  | The text displayed on the button.           |
| options.url      | <code>string</code>  | The URL the button leads to (if any).       |
| options.customid | <code>string</code>  | The custom ID of the button (if any).       |
| options.style    | <code>string</code>  | The visual style of the button (if any).    |
| options.disabled | <code>boolean</code> | Whether the button is disabled or not.      |

<a name="ChannelSelect"></a>

## ChannelSelect

Class representing a Channel Select component for Discord message components.

**Kind**: global class

- [ChannelSelect](#ChannelSelect)
  - [new ChannelSelect(data)](#new_ChannelSelect_new)
  - _instance_
    - [.setCustomId(customId)](#ChannelSelect+setCustomId) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.setPlaceholder(placeholder)](#ChannelSelect+setPlaceholder) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.setMinValues(minValue)](#ChannelSelect+setMinValues) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.setMaxValues(maxValue)](#ChannelSelect+setMaxValues) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.setDisabled(maxValue)](#ChannelSelect+setDisabled) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.setOptions(options)](#ChannelSelect+setOptions) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)
    - [.toJSON()](#ChannelSelect+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformOptions(options)](#ChannelSelect.transformOptions) ⇒ <code>Object</code>
    - [.transformEmoji(emoji)](#ChannelSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_ChannelSelect_new"></a>

### new ChannelSelect(data)

Creates a new instance of the ChannelSelect class.

| Param                    | Type                 | Description                                               |
| ------------------------ | -------------------- | --------------------------------------------------------- |
| data                     | <code>Object</code>  | The data to initialize the channel select component with. |
| data.custom_id           | <code>string</code>  | The unique identifier for the component.                  |
| data.options             | <code>Array</code>   | The options for the select component.                     |
| data.options.label       | <code>Object</code>  | The label for the option.                                 |
| data.options.value       | <code>Object</code>  | The value for the option.                                 |
| data.options.description | <code>Object</code>  | The description for the option.                           |
| data.options.emoji       | <code>Object</code>  | The emoji for the option.                                 |
| data.options.default     | <code>boolean</code> | Whether the option is the default option.                 |
| data.placeholder         | <code>string</code>  | The placeholder text for the select component.            |
| data.min_values          | <code>number</code>  | The minimum number of options that can be selected.       |
| data.max_values          | <code>number</code>  | The maximum number of options that can be selected.       |
| data.disabled            | <code>boolean</code> | Whether the component is disabled.                        |

<a name="ChannelSelect+setCustomId"></a>

### channelSelect.setCustomId(customId) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Sets the custom ID of the select component.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| customId | <code>string</code> | The custom ID to set. |

<a name="ChannelSelect+setPlaceholder"></a>

### channelSelect.setPlaceholder(placeholder) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Sets the placeholder text of the select component.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param       | Type                | Description                  |
| ----------- | ------------------- | ---------------------------- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="ChannelSelect+setMinValues"></a>

### channelSelect.setMinValues(minValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Set the minimum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param    | Type                | Description                                         |
| -------- | ------------------- | --------------------------------------------------- |
| minValue | <code>number</code> | The minimum number of options that can be selected. |

<a name="ChannelSelect+setMaxValues"></a>

### channelSelect.setMaxValues(maxValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Set the maximum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param    | Type                | Description                                         |
| -------- | ------------------- | --------------------------------------------------- |
| maxValue | <code>number</code> | The maximum number of options that can be selected. |

<a name="ChannelSelect+setDisabled"></a>

### channelSelect.setDisabled(maxValue) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Set the maximum number of options that can be selected.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param    | Type                | Description                                         |
| -------- | ------------------- | --------------------------------------------------- |
| maxValue | <code>number</code> | The maximum number of options that can be selected. |

<a name="ChannelSelect+setOptions"></a>

### channelSelect.setOptions(options) ⇒ [<code>ChannelSelect</code>](#ChannelSelect)

Set the options for the select menu.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: [<code>ChannelSelect</code>](#ChannelSelect) - The ChannelSelect instance.

| Param   | Type                              | Description                                     |
| ------- | --------------------------------- | ----------------------------------------------- |
| options | <code>Array.&lt;Object&gt;</code> | An array of option objects for the select menu. |

<a name="ChannelSelect+toJSON"></a>

### channelSelect.toJSON() ⇒ <code>Object</code>

Convert the ChannelSelect instance to a plain object for sending to Discord API.

**Kind**: instance method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The plain object representation of the ChannelSelect.  
<a name="ChannelSelect.transformOptions"></a>

### ChannelSelect.transformOptions(options) ⇒ <code>Object</code>

Transforms the given options data into a format compatible with the select component.

**Kind**: static method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The transformed options data.

| Param               | Type                 | Description                               |
| ------------------- | -------------------- | ----------------------------------------- |
| options             | <code>Object</code>  | The options data to transform.            |
| options.label       | <code>string</code>  | The label for the option.                 |
| options.value       | <code>string</code>  | The value for the option.                 |
| options.description | <code>string</code>  | The description for the option.           |
| options.emoji       | <code>string</code>  | The emoji for the option.                 |
| options.default     | <code>boolean</code> | Whether the option is the default option. |

<a name="ChannelSelect.transformEmoji"></a>

### ChannelSelect.transformEmoji(emoji) ⇒ <code>Object</code>

Transforms the given emoji data into a format compatible with the select component.

**Kind**: static method of [<code>ChannelSelect</code>](#ChannelSelect)  
**Returns**: <code>Object</code> - The transformed emoji data.

| Param          | Type                                       | Description                    |
| -------------- | ------------------------------------------ | ------------------------------ |
| emoji          | <code>Object</code> \| <code>string</code> | The emoji data to transform.   |
| emoji.name     | <code>string</code>                        | The name of the emoji.         |
| emoji.id       | <code>string</code>                        | The ID of the emoji.           |
| emoji.animated | <code>boolean</code>                       | Whether the emoji is animated. |

<a name="Embed"></a>

## Embed

Class representing an embed object for use in Discord messages.

**Kind**: global class  
<a name="new_Embed_new"></a>

### new Embed(options)

Create a new Embed object.

**Returns**: <code>Object</code> - - The new Embed object.

| Param                  | Type                | Description                              |
| ---------------------- | ------------------- | ---------------------------------------- |
| options                | <code>Object</code> | The options to use for the Embed object. |
| [options.title]        | <code>string</code> | The title of the embed.                  |
| [options.color]        | <code>number</code> | The color of the embed.                  |
| [options.author]       | <code>Object</code> | The author of the embed.                 |
| [options.author.name]  | <code>string</code> | The name of the author.                  |
| [options.author.image] | <code>string</code> | The image of the author.                 |
| [options.url]          | <code>string</code> | The URL of the embed.                    |
| [options.description]  | <code>string</code> | The description of the embed.            |
| [options.image]        | <code>string</code> | The image of the embed.                  |
| [options.footer]       | <code>Object</code> | The footer of the embed.                 |
| [options.footer.text]  | <code>string</code> | The text of the footer.                  |
| [options.footer.image] | <code>string</code> | The image of the footer.                 |
| [options.timestamp]    | <code>string</code> | The timestamp of the embed.              |
| [options.thumbnail]    | <code>string</code> | The thumbnail of the embed.              |
| [options.fields]       | <code>Array</code>  | The fields of the embed.                 |

<a name="GuildMemberVerificationFields"></a>

## GuildMemberVerificationFields

A class representing fields for guild member verification.

**Kind**: global class

- [GuildMemberVerificationFields](#GuildMemberVerificationFields)
  - [new GuildMemberVerificationFields(data)](#new_GuildMemberVerificationFields_new)
  - _instance_
    - [.setEnabled(enabled)](#GuildMemberVerificationFields+setEnabled) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
    - [.setDescription(description)](#GuildMemberVerificationFields+setDescription) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
    - [.setFields(...fields)](#GuildMemberVerificationFields+setFields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
    - [.addFields(...fields)](#GuildMemberVerificationFields+addFields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)
    - [.toJSON()](#GuildMemberVerificationFields+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformFields(fields)](#GuildMemberVerificationFields.transformFields) ⇒ <code>Object</code>

<a name="new_GuildMemberVerificationFields_new"></a>

### new GuildMemberVerificationFields(data)

Constructs a new GuildMemberVerificationFields object.

| Param            | Type                 | Description                                                          |
| ---------------- | -------------------- | -------------------------------------------------------------------- |
| data             | <code>Object</code>  | An object containing the data for the verification fields.           |
| data.enabled     | <code>boolean</code> | Whether or not the verification fields are enabled.                  |
| data.description | <code>string</code>  | A description of the verification fields.                            |
| data.fields      | <code>Array</code>   | An array of objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+setEnabled"></a>

### guildMemberVerificationFields.setEnabled(enabled) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)

Sets whether or not the verification fields are enabled.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.

| Param   | Type                 | Description                                         |
| ------- | -------------------- | --------------------------------------------------- |
| enabled | <code>boolean</code> | Whether or not the verification fields are enabled. |

<a name="GuildMemberVerificationFields+setDescription"></a>

### guildMemberVerificationFields.setDescription(description) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)

Sets the description of the verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.

| Param       | Type                | Description                               |
| ----------- | ------------------- | ----------------------------------------- |
| description | <code>string</code> | A description of the verification fields. |

<a name="GuildMemberVerificationFields+setFields"></a>

### guildMemberVerificationFields.setFields(...fields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)

Sets the verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.

| Param     | Type                | Description                                                          |
| --------- | ------------------- | -------------------------------------------------------------------- |
| ...fields | <code>Object</code> | One or more objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+addFields"></a>

### guildMemberVerificationFields.addFields(...fields) ⇒ [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)

Adds one or more verification fields.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields) - The GuildMemberVerificationFields object.

| Param     | Type                | Description                                                          |
| --------- | ------------------- | -------------------------------------------------------------------- |
| ...fields | <code>Object</code> | One or more objects representing the individual verification fields. |

<a name="GuildMemberVerificationFields+toJSON"></a>

### guildMemberVerificationFields.toJSON() ⇒ <code>Object</code>

Returns the verification fields as a JSON object.

**Kind**: instance method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: <code>Object</code> - The verification fields as a JSON object.  
<a name="GuildMemberVerificationFields.transformFields"></a>

### GuildMemberVerificationFields.transformFields(fields) ⇒ <code>Object</code>

Transforms an object representing a verification field into the required format.

**Kind**: static method of [<code>GuildMemberVerificationFields</code>](#GuildMemberVerificationFields)  
**Returns**: <code>Object</code> - An object representing the verification field in the required format.

| Param  | Type                | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| fields | <code>Object</code> | An object representing a verification field. |

<a name="InputText"></a>

## InputText

Represents an Input Text component for a Discord interaction message.

**Kind**: global class

- [InputText](#InputText)
  - [new InputText([data])](#new_InputText_new)
  - [.setCustomId(customId)](#InputText+setCustomId) ⇒ [<code>InputText</code>](#InputText)
  - [.setLabel(label)](#InputText+setLabel) ⇒ [<code>InputText</code>](#InputText)
  - [.setMaxLength(maxLength)](#InputText+setMaxLength) ⇒ [<code>InputText</code>](#InputText)
  - [.setMinLength(minLength)](#InputText+setMinLength) ⇒ [<code>InputText</code>](#InputText)
  - [.setRequired(required)](#InputText+setRequired) ⇒ [<code>InputText</code>](#InputText)
  - [.setPlaceholder(placeholder)](#InputText+setPlaceholder) ⇒ [<code>InputText</code>](#InputText)
  - [.setValue(value)](#InputText+setValue) ⇒ [<code>InputText</code>](#InputText)
  - [.setStyle(style)](#InputText+setStyle) ⇒ [<code>InputText</code>](#InputText)
  - [.toJSON()](#InputText+toJSON) ⇒ <code>Object</code>

<a name="new_InputText_new"></a>

### new InputText([data])

Constructs a new InputText component.

| Param              | Type                                       | Description                                              |
| ------------------ | ------------------------------------------ | -------------------------------------------------------- |
| [data]             | <code>Object</code>                        | Optional data to set for the component.                  |
| [data.custom_id]   | <code>string</code>                        | The custom ID of the component.                          |
| [data.style]       | <code>string</code> \| <code>number</code> | The style of the component, can be a string or a number. |
| [data.label]       | <code>string</code>                        | The label of the component.                              |
| [data.min_length]  | <code>number</code>                        | The minimum length of the text input.                    |
| [data.max_length]  | <code>number</code>                        | The maximum length of the text input.                    |
| [data.required]    | <code>boolean</code>                       | Whether the component is required or not.                |
| [data.value]       | <code>string</code>                        | The value of the text input.                             |
| [data.placeholder] | <code>string</code>                        | The placeholder text for the text input.                 |

<a name="InputText+setCustomId"></a>

### inputText.setCustomId(customId) ⇒ [<code>InputText</code>](#InputText)

Sets the custom ID of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| customId | <code>string</code> | The custom ID to set. |

<a name="InputText+setLabel"></a>

### inputText.setLabel(label) ⇒ [<code>InputText</code>](#InputText)

Sets the label of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| label | <code>string</code> | The label to set. |

<a name="InputText+setMaxLength"></a>

### inputText.setMaxLength(maxLength) ⇒ [<code>InputText</code>](#InputText)

Sets the maximum length of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param     | Type                | Description                |
| --------- | ------------------- | -------------------------- |
| maxLength | <code>number</code> | The maximum length to set. |

<a name="InputText+setMinLength"></a>

### inputText.setMinLength(minLength) ⇒ [<code>InputText</code>](#InputText)

Sets the minimum length of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param     | Type                | Description                |
| --------- | ------------------- | -------------------------- |
| minLength | <code>number</code> | The minimum length to set. |

<a name="InputText+setRequired"></a>

### inputText.setRequired(required) ⇒ [<code>InputText</code>](#InputText)

Sets whether the component is required or not.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param    | Type                 | Description                               |
| -------- | -------------------- | ----------------------------------------- |
| required | <code>boolean</code> | Whether the component is required or not. |

<a name="InputText+setPlaceholder"></a>

### inputText.setPlaceholder(placeholder) ⇒ [<code>InputText</code>](#InputText)

Sets the placeholder text for the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param       | Type                | Description                  |
| ----------- | ------------------- | ---------------------------- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="InputText+setValue"></a>

### inputText.setValue(value) ⇒ [<code>InputText</code>](#InputText)

Sets the value of the text input.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| value | <code>string</code> | The value to set. |

<a name="InputText+setStyle"></a>

### inputText.setStyle(style) ⇒ [<code>InputText</code>](#InputText)

Sets the style of the component.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: [<code>InputText</code>](#InputText) - This component.

| Param | Type                                       | Description                                    |
| ----- | ------------------------------------------ | ---------------------------------------------- |
| style | <code>string</code> \| <code>number</code> | The style to set, can be a string or a number. |

<a name="InputText+toJSON"></a>

### inputText.toJSON() ⇒ <code>Object</code>

Converts the component to a JSON representation.

**Kind**: instance method of [<code>InputText</code>](#InputText)  
**Returns**: <code>Object</code> - The JSON representation of the component.

<a name="MessageActionRow"></a>

## MessageActionRow

Represents an action row containing components, such as buttons or selects, to be added to a message.

**Kind**: global class

- [MessageActionRow](#MessageActionRow)
  - [new MessageActionRow(data)](#new_MessageActionRow_new)
  - [.addComponents(...components)](#MessageActionRow+addComponents) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
  - [.setComponents(...components)](#MessageActionRow+setComponents) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)
  - [.validation()](#MessageActionRow+validation) ⇒ <code>void</code>
  - [.toJSON()](#MessageActionRow+toJSON) ⇒ <code>Object</code>

<a name="new_MessageActionRow_new"></a>

### new MessageActionRow(data)

| Param           | Type                | Description                                   |
| --------------- | ------------------- | --------------------------------------------- |
| data            | <code>Object</code> | The data for the action row.                  |
| data.components | <code>Array</code>  | The components to be added to the action row. |

<a name="MessageActionRow+addComponents"></a>

### messageActionRow.addComponents(...components) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)

Adds one or more components to the action row.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: [<code>MessageActionRow</code>](#MessageActionRow) - - The action row with the new components added.

| Param         | Type             | Description                                   |
| ------------- | ---------------- | --------------------------------------------- |
| ...components | <code>any</code> | The components to be added to the action row. |

<a name="MessageActionRow+setComponents"></a>

### messageActionRow.setComponents(...components) ⇒ [<code>MessageActionRow</code>](#MessageActionRow)

Sets the components of the action row.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: [<code>MessageActionRow</code>](#MessageActionRow) - - The action row with the new components set.

| Param         | Type             | Description                                              |
| ------------- | ---------------- | -------------------------------------------------------- |
| ...components | <code>any</code> | The components to be set as the action row's components. |

<a name="MessageActionRow+validation"></a>

### messageActionRow.validation() ⇒ <code>void</code>

Validates that the action row's type is valid.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Throws**:

- <code>TypeError</code> If the action row's type is invalid.

<a name="MessageActionRow+toJSON"></a>

### messageActionRow.toJSON() ⇒ <code>Object</code>

Returns the action row's data in JSON format.

**Kind**: instance method of [<code>MessageActionRow</code>](#MessageActionRow)  
**Returns**: <code>Object</code> - - The action row's data in JSON format.

<a name="MessageAttachment"></a>

## MessageAttachment

Represents a message attachment.

**Kind**: global class

- [MessageAttachment](#MessageAttachment)
  - [new MessageAttachment(url, data, filename)](#new_MessageAttachment_new)
  - [.setFile(file)](#MessageAttachment+setFile) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
  - [.setFilename(filename)](#MessageAttachment+setFilename) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
  - [.setDescription(description)](#MessageAttachment+setDescription) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)
  - [.setSpoiler()](#MessageAttachment+setSpoiler) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

<a name="new_MessageAttachment_new"></a>

### new MessageAttachment(url, data, filename)

Constructs a new MessageAttachment object.

| Param    | Type                | Description                         |
| -------- | ------------------- | ----------------------------------- |
| url      | <code>string</code> | The URL of the attachment.          |
| data     | <code>Object</code> | Additional data for the attachment. |
| filename | <code>string</code> | The name of the file.               |

<a name="MessageAttachment+setFile"></a>

### messageAttachment.setFile(file) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

Sets the file for the attachment.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.

| Param | Type                                                 | Description         |
| ----- | ---------------------------------------------------- | ------------------- |
| file  | <code>BufferResolvable</code> \| <code>Stream</code> | The file to attach. |

<a name="MessageAttachment+setFilename"></a>

### messageAttachment.setFilename(filename) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

Sets the name of the file.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| filename | <code>string</code> | The name of the file. |

<a name="MessageAttachment+setDescription"></a>

### messageAttachment.setDescription(description) ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

Sets the description of the attachment.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.

| Param       | Type                | Description                        |
| ----------- | ------------------- | ---------------------------------- |
| description | <code>string</code> | The description of the attachment. |

<a name="MessageAttachment+setSpoiler"></a>

### messageAttachment.setSpoiler() ⇒ [<code>MessageAttachment</code>](#MessageAttachment)

Sets the attachment as a spoiler.

**Kind**: instance method of [<code>MessageAttachment</code>](#MessageAttachment)  
**Returns**: [<code>MessageAttachment</code>](#MessageAttachment) - This attachment.

<a name="MessageButton"></a>

## MessageButton

A class representing a message button.

**Kind**: global class

- [MessageButton](#MessageButton)
  - [new MessageButton([data])](#new_MessageButton_new)
  - [.setLabel(label)](#MessageButton+setLabel) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.setCustomId(customId)](#MessageButton+setCustomId) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.setDisabled(disabled)](#MessageButton+setDisabled) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.setStyle(style)](#MessageButton+setStyle) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.setURL(url)](#MessageButton+setURL) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.setEmoji(emoji)](#MessageButton+setEmoji) ⇒ [<code>MessageButton</code>](#MessageButton)
  - [.toJSON()](#MessageButton+toJSON) ⇒ <code>Object</code>

<a name="new_MessageButton_new"></a>

### new MessageButton([data])

Creates a new message button instance.

| Param  | Type                | Description                                     |
| ------ | ------------------- | ----------------------------------------------- |
| [data] | <code>Object</code> | The data to initialize the message button with. |

<a name="MessageButton+setLabel"></a>

### messageButton.setLabel(label) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets the label of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| label | <code>string</code> | The label to set. |

<a name="MessageButton+setCustomId"></a>

### messageButton.setCustomId(customId) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets the custom ID of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| customId | <code>string</code> | The custom ID to set. |

<a name="MessageButton+setDisabled"></a>

### messageButton.setDisabled(disabled) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets whether the button is disabled.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param    | Type                 | Description                     |
| -------- | -------------------- | ------------------------------- |
| disabled | <code>boolean</code> | Whether the button is disabled. |

<a name="MessageButton+setStyle"></a>

### messageButton.setStyle(style) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets the style of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param | Type                | Description       |
| ----- | ------------------- | ----------------- |
| style | <code>string</code> | The style to set. |

<a name="MessageButton+setURL"></a>

### messageButton.setURL(url) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets the URL of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| url   | <code>string</code> | The URL to set. |

<a name="MessageButton+setEmoji"></a>

### messageButton.setEmoji(emoji) ⇒ [<code>MessageButton</code>](#MessageButton)

Sets the emoji of the button.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: [<code>MessageButton</code>](#MessageButton) - The message button instance.

| Param | Type                                       | Description       |
| ----- | ------------------------------------------ | ----------------- |
| emoji | <code>string</code> \| <code>Object</code> | The emoji to set. |

<a name="MessageButton+toJSON"></a>

### messageButton.toJSON() ⇒ <code>Object</code>

Converts the message button instance to a JSON representation.

**Kind**: instance method of [<code>MessageButton</code>](#MessageButton)  
**Returns**: <code>Object</code> - The JSON representation of the message button.

<a name="MessageEmbed"></a>

## MessageEmbed

Represents a message embed.

**Kind**: global class

- [MessageEmbed](#MessageEmbed)
  - [new MessageEmbed([data])](#new_MessageEmbed_new)
  - _instance_
    - [.setTitle(title)](#MessageEmbed+setTitle) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setDescription(description)](#MessageEmbed+setDescription) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setURL(url)](#MessageEmbed+setURL) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setTimestamp(timestamp)](#MessageEmbed+setTimestamp) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setColor(color)](#MessageEmbed+setColor) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setFooter(footer)](#MessageEmbed+setFooter) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setImage(image)](#MessageEmbed+setImage) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setThumbnail(thumbnail)](#MessageEmbed+setThumbnail) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setAuthor(author)](#MessageEmbed+setAuthor) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.addFields(...fields)](#MessageEmbed+addFields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.addField(name, value, [inline])](#MessageEmbed+addField) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.setFields(...fields)](#MessageEmbed+setFields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)
    - [.toJSON()](#MessageEmbed+toJSON) ⇒ <code>object</code>
  - _static_
    - [.transformFields(fields)](#MessageEmbed.transformFields) ⇒ <code>Object</code>

<a name="new_MessageEmbed_new"></a>

### new MessageEmbed([data])

Constructs a new MessageEmbed object.

| Param              | Type                              | Default                                     | Description                           |
| ------------------ | --------------------------------- | ------------------------------------------- | ------------------------------------- |
| [data]             | <code>Object</code>               |                                             | The data for the message embed.       |
| [data.title]       | <code>string</code>               |                                             | The title of the message embed.       |
| [data.type]        | <code>string</code>               | <code>&quot;\&quot;rich\&quot;&quot;</code> | The type of the message embed.        |
| [data.description] | <code>string</code>               |                                             | The description of the message embed. |
| [data.url]         | <code>string</code>               |                                             | The URL of the message embed.         |
| [data.timestamp]   | <code>string</code>               |                                             | The timestamp of the message embed.   |
| [data.color]       | <code>string</code>               |                                             | The color of the message embed.       |
| [data.footer]      | <code>Object</code>               |                                             | The footer of the message embed.      |
| [data.image]       | <code>Object</code>               |                                             | The image of the message embed.       |
| [data.thumbnail]   | <code>Object</code>               |                                             | The thumbnail of the message embed.   |
| [data.video]       | <code>Object</code>               |                                             | The video of the message embed.       |
| [data.provider]    | <code>Object</code>               |                                             | The provider of the message embed.    |
| [data.author]      | <code>Object</code>               |                                             | The author of the message embed.      |
| [data.fields]      | <code>Array.&lt;Object&gt;</code> | <code>[]</code>                             | The fields of the message embed.      |

<a name="MessageEmbed+setTitle"></a>

### messageEmbed.setTitle(title) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the title of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| title | <code>string</code> | The title of the embed. |

<a name="MessageEmbed+setDescription"></a>

### messageEmbed.setDescription(description) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the description of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param       | Type                | Description                   |
| ----------- | ------------------- | ----------------------------- |
| description | <code>string</code> | The description of the embed. |

<a name="MessageEmbed+setURL"></a>

### messageEmbed.setURL(url) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the URL of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param | Type                | Description           |
| ----- | ------------------- | --------------------- |
| url   | <code>string</code> | The URL of the embed. |

<a name="MessageEmbed+setTimestamp"></a>

### messageEmbed.setTimestamp(timestamp) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the timestamp of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param     | Type                                                            | Description                 |
| --------- | --------------------------------------------------------------- | --------------------------- |
| timestamp | <code>Date</code> \| <code>number</code> \| <code>string</code> | The timestamp of the embed. |

<a name="MessageEmbed+setColor"></a>

### messageEmbed.setColor(color) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the color of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param | Type                                       | Description             |
| ----- | ------------------------------------------ | ----------------------- |
| color | <code>string</code> \| <code>number</code> | The color of the embed. |

<a name="MessageEmbed+setFooter"></a>

### messageEmbed.setFooter(footer) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the footer of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| footer | <code>string</code> | The footer of the embed. |

<a name="MessageEmbed+setImage"></a>

### messageEmbed.setImage(image) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the image of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param     | Type                | Description             |
| --------- | ------------------- | ----------------------- |
| image     | <code>object</code> | The image of the embed. |
| image.url | <code>string</code> | The URL of the image.   |

<a name="MessageEmbed+setThumbnail"></a>

### messageEmbed.setThumbnail(thumbnail) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the thumbnail of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param         | Type                | Description                 |
| ------------- | ------------------- | --------------------------- |
| thumbnail     | <code>object</code> | The thumbnail of the embed. |
| thumbnail.url | <code>string</code> | The URL of the thumbnail.   |

<a name="MessageEmbed+setAuthor"></a>

### messageEmbed.setAuthor(author) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the author of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| author | <code>string</code> | The author of the embed. |

<a name="MessageEmbed+addFields"></a>

### messageEmbed.addFields(...fields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Adds multiple fields to the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param     | Type                                                     | Description                     |
| --------- | -------------------------------------------------------- | ------------------------------- |
| ...fields | <code>object</code> \| <code>Array.&lt;object&gt;</code> | The fields to add to the embed. |

<a name="MessageEmbed+addField"></a>

### messageEmbed.addField(name, value, [inline]) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Adds a single field to the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param    | Type                 | Description                                   |
| -------- | -------------------- | --------------------------------------------- |
| name     | <code>string</code>  | The name of the field.                        |
| value    | <code>string</code>  | The value of the field.                       |
| [inline] | <code>boolean</code> | Whether the field should be displayed inline. |

<a name="MessageEmbed+setFields"></a>

### messageEmbed.setFields(...fields) ⇒ [<code>MessageEmbed</code>](#MessageEmbed)

Sets the fields of the embed.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: [<code>MessageEmbed</code>](#MessageEmbed) - The MessageEmbed instance.

| Param     | Type                                                     | Description                      |
| --------- | -------------------------------------------------------- | -------------------------------- |
| ...fields | <code>object</code> \| <code>Array.&lt;object&gt;</code> | The fields to set for the embed. |

<a name="MessageEmbed+toJSON"></a>

### messageEmbed.toJSON() ⇒ <code>object</code>

Converts the MessageEmbed instance to a plain object.

**Kind**: instance method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: <code>object</code> - The plain object representation of the MessageEmbed instance.  
<a name="MessageEmbed.transformFields"></a>

### MessageEmbed.transformFields(fields) ⇒ <code>Object</code>

Transforms the input fields object to a new object with specific properties.

**Kind**: static method of [<code>MessageEmbed</code>](#MessageEmbed)  
**Returns**: <code>Object</code> - - A new object with transformed fields.

| Param           | Type                                           | Description                                                                            |
| --------------- | ---------------------------------------------- | -------------------------------------------------------------------------------------- |
| fields          | <code>Object</code>                            | The input object containing fields to be transformed.                                  |
| fields.name     | <code>string</code>                            | The name of the field.                                                                 |
| fields.value    | <code>any</code>                               | The value of the field.                                                                |
| [fields.inline] | <code>boolean</code> \| <code>undefined</code> | Whether the field should be displayed inline. If not specified, defaults to undefined. |

<a name="Modal"></a>

## Modal

A modal message with components.

**Kind**: global class

- [Modal](#Modal)
  - [new Modal(data)](#new_Modal_new)
  - [.addComponents(...components)](#Modal+addComponents) ⇒ [<code>Modal</code>](#Modal)
  - [.toJSON()](#Modal+toJSON) ⇒ <code>Object</code>

<a name="new_Modal_new"></a>

### new Modal(data)

| Param          | Type                | Description                     |
| -------------- | ------------------- | ------------------------------- |
| data           | <code>Object</code> | The data for the modal message. |
| data.title     | <code>string</code> | The title of the modal.         |
| data.custom_id | <code>string</code> | The custom ID of the modal.     |

<a name="Modal+addComponents"></a>

### modal.addComponents(...components) ⇒ [<code>Modal</code>](#Modal)

Adds one or more components to the modal.

**Kind**: instance method of [<code>Modal</code>](#Modal)  
**Returns**: [<code>Modal</code>](#Modal) - This modal instance.

| Param         | Type                              | Description            |
| ------------- | --------------------------------- | ---------------------- |
| ...components | <code>Array.&lt;Object&gt;</code> | The components to add. |

<a name="Modal+toJSON"></a>

### modal.toJSON() ⇒ <code>Object</code>

Returns a JSON representation of the modal.

**Kind**: instance method of [<code>Modal</code>](#Modal)  
**Returns**: <code>Object</code> - The JSON representation of the modal.

<a name="RoleSelect"></a>

## RoleSelect

Represents a Discord role select component that allows users to select one or more roles.

**Kind**: global class

- [RoleSelect](#RoleSelect)
  - [new RoleSelect([data])](#new_RoleSelect_new)
  - _instance_
    - [.setCustomId(customId)](#RoleSelect+setCustomId) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.setPlaceholder(placeholder)](#RoleSelect+setPlaceholder) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.setMinValues(minValue)](#RoleSelect+setMinValues) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.setMaxValues(maxValue)](#RoleSelect+setMaxValues) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.setDisabled(disabled)](#RoleSelect+setDisabled) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.setOptions(options)](#RoleSelect+setOptions) ⇒ [<code>RoleSelect</code>](#RoleSelect)
    - [.toJSON()](#RoleSelect+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformOptions(options)](#RoleSelect.transformOptions) ⇒ <code>Object</code>
    - [.transformEmoji(emoji)](#RoleSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_RoleSelect_new"></a>

### new RoleSelect([data])

Create a role select component.

| Param              | Type                              | Description                                        |
| ------------------ | --------------------------------- | -------------------------------------------------- |
| [data]             | <code>Object</code>               | The data to set in the component.                  |
| [data.custom_id]   | <code>string</code>               | The custom ID of the component.                    |
| [data.customId]    | <code>string</code>               | The custom ID of the component.                    |
| [data.options]     | <code>Array.&lt;Object&gt;</code> | The options of the component.                      |
| [data.placeholder] | <code>string</code>               | The placeholder text of the component.             |
| [data.min_values]  | <code>number</code>               | The minimum number of values that can be selected. |
| [data.max_values]  | <code>number</code>               | The maximum number of values that can be selected. |
| [data.minValues]   | <code>number</code>               | The minimum number of values that can be selected. |
| [data.maxValues]   | <code>number</code>               | The maximum number of values that can be selected. |
| [data.disabled]    | <code>boolean</code>              | Whether the component is disabled or not.          |

<a name="RoleSelect+setCustomId"></a>

### roleSelect.setCustomId(customId) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set the custom ID of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| customId | <code>string</code> | The custom ID to set. |

<a name="RoleSelect+setPlaceholder"></a>

### roleSelect.setPlaceholder(placeholder) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set the placeholder text of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param       | Type                | Description                  |
| ----------- | ------------------- | ---------------------------- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="RoleSelect+setMinValues"></a>

### roleSelect.setMinValues(minValue) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set the minimum number of values that can be selected.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| minValue | <code>number</code> | The minimum number of values to set. |

<a name="RoleSelect+setMaxValues"></a>

### roleSelect.setMaxValues(maxValue) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set the maximum number of values that can be selected.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| maxValue | <code>number</code> | The maximum number of values to set. |

<a name="RoleSelect+setDisabled"></a>

### roleSelect.setDisabled(disabled) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set whether the component is disabled or not.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param    | Type                 | Description                               |
| -------- | -------------------- | ----------------------------------------- |
| disabled | <code>boolean</code> | Whether the component is disabled or not. |

<a name="RoleSelect+setOptions"></a>

### roleSelect.setOptions(options) ⇒ [<code>RoleSelect</code>](#RoleSelect)

Set the options of the component.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: [<code>RoleSelect</code>](#RoleSelect) - The RoleSelect object.

| Param   | Type                              | Description         |
| ------- | --------------------------------- | ------------------- |
| options | <code>Array.&lt;Object&gt;</code> | The options to set. |

<a name="RoleSelect+toJSON"></a>

### roleSelect.toJSON() ⇒ <code>Object</code>

Returns the component data in the format expected by Discord's API.

**Kind**: instance method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The component data.  
<a name="RoleSelect.transformOptions"></a>

### RoleSelect.transformOptions(options) ⇒ <code>Object</code>

Transforms an option object into a format suitable for the component.

**Kind**: static method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The transformed option object.

| Param                 | Type                                       | Description                                                     |
| --------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| options               | <code>Object</code>                        | The option object to transform.                                 |
| [options.label]       | <code>string</code>                        | The text to display on the option.                              |
| [options.value]       | <code>string</code>                        | The value to be sent to the server when the option is selected. |
| [options.description] | <code>string</code>                        | The text to display when hovering over the option.              |
| [options.emoji]       | <code>string</code> \| <code>Object</code> | The emoji to display next to the option.                        |
| [options.default]     | <code>boolean</code>                       | Whether the option should be selected by default.               |

<a name="RoleSelect.transformEmoji"></a>

### RoleSelect.transformEmoji(emoji) ⇒ <code>Object</code>

Transforms an emoji to the structure expected by Discord's API.

**Kind**: static method of [<code>RoleSelect</code>](#RoleSelect)  
**Returns**: <code>Object</code> - The transformed emoji.

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| emoji | <code>Object</code> | The emoji to transform. |

<a name="Row"></a>

## Row

A row of buttons to be added to a message component.

**Kind**: global class

- [Row](#Row)
  - [new Row([data])](#new_Row_new)
  - [.components](#Row+components) : <code>Array.&lt;Object&gt;</code>

<a name="new_Row_new"></a>

### new Row([data])

| Param             | Type                              | Description                                              |
| ----------------- | --------------------------------- | -------------------------------------------------------- |
| [data]            | <code>Object</code>               | The data for the row.                                    |
| [data.components] | <code>Array.&lt;Object&gt;</code> | An array of button components to be included in the row. |

<a name="Row+components"></a>

### row.components : <code>Array.&lt;Object&gt;</code>

An array of button components included in the row.

**Kind**: instance property of [<code>Row</code>](#Row)

<a name="SelectMenu"></a>

## SelectMenu

Class representing a select menu component.

**Kind**: global class  
<a name="new_SelectMenu_new"></a>

### new SelectMenu(options)

Create a select menu.

**Returns**: <code>Object</code> - - The select menu component.

| Param               | Type                 | Default            | Description                                        |
| ------------------- | -------------------- | ------------------ | -------------------------------------------------- |
| options             | <code>Object</code>  |                    | The options for the select menu.                   |
| options.customid    | <code>string</code>  |                    | The custom ID for the select menu.                 |
| options.placeholder | <code>string</code>  |                    | The placeholder text for the select menu.          |
| [options.disabled]  | <code>boolean</code> | <code>false</code> | Whether the select menu is disabled.               |
| [options.minvalues] | <code>number</code>  | <code>1</code>     | The minimum number of values that can be selected. |
| [options.maxvalues] | <code>number</code>  | <code>1</code>     | The maximum number of values that can be selected. |
| [options.options]   | <code>Array</code>   |                    | The options for the select menu.                   |

<a name="Slash"></a>

## Slash

A class representing a Discord Slash Command.

**Kind**: global class

- [Slash](#Slash)
  - [new Slash([data])](#new_Slash_new)
  - [.setType(type)](#Slash+setType) ⇒ [<code>Slash</code>](#Slash)
  - [.setName(name)](#Slash+setName) ⇒ [<code>Slash</code>](#Slash)
  - [.setDescriptionLocalizations(description)](#Slash+setDescriptionLocalizations) ⇒ [<code>Slash</code>](#Slash)
  - [.setNameLocalizations([localizations])](#Slash+setNameLocalizations) ⇒ [<code>Slash</code>](#Slash)
  - [.setDescription(description)](#Slash+setDescription) ⇒ [<code>Slash</code>](#Slash)
  - [.setDefaultMemberPermissions(...permission)](#Slash+setDefaultMemberPermissions) ⇒ [<code>Slash</code>](#Slash)
  - [.setDmPermission(permission)](#Slash+setDmPermission) ⇒ [<code>Slash</code>](#Slash)
  - [.setOptions(fn)](#Slash+setOptions) ⇒ [<code>Slash</code>](#Slash)
  - [.addSubCommandGroups(fn)](#Slash+addSubCommandGroups) ⇒ [<code>Slash</code>](#Slash)
  - [.addSubCommands(fn)](#Slash+addSubCommands) ⇒ [<code>Slash</code>](#Slash)
  - [.validation()](#Slash+validation)
  - [.toJSON()](#Slash+toJSON) ⇒ <code>Object</code>

<a name="new_Slash_new"></a>

### new Slash([data])

| Param                             | Type                                       | Default                             | Description                                         |
| --------------------------------- | ------------------------------------------ | ----------------------------------- | --------------------------------------------------- |
| [data]                            | <code>Object</code>                        |                                     | The data for the Slash Command.                     |
| [data.type]                       | <code>number</code> \| <code>string</code> | <code>&quot;Chat_Input&quot;</code> | The type of the command.                            |
| [data.name]                       | <code>string</code>                        |                                     | The name of the command.                            |
| [data.name_localizations]         | <code>Object</code>                        |                                     | The localizations of the command name.              |
| [data.description]                | <code>string</code>                        |                                     | The description of the command.                     |
| [data.description_localizations]  | <code>Object</code>                        |                                     | The localizations of the command description.       |
| [data.options]                    | <code>Array.&lt;Object&gt;</code>          |                                     | The options of the command.                         |
| [data.default_member_permissions] | <code>string</code>                        |                                     | The default permissions of the command for members. |
| [data.dm_permission]              | <code>boolean</code>                       | <code>true</code>                   | Whether the command can be used in DMs.             |

<a name="Slash+setType"></a>

### slash.setType(type) ⇒ [<code>Slash</code>](#Slash)

Sets the type of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param | Type                                       | Description              |
| ----- | ------------------------------------------ | ------------------------ |
| type  | <code>number</code> \| <code>string</code> | The type of the command. |

<a name="Slash+setName"></a>

### slash.setName(name) ⇒ [<code>Slash</code>](#Slash)

Sets the name of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| name  | <code>string</code> | The name of the command. |

<a name="Slash+setDescriptionLocalizations"></a>

### slash.setDescriptionLocalizations(description) ⇒ [<code>Slash</code>](#Slash)

Sets the description of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param       | Type                | Description                     |
| ----------- | ------------------- | ------------------------------- |
| description | <code>string</code> | The description of the command. |

<a name="Slash+setNameLocalizations"></a>

### slash.setNameLocalizations([localizations]) ⇒ [<code>Slash</code>](#Slash)

Sets the localizations of the name of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param           | Type                | Description                            |
| --------------- | ------------------- | -------------------------------------- |
| [localizations] | <code>Object</code> | The localizations of the command name. |

<a name="Slash+setDescription"></a>

### slash.setDescription(description) ⇒ [<code>Slash</code>](#Slash)

Sets the description of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param       | Type                | Description                     |
| ----------- | ------------------- | ------------------------------- |
| description | <code>string</code> | The description of the command. |

<a name="Slash+setDefaultMemberPermissions"></a>

### slash.setDefaultMemberPermissions(...permission) ⇒ [<code>Slash</code>](#Slash)

Sets the default member permissions of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param         | Type                | Description                                 |
| ------------- | ------------------- | ------------------------------------------- |
| ...permission | <code>number</code> | The permissions of the command for members. |

<a name="Slash+setDmPermission"></a>

### slash.setDmPermission(permission) ⇒ [<code>Slash</code>](#Slash)

Sets whether the Slash Command can be used in DMs.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param      | Type                 | Description                             |
| ---------- | -------------------- | --------------------------------------- |
| permission | <code>boolean</code> | Whether the command can be used in DMs. |

<a name="Slash+setOptions"></a>

### slash.setOptions(fn) ⇒ [<code>Slash</code>](#Slash)

Sets the options of the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param | Type                                                       | Description                                                    |
| ----- | ---------------------------------------------------------- | -------------------------------------------------------------- |
| fn    | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The options of the command or a function that returns options. |

<a name="Slash+addSubCommandGroups"></a>

### slash.addSubCommandGroups(fn) ⇒ [<code>Slash</code>](#Slash)

Adds sub-command groups to the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param | Type                                                       | Description                                                           |
| ----- | ---------------------------------------------------------- | --------------------------------------------------------------------- |
| fn    | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The sub-command groups or a function that returns sub-command groups. |

<a name="Slash+addSubCommands"></a>

### slash.addSubCommands(fn) ⇒ [<code>Slash</code>](#Slash)

Adds sub-commands to the Slash Command.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: [<code>Slash</code>](#Slash) - The Slash instance.

| Param | Type                                                       | Description                                               |
| ----- | ---------------------------------------------------------- | --------------------------------------------------------- |
| fn    | <code>Array.&lt;Object&gt;</code> \| <code>function</code> | The sub-commands or a function that returns sub-commands. |

<a name="Slash+validation"></a>

### slash.validation()

Validates the properties of the ApplicationCommand object.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Throws**:

- <code>TypeError</code> If the Application Command Type is invalid or dmPermission is not a boolean.
- <code>RangeError</code> If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.

<a name="Slash+toJSON"></a>

### slash.toJSON() ⇒ <code>Object</code>

Converts the ApplicationCommand object to JSON format.

**Kind**: instance method of [<code>Slash</code>](#Slash)  
**Returns**: <code>Object</code> - The ApplicationCommand object in JSON format.  
**Throws**:

- <code>TypeError</code> If the Application Command Type is invalid or dmPermission is not a boolean.
- <code>RangeError</code> If the context menu command has a description or options, or if the name or description length is invalid, or if the number of options exceeds 25.

<a name="SlashOption"></a>

## SlashOption

Represents an option for a slash command.

**Kind**: global class

- [SlashOption](#SlashOption)
  - [new SlashOption([data])](#new_SlashOption_new)
  - _instance_
    - [.setType(type)](#SlashOption+setType) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setName(name)](#SlashOption+setName) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setDescription(description)](#SlashOption+setDescription) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setRequired(required)](#SlashOption+setRequired) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setDescriptionLocalizations(localizations)](#SlashOption+setDescriptionLocalizations) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setNameLocalizations([localizations])](#SlashOption+setNameLocalizations) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setChoices(...choices)](#SlashOption+setChoices) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setChannelTypes(...channelTypes)](#SlashOption+setChannelTypes) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setMinValue(minValue)](#SlashOption+setMinValue) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setMaxValue(maxValue)](#SlashOption+setMaxValue) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setMinLength(minLength)](#SlashOption+setMinLength) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setMaxLength(maxLength)](#SlashOption+setMaxLength) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.setAutocomplete(autocomplete)](#SlashOption+setAutocomplete) ⇒ [<code>SlashOption</code>](#SlashOption)
    - [.validation()](#SlashOption+validation)
    - [.toJSON()](#SlashOption+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformChannelType(channelType)](#SlashOption.transformChannelType) ⇒ <code>number</code>
    - [.transformChoices(choices)](#SlashOption.transformChoices) ⇒ <code>Object</code>

<a name="new_SlashOption_new"></a>

### new SlashOption([data])

Creates a new instance of the SlashOption class.

| Param                            | Type                                       | Default                                       | Description                                         |
| -------------------------------- | ------------------------------------------ | --------------------------------------------- | --------------------------------------------------- |
| [data]                           | <code>Object</code>                        |                                               | The data for the option.                            |
| [data.type]                      | <code>string</code> \| <code>number</code> | <code>&quot;\&quot;String\&quot;&quot;</code> | The type of the option.                             |
| [data.name]                      | <code>string</code>                        |                                               | The name of the option.                             |
| [data.name_localizations]        | <code>Object</code>                        |                                               | The localized names of the option.                  |
| [data.description]               | <code>string</code>                        |                                               | The description of the option.                      |
| [data.description_localizations] | <code>Object</code>                        |                                               | The localized descriptions of the option.           |
| [data.required]                  | <code>boolean</code>                       |                                               | Whether the option is required or not.              |
| [data.choices]                   | <code>Array.&lt;Object&gt;</code>          |                                               | The choices for the option.                         |
| [data.channel_types]             | <code>Array.&lt;string&gt;</code>          |                                               | The channel types that the option can be used with. |
| [data.min_value]                 | <code>number</code>                        |                                               | The minimum value for the option.                   |
| [data.max_value]                 | <code>number</code>                        |                                               | The maximum value for the option.                   |
| [data.min_length]                | <code>number</code>                        |                                               | The minimum length for the option.                  |
| [data.max_length]                | <code>number</code>                        |                                               | The maximum length for the option.                  |
| [data.autocomplete]              | <code>boolean</code>                       |                                               | Whether the option should be autocompleted or not.  |

<a name="SlashOption+setType"></a>

### slashOption.setType(type) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the type of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param | Type                                       | Description             |
| ----- | ------------------------------------------ | ----------------------- |
| type  | <code>string</code> \| <code>number</code> | The type of the option. |

<a name="SlashOption+setName"></a>

### slashOption.setName(name) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the name of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| name  | <code>string</code> | The name of the option. |

<a name="SlashOption+setDescription"></a>

### slashOption.setDescription(description) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the description of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param       | Type                | Description                    |
| ----------- | ------------------- | ------------------------------ |
| description | <code>string</code> | The description of the option. |

<a name="SlashOption+setRequired"></a>

### slashOption.setRequired(required) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets whether the option is required or not.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param    | Type                 | Description                            |
| -------- | -------------------- | -------------------------------------- |
| required | <code>boolean</code> | Whether the option is required or not. |

<a name="SlashOption+setDescriptionLocalizations"></a>

### slashOption.setDescriptionLocalizations(localizations) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the localized descriptions of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param         | Type                | Description                               |
| ------------- | ------------------- | ----------------------------------------- |
| localizations | <code>Object</code> | The localized descriptions of the option. |

<a name="SlashOption+setNameLocalizations"></a>

### slashOption.setNameLocalizations([localizations]) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the localized names of the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param           | Type                | Description                        |
| --------------- | ------------------- | ---------------------------------- |
| [localizations] | <code>Object</code> | The localized names of the option. |

<a name="SlashOption+setChoices"></a>

### slashOption.setChoices(...choices) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the choices for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param      | Type                                                     | Description                 |
| ---------- | -------------------------------------------------------- | --------------------------- |
| ...choices | <code>Object</code> \| <code>Array.&lt;Object&gt;</code> | The choices for the option. |

<a name="SlashOption+setChannelTypes"></a>

### slashOption.setChannelTypes(...channelTypes) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the channel types that the option can be used with.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - The updated instance of the SlashOption class.

| Param           | Type                                                     | Description                                         |
| --------------- | -------------------------------------------------------- | --------------------------------------------------- |
| ...channelTypes | <code>string</code> \| <code>Array.&lt;string&gt;</code> | The channel types that the option can be used with. |

<a name="SlashOption+setMinValue"></a>

### slashOption.setMinValue(minValue) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the minimum value allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.

| Param    | Type                | Description        |
| -------- | ------------------- | ------------------ |
| minValue | <code>number</code> | The minimum value. |

<a name="SlashOption+setMaxValue"></a>

### slashOption.setMaxValue(maxValue) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the maximum value allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.

| Param    | Type                | Description        |
| -------- | ------------------- | ------------------ |
| maxValue | <code>number</code> | The maximum value. |

<a name="SlashOption+setMinLength"></a>

### slashOption.setMinLength(minLength) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the minimum length allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.

| Param     | Type                | Description         |
| --------- | ------------------- | ------------------- |
| minLength | <code>number</code> | The minimum length. |

<a name="SlashOption+setMaxLength"></a>

### slashOption.setMaxLength(maxLength) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets the maximum length allowed for the option.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.

| Param     | Type                | Description         |
| --------- | ------------------- | ------------------- |
| maxLength | <code>number</code> | The maximum length. |

<a name="SlashOption+setAutocomplete"></a>

### slashOption.setAutocomplete(autocomplete) ⇒ [<code>SlashOption</code>](#SlashOption)

Sets whether the option is autocompletable.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: [<code>SlashOption</code>](#SlashOption) - - The current instance of the SlashOption class.

| Param        | Type                 | Description                            |
| ------------ | -------------------- | -------------------------------------- |
| autocomplete | <code>boolean</code> | Whether the option is autocompletable. |

<a name="SlashOption+validation"></a>

### slashOption.validation()

Validates the option data and throws an error if any data is invalid.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Throws**:

- <code>RangeError</code> - If option type is invalid, option name or description is empty, or length is greater than limit.
- <code>TypeError</code> - If option name or description is not a string, or option required or autocomplete is not a boolean.

<a name="SlashOption+toJSON"></a>

### slashOption.toJSON() ⇒ <code>Object</code>

Returns a JSON representation of the SlashOption instance, after performing validation.

**Kind**: instance method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - JSON object with the following properties:

- type: The type of option, either as a string or an OptionType enum value.
- name: The name of the option.
- name_localizations: An object containing localized names for the option.
- description: A description of the option.
- description_localizations: An object containing localized descriptions for the option.
- required: A boolean indicating whether the option is required.
- choices: An array of choice objects for the option, if applicable.
- channel_types: An array of channel type objects for the option, if applicable.
- min_value: The minimum value for the option, if applicable.
- max_value: The maximum value for the option, if applicable.
- max_length: The maximum length of the option, if applicable.
- min_length: The minimum length of the option, if applicable.
- autocomplete: A boolean indicating whether the option supports autocomplete.  
  <a name="SlashOption.transformChannelType"></a>

### SlashOption.transformChannelType(channelType) ⇒ <code>number</code>

Transforms a channel type string to its respective integer value.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>number</code> - - The channel type integer value.

| Param       | Type                | Description              |
| ----------- | ------------------- | ------------------------ |
| channelType | <code>string</code> | The channel type string. |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices(choices) ⇒ <code>Object</code>

Transforms the choices object to a format suitable for the API.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - - The transformed choices object.

| Param                       | Type                                       | Description                        |
| --------------------------- | ------------------------------------------ | ---------------------------------- |
| choices                     | <code>Object</code>                        | The choices object.                |
| [choices.name]              | <code>string</code>                        | The name of the choice.            |
| [choices.value]             | <code>string</code>                        | The value of the choice.           |
| [choices.nameLocalizations] | <code>Object.&lt;string, string&gt;</code> | The localized names of the choice. |

<a name="SlashSubCommandGroups"></a>

## SlashSubCommandGroups

Represents a sub-command group for a slash command.

**Kind**: global class

- [SlashSubCommandGroups](#SlashSubCommandGroups)
  - [new SlashSubCommandGroups([data])](#new_SlashSubCommandGroups_new)
  - [.setName(name)](#SlashSubCommandGroups+setName) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
  - [.setDescription(description)](#SlashSubCommandGroups+setDescription) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
  - [.setDescriptionLocalizations(localizations)](#SlashSubCommandGroups+setDescriptionLocalizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
  - [.setNameLocalizations([localizations])](#SlashSubCommandGroups+setNameLocalizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
  - [.addSubCommands(fn)](#SlashSubCommandGroups+addSubCommands) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)
  - [.toJSON()](#SlashSubCommandGroups+toJSON) ⇒ <code>Object</code>

<a name="new_SlashSubCommandGroups_new"></a>

### new SlashSubCommandGroups([data])

| Param                           | Type                              | Description                                             |
| ------------------------------- | --------------------------------- | ------------------------------------------------------- |
| [data]                          | <code>Object</code>               | The data for the sub-command group.                     |
| [data.name]                     | <code>string</code>               | The name of the sub-command group.                      |
| [data.description]              | <code>string</code>               | The description of the sub-command group.               |
| [data.nameLocalizations]        | <code>Object</code>               | The name localizations of the sub-command group.        |
| [data.descriptionLocalizations] | <code>Object</code>               | The description localizations of the sub-command group. |
| [data.options]                  | <code>Array.&lt;Object&gt;</code> | The sub-commands of the sub-command group.              |

<a name="SlashSubCommandGroups+setName"></a>

### slashSubCommandGroups.setName(name) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)

Sets the name of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.

| Param | Type                | Description                        |
| ----- | ------------------- | ---------------------------------- |
| name  | <code>string</code> | The name of the sub-command group. |

<a name="SlashSubCommandGroups+setDescription"></a>

### slashSubCommandGroups.setDescription(description) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)

Sets the description of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.

| Param       | Type                | Description                               |
| ----------- | ------------------- | ----------------------------------------- |
| description | <code>string</code> | The description of the sub-command group. |

<a name="SlashSubCommandGroups+setDescriptionLocalizations"></a>

### slashSubCommandGroups.setDescriptionLocalizations(localizations) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)

Sets the description localizations of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.

| Param         | Type                | Description                                             |
| ------------- | ------------------- | ------------------------------------------------------- |
| localizations | <code>Object</code> | The description localizations of the sub-command group. |

<a name="SlashSubCommandGroups+setNameLocalizations"></a>

### slashSubCommandGroups.setNameLocalizations([localizations]) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)

Sets the name localizations of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.

| Param           | Type                | Description                                      |
| --------------- | ------------------- | ------------------------------------------------ |
| [localizations] | <code>Object</code> | The name localizations of the sub-command group. |

<a name="SlashSubCommandGroups+addSubCommands"></a>

### slashSubCommandGroups.addSubCommands(fn) ⇒ [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)

Adds sub-commands to the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups) - The sub-command group object.  
**Throws**:

- <code>RangeError</code> Will throw an error if the sub-command builder is not of type 'SlashSubCommandBuilder'.

| Param | Type                                                       | Description                                                       |
| ----- | ---------------------------------------------------------- | ----------------------------------------------------------------- |
| fn    | <code>function</code> \| <code>Array.&lt;Object&gt;</code> | The sub-command builder function or array of sub-command objects. |

<a name="SlashSubCommandGroups+toJSON"></a>

### slashSubCommandGroups.toJSON() ⇒ <code>Object</code>

Returns a JSON representation of the sub-command group.

**Kind**: instance method of [<code>SlashSubCommandGroups</code>](#SlashSubCommandGroups)  
**Returns**: <code>Object</code> - The JSON representation of the sub-command group.

<a name="SlashSubCommands"></a>

## SlashSubCommands

A class representing a slash subcommand for Discord slash commands.

**Kind**: global class

- [SlashSubCommands](#SlashSubCommands)
  - [new SlashSubCommands(data)](#new_SlashSubCommands_new)
  - [.setName(name)](#SlashSubCommands+setName) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
  - [.setDescription(description)](#SlashSubCommands+setDescription) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
  - [.setDescriptionLocalizations(localizations)](#SlashSubCommands+setDescriptionLocalizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
  - [.setNameLocalizations(localizations)](#SlashSubCommands+setNameLocalizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
  - [.setOptions(fn)](#SlashSubCommands+setOptions) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)
  - [.toJSON()](#SlashSubCommands+toJSON) ⇒ <code>Object</code>

<a name="new_SlashSubCommands_new"></a>

### new SlashSubCommands(data)

Create a new SlashSubCommands instance.

| Param                          | Type                              | Description                                   |
| ------------------------------ | --------------------------------- | --------------------------------------------- |
| data                           | <code>Object</code>               | The data for the subcommand.                  |
| data.name                      | <code>string</code>               | The name of the subcommand.                   |
| data.description               | <code>string</code>               | The description of the subcommand.            |
| data.name_localizations        | <code>Object</code>               | The localized names of the subcommand.        |
| data.description_localizations | <code>Object</code>               | The localized descriptions of the subcommand. |
| data.options                   | <code>Array.&lt;Object&gt;</code> | The options for the subcommand.               |

<a name="SlashSubCommands+setName"></a>

### slashSubCommands.setName(name) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)

Set the name of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.

| Param | Type                | Description                 |
| ----- | ------------------- | --------------------------- |
| name  | <code>string</code> | The name of the subcommand. |

<a name="SlashSubCommands+setDescription"></a>

### slashSubCommands.setDescription(description) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)

Set the description of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.

| Param       | Type                | Description                        |
| ----------- | ------------------- | ---------------------------------- |
| description | <code>string</code> | The description of the subcommand. |

<a name="SlashSubCommands+setDescriptionLocalizations"></a>

### slashSubCommands.setDescriptionLocalizations(localizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)

Set the localized descriptions of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.

| Param         | Type                | Description                                   |
| ------------- | ------------------- | --------------------------------------------- |
| localizations | <code>Object</code> | The localized descriptions of the subcommand. |

<a name="SlashSubCommands+setNameLocalizations"></a>

### slashSubCommands.setNameLocalizations(localizations) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)

Set the localized names of the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.

| Param         | Type                | Description                            |
| ------------- | ------------------- | -------------------------------------- |
| localizations | <code>Object</code> | The localized names of the subcommand. |

<a name="SlashSubCommands+setOptions"></a>

### slashSubCommands.setOptions(fn) ⇒ [<code>SlashSubCommands</code>](#SlashSubCommands)

Set the options for the subcommand.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: [<code>SlashSubCommands</code>](#SlashSubCommands) - The updated SlashSubCommands instance.

| Param | Type                                         | Description                     |
| ----- | -------------------------------------------- | ------------------------------- |
| fn    | <code>Object</code> \| <code>function</code> | The options for the subcommand. |

<a name="SlashSubCommands+toJSON"></a>

### slashSubCommands.toJSON() ⇒ <code>Object</code>

Convert the SlashSubCommands instance to a JSON object.

**Kind**: instance method of [<code>SlashSubCommands</code>](#SlashSubCommands)  
**Returns**: <code>Object</code> - The JSON representation of the SlashSubCommands instance.

<a name="StringSelect"></a>

## StringSelect

Represents a select menu with string options.

**Kind**: global class

- [StringSelect](#StringSelect)
  - [new StringSelect([data])](#new_StringSelect_new)
  - _instance_
    - [.setCustomId(customId)](#StringSelect+setCustomId) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.setPlaceholder(placeholder)](#StringSelect+setPlaceholder) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.setMinValues(minValue)](#StringSelect+setMinValues) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.setMaxValues(maxValue)](#StringSelect+setMaxValues) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.setDisabled(disabled)](#StringSelect+setDisabled) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.setOptions([options])](#StringSelect+setOptions) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.addOptions([options])](#StringSelect+addOptions) ⇒ [<code>StringSelect</code>](#StringSelect)
    - [.toJSON()](#StringSelect+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformOptions([options])](#StringSelect.transformOptions) ⇒ <code>Object</code>
    - [.transformEmoji(emoji)](#StringSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_StringSelect_new"></a>

### new StringSelect([data])

| Param  | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| [data] | <code>Object</code> | The data for the select menu. |

<a name="StringSelect+setCustomId"></a>

### stringSelect.setCustomId(customId) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets the custom ID for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.

| Param    | Type                | Description                        |
| -------- | ------------------- | ---------------------------------- |
| customId | <code>string</code> | The custom ID for the select menu. |

<a name="StringSelect+setPlaceholder"></a>

### stringSelect.setPlaceholder(placeholder) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets the placeholder text for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.

| Param       | Type                | Description                               |
| ----------- | ------------------- | ----------------------------------------- |
| placeholder | <code>string</code> | The placeholder text for the select menu. |

<a name="StringSelect+setMinValues"></a>

### stringSelect.setMinValues(minValue) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets the minimum number of values that can be selected in the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.

| Param    | Type                | Description                                        |
| -------- | ------------------- | -------------------------------------------------- |
| minValue | <code>number</code> | The minimum number of values that can be selected. |

<a name="StringSelect+setMaxValues"></a>

### stringSelect.setMaxValues(maxValue) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets the maximum number of values that can be selected in the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.

| Param    | Type                | Description                                        |
| -------- | ------------------- | -------------------------------------------------- |
| maxValue | <code>number</code> | The maximum number of values that can be selected. |

<a name="StringSelect+setDisabled"></a>

### stringSelect.setDisabled(disabled) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets whether the select menu is disabled.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.

| Param    | Type                 | Description                          |
| -------- | -------------------- | ------------------------------------ |
| disabled | <code>boolean</code> | Whether the select menu is disabled. |

<a name="StringSelect+setOptions"></a>

### stringSelect.setOptions([options]) ⇒ [<code>StringSelect</code>](#StringSelect)

Sets the options for the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  
**Throws**:

- <code>RangeError</code> - If the options array has more than 25 items.

| Param     | Type                              | Default         | Description                      |
| --------- | --------------------------------- | --------------- | -------------------------------- |
| [options] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | The options for the select menu. |

<a name="StringSelect+addOptions"></a>

### stringSelect.addOptions([options]) ⇒ [<code>StringSelect</code>](#StringSelect)

Adds options to the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: [<code>StringSelect</code>](#StringSelect) - - The updated StringSelect instance.  
**Throws**:

- <code>RangeError</code> - If the options array has more items than can be added to the select menu.
- <code>RangeError</code> - If no options are provided to add to the select menu.

| Param     | Type                              | Default         | Description                            |
| --------- | --------------------------------- | --------------- | -------------------------------------- |
| [options] | <code>Array.&lt;Object&gt;</code> | <code>[]</code> | The options to add to the select menu. |

<a name="StringSelect+toJSON"></a>

### stringSelect.toJSON() ⇒ <code>Object</code>

Returns the JSON representation of the select menu.

**Kind**: instance method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The JSON representation of the select menu.  
<a name="StringSelect.transformOptions"></a>

### StringSelect.transformOptions([options]) ⇒ <code>Object</code>

Transforms an option object for a string select component into a simpler format.

**Kind**: static method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The transformed option object.  
**Throws**:

- <code>RangeError</code> - If the option object is missing the label or value properties, or if the default property is not a boolean.

| Param     | Type                | Description                     |
| --------- | ------------------- | ------------------------------- |
| [options] | <code>Object</code> | The option object to transform. |

<a name="StringSelect.transformEmoji"></a>

### StringSelect.transformEmoji(emoji) ⇒ <code>Object</code>

Transforms an emoji object for a string select component into a simpler format.

**Kind**: static method of [<code>StringSelect</code>](#StringSelect)  
**Returns**: <code>Object</code> - - The transformed emoji object.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| emoji | <code>Object</code> | The emoji object to transform. |

<a name="UserSelect"></a>

## UserSelect

Represents a user select component in a Discord interaction.

**Kind**: global class

- [UserSelect](#UserSelect)
  - [new UserSelect([data])](#new_UserSelect_new)
  - _instance_
    - [.setCustomId(customId)](#UserSelect+setCustomId) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.setPlaceholder(placeholder)](#UserSelect+setPlaceholder) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.setMinValues(minValue)](#UserSelect+setMinValues) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.setMaxValues(maxValue)](#UserSelect+setMaxValues) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.setDisabled(disabled)](#UserSelect+setDisabled) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.setOptions(options)](#UserSelect+setOptions) ⇒ [<code>UserSelect</code>](#UserSelect)
    - [.toJSON()](#UserSelect+toJSON) ⇒ <code>Object</code>
  - _static_
    - [.transformOptions([options])](#UserSelect.transformOptions) ⇒ <code>Object</code>
    - [.transformEmoji(emoji)](#UserSelect.transformEmoji) ⇒ <code>Object</code>

<a name="new_UserSelect_new"></a>

### new UserSelect([data])

Creates a new instance of UserSelect.

| Param                         | Type                                       | Description                                        |
| ----------------------------- | ------------------------------------------ | -------------------------------------------------- |
| [data]                        | <code>Object</code>                        | The data to create the UserSelect instance.        |
| [data.custom_id]              | <code>string</code>                        | The custom ID of the user select.                  |
| [data.options]                | <code>Array.&lt;Object&gt;</code>          | The options for the user select.                   |
| [data.options.label]          | <code>string</code>                        | The label for the option.                          |
| [data.options.value]          | <code>string</code>                        | The value for the option.                          |
| [data.options.description]    | <code>string</code>                        | The description for the option.                    |
| [data.options.emoji]          | <code>string</code> \| <code>Object</code> | The emoji for the option.                          |
| [data.options.emoji.name]     | <code>string</code>                        | The name of the emoji.                             |
| [data.options.emoji.id]       | <code>string</code>                        | The ID of the emoji.                               |
| [data.options.emoji.animated] | <code>boolean</code>                       | Whether the emoji is animated.                     |
| [data.options.default]        | <code>boolean</code>                       | Whether the option is the default one.             |
| [data.placeholder]            | <code>string</code>                        | The placeholder text for the user select.          |
| [data.min_values]             | <code>number</code>                        | The minimum number of values that can be selected. |
| [data.max_values]             | <code>number</code>                        | The maximum number of values that can be selected. |
| [data.disabled]               | <code>boolean</code>                       | Whether the user select is disabled.               |

<a name="UserSelect+setCustomId"></a>

### userSelect.setCustomId(customId) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets the custom ID for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param    | Type                | Description           |
| -------- | ------------------- | --------------------- |
| customId | <code>string</code> | The custom ID to set. |

<a name="UserSelect+setPlaceholder"></a>

### userSelect.setPlaceholder(placeholder) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets the placeholder text for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param       | Type                | Description                  |
| ----------- | ------------------- | ---------------------------- |
| placeholder | <code>string</code> | The placeholder text to set. |

<a name="UserSelect+setMinValues"></a>

### userSelect.setMinValues(minValue) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets the minimum number of values that can be selected in the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| minValue | <code>number</code> | The minimum number of values to set. |

<a name="UserSelect+setMaxValues"></a>

### userSelect.setMaxValues(maxValue) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets the maximum number of values that can be selected in the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param    | Type                | Description                          |
| -------- | ------------------- | ------------------------------------ |
| maxValue | <code>number</code> | The maximum number of values to set. |

<a name="UserSelect+setDisabled"></a>

### userSelect.setDisabled(disabled) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets whether the user select component is disabled.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param    | Type                 | Description                                    |
| -------- | -------------------- | ---------------------------------------------- |
| disabled | <code>boolean</code> | Whether the user select component is disabled. |

<a name="UserSelect+setOptions"></a>

### userSelect.setOptions(options) ⇒ [<code>UserSelect</code>](#UserSelect)

Sets the options for the user select component.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: [<code>UserSelect</code>](#UserSelect) - - The updated user select component.

| Param   | Type                              | Description                        |
| ------- | --------------------------------- | ---------------------------------- |
| options | <code>Array.&lt;Object&gt;</code> | An array of option objects to set. |

<a name="UserSelect+toJSON"></a>

### userSelect.toJSON() ⇒ <code>Object</code>

Converts the user select component to a plain object that can be sent in a Discord message.

**Kind**: instance method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The user select component as a plain object.  
<a name="UserSelect.transformOptions"></a>

### UserSelect.transformOptions([options]) ⇒ <code>Object</code>

Transforms an option object for a user select component into a simpler format.

**Kind**: static method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The transformed option object.

| Param     | Type                | Description                     |
| --------- | ------------------- | ------------------------------- |
| [options] | <code>Object</code> | The option object to transform. |

<a name="UserSelect.transformEmoji"></a>

### UserSelect.transformEmoji(emoji) ⇒ <code>Object</code>

Transforms a Discord emoji object or string into a simpler format.

**Kind**: static method of [<code>UserSelect</code>](#UserSelect)  
**Returns**: <code>Object</code> - - The transformed emoji object.

| Param | Type                                       | Description                                      |
| ----- | ------------------------------------------ | ------------------------------------------------ |
| emoji | <code>Object</code> \| <code>string</code> | The Discord emoji object or string to transform. |
