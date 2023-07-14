---
id: structures
title: Structures
description: Structures Section
sidebar_position: 5
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="Activity"></a>

## Activity ⇐ <code>Base</code>

It's a class that represents a user's activity

**Kind**: global class  
**Extends**: <code>Base</code>

- [Activity](#Activity) ⇐ <code>Base</code>
  - [new Activity([data], client)](#new_Activity_new)
  - [.toJSON()](#Activity+toJSON) ⇒ <code>Object</code>

<a name="new_Activity_new"></a>

### new Activity([data], client)

The constructor function initializes an object with properties based on the provided data, and
assigns default values if the data is missing or invalid.

| Param  | Type                | Description                                 |
| ------ | ------------------- | ------------------------------------------- |
| [data] | <code>Object</code> | The data for the activity.                  |
| client | <code>Client</code> | The client that instantiated this activity. |

<a name="Activity+toJSON"></a>

### activity.toJSON() ⇒ <code>Object</code>

Converts the current object to a JSON representation.

**Kind**: instance method of [<code>Activity</code>](#Activity)  
**Returns**: <code>Object</code> - - The JSON representation of the object.

<a name="APIGuild"></a>

## APIGuild ⇐ <code>Base</code>

Represents a guild in the API.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name                        | Type                                                          | Description                                             |
| --------------------------- | ------------------------------------------------------------- | ------------------------------------------------------- |
| name                        | <code>string</code> \| <code>null</code>                      | The name of the guild.                                  |
| description                 | <code>string</code> \| <code>null</code>                      | The description of the guild.                           |
| region                      | <code>string</code> \| <code>null</code>                      | The region of the guild.                                |
| verificationLevel           | <code>VerificationLevel</code> \| <code>null</code>           | The verification level of the guild.                    |
| defaultMessageNotifications | <code>DefaultMessageNotifications</code> \| <code>null</code> | The default message notifications setting of the guild. |
| explicitContentFilter       | <code>ExplicitContentFilter</code> \| <code>null</code>       |                                                         |

<a name="new_APIGuild_new"></a>

### new APIGuild([data], client)

It takes in a data object and a client, and then sets the properties of the class to the values of
the data object

| Param  | Type                | Description                                   |
| ------ | ------------------- | --------------------------------------------- |
| [data] | <code>Object</code> | The data object containing guild information. |
| client | <code>Client</code> | The client instance.                          |

<a name="ApplicationCommand"></a>

## ApplicationCommand ⇐ <code>Base</code>

Represents an application command.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ApplicationCommand](#ApplicationCommand) ⇐ <code>Base</code>
  - [new ApplicationCommand([data], guildId, client)](#new_ApplicationCommand_new)
  - [.guild](#ApplicationCommand+guild) ⇒
  - [.fetch([options])](#ApplicationCommand+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#ApplicationCommand+edit) ⇒ <code>Promise</code>
  - [.delete()](#ApplicationCommand+delete) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_ApplicationCommand_new"></a>

### new ApplicationCommand([data], guildId, client)

Create an application command object.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the command information. |
| guildId | <code>string</code> | The ID of the guild the command belongs to.         |
| client  | <code>Client</code> | The client instance.                                |

<a name="ApplicationCommand+guild"></a>

### applicationCommand.guild ⇒

Get the guild object if it exists, otherwise return null.

**Kind**: instance property of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The guild object or null.  
<a name="ApplicationCommand+fetch"></a>

### applicationCommand.fetch([options]) ⇒ <code>Promise</code>

Fetches the commands for a guild or the global application.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise</code> - - A promise that resolves with the fetched commands.

| Param     | Type                | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| [options] | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="ApplicationCommand+edit"></a>

### applicationCommand.edit(options) ⇒ <code>Promise</code>

Edits the command with the specified options.
If the command is associated with a guild, it will edit the guild command.
Otherwise, it will edit the global command.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise</code> - A promise that resolves when the command is successfully edited.

| Param   | Type                | Description                           |
| ------- | ------------------- | ------------------------------------- |
| options | <code>Object</code> | The options to edit the command with. |

<a name="ApplicationCommand+delete"></a>

### applicationCommand.delete() ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the command from the guild or the global application.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the command is successfully deleted.

<a name="ApplicationCommandInteraction"></a>

## ApplicationCommandInteraction ⇐ <code>Interaction</code>

Represents an application command interaction.

**Kind**: global class  
**Extends**: <code>Interaction</code>  
**Properties**

| Name        | Type                                          | Description                                              |
| ----------- | --------------------------------------------- | -------------------------------------------------------- |
| commandId   | <code>string</code> \| <code>null</code>      | The ID of the command associated with the interaction.   |
| commandName | <code>string</code> \| <code>null</code>      | The name of the command associated with the interaction. |
| commandType | <code>string</code> \| <code>null</code>      | The type of the command associated with the interaction. |
| options     | <code>CommandInteractionOptionResolver</code> | The resolver for the command interaction options.        |

<a name="new_ApplicationCommandInteraction_new"></a>

### new ApplicationCommandInteraction([data], guildId, client)

Constructs a new instance of the CommandInteraction class.

| Param   | Type                | Description                                                   |
| ------- | ------------------- | ------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred.           |
| client  | <code>Client</code> | The client instance.                                          |

<a name="ApplicationCommandPermission"></a>

## ApplicationCommandPermission ⇐ <code>Base</code>

Represents an application command permission.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ApplicationCommandPermission](#ApplicationCommandPermission) ⇐ <code>Base</code>
  - [new ApplicationCommandPermission([data], guildId, client)](#new_ApplicationCommandPermission_new)
  - _instance_
    - [.command](#ApplicationCommandPermission+command) ⇒
    - [.guild](#ApplicationCommandPermission+guild) ⇒
    - [.fetch([options])](#ApplicationCommandPermission+fetch) ⇒ <code>Promise</code>
  - _static_
    - [.transformPermissions(permissions)](#ApplicationCommandPermission.transformPermissions) ⇒ <code>Object</code>

<a name="new_ApplicationCommandPermission_new"></a>

### new ApplicationCommandPermission([data], guildId, client)

Constructs a new instance of the CommandPermissions class.

| Param   | Type                | Description                                                    |
| ------- | ------------------- | -------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the command permission information. |
| guildId | <code>string</code> | The ID of the guild the command permission belongs to.         |
| client  | <code>Client</code> | The client instance.                                           |

<a name="ApplicationCommandPermission+command"></a>

### applicationCommandPermission.command ⇒

Retrieves the command associated with this instance.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The command object if found, otherwise null.  
<a name="ApplicationCommandPermission+guild"></a>

### applicationCommandPermission.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The guild object if found, otherwise null.  
<a name="ApplicationCommandPermission+fetch"></a>

### applicationCommandPermission.fetch([options]) ⇒ <code>Promise</code>

Fetches the permissions for the guild commands.

**Kind**: instance method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched permissions.

| Param     | Type                | Description                                |
| --------- | ------------------- | ------------------------------------------ |
| [options] | <code>Object</code> | Optional parameters for the fetch request. |

<a name="ApplicationCommandPermission.transformPermissions"></a>

### ApplicationCommandPermission.transformPermissions(permissions) ⇒ <code>Object</code>

Transforms a permissions object into a formatted object with specific properties.

**Kind**: static method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: <code>Object</code> - - The transformed permissions object.

| Param       | Type                | Description                          |
| ----------- | ------------------- | ------------------------------------ |
| permissions | <code>Object</code> | The permissions object to transform. |

<a name="AuditLogEntry"></a>

## AuditLogEntry ⇐ <code>Base</code>

Represents an entry in the audit log.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name       | Type                                     | Description                                                               |
| ---------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| targetId   | <code>string</code> \| <code>null</code> | The ID of the target of the audit log entry.                              |
| changes    | <code>Array.&lt;Object&gt;</code>        | An array of objects representing the changes made in the audit log entry. |
| userId     | <code>string</code> \| <code>null</code> | The ID of the user who performed the action in the audit log entry.       |
| id         | <code>string</code> \| <code>null</code> | The ID of the audit log entry.                                            |
| actionType | <code>string</code> \| <code>null</code> | The type of action performed                                              |

- [AuditLogEntry](#AuditLogEntry) ⇐ <code>Base</code>
  - [new AuditLogEntry([data], client)](#new_AuditLogEntry_new)
  - [.executor](#AuditLogEntry+executor) ⇒
  - [.isUpdate()](#AuditLogEntry+isUpdate) ⇒ <code>boolean</code>

<a name="new_AuditLogEntry_new"></a>

### new AuditLogEntry([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| [data] | <code>Object</code> | The data for the audit log entry. |
| client | <code>Client</code> | The client instance.              |

<a name="AuditLogEntry+executor"></a>

### auditLogEntry.executor ⇒

Retrieves the executor of the action.

**Kind**: instance property of [<code>AuditLogEntry</code>](#AuditLogEntry)  
**Returns**: The user object representing the executor, or null if not found.  
<a name="AuditLogEntry+isUpdate"></a>

### auditLogEntry.isUpdate() ⇒ <code>boolean</code>

Checks if the action type of the guild audit log entry is an update action.

**Kind**: instance method of [<code>AuditLogEntry</code>](#AuditLogEntry)  
**Returns**: <code>boolean</code> - - True if the action type is an update action, false otherwise.

<a name="AutocompleteInteraction"></a>

## AutocompleteInteraction ⇐ <code>Interaction</code>

Represents an interaction with an autocomplete component.

**Kind**: global class  
**Extends**: <code>Interaction</code>

- [AutocompleteInteraction](#AutocompleteInteraction) ⇐ <code>Interaction</code>
  - [new AutocompleteInteraction([data], guildId, client)](#new_AutocompleteInteraction_new)
  - _instance_
    - [.getFocused()](#AutocompleteInteraction+getFocused) ⇒
    - [.respond(choices)](#AutocompleteInteraction+respond) ⇒ <code>Promise</code>
  - _static_
    - [.transformChoices(choices)](#AutocompleteInteraction.transformChoices) ⇒ <code>Object</code>

<a name="new_AutocompleteInteraction_new"></a>

### new AutocompleteInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Client</code> | The client instance associated with the instance. |

<a name="AutocompleteInteraction+getFocused"></a>

### autocompleteInteraction.getFocused() ⇒

Retrieves the focused option from the data object.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The value of the focused option, or null if no option is focused or if the value is not available.  
<a name="AutocompleteInteraction+respond"></a>

### autocompleteInteraction.respond(choices) ⇒ <code>Promise</code>

Sends a response to an autocomplete interaction with the provided choices.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: <code>Promise</code> - A promise that resolves when the response is sent.

| Param   | Type               | Description                                           |
| ------- | ------------------ | ----------------------------------------------------- |
| choices | <code>Array</code> | An array of choices for the autocomplete interaction. |

<a name="AutocompleteInteraction.transformChoices"></a>

### AutocompleteInteraction.transformChoices(choices) ⇒ <code>Object</code>

Transforms the given choices object into a new object with the name and value properties.

**Kind**: static method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: <code>Object</code> - - The transformed choices object with name and value properties.  
**Throws**:

- <code>RangeError</code> - If the length of the name property is less than 1 or greater than 100.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| choices | <code>Object</code> | The choices object to transform. |

<a name="BaseGuildChannel"></a>

## BaseGuildChannel ⇐ <code>TextBasedChannels</code>

Represents a base guild channel that extends the TextBasedChannels class.

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>  
**Properties**

| Name    | Type                       | Description                          |
| ------- | -------------------------- | ------------------------------------ |
| threads | <code>ThreadManager</code> | The thread manager for this channel. |

- [BaseGuildChannel](#BaseGuildChannel) ⇐ <code>TextBasedChannels</code>
  - [new BaseGuildChannel(data, guildId, client)](#new_BaseGuildChannel_new)
  - [.fetchPrivateThreads([options])](#BaseGuildChannel+fetchPrivateThreads) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

<a name="new_BaseGuildChannel_new"></a>

### new BaseGuildChannel(data, guildId, client)

Constructs a new instance of the ThreadChannel class.

| Param   | Type                | Description                                               |
| ------- | ------------------- | --------------------------------------------------------- |
| data    | <code>Object</code> | The data object containing information about the channel. |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to.          |
| client  | <code>Client</code> | The client instance.                                      |

<a name="BaseGuildChannel+fetchPrivateThreads"></a>

### baseGuildChannel.fetchPrivateThreads([options]) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

Fetches private threads for the current channel.

**Kind**: instance method of [<code>BaseGuildChannel</code>](#BaseGuildChannel)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the fetched threads.

| Param            | Type                | Default         | Description                                   |
| ---------------- | ------------------- | --------------- | --------------------------------------------- |
| [options]        | <code>Object</code> |                 | Optional parameters for the fetch request.    |
| [options.before] | <code>string</code> |                 | The ID of the thread to fetch threads before. |
| [options.limit]  | <code>number</code> | <code>25</code> | The maximum number of threads to fetch.       |

<a name="ButtonInteraction"></a>

## ButtonInteraction ⇐ <code>MessageComponentInteraction</code>

Represents a button interaction, extending the MessageComponentInteraction class.

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>  
<a name="new_ButtonInteraction_new"></a>

### new ButtonInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                   |
| ------- | ------------------- | ------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred.           |
| client  | <code>Client</code> | The client instance associated with the interaction.          |

<a name="CategoryChannel"></a>

## CategoryChannel ⇐ <code>Channel</code>

Represents a category channel in a guild.

**Kind**: global class  
**Extends**: <code>Channel</code>

- [CategoryChannel](#CategoryChannel) ⇐ <code>Channel</code>
  - [new CategoryChannel([data], guildId, client)](#new_CategoryChannel_new)
  - [.childrens](#CategoryChannel+childrens) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
  - [.highest](#CategoryChannel+highest) ⇒

<a name="new_CategoryChannel_new"></a>

### new CategoryChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Client</code> | The client instance associated with the instance. |

<a name="CategoryChannel+childrens"></a>

### categoryChannel.childrens ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

Retrieves the child channels of the current channel.

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of child channels.  
<a name="CategoryChannel+highest"></a>

### categoryChannel.highest ⇒

Get the highest child element based on their position property.

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: The highest child element.

<a name="Channel"></a>

## Channel ⇐ <code>Base</code>

Represents a channel in a guild or a direct message.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Channel](#Channel) ⇐ <code>Base</code>
  - [new Channel([data], guildId, client)](#new_Channel_new)
  - [.parent](#Channel+parent) ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>
  - [.guild](#Channel+guild) ⇒
  - [.fetch([options])](#Channel+fetch) ⇒ <code>Promise</code>
  - [.delete(reason)](#Channel+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.edit(options)](#Channel+edit) ⇒ <code>Promise</code>
  - [.fetchInvites()](#Channel+fetchInvites) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
  - [.createInvite(options)](#Channel+createInvite) ⇒ <code>Promise.&lt;Invite&gt;</code>
  - [.clone()](#Channel+clone) ⇒ [<code>Promise.&lt;Channel&gt;</code>](#Channel)
  - [.isGuildText()](#Channel+isGuildText) ⇒ <code>boolean</code>
  - [.isDM()](#Channel+isDM) ⇒ <code>boolean</code>
  - [.isStage()](#Channel+isStage) ⇒ <code>boolean</code>
  - [.isForum()](#Channel+isForum) ⇒ <code>boolean</code>
  - [.isGuildVoice()](#Channel+isGuildVoice) ⇒ <code>boolean</code>
  - [.isNews()](#Channel+isNews) ⇒ <code>boolean</code>
  - [.isCategory()](#Channel+isCategory) ⇒ <code>boolean</code>
  - [.isText()](#Channel+isText) ⇒ <code>boolean</code>
  - [.isThread()](#Channel+isThread) ⇒ <code>boolean</code>
  - [.isVoice()](#Channel+isVoice) ⇒ <code>boolean</code>
  - [.isDirectory()](#Channel+isDirectory) ⇒ <code>boolean</code>
  - [.inGuild()](#Channel+inGuild) ⇒ <code>boolean</code>
  - [.inCachedGuild()](#Channel+inCachedGuild) ⇒ <code>boolean</code>
  - [.isRuleChannel()](#Channel+isRuleChannel) ⇒ <code>boolean</code>
  - [.isSystemChannel()](#Channel+isSystemChannel) ⇒ <code>boolean</code> \| <code>null</code>
  - [.bannerURL(options)](#Channel+bannerURL) ⇒ <code>string</code> \| <code>null</code>
  - [.setName(name, reason)](#Channel+setName) ⇒ <code>Promise</code>
  - [.setType(type, reason)](#Channel+setType) ⇒ <code>Promise.&lt;any&gt;</code>
  - [.setTopic(topic, reason)](#Channel+setTopic) ⇒ <code>Promise</code>
  - [.setPosition(position, reason)](#Channel+setPosition) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setParent(parent, reason)](#Channel+setParent) ⇒ <code>Promise</code>
  - [.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason)](#Channel+setDefaultAutoArchiveDuration) ⇒ <code>Promise</code>
  - [.setFlags(flags, reason)](#Channel+setFlags) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.lockPermissions()](#Channel+lockPermissions) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.permissionsFor(userOrRole)](#Channel+permissionsFor) ⇒ <code>Permissions</code>
  - [.fetchWebhooks()](#Channel+fetchWebhooks) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
  - [.createWebhook([options])](#Channel+createWebhook) ⇒ <code>Promise.&lt;Webhook&gt;</code>

<a name="new_Channel_new"></a>

### new Channel([data], guildId, client)

Constructs a new Channel object.

| Param   | Type                | Description                                      |
| ------- | ------------------- | ------------------------------------------------ |
| [data]  | <code>Object</code> | The data for the channel.                        |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to. |
| client  | <code>Client</code> | The client instance.                             |

<a name="Channel+parent"></a>

### channel.parent ⇒ [<code>Channel</code>](#Channel) \| <code>null</code>

Get the parent channel of this channel.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: [<code>Channel</code>](#Channel) \| <code>null</code> - The parent channel if it exists, otherwise null.  
<a name="Channel+guild"></a>

### channel.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The guild object if found, otherwise null.  
<a name="Channel+fetch"></a>

### channel.fetch([options]) ⇒ <code>Promise</code>

Fetches the channels using the provided options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched channels.

| Param     | Type                | Description                                       |
| --------- | ------------------- | ------------------------------------------------- |
| [options] | <code>Object</code> | The options to be used for fetching the channels. |

<a name="Channel+delete"></a>

### channel.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the channel with the specified reason.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is deleted.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| reason | <code>string</code> | The reason for deleting the channel. |

<a name="Channel+edit"></a>

### channel.edit(options) ⇒ <code>Promise</code>

Edits the properties of a channel using the provided options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - A promise that resolves when the channel has been successfully edited.

| Param   | Type                | Description                                           |
| ------- | ------------------- | ----------------------------------------------------- |
| options | <code>Object</code> | The options object containing the properties to edit. |

<a name="Channel+fetchInvites"></a>

### channel.fetchInvites() ⇒ <code>Promise.&lt;RaidenCol&gt;</code>

Fetches the invites for the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - A promise that resolves to a collection of invites.  
<a name="Channel+createInvite"></a>

### channel.createInvite(options) ⇒ <code>Promise.&lt;Invite&gt;</code>

Creates an invite for the current channel using the specified options.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;Invite&gt;</code> - A promise that resolves to the created invite.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>Object</code> | The options for creating the invite. |

<a name="Channel+clone"></a>

### channel.clone() ⇒ [<code>Promise.&lt;Channel&gt;</code>](#Channel)

Clones the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: [<code>Promise.&lt;Channel&gt;</code>](#Channel) - A promise that resolves to the cloned channel.  
<a name="Channel+isGuildText"></a>

### channel.isGuildText() ⇒ <code>boolean</code>

Checks if the type of the object is "Guild_Text".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Guild_Text", false otherwise.  
<a name="Channel+isDM"></a>

### channel.isDM() ⇒ <code>boolean</code>

Checks if the type of the object is "Dm".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Dm", false otherwise.  
<a name="Channel+isStage"></a>

### channel.isStage() ⇒ <code>boolean</code>

Checks if the current stage is a Guild Stage Voice.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the current stage is a Guild Stage Voice, false otherwise.  
<a name="Channel+isForum"></a>

### channel.isForum() ⇒ <code>boolean</code>

Checks if the current page is a forum page.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the page is a forum page, false otherwise.  
<a name="Channel+isGuildVoice"></a>

### channel.isGuildVoice() ⇒ <code>boolean</code>

Checks if the type of the object is "Guild_Voice".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the type is "Guild_Voice", false otherwise.  
<a name="Channel+isNews"></a>

### channel.isNews() ⇒ <code>boolean</code>

Checks if the current type is "Guild_News".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - Returns true if the type is "Guild_News", otherwise returns false.  
<a name="Channel+isCategory"></a>

### channel.isCategory() ⇒ <code>boolean</code>

Checks if the current object is of the category type.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the object is of the category type, false otherwise.  
<a name="Channel+isText"></a>

### channel.isText() ⇒ <code>boolean</code>

Checks if the current text is of a specific type.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the text is of a specific type, false otherwise.  
<a name="Channel+isThread"></a>

### channel.isThread() ⇒ <code>boolean</code>

Checks if the current thread is a private, news, or public guild thread.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the thread is a private, news, or public guild thread, false otherwise.  
<a name="Channel+isVoice"></a>

### channel.isVoice() ⇒ <code>boolean</code>

Checks if the current object is of type "Guild_Voice" or "Guild_Stage_Voice".

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the object is of type "Guild_Voice" or "Guild_Stage_Voice", false otherwise.  
<a name="Channel+isDirectory"></a>

### channel.isDirectory() ⇒ <code>boolean</code>

Checks if the current object is a directory.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - Returns true if the object is a directory, false otherwise.  
<a name="Channel+inGuild"></a>

### channel.inGuild() ⇒ <code>boolean</code>

Checks if the current context is within a guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - True if the context is within a guild, false otherwise.  
<a name="Channel+inCachedGuild"></a>

### channel.inCachedGuild() ⇒ <code>boolean</code>

Checks if the guild is cached in the client's guild cache.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the guild is cached, false otherwise.  
<a name="Channel+isRuleChannel"></a>

### channel.isRuleChannel() ⇒ <code>boolean</code>

Checks if the current channel is the rules channel for the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> - - true if the current channel is the rules channel, false otherwise.  
<a name="Channel+isSystemChannel"></a>

### channel.isSystemChannel() ⇒ <code>boolean</code> \| <code>null</code>

Checks if the current channel is the system channel of the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>boolean</code> \| <code>null</code> - - Returns true if the channel is the system channel,
false if it is not, and null if the guild does not have a system channel.  
<a name="Channel+bannerURL"></a>

### channel.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the channel banner image.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the channel banner image, or null if no banner is set.

| Param             | Type                 | Description                                 |
| ----------------- | -------------------- | ------------------------------------------- |
| options           | <code>Object</code>  | Optional parameters for generating the URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic URL.          |
| [options.size]    | <code>string</code>  | The desired size of the banner image.       |
| [options.format]  | <code>string</code>  | The desired format of the banner image.     |

<a name="Channel+setName"></a>

### channel.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Channel+setType"></a>

### channel.setType(type, reason) ⇒ <code>Promise.&lt;any&gt;</code>

Sets the type and reason of an object asynchronously.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the edited object.

| Param  | Type             | Description        |
| ------ | ---------------- | ------------------ |
| type   | <code>any</code> | The type to set.   |
| reason | <code>any</code> | The reason to set. |

<a name="Channel+setTopic"></a>

### channel.setTopic(topic, reason) ⇒ <code>Promise</code>

Sets the topic of the current object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the topic is successfully set.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| topic  | <code>string</code> | The new topic to set.              |
| reason | <code>string</code> | The reason for changing the topic. |

<a name="Channel+setPosition"></a>

### channel.setPosition(position, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the position of an object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the position is successfully set.

| Param    | Type                | Description                         |
| -------- | ------------------- | ----------------------------------- |
| position | <code>any</code>    | The new position of the object.     |
| reason   | <code>string</code> | The reason for the position change. |

<a name="Channel+setParent"></a>

### channel.setParent(parent, reason) ⇒ <code>Promise</code>

Sets the parent of an object and provides a reason for the change.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - A promise that resolves when the parent is successfully set.

| Param  | Type                | Description                            |
| ------ | ------------------- | -------------------------------------- |
| parent | <code>any</code>    | The new parent object.                 |
| reason | <code>string</code> | The reason for setting the new parent. |

<a name="Channel+setDefaultAutoArchiveDuration"></a>

### channel.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) ⇒ <code>Promise</code>

Sets the default auto-archive duration for a specific item.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the default auto-archive duration is successfully set.

| Param                      | Type                | Description                                                   |
| -------------------------- | ------------------- | ------------------------------------------------------------- |
| defaultAutoArchiveDuration | <code>number</code> | The new default auto-archive duration to set.                 |
| reason                     | <code>string</code> | The reason for setting the new default auto-archive duration. |

<a name="Channel+setFlags"></a>

### channel.setFlags(flags, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the flags and reason for an object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the flags are set.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| flags  | <code>any</code>    | The flags to set.                 |
| reason | <code>string</code> | The reason for setting the flags. |

<a name="Channel+lockPermissions"></a>

### channel.lockPermissions() ⇒ <code>Promise.&lt;void&gt;</code>

Locks the permissions for the current object.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the permissions are locked.  
<a name="Channel+permissionsFor"></a>

### channel.permissionsFor(userOrRole) ⇒ <code>Permissions</code>

Retrieves the permissions for a given user or role in the guild.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Permissions</code> - - The permissions for the user or role.  
**Throws**:

- <code>RangeError</code> - If the user or role is not found in the cache or is invalid.

| Param      | Type                                                                 | Description                                   |
| ---------- | -------------------------------------------------------------------- | --------------------------------------------- |
| userOrRole | <code>string</code> \| <code>GuildMember</code> \| <code>Role</code> | The user or role to retrieve permissions for. |

<a name="Channel+fetchWebhooks"></a>

### channel.fetchWebhooks() ⇒ <code>Promise.&lt;RaidenCol&gt;</code>

Fetches the webhooks associated with the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - A promise that resolves to a collection of webhooks.  
<a name="Channel+createWebhook"></a>

### channel.createWebhook([options]) ⇒ <code>Promise.&lt;Webhook&gt;</code>

Creates a webhook for the current channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: <code>Promise.&lt;Webhook&gt;</code> - A promise that resolves with the created webhook.

| Param            | Type                | Description                                   |
| ---------------- | ------------------- | --------------------------------------------- |
| [options]        | <code>Object</code> | Optional parameters for creating the webhook. |
| [options.reason] | <code>string</code> | The reason for creating the webhook.          |
| [options.name]   | <code>string</code> | The name of the webhook.                      |
| [options.avatar] | <code>string</code> | The avatar URL or file path of the webhook.   |

<a name="ClientApplication"></a>

## ClientApplication ⇐ <code>Base</code>

Represents a client application.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ClientApplication](#ClientApplication) ⇐ <code>Base</code>
  - [new ClientApplication([data], client)](#new_ClientApplication_new)
  - [.commands](#ClientApplication+commands) ⇒ <code>ApplicationCommandManager</code>
  - [.fetch()](#ClientApplication+fetch) ⇒ <code>Promise.&lt;Application&gt;</code>
  - [.iconURL(options)](#ClientApplication+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_ClientApplication_new"></a>

### new ClientApplication([data], client)

Constructs a new instance of the Application class.

| Param  | Type                | Description                                                          |
| ------ | ------------------- | -------------------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing information about the client application. |
| client | <code>Client</code> | The client object associated with the application.                   |

<a name="ClientApplication+commands"></a>

### clientApplication.commands ⇒ <code>ApplicationCommandManager</code>

Get the commands for the application.

**Kind**: instance property of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>ApplicationCommandManager</code> - - The application command manager.  
<a name="ClientApplication+fetch"></a>

### clientApplication.fetch() ⇒ <code>Promise.&lt;Application&gt;</code>

Fetches the application information for the authenticated user.

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>Promise.&lt;Application&gt;</code> - A promise that resolves to the application object.  
<a name="ClientApplication+iconURL"></a>

### clientApplication.iconURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the icon for this application.

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the icon, or null if no icon is available.

| Param           | Type                 | Description                                                        |
| --------------- | -------------------- | ------------------------------------------------------------------ |
| options         | <code>Object</code>  | An optional object containing additional options for the icon URL. |
| options.dynamic | <code>boolean</code> | Whether the icon should be dynamically generated.                  |
| options.size    | <code>number</code>  | The desired size of the icon.                                      |
| options.format  | <code>string</code>  | The desired format of the icon.                                    |

<a name="ClientUser"></a>

## ClientUser ⇐ <code>User</code>

Represents a client user, extending the base User class.

**Kind**: global class  
**Extends**: <code>User</code>

- [ClientUser](#ClientUser) ⇐ <code>User</code>
  - [new ClientUser([data], client)](#new_ClientUser_new)
  - [.setAvatar(avatar)](#ClientUser+setAvatar) ⇒ <code>Promise</code>
  - [.setUsername(username)](#ClientUser+setUsername) ⇒ <code>Promise</code>
  - [.setAvatarDecorations(avatarDecorations)](#ClientUser+setAvatarDecorations) ⇒ <code>Promise</code>
  - [.setPresence(presence)](#ClientUser+setPresence) ⇒ <code>void</code>
  - [.setStatus(status)](#ClientUser+setStatus) ⇒ <code>void</code>
  - [.setActivities(activities)](#ClientUser+setActivities) ⇒ <code>void</code>

<a name="new_ClientUser_new"></a>

### new ClientUser([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| [data] | <code>Object</code> | The initial data for the instance. |
| client | <code>Client</code> | The client object.                 |

<a name="ClientUser+setAvatar"></a>

### clientUser.setAvatar(avatar) ⇒ <code>Promise</code>

Sets the avatar for the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the avatar is successfully set.

| Param  | Type                | Description                                   |
| ------ | ------------------- | --------------------------------------------- |
| avatar | <code>string</code> | The URL or file path of the new avatar image. |

<a name="ClientUser+setUsername"></a>

### clientUser.setUsername(username) ⇒ <code>Promise</code>

Asynchronously sets the username for the current user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the username is successfully set.

| Param    | Type                | Description              |
| -------- | ------------------- | ------------------------ |
| username | <code>string</code> | The new username to set. |

<a name="ClientUser+setAvatarDecorations"></a>

### clientUser.setAvatarDecorations(avatarDecorations) ⇒ <code>Promise</code>

Sets the avatar decorations for the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: <code>Promise</code> - A promise that resolves when the avatar decorations are set.

| Param             | Type                | Description                    |
| ----------------- | ------------------- | ------------------------------ |
| avatarDecorations | <code>Object</code> | The avatar decorations to set. |

<a name="ClientUser+setPresence"></a>

### clientUser.setPresence(presence) ⇒ <code>void</code>

Sets the presence of the client.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)

| Param    | Type                  | Description                                                      |
| -------- | --------------------- | ---------------------------------------------------------------- |
| presence | <code>Presence</code> | The presence object containing the desired presence information. |

<a name="ClientUser+setStatus"></a>

### clientUser.setStatus(status) ⇒ <code>void</code>

Sets the status of the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)

| Param  | Type                | Description        |
| ------ | ------------------- | ------------------ |
| status | <code>string</code> | The status to set. |

<a name="ClientUser+setActivities"></a>

### clientUser.setActivities(activities) ⇒ <code>void</code>

Sets the activities for the presence of the user.

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)

| Param      | Type               | Description                   |
| ---------- | ------------------ | ----------------------------- |
| activities | <code>Array</code> | An array of activity objects. |

<a name="CommandInteraction"></a>

## CommandInteraction ⇐ <code>ApplicationCommandInteraction</code>

**Kind**: global class  
**Extends**: <code>ApplicationCommandInteraction</code>  
<a name="new_CommandInteraction_new"></a>

### new CommandInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data for the command interaction.               |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client  | <code>Client</code> | The client that received the interaction.           |

## Classes

<dl>
<dt><a href="#CommandInteractionOptionResolver">CommandInteractionOptionResolver</a> ⇐ <code>Base</code></dt>
<dd></dd>
<dt><a href="#CommandInteractionOptionResolver">CommandInteractionOptionResolver</a></dt>
<dd></dd>
</dl>

<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver ⇐ <code>Base</code>

**Kind**: global class  
**Extends**: <code>Base</code>

- [CommandInteractionOptionResolver](#CommandInteractionOptionResolver) ⇐ <code>Base</code>
  - [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
  - [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
  - [.guild](#CommandInteractionOptionResolver+guild) ⇒
  - [.channel](#CommandInteractionOptionResolver+channel) ⇒
  - [.\_parse([options])](#CommandInteractionOptionResolver+_parse) ⇒ <code>Array</code> \| <code>null</code>
  - [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒ <code>string</code> \| <code>null</code>
  - [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒ <code>number</code> \| <code>null</code>
  - [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒ <code>number</code> \| <code>null</code>
  - [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒ <code>boolean</code> \| <code>null</code>
  - [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒ <code>MessageAttachment</code> \| <code>null</code>
  - [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒ <code>User</code> \| <code>null</code>
  - [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒ <code>GuildMember</code> \| <code>null</code>
  - [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒ <code>User</code> \| <code>null</code>
  - [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒ <code>Message</code> \| <code>null</code>
  - [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒ <code>Channel</code> \| <code>null</code>
  - [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒ <code>Role</code> \| <code>null</code>
  - [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
  - [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒ <code>string</code> \| <code>null</code>
  - [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒ <code>string</code> \| <code>null</code>

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)

A class that provides methods to resolve command interaction options.

| Param     | Type                | Description                                                   |
| --------- | ------------------- | ------------------------------------------------------------- |
| [data]    | <code>Object</code> | The data object containing the command interaction options.   |
| guildId   | <code>string</code> | The ID of the guild where the command interaction occurred.   |
| channelId | <code>string</code> | The ID of the channel where the command interaction occurred. |
| client    | <code>Client</code> | The client instance.                                          |

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)

Constructs a new instance of the class.

| Param     | Type                | Description                       |
| --------- | ------------------- | --------------------------------- |
| [data]    | <code>Object</code> | The data object for the instance. |
| guildId   | <code>string</code> | The ID of the guild.              |
| channelId | <code>string</code> | The ID of the channel.            |
| client    | <code>Client</code> | The client object.                |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒

Get the channel object associated with this instance.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒ <code>Array</code> \| <code>null</code>

Parses the options array and returns the parsed result.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Array</code> \| <code>null</code> - - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.

| Param     | Type               | Default                   | Description                 |
| --------- | ------------------ | ------------------------- | --------------------------- |
| [options] | <code>Array</code> | <code>this.options</code> | The options array to parse. |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the value of a string option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option is found but its type is not string.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒ <code>number</code> \| <code>null</code>

Retrieves the value of a number option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The value of the number option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not Number.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒ <code>number</code> \| <code>null</code>

Retrieves the integer value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The integer value of the option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not an integer.

| Param      | Type                 | Default            | Description                                                                                                        |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| name       | <code>string</code>  |                    | The name of the option to retrieve.                                                                                |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒ <code>boolean</code> \| <code>null</code>

Retrieves the boolean value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The boolean value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> - If the option is required and not found, or if the option type is not boolean.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option to retrieve.                                                                           |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒ <code>MessageAttachment</code> \| <code>null</code>

Retrieves an attachment from the message data based on the provided options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>MessageAttachment</code> \| <code>null</code> - - The retrieved attachment, or null if no attachment is found and it is not required.  
**Throws**:

- <code>RangeError</code> - If the required parameter is set to true and no attachment is found.

| Param      | Type                 | Default            | Description                                                                                                           |
| ---------- | -------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒ <code>User</code> \| <code>null</code>

Retrieves a user based on the given name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - - The retrieved user object, or null if the user is not found and is not required.  
**Throws**:

- <code>RangeError</code> - If the option type is not User or if the option name does not match the specified option and is required.

| Param      | Type                 | Default            | Description                                                                                                    |
| ---------- | -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the user to retrieve.                                                                              |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒ <code>GuildMember</code> \| <code>null</code>

Retrieves a member by name from the guild's options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The retrieved member, or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> If the option type is not User or if the option name does not match the specified option (if required is set to true).

| Param      | Type                 | Default            | Description                                                                                              |
| ---------- | -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the member to retrieve.                                                                      |
| [required] | <code>boolean</code> | <code>false</code> | Whether the member is required. If set to true and the member is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒ <code>User</code> \| <code>null</code>

Retrieves the context user from the data object.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - The context user, or null if the data object is not available.  
**Throws**:

- <code>RangeError</code> If the data object is resolved and its type is not 2 (context user).

<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒ <code>Message</code> \| <code>null</code>

Retrieves the message associated with the current context.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Message</code> \| <code>null</code> - The message object if found, otherwise null.  
**Throws**:

- <code>RangeError</code> If the message is not of type "Context Message".

<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒ <code>Channel</code> \| <code>null</code>

Retrieves a channel based on its name from the available options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Channel</code> \| <code>null</code> - - The retrieved channel or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).

| Param      | Type                 | Default            | Description                                                                                                |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the channel to retrieve.                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒ <code>Role</code> \| <code>null</code>

Retrieves the role with the specified name from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object if found, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.

| Param      | Type                 | Default            | Description                                                                                          |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the role to retrieve.                                                                    |
| [required] | <code>boolean</code> | <code>false</code> | Whether the role is required. If set to true and the role is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>

Retrieves the mentionable value for the specified option name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code> - The mentionable value for the option, or null if not found.  
**Throws**:

- <code>RangeError</code> If the option type is not Mentionable.
- <code>RangeError</code> If the name of the option does not match the selected option and is required.

| Param      | Type                 | Default            | Description                               |
| ---------- | -------------------- | ------------------ | ----------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                   |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the sub command name from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command is required but not found.

| Param      | Type                 | Default            | Description                                    |
| ---------- | -------------------- | ------------------ | ---------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command is required. |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the sub command group from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command group, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command group is required but not found.

| Param      | Type                 | Default            | Description                                          |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command group is required. |

<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver

**Kind**: global class

- [CommandInteractionOptionResolver](#CommandInteractionOptionResolver)
  - [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
  - [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
  - [.guild](#CommandInteractionOptionResolver+guild) ⇒
  - [.channel](#CommandInteractionOptionResolver+channel) ⇒
  - [.\_parse([options])](#CommandInteractionOptionResolver+_parse) ⇒ <code>Array</code> \| <code>null</code>
  - [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒ <code>string</code> \| <code>null</code>
  - [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒ <code>number</code> \| <code>null</code>
  - [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒ <code>number</code> \| <code>null</code>
  - [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒ <code>boolean</code> \| <code>null</code>
  - [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒ <code>MessageAttachment</code> \| <code>null</code>
  - [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒ <code>User</code> \| <code>null</code>
  - [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒ <code>GuildMember</code> \| <code>null</code>
  - [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒ <code>User</code> \| <code>null</code>
  - [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒ <code>Message</code> \| <code>null</code>
  - [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒ <code>Channel</code> \| <code>null</code>
  - [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒ <code>Role</code> \| <code>null</code>
  - [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>
  - [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒ <code>string</code> \| <code>null</code>
  - [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒ <code>string</code> \| <code>null</code>

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)

A class that provides methods to resolve command interaction options.

| Param     | Type                | Description                                                   |
| --------- | ------------------- | ------------------------------------------------------------- |
| [data]    | <code>Object</code> | The data object containing the command interaction options.   |
| guildId   | <code>string</code> | The ID of the guild where the command interaction occurred.   |
| channelId | <code>string</code> | The ID of the channel where the command interaction occurred. |
| client    | <code>Client</code> | The client instance.                                          |

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)

Constructs a new instance of the class.

| Param     | Type                | Description                       |
| --------- | ------------------- | --------------------------------- |
| [data]    | <code>Object</code> | The data object for the instance. |
| guildId   | <code>string</code> | The ID of the guild.              |
| channelId | <code>string</code> | The ID of the channel.            |
| client    | <code>Client</code> | The client object.                |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒

Get the channel object associated with this instance.

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒ <code>Array</code> \| <code>null</code>

Parses the options array and returns the parsed result.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Array</code> \| <code>null</code> - - The parsed options array or null if the data type is 2 or 3, or if the options array is empty.

| Param     | Type               | Default                   | Description                 |
| --------- | ------------------ | ------------------------- | --------------------------- |
| [options] | <code>Array</code> | <code>this.options</code> | The options array to parse. |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the value of a string option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option is found but its type is not string.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒ <code>number</code> \| <code>null</code>

Retrieves the value of a number option by its name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The value of the number option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not Number.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒ <code>number</code> \| <code>null</code>

Retrieves the integer value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>number</code> \| <code>null</code> - The integer value of the option, or null if the option is not found.  
**Throws**:

- <code>RangeError</code> If the option is required and not found, or if the option type is not an integer.

| Param      | Type                 | Default            | Description                                                                                                        |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------------ |
| name       | <code>string</code>  |                    | The name of the option to retrieve.                                                                                |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒ <code>boolean</code> \| <code>null</code>

Retrieves the boolean value of the specified option name from the options list.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The boolean value of the option, or null if the option is not found and not required.  
**Throws**:

- <code>RangeError</code> - If the option is required and not found, or if the option type is not boolean.

| Param      | Type                 | Default            | Description                                                                                                   |
| ---------- | -------------------- | ------------------ | ------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option to retrieve.                                                                           |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. If set to true and the option is not found, a RangeError is thrown. |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒ <code>MessageAttachment</code> \| <code>null</code>

Retrieves an attachment from the message data based on the provided options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>MessageAttachment</code> \| <code>null</code> - - The retrieved attachment, or null if no attachment is found and it is not required.  
**Throws**:

- <code>RangeError</code> - If the required parameter is set to true and no attachment is found.

| Param      | Type                 | Default            | Description                                                                                                           |
| ---------- | -------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the attachment is required. If set to true and no attachment is found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒ <code>User</code> \| <code>null</code>

Retrieves a user based on the given name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - - The retrieved user object, or null if the user is not found and is not required.  
**Throws**:

- <code>RangeError</code> - If the option type is not User or if the option name does not match the specified option and is required.

| Param      | Type                 | Default            | Description                                                                                                    |
| ---------- | -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the user to retrieve.                                                                              |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the user is required. If set to true and the user is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒ <code>GuildMember</code> \| <code>null</code>

Retrieves a member by name from the guild's options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The retrieved member, or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> If the option type is not User or if the option name does not match the specified option (if required is set to true).

| Param      | Type                 | Default            | Description                                                                                              |
| ---------- | -------------------- | ------------------ | -------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the member to retrieve.                                                                      |
| [required] | <code>boolean</code> | <code>false</code> | Whether the member is required. If set to true and the member is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒ <code>User</code> \| <code>null</code>

Retrieves the context user from the data object.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>null</code> - The context user, or null if the data object is not available.  
**Throws**:

- <code>RangeError</code> If the data object is resolved and its type is not 2 (context user).

<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒ <code>Message</code> \| <code>null</code>

Retrieves the message associated with the current context.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Message</code> \| <code>null</code> - The message object if found, otherwise null.  
**Throws**:

- <code>RangeError</code> If the message is not of type "Context Message".

<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒ <code>Channel</code> \| <code>null</code>

Retrieves a channel based on its name from the available options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Channel</code> \| <code>null</code> - - The retrieved channel or null if not found (unless required is set to true).  
**Throws**:

- <code>RangeError</code> - If the type of option is not Channel or if the name of the option does not match the selected option (if required is set to true).

| Param      | Type                 | Default            | Description                                                                                                |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the channel to retrieve.                                                                       |
| [required] | <code>boolean</code> | <code>false</code> | Whether the channel is required. If set to true and the channel is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒ <code>Role</code> \| <code>null</code>

Retrieves the role with the specified name from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object if found, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> If the option type is not Role and required is set to true, or if the name of the option does not match the selected option and required is set to true.

| Param      | Type                 | Default            | Description                                                                                          |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------------------------------------------------------- |
| name       | <code>string</code>  |                    | The name of the role to retrieve.                                                                    |
| [required] | <code>boolean</code> | <code>false</code> | Whether the role is required. If set to true and the role is not found, a RangeError will be thrown. |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒ <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code>

Retrieves the mentionable value for the specified option name.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>User</code> \| <code>GuildMember</code> \| <code>Role</code> \| <code>null</code> - The mentionable value for the option, or null if not found.  
**Throws**:

- <code>RangeError</code> If the option type is not Mentionable.
- <code>RangeError</code> If the name of the option does not match the selected option and is required.

| Param      | Type                 | Default            | Description                               |
| ---------- | -------------------- | ------------------ | ----------------------------------------- |
| name       | <code>string</code>  |                    | The name of the option.                   |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the option is required. |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the sub command name from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command is required but not found.

| Param      | Type                 | Default            | Description                                    |
| ---------- | -------------------- | ------------------ | ---------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command is required. |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the sub command group from the options array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: <code>string</code> \| <code>null</code> - - The name of the sub command group, or null if not found.  
**Throws**:

- <code>RangeError</code> - If the sub command group is required but not found.

| Param      | Type                 | Default            | Description                                          |
| ---------- | -------------------- | ------------------ | ---------------------------------------------------- |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the sub command group is required. |

<a name="ContextMenuInteraction"></a>

## ContextMenuInteraction ⇐ <code>ApplicationCommandInteraction</code>

Represents a context menu interaction, extending the base ApplicationCommandInteraction class.

**Kind**: global class  
**Extends**: <code>ApplicationCommandInteraction</code>  
**Properties**

| Name     | Type                                     | Description                                            |
| -------- | ---------------------------------------- | ------------------------------------------------------ |
| targetId | <code>string</code> \| <code>null</code> | The ID of the target of the interaction, if available. |
| resolved | <code>Object</code> \| <code>null</code> | The resolved data of the interaction, if available.    |

<a name="new_ContextMenuInteraction_new"></a>

### new ContextMenuInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                   |
| ------- | ------------------- | ------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred.           |
| client  | <code>Client</code> | The client instance associated with the interaction.          |

<a name="ContextMessageInteraction"></a>

## ContextMessageInteraction ⇐ <code>ContextMenuInteraction</code>

Represents a context menu interaction for a message in a specific context.

**Kind**: global class  
**Extends**: <code>ContextMenuInteraction</code>  
<a name="new_ContextMessageInteraction_new"></a>

### new ContextMessageInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Client</code> | The client instance associated with the instance. |

<a name="ContextUserInteraction"></a>

## ContextUserInteraction ⇐ <code>ContextMenuInteraction</code>

Represents a user interaction with a context menu.

**Kind**: global class  
**Extends**: <code>ContextMenuInteraction</code>  
<a name="new_ContextUserInteraction_new"></a>

### new ContextUserInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data associated with the interaction.           |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client  | <code>Client</code> | The client instance that received the interaction.  |

<a name="DirectoryChannel"></a>

## DirectoryChannel ⇐ <code>Channel</code>

Represents a directory channel.

**Kind**: global class  
**Extends**: <code>Channel</code>  
**Properties**

| Name    | Type                                     | Description                            |
| ------- | ---------------------------------------- | -------------------------------------- |
| partial | <code>boolean</code>                     | Whether the channel is partial or not. |
| name    | <code>string</code> \| <code>null</code> | The name of the directory channel.     |

<a name="new_DirectoryChannel_new"></a>

### new DirectoryChannel([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| [data] | <code>Object</code> | The data for the directory channel. |
| client | <code>Client</code> | The client instance.                |

<a name="DMChannel"></a>

## DMChannel ⇐ <code>TextBasedChannels</code>

Represents a direct message channel in Discord.

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>  
<a name="new_DMChannel_new"></a>

### new DMChannel([data], [guildId], client)

Constructs a new instance of the class.

| Param     | Type                                     | Default           | Description                                         |
| --------- | ---------------------------------------- | ----------------- | --------------------------------------------------- |
| [data]    | <code>Object</code>                      |                   | The data for the DM channel.                        |
| [guildId] | <code>string</code> \| <code>null</code> | <code>null</code> | The ID of the guild that the DM channel belongs to. |
| client    | <code>Client</code>                      |                   | The client that instantiated this DM channel.       |

<a name="Emoji"></a>

## Emoji ⇐ <code>Base</code>

Represents an Emoji object.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Emoji](#Emoji) ⇐ <code>Base</code>
  - [new Emoji([data], guildId, client)](#new_Emoji_new)
  - [.guild](#Emoji+guild) ⇒
  - [.fetch(options)](#Emoji+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#Emoji+edit) ⇒ <code>Promise</code>
  - [.setName(name, reason)](#Emoji+setName) ⇒ <code>Promise</code>
  - [.setRoles(roles, reason)](#Emoji+setRoles) ⇒ <code>Promise</code>
  - [.delete(reason)](#Emoji+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.imageURL(options)](#Emoji+imageURL) ⇒ <code>string</code>
  - [.equals(emoji)](#Emoji+equals) ⇒ <code>boolean</code>

<a name="new_Emoji_new"></a>

### new Emoji([data], guildId, client)

Constructs a new instance of the GuildEmoji class.

**Returns**: <code>GuildEmoji</code> - - The newly created GuildEmoji instance.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the emoji information. |
| guildId | <code>string</code> | The ID of the guild that the emoji belongs to.    |
| client  | <code>Client</code> | The client instance.                              |

<a name="Emoji+guild"></a>

### emoji.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>Emoji</code>](#Emoji)  
**Returns**: The guild object.  
<a name="Emoji+fetch"></a>

### emoji.fetch(options) ⇒ <code>Promise</code>

Fetches emojis from the guild.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched emojis.

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| options | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="Emoji+edit"></a>

### emoji.edit(options) ⇒ <code>Promise</code>

Edits the current emoji with the provided options.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated emoji.

| Param   | Type                | Description                           |
| ------- | ------------------- | ------------------------------------- |
| options | <code>Object</code> | The options to update the emoji with. |

<a name="Emoji+setName"></a>

### emoji.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Emoji+setRoles"></a>

### emoji.setRoles(roles, reason) ⇒ <code>Promise</code>

Sets the roles for the current object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise</code> - A promise that resolves when the roles are successfully set.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| roles  | <code>Array</code>  | The roles to set.                 |
| reason | <code>string</code> | The reason for setting the roles. |

<a name="Emoji+delete"></a>

### emoji.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the emoji from the guild.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the emoji is deleted.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| reason | <code>string</code> | The reason for deleting the emoji. |

<a name="Emoji+imageURL"></a>

### emoji.imageURL(options) ⇒ <code>string</code>

Generates the URL for the image of this emoji.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>string</code> - The URL of the image.

| Param           | Type                | Description                         |
| --------------- | ------------------- | ----------------------------------- |
| options         | <code>Object</code> | The options for generating the URL. |
| options.size    | <code>number</code> | The desired size of the image.      |
| options.format  | <code>string</code> | The desired format of the image.    |
| options.quality | <code>number</code> | The desired quality of the image.   |

<a name="Emoji+equals"></a>

### emoji.equals(emoji) ⇒ <code>boolean</code>

Checks if the given object is equal to this Emoji object.

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: <code>boolean</code> - True if the objects are equal, false otherwise.

| Param | Type                         | Description                            |
| ----- | ---------------------------- | -------------------------------------- |
| emoji | [<code>Emoji</code>](#Emoji) | The object to compare with this Emoji. |

<a name="FetchedThreads"></a>

## FetchedThreads ⇐ <code>Base</code>

Represents a collection of fetched threads.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name    | Type                                      | Description                                                                               |
| ------- | ----------------------------------------- | ----------------------------------------------------------------------------------------- |
| guildId | <code>string</code>                       | The ID of the guild the threads belong to.                                                |
| threads | <code>RaidenCol</code>                    | A collection of threads, where each thread is represented by its ID and a channel object. |
| hasMore | <code>boolean</code> \| <code>null</code> | Indicates whether there are more threads to fetch.                                        |

<a name="new_FetchedThreads_new"></a>

### new FetchedThreads([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                       |
| ------- | ------------------- | ----------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the fetched threads. |
| guildId | <code>string</code> | The ID of the guild the threads belong to.                        |
| client  | <code>Client</code> | The client instance.                                              |

<a name="ForumChannel"></a>

## ForumChannel ⇐ <code>Channel</code>

A class representing a forum channel on Discord.

**Kind**: global class  
**Extends**: <code>Channel</code>

- [ForumChannel](#ForumChannel) ⇐ <code>Channel</code>
  - [new ForumChannel([data], [guildId], [client])](#new_ForumChannel_new)
  - [.createThread([options])](#ForumChannel+createThread) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_ForumChannel_new"></a>

### new ForumChannel([data], [guildId], [client])

| Param     | Type                | Description                                     |
| --------- | ------------------- | ----------------------------------------------- |
| [data]    | <code>Object</code> | The data for the forum channel                  |
| [guildId] | <code>string</code> | The ID of the guild that the channel belongs to |
| [client]  | <code>Client</code> | The client that instantiated the channel        |

<a name="ForumChannel+createThread"></a>

### forumChannel.createThread([options]) ⇒ <code>Promise.&lt;Object&gt;</code>

Creates a new thread in the forum channel.

**Kind**: instance method of [<code>ForumChannel</code>](#ForumChannel)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The thread data

| Param                         | Type                 | Description                                                 |
| ----------------------------- | -------------------- | ----------------------------------------------------------- |
| [options]                     | <code>Object</code>  | The options for the thread                                  |
| [options.name]                | <code>string</code>  | The name of the thread                                      |
| [options.autoArchiveDuration] | <code>number</code>  | The duration in minutes to automatically archive the thread |
| [options.rateLimitPerUser]    | <code>number</code>  | The rate limit per user for the thread in seconds           |
| [options.reason]              | <code>string</code>  | The reason for creating the thread                          |
| [options.message]             | <code>Message</code> | The message to use as a basis for the thread                |

<a name="Guild"></a>

## Guild ⇐ <code>Base</code>

Represents a guild in Discord.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name     | Type                                     | Description                          |
| -------- | ---------------------------------------- | ------------------------------------ |
| partial  | <code>boolean</code>                     | Whether the guild is partial or not. |
| id       | <code>string</code> \| <code>null</code> | The ID of the guild.                 |
| name     | <code>string</code> \| <code>null</code> | The name of the guild.               |
| icon     | <code>string</code> \| <code>null</code> | The icon of the guild.               |
| iconHash | <code>string</code> \| <code>null</code> | The hash of the guild's icon.        |
| splash   | <code>string</code> \| <code>null</code> | The splash image of the guild.       |
|          | <code>string</code> \| <code>null</code> |                                      |

- [Guild](#Guild) ⇐ <code>Base</code>
  - [new Guild([data], client)](#new_Guild_new)
  - [.me](#Guild+me) ⇒ <code>GuildMember</code>
  - [.afkChannel](#Guild+afkChannel) ⇒ <code>VoiceChannel</code>
  - [.widgetChannel](#Guild+widgetChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.systemChannel](#Guild+systemChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.rulesChannel](#Guild+rulesChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.publicUpdatesChannel](#Guild+publicUpdatesChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.welcomeScreen](#Guild+welcomeScreen) ⇒ <code>WelcomeScreenManager</code>
  - [.integrations](#Guild+integrations) ⇒ <code>GuildIntegrationManager</code>
  - [.vanity](#Guild+vanity) ⇒ <code>GuildVanityManager</code>
  - [.commands](#Guild+commands) ⇒ <code>GuildApplicationCommandManager</code>
  - [.fetch([options])](#Guild+fetch) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.edit([options])](#Guild+edit) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.delete()](#Guild+delete) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setName(name, [reason])](#Guild+setName) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setDescription(description, [reason])](#Guild+setDescription) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setVerificationLevel(verificationLevel, [reason])](#Guild+setVerificationLevel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setDefaultMessageNotifications(defaultMessageNotifications, [reason])](#Guild+setDefaultMessageNotifications) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setExplicitContentFilter(explicitContentFilter, [reason])](#Guild+setExplicitContentFilter) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setAfkChannel(afkChannel, [reason])](#Guild+setAfkChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setAfkTimeout(afkTimeout, [reason])](#Guild+setAfkTimeout) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setIcon(icon, [reason])](#Guild+setIcon) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setOwner(owner, [reason])](#Guild+setOwner) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setSplash(splash, [reason])](#Guild+setSplash) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setDiscoverySplash(discoverySplash, [reason])](#Guild+setDiscoverySplash) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setBanner(banner, [reason])](#Guild+setBanner) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setSystemChannel(systemChannel, [reason])](#Guild+setSystemChannel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setPreferredLocale(preferredLocale, [reason])](#Guild+setPreferredLocale) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setSystemChannelFlags(systemChannelFlags, [reason])](#Guild+setSystemChannelFlags) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setFeatures(features, [reason])](#Guild+setFeatures) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.setPremiumProgressBar(premiumProgressBar, reason)](#Guild+setPremiumProgressBar) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.iconURL([options])](#Guild+iconURL) ⇒ <code>string</code>
  - [.bannerURL([options])](#Guild+bannerURL) ⇒ <code>string</code>
  - [.splashURL([options])](#Guild+splashURL) ⇒ <code>string</code>
  - [.discoverySplashURL([options])](#Guild+discoverySplashURL) ⇒ <code>string</code>
  - [.fetchOwner([options])](#Guild+fetchOwner) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
  - [.fetchPreview()](#Guild+fetchPreview) ⇒ <code>Promise.&lt;Object&gt;</code>
  - [.fetchActiveThreads()](#Guild+fetchActiveThreads) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
  - [.fetchAuditLogs([options])](#Guild+fetchAuditLogs) ⇒ <code>Promise.&lt;GuildAuditLog&gt;</code>
  - [.fetchMe([options])](#Guild+fetchMe) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
  - [.fetchWebhooks()](#Guild+fetchWebhooks) ⇒ <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code>
  - [.fetchFeed()](#Guild+fetchFeed) ⇒ <code>Promise.&lt;Object&gt;</code>
  - [.modifyMFALevel(mfaLevel, [reason])](#Guild+modifyMFALevel) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)
  - [.getVoiceBasedChannels()](#Guild+getVoiceBasedChannels) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
  - [.getTextBasedChannels()](#Guild+getTextBasedChannels) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>
  - [.getCategories()](#Guild+getCategories) ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

<a name="new_Guild_new"></a>

### new Guild([data], client)

Constructs a new Guild object.

| Param  | Type                | Description                                   |
| ------ | ------------------- | --------------------------------------------- |
| [data] | <code>Object</code> | The data object containing guild information. |
| client | <code>Client</code> | The client object associated with the guild.  |

<a name="Guild+me"></a>

### guild.me ⇒ <code>GuildMember</code>

Returns the GuildMember instance of the bot user in this guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildMember</code> - The GuildMember instance of the bot user in this guild.  
<a name="Guild+afkChannel"></a>

### guild.afkChannel ⇒ <code>VoiceChannel</code>

Returns the voice channel where users are moved after being AFK for too long.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>VoiceChannel</code> - The voice channel where users are moved after being AFK for too long.  
<a name="Guild+widgetChannel"></a>

### guild.widgetChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Returns the widget channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The widget channel of the guild.  
<a name="Guild+systemChannel"></a>

### guild.systemChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Returns the system channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The system channel of the guild.  
<a name="Guild+rulesChannel"></a>

### guild.rulesChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Returns the rules channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The rules channel of the guild.  
<a name="Guild+publicUpdatesChannel"></a>

### guild.publicUpdatesChannel ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Returns the public updates channel of the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The public updates channel of the guild.  
<a name="Guild+welcomeScreen"></a>

### guild.welcomeScreen ⇒ <code>WelcomeScreenManager</code>

Returns the welcome screen manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>WelcomeScreenManager</code> - The welcome screen manager for the guild.  
<a name="Guild+integrations"></a>

### guild.integrations ⇒ <code>GuildIntegrationManager</code>

Returns the integration manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildIntegrationManager</code> - The integration manager for the guild.  
<a name="Guild+vanity"></a>

### guild.vanity ⇒ <code>GuildVanityManager</code>

Returns the vanity manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildVanityManager</code> - The vanity manager for the guild.  
<a name="Guild+commands"></a>

### guild.commands ⇒ <code>GuildApplicationCommandManager</code>

Returns the application command manager for the guild.

**Kind**: instance property of [<code>Guild</code>](#Guild)  
**Returns**: <code>GuildApplicationCommandManager</code> - The application command manager for the guild.  
<a name="Guild+fetch"></a>

### guild.fetch([options]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Fetches the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param     | Type                | Description                     |
| --------- | ------------------- | ------------------------------- |
| [options] | <code>Object</code> | Options for fetching the guild. |

<a name="Guild+edit"></a>

### guild.edit([options]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Edits the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param     | Type                | Description                    |
| --------- | ------------------- | ------------------------------ |
| [options] | <code>Object</code> | Options for editing the guild. |

<a name="Guild+delete"></a>

### guild.delete() ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Deletes the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
<a name="Guild+setName"></a>

### guild.setName(name, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the name of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param    | Type                | Description                   |
| -------- | ------------------- | ----------------------------- |
| name     | <code>string</code> | The new name for the guild.   |
| [reason] | <code>string</code> | Reason for changing the name. |

<a name="Guild+setDescription"></a>

### guild.setDescription(description, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the description of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param       | Type                | Description                          |
| ----------- | ------------------- | ------------------------------------ |
| description | <code>string</code> | The new description for the guild.   |
| [reason]    | <code>string</code> | Reason for changing the description. |

<a name="Guild+setVerificationLevel"></a>

### guild.setVerificationLevel(verificationLevel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the verification level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param             | Type                | Description                                 |
| ----------------- | ------------------- | ------------------------------------------- |
| verificationLevel | <code>number</code> | The new verification level for the guild.   |
| [reason]          | <code>string</code> | Reason for changing the verification level. |

<a name="Guild+setDefaultMessageNotifications"></a>

### guild.setDefaultMessageNotifications(defaultMessageNotifications, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the default message notifications of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param                       | Type                | Description                                            |
| --------------------------- | ------------------- | ------------------------------------------------------ |
| defaultMessageNotifications | <code>number</code> | The new default message notifications for the guild.   |
| [reason]                    | <code>string</code> | Reason for changing the default message notifications. |

<a name="Guild+setExplicitContentFilter"></a>

### guild.setExplicitContentFilter(explicitContentFilter, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the explicit content filter level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param                 | Type                | Description                                            |
| --------------------- | ------------------- | ------------------------------------------------------ |
| explicitContentFilter | <code>number</code> | The new explicit content filter level for the guild.   |
| [reason]              | <code>string</code> | Reason for changing the explicit content filter level. |

<a name="Guild+setAfkChannel"></a>

### guild.setAfkChannel(afkChannel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the AFK channel of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param      | Type                 | Description                          |
| ---------- | -------------------- | ------------------------------------ |
| afkChannel | <code>Channel</code> | The new AFK channel for the guild.   |
| [reason]   | <code>string</code>  | Reason for changing the AFK channel. |

<a name="Guild+setAfkTimeout"></a>

### guild.setAfkTimeout(afkTimeout, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the AFK timeout of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param      | Type                | Description                          |
| ---------- | ------------------- | ------------------------------------ |
| afkTimeout | <code>number</code> | The new AFK timeout for the guild.   |
| [reason]   | <code>string</code> | Reason for changing the AFK timeout. |

<a name="Guild+setIcon"></a>

### guild.setIcon(icon, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the icon of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)

| Param    | Type                | Description                   |
| -------- | ------------------- | ----------------------------- |
| icon     | <code>string</code> | The new icon for the guild.   |
| [reason] | <code>string</code> | Reason for changing the icon. |

<a name="Guild+setOwner"></a>

### guild.setOwner(owner, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the owner of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param    | Type                               | Description                       |
| -------- | ---------------------------------- | --------------------------------- |
| owner    | <code>GuildMemberResolvable</code> | The new owner of the guild.       |
| [reason] | <code>string</code>                | The reason for setting the owner. |

<a name="Guild+setSplash"></a>

### guild.setSplash(splash, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the splash image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param    | Type                                                                                | Description                                                                                                                |
| -------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| splash   | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current splash image. |
| [reason] | <code>string</code>                                                                 | The reason for setting the splash.                                                                                         |

<a name="Guild+setDiscoverySplash"></a>

### guild.setDiscoverySplash(discoverySplash, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the discovery splash image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param           | Type                                                                                | Description                                                                                                                                    |
| --------------- | ----------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| discoverySplash | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new discovery splash image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current discovery splash image. |
| [reason]        | <code>string</code>                                                                 | The reason for setting the discovery splash.                                                                                                   |

<a name="Guild+setBanner"></a>

### guild.setBanner(banner, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the banner image for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param    | Type                                                                                | Description                                                                                                                |
| -------- | ----------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------- |
| banner   | <code>BufferResolvable</code> \| <code>Base64Resolvable</code> \| <code>null</code> | The new banner image for the guild. Can be a Buffer or a base64-encoded string or null to remove the current banner image. |
| [reason] | <code>string</code>                                                                 | The reason for setting the banner.                                                                                         |

<a name="Guild+setSystemChannel"></a>

### guild.setSystemChannel(systemChannel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the system channel for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param         | Type                                | Description                                |
| ------------- | ----------------------------------- | ------------------------------------------ |
| systemChannel | <code>GuildChannelResolvable</code> | The new system channel for the guild.      |
| [reason]      | <code>string</code>                 | The reason for setting the system channel. |

<a name="Guild+setPreferredLocale"></a>

### guild.setPreferredLocale(preferredLocale, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the preferred locale for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param           | Type                | Description                                  |
| --------------- | ------------------- | -------------------------------------------- |
| preferredLocale | <code>string</code> | The new preferred locale for the guild.      |
| [reason]        | <code>string</code> | The reason for setting the preferred locale. |

<a name="Guild+setSystemChannelFlags"></a>

### guild.setSystemChannelFlags(systemChannelFlags, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the system channel flags for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param              | Type                | Description                                      |
| ------------------ | ------------------- | ------------------------------------------------ |
| systemChannelFlags | <code>number</code> | The new system channel flags for the guild.      |
| [reason]           | <code>string</code> | The reason for setting the system channel flags. |

<a name="Guild+setFeatures"></a>

### guild.setFeatures(features, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Set the features of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param    | Type                                    | Description                          |
| -------- | --------------------------------------- | ------------------------------------ |
| features | <code>Array.&lt;GuildFeature&gt;</code> | The new features of the guild.       |
| [reason] | <code>string</code>                     | The reason for setting the features. |

<a name="Guild+setPremiumProgressBar"></a>

### guild.setPremiumProgressBar(premiumProgressBar, reason) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Sets the premium progress bar of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - The updated guild.

| Param              | Type                | Description                                      |
| ------------------ | ------------------- | ------------------------------------------------ |
| premiumProgressBar | <code>string</code> | The new premium progress bar.                    |
| reason             | <code>string</code> | The reason for setting the premium progress bar. |

<a name="Guild+iconURL"></a>

### guild.iconURL([options]) ⇒ <code>string</code>

Returns the URL of the guild's icon.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's icon, or `null` if the guild has no icon.

| Param             | Type                 | Default            | Description                       |
| ----------------- | -------------------- | ------------------ | --------------------------------- |
| [options]         | <code>Object</code>  |                    | Additional options for the URL.   |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic icon. |
| [options.size]    | <code>number</code>  |                    | The size of the icon to return.   |
| [options.format]  | <code>string</code>  |                    | The format of the icon to return. |

<a name="Guild+bannerURL"></a>

### guild.bannerURL([options]) ⇒ <code>string</code>

Returns the URL of the guild's banner.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's banner, or `null` if the guild has no banner.

| Param             | Type                 | Default            | Description                         |
| ----------------- | -------------------- | ------------------ | ----------------------------------- |
| [options]         | <code>Object</code>  |                    | Additional options for the URL.     |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic banner. |
| [options.size]    | <code>number</code>  |                    | The size of the banner to return.   |
| [options.format]  | <code>string</code>  |                    | The format of the banner to return. |

<a name="Guild+splashURL"></a>

### guild.splashURL([options]) ⇒ <code>string</code>

Returns the URL of the guild's splash.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's splash, or `null` if the guild has no splash.

| Param             | Type                 | Default            | Description                         |
| ----------------- | -------------------- | ------------------ | ----------------------------------- |
| [options]         | <code>Object</code>  |                    | Additional options for the URL.     |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic splash. |
| [options.size]    | <code>number</code>  |                    | The size of the splash to return.   |
| [options.format]  | <code>string</code>  |                    | The format of the splash to return. |

<a name="Guild+discoverySplashURL"></a>

### guild.discoverySplashURL([options]) ⇒ <code>string</code>

Returns the URL of the guild's discovery splash.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>string</code> - The URL of the guild's discovery splash, or `null` if the guild has no discovery splash.

| Param             | Type                 | Default            | Description                                   |
| ----------------- | -------------------- | ------------------ | --------------------------------------------- |
| [options]         | <code>Object</code>  |                    | Additional options for the URL.               |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to return a dynamic discovery splash. |
| [options.size]    | <code>number</code>  |                    | The size of the discovery splash to return.   |
| [options.format]  | <code>string</code>  |                    | The format of the discovery splash to return. |

<a name="Guild+fetchOwner"></a>

### guild.fetchOwner([options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>

Fetches the owner of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the GuildMember instance of the guild owner.

| Param     | Type                          | Description                          |
| --------- | ----------------------------- | ------------------------------------ |
| [options] | <code>BaseFetchOptions</code> | The options to fetch the owner with. |

<a name="Guild+fetchPreview"></a>

### guild.fetchPreview() ⇒ <code>Promise.&lt;Object&gt;</code>

Fetches a preview of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the preview of the guild.  
<a name="Guild+fetchActiveThreads"></a>

### guild.fetchActiveThreads() ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

Fetches the active threads in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - A promise that resolves with the active threads in the guild.  
<a name="Guild+fetchAuditLogs"></a>

### guild.fetchAuditLogs([options]) ⇒ <code>Promise.&lt;GuildAuditLog&gt;</code>

Fetches the audit logs for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildAuditLog&gt;</code> - A promise that resolves with the fetched audit logs.

| Param                | Type                                                      | Default         | Description                                    |
| -------------------- | --------------------------------------------------------- | --------------- | ---------------------------------------------- |
| [options]            | <code>Object</code>                                       |                 | The options for fetching audit logs.           |
| [options.user]       | <code>UserResolvable</code>                               |                 | The user to filter the audit log by.           |
| [options.actionType] | <code>string</code>                                       |                 | The type of action to filter the audit log by. |
| [options.before]     | <code>Snowflake</code> \| <code>GuildAuditLogEntry</code> |                 | The entry to get audit logs before.            |
| [options.limit]      | <code>number</code>                                       | <code>50</code> | The maximum number of audit logs to fetch.     |

<a name="Guild+fetchMe"></a>

### guild.fetchMe([options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>

Fetches the bot's own member object for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the bot's own member object for the guild.

| Param     | Type                | Description                                 |
| --------- | ------------------- | ------------------------------------------- |
| [options] | <code>Object</code> | The options for fetching the member object. |

<a name="Guild+fetchWebhooks"></a>

### guild.fetchWebhooks() ⇒ <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code>

Fetches the webhooks for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;RaidenCol.&lt;string, Webhook&gt;&gt;</code> - A promise that resolves with the fetched webhooks for the guild.  
<a name="Guild+fetchFeed"></a>

### guild.fetchFeed() ⇒ <code>Promise.&lt;Object&gt;</code>

Fetches the guild feed for the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the fetched guild feed.  
<a name="Guild+modifyMFALevel"></a>

### guild.modifyMFALevel(mfaLevel, [reason]) ⇒ [<code>Promise.&lt;Guild&gt;</code>](#Guild)

Modifies the MFA (multi-factor authentication) level of the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: [<code>Promise.&lt;Guild&gt;</code>](#Guild) - A promise that resolves with the guild object with the modified MFA level.

| Param    | Type                | Description                             |
| -------- | ------------------- | --------------------------------------- |
| mfaLevel | <code>number</code> | The new MFA level for the guild.        |
| [reason] | <code>string</code> | The reason for modifying the MFA level. |

<a name="Guild+getVoiceBasedChannels"></a>

### guild.getVoiceBasedChannels() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

Gets all the voice-based channels in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the voice-based channels in the guild.  
<a name="Guild+getTextBasedChannels"></a>

### guild.getTextBasedChannels() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

Gets all the text-based channels in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the text-based channels in the guild.  
<a name="Guild+getCategories"></a>

### guild.getCategories() ⇒ <code>Collection.&lt;Snowflake, GuildChannel&gt;</code>

Gets all the categories in the guild.

**Kind**: instance method of [<code>Guild</code>](#Guild)  
**Returns**: <code>Collection.&lt;Snowflake, GuildChannel&gt;</code> - A collection of all the categories in the guild.

<a name="GuildAuditLog"></a>

## GuildAuditLog ⇐ <code>Base</code>

Represents an audit log for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildAuditLog](#GuildAuditLog) ⇐ <code>Base</code>
  - [new GuildAuditLog([data], guildId, client)](#new_GuildAuditLog_new)
  - [.guild](#GuildAuditLog+guild) : <code>Guild</code>

<a name="new_GuildAuditLog_new"></a>

### new GuildAuditLog([data], guildId, client)

Constructs a new instance of the Guild class.

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing guild information. |
| guildId | <code>string</code> | The ID of the guild.                          |
| client  | <code>Client</code> | The client instance.                          |

<a name="GuildAuditLog+guild"></a>

### guildAuditLog.guild : <code>Guild</code>

Returns the guild object associated with this audit log.

**Kind**: instance property of [<code>GuildAuditLog</code>](#GuildAuditLog)  
**Read only**: true

<a name="GuildAuditLogChanges"></a>

## GuildAuditLogChanges ⇐ <code>Base</code>

Represents changes made to a guild audit log.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_GuildAuditLogChanges_new"></a>

### new GuildAuditLogChanges([data], guildId, client)

Constructs a new `GuildAuditLogChanges` object.

| Param   | Type                | Description                 |
| ------- | ------------------- | --------------------------- |
| [data]  | <code>Object</code> | The audit log changes data. |
| guildId | <code>string</code> | The ID of the guild.        |
| client  | <code>Client</code> | The client object.          |

<a name="GuildAuditLogEntry"></a>

## GuildAuditLogEntry ⇐ <code>Base</code>

Represents an entry in the audit log for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_GuildAuditLogEntry_new"></a>

### new GuildAuditLogEntry([data], guildId, client)

| Param   | Type                | Description                              |
| ------- | ------------------- | ---------------------------------------- |
| [data]  | <code>Object</code> | The data for the audit log entry         |
| guildId | <code>string</code> | The ID of the guild the entry belongs to |
| client  | <code>Client</code> | The client that instantiated this entry  |

## Classes

<dl>
<dt><a href="#GuildAutoMod">GuildAutoMod</a> ⇐ <code>Base</code></dt>
<dd><p>Represents an auto-mod configuration for a guild.</p>
</dd>
</dl>

## Functions

<dl>
<dt><a href="#setEnabled">setEnabled(enabled, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Enables or disables the feature.</p>
</dd>
<dt><a href="#setExemptRoles">setExemptRoles(exemptRoles, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the roles that are exempt from the feature.</p>
</dd>
<dt><a href="#setExemptChannels">setExemptChannels(exemptChannels, reason)</a> ⇒ <code>Promise</code></dt>
<dd><p>Sets the channels that are exempt from the feature.</p>
</dd>
</dl>

<a name="GuildAutoMod"></a>

## GuildAutoMod ⇐ <code>Base</code>

Represents an auto-mod configuration for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildAutoMod](#GuildAutoMod) ⇐ <code>Base</code>
  - [new GuildAutoMod(data, guildId, client)](#new_GuildAutoMod_new)
  - [.guild](#GuildAutoMod+guild) : <code>Guild</code>
  - [.creator](#GuildAutoMod+creator) : <code>User</code>
  - [.fetch([options])](#GuildAutoMod+fetch) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
  - [.edit([options])](#GuildAutoMod+edit) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
  - [.delete([reason])](#GuildAutoMod+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setName(name, [reason])](#GuildAutoMod+setName) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
  - [.setEventType(eventType, [reason])](#GuildAutoMod+setEventType) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
  - [.setTriggerMetadata(triggerMetadata, [reason])](#GuildAutoMod+setTriggerMetadata) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)
  - [.setActions(actions, [reason])](#GuildAutoMod+setActions) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

<a name="new_GuildAutoMod_new"></a>

### new GuildAutoMod(data, guildId, client)

| Param   | Type                   | Description                             |
| ------- | ---------------------- | --------------------------------------- |
| data    | <code>Object</code>    | The data for the auto-mod configuration |
| guildId | <code>Snowflake</code> | The ID of the guild the auto-mod is for |
| client  | <code>Client</code>    | The client instance                     |

<a name="GuildAutoMod+guild"></a>

### guildAutoMod.guild : <code>Guild</code>

The guild associated with this GuildAutoMod.

**Kind**: instance property of [<code>GuildAutoMod</code>](#GuildAutoMod)  
**Read only**: true  
<a name="GuildAutoMod+creator"></a>

### guildAutoMod.creator : <code>User</code>

The user who created this GuildAutoMod.

**Kind**: instance property of [<code>GuildAutoMod</code>](#GuildAutoMod)  
**Read only**: true  
<a name="GuildAutoMod+fetch"></a>

### guildAutoMod.fetch([options]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Fetches the GuildAutoMod's data from Discord.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param     | Type                | Description                             |
| --------- | ------------------- | --------------------------------------- |
| [options] | <code>Object</code> | Additional options for the API request. |

<a name="GuildAutoMod+edit"></a>

### guildAutoMod.edit([options]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Edits the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param     | Type                | Description                                |
| --------- | ------------------- | ------------------------------------------ |
| [options] | <code>Object</code> | The options to edit the GuildAutoMod with. |

<a name="GuildAutoMod+delete"></a>

### guildAutoMod.delete([reason]) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param    | Type                | Description                           |
| -------- | ------------------- | ------------------------------------- |
| [reason] | <code>string</code> | Reason for deleting the GuildAutoMod. |

<a name="GuildAutoMod+setName"></a>

### guildAutoMod.setName(name, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Sets the name of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param    | Type                | Description                        |
| -------- | ------------------- | ---------------------------------- |
| name     | <code>string</code> | The new name for the GuildAutoMod. |
| [reason] | <code>string</code> | Reason for changing the name.      |

<a name="GuildAutoMod+setEventType"></a>

### guildAutoMod.setEventType(eventType, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Sets the event type of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param     | Type                                       | Description                              |
| --------- | ------------------------------------------ | ---------------------------------------- |
| eventType | <code>string</code> \| <code>number</code> | The new event type for the GuildAutoMod. |
| [reason]  | <code>string</code>                        | Reason for changing the event type.      |

<a name="GuildAutoMod+setTriggerMetadata"></a>

### guildAutoMod.setTriggerMetadata(triggerMetadata, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Sets the trigger metadata of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param                         | Type                                                                   | Description                                    |
| ----------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------- |
| triggerMetadata               | <code>Object</code>                                                    | The new trigger metadata for the GuildAutoMod. |
| triggerMetadata.keywordFilter | <code>Array.&lt;string&gt;</code>                                      | The keyword filter to apply.                   |
| triggerMetadata.presets       | <code>Array.&lt;string&gt;</code> \| <code>Array.&lt;number&gt;</code> | The presets to apply.                          |
| triggerMetadata.allowList     | <code>Array.&lt;string&gt;</code>                                      | The allow list to apply.                       |
| [reason]                      | <code>string</code>                                                    | Reason for changing the trigger metadata.      |

<a name="GuildAutoMod+setActions"></a>

### guildAutoMod.setActions(actions, [reason]) ⇒ [<code>Promise.&lt;GuildAutoMod&gt;</code>](#GuildAutoMod)

Sets the actions of the GuildAutoMod.

**Kind**: instance method of [<code>GuildAutoMod</code>](#GuildAutoMod)

| Param    | Type                              | Description                           |
| -------- | --------------------------------- | ------------------------------------- |
| actions  | <code>Array.&lt;Object&gt;</code> | The new actions for the GuildAutoMod. |
| [reason] | <code>string</code>               | Reason for changing the actions.      |

<a name="setEnabled"></a>

## setEnabled(enabled, reason) ⇒ <code>Promise</code>

Enables or disables the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.

| Param   | Type                 | Description                                                  |
| ------- | -------------------- | ------------------------------------------------------------ |
| enabled | <code>boolean</code> | Indicates whether the feature should be enabled or disabled. |
| reason  | <code>string</code>  | The reason for enabling or disabling the feature.            |

<a name="setExemptRoles"></a>

## setExemptRoles(exemptRoles, reason) ⇒ <code>Promise</code>

Sets the roles that are exempt from the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.

| Param       | Type                              | Description                                                  |
| ----------- | --------------------------------- | ------------------------------------------------------------ |
| exemptRoles | <code>Array.&lt;string&gt;</code> | An array of role IDs that should be exempt from the feature. |
| reason      | <code>string</code>               | The reason for setting the exempt roles.                     |

<a name="setExemptChannels"></a>

## setExemptChannels(exemptChannels, reason) ⇒ <code>Promise</code>

Sets the channels that are exempt from the feature.

**Kind**: global function  
**Returns**: <code>Promise</code> - A promise that resolves with the result of the edit operation.

| Param          | Type                              | Description                                                     |
| -------------- | --------------------------------- | --------------------------------------------------------------- |
| exemptChannels | <code>Array.&lt;string&gt;</code> | An array of channel IDs that should be exempt from the feature. |
| reason         | <code>string</code>               | The reason for setting the exempt channels.                     |

<a name="GuildAutoModActions"></a>

## GuildAutoModActions ⇐ <code>Base</code>

Represents an action taken by the guild automod system.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildAutoModActions](#GuildAutoModActions) ⇐ <code>Base</code>
  - [new GuildAutoModActions(data, client)](#new_GuildAutoModActions_new)
  - [.type](#GuildAutoModActions+type) : <code>string</code>
  - [.metadata](#GuildAutoModActions+metadata) : <code>Object</code>

<a name="new_GuildAutoModActions_new"></a>

### new GuildAutoModActions(data, client)

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| data   | <code>Object</code> | The data for the action. |
| client | <code>Client</code> | The instantiating client |

<a name="GuildAutoModActions+type"></a>

### guildAutoModActions.type : <code>string</code>

The type of action taken by the automod system.

**Kind**: instance property of [<code>GuildAutoModActions</code>](#GuildAutoModActions)  
<a name="GuildAutoModActions+metadata"></a>

### guildAutoModActions.metadata : <code>Object</code>

The metadata for the action, if any.

**Kind**: instance property of [<code>GuildAutoModActions</code>](#GuildAutoModActions)  
**Properties**

| Name            | Type                | Description                                    |
| --------------- | ------------------- | ---------------------------------------------- |
| channelId       | <code>string</code> | The ID of the channel the action was taken in. |
| durationSeconds | <code>number</code> | The duration of the action, in seconds.        |

<a name="GuildBan"></a>

## GuildBan ⇐ <code>Base</code>

Represents a ban for a user in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildBan](#GuildBan) ⇐ <code>Base</code>
  - [new GuildBan(data, guildId, client)](#new_GuildBan_new)
  - [.partial](#GuildBan+partial) : <code>boolean</code>
  - [.reason](#GuildBan+reason) : <code>string</code>
  - [.user](#GuildBan+user)
  - [.guildId](#GuildBan+guildId) : <code>string</code>
  - [.guild](#GuildBan+guild) : <code>Guild</code>
  - [.fetch([options])](#GuildBan+fetch) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)
  - [.remove([options])](#GuildBan+remove) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)

<a name="new_GuildBan_new"></a>

### new GuildBan(data, guildId, client)

| Param   | Type                | Description              |
| ------- | ------------------- | ------------------------ |
| data    | <code>Object</code> | The data for the ban.    |
| guildId | <code>string</code> | The ID of the guild.     |
| client  | <code>Client</code> | The instantiating client |

<a name="GuildBan+partial"></a>

### guildBan.partial : <code>boolean</code>

Whether or not the ban is partial.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+reason"></a>

### guildBan.reason : <code>string</code>

The reason for the ban.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+user"></a>

### guildBan.user

The user who was banned.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+guildId"></a>

### guildBan.guildId : <code>string</code>

The ID of the guild the ban was issued in.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
<a name="GuildBan+guild"></a>

### guildBan.guild : <code>Guild</code>

The guild that this ban was issued in.

**Kind**: instance property of [<code>GuildBan</code>](#GuildBan)  
**Read only**: true  
<a name="GuildBan+fetch"></a>

### guildBan.fetch([options]) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)

Fetches this ban from the API.

**Kind**: instance method of [<code>GuildBan</code>](#GuildBan)

| Param     | Type                | Description                       |
| --------- | ------------------- | --------------------------------- |
| [options] | <code>Object</code> | Additional options for the fetch. |

<a name="GuildBan+remove"></a>

### guildBan.remove([options]) ⇒ [<code>Promise.&lt;GuildBan&gt;</code>](#GuildBan)

Fetches this ban from the API.

**Kind**: instance method of [<code>GuildBan</code>](#GuildBan)

| Param     | Type                | Description                       |
| --------- | ------------------- | --------------------------------- |
| [options] | <code>Object</code> | Additional options for the fetch. |

<a name="GuildDiscovery"></a>

## GuildDiscovery ⇐ <code>Base</code>

Represents a guild's discovery metadata.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildDiscovery](#GuildDiscovery) ⇐ <code>Base</code>
  - [new GuildDiscovery(data, guildId, client)](#new_GuildDiscovery_new)
  - [.partial](#GuildDiscovery+partial) : <code>boolean</code>
  - [.about](#GuildDiscovery+about) : <code>string</code>
  - [.guildId](#GuildDiscovery+guildId) : <code>Snowflake</code>
  - [.categoryIds](#GuildDiscovery+categoryIds) : <code>Array.&lt;string&gt;</code>
  - [.emojiDiscoverabilityEnabled](#GuildDiscovery+emojiDiscoverabilityEnabled) : <code>boolean</code>
  - [.published](#GuildDiscovery+published) : <code>boolean</code>
  - [.keywords](#GuildDiscovery+keywords) : <code>Array.&lt;string&gt;</code>
  - [.partnerActionedAt](#GuildDiscovery+partnerActionedAt) : <code>Date</code>
  - [.partnerActionedTimestamp](#GuildDiscovery+partnerActionedTimestamp) : <code>number</code>
  - [.partnerApplicationAt](#GuildDiscovery+partnerApplicationAt) : <code>Date</code>
  - [.partnerApplicationTimestamp](#GuildDiscovery+partnerApplicationTimestamp) : <code>number</code>
  - [.primaryCategoryId](#GuildDiscovery+primaryCategoryId) : <code>GuildPrimaryCategory</code>
  - [.reasonsToJoin](#GuildDiscovery+reasonsToJoin) : <code>Array.&lt;string&gt;</code>
  - [.socialLinks](#GuildDiscovery+socialLinks) : <code>Object</code>
  - [.guild](#GuildDiscovery+guild) ⇒ <code>Guild</code>
  - [.fetch()](#GuildDiscovery+fetch) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
  - [.edit()](#GuildDiscovery+edit) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
  - [.setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled)](#GuildDiscovery+setEmojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
  - [.setPublished(emojiDiscoverabilityEnabled)](#GuildDiscovery+setPublished) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
  - [.setAbout(about)](#GuildDiscovery+setAbout) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
  - [.setReasonsToJoin(reasonsToJoin)](#GuildDiscovery+setReasonsToJoin) ⇒ <code>Promise.&lt;Discovery&gt;</code>
  - [.setKeywords(keywords)](#GuildDiscovery+setKeywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>
  - [.setPrimaryCategoryId(keywords)](#GuildDiscovery+setPrimaryCategoryId) ⇒ <code>Promise.&lt;Discovery&gt;</code>

<a name="new_GuildDiscovery_new"></a>

### new GuildDiscovery(data, guildId, client)

| Param   | Type                   | Description                                            |
| ------- | ---------------------- | ------------------------------------------------------ |
| data    | <code>Object</code>    | The data for the guild discovery metadata              |
| guildId | <code>Snowflake</code> | The ID of the guild this discovery metadata belongs to |
| client  | <code>Client</code>    | The instantiating client                               |

<a name="GuildDiscovery+partial"></a>

### guildDiscovery.partial : <code>boolean</code>

Whether or not this guild discovery object is partial.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+about"></a>

### guildDiscovery.about : <code>string</code>

The about section of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+guildId"></a>

### guildDiscovery.guildId : <code>Snowflake</code>

The ID of the guild.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+categoryIds"></a>

### guildDiscovery.categoryIds : <code>Array.&lt;string&gt;</code>

The category IDs of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+emojiDiscoverabilityEnabled"></a>

### guildDiscovery.emojiDiscoverabilityEnabled : <code>boolean</code>

Whether or not emoji discoverability is enabled.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+published"></a>

### guildDiscovery.published : <code>boolean</code>

Whether or not the guild discovery is published.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+keywords"></a>

### guildDiscovery.keywords : <code>Array.&lt;string&gt;</code>

The keywords associated with the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerActionedAt"></a>

### guildDiscovery.partnerActionedAt : <code>Date</code>

The date the guild was partner actioned.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerActionedTimestamp"></a>

### guildDiscovery.partnerActionedTimestamp : <code>number</code>

The timestamp of when the guild was partner actioned.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerApplicationAt"></a>

### guildDiscovery.partnerApplicationAt : <code>Date</code>

The date the guild applied for partnership.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+partnerApplicationTimestamp"></a>

### guildDiscovery.partnerApplicationTimestamp : <code>number</code>

The timestamp of when the guild applied for partnership.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+primaryCategoryId"></a>

### guildDiscovery.primaryCategoryId : <code>GuildPrimaryCategory</code>

The primary category ID of the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+reasonsToJoin"></a>

### guildDiscovery.reasonsToJoin : <code>Array.&lt;string&gt;</code>

The reasons to join the guild.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+socialLinks"></a>

### guildDiscovery.socialLinks : <code>Object</code>

The social links associated with the guild discovery.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
<a name="GuildDiscovery+guild"></a>

### guildDiscovery.guild ⇒ <code>Guild</code>

Returns the guild associated with this discovery metadata.

**Kind**: instance property of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Guild</code> - The guild object.  
<a name="GuildDiscovery+fetch"></a>

### guildDiscovery.fetch() ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Fetches the discovery metadata for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the discovery metadata object.  
<a name="GuildDiscovery+edit"></a>

### guildDiscovery.edit() ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Fetches the discovery metadata for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the discovery metadata object.  
<a name="GuildDiscovery+setEmojiDiscoverabilityEnabled"></a>

### guildDiscovery.setEmojiDiscoverabilityEnabled(emojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Sets whether the emoji discoverability is enabled for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.

| Param                       | Type                 | Description                                                        |
| --------------------------- | -------------------- | ------------------------------------------------------------------ |
| emojiDiscoverabilityEnabled | <code>boolean</code> | A boolean indicating whether the emoji discoverability is enabled. |

<a name="GuildDiscovery+setPublished"></a>

### guildDiscovery.setPublished(emojiDiscoverabilityEnabled) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Sets whether the emoji discoverability is enabled for the guild.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.

| Param                       | Type                 | Description                                                        |
| --------------------------- | -------------------- | ------------------------------------------------------------------ |
| emojiDiscoverabilityEnabled | <code>boolean</code> | A boolean indicating whether the emoji discoverability is enabled. |

<a name="GuildDiscovery+setAbout"></a>

### guildDiscovery.setAbout(about) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Sets the description of the guild for the discovery page.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - A promise that resolves with the updated discovery metadata object.

| Param | Type                | Description                   |
| ----- | ------------------- | ----------------------------- |
| about | <code>string</code> | The description of the guild. |

<a name="GuildDiscovery+setReasonsToJoin"></a>

### guildDiscovery.setReasonsToJoin(reasonsToJoin) ⇒ <code>Promise.&lt;Discovery&gt;</code>

Sets the "Reasons to Join" section for the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.

| Param         | Type                | Description                                |
| ------------- | ------------------- | ------------------------------------------ |
| reasonsToJoin | <code>string</code> | The new "Reasons to Join" section content. |

<a name="GuildDiscovery+setKeywords"></a>

### guildDiscovery.setKeywords(keywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>

Sets the keywords associated with the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.

| Param    | Type                              | Description       |
| -------- | --------------------------------- | ----------------- |
| keywords | <code>Array.&lt;string&gt;</code> | The new keywords. |

<a name="GuildDiscovery+setPrimaryCategoryId"></a>

### guildDiscovery.setPrimaryCategoryId(keywords) ⇒ <code>Promise.&lt;Discovery&gt;</code>

Sets the keywords associated with the associated guild in the discovery settings.

**Kind**: instance method of [<code>GuildDiscovery</code>](#GuildDiscovery)  
**Returns**: <code>Promise.&lt;Discovery&gt;</code> - The updated discovery object.

| Param    | Type                              | Description       |
| -------- | --------------------------------- | ----------------- |
| keywords | <code>Array.&lt;string&gt;</code> | The new keywords. |

<a name="GuildIntegration"></a>

## GuildIntegration ⇐ <code>Base</code>

Represents a Guild Integration on Discord.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildIntegration](#GuildIntegration) ⇐ <code>Base</code>
  - [new GuildIntegration(data, guildId, client)](#new_GuildIntegration_new)
  - [.guild](#GuildIntegration+guild) : <code>Guild</code>

<a name="new_GuildIntegration_new"></a>

### new GuildIntegration(data, guildId, client)

| Param   | Type                   | Description                                      |
| ------- | ---------------------- | ------------------------------------------------ |
| data    | <code>Object</code>    | The data for the guild integration.              |
| guildId | <code>Snowflake</code> | The ID of the guild this integration belongs to. |
| client  | <code>Client</code>    | The client that instantiated this integration.   |

<a name="GuildIntegration+guild"></a>

### guildIntegration.guild : <code>Guild</code>

The `Guild` object corresponding to this `GuildIntegration`.

**Kind**: instance property of [<code>GuildIntegration</code>](#GuildIntegration)  
**Read only**: true

<a name="GuildMember"></a>

## GuildMember ⇐ <code>Base</code>

Represents a member of a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildMember](#GuildMember) ⇐ <code>Base</code>
  - [new GuildMember(data, guildId, client)](#new_GuildMember_new)
  - [.guild](#GuildMember+guild) : <code>Guild</code> \| <code>null</code>
  - [.voice](#GuildMember+voice) : <code>VoiceState</code> \| <code>null</code>
  - [.presence](#GuildMember+presence) : <code>Presence</code> \| <code>null</code>
  - [.permissions](#GuildMember+permissions) : <code>Permissions</code>
  - [.user](#GuildMember+user) : <code>User</code> \| <code>null</code>
  - [.isCommunicationDisabled()](#GuildMember+isCommunicationDisabled) ⇒ <code>boolean</code>
  - [.fetch(options)](#GuildMember+fetch) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
  - [.kick(reason)](#GuildMember+kick) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
  - [.send(options)](#GuildMember+send) ⇒ <code>Promise.&lt;Message&gt;</code>
  - [.ban(options)](#GuildMember+ban) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
  - [.edit(options)](#GuildMember+edit) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)
  - [.setNickname(nickname, reason)](#GuildMember+setNickname) ⇒ <code>Promise</code>
  - [.setMute(mute, reason)](#GuildMember+setMute) ⇒ <code>Promise</code>
  - [.setDeaf(deaf, reason)](#GuildMember+setDeaf) ⇒ <code>Promise</code>
  - [.setChannel(channel, reason)](#GuildMember+setChannel) ⇒ <code>Promise</code>
  - [.setCommunicationDisabled(channel, reason)](#GuildMember+setCommunicationDisabled) ⇒ <code>Promise</code>
  - [.bannerURL(options)](#GuildMember+bannerURL) ⇒ <code>string</code> \| <code>null</code>
  - [.displayAvatarURL(options)](#GuildMember+displayAvatarURL) ⇒ <code>string</code>
  - [.permissionsIn(channel)](#GuildMember+permissionsIn) ⇒ <code>PermissionOverwrites</code>
  - [.permissionHas(perm)](#GuildMember+permissionHas) ⇒ <code>boolean</code>

<a name="new_GuildMember_new"></a>

### new GuildMember(data, guildId, client)

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| data    | <code>Object</code> | The data for the member.                   |
| guildId | <code>string</code> | The ID of the guild the member belongs to. |
| client  | <code>Client</code> | The client that instantiated this member.  |

<a name="GuildMember+guild"></a>

### guildMember.guild : <code>Guild</code> \| <code>null</code>

The guild that the member belongs to.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+voice"></a>

### guildMember.voice : <code>VoiceState</code> \| <code>null</code>

Gets the voice state for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+presence"></a>

### guildMember.presence : <code>Presence</code> \| <code>null</code>

Gets the presence for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+permissions"></a>

### guildMember.permissions : <code>Permissions</code>

Gets the resolved permissions for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+user"></a>

### guildMember.user : <code>User</code> \| <code>null</code>

The user object for the member.

**Kind**: instance property of [<code>GuildMember</code>](#GuildMember)  
<a name="GuildMember+isCommunicationDisabled"></a>

### guildMember.isCommunicationDisabled() ⇒ <code>boolean</code>

Checks if the member's communication is currently disabled.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>boolean</code> - - Whether communication is disabled.  
<a name="GuildMember+fetch"></a>

### guildMember.fetch(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)

Fetches this member from the API.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The fetched member.

| Param   | Type                | Description                     |
| ------- | ------------------- | ------------------------------- |
| options | <code>Object</code> | Optional options for the fetch. |

<a name="GuildMember+kick"></a>

### guildMember.kick(reason) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)

Kicks this member from the guild.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The kicked member.

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| reason | <code>string</code> | The reason for the kick. |

<a name="GuildMember+send"></a>

### guildMember.send(options) ⇒ <code>Promise.&lt;Message&gt;</code>

Sends a DM to this member.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - The sent message.

| Param   | Type                | Description         |
| ------- | ------------------- | ------------------- |
| options | <code>Object</code> | Options for the DM. |

<a name="GuildMember+ban"></a>

### guildMember.ban(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)

Bans this member from the guild.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The banned member.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| options | <code>Object</code> | Options for the ban. |

<a name="GuildMember+edit"></a>

### guildMember.edit(options) ⇒ [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember)

Edits this member.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: [<code>Promise.&lt;GuildMember&gt;</code>](#GuildMember) - - The edited member.

| Param   | Type                | Description           |
| ------- | ------------------- | --------------------- |
| options | <code>Object</code> | Options for the edit. |

<a name="GuildMember+setNickname"></a>

### guildMember.setNickname(nickname, reason) ⇒ <code>Promise</code>

Sets the member's nickname.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.

| Param    | Type                | Description                                     |
| -------- | ------------------- | ----------------------------------------------- |
| nickname | <code>string</code> | The new nickname.                               |
| reason   | <code>string</code> | The reason for setting the nickname (optional). |

<a name="GuildMember+setMute"></a>

### guildMember.setMute(mute, reason) ⇒ <code>Promise</code>

Sets whether the member is muted.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.

| Param  | Type                 | Description                                 |
| ------ | -------------------- | ------------------------------------------- |
| mute   | <code>boolean</code> | Whether to mute the member.                 |
| reason | <code>string</code>  | The reason for setting the mute (optional). |

<a name="GuildMember+setDeaf"></a>

### guildMember.setDeaf(deaf, reason) ⇒ <code>Promise</code>

Sets whether the member is deafened.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.

| Param  | Type                 | Description                                 |
| ------ | -------------------- | ------------------------------------------- |
| deaf   | <code>boolean</code> | Whether to deafen the member.               |
| reason | <code>string</code>  | The reason for setting the deaf (optional). |

<a name="GuildMember+setChannel"></a>

### guildMember.setChannel(channel, reason) ⇒ <code>Promise</code>

Moves the member to a different voice channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.

| Param   | Type                           | Description                                  |
| ------- | ------------------------------ | -------------------------------------------- |
| channel | <code>ChannelResolvable</code> | The new voice channel.                       |
| reason  | <code>string</code>            | The reason for moving the member (optional). |

<a name="GuildMember+setCommunicationDisabled"></a>

### guildMember.setCommunicationDisabled(channel, reason) ⇒ <code>Promise</code>

Moves the member to a different voice channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated member object.

| Param   | Type                           | Description                                  |
| ------- | ------------------------------ | -------------------------------------------- |
| channel | <code>ChannelResolvable</code> | The new voice channel.                       |
| reason  | <code>string</code>            | The reason for moving the member (optional). |

<a name="GuildMember+bannerURL"></a>

### guildMember.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>

The URL to the member's guild banner image.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>string</code> \| <code>null</code> - The URL to the banner image, or null if the member does not have a banner.

| Param           | Type                 | Description                                                       |
| --------------- | -------------------- | ----------------------------------------------------------------- |
| options         | <code>Object</code>  | Options for the banner URL (optional).                            |
| options.dynamic | <code>boolean</code> | Whether to use the dynamic version of the banner (default: true). |
| options.size    | <code>number</code>  | The size of the banner (default: 2048).                           |
| options.format  | <code>string</code>  | The format of the banner (default: "webp").                       |

<a name="GuildMember+displayAvatarURL"></a>

### guildMember.displayAvatarURL(options) ⇒ <code>string</code>

Returns the URL to the member's display avatar.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>string</code> - The URL to the display avatar.

| Param           | Type                 | Description                                                       |
| --------------- | -------------------- | ----------------------------------------------------------------- |
| options         | <code>Object</code>  | Options for the avatar URL (optional).                            |
| options.dynamic | <code>boolean</code> | Whether to use the dynamic version of the avatar (default: true). |
| options.size    | <code>number</code>  | The size of the avatar (default: 2048).                           |
| options.format  | <code>string</code>  | The format of the avatar (default: "webp").                       |

<a name="GuildMember+permissionsIn"></a>

### guildMember.permissionsIn(channel) ⇒ <code>PermissionOverwrites</code>

Gets the permissions for the member in a given channel.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>PermissionOverwrites</code> - The resolved permissions for the member in the channel.  
**Throws**:

- <code>RangeError</code> Thrown if the channel is not cached.

| Param   | Type                           | Description                         |
| ------- | ------------------------------ | ----------------------------------- |
| channel | <code>ChannelResolvable</code> | The channel to get permissions for. |

<a name="GuildMember+permissionHas"></a>

### guildMember.permissionHas(perm) ⇒ <code>boolean</code>

Checks if the member has a given permission.

**Kind**: instance method of [<code>GuildMember</code>](#GuildMember)  
**Returns**: <code>boolean</code> - Whether the member has the permission.

| Param | Type                              | Description                  |
| ----- | --------------------------------- | ---------------------------- |
| perm  | <code>PermissionResolvable</code> | The permission to check for. |

<a name="GuildMemberVerification"></a>

## GuildMemberVerification ⇐ <code>Base</code>

Represents the verification requirements for a guild member.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildMemberVerification](#GuildMemberVerification) ⇐ <code>Base</code>
  - [new GuildMemberVerification(data, guildId, client)](#new_GuildMemberVerification_new)
  - _instance_
    - [.guild](#GuildMemberVerification+guild) : <code>Guild</code>
    - [.fetch([options])](#GuildMemberVerification+fetch) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    - [.edit([options])](#GuildMemberVerification+edit) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    - [.setEnabled(enabled, [reason])](#GuildMemberVerification+setEnabled) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    - [.setDescription(description, [reason])](#GuildMemberVerification+setDescription) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    - [.addFields(fields)](#GuildMemberVerification+addFields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
    - [.removeFields()](#GuildMemberVerification+removeFields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)
  - _static_
    - [.transformoptions(fields)](#GuildMemberVerification.transformoptions) ⇒ <code>Object</code>

<a name="new_GuildMemberVerification_new"></a>

### new GuildMemberVerification(data, guildId, client)

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| data    | <code>Object</code> | The data for the verification.               |
| guildId | <code>string</code> | The ID of the guild the verification is for. |
| client  | <code>Client</code> | The client that instantiated this object.    |

<a name="GuildMemberVerification+guild"></a>

### guildMemberVerification.guild : <code>Guild</code>

The guild the verification is for.

**Kind**: instance property of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
**Read only**: true  
<a name="GuildMemberVerification+fetch"></a>

### guildMemberVerification.fetch([options]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Fetches this verification's settings.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)

| Param     | Type                          | Description                       |
| --------- | ----------------------------- | --------------------------------- |
| [options] | <code>BaseFetchOptions</code> | Additional options for the fetch. |

<a name="GuildMemberVerification+edit"></a>

### guildMemberVerification.edit([options]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Edits this verification's settings.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)

| Param     | Type                                            | Description                           |
| --------- | ----------------------------------------------- | ------------------------------------- |
| [options] | <code>GuildMemberVerificationEditOptions</code> | The options to edit the verification. |

<a name="GuildMemberVerification+setEnabled"></a>

### guildMemberVerification.setEnabled(enabled, [reason]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Sets whether this verification is enabled.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)

| Param    | Type                 | Description                          |
| -------- | -------------------- | ------------------------------------ |
| enabled  | <code>boolean</code> | Whether the verification is enabled. |
| [reason] | <code>string</code>  | The reason for the change.           |

<a name="GuildMemberVerification+setDescription"></a>

### guildMemberVerification.setDescription(description, [reason]) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Sets the description for this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)

| Param       | Type                | Description                               |
| ----------- | ------------------- | ----------------------------------------- |
| description | <code>string</code> | The new description for the verification. |
| [reason]    | <code>string</code> | The reason for the change.                |

<a name="GuildMemberVerification+addFields"></a>

### guildMemberVerification.addFields(fields) ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Adds new fields to this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)

| Param  | Type                                              | Description                            |
| ------ | ------------------------------------------------- | -------------------------------------- |
| fields | <code>Array.&lt;VerificationFormFields&gt;</code> | The fields to add to the verification. |

<a name="GuildMemberVerification+removeFields"></a>

### guildMemberVerification.removeFields() ⇒ [<code>Promise.&lt;GuildMemberVerification&gt;</code>](#GuildMemberVerification)

Removes all fields from this verification.

**Kind**: instance method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
<a name="GuildMemberVerification.transformoptions"></a>

### GuildMemberVerification.transformoptions(fields) ⇒ <code>Object</code>

Transforms options for a verification form field.

**Kind**: static method of [<code>GuildMemberVerification</code>](#GuildMemberVerification)  
**Returns**: <code>Object</code> - The transformed form fields.

| Param           | Type                 | Description                           |
| --------------- | -------------------- | ------------------------------------- |
| fields          | <code>Object</code>  | The fields to transform.              |
| fields.type     | <code>string</code>  | The type of the form field.           |
| fields.label    | <code>string</code>  | The label for the form field.         |
| fields.required | <code>boolean</code> | Whether the field is required or not. |
| fields.values   | <code>Array</code>   | The values for the field.             |
| fields.choices  | <code>Array</code>   | The choices for the field.            |

<a name="GuildPreview"></a>

## GuildPreview ⇐ <code>Base</code>

Represents the preview for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildPreview](#GuildPreview) ⇐ <code>Base</code>
  - [new GuildPreview(data, client)](#new_GuildPreview_new)
  - [.fetch()](#GuildPreview+fetch) ⇒ [<code>Promise.&lt;GuildPreview&gt;</code>](#GuildPreview)
  - [.iconURL(options)](#GuildPreview+iconURL) ⇒ <code>string</code>
  - [.splashURL([options])](#GuildPreview+splashURL) ⇒ <code>string</code>
  - [.discoverySplashURL([options])](#GuildPreview+discoverySplashURL) ⇒ <code>string</code>

<a name="new_GuildPreview_new"></a>

### new GuildPreview(data, client)

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| data   | <code>Object</code> | The data for the guild preview |
| client | <code>Client</code> | The instantiating client       |

<a name="GuildPreview+fetch"></a>

### guildPreview.fetch() ⇒ [<code>Promise.&lt;GuildPreview&gt;</code>](#GuildPreview)

Fetches the previewed guild

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
<a name="GuildPreview+iconURL"></a>

### guildPreview.iconURL(options) ⇒ <code>string</code>

Returns the URL of the guild's icon

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL of the guild's icon or null if no icon is available

| Param           | Type                 | Description                                      |
| --------------- | -------------------- | ------------------------------------------------ |
| options         | <code>Object</code>  | Options for the icon URL                         |
| options.dynamic | <code>boolean</code> | Whether the icon should be dynamically generated |
| options.size    | <code>number</code>  | The size of the icon in pixels                   |
| options.format  | <code>string</code>  | The format of the icon (e.g. "png" or "jpeg")    |

<a name="GuildPreview+splashURL"></a>

### guildPreview.splashURL([options]) ⇒ <code>string</code>

Returns the URL for the guild splash image.

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL for the guild splash image or null if no splash image is available.

| Param             | Type                 | Default            | Description                                         |
| ----------------- | -------------------- | ------------------ | --------------------------------------------------- |
| [options]         | <code>Object</code>  |                    | Options for the splash image.                       |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to generate a dynamic or static image.      |
| [options.size]    | <code>number</code>  |                    | The size of the image in pixels.                    |
| [options.format]  | <code>string</code>  |                    | The format of the image (e.g. "webp", "png", etc.). |

<a name="GuildPreview+discoverySplashURL"></a>

### guildPreview.discoverySplashURL([options]) ⇒ <code>string</code>

Returns the URL for the guild discovery splash image.

**Kind**: instance method of [<code>GuildPreview</code>](#GuildPreview)  
**Returns**: <code>string</code> - The URL for the guild discovery splash image or null if no discovery splash image is available.

| Param             | Type                 | Default            | Description                                         |
| ----------------- | -------------------- | ------------------ | --------------------------------------------------- |
| [options]         | <code>Object</code>  |                    | Options for the discovery splash image.             |
| [options.dynamic] | <code>boolean</code> | <code>false</code> | Whether to generate a dynamic or static image.      |
| [options.size]    | <code>number</code>  |                    | The size of the image in pixels.                    |
| [options.format]  | <code>string</code>  |                    | The format of the image (e.g. "webp", "png", etc.). |

<a name="GuildScheduledEvent"></a>

## GuildScheduledEvent ⇐ <code>Base</code>

Represents a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildScheduledEvent](#GuildScheduledEvent) ⇐ <code>Base</code>
  - [new GuildScheduledEvent([data], guildId, client)](#new_GuildScheduledEvent_new)
  - [.guild](#GuildScheduledEvent+guild) ⇒
  - [.creator](#GuildScheduledEvent+creator) ⇒
  - [.fetch(options)](#GuildScheduledEvent+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#GuildScheduledEvent+edit) ⇒ <code>Promise</code>
  - [.delete()](#GuildScheduledEvent+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setName(name, reason)](#GuildScheduledEvent+setName) ⇒ <code>Promise</code>
  - [.setDescription(description, reason)](#GuildScheduledEvent+setDescription) ⇒ <code>Promise</code>
  - [.setPrivacyLevel(privacyLevel, reason)](#GuildScheduledEvent+setPrivacyLevel) ⇒ <code>Promise</code>
  - [.setEntityType(entityType, reason)](#GuildScheduledEvent+setEntityType) ⇒ <code>Promise</code>
  - [.setEntityMetadata(entityMetadata, reason)](#GuildScheduledEvent+setEntityMetadata) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setImage(image, reason)](#GuildScheduledEvent+setImage) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setScheduledStartTime(scheduledStartTime, reason)](#GuildScheduledEvent+setScheduledStartTime) ⇒ <code>Promise</code>
  - [.setScheduledEndTime(scheduledEndTime, reason)](#GuildScheduledEvent+setScheduledEndTime) ⇒ <code>Promise</code>
  - [.setStatus(status, reason)](#GuildScheduledEvent+setStatus) ⇒ <code>Promise.&lt;any&gt;</code>
  - [.coverImageURL(options)](#GuildScheduledEvent+coverImageURL) ⇒ <code>string</code> \| <code>null</code>
  - [.inviteURL()](#GuildScheduledEvent+inviteURL) ⇒ <code>string</code>

<a name="new_GuildScheduledEvent_new"></a>

### new GuildScheduledEvent([data], guildId, client)

Constructs a new GuildScheduledEvent object.

**Returns**: [<code>GuildScheduledEvent</code>](#GuildScheduledEvent) - - The constructed GuildScheduledEvent object.

| Param   | Type                | Description                                    |
| ------- | ------------------- | ---------------------------------------------- |
| [data]  | <code>Object</code> | The data for the scheduled event.              |
| guildId | <code>string</code> | The ID of the guild that the event belongs to. |
| client  | <code>Client</code> | The client instance.                           |

<a name="GuildScheduledEvent+guild"></a>

### guildScheduledEvent.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildScheduledEvent+creator"></a>

### guildScheduledEvent.creator ⇒

Retrieves the creator of this object.

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The user object representing the creator, or null if the creator is not found.  
<a name="GuildScheduledEvent+fetch"></a>

### guildScheduledEvent.fetch(options) ⇒ <code>Promise</code>

Fetches events for the guild using the provided options.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched events.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| options | <code>object</code> | The options for fetching events. |

<a name="GuildScheduledEvent+edit"></a>

### guildScheduledEvent.edit(options) ⇒ <code>Promise</code>

Edits the guild's events with the given options.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - A promise that resolves when the events have been successfully edited.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>Object</code> | The options to edit the events with. |

<a name="GuildScheduledEvent+delete"></a>

### guildScheduledEvent.delete() ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the current event from the guild's events collection.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves once the event is deleted.  
<a name="GuildScheduledEvent+setName"></a>

### guildScheduledEvent.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="GuildScheduledEvent+setDescription"></a>

### guildScheduledEvent.setDescription(description, reason) ⇒ <code>Promise</code>

Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.

| Param       | Type                | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| description | <code>string</code> | The new description to set.              |
| reason      | <code>string</code> | The reason for updating the description. |

<a name="GuildScheduledEvent+setPrivacyLevel"></a>

### guildScheduledEvent.setPrivacyLevel(privacyLevel, reason) ⇒ <code>Promise</code>

Sets the privacy level for the current user.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the privacy level is successfully set.

| Param        | Type                | Description                               |
| ------------ | ------------------- | ----------------------------------------- |
| privacyLevel | <code>string</code> | The privacy level to set.                 |
| reason       | <code>string</code> | The reason for setting the privacy level. |

<a name="GuildScheduledEvent+setEntityType"></a>

### guildScheduledEvent.setEntityType(entityType, reason) ⇒ <code>Promise</code>

Sets the entity type and reason for the current entity.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the entity type is successfully set.

| Param      | Type                | Description                            |
| ---------- | ------------------- | -------------------------------------- |
| entityType | <code>string</code> | The new entity type to set.            |
| reason     | <code>string</code> | The reason for the entity type change. |

<a name="GuildScheduledEvent+setEntityMetadata"></a>

### guildScheduledEvent.setEntityMetadata(entityMetadata, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the metadata of an entity with the given entityMetadata and reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the metadata is successfully set.

| Param          | Type                | Description                          |
| -------------- | ------------------- | ------------------------------------ |
| entityMetadata | <code>any</code>    | The metadata to set for the entity.  |
| reason         | <code>string</code> | The reason for setting the metadata. |

<a name="GuildScheduledEvent+setImage"></a>

### guildScheduledEvent.setImage(image, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the image of an object and updates it with the given reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the image is set and updated.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| image  | <code>any</code>    | The new image to set.              |
| reason | <code>string</code> | The reason for updating the image. |

<a name="GuildScheduledEvent+setScheduledStartTime"></a>

### guildScheduledEvent.setScheduledStartTime(scheduledStartTime, reason) ⇒ <code>Promise</code>

Sets the scheduled start time and reason for an event.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param              | Type                | Description                              |
| ------------------ | ------------------- | ---------------------------------------- |
| scheduledStartTime | <code>Date</code>   | The scheduled start time for the event.  |
| reason             | <code>string</code> | The reason for the scheduled start time. |

<a name="GuildScheduledEvent+setScheduledEndTime"></a>

### guildScheduledEvent.setScheduledEndTime(scheduledEndTime, reason) ⇒ <code>Promise</code>

Sets the scheduled end time and reason for a task.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param            | Type                | Description                                      |
| ---------------- | ------------------- | ------------------------------------------------ |
| scheduledEndTime | <code>Date</code>   | The new scheduled end time for the task.         |
| reason           | <code>string</code> | The reason for the change in scheduled end time. |

<a name="GuildScheduledEvent+setStatus"></a>

### guildScheduledEvent.setStatus(status, reason) ⇒ <code>Promise.&lt;any&gt;</code>

Sets the status and reason of an object and returns the updated object.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the updated object.

| Param  | Type             | Description           |
| ------ | ---------------- | --------------------- |
| status | <code>any</code> | The new status value. |
| reason | <code>any</code> | The new reason value. |

<a name="GuildScheduledEvent+coverImageURL"></a>

### guildScheduledEvent.coverImageURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the cover image for the guild scheduled event.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the cover image, or null if there is no image.

| Param             | Type                 | Description                                        |
| ----------------- | -------------------- | -------------------------------------------------- |
| options           | <code>Object</code>  | Optional parameters for generating the URL.        |
| [options.dynamic] | <code>boolean</code> | Whether the image should be dynamically generated. |
| [options.size]    | <code>string</code>  | The desired size of the image.                     |
| [options.format]  | <code>string</code>  | The desired format of the image.                   |

<a name="GuildScheduledEvent+inviteURL"></a>

### guildScheduledEvent.inviteURL() ⇒ <code>string</code>

Generates an invite URL for a user.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: <code>string</code> - The invite URL.

<a name="GuildScheduledEventUser"></a>

## GuildScheduledEventUser ⇐ <code>Base</code>

Represents a user associated with a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildScheduledEventUser](#GuildScheduledEventUser) ⇐ <code>Base</code>
  - [new GuildScheduledEventUser([data], guildId, eventId, client)](#new_GuildScheduledEventUser_new)
  - [.guild](#GuildScheduledEventUser+guild) ⇒
  - [.guildScheduledEvent](#GuildScheduledEventUser+guildScheduledEvent) ⇒ <code>ScheduledEvent</code> \| <code>null</code>

<a name="new_GuildScheduledEventUser_new"></a>

### new GuildScheduledEventUser([data], guildId, eventId, client)

Constructs a new instance of the Event class.

| Param   | Type                | Description                                                |
| ------- | ------------------- | ---------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the user.     |
| guildId | <code>string</code> | The ID of the guild the user belongs to.                   |
| eventId | <code>string</code> | The ID of the scheduled event the user is associated with. |
| client  | <code>Client</code> | The client instance.                                       |

<a name="GuildScheduledEventUser+guild"></a>

### guildScheduledEventUser.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildScheduledEventUser+guildScheduledEvent"></a>

### guildScheduledEventUser.guildScheduledEvent ⇒ <code>ScheduledEvent</code> \| <code>null</code>

Retrieves the scheduled event associated with the guild.

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: <code>ScheduledEvent</code> \| <code>null</code> - The scheduled event object if found, otherwise null.

<a name="GuildTemplate"></a>

## GuildTemplate ⇐ <code>Base</code>

Represents a guild template.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildTemplate](#GuildTemplate) ⇐ <code>Base</code>
  - [new GuildTemplate([data], client)](#new_GuildTemplate_new)
  - [.guild](#GuildTemplate+guild) ⇒
  - [.fetch()](#GuildTemplate+fetch) ⇒ <code>Promise</code>
  - [.sync()](#GuildTemplate+sync) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.edit(options)](#GuildTemplate+edit) ⇒ <code>Promise</code>
  - [.delete()](#GuildTemplate+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setName(name)](#GuildTemplate+setName) ⇒ <code>Promise</code>
  - [.setDescription(description)](#GuildTemplate+setDescription) ⇒ <code>Promise</code>
  - [.createGuild(options)](#GuildTemplate+createGuild) ⇒ <code>Promise</code>

<a name="new_GuildTemplate_new"></a>

### new GuildTemplate([data], client)

Constructs a new instance of a data object.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| [data] | <code>Object</code> | The data for the guild template. |
| client | <code>Client</code> | The client instance.             |

<a name="GuildTemplate+guild"></a>

### guildTemplate.guild ⇒

Get the guild object associated with this guild ID.

**Kind**: instance property of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The guild object.  
<a name="GuildTemplate+fetch"></a>

### guildTemplate.fetch() ⇒ <code>Promise</code>

Fetches a guild template using the provided code.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched guild template.  
<a name="GuildTemplate+sync"></a>

### guildTemplate.sync() ⇒ <code>Promise.&lt;void&gt;</code>

Synchronizes the guild templates with the provided code.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the synchronization is complete.  
<a name="GuildTemplate+edit"></a>

### guildTemplate.edit(options) ⇒ <code>Promise</code>

Edits the guild template with the provided options.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the result of the template edit.

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| options | <code>Object</code> | The options to apply to the template edit. |

<a name="GuildTemplate+delete"></a>

### guildTemplate.delete() ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the template with the specified code from the guild.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the template is successfully deleted.  
<a name="GuildTemplate+setName"></a>

### guildTemplate.setName(name) ⇒ <code>Promise</code>

Sets the name of an object asynchronously.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves when the name is successfully set.

| Param | Type                | Description          |
| ----- | ------------------- | -------------------- |
| name  | <code>string</code> | The new name to set. |

<a name="GuildTemplate+setDescription"></a>

### guildTemplate.setDescription(description) ⇒ <code>Promise</code>

Sets the description of an object and updates it.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.

| Param       | Type                | Description                 |
| ----------- | ------------------- | --------------------------- |
| description | <code>string</code> | The new description to set. |

<a name="GuildTemplate+createGuild"></a>

### guildTemplate.createGuild(options) ⇒ <code>Promise</code>

Creates a new guild using the provided options.

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: <code>Promise</code> - A promise that resolves to the generated template for the guild.

| Param   | Type                | Description                         |
| ------- | ------------------- | ----------------------------------- |
| options | <code>Object</code> | The options for creating the guild. |

<a name="GuildVanity"></a>

## GuildVanity ⇐ <code>Base</code>

Represents a Guild Vanity URL.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildVanity](#GuildVanity) ⇐ <code>Base</code>
  - [new GuildVanity([data], guildId, client)](#new_GuildVanity_new)
  - [.guild](#GuildVanity+guild) ⇒

<a name="new_GuildVanity_new"></a>

### new GuildVanity([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                     |
| ------- | ------------------- | --------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the initial values for the instance. |
| guildId | <code>string</code> | The ID of the guild.                                            |
| client  | <code>Client</code> | The client instance.                                            |

<a name="GuildVanity+guild"></a>

### guildVanity.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>GuildVanity</code>](#GuildVanity)  
**Returns**: The guild object.

<a name="GuildWidget"></a>

## GuildWidget ⇐ <code>Base</code>

Represents a guild widget.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildWidget](#GuildWidget) ⇐ <code>Base</code>
  - [new GuildWidget([data], guildId, client)](#new_GuildWidget_new)
  - [.guild](#GuildWidget+guild) ⇒ <code>Guild</code> \| <code>null</code>
  - [.fetchSettings()](#GuildWidget+fetchSettings) ⇒ <code>Promise</code>

<a name="new_GuildWidget_new"></a>

### new GuildWidget([data], guildId, client)

Constructs a new instance of the Guild class.

| Param   | Type                | Description                                          |
| ------- | ------------------- | ---------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing guild widget information. |
| guildId | <code>string</code> | The ID of the guild.                                 |
| client  | <code>Client</code> | The client instance.                                 |

<a name="GuildWidget+guild"></a>

### guildWidget.guild ⇒ <code>Guild</code> \| <code>null</code>

Retrieves the guild associated with this object.

**Kind**: instance property of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: <code>Guild</code> \| <code>null</code> - The guild object if found, otherwise null.  
<a name="GuildWidget+fetchSettings"></a>

### guildWidget.fetchSettings() ⇒ <code>Promise</code>

Fetches the settings for the guild's widgets.

**Kind**: instance method of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched settings.

<a name="GuildWidgetSettings"></a>

## GuildWidgetSettings ⇐ <code>Base</code>

Represents the settings for a guild widget.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildWidgetSettings](#GuildWidgetSettings) ⇐ <code>Base</code>
  - [new GuildWidgetSettings([data], guildId, client)](#new_GuildWidgetSettings_new)
  - [.guild](#GuildWidgetSettings+guild) ⇒
  - [.channel](#GuildWidgetSettings+channel) ⇒ <code>Channel</code> \| <code>null</code>
  - [.edit(options)](#GuildWidgetSettings+edit) ⇒ <code>Promise</code>
  - [.setEnabled(enabled, reason)](#GuildWidgetSettings+setEnabled) ⇒ <code>Promise</code>
  - [.setChannel(channel, reason)](#GuildWidgetSettings+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_GuildWidgetSettings_new"></a>

### new GuildWidgetSettings([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                             |
| ------- | ------------------- | --------------------------------------- |
| [data]  | <code>Object</code> | The data for the guild widget settings. |
| guildId | <code>string</code> | The ID of the guild.                    |
| client  | <code>Client</code> | The client instance.                    |

<a name="GuildWidgetSettings+guild"></a>

### guildWidgetSettings.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The guild object if found, otherwise null.  
<a name="GuildWidgetSettings+channel"></a>

### guildWidgetSettings.channel ⇒ <code>Channel</code> \| <code>null</code>

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="GuildWidgetSettings+edit"></a>

### guildWidgetSettings.edit(options) ⇒ <code>Promise</code>

Edits the guild's widget with the given options.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise</code> - A promise that resolves when the widget is successfully edited.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>Object</code> | The options to edit the widget with. |

<a name="GuildWidgetSettings+setEnabled"></a>

### guildWidgetSettings.setEnabled(enabled, reason) ⇒ <code>Promise</code>

Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param   | Type                 | Description                                  |
| ------- | -------------------- | -------------------------------------------- |
| enabled | <code>boolean</code> | The new enabled status of the item.          |
| reason  | <code>string</code>  | The reason for the change in enabled status. |

<a name="GuildWidgetSettings+setChannel"></a>

### guildWidgetSettings.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.

| Param   | Type                 | Description                         |
| ------- | -------------------- | ----------------------------------- |
| channel | <code>Channel</code> | The channel to set.                 |
| reason  | <code>string</code>  | The reason for setting the channel. |

<a name="Interaction"></a>

## Interaction ⇐ <code>Base</code>

Represents an interaction with a user in a Discord server.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Interaction](#Interaction) ⇐ <code>Base</code>
  - [new Interaction(data, guildId, client)](#new_Interaction_new)
  - [.guild](#Interaction+guild) ⇒
  - [.user](#Interaction+user) ⇒ <code>User</code> \| <code>null</code>
  - [.isChatInput()](#Interaction+isChatInput) ⇒ <code>boolean</code>
  - [.isCommand()](#Interaction+isCommand) ⇒ <code>boolean</code>
  - [.isUser()](#Interaction+isUser) ⇒ <code>boolean</code>
  - [.isMessage()](#Interaction+isMessage) ⇒ <code>boolean</code>
  - [.isButton()](#Interaction+isButton) ⇒ <code>boolean</code>
  - [.isModal()](#Interaction+isModal) ⇒ <code>boolean</code>
  - [.isAutocomplete()](#Interaction+isAutocomplete) ⇒ <code>boolean</code>
  - [.isSelect()](#Interaction+isSelect) ⇒ <code>boolean</code>
  - [.isContext()](#Interaction+isContext) ⇒ <code>boolean</code>
  - [.isDM()](#Interaction+isDM) ⇒ <code>boolean</code>
  - [.getValue(name)](#Interaction+getValue) ⇒
  - [.fetchReply()](#Interaction+fetchReply) ⇒ <code>Promise.&lt;Message&gt;</code>
  - [.reply(data)](#Interaction+reply) ⇒ <code>Promise.&lt;(Message\|null)&gt;</code>
  - [.deferReply(options)](#Interaction+deferReply) ⇒ <code>Promise</code>
  - [.modalSubmit(options)](#Interaction+modalSubmit) ⇒ <code>Promise</code>
  - [.deleteReply()](#Interaction+deleteReply) ⇒ <code>Promise.&lt;Message&gt;</code>
  - [.editReply(options)](#Interaction+editReply) ⇒ <code>Promise.&lt;Message&gt;</code>
  - [.followUp(options)](#Interaction+followUp) ⇒ <code>Promise.&lt;Message&gt;</code>

<a name="new_Interaction_new"></a>

### new Interaction(data, guildId, client)

Constructs a new instance of the Interaction class.

| Param   | Type                | Description                                                   |
| ------- | ------------------- | ------------------------------------------------------------- |
| data    | <code>Object</code> | The data object containing information about the interaction. |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred.           |
| client  | <code>Client</code> | The client instance.                                          |

<a name="Interaction+guild"></a>

### interaction.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The guild object if found, otherwise null.  
<a name="Interaction+user"></a>

### interaction.user ⇒ <code>User</code> \| <code>null</code>

Get the user associated with this instance.

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>User</code> \| <code>null</code> - The user object, or null if it is not available.  
<a name="Interaction+isChatInput"></a>

### interaction.isChatInput() ⇒ <code>boolean</code>

Checks if the command type is a chat input.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is a chat input, false otherwise.  
<a name="Interaction+isCommand"></a>

### interaction.isCommand() ⇒ <code>boolean</code>

Checks if the current object is a command.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the object is a command, false otherwise.  
<a name="Interaction+isUser"></a>

### interaction.isUser() ⇒ <code>boolean</code>

Checks if the command type is "User" or 2.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is "User" or 2, false otherwise.  
<a name="Interaction+isMessage"></a>

### interaction.isMessage() ⇒ <code>boolean</code>

Checks if the command type is "Message" or 3.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the command type is "Message" or 3, false otherwise.  
<a name="Interaction+isButton"></a>

### interaction.isButton() ⇒ <code>boolean</code>

Checks if the component type is a button.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the component type is a button, false otherwise.  
<a name="Interaction+isModal"></a>

### interaction.isModal() ⇒ <code>boolean</code>

Checks if the current instance is a modal.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - Returns true if the instance is a modal, false otherwise.  
<a name="Interaction+isAutocomplete"></a>

### interaction.isAutocomplete() ⇒ <code>boolean</code>

Checks if the current object is an autocomplete.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - True if the object is an autocomplete, false otherwise.  
<a name="Interaction+isSelect"></a>

### interaction.isSelect() ⇒ <code>boolean</code>

Checks if the component type is a select menu.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the component type is a select menu, false otherwise.  
<a name="Interaction+isContext"></a>

### interaction.isContext() ⇒ <code>boolean</code>

Checks if the current context is valid for the given command type.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - true if the context is valid, false otherwise.  
<a name="Interaction+isDM"></a>

### interaction.isDM() ⇒ <code>boolean</code>

Checks if the current channel is a direct message (DM) channel.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>boolean</code> - - True if the channel is a DM channel, false otherwise.  
<a name="Interaction+getValue"></a>

### interaction.getValue(name) ⇒

Retrieves the value associated with the given name from the options list.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The value associated with the given name.

| Param | Type                | Description                                       |
| ----- | ------------------- | ------------------------------------------------- |
| name  | <code>string</code> | The name of the option to retrieve the value for. |

<a name="Interaction+fetchReply"></a>

### interaction.fetchReply() ⇒ <code>Promise.&lt;Message&gt;</code>

Fetches the reply message from the Discord API using the provided webhook information.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the fetched reply message.  
<a name="Interaction+reply"></a>

### interaction.reply(data) ⇒ <code>Promise.&lt;(Message\|null)&gt;</code>

Sends a reply to an interaction with the provided data.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;(Message\|null)&gt;</code> - - A promise that resolves to the sent message, or null if fetchReply is false.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| data  | <code>Object</code> | The data to send as the reply. |

<a name="Interaction+deferReply"></a>

### interaction.deferReply(options) ⇒ <code>Promise</code>

Sends a deferred reply to an interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise</code> - A promise that resolves when the reply is sent.

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| options | <code>Object</code> | The options for creating the message payload. |

<a name="Interaction+modalSubmit"></a>

### interaction.modalSubmit(options) ⇒ <code>Promise</code>

Submits a modal form by sending a POST request to the specified endpoint.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise</code> - A promise that resolves when the form submission is complete.

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| options | <code>Object</code> | The options for the modal form submission. |

<a name="Interaction+deleteReply"></a>

### interaction.deleteReply() ⇒ <code>Promise.&lt;Message&gt;</code>

Deletes the reply message associated with the current interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the deleted message.  
<a name="Interaction+editReply"></a>

### interaction.editReply(options) ⇒ <code>Promise.&lt;Message&gt;</code>

Edits the reply message of a webhook interaction.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the edited message.

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| options | <code>Object</code> | The options for editing the reply message. |

<a name="Interaction+followUp"></a>

### interaction.followUp(options) ⇒ <code>Promise.&lt;Message&gt;</code>

Sends a follow-up message using the provided options.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the sent message.  
**Throws**:

- <code>Error</code> If there was an error sending the follow-up message.

| Param   | Type                | Description                            |
| ------- | ------------------- | -------------------------------------- |
| options | <code>object</code> | The options for the follow-up message. |

<a name="InteractionWebhook"></a>

## InteractionWebhook ⇐ <code>WebhookClient</code>

Represents an interaction webhook.

**Kind**: global class  
**Extends**: <code>WebhookClient</code>  
<a name="new_InteractionWebhook_new"></a>

### new InteractionWebhook([data], [client])

Constructs a new instance of the class.

| Param    | Type                | Description                                         |
| -------- | ------------------- | --------------------------------------------------- |
| [data]   | <code>Object</code> | The data for the interaction webhook.               |
| [client] | <code>Client</code> | The client associated with the interaction webhook. |

<a name="Invite"></a>

## Invite ⇐ <code>Base</code>

Represents an invite to a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Invite](#Invite) ⇐ <code>Base</code>
  - [new Invite([data], guild, client)](#new_Invite_new)
  - [.fetch(options)](#Invite+fetch) ⇒ <code>Promise</code>
  - [.delete(reason)](#Invite+delete) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_Invite_new"></a>

### new Invite([data], guild, client)

Constructs a new instance of the Invite class.

| Param  | Type                | Description                           |
| ------ | ------------------- | ------------------------------------- |
| [data] | <code>Object</code> | The data for the invite.              |
| guild  | <code>Guild</code>  | The guild that the invite belongs to. |
| client | <code>Client</code> | The client instance.                  |

<a name="Invite+fetch"></a>

### invite.fetch(options) ⇒ <code>Promise</code>

Fetches an invite using the provided options.

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched invite.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>object</code> | The options for fetching the invite. |

<a name="Invite+delete"></a>

### invite.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the invite associated with the guild.

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the invite is deleted.

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| reason | <code>string</code> | The reason for deleting the invite. |

<a name="Message"></a>

## Message ⇐ <code>Base</code>

Represents a message in a chat channel.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Message](#Message) ⇐ <code>Base</code>
  - [new Message(data, guildId, channelId, client)](#new_Message_new)
  - [.channel](#Message+channel) ⇒
  - [.guild](#Message+guild) ⇒
  - [.system](#Message+system) ⇒ <code>boolean</code> \| <code>null</code>
  - [.author](#Message+author) ⇒
  - [.edit(options)](#Message+edit) ⇒ <code>Promise</code>
  - [.delete(reason)](#Message+delete) ⇒ <code>Promise</code>
  - [.fetch([options])](#Message+fetch) ⇒ <code>Promise</code>
  - [.crosspost()](#Message+crosspost) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.react(emoji)](#Message+react) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.removeEmbeds()](#Message+removeEmbeds) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.removeAttachments()](#Message+removeAttachments) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.removeAttachment(attachment)](#Message+removeAttachment) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.reply(options)](#Message+reply) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
  - [.fetchReference()](#Message+fetchReference) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)
  - [.pin(reason)](#Message+pin) ⇒ <code>Promise</code>
  - [.unpin(reason)](#Message+unpin) ⇒ <code>Promise</code>
  - [.inGuild()](#Message+inGuild) ⇒ <code>boolean</code>
  - [.equals(message)](#Message+equals) ⇒ <code>boolean</code> \| <code>null</code>
  - [.createThread([options])](#Message+createThread) ⇒ <code>Promise.&lt;Thread&gt;</code>
  - [.addAttachments(attachments)](#Message+addAttachments) ⇒ <code>Promise</code>

<a name="new_Message_new"></a>

### new Message(data, guildId, channelId, client)

Constructs a new instance of the Message class.

| Param     | Type                | Description                                               |
| --------- | ------------------- | --------------------------------------------------------- |
| data      | <code>Object</code> | The data object containing information about the message. |
| guildId   | <code>string</code> | The ID of the guild the message belongs to.               |
| channelId | <code>string</code> | The ID of the channel the message belongs to.             |
| client    | <code>Client</code> | The client instance.                                      |

<a name="Message+channel"></a>

### message.channel ⇒

Retrieves the channel associated with this object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The channel object if found, otherwise null.  
<a name="Message+guild"></a>

### message.guild ⇒

Retrieves the guild associated with this guildId from the client's guild cache.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The guild object if found, otherwise null.  
<a name="Message+system"></a>

### message.system ⇒ <code>boolean</code> \| <code>null</code>

Get the system value based on the type of the object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> \| <code>null</code> - - The system value. Returns null if the type is not set.  
<a name="Message+author"></a>

### message.author ⇒

Get the author of this object.

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The author of this object.  
<a name="Message+edit"></a>

### message.edit(options) ⇒ <code>Promise</code>

Edits the message with the given options.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - A promise that resolves when the message has been edited.

| Param   | Type                | Description                           |
| ------- | ------------------- | ------------------------------------- |
| options | <code>Object</code> | The options to edit the message with. |

<a name="Message+delete"></a>

### message.delete(reason) ⇒ <code>Promise</code>

Deletes the message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is successfully deleted.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| reason | <code>string</code> | The reason for deleting the message. |

<a name="Message+fetch"></a>

### message.fetch([options]) ⇒ <code>Promise</code>

Fetches messages from the channel using the given options.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves with the fetched messages.

| Param     | Type                | Description                                 |
| --------- | ------------------- | ------------------------------------------- |
| [options] | <code>Object</code> | The options to customize the fetch request. |

<a name="Message+crosspost"></a>

### message.crosspost() ⇒ <code>Promise.&lt;void&gt;</code>

Crossposts a message to another channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the crossposting is complete.  
<a name="Message+react"></a>

### message.react(emoji) ⇒ <code>Promise.&lt;void&gt;</code>

Reacts to a message with the specified emoji.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the reaction is added.

| Param | Type                | Description              |
| ----- | ------------------- | ------------------------ |
| emoji | <code>string</code> | The emoji to react with. |

<a name="Message+removeEmbeds"></a>

### message.removeEmbeds() ⇒ <code>Promise.&lt;void&gt;</code>

Removes embeds from a message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the embeds are successfully removed.  
<a name="Message+removeAttachments"></a>

### message.removeAttachments() ⇒ <code>Promise.&lt;void&gt;</code>

Removes all attachments from the message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the attachments are successfully removed.  
**Throws**:

- <code>RangeError</code> If there are no attachments in the message.

<a name="Message+removeAttachment"></a>

### message.removeAttachment(attachment) ⇒ <code>Promise.&lt;void&gt;</code>

Removes the specified attachment from the message. If no attachment is provided,
all attachments will be removed.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves once the attachment is removed.  
**Throws**:

- <code>RangeError</code> - If the message does not have the specified attachment.

| Param      | Type                                           | Description                                |
| ---------- | ---------------------------------------------- | ------------------------------------------ |
| attachment | <code>string</code> \| <code>Attachment</code> | The attachment or attachment ID to remove. |

<a name="Message+reply"></a>

### message.reply(options) ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)

Sends a reply message to the channel where the original message was received.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: [<code>Promise.&lt;Message&gt;</code>](#Message) - - A promise that resolves to the sent message.

| Param   | Type                | Description                               |
| ------- | ------------------- | ----------------------------------------- |
| options | <code>Object</code> | Additional options for the reply message. |

<a name="Message+fetchReference"></a>

### message.fetchReference() ⇒ [<code>Promise.&lt;Message&gt;</code>](#Message)

Fetches the reference message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: [<code>Promise.&lt;Message&gt;</code>](#Message) - A promise that resolves to the reference message.  
<a name="Message+pin"></a>

### message.pin(reason) ⇒ <code>Promise</code>

Pins the current message to the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the message is successfully pinned.

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| reason | <code>string</code> | The reason for pinning the message. |

<a name="Message+unpin"></a>

### message.unpin(reason) ⇒ <code>Promise</code>

Unpins the current message from the channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the message is successfully unpinned.

| Param  | Type                | Description                           |
| ------ | ------------------- | ------------------------------------- |
| reason | <code>string</code> | The reason for unpinning the message. |

<a name="Message+inGuild"></a>

### message.inGuild() ⇒ <code>boolean</code>

Checks if the current context is within a guild.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> - - True if the context is within a guild, false otherwise.  
<a name="Message+equals"></a>

### message.equals(message) ⇒ <code>boolean</code> \| <code>null</code>

Checks if the given object is equal to this Message object.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>boolean</code> \| <code>null</code> - - Returns true if the objects are equal, false if they are not equal, and null if the given object is not an instance of Message.

| Param   | Type                | Description                                     |
| ------- | ------------------- | ----------------------------------------------- |
| message | <code>Object</code> | The object to compare with this Message object. |

<a name="Message+createThread"></a>

### message.createThread([options]) ⇒ <code>Promise.&lt;Thread&gt;</code>

Creates a new thread in a channel.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise.&lt;Thread&gt;</code> - A promise that resolves with the created thread.

| Param                         | Type                | Description                                                  |
| ----------------------------- | ------------------- | ------------------------------------------------------------ |
| [options]                     | <code>Object</code> | The options for creating the thread.                         |
| [options.reason]              | <code>string</code> | The reason for creating the thread.                          |
| [options.name]                | <code>string</code> | The name of the thread.                                      |
| [options.autoArchiveDuration] | <code>number</code> | The duration in minutes to automatically archive the thread. |
| [options.ratelimit]           | <code>number</code> | The rate limit per user in the thread.                       |

<a name="Message+addAttachments"></a>

### message.addAttachments(attachments) ⇒ <code>Promise</code>

Adds attachments to the message.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: <code>Promise</code> - - A promise that resolves when the attachments have been added.  
**Throws**:

- <code>RangeError</code> - If the message has no attachments or if one of the specified attachments already exists.

| Param       | Type               | Description                                           |
| ----------- | ------------------ | ----------------------------------------------------- |
| attachments | <code>Array</code> | An array of attachment objects to add to the message. |

<a name="MessageComponentInteraction"></a>

## MessageComponentInteraction ⇐ <code>Interaction</code>

Represents a message component interaction.

**Kind**: global class  
**Extends**: <code>Interaction</code>

- [MessageComponentInteraction](#MessageComponentInteraction) ⇐ <code>Interaction</code>
  - [new MessageComponentInteraction([data], guildId, client)](#new_MessageComponentInteraction_new)
  - [.deferUpdate(options)](#MessageComponentInteraction+deferUpdate) ⇒ <code>Promise</code>
  - [.update([options])](#MessageComponentInteraction+update) ⇒ <code>Promise.&lt;(null\|Message)&gt;</code>

<a name="new_MessageComponentInteraction_new"></a>

### new MessageComponentInteraction([data], guildId, client)

Constructs a new instance of the Component class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing component information. |
| guildId | <code>string</code> | The ID of the guild the component belongs to.     |
| client  | <code>Client</code> | The client instance.                              |

<a name="MessageComponentInteraction+deferUpdate"></a>

### messageComponentInteraction.deferUpdate(options) ⇒ <code>Promise</code>

Defers the update of an interaction callback and sends a response to the interaction.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: <code>Promise</code> - A promise that resolves when the update is deferred and the response is sent.

| Param   | Type                | Description                                 |
| ------- | ------------------- | ------------------------------------------- |
| options | <code>Object</code> | Additional options for the deferred update. |

<a name="MessageComponentInteraction+update"></a>

### messageComponentInteraction.update([options]) ⇒ <code>Promise.&lt;(null\|Message)&gt;</code>

Updates the interaction with the specified options.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: <code>Promise.&lt;(null\|Message)&gt;</code> - - A promise that resolves to null or a Message object.  
**Throws**:

- <code>Error</code> - If there is an error while updating the interaction.

| Param     | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| [options] | <code>Object</code> | The options to update the interaction. |

<a name="MessageMentions"></a>

## MessageMentions ⇐ <code>Base</code>

Represents a message mention object.

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageMentions](#MessageMentions) ⇐ <code>Base</code>
  - [new MessageMentions([data], guildId, client)](#new_MessageMentions_new)
  - [.guild](#MessageMentions+guild) ⇒

<a name="new_MessageMentions_new"></a>

### new MessageMentions([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                              |
| ------- | ------------------- | ---------------------------------------- |
| [data]  | <code>Object</code> | The data for the message mention object. |
| guildId | <code>string</code> | The ID of the guild the mention is in.   |
| client  | <code>Client</code> | The client instance.                     |

<a name="MessageMentions+guild"></a>

### messageMentions.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>MessageMentions</code>](#MessageMentions)  
**Returns**: The guild object.

<a name="MessageReaction"></a>

## MessageReaction ⇐ <code>Base</code>

Represents a message reaction.

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageReaction](#MessageReaction) ⇐ <code>Base</code>
  - [new MessageReaction([data], guildId, channelId, messageId, client)](#new_MessageReaction_new)
  - [.channel](#MessageReaction+channel) ⇒
  - [.guild](#MessageReaction+guild) ⇒
  - [.fetch()](#MessageReaction+fetch) ⇒ <code>Promise.&lt;(Reaction\|null)&gt;</code>
  - [.remove()](#MessageReaction+remove) ⇒ <code>Promise.&lt;this&gt;</code>
  - [.\_addUsers(user)](#MessageReaction+_addUsers) ⇒ <code>void</code>
  - [.\_removeUsers(user)](#MessageReaction+_removeUsers) ⇒ <code>void</code>

<a name="new_MessageReaction_new"></a>

### new MessageReaction([data], guildId, channelId, messageId, client)

Constructs a Reaction object.

| Param     | Type                | Description                                    |
| --------- | ------------------- | ---------------------------------------------- |
| [data]    | <code>Object</code> | The data for the message reaction.             |
| guildId   | <code>string</code> | The ID of the guild the reaction belongs to.   |
| channelId | <code>string</code> | The ID of the channel the reaction belongs to. |
| messageId | <code>string</code> | The ID of the message the reaction belongs to. |
| client    | <code>Client</code> | The client instance.                           |

<a name="MessageReaction+channel"></a>

### messageReaction.channel ⇒

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The channel object.  
<a name="MessageReaction+guild"></a>

### messageReaction.guild ⇒

Get the guild associated with this channel.

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The guild object associated with this channel.  
<a name="MessageReaction+fetch"></a>

### messageReaction.fetch() ⇒ <code>Promise.&lt;(Reaction\|null)&gt;</code>

Fetches a message from a channel and retrieves a reaction associated with it.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: <code>Promise.&lt;(Reaction\|null)&gt;</code> - A Promise that resolves to the Reaction object if found, or null if not found.  
<a name="MessageReaction+remove"></a>

### messageReaction.remove() ⇒ <code>Promise.&lt;this&gt;</code>

Removes the reaction associated with this message.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: <code>Promise.&lt;this&gt;</code> - - A promise that resolves to the current instance of the class.  
<a name="MessageReaction+_addUsers"></a>

### messageReaction.\_addUsers(user) ⇒ <code>void</code>

Adds a user to the list of users.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)

| Param | Type              | Description      |
| ----- | ----------------- | ---------------- |
| user  | <code>User</code> | The user to add. |

<a name="MessageReaction+_removeUsers"></a>

### messageReaction.\_removeUsers(user) ⇒ <code>void</code>

Removes a user from the list of users.

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)

| Param | Type              | Description         |
| ----- | ----------------- | ------------------- |
| user  | <code>User</code> | The user to remove. |

<a name="MessageReference"></a>

## MessageReference ⇐ <code>Base</code>

Represents a reference to a message.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name            | Type                                      | Description                                             |
| --------------- | ----------------------------------------- | ------------------------------------------------------- |
| messageId       | <code>string</code> \| <code>null</code>  | The ID of the message.                                  |
| channelId       | <code>string</code> \| <code>null</code>  | The ID of the channel.                                  |
| guildId         | <code>string</code> \| <code>null</code>  | The ID of the guild.                                    |
| failIfNotExists | <code>boolean</code> \| <code>null</code> | Indicates whether to fail if the entity does not exist. |

- [MessageReference](#MessageReference) ⇐ <code>Base</code>
  - [new MessageReference([data], client)](#new_MessageReference_new)
  - [.toJSON()](#MessageReference+toJSON) ⇒ <code>Object</code>

<a name="new_MessageReference_new"></a>

### new MessageReference([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                                 |
| ------ | ------------------- | ----------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object associated with the instance.             |

<a name="MessageReference+toJSON"></a>

### messageReference.toJSON() ⇒ <code>Object</code>

Converts the current object to a JSON representation.

**Kind**: instance method of [<code>MessageReference</code>](#MessageReference)  
**Returns**: <code>Object</code> - - The JSON representation of the object.

<a name="ModalInteraction"></a>

## ModalInteraction ⇐ <code>MessageComponentInteraction</code>

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>

- [ModalInteraction](#ModalInteraction) ⇐ <code>MessageComponentInteraction</code>
  - [new ModalInteraction([data], guildId, client)](#new_ModalInteraction_new)
  - _instance_
    - [.getTextInput(customId, [required])](#ModalInteraction+getTextInput) ⇒ <code>string</code> \| <code>null</code>
    - [.getSelect(customId, [required])](#ModalInteraction+getSelect) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>
  - _static_
    - [.transformResolvedFields(fields)](#ModalInteraction.transformResolvedFields) ⇒ <code>Object</code>

<a name="new_ModalInteraction_new"></a>

### new ModalInteraction([data], guildId, client)

Constructs a new instance of the Input_Text component.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data object for the interaction.                |
| guildId | <code>string</code> | The ID of the guild where the interaction occurred. |
| client  | <code>Client</code> | The client instance.                                |

<a name="ModalInteraction+getTextInput"></a>

### modalInteraction.getTextInput(customId, [required]) ⇒ <code>string</code> \| <code>null</code>

Retrieves the value of a text input field with the specified custom ID.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>string</code> \| <code>null</code> - The value of the text input field, or null if the field is not found and not required.  
**Throws**:

- <code>RangeError</code> If the specified custom ID is not found or if the field is not of type "Input_Text".

| Param      | Type                 | Default            | Description                                                                                                                 |
| ---------- | -------------------- | ------------------ | --------------------------------------------------------------------------------------------------------------------------- |
| customId   | <code>string</code>  |                    | The custom ID of the text input field.                                                                                      |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the text input field is required. If set to true and the field is not found, a RangeError will be thrown. |

<a name="ModalInteraction+getSelect"></a>

### modalInteraction.getSelect(customId, [required]) ⇒ <code>Array.&lt;string&gt;</code> \| <code>null</code>

Retrieves the values of a Select component with the specified custom ID.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>Array.&lt;string&gt;</code> \| <code>null</code> - - The values of the Select component, or null if not found and not required.  
**Throws**:

- <code>RangeError</code> - If the Select component is not found and is required, or if the mode type selected is not String_Select.

| Param      | Type                 | Default            | Description                                         |
| ---------- | -------------------- | ------------------ | --------------------------------------------------- |
| customId   | <code>string</code>  |                    | The custom ID of the Select component.              |
| [required] | <code>boolean</code> | <code>false</code> | Indicates whether the Select component is required. |

<a name="ModalInteraction.transformResolvedFields"></a>

### ModalInteraction.transformResolvedFields(fields) ⇒ <code>Object</code>

Transforms the resolved fields object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.
Also, maps the "components" array and transforms each object by converting the "type" property from a number to its corresponding string value from the ComponentType enum.

**Kind**: static method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: <code>Object</code> - - The transformed fields object.

| Param  | Type                | Description                              |
| ------ | ------------------- | ---------------------------------------- |
| fields | <code>Object</code> | The resolved fields object to transform. |

<a name="NewsChannel"></a>

## NewsChannel ⇐ <code>BaseGuildChannel</code>

Represents a news channel in a guild.

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>

- [NewsChannel](#NewsChannel) ⇐ <code>BaseGuildChannel</code>
  - [new NewsChannel([data], guildId, client)](#new_NewsChannel_new)
  - [.follow(options)](#NewsChannel+follow) ⇒ <code>Promise</code>
  - [.crosspost(message)](#NewsChannel+crosspost) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_NewsChannel_new"></a>

### new NewsChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Client</code> | The client instance associated with the instance. |

<a name="NewsChannel+follow"></a>

### newsChannel.follow(options) ⇒ <code>Promise</code>

Follows the channel using the specified options.

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the channel is successfully followed.

| Param   | Type                | Description                            |
| ------- | ------------------- | -------------------------------------- |
| options | <code>Object</code> | The options for following the channel. |

<a name="NewsChannel+crosspost"></a>

### newsChannel.crosspost(message) ⇒ <code>Promise.&lt;void&gt;</code>

Crossposts a message to another channel.

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the crossposting is complete.

| Param   | Type                 | Description               |
| ------- | -------------------- | ------------------------- |
| message | <code>Message</code> | The message to crosspost. |

<a name="PartialSticker"></a>

## PartialSticker ⇐ <code>Base</code>

Represents a partial sticker object.

**Kind**: global class  
**Extends**: <code>Base</code>

- [PartialSticker](#PartialSticker) ⇐ <code>Base</code>
  - [new PartialSticker([data], client)](#new_PartialSticker_new)
  - [.fetch()](#PartialSticker+fetch) ⇒ <code>Promise</code>

<a name="new_PartialSticker_new"></a>

### new PartialSticker([data], client)

Constructs a new instance of the Sticker class.

| Param  | Type                | Description                                         |
| ------ | ------------------- | --------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the sticker information. |
| client | <code>Client</code> | The client instance.                                |

<a name="PartialSticker+fetch"></a>

### partialSticker.fetch() ⇒ <code>Promise</code>

Fetches a sticker using the client's fetchSticker method.

**Kind**: instance method of [<code>PartialSticker</code>](#PartialSticker)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched sticker.

<a name="PermissionOverwrite"></a>

## PermissionOverwrite ⇐ <code>Base</code>

Represents a permission overwrite for a channel in Discord.

**Kind**: global class  
**Extends**: <code>Base</code>

- [PermissionOverwrite](#PermissionOverwrite) ⇐ <code>Base</code>
  - [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
  - [.channel](#PermissionOverwrite+channel) ⇒
  - [.delete(reason)](#PermissionOverwrite+delete) ⇒ <code>Promise.&lt;boolean&gt;</code>

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)

Constructs a new instance of the Overwrite class.

| Param     | Type                | Description                                                     |
| --------- | ------------------- | --------------------------------------------------------------- |
| [data]    | <code>Object</code> | The data for the permission overwrite.                          |
| channelId | <code>string</code> | The ID of the channel that the permission overwrite belongs to. |
| client    | <code>Client</code> | The client instance.                                            |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒ <code>Promise.&lt;boolean&gt;</code>

Deletes the permission overwrite for this channel.

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: <code>Promise.&lt;boolean&gt;</code> - - A promise that resolves to true if the deletion was successful, or false otherwise.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| reason | <code>string</code> | The reason for deleting the permission overwrite. |

<a name="Presence"></a>

## Presence ⇐ <code>Base</code>

Represents the presence of a user.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name         | Type                                     | Description                             |
| ------------ | ---------------------------------------- | --------------------------------------- |
| partial      | <code>boolean</code>                     | Whether the presence is partial or not. |
| user         | <code>User</code>                        | The user associated with the presence.  |
| status       | <code>string</code> \| <code>null</code> | The status of the user.                 |
| activities   | <code>Array.&lt;Activity&gt;</code>      | The activities of the user.             |
| clientStatus | <code>Object</code> \| <code>null</code> | The client status of the user.          |

<a name="new_Presence_new"></a>

### new Presence([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                      |
| ------ | ------------------- | ------------------------------------------------ |
| [data] | <code>Object</code> | The data object containing presence information. |
| client | <code>Client</code> | The client instance.                             |

<a name="Role"></a>

## Role ⇐ <code>Base</code>

Represents a role in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Role](#Role) ⇐ <code>Base</code>
  - [new Role([data], guildId, client)](#new_Role_new)
  - [.guild](#Role+guild) ⇒
  - [.members](#Role+members) ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code>
  - [.fetch([options])](#Role+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#Role+edit) ⇒ <code>Promise</code>
  - [.delete(reason)](#Role+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.clone()](#Role+clone) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
  - [.setName(name, reason)](#Role+setName) ⇒ <code>Promise</code>
  - [.setPermissions(permissions, reason)](#Role+setPermissions) ⇒ <code>Promise</code>
  - [.setColor(color, reason)](#Role+setColor) ⇒ <code>Promise</code>
  - [.setHoist(hoist, reason)](#Role+setHoist) ⇒ <code>Promise</code>
  - [.setIcon(icon, reason)](#Role+setIcon) ⇒ <code>Promise</code>
  - [.setUnicodeEmoji(unicodeEmoji, reason)](#Role+setUnicodeEmoji) ⇒ <code>Promise</code>
  - [.setMentionable(mentionable, reason)](#Role+setMentionable) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setPosition(position, reason)](#Role+setPosition) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)
  - [.permissionsIn(channel)](#Role+permissionsIn) ⇒ <code>Permissions</code>
  - [.deniedPermissionsIn(channel)](#Role+deniedPermissionsIn) ⇒ <code>PermissionFlags</code> \| <code>null</code>
  - [.iconURL(options)](#Role+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_Role_new"></a>

### new Role([data], guildId, client)

Constructs a new Role object.

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| [data]  | <code>Object</code> | The data for the role.                        |
| guildId | <code>string</code> | The ID of the guild that the role belongs to. |
| client  | <code>Client</code> | The client instance.                          |

<a name="Role+guild"></a>

### role.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: The guild object if found, otherwise null.  
<a name="Role+members"></a>

### role.members ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code>

Retrieves the members of the guild who have the specified role.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: <code>Collection.&lt;Snowflake, GuildMember&gt;</code> - A collection of guild members who have the role.  
<a name="Role+fetch"></a>

### role.fetch([options]) ⇒ <code>Promise</code>

Fetches the roles for the guild.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched roles.

| Param     | Type                | Description                                  |
| --------- | ------------------- | -------------------------------------------- |
| [options] | <code>Object</code> | Optional parameters for the fetch operation. |

<a name="Role+edit"></a>

### role.edit(options) ⇒ <code>Promise</code>

Edits the role with the specified options.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the role has been edited.

| Param   | Type                | Description                        |
| ------- | ------------------- | ---------------------------------- |
| options | <code>Object</code> | The options to edit the role with. |

<a name="Role+delete"></a>

### role.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the role from the guild.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the role is deleted.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| reason | <code>string</code> | The reason for deleting the role. |

<a name="Role+clone"></a>

### role.clone() ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)

Clones the current role.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: [<code>Promise.&lt;Role&gt;</code>](#Role) - A promise that resolves to the cloned role.  
<a name="Role+setName"></a>

### role.setName(name, reason) ⇒ <code>Promise</code>

Sets the name of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the name is successfully set.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| name   | <code>string</code> | The new name to set.              |
| reason | <code>string</code> | The reason for changing the name. |

<a name="Role+setPermissions"></a>

### role.setPermissions(permissions, reason) ⇒ <code>Promise</code>

Sets the permissions for an entity with the given reason.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the permissions are set.

| Param       | Type                | Description                             |
| ----------- | ------------------- | --------------------------------------- |
| permissions | <code>Object</code> | The permissions to set for the entity.  |
| reason      | <code>string</code> | The reason for setting the permissions. |

<a name="Role+setColor"></a>

### role.setColor(color, reason) ⇒ <code>Promise</code>

Sets the color of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the color is successfully set.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| color  | <code>string</code> | The new color to set.            |
| reason | <code>string</code> | The reason for the color change. |

<a name="Role+setHoist"></a>

### role.setHoist(hoist, reason) ⇒ <code>Promise</code>

Sets the hoist value and reason for a specific item.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - - A promise that resolves when the hoist value is set.

| Param  | Type                 | Description                             |
| ------ | -------------------- | --------------------------------------- |
| hoist  | <code>boolean</code> | The hoist value to set.                 |
| reason | <code>string</code>  | The reason for setting the hoist value. |

<a name="Role+setIcon"></a>

### role.setIcon(icon, reason) ⇒ <code>Promise</code>

Sets the icon of an object and provides a reason for the change.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the icon is successfully set.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| icon   | <code>any</code>    | The new icon to set.              |
| reason | <code>string</code> | The reason for changing the icon. |

<a name="Role+setUnicodeEmoji"></a>

### role.setUnicodeEmoji(unicodeEmoji, reason) ⇒ <code>Promise</code>

Sets the unicode emoji for an entity.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise</code> - A promise that resolves when the unicode emoji is set.

| Param        | Type                | Description                               |
| ------------ | ------------------- | ----------------------------------------- |
| unicodeEmoji | <code>string</code> | The unicode emoji to set.                 |
| reason       | <code>string</code> | The reason for setting the unicode emoji. |

<a name="Role+setMentionable"></a>

### role.setMentionable(mentionable, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the mentionable status of an entity.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the mentionable status is set.

| Param       | Type                 | Description                                      |
| ----------- | -------------------- | ------------------------------------------------ |
| mentionable | <code>boolean</code> | Whether the entity should be mentionable or not. |
| reason      | <code>string</code>  | The reason for setting the mentionable status.   |

<a name="Role+setPosition"></a>

### role.setPosition(position, reason) ⇒ [<code>Promise.&lt;Role&gt;</code>](#Role)

Sets the position of the role within the guild's role hierarchy.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: [<code>Promise.&lt;Role&gt;</code>](#Role) - - A promise that resolves to the modified Role object.

| Param    | Type                | Description                                   |
| -------- | ------------------- | --------------------------------------------- |
| position | <code>number</code> | The new position of the role.                 |
| reason   | <code>string</code> | The reason for modifying the role's position. |

<a name="Role+permissionsIn"></a>

### role.permissionsIn(channel) ⇒ <code>Permissions</code>

Retrieves the permissions of the bot in the specified channel.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>Permissions</code> - - The permissions of the bot in the channel.  
**Throws**:

- <code>RangeError</code> - If the channel is not cached.

| Param   | Type                                        | Description                          |
| ------- | ------------------------------------------- | ------------------------------------ |
| channel | <code>string</code> \| <code>Channel</code> | The channel to check permissions in. |

<a name="Role+deniedPermissionsIn"></a>

### role.deniedPermissionsIn(channel) ⇒ <code>PermissionFlags</code> \| <code>null</code>

Retrieves the denied permissions for the specified channel.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>PermissionFlags</code> \| <code>null</code> - - The denied permissions for the channel, or null if no permissions are found.  
**Throws**:

- <code>RangeError</code> - If the channel is not cached.

| Param   | Type                                        | Description                                                 |
| ------- | ------------------------------------------- | ----------------------------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID to retrieve the permissions from. |

<a name="Role+iconURL"></a>

### role.iconURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the icon for this role.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the icon, or null if no icon is available.

| Param             | Type                 | Description                                                        |
| ----------------- | -------------------- | ------------------------------------------------------------------ |
| options           | <code>Object</code>  | An optional object containing additional options for the icon URL. |
| [options.dynamic] | <code>boolean</code> | Whether the icon should be dynamically generated.                  |
| [options.size]    | <code>number</code>  | The desired size of the icon.                                      |
| [options.format]  | <code>string</code>  | The desired format of the icon.                                    |

<a name="RolePrompts"></a>

## RolePrompts ⇐ <code>Base</code>

Represents a RolePrompts object that extends the Base class.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name        | Type                                      | Description                                            |
| ----------- | ----------------------------------------- | ------------------------------------------------------ |
| partial     | <code>boolean</code>                      | Indicates if the RolePrompts object is partial or not. |
| guildId     | <code>string</code>                       | The ID of the guild associated with the RolePrompts.   |
| description | <code>string</code> \| <code>null</code>  | The description of the RolePrompts.                    |
|             | <code>boolean</code> \| <code>null</code> |                                                        |

- [RolePrompts](#RolePrompts) ⇐ <code>Base</code>
  - [new RolePrompts([data], guildId, client)](#new_RolePrompts_new)
  - _instance_
    - [.guild](#RolePrompts+guild) ⇒
  - _static_
    - [.transformRolesData(roles)](#RolePrompts.transformRolesData) ⇒ <code>Object</code>

<a name="new_RolePrompts_new"></a>

### new RolePrompts([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                   |
| ------- | ------------------- | ------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the properties of the RolePrompts. |
| guildId | <code>string</code> | The ID of the guild associated with the RolePrompts.          |
| client  | <code>Client</code> | The client object associated with the RolePrompts.            |

<a name="RolePrompts+guild"></a>

### rolePrompts.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: The guild object.  
<a name="RolePrompts.transformRolesData"></a>

### RolePrompts.transformRolesData(roles) ⇒ <code>Object</code>

Transforms the roles data object by extracting specific properties and assigning default values if necessary.

**Kind**: static method of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: <code>Object</code> - - The transformed roles data object with extracted properties and default values.

| Param | Type                | Description            |
| ----- | ------------------- | ---------------------- |
| roles | <code>Object</code> | The roles data object. |

<a name="SelectMenuInteraction"></a>

## SelectMenuInteraction ⇐ <code>MessageComponentInteraction</code>

Represents an interaction with a select menu component.

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>  
<a name="new_SelectMenuInteraction_new"></a>

### new SelectMenuInteraction([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                       |
| ------- | ------------------- | --------------------------------- |
| [data]  | <code>Object</code> | The data object for the instance. |
| guildId | <code>string</code> | The ID of the guild.              |
| client  | <code>Client</code> | The client instance.              |

<a name="Slash"></a>

## Slash ⇐ <code>Base</code>

Represents a Slash command.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Constructor.**:  
**Properties**

| Name                     | Type                                   | Description                                          |
| ------------------------ | -------------------------------------- | ---------------------------------------------------- |
| type                     | <code>string</code>                    | The type of the Slash command.                       |
| name                     | <code>string</code>                    | The name of the Slash command.                       |
| description              | <code>string</code>                    | The description of the Slash command.                |
| options                  | <code>Array.&lt;SlashOption&gt;</code> | The options of the Slash command.                    |
| defaultMemberPermissions | <code>boolean</code>                   | The default member permissions of the Slash command. |

<a name="new_Slash_new"></a>

### new Slash([data], client)

Constructs a new instance of the ApplicationCommand class

| Param  | Type                | Description                                                     |
| ------ | ------------------- | --------------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing information about the Slash command. |
| client | <code>Client</code> | The client object.                                              |

<a name="SlashOption"></a>

## SlashOption ⇐ <code>Base</code>

Represents a slash command option.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name         | Type                              | Description                                      |
| ------------ | --------------------------------- | ------------------------------------------------ |
| type         | <code>string</code>               | The type of the option.                          |
| name         | <code>string</code>               | The name of the option.                          |
| description  | <code>string</code>               | The description of the option.                   |
| required     | <code>boolean</code>              | Whether the option is required or not.           |
| choices      | <code>Array.&lt;Object&gt;</code> | The choices available for the option.            |
| channelTypes | <code>Array.&lt;string&gt;</code> | The types of channels the option can be used in. |
| minValue     | <code>number</code>               |                                                  |

- [SlashOption](#SlashOption) ⇐ <code>Base</code>
  - [new SlashOption([data], client)](#new_SlashOption_new)
  - [.transformChoices(o)](#SlashOption.transformChoices) ⇒ <code>Object</code>
  - [.transformChannelTypes(channel)](#SlashOption.transformChannelTypes) ⇒ <code>string</code> \| <code>object</code>

<a name="new_SlashOption_new"></a>

### new SlashOption([data], client)

Constructs a new instance of the SlashOption class.

| Param  | Type                | Description                                       |
| ------ | ------------------- | ------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the option properties. |
| client | <code>Client</code> | The client object.                                |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices(o) ⇒ <code>Object</code>

Transforms an object into a new object with the properties "name" and "value".
If the original object does not have a "name" or "value" property, the corresponding
property in the new object will be set to undefined.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>Object</code> - - The transformed object with "name" and "value" properties.

| Param | Type                | Description                       |
| ----- | ------------------- | --------------------------------- |
| o     | <code>Object</code> | The original object to transform. |

<a name="SlashOption.transformChannelTypes"></a>

### SlashOption.transformChannelTypes(channel) ⇒ <code>string</code> \| <code>object</code>

Transforms the channel type from a number to its corresponding string representation.

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: <code>string</code> \| <code>object</code> - - The transformed channel type.

| Param   | Type                                       | Description                                                                                                                                         |
| ------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------- |
| channel | <code>number</code> \| <code>object</code> | The channel type to transform. If it is a number, it will be converted to its string representation. If it is an object, it will be returned as is. |

<a name="SlashSubCommand"></a>

## SlashSubCommand ⇐ <code>Base</code>

Represents a sub-command for a slash command.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name        | Type                                          | Description                         |
| ----------- | --------------------------------------------- | ----------------------------------- |
| type        | <code>string</code>                           | The type of the sub-command.        |
| name        | <code>string</code> \| <code>undefined</code> | The name of the sub-command.        |
| description | <code>string</code> \| <code>undefined</code> | The description of the sub-command. |
| options     | <code>RaidenCol</code>                        | The options for the sub-command.    |

<a name="new_SlashSubCommand_new"></a>

### new SlashSubCommand([data], client)

Constructs a new Sub_Command object.

| Param  | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| [data] | <code>Object</code> | The data for the sub-command. |
| client | <code>Client</code> | The client object.            |

<a name="SlashSubCommandGroups"></a>

## SlashSubCommandGroups ⇐ <code>Base</code>

Represents a sub-command group for a slash command.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_SlashSubCommandGroups_new"></a>

### new SlashSubCommandGroups([data], client)

Constructs a new instance of the Sub_Command_Group class.

| Param  | Type                | Description                         |
| ------ | ------------------- | ----------------------------------- |
| [data] | <code>Object</code> | The data for the sub-command group. |
| client | <code>Client</code> | The client object.                  |

<a name="StageChannel"></a>

## StageChannel ⇐ <code>VoiceBasedChannels</code>

Represents a stage channel, which is a type of voice-based channel.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>

- [StageChannel](#StageChannel) ⇐ <code>VoiceBasedChannels</code>
  - [new StageChannel([data], guildId, client)](#new_StageChannel_new)
  - [.stageInstance](#StageChannel+stageInstance) ⇒ <code>StageInstance</code> \| <code>null</code>
  - [.createStageInstance(options)](#StageChannel+createStageInstance) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

<a name="new_StageChannel_new"></a>

### new StageChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Client</code> | The client instance associated with the instance. |

<a name="StageChannel+stageInstance"></a>

### stageChannel.stageInstance ⇒ <code>StageInstance</code> \| <code>null</code>

Retrieves the stage instance associated with the channel.

**Kind**: instance property of [<code>StageChannel</code>](#StageChannel)  
**Returns**: <code>StageInstance</code> \| <code>null</code> - The stage instance object if found, otherwise null.  
<a name="StageChannel+createStageInstance"></a>

### stageChannel.createStageInstance(options) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

Creates a stage instance in the specified channel.

**Kind**: instance method of [<code>StageChannel</code>](#StageChannel)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves to the created stage instance.

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| options | <code>Object</code> | The options for creating the stage instance. |

<a name="StageInstance"></a>

## StageInstance ⇐ <code>Base</code>

Represents a Stage Instance in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StageInstance](#StageInstance) ⇐ <code>Base</code>
  - [new StageInstance([data], guildId, client)](#new_StageInstance_new)
  - [.guild](#StageInstance+guild) ⇒
  - [.channel](#StageInstance+channel) ⇒
  - [.guildScheduledEvent](#StageInstance+guildScheduledEvent) ⇒ <code>ScheduledEvent</code> \| <code>null</code>
  - [.fetch(options)](#StageInstance+fetch) ⇒ [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance)
  - [.edit(options)](#StageInstance+edit) ⇒ <code>Promise</code>
  - [.delete(reason)](#StageInstance+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setTopic(topic, reason)](#StageInstance+setTopic) ⇒ <code>Promise</code>
  - [.setPrivacyLevel(privacyLevel, reason)](#StageInstance+setPrivacyLevel) ⇒ <code>Promise</code>

<a name="new_StageInstance_new"></a>

### new StageInstance([data], guildId, client)

Constructs a new instance of a Channel object.

| Param   | Type                | Description                                        |
| ------- | ------------------- | -------------------------------------------------- |
| [data]  | <code>Object</code> | The data for the Stage Instance.                   |
| guildId | <code>string</code> | The ID of the guild the Stage Instance belongs to. |
| client  | <code>Client</code> | The client instance.                               |

<a name="StageInstance+guild"></a>

### stageInstance.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guild object if found, otherwise null.  
<a name="StageInstance+channel"></a>

### stageInstance.channel ⇒

Retrieves the channel associated with this object.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The channel object if found, otherwise null.  
<a name="StageInstance+guildScheduledEvent"></a>

### stageInstance.guildScheduledEvent ⇒ <code>ScheduledEvent</code> \| <code>null</code>

Retrieves the scheduled event associated with the guild.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>ScheduledEvent</code> \| <code>null</code> - The scheduled event object if found, otherwise null.  
<a name="StageInstance+fetch"></a>

### stageInstance.fetch(options) ⇒ [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance)

Fetches the stage instance for the given channel ID using the provided options.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: [<code>Promise.&lt;StageInstance&gt;</code>](#StageInstance) - A promise that resolves with the fetched stage instance.

| Param   | Type                | Description                               |
| ------- | ------------------- | ----------------------------------------- |
| options | <code>Object</code> | The options to pass to the fetch request. |

<a name="StageInstance+edit"></a>

### stageInstance.edit(options) ⇒ <code>Promise</code>

Edits the stage instance with the given options.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - A promise that resolves when the stage instance is successfully edited.

| Param   | Type                | Description                             |
| ------- | ------------------- | --------------------------------------- |
| options | <code>Object</code> | The options to edit the stage instance. |

<a name="StageInstance+delete"></a>

### stageInstance.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the stage instance associated with the channel.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the stage instance is deleted.

| Param  | Type                | Description                                 |
| ------ | ------------------- | ------------------------------------------- |
| reason | <code>string</code> | The reason for deleting the stage instance. |

<a name="StageInstance+setTopic"></a>

### stageInstance.setTopic(topic, reason) ⇒ <code>Promise</code>

Sets the topic of the current object and provides a reason for the change.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - - A promise that resolves when the topic is successfully set.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| topic  | <code>string</code> | The new topic to set.              |
| reason | <code>string</code> | The reason for changing the topic. |

<a name="StageInstance+setPrivacyLevel"></a>

### stageInstance.setPrivacyLevel(privacyLevel, reason) ⇒ <code>Promise</code>

Sets the privacy level for the current user.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: <code>Promise</code> - - A promise that resolves when the privacy level is successfully set.

| Param        | Type                | Description                               |
| ------------ | ------------------- | ----------------------------------------- |
| privacyLevel | <code>string</code> | The privacy level to set.                 |
| reason       | <code>string</code> | The reason for setting the privacy level. |

<a name="Sticker"></a>

## Sticker ⇐ <code>Base</code>

Represents a Sticker object, extending the Base class.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Sticker](#Sticker) ⇐ <code>Base</code>
  - [new Sticker([data], guildId, client)](#new_Sticker_new)
  - [.guild](#Sticker+guild) ⇒
  - [.fetch(options)](#Sticker+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#Sticker+edit) ⇒ <code>Promise</code>
  - [.delete(reason)](#Sticker+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setName(name, reason)](#Sticker+setName) ⇒ <code>Promise</code>
  - [.setDescription(description, reason)](#Sticker+setDescription) ⇒ <code>Promise</code>
  - [.setTags(tags, reason)](#Sticker+setTags) ⇒ <code>Promise</code>
  - [.fetchPack()](#Sticker+fetchPack) ⇒ <code>Promise.&lt;(NitroPack\|null)&gt;</code>
  - [.imageURL(options)](#Sticker+imageURL) ⇒ <code>string</code>
  - [.equals(sticker)](#Sticker+equals) ⇒ <code>boolean</code>

<a name="new_Sticker_new"></a>

### new Sticker([data], guildId, client)

Constructs a Sticker object.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the sticker information. |
| guildId | <code>string</code> | The ID of the guild the sticker belongs to.         |
| client  | <code>Client</code> | The client instance.                                |

<a name="Sticker+guild"></a>

### sticker.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>Sticker</code>](#Sticker)  
**Returns**: The guild object if found, otherwise null.  
<a name="Sticker+fetch"></a>

### sticker.fetch(options) ⇒ <code>Promise</code>

Fetches stickers from the guild using the provided options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched stickers.

| Param   | Type                | Description                            |
| ------- | ------------------- | -------------------------------------- |
| options | <code>Object</code> | The options for fetching the stickers. |

<a name="Sticker+edit"></a>

### sticker.edit(options) ⇒ <code>Promise</code>

Edits the sticker with the given options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - A promise that resolves when the sticker is successfully edited.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| options | <code>Object</code> | The options to edit the sticker. |

<a name="Sticker+delete"></a>

### sticker.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the sticker from the guild.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the sticker is deleted.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| reason | <code>string</code> | The reason for deleting the sticker. |

<a name="Sticker+setName"></a>

### sticker.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Sticker+setDescription"></a>

### sticker.setDescription(description, reason) ⇒ <code>Promise</code>

Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.

| Param       | Type                | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| description | <code>string</code> | The new description to set.              |
| reason      | <code>string</code> | The reason for updating the description. |

<a name="Sticker+setTags"></a>

### sticker.setTags(tags, reason) ⇒ <code>Promise</code>

Sets the tags of an object and provides a reason for the change.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise</code> - - A promise that resolves when the tags are successfully set.

| Param  | Type                | Description                |
| ------ | ------------------- | -------------------------- |
| tags   | <code>Array</code>  | The new tags to set.       |
| reason | <code>string</code> | The reason for the change. |

<a name="Sticker+fetchPack"></a>

### sticker.fetchPack() ⇒ <code>Promise.&lt;(NitroPack\|null)&gt;</code>

Fetches the Nitro Pack with the specified packId from the client.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>Promise.&lt;(NitroPack\|null)&gt;</code> - A promise that resolves to the Nitro Pack object if found, or null if not found.  
<a name="Sticker+imageURL"></a>

### sticker.imageURL(options) ⇒ <code>string</code>

Generates the URL for the sticker image with the specified options.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>string</code> - The URL of the sticker image.

| Param            | Type                | Description                         |
| ---------------- | ------------------- | ----------------------------------- |
| options          | <code>Object</code> | The options for generating the URL. |
| [options.size]   | <code>string</code> | The desired size of the image.      |
| [options.format] | <code>string</code> | The desired format of the image.    |

<a name="Sticker+equals"></a>

### sticker.equals(sticker) ⇒ <code>boolean</code>

Checks if the given object is equal to this sticker.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: <code>boolean</code> - - True if the objects are equal, false otherwise.

| Param   | Type                             | Description                              |
| ------- | -------------------------------- | ---------------------------------------- |
| sticker | [<code>Sticker</code>](#Sticker) | The object to compare with this sticker. |

<a name="StickerPack"></a>

## StickerPack ⇐ <code>Base</code>

Represents a sticker pack.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StickerPack](#StickerPack) ⇐ <code>Base</code>
  - [new StickerPack([data], client)](#new_StickerPack_new)
  - [.fetch()](#StickerPack+fetch) ⇒ <code>Promise.&lt;(Sticker\|null)&gt;</code>
  - [.bannerURL(options)](#StickerPack+bannerURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_StickerPack_new"></a>

### new StickerPack([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                                 |
| ------ | ------------------- | ----------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object.                                          |

<a name="StickerPack+fetch"></a>

### stickerPack.fetch() ⇒ <code>Promise.&lt;(Sticker\|null)&gt;</code>

Fetches the nitro pack with the specified ID from the client's nitro packs.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: <code>Promise.&lt;(Sticker\|null)&gt;</code> - A promise that resolves to the found nitro pack or null if not found.  
<a name="StickerPack+bannerURL"></a>

### stickerPack.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>

Retrieves the URL of the banner image for the sticker pack.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the banner image, or null if the bannerAssetId is not set.

| Param          | Type                | Description                             |
| -------------- | ------------------- | --------------------------------------- |
| options        | <code>Object</code> | The options for the banner image.       |
| options.size   | <code>string</code> | The desired size of the banner image.   |
| options.format | <code>string</code> | The desired format of the banner image. |

<a name="Team"></a>

## Team ⇐ <code>Base</code>

Represents a team object.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name             | Type                                          | Description                                |
| ---------------- | --------------------------------------------- | ------------------------------------------ |
| icon             | <code>string</code> \| <code>undefined</code> | The icon of the team.                      |
| id               | <code>string</code> \| <code>undefined</code> | The ID of the team.                        |
| members          | <code>RaidenCol</code>                        | A collection of team members.              |
| createdAt        | <code>Date</code> \| <code>undefined</code>   | The creation date of the team.             |
| createdTimestamp | <code>number</code> \| <code>undefined</code> | The timestamp of the team's creation date. |
| name             | <code>string</code> \| <code>undefined</code> | The name of the team.                      |

- [Team](#Team) ⇐ <code>Base</code>
  - [new Team([data], client)](#new_Team_new)
  - [.iconURL(options)](#Team+iconURL) ⇒ <code>string</code> \| <code>null</code>

<a name="new_Team_new"></a>

### new Team([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                      |
| ------ | ------------------- | ------------------------------------------------ |
| [data] | <code>Object</code> | The data object containing the team information. |
| client | <code>Client</code> | The client object.                               |

<a name="Team+iconURL"></a>

### team.iconURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the icon for this team.

**Kind**: instance method of [<code>Team</code>](#Team)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the team's icon, or null if no icon is available.

| Param             | Type                 | Description                                       |
| ----------------- | -------------------- | ------------------------------------------------- |
| options           | <code>Object</code>  | Optional parameters for customizing the icon URL. |
| [options.dynamic] | <code>boolean</code> | Whether to use a dynamic icon.                    |
| [options.size]    | <code>number</code>  | The desired size of the icon.                     |
| [options.format]  | <code>string</code>  | The desired format of the icon.                   |

<a name="TeamMember"></a>

## TeamMember ⇐ <code>Base</code>

Represents a team member.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name        | Type                                              | Description                                    |
| ----------- | ------------------------------------------------- | ---------------------------------------------- |
| state       | <code>MembershipState</code> \| <code>null</code> | The membership state of the team member.       |
| permissions | <code>Object</code> \| <code>undefined</code>     | The permissions of the team member.            |
| teamId      | <code>string</code> \| <code>null</code>          | The ID of the team that the member belongs to. |
| user        | <code>User</code> \| <code>null</code>            | The user object representing the team member.  |

<a name="new_TeamMember_new"></a>

### new TeamMember([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                                   |
| ------ | ------------------- | ------------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing information about the team member. |
| client | <code>Client</code> | The client object.                                            |

<a name="TextBasedChannels"></a>

## TextBasedChannels

**Kind**: global class

- [TextBasedChannels](#TextBasedChannels)
  - [new TextBasedChannels([data], guildId, client)](#new_TextBasedChannels_new)
  - [.messages](#TextBasedChannels+messages) ⇒ <code>MessageManager</code>
  - [.send(options)](#TextBasedChannels+send) ⇒ <code>Promise</code>
  - [.bulkDelete(messages, reason)](#TextBasedChannels+bulkDelete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setNsfw(nsfw, reason)](#TextBasedChannels+setNsfw) ⇒ <code>Promise</code>
  - [.setRateLimitPerUser(ratelimit, reason)](#TextBasedChannels+setRateLimitPerUser) ⇒ <code>Promise</code>
  - [.triggerTyping()](#TextBasedChannels+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_TextBasedChannels_new"></a>

### new TextBasedChannels([data], guildId, client)

Constructs a new instance of the Channel class.

| Param   | Type                | Description                                         |
| ------- | ------------------- | --------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the channel information. |
| guildId | <code>string</code> | The ID of the guild that the channel belongs to.    |
| client  | <code>Client</code> | The client instance.                                |

<a name="TextBasedChannels+messages"></a>

### textBasedChannels.messages ⇒ <code>MessageManager</code>

Get the message manager for this channel.

**Kind**: instance property of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>MessageManager</code> - The message manager object for this channel.  
<a name="TextBasedChannels+send"></a>

### textBasedChannels.send(options) ⇒ <code>Promise</code>

Sends a message using the specified options.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>object</code> | The options for sending the message. |

<a name="TextBasedChannels+bulkDelete"></a>

### textBasedChannels.bulkDelete(messages, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Bulk deletes the specified messages from the channel.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the messages are deleted.

| Param    | Type                               | Description                           |
| -------- | ---------------------------------- | ------------------------------------- |
| messages | <code>Array.&lt;Message&gt;</code> | The messages to delete.               |
| reason   | <code>string</code>                | The reason for deleting the messages. |

<a name="TextBasedChannels+setNsfw"></a>

### textBasedChannels.setNsfw(nsfw, reason) ⇒ <code>Promise</code>

Sets the NSFW (Not Safe for Work) flag for the current item.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the NSFW flag is successfully set.

| Param  | Type                 | Description                           |
| ------ | -------------------- | ------------------------------------- |
| nsfw   | <code>boolean</code> | The NSFW flag value to set.           |
| reason | <code>string</code>  | The reason for setting the NSFW flag. |

<a name="TextBasedChannels+setRateLimitPerUser"></a>

### textBasedChannels.setRateLimitPerUser(ratelimit, reason) ⇒ <code>Promise</code>

Sets the rate limit per user for a specific action.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the rate limit is successfully set.

| Param     | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| ratelimit | <code>number</code> | The new rate limit value to set.       |
| reason    | <code>string</code> | The reason for setting the rate limit. |

<a name="TextBasedChannels+triggerTyping"></a>

### textBasedChannels.triggerTyping() ⇒ <code>Promise.&lt;void&gt;</code>

Triggers a typing indicator in the channel where this method is called.

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.

<a name="TextChannel"></a>

## TextChannel ⇐ <code>BaseGuildChannel</code>

Represents a text channel in a guild.

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>  
<a name="new_TextChannel_new"></a>

### new TextChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                           |
| ------- | ------------------- | ----------------------------------------------------- |
| [data]  | <code>Object</code> | The data for the text channel.                        |
| guildId | <code>string</code> | The ID of the guild that the text channel belongs to. |
| client  | <code>Client</code> | The client instance.                                  |

<a name="ThreadChannel"></a>

## ThreadChannel ⇐ <code>TextBasedChannels</code>

Represents a thread channel in Discord.

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>

- [ThreadChannel](#ThreadChannel) ⇐ <code>TextBasedChannels</code>
  - [new ThreadChannel([data], guildId, client)](#new_ThreadChannel_new)
  - [.join()](#ThreadChannel+join) ⇒ <code>Promise.&lt;Group&gt;</code>
  - [.add(member)](#ThreadChannel+add) ⇒ <code>Promise</code>
  - [.remove(user)](#ThreadChannel+remove) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.fetchOwner(options)](#ThreadChannel+fetchOwner) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>
  - [.setArchived(archived, reason)](#ThreadChannel+setArchived) ⇒ <code>Promise</code>
  - [.setLocked(locked, reason)](#ThreadChannel+setLocked) ⇒ <code>Promise</code>
  - [.setAutoArchiveDuration(autoArchiveDuration, reason)](#ThreadChannel+setAutoArchiveDuration) ⇒ <code>Promise</code>
  - [.setInvitable(invitable, reason)](#ThreadChannel+setInvitable) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setFlags(flags, reason)](#ThreadChannel+setFlags) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_ThreadChannel_new"></a>

### new ThreadChannel([data], guildId, client)

Constructs a new instance of the ThreadChannel class.

| Param   | Type                | Description                                                      |
| ------- | ------------------- | ---------------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing information about the thread channel. |
| guildId | <code>string</code> | The ID of the guild that the thread channel belongs to.          |
| client  | <code>Client</code> | The client instance.                                             |

<a name="ThreadChannel+join"></a>

### threadChannel.join() ⇒ <code>Promise.&lt;Group&gt;</code>

Asynchronously joins all members of a group.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;Group&gt;</code> - A promise that resolves to the joined group.  
<a name="ThreadChannel+add"></a>

### threadChannel.add(member) ⇒ <code>Promise</code>

Adds a member to the collection asynchronously.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the member is added.

| Param  | Type                     | Description        |
| ------ | ------------------------ | ------------------ |
| member | <code>GuildMember</code> | The member to add. |

<a name="ThreadChannel+remove"></a>

### threadChannel.remove(user) ⇒ <code>Promise.&lt;void&gt;</code>

Removes a user from the members list.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user is successfully removed.

| Param | Type              | Description         |
| ----- | ----------------- | ------------------- |
| user  | <code>User</code> | The user to remove. |

<a name="ThreadChannel+fetchOwner"></a>

### threadChannel.fetchOwner(options) ⇒ <code>Promise.&lt;(Object\|null)&gt;</code>

Fetches the owner of the object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;(Object\|null)&gt;</code> - - A promise that resolves to the owner object if found, or null if the ownerId is not set.

| Param   | Type                | Description                                 |
| ------- | ------------------- | ------------------------------------------- |
| options | <code>Object</code> | Additional options for the fetch operation. |

<a name="ThreadChannel+setArchived"></a>

### threadChannel.setArchived(archived, reason) ⇒ <code>Promise</code>

Sets the archived status and reason for an item.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the item is successfully edited.

| Param    | Type                 | Description                        |
| -------- | -------------------- | ---------------------------------- |
| archived | <code>boolean</code> | The archived status to set.        |
| reason   | <code>string</code>  | The reason for archiving the item. |

<a name="ThreadChannel+setLocked"></a>

### threadChannel.setLocked(locked, reason) ⇒ <code>Promise</code>

Sets the locked status and reason for an item.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param  | Type                 | Description                      |
| ------ | -------------------- | -------------------------------- |
| locked | <code>boolean</code> | The locked status to set.        |
| reason | <code>string</code>  | The reason for locking the item. |

<a name="ThreadChannel+setAutoArchiveDuration"></a>

### threadChannel.setAutoArchiveDuration(autoArchiveDuration, reason) ⇒ <code>Promise</code>

Sets the auto archive duration for a specific item and provides a reason for the change.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the operation is complete.

| Param               | Type                | Description                                        |
| ------------------- | ------------------- | -------------------------------------------------- |
| autoArchiveDuration | <code>number</code> | The new auto archive duration in seconds.          |
| reason              | <code>string</code> | The reason for changing the auto archive duration. |

<a name="ThreadChannel+setInvitable"></a>

### threadChannel.setInvitable(invitable, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the invitable property and reason for the object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the edit is complete.

| Param     | Type                 | Description                               |
| --------- | -------------------- | ----------------------------------------- |
| invitable | <code>boolean</code> | The new value for the invitable property. |
| reason    | <code>string</code>  | The reason for the change.                |

<a name="ThreadChannel+setFlags"></a>

### threadChannel.setFlags(flags, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the flags and reason for an object.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the flags are set.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| flags  | <code>any</code>    | The flags to set.                 |
| reason | <code>string</code> | The reason for setting the flags. |

<a name="ThreadMember"></a>

## ThreadMember

**Kind**: global class

- [ThreadMember](#ThreadMember)
  - [new ThreadMember([data], guildId, threadId, client)](#new_ThreadMember_new)
  - [.guild](#ThreadMember+guild) ⇒
  - [.thread](#ThreadMember+thread) ⇒
  - [.user](#ThreadMember+user) ⇒
  - [.remove()](#ThreadMember+remove) ⇒

<a name="new_ThreadMember_new"></a>

### new ThreadMember([data], guildId, threadId, client)

"This function is used to create a new ThreadMember object, which is used to represent a member of
a thread."

| Param    | Description                              |
| -------- | ---------------------------------------- |
| [data]   | The data that was received from the API. |
| guildId  | The ID of the guild the thread is in.    |
| threadId | The ID of the thread                     |
| client   | Discord.Client                           |

<a name="ThreadMember+guild"></a>

### threadMember.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The guild object.  
<a name="ThreadMember+thread"></a>

### threadMember.thread ⇒

It returns the channel object of the thread.

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The thread channel.  
<a name="ThreadMember+user"></a>

### threadMember.user ⇒

It returns the user object of the user who sent the message

**Kind**: instance property of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The user object.  
<a name="ThreadMember+remove"></a>

### threadMember.remove() ⇒

It removes a user from a thread

**Kind**: instance method of [<code>ThreadMember</code>](#ThreadMember)  
**Returns**: The thread member object.

<a name="TriggeredAutoModRule"></a>

## TriggeredAutoModRule ⇐ <code>Base</code>

Represents a triggered auto moderation rule.

**Kind**: global class  
**Extends**: <code>Base</code>

- [TriggeredAutoModRule](#TriggeredAutoModRule) ⇐ <code>Base</code>
  - [new TriggeredAutoModRule([data], guildId, client)](#new_TriggeredAutoModRule_new)
  - [.guild](#TriggeredAutoModRule+guild) ⇒
  - [.channel](#TriggeredAutoModRule+channel) ⇒
  - [.user](#TriggeredAutoModRule+user) ⇒
  - [.message](#TriggeredAutoModRule+message) ⇒
  - [.fetch(options)](#TriggeredAutoModRule+fetch) ⇒ <code>Promise</code>
  - [.edit(options)](#TriggeredAutoModRule+edit) ⇒ <code>Promise</code>
  - [.delete(reason)](#TriggeredAutoModRule+delete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setName(name, reason)](#TriggeredAutoModRule+setName) ⇒ <code>Promise</code>
  - [.setEventType(eventType, reason)](#TriggeredAutoModRule+setEventType) ⇒ <code>Promise</code>
  - [.setTriggerMetadata(triggerMetadata, reason)](#TriggeredAutoModRule+setTriggerMetadata) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setActions(actions, reason)](#TriggeredAutoModRule+setActions) ⇒ <code>Promise.&lt;any&gt;</code>
  - [.setEnabled(enabled, reason)](#TriggeredAutoModRule+setEnabled) ⇒ <code>Promise</code>
  - [.setExemptRoles(exemptRoles, reason)](#TriggeredAutoModRule+setExemptRoles) ⇒ <code>Promise</code>
  - [.setExemptChannels(exemptChannels, reason)](#TriggeredAutoModRule+setExemptChannels) ⇒ <code>Promise</code>

<a name="new_TriggeredAutoModRule_new"></a>

### new TriggeredAutoModRule([data], guildId, client)

Constructs a GuildAutoModRule object.

| Param   | Type                | Description                                      |
| ------- | ------------------- | ------------------------------------------------ |
| [data]  | <code>Object</code> | The data for the triggered auto moderation rule. |
| guildId | <code>string</code> | The ID of the guild that the rule belongs to.    |
| client  | <code>Client</code> | The client instance.                             |

<a name="TriggeredAutoModRule+guild"></a>

### triggeredAutoModRule.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The guild object.  
<a name="TriggeredAutoModRule+channel"></a>

### triggeredAutoModRule.channel ⇒

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The channel object.  
<a name="TriggeredAutoModRule+user"></a>

### triggeredAutoModRule.user ⇒

Get the user object associated with this instance.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The user object.  
<a name="TriggeredAutoModRule+message"></a>

### triggeredAutoModRule.message ⇒

Retrieves the message from the channel using the specified message ID.

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The retrieved message object.  
<a name="TriggeredAutoModRule+fetch"></a>

### triggeredAutoModRule.fetch(options) ⇒ <code>Promise</code>

Fetches the automod rule with the specified ruleId from the guild.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched automod rule.

| Param   | Type                | Description                                |
| ------- | ------------------- | ------------------------------------------ |
| options | <code>object</code> | Optional parameters for the fetch request. |

<a name="TriggeredAutoModRule+edit"></a>

### triggeredAutoModRule.edit(options) ⇒ <code>Promise</code>

Edits the automod rule with the specified options.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - A promise that resolves when the automod rule has been successfully edited.

| Param   | Type                | Description                             |
| ------- | ------------------- | --------------------------------------- |
| options | <code>Object</code> | The options to update the automod rule. |

<a name="TriggeredAutoModRule+delete"></a>

### triggeredAutoModRule.delete(reason) ⇒ <code>Promise.&lt;void&gt;</code>

Deletes the automod rule with the specified reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the rule is successfully deleted.

| Param  | Type                | Description                       |
| ------ | ------------------- | --------------------------------- |
| reason | <code>string</code> | The reason for deleting the rule. |

<a name="TriggeredAutoModRule+setName"></a>

### triggeredAutoModRule.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="TriggeredAutoModRule+setEventType"></a>

### triggeredAutoModRule.setEventType(eventType, reason) ⇒ <code>Promise</code>

Sets the event type and reason for the current object.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param     | Type                | Description               |
| --------- | ------------------- | ------------------------- |
| eventType | <code>string</code> | The type of event to set. |
| reason    | <code>string</code> | The reason for the event. |

<a name="TriggeredAutoModRule+setTriggerMetadata"></a>

### triggeredAutoModRule.setTriggerMetadata(triggerMetadata, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the trigger metadata for the current object and updates it with the given reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the trigger metadata is successfully set.

| Param           | Type                | Description                                   |
| --------------- | ------------------- | --------------------------------------------- |
| triggerMetadata | <code>any</code>    | The new trigger metadata to set.              |
| reason          | <code>string</code> | The reason for updating the trigger metadata. |

<a name="TriggeredAutoModRule+setActions"></a>

### triggeredAutoModRule.setActions(actions, reason) ⇒ <code>Promise.&lt;any&gt;</code>

Sets the actions and reason for editing a resource.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the result of the edit operation.

| Param   | Type                | Description              |
| ------- | ------------------- | ------------------------ |
| actions | <code>any</code>    | The actions to be set.   |
| reason  | <code>string</code> | The reason for the edit. |

<a name="TriggeredAutoModRule+setEnabled"></a>

### triggeredAutoModRule.setEnabled(enabled, reason) ⇒ <code>Promise</code>

Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param   | Type                 | Description                                  |
| ------- | -------------------- | -------------------------------------------- |
| enabled | <code>boolean</code> | The new enabled status of the item.          |
| reason  | <code>string</code>  | The reason for the change in enabled status. |

<a name="TriggeredAutoModRule+setExemptRoles"></a>

### triggeredAutoModRule.setExemptRoles(exemptRoles, reason) ⇒ <code>Promise</code>

Sets the exempt roles for a certain action and provides a reason for the change.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the exempt roles are successfully set.

| Param       | Type                | Description                                |
| ----------- | ------------------- | ------------------------------------------ |
| exemptRoles | <code>Array</code>  | The roles that are exempt from the action. |
| reason      | <code>string</code> | The reason for setting the exempt roles.   |

<a name="TriggeredAutoModRule+setExemptChannels"></a>

### triggeredAutoModRule.setExemptChannels(exemptChannels, reason) ⇒ <code>Promise</code>

Sets the exempt channels for a specific action and provides a reason.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: <code>Promise</code> - - A promise that resolves when the exempt channels are set.

| Param          | Type                | Description                                 |
| -------------- | ------------------- | ------------------------------------------- |
| exemptChannels | <code>Array</code>  | The channels to exempt from the action.     |
| reason         | <code>string</code> | The reason for setting the exempt channels. |

<a name="User"></a>

## User ⇐ <code>Base</code>

Represents a user in the application.

**Kind**: global class  
**Extends**: <code>Base</code>

- [User](#User) ⇐ <code>Base</code>
  - [new User([data], client)](#new_User_new)
  - [.fetch(options)](#User+fetch) ⇒ <code>Promise</code>
  - [.createDM()](#User+createDM) ⇒ <code>Promise.&lt;DMChannel&gt;</code>
  - [.send(options)](#User+send) ⇒ <code>Promise</code>
  - [.defaultAvatarURL(format)](#User+defaultAvatarURL) ⇒ <code>string</code> \| <code>null</code>
  - [.displayAvatarURL(options)](#User+displayAvatarURL) ⇒ <code>string</code>
  - [.bannerURL(options)](#User+bannerURL) ⇒ <code>string</code> \| <code>null</code>
  - [.avatarDecorationURL(options)](#User+avatarDecorationURL) ⇒ <code>string</code> \| <code>null</code>
  - [.hexAccentColor()](#User+hexAccentColor) ⇒ <code>string</code> \| <code>null</code>

<a name="new_User_new"></a>

### new User([data], client)

Constructs a new User object.

| Param  | Type                | Description                                  |
| ------ | ------------------- | -------------------------------------------- |
| [data] | <code>Object</code> | The data object containing user information. |
| client | <code>Client</code> | The client object.                           |

<a name="User+fetch"></a>

### user.fetch(options) ⇒ <code>Promise</code>

Fetches user data using the provided options.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched user data.

| Param   | Type                | Description                         |
| ------- | ------------------- | ----------------------------------- |
| options | <code>Object</code> | The options for fetching user data. |

<a name="User+createDM"></a>

### user.createDM() ⇒ <code>Promise.&lt;DMChannel&gt;</code>

Creates a direct message (DM) channel with the user associated with this instance of the client.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise.&lt;DMChannel&gt;</code> - A promise that resolves to the created DM channel.  
<a name="User+send"></a>

### user.send(options) ⇒ <code>Promise</code>

Sends a message to the user using the client's user send method.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| options | <code>object</code> | Optional parameters for sending the message. |

<a name="User+defaultAvatarURL"></a>

### user.defaultAvatarURL(format) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the default avatar for the user in the specified format.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the default avatar image, or null if it is not available.

| Param  | Type                | Description                                                |
| ------ | ------------------- | ---------------------------------------------------------- |
| format | <code>string</code> | The format of the avatar image (e.g. "png", "jpg", "gif"). |

<a name="User+displayAvatarURL"></a>

### user.displayAvatarURL(options) ⇒ <code>string</code>

Returns the URL of the avatar for the user.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> - The URL of the user's avatar.

| Param             | Type                 | Description                                |
| ----------------- | -------------------- | ------------------------------------------ |
| options           | <code>Object</code>  | The options for generating the avatar URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic avatar URL.  |
| [options.size]    | <code>number</code>  | The size of the avatar.                    |
| [options.format]  | <code>string</code>  | The format of the avatar image.            |

<a name="User+bannerURL"></a>

### user.bannerURL(options) ⇒ <code>string</code> \| <code>null</code>

Generates the URL for the user's banner image.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the user's banner image, or null if no banner is set.

| Param             | Type                 | Description                                    |
| ----------------- | -------------------- | ---------------------------------------------- |
| options           | <code>Object</code>  | Optional parameters for customizing the URL.   |
| [options.dynamic] | <code>boolean</code> | Whether to include dynamic content in the URL. |
| [options.size]    | <code>string</code>  | The desired size of the banner image.          |
| [options.format]  | <code>string</code>  | The desired format of the banner image.        |

<a name="User+avatarDecorationURL"></a>

### user.avatarDecorationURL(options) ⇒ <code>string</code> \| <code>null</code>

Returns the URL of the avatar decoration for the user.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - The URL of the avatar decoration, or null if no decoration is set.

| Param          | Type                | Description                                  |
| -------------- | ------------------- | -------------------------------------------- |
| options        | <code>Object</code> | Optional parameters for the URL generation.  |
| options.size   | <code>number</code> | The desired size of the avatar decoration.   |
| options.format | <code>string</code> | The desired format of the avatar decoration. |

<a name="User+hexAccentColor"></a>

### user.hexAccentColor() ⇒ <code>string</code> \| <code>null</code>

Returns the hexadecimal representation of the accent color.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: <code>string</code> \| <code>null</code> - - The hexadecimal representation of the accent color, or null if the accent color is not set.

<a name="VerificationFormFields"></a>

## VerificationFormFields ⇐ <code>Base</code>

Represents a set of form fields for verification.

**Kind**: global class  
**Extends**: <code>Base</code>  
**Properties**

| Name        | Type                                      | Description                                |
| ----------- | ----------------------------------------- | ------------------------------------------ |
| description | <code>string</code> \| <code>null</code>  | The description of the form field.         |
| fieldType   | <code>string</code> \| <code>null</code>  | The type of the form field.                |
| label       | <code>string</code> \| <code>null</code>  | The label of the form field.               |
| required    | <code>boolean</code> \| <code>null</code> | Indicates if the form field is required.   |
| values      | <code>Array</code>                        | The values associated with the form field. |

<a name="new_VerificationFormFields_new"></a>

### new VerificationFormFields([data], client)

Constructs a new instance of a class.

| Param  | Type                | Description                                      |
| ------ | ------------------- | ------------------------------------------------ |
| [data] | <code>object</code> | The data object containing the field properties. |
| client | <code>object</code> | The client object used for making API requests.  |

<a name="VoiceBasedChannels"></a>

## VoiceBasedChannels ⇐ <code>Channel</code>

Represents a voice-based channel in a guild.

**Kind**: global class  
**Extends**: <code>Channel</code>

- [VoiceBasedChannels](#VoiceBasedChannels) ⇐ <code>Channel</code>
  - [new VoiceBasedChannels([data], guildId, client)](#new_VoiceBasedChannels_new)
  - [.members](#VoiceBasedChannels+members) ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code>
  - [.join([options])](#VoiceBasedChannels+join) ⇒ <code>VoiceConnection</code>
  - [.disconnect()](#VoiceBasedChannels+disconnect) ⇒ <code>this</code>
  - [.setRtcRegion(rtcRegion, reason)](#VoiceBasedChannels+setRtcRegion) ⇒ <code>Promise</code>
  - [.setBitrate(bitrate, reason)](#VoiceBasedChannels+setBitrate) ⇒ <code>Promise</code>

<a name="new_VoiceBasedChannels_new"></a>

### new VoiceBasedChannels([data], guildId, client)

Constructs a new instance of a class, extending the base class.

| Param   | Type                | Description                                       |
| ------- | ------------------- | ------------------------------------------------- |
| [data]  | <code>Object</code> | The data object to initialize the instance with.  |
| guildId | <code>string</code> | The ID of the guild associated with the instance. |
| client  | <code>Object</code> | The client object associated with the instance.   |

<a name="VoiceBasedChannels+members"></a>

### voiceBasedChannels.members ⇒ <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code>

Retrieves the members in the voice channel associated with the current guild.

**Kind**: instance property of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Collection.&lt;Snowflake, GuildMember&gt;</code> \| <code>null</code> - - A collection of guild members in the voice channel, or null if no members are found.  
<a name="VoiceBasedChannels+join"></a>

### voiceBasedChannels.join([options]) ⇒ <code>VoiceConnection</code>

Joins the voice channel associated with this VoiceConnection.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>VoiceConnection</code> - - The VoiceConnection instance.

| Param              | Type                 | Default            | Description                                        |
| ------------------ | -------------------- | ------------------ | -------------------------------------------------- |
| [options]          | <code>Object</code>  |                    | Optional parameters for joining the voice channel. |
| [options.selfMute] | <code>boolean</code> | <code>false</code> | Whether to mute the user's own audio.              |
| [options.selfDeaf] | <code>boolean</code> | <code>false</code> | Whether to deafen the user's own audio.            |

<a name="VoiceBasedChannels+disconnect"></a>

### voiceBasedChannels.disconnect() ⇒ <code>this</code>

Disconnects the voice connection by sending a voice state update to the server with a null channel ID.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>this</code> - - Returns the current instance of the class.  
<a name="VoiceBasedChannels+setRtcRegion"></a>

### voiceBasedChannels.setRtcRegion(rtcRegion, reason) ⇒ <code>Promise</code>

Sets the RTC (Real-Time Communication) region for the object.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the RTC region is successfully set.

| Param     | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| rtcRegion | <code>string</code> | The RTC region to set.                 |
| reason    | <code>string</code> | The reason for setting the RTC region. |

<a name="VoiceBasedChannels+setBitrate"></a>

### voiceBasedChannels.setBitrate(bitrate, reason) ⇒ <code>Promise</code>

Sets the bitrate of the current object.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: <code>Promise</code> - - A promise that resolves when the bitrate is successfully set.

| Param   | Type                | Description                         |
| ------- | ------------------- | ----------------------------------- |
| bitrate | <code>number</code> | The new bitrate value to set.       |
| reason  | <code>string</code> | The reason for setting the bitrate. |

<a name="VoiceChannel"></a>

## VoiceChannel ⇐ <code>VoiceBasedChannels</code>

Represents a voice channel in a guild.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>

- [VoiceChannel](#VoiceChannel) ⇐ <code>VoiceBasedChannels</code>
  - [new VoiceChannel([data], guildId, client)](#new_VoiceChannel_new)
  - [.messages](#VoiceChannel+messages) ⇒ <code>MessageManager</code>
  - [.send(options)](#VoiceChannel+send) ⇒ <code>Promise</code>
  - [.bulkDelete(messages, reason)](#VoiceChannel+bulkDelete) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setNsfw(nsfw, reason)](#VoiceChannel+setNsfw) ⇒ <code>Promise</code>
  - [.setRateLimitPerUser(ratelimit, reason)](#VoiceChannel+setRateLimitPerUser) ⇒ <code>Promise</code>
  - [.setUserLimit(userLimit, reason)](#VoiceChannel+setUserLimit) ⇒ <code>Promise</code>
  - [.setVideoQualityMode(videoQualityMode, reason)](#VoiceChannel+setVideoQualityMode) ⇒ <code>Promise</code>
  - [.triggerTyping()](#VoiceChannel+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_VoiceChannel_new"></a>

### new VoiceChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                 |
| ------- | ------------------- | ----------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the properties for the instance. |
| guildId | <code>string</code> | The ID of the guild associated with the instance.           |
| client  | <code>Client</code> | The client object associated with the instance.             |

<a name="VoiceChannel+messages"></a>

### voiceChannel.messages ⇒ <code>MessageManager</code>

Get the message manager for this channel.

**Kind**: instance property of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>MessageManager</code> - The message manager object for this channel.  
<a name="VoiceChannel+send"></a>

### voiceChannel.send(options) ⇒ <code>Promise</code>

Sends a message using the specified options.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - A promise that resolves when the message is sent.

| Param   | Type                | Description                          |
| ------- | ------------------- | ------------------------------------ |
| options | <code>object</code> | The options for sending the message. |

<a name="VoiceChannel+bulkDelete"></a>

### voiceChannel.bulkDelete(messages, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Bulk deletes the specified messages with the given reason.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the messages are deleted.

| Param    | Type                               | Description                           |
| -------- | ---------------------------------- | ------------------------------------- |
| messages | <code>Array.&lt;Message&gt;</code> | The messages to be deleted.           |
| reason   | <code>string</code>                | The reason for deleting the messages. |

<a name="VoiceChannel+setNsfw"></a>

### voiceChannel.setNsfw(nsfw, reason) ⇒ <code>Promise</code>

Sets the NSFW (Not Safe for Work) flag for the current item.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the NSFW flag is set.

| Param  | Type                 | Description                           |
| ------ | -------------------- | ------------------------------------- |
| nsfw   | <code>boolean</code> | The NSFW flag value to set.           |
| reason | <code>string</code>  | The reason for setting the NSFW flag. |

<a name="VoiceChannel+setRateLimitPerUser"></a>

### voiceChannel.setRateLimitPerUser(ratelimit, reason) ⇒ <code>Promise</code>

Sets the rate limit per user for a specific action.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the rate limit is successfully set.

| Param     | Type                | Description                            |
| --------- | ------------------- | -------------------------------------- |
| ratelimit | <code>number</code> | The new rate limit value to set.       |
| reason    | <code>string</code> | The reason for setting the rate limit. |

<a name="VoiceChannel+setUserLimit"></a>

### voiceChannel.setUserLimit(userLimit, reason) ⇒ <code>Promise</code>

Sets the user limit for the current channel and provides a reason for the change.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the user limit is successfully set.

| Param     | Type                | Description                             |
| --------- | ------------------- | --------------------------------------- |
| userLimit | <code>number</code> | The new user limit for the channel.     |
| reason    | <code>string</code> | The reason for changing the user limit. |

<a name="VoiceChannel+setVideoQualityMode"></a>

### voiceChannel.setVideoQualityMode(videoQualityMode, reason) ⇒ <code>Promise</code>

Sets the video quality mode with the given parameters.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise</code> - - A promise that resolves when the video quality mode is set.

| Param            | Type                | Description                                    |
| ---------------- | ------------------- | ---------------------------------------------- |
| videoQualityMode | <code>string</code> | The video quality mode to set.                 |
| reason           | <code>string</code> | The reason for setting the video quality mode. |

<a name="VoiceChannel+triggerTyping"></a>

### voiceChannel.triggerTyping() ⇒ <code>Promise.&lt;void&gt;</code>

Triggers a typing indicator in the channel where this method is called.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.

<a name="VoiceRegion"></a>

## VoiceRegion ⇐ <code>Base</code>

Represents a voice region.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_VoiceRegion_new"></a>

### new VoiceRegion([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                                 |
| ------ | ------------------- | ----------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object.                                          |

<a name="VoiceState"></a>

## VoiceState ⇐ <code>Base</code>

Represents the state of a voice connection for a user in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [VoiceState](#VoiceState) ⇐ <code>Base</code>
  - [new VoiceState([data], guildId, client)](#new_VoiceState_new)
  - [.guild](#VoiceState+guild) ⇒
  - [.channel](#VoiceState+channel) ⇒ <code>Channel</code> \| <code>null</code>
  - [.user](#VoiceState+user) ⇒ <code>User</code> \| <code>null</code>
  - [.edit(options)](#VoiceState+edit) ⇒ <code>Promise</code>
  - [.setChannel(channel, reason)](#VoiceState+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setDeaf(deaf, reason)](#VoiceState+setDeaf) ⇒ <code>Promise</code>
  - [.setMute(mute, reason)](#VoiceState+setMute) ⇒ <code>Promise</code>
  - [.setSuppress(suppress)](#VoiceState+setSuppress) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.setRequestToSpeak(requestToSpeak)](#VoiceState+setRequestToSpeak) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_VoiceState_new"></a>

### new VoiceState([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                     |
| ------- | ------------------- | ----------------------------------------------- |
| [data]  | <code>Object</code> | The data for the voice state.                   |
| guildId | <code>string</code> | The ID of the guild the voice state belongs to. |
| client  | <code>Client</code> | The client instance.                            |

<a name="VoiceState+guild"></a>

### voiceState.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The guild object if found, otherwise null.  
<a name="VoiceState+channel"></a>

### voiceState.channel ⇒ <code>Channel</code> \| <code>null</code>

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="VoiceState+user"></a>

### voiceState.user ⇒ <code>User</code> \| <code>null</code>

Retrieves the user associated with this instance.

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>User</code> \| <code>null</code> - The user object if found, otherwise null.  
<a name="VoiceState+edit"></a>

### voiceState.edit(options) ⇒ <code>Promise</code>

Edits the user's guild member profile with the given options.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - A promise that resolves when the edit is complete.

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| options | <code>Object</code> | The options to edit the guild member profile. |

<a name="VoiceState+setChannel"></a>

### voiceState.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.

| Param   | Type                 | Description                         |
| ------- | -------------------- | ----------------------------------- |
| channel | <code>Channel</code> | The channel to set.                 |
| reason  | <code>string</code>  | The reason for setting the channel. |

<a name="VoiceState+setDeaf"></a>

### voiceState.setDeaf(deaf, reason) ⇒ <code>Promise</code>

Sets the deaf status of the user.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - - A promise that resolves when the deaf status is set.

| Param  | Type                 | Description                                 |
| ------ | -------------------- | ------------------------------------------- |
| deaf   | <code>boolean</code> | Whether the user should be deafened or not. |
| reason | <code>string</code>  | The reason for setting the deaf status.     |

<a name="VoiceState+setMute"></a>

### voiceState.setMute(mute, reason) ⇒ <code>Promise</code>

Sets the mute status and reason for an object.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise</code> - - A promise that resolves when the mute status and reason are set.

| Param  | Type                 | Description             |
| ------ | -------------------- | ----------------------- |
| mute   | <code>boolean</code> | The mute status to set. |
| reason | <code>string</code>  | The reason for muting.  |

<a name="VoiceState+setSuppress"></a>

### voiceState.setSuppress(suppress) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the suppress property of the voice state for the user in the guild.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the suppress property is set.

| Param    | Type                 | Description                                 |
| -------- | -------------------- | ------------------------------------------- |
| suppress | <code>boolean</code> | The value to set for the suppress property. |

<a name="VoiceState+setRequestToSpeak"></a>

### voiceState.setRequestToSpeak(requestToSpeak) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the "request to speak" status for the user in the guild's voice channel.

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the request to speak status is set.

| Param          | Type                 | Description                                                      |
| -------------- | -------------------- | ---------------------------------------------------------------- |
| requestToSpeak | <code>boolean</code> | The value indicating whether the user wants to request to speak. |

<a name="Webhook"></a>

## Webhook ⇐ <code>Base</code>

Represents a webhook.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Webhook](#Webhook) ⇐ <code>Base</code>
  - [new Webhook([data], guildId, client)](#new_Webhook_new)
  - [.fetch(token)](#Webhook+fetch) ⇒ [<code>Promise.&lt;Webhook&gt;</code>](#Webhook)
  - [.edit(options)](#Webhook+edit) ⇒ [<code>Webhook</code>](#Webhook)
  - [.setName(name, reason)](#Webhook+setName) ⇒ <code>Promise</code>
  - [.setAvatar(avatar, reason)](#Webhook+setAvatar) ⇒ <code>Promise</code>
  - [.setChannel(channel, reason)](#Webhook+setChannel) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.delete([options])](#Webhook+delete) ⇒ <code>Promise</code>
  - [.defaultAvatarURL()](#Webhook+defaultAvatarURL) ⇒ <code>string</code>
  - [.displayAvatarURL(options)](#Webhook+displayAvatarURL) ⇒ <code>string</code>

<a name="new_Webhook_new"></a>

### new Webhook([data], guildId, client)

Constructs a new instance of the Webhook class.

| Param   | Type                | Description                                 |
| ------- | ------------------- | ------------------------------------------- |
| [data]  | <code>Object</code> | The data for the webhook.                   |
| guildId | <code>string</code> | The ID of the guild the webhook belongs to. |
| client  | <code>Client</code> | The client that instantiated this webhook.  |

<a name="Webhook+fetch"></a>

### webhook.fetch(token) ⇒ [<code>Promise.&lt;Webhook&gt;</code>](#Webhook)

Fetches a webhook using the provided token.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: [<code>Promise.&lt;Webhook&gt;</code>](#Webhook) - A promise that resolves to the fetched webhook.

| Param | Type                | Description                                 |
| ----- | ------------------- | ------------------------------------------- |
| token | <code>string</code> | The token used to authenticate the webhook. |

<a name="Webhook+edit"></a>

### webhook.edit(options) ⇒ [<code>Webhook</code>](#Webhook)

Edits the webhook with the specified options.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: [<code>Webhook</code>](#Webhook) - - The edited webhook.

| Param             | Type                                        | Description                          |
| ----------------- | ------------------------------------------- | ------------------------------------ |
| options           | <code>Object</code>                         | The options for editing the webhook. |
| [options.reason]  | <code>string</code>                         | The reason for the edit.             |
| [options.name]    | <code>string</code>                         | The new name for the webhook.        |
| [options.avatar]  | <code>string</code> \| <code>File</code>    | The new avatar for the webhook.      |
| [options.channel] | <code>string</code> \| <code>Channel</code> | The new channel for the webhook.     |
| [options.token]   | <code>string</code>                         | The token of the webhook.            |

<a name="Webhook+setName"></a>

### webhook.setName(name, reason) ⇒ <code>Promise</code>

Sets the name and reason for an object.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - - A promise that resolves when the name and reason are successfully set.

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| name   | <code>string</code> | The new name to set.                 |
| reason | <code>string</code> | The reason for setting the new name. |

<a name="Webhook+setAvatar"></a>

### webhook.setAvatar(avatar, reason) ⇒ <code>Promise</code>

Sets the avatar for the user.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - - A promise that resolves when the avatar is successfully set.

| Param  | Type                | Description                                   |
| ------ | ------------------- | --------------------------------------------- |
| avatar | <code>string</code> | The URL or file path of the new avatar image. |
| reason | <code>string</code> | The reason for setting the new avatar.        |

<a name="Webhook+setChannel"></a>

### webhook.setChannel(channel, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the channel for the current object and updates it with the given reason.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the channel is successfully set.

| Param   | Type                 | Description                         |
| ------- | -------------------- | ----------------------------------- |
| channel | <code>Channel</code> | The channel to set.                 |
| reason  | <code>string</code>  | The reason for setting the channel. |

<a name="Webhook+delete"></a>

### webhook.delete([options]) ⇒ <code>Promise</code>

Deletes the webhook.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>Promise</code> - A promise that resolves to the deleted webhook.

| Param            | Type                | Description                            |
| ---------------- | ------------------- | -------------------------------------- |
| [options]        | <code>Object</code> | Optional parameters for the deletion.  |
| [options.token]  | <code>string</code> | The token associated with the webhook. |
| [options.reason] | <code>string</code> | The reason for the deletion.           |

<a name="Webhook+defaultAvatarURL"></a>

### webhook.defaultAvatarURL() ⇒ <code>string</code>

Returns the default URL for an avatar image.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>string</code> - The URL of the default avatar image.  
<a name="Webhook+displayAvatarURL"></a>

### webhook.displayAvatarURL(options) ⇒ <code>string</code>

Returns the URL of the avatar for the user or webhook.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: <code>string</code> - The URL of the avatar.

| Param             | Type                 | Description                                |
| ----------------- | -------------------- | ------------------------------------------ |
| options           | <code>Object</code>  | The options for generating the avatar URL. |
| [options.dynamic] | <code>boolean</code> | Whether to generate a dynamic avatar URL.  |
| [options.size]    | <code>number</code>  | The size of the avatar in pixels.          |
| [options.format]  | <code>string</code>  | The format of the avatar image.            |

<a name="WebhookClient"></a>

## WebhookClient ⇐ <code>Base</code>

Represents a webhook client that can interact with webhooks.

**Kind**: global class  
**Extends**: <code>Base</code>

- [WebhookClient](#WebhookClient) ⇐ <code>Base</code>
  - [new WebhookClient([data], client)](#new_WebhookClient_new)
  - [.fetchWebhook()](#WebhookClient+fetchWebhook) ⇒ <code>Promise.&lt;Webhook&gt;</code>
  - [.send([options])](#WebhookClient+send) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>
  - [.delete(message, thread)](#WebhookClient+delete) ⇒ <code>void</code>
  - [.edit(message, [options], [thread])](#WebhookClient+edit) ⇒ <code>void</code>
  - [.fetch(message, thread)](#WebhookClient+fetch) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>

<a name="new_WebhookClient_new"></a>

### new WebhookClient([data], client)

Constructs a new instance of the class.

| Param  | Type                | Description                                                 |
| ------ | ------------------- | ----------------------------------------------------------- |
| [data] | <code>Object</code> | The data object containing the properties for the instance. |
| client | <code>Client</code> | The client object associated with the instance.             |

<a name="WebhookClient+fetchWebhook"></a>

### webhookClient.fetchWebhook() ⇒ <code>Promise.&lt;Webhook&gt;</code>

Fetches a webhook from the server.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;Webhook&gt;</code> - A promise that resolves to a Webhook object.  
<a name="WebhookClient+send"></a>

### webhookClient.send([options]) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>

Sends a message using a webhook.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;(Message\|undefined)&gt;</code> - - A promise that resolves to the sent message, or undefined if the message failed to send.

| Param            | Type                                       | Description                                            |
| ---------------- | ------------------------------------------ | ------------------------------------------------------ |
| [options]        | <code>Object</code>                        | The options for sending the message.                   |
| [options.wait]   | <code>number</code>                        | The time to wait before sending the message.           |
| [options.thread] | <code>string</code> \| <code>Object</code> | The thread ID or thread object to send the message to. |

<a name="WebhookClient+delete"></a>

### webhookClient.delete(message, thread) ⇒ <code>void</code>

Deletes a message from a thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)

| Param   | Type                                        | Description                                               |
| ------- | ------------------------------------------- | --------------------------------------------------------- |
| message | <code>string</code> \| <code>Message</code> | The ID or the message object to delete.                   |
| thread  | <code>string</code> \| <code>Thread</code>  | The ID or the thread object where the message is located. |

<a name="WebhookClient+edit"></a>

### webhookClient.edit(message, [options], [thread]) ⇒ <code>void</code>

Edits a message in a channel using the Discord API.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Throws**:

- <code>RangeError</code> If the channel is not cached.

| Param     | Type                                              | Description                                                       |
| --------- | ------------------------------------------------- | ----------------------------------------------------------------- |
| message   | <code>string</code> \| <code>Message</code>       | The ID or the message object to edit.                             |
| [options] | <code>Object</code>                               | The options for editing the message.                              |
| [thread]  | <code>string</code> \| <code>ThreadChannel</code> | The ID or the thread channel object where the message is located. |

<a name="WebhookClient+fetch"></a>

### webhookClient.fetch(message, thread) ⇒ <code>Promise.&lt;(Message\|undefined)&gt;</code>

Fetches a webhook message from the specified thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: <code>Promise.&lt;(Message\|undefined)&gt;</code> - - A promise that resolves to the fetched message, or undefined if the channel is not found.

| Param   | Type                                              | Description                                            |
| ------- | ------------------------------------------------- | ------------------------------------------------------ |
| message | <code>string</code> \| <code>Message</code>       | The ID or the message object to fetch.                 |
| thread  | <code>string</code> \| <code>ThreadChannel</code> | The ID or the thread object to fetch the message from. |

<a name="WelcomeScreen"></a>

## WelcomeScreen ⇐ <code>Base</code>

Represents a welcome screen for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [WelcomeScreen](#WelcomeScreen) ⇐ <code>Base</code>
  - [new WelcomeScreen([data], guildId, client)](#new_WelcomeScreen_new)
  - [.guild](#WelcomeScreen+guild) ⇒
  - [.edit(options)](#WelcomeScreen+edit) ⇒ <code>Promise</code>
  - [.setEnabled(enabled, reason)](#WelcomeScreen+setEnabled) ⇒ <code>Promise</code>
  - [.setWelcomeChannels(channels, reason)](#WelcomeScreen+setWelcomeChannels) ⇒ <code>Promise</code>
  - [.setDescription(description, reason)](#WelcomeScreen+setDescription) ⇒ <code>Promise</code>

<a name="new_WelcomeScreen_new"></a>

### new WelcomeScreen([data], guildId, client)

Constructs a new instance of the WelcomeScreen class.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| [data]  | <code>Object</code> | The data for the welcome screen. |
| guildId | <code>string</code> | The ID of the guild.             |
| client  | <code>Client</code> | The client instance.             |

<a name="WelcomeScreen+guild"></a>

### welcomeScreen.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The guild object if found, otherwise null.  
<a name="WelcomeScreen+edit"></a>

### welcomeScreen.edit(options) ⇒ <code>Promise</code>

Edits the welcome screen of the guild with the provided options.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - A promise that resolves when the welcome screen is successfully edited.

| Param   | Type                | Description                                    |
| ------- | ------------------- | ---------------------------------------------- |
| options | <code>Object</code> | The options to update the welcome screen with. |

<a name="WelcomeScreen+setEnabled"></a>

### welcomeScreen.setEnabled(enabled, reason) ⇒ <code>Promise</code>

Sets the enabled status of an item and provides a reason for the change.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the edit is complete.

| Param   | Type                 | Description                                  |
| ------- | -------------------- | -------------------------------------------- |
| enabled | <code>boolean</code> | The new enabled status of the item.          |
| reason  | <code>string</code>  | The reason for the change in enabled status. |

<a name="WelcomeScreen+setWelcomeChannels"></a>

### welcomeScreen.setWelcomeChannels(channels, reason) ⇒ <code>Promise</code>

Sets the welcome channels for a specific entity.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the welcome channels are set.

| Param    | Type                | Description                                  |
| -------- | ------------------- | -------------------------------------------- |
| channels | <code>Array</code>  | The channels to set as welcome channels.     |
| reason   | <code>string</code> | The reason for setting the welcome channels. |

<a name="WelcomeScreen+setDescription"></a>

### welcomeScreen.setDescription(description, reason) ⇒ <code>Promise</code>

Sets the description of an object and updates it with the provided reason.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: <code>Promise</code> - - A promise that resolves when the description is successfully updated.

| Param       | Type                | Description                              |
| ----------- | ------------------- | ---------------------------------------- |
| description | <code>string</code> | The new description to set.              |
| reason      | <code>string</code> | The reason for updating the description. |

<a name="WelcomeScreenChannel"></a>

## WelcomeScreenChannel ⇐ <code>Base</code>

Represents a welcome screen channel.

**Kind**: global class  
**Extends**: <code>Base</code>

- [WelcomeScreenChannel](#WelcomeScreenChannel) ⇐ <code>Base</code>
  - [new WelcomeScreenChannel([data], guildId, client)](#new_WelcomeScreenChannel_new)
  - [.channel](#WelcomeScreenChannel+channel) ⇒ <code>Channel</code> \| <code>null</code>
  - [.guild](#WelcomeScreenChannel+guild) ⇒

<a name="new_WelcomeScreenChannel_new"></a>

### new WelcomeScreenChannel([data], guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description                                                 |
| ------- | ------------------- | ----------------------------------------------------------- |
| [data]  | <code>Object</code> | The data object containing the properties for the instance. |
| guildId | <code>string</code> | The ID of the guild associated with the instance.           |
| client  | <code>Client</code> | The client object used to interact with the Discord API.    |

<a name="WelcomeScreenChannel+channel"></a>

### welcomeScreenChannel.channel ⇒ <code>Channel</code> \| <code>null</code>

Retrieves the channel object associated with this instance.

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: <code>Channel</code> \| <code>null</code> - The channel object, or null if it does not exist.  
<a name="WelcomeScreenChannel+guild"></a>

### welcomeScreenChannel.guild ⇒

Get the guild object associated with this guildId.

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: The guild object.
