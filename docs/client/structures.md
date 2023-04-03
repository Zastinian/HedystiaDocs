---
id: structures
title: Structures
description: Structures Section
sidebar_position: 5
keywords: [Esmile, MrEsmile, Esmile Bot, Boxmine]
---

<a name="Activity"></a>

## Activity

**Kind**: global class

- [Activity](#Activity)
  - [new Activity([data], client)](#new_Activity_new)
  - [.toJSON()](#Activity+toJSON) ⇒

<a name="new_Activity_new"></a>

### new Activity([data], client)

It takes in a data object and a client object, and then it sets the properties of the Activity
object to the values of the data object

| Param  | Description                                  |
| ------ | -------------------------------------------- |
| [data] | The data that was sent from the Discord API. |
| client | DiscordClient                                |

<a name="Activity+toJSON"></a>

### activity.toJSON() ⇒

It takes the enum value and returns the string value.

**Kind**: instance method of [<code>Activity</code>](#Activity)  
**Returns**: The object literal is being returned.

<a name="APIGuild"></a>

## APIGuild

**Kind**: global class  
<a name="new_APIGuild_new"></a>

### new APIGuild([data], client)

It takes in a data object and a client, and then sets the properties of the class to the values of
the data object

| Param  | Description                          |
| ------ | ------------------------------------ |
| [data] | The data that was sent from the API. |
| client | The client that created the guild.   |

<a name="ApplicationCommand"></a>

## ApplicationCommand

Class representing an application command.

**Kind**: global class

- [ApplicationCommand](#ApplicationCommand)
  - [new ApplicationCommand(data, guildId, client)](#new_ApplicationCommand_new)
  - [.guild](#ApplicationCommand+guild) ⇒
  - [.fetch([options])](#ApplicationCommand+fetch) ⇒
  - [.edit([options])](#ApplicationCommand+edit) ⇒
  - [.delete()](#ApplicationCommand+delete) ⇒

<a name="new_ApplicationCommand_new"></a>

### new ApplicationCommand(data, guildId, client)

Create an application command object.

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| data    | The data object for the command.            |
| guildId | The ID of the guild the command belongs to. |
| client  | The client object for the command.          |

<a name="ApplicationCommand+guild"></a>

### applicationCommand.guild ⇒

Get the guild object if it exists, otherwise return null.

**Kind**: instance property of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The guild object or null.  
<a name="ApplicationCommand+fetch"></a>

### applicationCommand.fetch([options]) ⇒

Fetch the command from the guild or the client.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The command object.

| Param     | Description                         |
| --------- | ----------------------------------- |
| [options] | The options to pass to the command. |

<a name="ApplicationCommand+edit"></a>

### applicationCommand.edit([options]) ⇒

Edit the command.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The return value of the edit method of the commands property of the guild or application object.

| Param     | Description                           |
| --------- | ------------------------------------- |
| [options] | The options to edit the command with. |

<a name="ApplicationCommand+delete"></a>

### applicationCommand.delete() ⇒

Delete the command from the commands collection.

**Kind**: instance method of [<code>ApplicationCommand</code>](#ApplicationCommand)  
**Returns**: The return value of the delete method.

<a name="ApplicationCommandInteraction"></a>

## ApplicationCommandInteraction

**Kind**: global class  
<a name="new_ApplicationCommandInteraction_new"></a>

### new ApplicationCommandInteraction([data], guildId, client)

It's a constructor for a class that extends another class.

| Param   | Description           |
| ------- | --------------------- |
| [data]  | The data from the API |
| guildId | The guild ID          |
| client  | Discord.Client        |

<a name="ApplicationCommandPermission"></a>

## ApplicationCommandPermission

**Kind**: global class

- [ApplicationCommandPermission](#ApplicationCommandPermission)
  - [new ApplicationCommandPermission([data], guildId, client)](#new_ApplicationCommandPermission_new)
  - _instance_
    - [.command](#ApplicationCommandPermission+command) ⇒
    - [.guild](#ApplicationCommandPermission+guild) ⇒
    - [.fetch([options])](#ApplicationCommandPermission+fetch) ⇒
  - _static_
    - [.transformPermissions([permissions])](#ApplicationCommandPermission.transformPermissions) ⇒

<a name="new_ApplicationCommandPermission_new"></a>

### new ApplicationCommandPermission([data], guildId, client)

It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
commandId to the id of the data object, or undefined if it doesn't exist, and sets the applicationId
to the application_id of the data object, or null if it doesn't exist. It then sets the guildId to
the guildId, and then sets the permissions to a new RaidenCol object, which is a collection class,
and then maps the permissions of the data object to a new array, and then sets the id of the object
to the id of the data object, and then sets the permissions of the object to the
ApplicationCommandPermission.transformPermissions function, which takes in the object.

| Param   | Description                                |
| ------- | ------------------------------------------ |
| [data]  | The data that is passed to the constructor |
| guildId | The guild id                               |
| client  | RaidenClient                               |

<a name="ApplicationCommandPermission+command"></a>

### applicationCommandPermission.command ⇒

If the command is in the client's cache, return it. If it's not, check if it's in the guild's cache.
If it's not, return null.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The command object.  
<a name="ApplicationCommandPermission+guild"></a>

### applicationCommandPermission.guild ⇒

It returns the guild object if it exists, otherwise it returns null.

**Kind**: instance property of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The guild object.  
<a name="ApplicationCommandPermission+fetch"></a>

### applicationCommandPermission.fetch([options]) ⇒

It fetches the permissions of the command

**Kind**: instance method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The return value is the result of the await expression.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="ApplicationCommandPermission.transformPermissions"></a>

### ApplicationCommandPermission.transformPermissions([permissions]) ⇒

It takes an object with a property called `type` that can be a number or a string, and if it's a
number, it converts it to a string using a lookup table.

The lookup table is defined in the `ApplicationCommandPermissionType` enum.

The function returns an object with the same properties as the input object, but with the `type`
property converted to a string if it was a number.

The function is called like this:

**Kind**: static method of [<code>ApplicationCommandPermission</code>](#ApplicationCommandPermission)  
**Returns**: The return value is an object with the following properties:
id: The id of the permission.
type: The type of the permission.
permission: The permission.

| Param         |
| ------------- |
| [permissions] |

<a name="AutocompleteInteraction"></a>

## AutocompleteInteraction

**Kind**: global class

- [AutocompleteInteraction](#AutocompleteInteraction)
  - [new AutocompleteInteraction([data], guildId, client)](#new_AutocompleteInteraction_new)
  - _instance_
    - [.getFocused()](#AutocompleteInteraction+getFocused) ⇒
    - [.respond(choices)](#AutocompleteInteraction+respond) ⇒
  - _static_
    - [.transformChoices([choices])](#AutocompleteInteraction.transformChoices) ⇒

<a name="new_AutocompleteInteraction_new"></a>

### new AutocompleteInteraction([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that is passed to the constructor.   |
| guildId | The ID of the guild the role is in            |
| client  | The client that the command is being run from |

<a name="AutocompleteInteraction+getFocused"></a>

### autocompleteInteraction.getFocused() ⇒

If the data.options array has a focused property, then return the value of that property.

If it doesn't, then return null.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The value of the focused option.  
<a name="AutocompleteInteraction+respond"></a>

### autocompleteInteraction.respond(choices) ⇒

It sends a response to the interaction.

**Kind**: instance method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The response from the API.

| Param   | Description                                        |
| ------- | -------------------------------------------------- |
| choices | An array of objects with the following properties: |

<a name="AutocompleteInteraction.transformChoices"></a>

### AutocompleteInteraction.transformChoices([choices]) ⇒

It takes an object with a name and value property and returns an object with a name and value
property

**Kind**: static method of [<code>AutocompleteInteraction</code>](#AutocompleteInteraction)  
**Returns**: The transformed choices object.

| Param     |
| --------- |
| [choices] |

<a name="BaseGuildChannel"></a>

## BaseGuildChannel

**Kind**: global class

- [BaseGuildChannel](#BaseGuildChannel)
  - [new BaseGuildChannel(data, guildId, client)](#new_BaseGuildChannel_new)
  - [.fetchPrivateThreads([options])](#BaseGuildChannel+fetchPrivateThreads) ⇒

<a name="new_BaseGuildChannel_new"></a>

### new BaseGuildChannel(data, guildId, client)

It creates a new ThreadManager object and assigns it to the threads property

| Param   | Description                            |
| ------- | -------------------------------------- |
| data    | The data from the database.            |
| guildId | The ID of the guild the channel is in. |
| client  | The client that the channel belongs to |

<a name="BaseGuildChannel+fetchPrivateThreads"></a>

### baseGuildChannel.fetchPrivateThreads([options]) ⇒

`Fetches the private threads in this channel.`

**Kind**: instance method of [<code>BaseGuildChannel</code>](#BaseGuildChannel)  
**Returns**: A new FetchedThreads object

| Param     | Description                              |
| --------- | ---------------------------------------- |
| [options] | An object with the following properties: |

<a name="ButtonInteraction"></a>

## ButtonInteraction

**Kind**: global class  
<a name="new_ButtonInteraction_new"></a>

### new ButtonInteraction([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that is passed to the constructor.   |
| guildId | The ID of the guild the role is in.           |
| client  | The client that the command is being run from |

<a name="CategoryChannel"></a>

## CategoryChannel

**Kind**: global class

- [CategoryChannel](#CategoryChannel)
  - [new CategoryChannel([data], guildId, client)](#new_CategoryChannel_new)
  - [.childrens](#CategoryChannel+childrens) ⇒
  - [.highest](#CategoryChannel+highest) ⇒

<a name="new_CategoryChannel_new"></a>

### new CategoryChannel([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the role is in.         |
| client  | The client that instantiated the object.    |

<a name="CategoryChannel+childrens"></a>

### categoryChannel.childrens ⇒

It returns a collection of channels that are children of the current channel

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: A collection of channels that are children of this channel.  
<a name="CategoryChannel+highest"></a>

### categoryChannel.highest ⇒

It sorts the childrens array by position, and then returns the first element of the sorted array

**Kind**: instance property of [<code>CategoryChannel</code>](#CategoryChannel)  
**Returns**: The first channel in the array.

<a name="Channel"></a>

## Channel

**Kind**: global class

- [Channel](#Channel)
  - [new Channel([data], guildId, client)](#new_Channel_new)
  - [.parent](#Channel+parent) ⇒
  - [.guild](#Channel+guild) ⇒
  - [.fetch([options])](#Channel+fetch) ⇒
  - [.delete(reason)](#Channel+delete) ⇒
  - [.edit(options)](#Channel+edit) ⇒
  - [.fetchInvites()](#Channel+fetchInvites) ⇒
  - [.createInvite(options)](#Channel+createInvite) ⇒
  - [.clone()](#Channel+clone) ⇒
  - [.isGuildText()](#Channel+isGuildText) ⇒
  - [.isDM()](#Channel+isDM) ⇒
  - [.isStage()](#Channel+isStage) ⇒
  - [.isForum()](#Channel+isForum) ⇒
  - [.isGuildVoice()](#Channel+isGuildVoice) ⇒
  - [.isNews()](#Channel+isNews) ⇒
  - [.isCategory()](#Channel+isCategory) ⇒
  - [.isText()](#Channel+isText) ⇒
  - [.isThread()](#Channel+isThread) ⇒
  - [.isVoice()](#Channel+isVoice) ⇒
  - [.isDirectory()](#Channel+isDirectory) ⇒
  - [.inGuild()](#Channel+inGuild) ⇒
  - [.inCachedGuild()](#Channel+inCachedGuild) ⇒
  - [.isRuleChannel()](#Channel+isRuleChannel) ⇒
  - [.isSystemChannel()](#Channel+isSystemChannel) ⇒
  - [.bannerURL([options])](#Channel+bannerURL) ⇒
  - [.setName(name, reason)](#Channel+setName) ⇒
  - [.setType(type, reason)](#Channel+setType) ⇒
  - [.setTopic(topic, reason)](#Channel+setTopic) ⇒
  - [.setPosition(position, reason)](#Channel+setPosition) ⇒
  - [.setParent(parent, reason)](#Channel+setParent) ⇒
  - [.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason)](#Channel+setDefaultAutoArchiveDuration) ⇒
  - [.setFlags(flags, reason)](#Channel+setFlags) ⇒
  - [.lockPermissions()](#Channel+lockPermissions) ⇒
  - [.permissionsFor(userOrRole)](#Channel+permissionsFor) ⇒
  - [.fetchWebhooks()](#Channel+fetchWebhooks) ⇒
  - [.createWebhook([options])](#Channel+createWebhook) ⇒

<a name="new_Channel_new"></a>

### new Channel([data], guildId, client)

It's a constructor for a class that extends another class

| Param   | Description                              |
| ------- | ---------------------------------------- |
| [data]  | The data that was received from the API. |
| guildId | The ID of the guild the channel is in    |
| client  | DiscordClient                            |

<a name="Channel+parent"></a>

### channel.parent ⇒

If the parentId is not null, then return the parentId, otherwise return null.

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The parent channel of the channel.  
<a name="Channel+guild"></a>

### channel.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Channel</code>](#Channel)  
**Returns**: The guild object.  
<a name="Channel+fetch"></a>

### channel.fetch([options]) ⇒

It fetches the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.

| Param     | Description                              |
| --------- | ---------------------------------------- |
| [options] | An object containing additional options. |

<a name="Channel+delete"></a>

### channel.delete(reason) ⇒

It deletes a channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="Channel+edit"></a>

### channel.edit(options) ⇒

It edits the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel object.

| Param   | Description |
| ------- | ----------- |
| options | Object      |

<a name="Channel+fetchInvites"></a>

### channel.fetchInvites() ⇒

It fetches all the invites for a channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: An array of objects.  
<a name="Channel+createInvite"></a>

### channel.createInvite(options) ⇒

It creates an invite for the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The invite object.

| Param   | Description |
| ------- | ----------- |
| options | Object      |

<a name="Channel+clone"></a>

### channel.clone() ⇒

It clones the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The channel that was cloned.  
<a name="Channel+isGuildText"></a>

### channel.isGuildText() ⇒

If the type is Guild_Text, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isDM"></a>

### channel.isDM() ⇒

If the type is Dm, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The function isDM() is being returned.  
<a name="Channel+isStage"></a>

### channel.isStage() ⇒

If the type is Guild_Stage_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isForum"></a>

### channel.isForum() ⇒

If the type is Guild_Forum, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isGuildVoice"></a>

### channel.isGuildVoice() ⇒

If the type is Guild_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isNews"></a>

### channel.isNews() ⇒

If the type is Guild_News, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isCategory"></a>

### channel.isCategory() ⇒

If the type of the channel is Guild_Category, return true. Otherwise, return false

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: a boolean value.  
<a name="Channel+isText"></a>

### channel.isText() ⇒

If the type is one of the following, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isThread"></a>

### channel.isThread() ⇒

If the type is one of the three types of threads, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isVoice"></a>

### channel.isVoice() ⇒

If the type is Guild_Voice or Guild_Stage_Voice, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isDirectory"></a>

### channel.isDirectory() ⇒

If the type is Guild_Directory, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+inGuild"></a>

### channel.inGuild() ⇒

If the guildId is defined, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+inCachedGuild"></a>

### channel.inCachedGuild() ⇒

If the client has the guild in its cache, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+isRuleChannel"></a>

### channel.isRuleChannel() ⇒

If the guild's rules channel ID is equal to the channel's ID, return true, otherwise return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value is a boolean.  
<a name="Channel+isSystemChannel"></a>

### channel.isSystemChannel() ⇒

If the guild doesn't have a system channel, return null. If the guild has a system channel and it's
the same as the channel, return true. Otherwise, return false.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A boolean value.  
<a name="Channel+bannerURL"></a>

### channel.bannerURL([options]) ⇒

It returns the URL of the channel banner

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The bannerURL method returns the URL of the channel's banner.

| Param     | Description                 |
| --------- | --------------------------- |
| [options] | The options for the banner. |

<a name="Channel+setName"></a>

### channel.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| name   | The new name of the channel.                   |
| reason | The reason for the change (0-1024 characters). |

<a name="Channel+setType"></a>

### channel.setType(type, reason) ⇒

It edits the type of the channel.

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The edited message.

| Param  | Description                |
| ------ | -------------------------- |
| type   | The type of the channel.   |
| reason | The reason for the change. |

<a name="Channel+setTopic"></a>

### channel.setTopic(topic, reason) ⇒

It sets the topic of the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.

| Param  | Description                   |
| ------ | ----------------------------- |
| topic  | The new topic of the channel. |
| reason | The reason for the change.    |

<a name="Channel+setPosition"></a>

### channel.setPosition(position, reason) ⇒

It edits the position of a role in a guild

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.

| Param    | Description                                |
| -------- | ------------------------------------------ |
| position | The position you want to move the role to. |
| reason   | The reason for the move.                   |

<a name="Channel+setParent"></a>

### channel.setParent(parent, reason) ⇒

It edits the channel's parent

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.

| Param  | Description                                   |
| ------ | --------------------------------------------- |
| parent | The parent category to move this category to. |
| reason | The reason for the edit.                      |

<a name="Channel+setDefaultAutoArchiveDuration"></a>

### channel.setDefaultAutoArchiveDuration(defaultAutoArchiveDuration, reason) ⇒

It sets the default auto archive duration of a guild.

Here's a more detailed explanation of the above function:

It sets the default auto archive duration of a guild.

Here's an example of the above function in use:

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit function.

| Param                      | Description                                      |
| -------------------------- | ------------------------------------------------ |
| defaultAutoArchiveDuration | The default auto-archive duration for the guild. |
| reason                     | The reason for the change.                       |

<a name="Channel+setFlags"></a>

### channel.setFlags(flags, reason) ⇒

It edits the message with the given flags and reason

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The return value of the edit method.

| Param  | Description              |
| ------ | ------------------------ |
| flags  | The flags to set.        |
| reason | The reason for the edit. |

<a name="Channel+lockPermissions"></a>

### channel.lockPermissions() ⇒

It takes the permission overwrites from the parent channel and applies them to the current channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: The permissionOverwrites of the parent channel.  
<a name="Channel+permissionsFor"></a>

### channel.permissionsFor(userOrRole) ⇒

It takes a user or role and returns the permissions that user or role has in the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A Permissions object.

| Param      | Description                                  |
| ---------- | -------------------------------------------- |
| userOrRole | The user or role to get the permissions for. |

<a name="Channel+fetchWebhooks"></a>

### channel.fetchWebhooks() ⇒

It fetches all webhooks in a channel and returns them in a RaidenCol

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: An array of webhooks.  
<a name="Channel+createWebhook"></a>

### channel.createWebhook([options]) ⇒

It creates a webhook for the channel

**Kind**: instance method of [<code>Channel</code>](#Channel)  
**Returns**: A webhook object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="ClientApplication"></a>

## ClientApplication

**Kind**: global class

- [ClientApplication](#ClientApplication)
  - [new ClientApplication([data], client)](#new_ClientApplication_new)
  - [.commands](#ClientApplication+commands) ⇒
  - [.fetch()](#ClientApplication+fetch) ⇒
  - [.iconURL([options])](#ClientApplication+iconURL) ⇒

<a name="new_ClientApplication_new"></a>

### new ClientApplication([data], client)

It's a constructor for the Application class.

| Param  | Description   |
| ------ | ------------- |
| [data] |               |
| client | DiscordClient |

<a name="ClientApplication+commands"></a>

### clientApplication.commands ⇒

It returns a new instance of the ApplicationCommandManager class, which is a class that is defined
in the file ApplicationCommandManager.js.
The ApplicationCommandManager class is a class that is defined in

**Kind**: instance property of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: A new instance of the ApplicationCommandManager class.  
<a name="ClientApplication+fetch"></a>

### clientApplication.fetch() ⇒

It fetches the application information from the Discord API and returns it.

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: The client.application is being returned.  
<a name="ClientApplication+iconURL"></a>

### clientApplication.iconURL([options]) ⇒

"If the application has an icon, return the icon URL, otherwise return null."

The function takes an optional parameter, options, which is an object. If options is not provided,
it defaults to an empty object.

The function then checks if the application has an icon. If it does, it returns the icon URL,
otherwise it returns null.

The icon URL is generated by the client.cdn.ApplicationIcon function. This function takes the icon
ID, the dynamic flag, the size, the format, and the application ID.

The dynamic flag is true if the icon is animated, otherwise it's false.

The size is the size of the icon in pixels.

The format is the image format, either "png" or "gif".

The application ID is the ID of the application.

The client.cdn

**Kind**: instance method of [<code>ClientApplication</code>](#ClientApplication)  
**Returns**: The iconURL method returns the URL of the application's icon.

| Param     | Description               |
| --------- | ------------------------- |
| [options] | The options for the icon. |

<a name="ClientUser"></a>

## ClientUser

**Kind**: global class

- [ClientUser](#ClientUser)
  - [new ClientUser([data], client)](#new_ClientUser_new)
  - [.setAvatar(avatar)](#ClientUser+setAvatar) ⇒
  - [.setUsername(username)](#ClientUser+setUsername) ⇒
  - [.setAvatarDecorations(avatarDecorations)](#ClientUser+setAvatarDecorations) ⇒
  - [.setPresence(presence)](#ClientUser+setPresence) ⇒
  - [.setStatus(status)](#ClientUser+setStatus) ⇒
  - [.setActivities(activities)](#ClientUser+setActivities) ⇒

<a name="new_ClientUser_new"></a>

### new ClientUser([data], client)

It's a constructor function that takes in two parameters, data and client, and sets the data
parameter to an empty object if it's not passed in, and sets the client parameter to undefined if
it's not passed in.

| Param  | Description                                                          |
| ------ | -------------------------------------------------------------------- |
| [data] | The data that was returned from the API.                             |
| client | The client that instantiated the object. Every Discordie object that |

<a name="ClientUser+setAvatar"></a>

### clientUser.setAvatar(avatar) ⇒

It sets the avatar of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The user object.

| Param  | Description        |
| ------ | ------------------ |
| avatar | The avatar to set. |

<a name="ClientUser+setUsername"></a>

### clientUser.setUsername(username) ⇒

It sets the username of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value is a promise that resolves to the updated user object.

| Param    | Description                    |
| -------- | ------------------------------ |
| username | The new username for the user. |

<a name="ClientUser+setAvatarDecorations"></a>

### clientUser.setAvatarDecorations(avatarDecorations) ⇒

It sets the avatar decorations of the user

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The user object.

| Param             | Description                         |
| ----------------- | ----------------------------------- |
| avatarDecorations | A string of the avatar decorations. |

<a name="ClientUser+setPresence"></a>

### clientUser.setPresence(presence) ⇒

It sets the presence of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The presence of the user.

| Param    | Description |
| -------- | ----------- |
| presence | Presence    |

<a name="ClientUser+setStatus"></a>

### clientUser.setStatus(status) ⇒

It sets the status of the bot

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value of the setPresence method.

| Param  | Description                            |
| ------ | -------------------------------------- |
| status | The status of the user. Can be one of: |

<a name="ClientUser+setActivities"></a>

### clientUser.setActivities(activities) ⇒

It sets the activities of the client

**Kind**: instance method of [<code>ClientUser</code>](#ClientUser)  
**Returns**: The return value is the promise that is returned by the setPresence method.

| Param      | Description                                                                        |
| ---------- | ---------------------------------------------------------------------------------- |
| activities | An array of objects containing information about what the user is currently doing. |

<a name="CommandInteraction"></a>

## CommandInteraction

**Kind**: global class  
<a name="new_CommandInteraction_new"></a>

### new CommandInteraction([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the role is in          |
| client  | The client that instantiated the object.    |

<a name="CommandInteractionOptionResolver"></a>

## CommandInteractionOptionResolver

**Kind**: global class

- [CommandInteractionOptionResolver](#CommandInteractionOptionResolver)
  - [new CommandInteractionOptionResolver([data], guildId, channelId, client)](#new_CommandInteractionOptionResolver_new)
  - [.guild](#CommandInteractionOptionResolver+guild) ⇒
  - [.channel](#CommandInteractionOptionResolver+channel) ⇒
  - [.\_parse([options])](#CommandInteractionOptionResolver+_parse) ⇒
  - [.getString(name, [required])](#CommandInteractionOptionResolver+getString) ⇒
  - [.getNumber(name, [required])](#CommandInteractionOptionResolver+getNumber) ⇒
  - [.getInteger(name, [required])](#CommandInteractionOptionResolver+getInteger) ⇒
  - [.getBoolean(name, [required])](#CommandInteractionOptionResolver+getBoolean) ⇒
  - [.getAttachment([required])](#CommandInteractionOptionResolver+getAttachment) ⇒
  - [.getUser(name, [required])](#CommandInteractionOptionResolver+getUser) ⇒
  - [.getMember(name, [required])](#CommandInteractionOptionResolver+getMember) ⇒
  - [.getContextUser()](#CommandInteractionOptionResolver+getContextUser) ⇒
  - [.getMessage()](#CommandInteractionOptionResolver+getMessage) ⇒
  - [.getChannel(name, [required])](#CommandInteractionOptionResolver+getChannel) ⇒
  - [.getRole(name, [required])](#CommandInteractionOptionResolver+getRole) ⇒
  - [.getMentionable(name, [required])](#CommandInteractionOptionResolver+getMentionable) ⇒
  - [.getSubCommand([required])](#CommandInteractionOptionResolver+getSubCommand) ⇒
  - [.getSubCommandGroup([required])](#CommandInteractionOptionResolver+getSubCommandGroup) ⇒

<a name="new_CommandInteractionOptionResolver_new"></a>

### new CommandInteractionOptionResolver([data], guildId, channelId, client)

This function is a constructor for the class, and it takes in a data object, a guildId, a
channelId, and a client. It then sets the data object to the data object passed in, sets the
options object to the options object in the data object, sets the guildId to the guildId passed
in, and sets the channelId to the channelId passed in.

| Param     | Description                                      |
| --------- | ------------------------------------------------ |
| [data]    | The data that is passed to the constructor.      |
| guildId   | The ID of the guild the poll is in.              |
| channelId | The channel ID of the channel the message is in. |
| client    | The client that the message was sent from        |

<a name="CommandInteractionOptionResolver+guild"></a>

### commandInteractionOptionResolver.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The guild object.  
<a name="CommandInteractionOptionResolver+channel"></a>

### commandInteractionOptionResolver.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.  
<a name="CommandInteractionOptionResolver+_parse"></a>

### commandInteractionOptionResolver.\_parse([options]) ⇒

If the first element of the array is an object with a type of 2, then return the result of calling
the function again with the options of the first element.

If the first element of the array is an object with a type of 1, then return the result of calling
the function again with the options of the first element.

Otherwise, return the array.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The first option of the first option of the first option of the first option of the first
option of the first option of the first option of the first option of the first option of the
first option of the first option of the first option of the first option of the first option of
the first option of the first option of the first option of the first option of the first option
of the first option of

| Param     | Description                     |
| --------- | ------------------------------- |
| [options] | The options array from the JSON |

<a name="CommandInteractionOptionResolver+getString"></a>

### commandInteractionOptionResolver.getString(name, [required]) ⇒

It takes a string, and returns a string

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.

| Param      | Default            | Description                                          |
| ---------- | ------------------ | ---------------------------------------------------- |
| name       |                    | The name of the option you want to get the value of. |
| [required] | <code>false</code> | boolean                                              |

<a name="CommandInteractionOptionResolver+getNumber"></a>

### commandInteractionOptionResolver.getNumber(name, [required]) ⇒

If the option type is not a number, throw an error, otherwise return the value of the option.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.

| Param      | Default            | Description                             |
| ---------- | ------------------ | --------------------------------------- |
| name       |                    | The name of the option to be retrieved. |
| [required] | <code>false</code> | boolean                                 |

<a name="CommandInteractionOptionResolver+getInteger"></a>

### commandInteractionOptionResolver.getInteger(name, [required]) ⇒

It takes a string and a boolean as parameters, and returns a number or null.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.

| Param      | Default            | Description            |
| ---------- | ------------------ | ---------------------- |
| name       |                    | The name of the option |
| [required] | <code>false</code> | boolean                |

<a name="CommandInteractionOptionResolver+getBoolean"></a>

### commandInteractionOptionResolver.getBoolean(name, [required]) ⇒

It takes a string and a boolean as arguments, and returns a boolean.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The value of the option.

| Param      | Default            | Description                             |
| ---------- | ------------------ | --------------------------------------- |
| name       |                    | The name of the option to be retrieved. |
| [required] | <code>false</code> | boolean                                 |

<a name="CommandInteractionOptionResolver+getAttachment"></a>

### commandInteractionOptionResolver.getAttachment([required]) ⇒

It gets the attachment from the message

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The attachment of the message.

| Param      | Default            | Description |
| ---------- | ------------------ | ----------- |
| [required] | <code>false</code> | boolean     |

<a name="CommandInteractionOptionResolver+getUser"></a>

### commandInteractionOptionResolver.getUser(name, [required]) ⇒

It gets a user from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user object.

| Param      | Default            | Description                            |
| ---------- | ------------------ | -------------------------------------- |
| name       |                    | The name of the option you want to get |
| [required] | <code>false</code> | boolean                                |

<a name="CommandInteractionOptionResolver+getMember"></a>

### commandInteractionOptionResolver.getMember(name, [required]) ⇒

It gets a member from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The member object.

| Param      | Default            | Description            |
| ---------- | ------------------ | ---------------------- |
| name       |                    | The name of the option |
| [required] | <code>false</code> | boolean                |

<a name="CommandInteractionOptionResolver+getContextUser"></a>

### commandInteractionOptionResolver.getContextUser() ⇒

If the data is not null, and the data is resolved and the data type is not 2, throw a range error.
If the data is resolved, and the data type is 2, return the user.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user object.  
<a name="CommandInteractionOptionResolver+getMessage"></a>

### commandInteractionOptionResolver.getMessage() ⇒

It returns a message object from a message ID

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: A MessageManager object.  
<a name="CommandInteractionOptionResolver+getChannel"></a>

### commandInteractionOptionResolver.getChannel(name, [required]) ⇒

It gets the channel from the options.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The channel object.

| Param      | Default            | Description                             |
| ---------- | ------------------ | --------------------------------------- |
| name       |                    | The name of the option you want to get. |
| [required] | <code>false</code> | boolean                                 |

<a name="CommandInteractionOptionResolver+getRole"></a>

### commandInteractionOptionResolver.getRole(name, [required]) ⇒

It gets the role from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The role object.

| Param      | Default            | Description            |
| ---------- | ------------------ | ---------------------- |
| name       |                    | The name of the option |
| [required] | <code>false</code> | boolean                |

<a name="CommandInteractionOptionResolver+getMentionable"></a>

### commandInteractionOptionResolver.getMentionable(name, [required]) ⇒

It gets the mentionable object from the options

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The user, member, or role that was selected.

| Param      | Default            | Description             |
| ---------- | ------------------ | ----------------------- |
| name       |                    | The name of the option. |
| [required] | <code>false</code> | boolean                 |

<a name="CommandInteractionOptionResolver+getSubCommand"></a>

### commandInteractionOptionResolver.getSubCommand([required]) ⇒

It returns the name of the subcommand if it exists, otherwise it returns null.

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The name of the sub command.

| Param      | Default            | Description |
| ---------- | ------------------ | ----------- |
| [required] | <code>false</code> | boolean     |

<a name="CommandInteractionOptionResolver+getSubCommandGroup"></a>

### commandInteractionOptionResolver.getSubCommandGroup([required]) ⇒

If the option has a filter, return the filter's name. If the option doesn't have a filter, return
null

**Kind**: instance method of [<code>CommandInteractionOptionResolver</code>](#CommandInteractionOptionResolver)  
**Returns**: The Sub_Command_Group of the option.

| Param      | Default            | Description |
| ---------- | ------------------ | ----------- |
| [required] | <code>false</code> | boolean     |

<a name="ContextMenuInteraction"></a>

## ContextMenuInteraction

**Kind**: global class  
<a name="new_ContextMenuInteraction_new"></a>

### new ContextMenuInteraction([data], guildId, client)

It's a constructor function that takes in data, guildId, and client as parameters. It then calls the
super function, which is a function that is inherited from the parent class. It then sets the
targetId and resolved properties to the data that is passed in.

| Param   | Description                                |
| ------- | ------------------------------------------ |
| [data]  | The data that was sent from the API.       |
| guildId | The ID of the guild the case is in         |
| client  | The client that the event was emitted from |

<a name="ContextMessageInteraction"></a>

## ContextMessageInteraction

**Kind**: global class  
<a name="new_ContextMessageInteraction_new"></a>

### new ContextMessageInteraction([data], guildId, client)

It's a constructor for the class.

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the role is in.         |
| client  | The client that instantiated the object.    |

<a name="ContextUserInteraction"></a>

## ContextUserInteraction

**Kind**: global class  
<a name="new_ContextUserInteraction_new"></a>

### new ContextUserInteraction([data], guildId, client)

It's a constructor function that takes in data, guildId, and client as parameters.

| Param   | Description                                       |
| ------- | ------------------------------------------------- |
| [data]  | The data that the class will be constructed with. |
| guildId | The ID of the guild the role is in.               |
| client  | The client that instantiated the object.          |

<a name="DirectoryChannel"></a>

## DirectoryChannel

**Kind**: global class  
<a name="new_DirectoryChannel_new"></a>

### new DirectoryChannel([data], client)

`constructor` is a function that is called when a new instance of the class is created

| Param  | Description                                        |
| ------ | -------------------------------------------------- |
| [data] | The data that was sent from the API.               |
| client | The client that created the instance of the class. |

<a name="DMChannel"></a>

## DMChannel

**Kind**: global class  
<a name="new_DMChannel_new"></a>

### new DMChannel([data], [guildId], client)

It's a constructor for a class that extends another class

| Param     | Default       | Description                                 |
| --------- | ------------- | ------------------------------------------- |
| [data]    |               | The data that is passed to the constructor. |
| [guildId] | <code></code> | The ID of the guild the message is in.      |
| client    |               | The client instance                         |

<a name="Emoji"></a>

## Emoji

**Kind**: global class

- [Emoji](#Emoji)
  - [new Emoji([data], guildId, client)](#new_Emoji_new)
  - [.fetch([options])](#Emoji+fetch) ⇒
  - [.edit([options])](#Emoji+edit) ⇒
  - [.setName(name, reason)](#Emoji+setName) ⇒
  - [.setRoles(roles, reason)](#Emoji+setRoles) ⇒
  - [.delete(reason)](#Emoji+delete) ⇒

<a name="new_Emoji_new"></a>

### new Emoji([data], guildId, client)

It's a constructor for the Emoji class

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was passed to the constructor. |
| guildId | The ID of the guild this emoji is in.        |
| client  | The client that instantiated the Emoji       |

<a name="Emoji+fetch"></a>

### emoji.fetch([options]) ⇒

`fetch` fetches the emoji from the guild

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The emoji object

| Param     | Description                              |
| --------- | ---------------------------------------- |
| [options] | An object with the following properties: |

<a name="Emoji+edit"></a>

### emoji.edit([options]) ⇒

`edit` edits the emoji

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The edited emoji.

| Param     | Description                                           |
| --------- | ----------------------------------------------------- |
| [options] | An object containing the new properties of the emoji. |

<a name="Emoji+setName"></a>

### emoji.setName(name, reason) ⇒

`setName` sets the name of the channel

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The name of the channel.

| Param  | Description                  |
| ------ | ---------------------------- |
| name   | The new name of the channel. |
| reason | The reason for the change.   |

<a name="Emoji+setRoles"></a>

### emoji.setRoles(roles, reason) ⇒

It sets the roles of a member

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The roles of the member.

| Param  | Description              |
| ------ | ------------------------ |
| roles  | The roles to set.        |
| reason | The reason for the edit. |

<a name="Emoji+delete"></a>

### emoji.delete(reason) ⇒

`delete` deletes the emoji

**Kind**: instance method of [<code>Emoji</code>](#Emoji)  
**Returns**: The emoji object.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="FetchedThreads"></a>

## FetchedThreads ⇐ <code>Base</code>

A class representing a collection of fetched threads from a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_FetchedThreads_new"></a>

### new FetchedThreads(data, guildId, client)

| Param   | Type                | Description                              |
| ------- | ------------------- | ---------------------------------------- |
| data    | <code>Object</code> | The data for the fetched threads.        |
| guildId | <code>string</code> | The ID of the guild.                     |
| client  | <code>Client</code> | The client that instantiated this class. |

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

| Param     | Type                | Default         | Description                                     |
| --------- | ------------------- | --------------- | ----------------------------------------------- |
| [data]    | <code>Object</code> | <code>{}</code> | The data for the forum channel                  |
| [guildId] | <code>string</code> |                 | The ID of the guild that the channel belongs to |
| [client]  | <code>Client</code> |                 | The client that instantiated the channel        |

<a name="ForumChannel+createThread"></a>

### forumChannel.createThread([options]) ⇒ <code>Promise.&lt;Object&gt;</code>

Creates a new thread in the forum channel.

**Kind**: instance method of [<code>ForumChannel</code>](#ForumChannel)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - The thread data

| Param                         | Type                 | Default         | Description                                                 |
| ----------------------------- | -------------------- | --------------- | ----------------------------------------------------------- |
| [options]                     | <code>Object</code>  | <code>{}</code> | The options for the thread                                  |
| [options.name]                | <code>string</code>  |                 | The name of the thread                                      |
| [options.autoArchiveDuration] | <code>number</code>  |                 | The duration in minutes to automatically archive the thread |
| [options.rateLimitPerUser]    | <code>number</code>  |                 | The rate limit per user for the thread in seconds           |
| [options.reason]              | <code>string</code>  |                 | The reason for creating the thread                          |
| [options.message]             | <code>Message</code> |                 | The message to use as a basis for the thread                |

<a name="Guild"></a>

## Guild ⇐ <code>BaseGuild</code>

The Guild structure class

**Kind**: global class  
**Extends**: <code>BaseGuild</code>

- [Guild](#Guild) ⇐ <code>BaseGuild</code>
  - [new Guild(data, client)](#new_Guild_new)
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

### new Guild(data, client)

Creates a new Guild object.

| Param  | Type                | Description                             |
| ------ | ------------------- | --------------------------------------- |
| data   | <code>Object</code> | The data for the guild.                 |
| client | <code>Client</code> | The client that instantiated the guild. |

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
| [options]         | <code>Object</code>  | <code>{}</code>    | Additional options for the URL.   |
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
| [options]         | <code>Object</code>  | <code>{}</code>    | Additional options for the URL.     |
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
| [options]         | <code>Object</code>  | <code>{}</code>    | Additional options for the URL.     |
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
| [options]         | <code>Object</code>  | <code>{}</code>    | Additional options for the URL.               |
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
| [options]            | <code>Object</code>                                       | <code>{}</code> | The options for fetching audit logs.           |
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

Constructs a new `GuildAuditLog` object.

| Param   | Type                | Default         | Description          |
| ------- | ------------------- | --------------- | -------------------- |
| [data]  | <code>Object</code> | <code>{}</code> | The audit log data.  |
| guildId | <code>string</code> |                 | The ID of the guild. |
| client  | <code>Client</code> |                 | The client object.   |

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

| Param   | Type                | Default         | Description                 |
| ------- | ------------------- | --------------- | --------------------------- |
| [data]  | <code>Object</code> | <code>{}</code> | The audit log changes data. |
| guildId | <code>string</code> |                 | The ID of the guild.        |
| client  | <code>Client</code> |                 | The client object.          |

<a name="GuildAuditLogEntry"></a>

## GuildAuditLogEntry ⇐ <code>Base</code>

Represents an entry in the audit log for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_GuildAuditLogEntry_new"></a>

### new GuildAuditLogEntry([data], guildId, client)

| Param   | Type                | Default         | Description                              |
| ------- | ------------------- | --------------- | ---------------------------------------- |
| [data]  | <code>Object</code> | <code>{}</code> | The data for the audit log entry         |
| guildId | <code>string</code> |                 | The ID of the guild the entry belongs to |
| client  | <code>Client</code> |                 | The client that instantiated this entry  |

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

It's a class that represents a scheduled event in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildScheduledEvent](#GuildScheduledEvent) ⇐ <code>Base</code>
  - [new GuildScheduledEvent(data, guildId, client)](#new_GuildScheduledEvent_new)
  - [.guild](#GuildScheduledEvent+guild) ⇒
  - [.creator](#GuildScheduledEvent+creator) ⇒
  - [.fetch(options)](#GuildScheduledEvent+fetch) ⇒
  - [.edit([options])](#GuildScheduledEvent+edit) ⇒
  - [.delete()](#GuildScheduledEvent+delete) ⇒
  - [.setName(name, reason)](#GuildScheduledEvent+setName) ⇒
  - [.setDescription(description, reason)](#GuildScheduledEvent+setDescription) ⇒
  - [.setPrivacyLevel(privacyLevel, reason)](#GuildScheduledEvent+setPrivacyLevel) ⇒
  - [.setEntityType(entityType, reason)](#GuildScheduledEvent+setEntityType) ⇒
  - [.setEntityMetadata(entityMetadata, reason)](#GuildScheduledEvent+setEntityMetadata) ⇒
  - [.setImage(image, reason)](#GuildScheduledEvent+setImage) ⇒
  - [.setScheduledStartTime(scheduledStartTime, reason)](#GuildScheduledEvent+setScheduledStartTime) ⇒
  - [.setScheduledEndTime(scheduledEndTime, reason)](#GuildScheduledEvent+setScheduledEndTime) ⇒
  - [.setStatus(status, reason)](#GuildScheduledEvent+setStatus) ⇒
  - [.coverImageURL([options])](#GuildScheduledEvent+coverImageURL) ⇒
  - [.inviteURL()](#GuildScheduledEvent+inviteURL) ⇒

<a name="new_GuildScheduledEvent_new"></a>

### new GuildScheduledEvent(data, guildId, client)

| Param   | Description                         |
| ------- | ----------------------------------- |
| data    | guildId, client                     |
| guildId | The ID of the guild the event is in |
| client  | Discord.Client                      |

<a name="GuildScheduledEvent+guild"></a>

### guildScheduledEvent.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The guild object.  
<a name="GuildScheduledEvent+creator"></a>

### guildScheduledEvent.creator ⇒

It returns the user object of the creator of the guild

**Kind**: instance property of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The creator of the guild.  
<a name="GuildScheduledEvent+fetch"></a>

### guildScheduledEvent.fetch(options) ⇒

It fetches the event from the guild's event cache

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The event object.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="GuildScheduledEvent+edit"></a>

### guildScheduledEvent.edit([options]) ⇒

It edits the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit method.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildScheduledEvent+delete"></a>

### guildScheduledEvent.delete() ⇒

It deletes the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the delete method of the events object of the guild object of the
event object.  
<a name="GuildScheduledEvent+setName"></a>

### guildScheduledEvent.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The name of the channel.

| Param  | Description                  |
| ------ | ---------------------------- |
| name   | The new name of the channel. |
| reason | The reason for the edit.     |

<a name="GuildScheduledEvent+setDescription"></a>

### guildScheduledEvent.setDescription(description, reason) ⇒

It edits the description of the channel

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The description of the channel.

| Param       | Description                         |
| ----------- | ----------------------------------- |
| description | The new description of the channel. |
| reason      | The reason for the edit.            |

<a name="GuildScheduledEvent+setPrivacyLevel"></a>

### guildScheduledEvent.setPrivacyLevel(privacyLevel, reason) ⇒

This function sets the privacy level of the current channel to the privacy level specified in the
first parameter, and sets the reason for the change to the reason specified in the second
parameter.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.

| Param        | Description                       |
| ------------ | --------------------------------- |
| privacyLevel | The privacy level of the channel. |
| reason       | The reason for the change.        |

<a name="GuildScheduledEvent+setEntityType"></a>

### guildScheduledEvent.setEntityType(entityType, reason) ⇒

It returns a promise that resolves to the result of calling the edit function with the given
parameters.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.

| Param      | Description                                          |
| ---------- | ---------------------------------------------------- |
| entityType | The type of entity you want to change the entity to. |
| reason     | The reason for the change.                           |

<a name="GuildScheduledEvent+setEntityMetadata"></a>

### guildScheduledEvent.setEntityMetadata(entityMetadata, reason) ⇒

It edits the entity metadata of the message

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.

| Param          | Description                 |
| -------------- | --------------------------- |
| entityMetadata | The metadata of the entity. |
| reason         | The reason for the edit.    |

<a name="GuildScheduledEvent+setImage"></a>

### guildScheduledEvent.setImage(image, reason) ⇒

It edits the image of the embed

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.

| Param  | Description                     |
| ------ | ------------------------------- |
| image  | The image to set the avatar to. |
| reason | The reason for the edit.        |

<a name="GuildScheduledEvent+setScheduledStartTime"></a>

### guildScheduledEvent.setScheduledStartTime(scheduledStartTime, reason) ⇒

It takes a scheduledStartTime and a reason, and then it returns the result of calling the edit
function with the scheduledStartTime and reason as arguments.

The edit function is defined in the same file, and it looks like this:

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit() method.

| Param              | Description                                          |
| ------------------ | ---------------------------------------------------- |
| scheduledStartTime | The time at which the meeting is scheduled to start. |
| reason             | The reason for the change.                           |

<a name="GuildScheduledEvent+setScheduledEndTime"></a>

### guildScheduledEvent.setScheduledEndTime(scheduledEndTime, reason) ⇒

It takes a time and a reason, and then it edits the event with the time and reason.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit method.

| Param            | Description                                                                                                                |
| ---------------- | -------------------------------------------------------------------------------------------------------------------------- |
| scheduledEndTime | The time at which the live stream is scheduled to end. The value is specified in ISO 8601 (YYYY-MM-DDThh:mm:ss.sZ) format. |
| reason           | The reason for the change.                                                                                                 |

<a name="GuildScheduledEvent+setStatus"></a>

### guildScheduledEvent.setStatus(status, reason) ⇒

It sets the status of the message.

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The return value of the edit function.

| Param  | Description              |
| ------ | ------------------------ |
| status | The status of the embed. |
| reason | The reason for the edit. |

<a name="GuildScheduledEvent+coverImageURL"></a>

### guildScheduledEvent.coverImageURL([options]) ⇒

It returns the URL of the cover image of the event

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The coverImageURL is being returned.

| Param     |
| --------- |
| [options] |

<a name="GuildScheduledEvent+inviteURL"></a>

### guildScheduledEvent.inviteURL() ⇒

It returns a URL to the invite

**Kind**: instance method of [<code>GuildScheduledEvent</code>](#GuildScheduledEvent)  
**Returns**: The inviteURL() method returns a string that is the invite URL for the event.

<a name="GuildScheduledEventUser"></a>

## GuildScheduledEventUser ⇐ <code>Base</code>

It's a class that represents a user that is going to an event

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildScheduledEventUser](#GuildScheduledEventUser) ⇐ <code>Base</code>
  - [new GuildScheduledEventUser([data], guildId, eventId, client)](#new_GuildScheduledEventUser_new)
  - [.guild](#GuildScheduledEventUser+guild) ⇒
  - [.guildScheduledEvent](#GuildScheduledEventUser+guildScheduledEvent) ⇒

<a name="new_GuildScheduledEventUser_new"></a>

### new GuildScheduledEventUser([data], guildId, eventId, client)

This function is used to create a new instance of the class GuildScheduledEventMember.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| [data]  | The data that was received from the API. |
| guildId | The ID of the guild the event is in      |
| eventId | The ID of the event                      |
| client  | Discord.Client                           |

<a name="GuildScheduledEventUser+guild"></a>

### guildScheduledEventUser.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guild object.  
<a name="GuildScheduledEventUser+guildScheduledEvent"></a>

### guildScheduledEventUser.guildScheduledEvent ⇒

"If the guild exists, add the guildScheduledEventId to the events array, otherwise return null."

**Kind**: instance property of [<code>GuildScheduledEventUser</code>](#GuildScheduledEventUser)  
**Returns**: The guildScheduledEventId is being returned.

<a name="GuildTemplate"></a>

## GuildTemplate ⇐ <code>Base</code>

It's a class that represents a guild template.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildTemplate](#GuildTemplate) ⇐ <code>Base</code>
  - [new GuildTemplate([data], client)](#new_GuildTemplate_new)
  - [.guild](#GuildTemplate+guild) ⇒
  - [.fetch()](#GuildTemplate+fetch) ⇒
  - [.sync()](#GuildTemplate+sync) ⇒
  - [.edit([options])](#GuildTemplate+edit) ⇒
  - [.delete()](#GuildTemplate+delete) ⇒
  - [.setName(name)](#GuildTemplate+setName) ⇒
  - [.setDescription(description)](#GuildTemplate+setDescription) ⇒
  - [.createGuild([options])](#GuildTemplate+createGuild) ⇒

<a name="new_GuildTemplate_new"></a>

### new GuildTemplate([data], client)

It's a constructor for a class called Invite.

| Param  | Description                                  |
| ------ | -------------------------------------------- |
| [data] | The data that is passed to the constructor.  |
| client | The client that the invite was fetched from. |

<a name="GuildTemplate+guild"></a>

### guildTemplate.guild ⇒

It returns the guild object of the guild that the channel is in

**Kind**: instance property of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The guild object.  
<a name="GuildTemplate+fetch"></a>

### guildTemplate.fetch() ⇒

It fetches the guild template from the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the async function is a Promise.  
<a name="GuildTemplate+sync"></a>

### guildTemplate.sync() ⇒

It syncs the template with the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the sync() method.  
<a name="GuildTemplate+edit"></a>

### guildTemplate.edit([options]) ⇒

It edits a template

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the function is the return value of the function that is being
called.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildTemplate+delete"></a>

### guildTemplate.delete() ⇒

It deletes the template from the database

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the delete method of the templates object of the guild object.  
<a name="GuildTemplate+setName"></a>

### guildTemplate.setName(name) ⇒

It sets the name of the channel

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The return value of the edit() method.

| Param | Description              |
| ----- | ------------------------ |
| name  | The name of the channel. |

<a name="GuildTemplate+setDescription"></a>

### guildTemplate.setDescription(description) ⇒

It edits the description of the channel

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The description of the channel.

| Param       | Description                         |
| ----------- | ----------------------------------- |
| description | The new description of the channel. |

<a name="GuildTemplate+createGuild"></a>

### guildTemplate.createGuild([options]) ⇒

It creates a guild

**Kind**: instance method of [<code>GuildTemplate</code>](#GuildTemplate)  
**Returns**: The client.generateTemplate function is being returned.

| Param     | Description                |
| --------- | -------------------------- |
| [options] | The options for the guild. |

<a name="GuildVanity"></a>

## GuildVanity ⇐ <code>Base</code>

It's a class that represents a guild vanity

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildVanity](#GuildVanity) ⇐ <code>Base</code>
  - [new GuildVanity([data], guildId, client)](#new_GuildVanity_new)
  - [.guild](#GuildVanity+guild) ⇒

<a name="new_GuildVanity_new"></a>

### new GuildVanity([data], guildId, client)

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the invite is for.      |
| client  | The client instance                         |

<a name="GuildVanity+guild"></a>

### guildVanity.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildVanity</code>](#GuildVanity)  
**Returns**: The guild object.

<a name="GuildWidget"></a>

## GuildWidget ⇐ <code>Base</code>

It's a class that represents a guild widget

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildWidget](#GuildWidget) ⇐ <code>Base</code>
  - [new GuildWidget([data], guildId, client)](#new_GuildWidget_new)
  - [.guild](#GuildWidget+guild) ⇒
  - [.fetchSettings()](#GuildWidget+fetchSettings) ⇒

<a name="new_GuildWidget_new"></a>

### new GuildWidget([data], guildId, client)

It takes in a data object, a guild id, and a client, and then it sets the id, name, instantInvite,
channels, members, and presenceCount properties of the class to the values of the data object, the
guild id, and the client

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild                         |
| client  | The client                                  |

<a name="GuildWidget+guild"></a>

### guildWidget.guild ⇒

It adds the guild to the cache if it's not already there, and then returns the guild

**Kind**: instance property of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: The guild object.  
<a name="GuildWidget+fetchSettings"></a>

### guildWidget.fetchSettings() ⇒

It fetches the settings of the widget

**Kind**: instance method of [<code>GuildWidget</code>](#GuildWidget)  
**Returns**: The settings of the widget.

<a name="GuildWidgetSettings"></a>

## GuildWidgetSettings ⇐ <code>Base</code>

It's a class that represents the settings of a guild's widget

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildWidgetSettings](#GuildWidgetSettings) ⇐ <code>Base</code>
  - [new GuildWidgetSettings([data], guildId, client)](#new_GuildWidgetSettings_new)
  - [.guild](#GuildWidgetSettings+guild) ⇒
  - [.channel](#GuildWidgetSettings+channel) ⇒
  - [.edit([options])](#GuildWidgetSettings+edit) ⇒
  - [.setEnabled(enabled, reason)](#GuildWidgetSettings+setEnabled) ⇒
  - [.setChannel(channel, reason)](#GuildWidgetSettings+setChannel) ⇒

<a name="new_GuildWidgetSettings_new"></a>

### new GuildWidgetSettings([data], guildId, client)

This function is a constructor that takes in data, guildId, and client as parameters and sets the
values of the properties of the class to the values of the parameters.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that is passed to the constructor.  |
| guildId | The ID of the guild the settings are for.    |
| client  | The client that the command is being run on. |

<a name="GuildWidgetSettings+guild"></a>

### guildWidgetSettings.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The guild object.  
<a name="GuildWidgetSettings+channel"></a>

### guildWidgetSettings.channel ⇒

It returns the channel object of the message

**Kind**: instance property of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The channel object.  
<a name="GuildWidgetSettings+edit"></a>

### guildWidgetSettings.edit([options]) ⇒

It edits the widget of the guild

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The return value is a Promise that resolves to the edited widget.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildWidgetSettings+setEnabled"></a>

### guildWidgetSettings.setEnabled(enabled, reason) ⇒

`setEnabled` is an async function that takes two parameters, `enabled` and `reason`, and returns the
result of calling `edit` with an object containing the `enabled` and `reason` parameters.
`CommandoCommand`.

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The return value of the edit function.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| enabled | Whether the command should be enabled or not. |
| reason  | The reason for the action                     |

<a name="GuildWidgetSettings+setChannel"></a>

### guildWidgetSettings.setChannel(channel, reason) ⇒

It edits the channel of the voice connection

**Kind**: instance method of [<code>GuildWidgetSettings</code>](#GuildWidgetSettings)  
**Returns**: The channel that the message was sent in.

| Param   | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| channel | The channel to move the member to, can be a voice channel or a category. |
| reason  | The reason for the edit.                                                 |

<a name="Interaction"></a>

## Interaction ⇐ <code>Base</code>

It's a class that handles interactions with the Discord API.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Interaction](#Interaction) ⇐ <code>Base</code>
  - [new Interaction(data, guildId, client)](#new_Interaction_new)
  - [.channel](#Interaction+channel) ⇒
  - [.guild](#Interaction+guild) ⇒
  - [.user](#Interaction+user) ⇒
  - [.isChatInput()](#Interaction+isChatInput) ⇒
  - [.isCommand()](#Interaction+isCommand) ⇒
  - [.isUser()](#Interaction+isUser) ⇒
  - [.isMessage()](#Interaction+isMessage) ⇒
  - [.isButton()](#Interaction+isButton) ⇒
  - [.isModal()](#Interaction+isModal) ⇒
  - [.isAutocomplete()](#Interaction+isAutocomplete) ⇒
  - [.isSelect()](#Interaction+isSelect) ⇒
  - [.isContext()](#Interaction+isContext) ⇒
  - [.isDM()](#Interaction+isDM) ⇒
  - [.getValue(name)](#Interaction+getValue) ⇒
  - [.fetchReply()](#Interaction+fetchReply) ⇒
  - [.reply(data)](#Interaction+reply) ⇒
  - [.deferReply(options)](#Interaction+deferReply) ⇒
  - [.modalSubmit(options)](#Interaction+modalSubmit) ⇒
  - [.deleteReply()](#Interaction+deleteReply) ⇒
  - [.editReply(options)](#Interaction+editReply) ⇒
  - [.followUp(options)](#Interaction+followUp) ⇒

<a name="new_Interaction_new"></a>

### new Interaction(data, guildId, client)

It's a constructor function that takes in data, guildId, and client as parameters.

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| data    | The data that is passed to the constructor. |
| guildId | The ID of the guild the user is in.         |
| client  | Discord.Client                              |

<a name="Interaction+channel"></a>

### interaction.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The channel object.  
<a name="Interaction+guild"></a>

### interaction.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The guild object.  
<a name="Interaction+user"></a>

### interaction.user ⇒

It returns the user object of the user who sent the message

**Kind**: instance property of [<code>Interaction</code>](#Interaction)  
**Returns**: The user object.  
<a name="Interaction+isChatInput"></a>

### interaction.isChatInput() ⇒

If the commandType is Chat_Input or 1, return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isCommand"></a>

### interaction.isCommand() ⇒

If the type is either "Application_Command" or 2, return true, otherwise return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isUser"></a>

### interaction.isUser() ⇒

If the commandType is either "User" or 2, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isMessage"></a>

### interaction.isMessage() ⇒

If the command type is either "Message" or 3, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isButton"></a>

### interaction.isButton() ⇒

If the componentType is either "Button" or 2, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+isModal"></a>

### interaction.isModal() ⇒

If the type is either "Modal_Submit" or 5, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isAutocomplete"></a>

### interaction.isAutocomplete() ⇒

If the type is either "Application_Command_Autocomplete" or 4, return true, otherwise return
false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isSelect"></a>

### interaction.isSelect() ⇒

If the componentType is either "Select_Menu" or 3, then return true, otherwise return false.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isContext"></a>

### interaction.isContext() ⇒

If the command type is a user, message, 2, or 3, then return true. Otherwise, return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The return value is a boolean.  
<a name="Interaction+isDM"></a>

### interaction.isDM() ⇒

If the channel type is a DM, return true, otherwise return false

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: a boolean value.  
<a name="Interaction+getValue"></a>

### interaction.getValue(name) ⇒

It takes a name as an argument, and returns the value of the option with that name

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The value of the option that matches the name.

| Param | Description                                          |
| ----- | ---------------------------------------------------- |
| name  | The name of the option you want to get the value of. |

<a name="Interaction+fetchReply"></a>

### interaction.fetchReply() ⇒

It fetches the original message that the webhook was created with

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.  
<a name="Interaction+reply"></a>

### interaction.reply(data) ⇒

It sends a reply to the user

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The reply method returns a Promise that resolves to the reply message.

| Param | Description                   |
| ----- | ----------------------------- |
| data  | The data to send to the user. |

<a name="Interaction+deferReply"></a>

### interaction.deferReply(options) ⇒

It takes an object of options, creates a payload from those options, and then sends that payload to
the API.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The response from the API.

| Param   |
| ------- |
| options |

<a name="Interaction+modalSubmit"></a>

### interaction.modalSubmit(options) ⇒

It takes an object, creates a new object with the original object and a number, and then sends that
new object to a URL.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The response from the API.

| Param   | Description         |
| ------- | ------------------- |
| options | The options object. |

<a name="Interaction+deleteReply"></a>

### interaction.deleteReply() ⇒

It deletes the message that was sent to the webhook

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message that was deleted.  
<a name="Interaction+editReply"></a>

### interaction.editReply(options) ⇒

It edits a message that was sent by a webhook

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.

| Param   |
| ------- |
| options |

<a name="Interaction+followUp"></a>

### interaction.followUp(options) ⇒

It takes an object of options, creates a message payload, and then sends it to the webhook.

**Kind**: instance method of [<code>Interaction</code>](#Interaction)  
**Returns**: The message object.

| Param   |
| ------- |
| options |

<a name="InteractionWebhook"></a>

## InteractionWebhook ⇐ <code>WebhookClient</code>

It's a class that extends the WebhookClient class, and it's used to handle interactions

**Kind**: global class  
**Extends**: <code>WebhookClient</code>  
<a name="new_InteractionWebhook_new"></a>

### new InteractionWebhook([data], client)

The constructor function is a special method for creating and initializing an object created
within a class.

| Param  | Description                              |
| ------ | ---------------------------------------- |
| [data] | The data that was returned from the API. |
| client | The client that instantiated the object. |

<a name="Invite"></a>

## Invite ⇐ <code>Base</code>

It's a class that represents an invite.

**Kind**: global class  
**Extends**: <code>Base</code>

- [Invite](#Invite) ⇐ <code>Base</code>
  - [new Invite(data, guild, client)](#new_Invite_new)
  - [.fetch(options)](#Invite+fetch) ⇒
  - [.delete(reason)](#Invite+delete) ⇒

<a name="new_Invite_new"></a>

### new Invite(data, guild, client)

It's a constructor function that takes in data, guild, and client as parameters.

| Param  | Description                              |
| ------ | ---------------------------------------- |
| data   | The data that was received from the API. |
| guild  | Guild                                    |
| client | Discord.Client                           |

<a name="Invite+fetch"></a>

### invite.fetch(options) ⇒

It fetches the invite from the Discord API

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: The invite object.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="Invite+delete"></a>

### invite.delete(reason) ⇒

It deletes the invite

**Kind**: instance method of [<code>Invite</code>](#Invite)  
**Returns**: The return value is the invite object.

| Param  | Description                         |
| ------ | ----------------------------------- |
| reason | The reason for deleting the invite. |

<a name="Message"></a>

## Message ⇐ <code>Base</code>

It's a class that extends another class

**Kind**: global class  
**Extends**: <code>Base</code>

- [Message](#Message) ⇐ <code>Base</code>
  - [new Message([data], guildId, channelId, client)](#new_Message_new)
  - [.channel](#Message+channel) ⇒
  - [.guild](#Message+guild) ⇒
  - [.system](#Message+system) ⇒
  - [.author](#Message+author) ⇒
  - [.edit(options)](#Message+edit) ⇒
  - [.delete(reason)](#Message+delete) ⇒
  - [.fetch([options])](#Message+fetch) ⇒
  - [.crosspost()](#Message+crosspost) ⇒
  - [.react(emoji)](#Message+react) ⇒
  - [.removeEmbeds()](#Message+removeEmbeds) ⇒
  - [.removeAttachments()](#Message+removeAttachments) ⇒
  - [.removeAttachment(attachment)](#Message+removeAttachment) ⇒
  - [.reply([options])](#Message+reply) ⇒
  - [.fetchReference()](#Message+fetchReference) ⇒
  - [.pin(reason)](#Message+pin) ⇒
  - [.unpin(reason)](#Message+unpin) ⇒
  - [.inGuild()](#Message+inGuild) ⇒
  - [.equals(message)](#Message+equals) ⇒
  - [.createThread([options])](#Message+createThread) ⇒
  - [.addAttachments([attachments])](#Message+addAttachments) ⇒

<a name="new_Message_new"></a>

### new Message([data], guildId, channelId, client)

It's a constructor for a class that extends another class

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| [data]    | The data that is passed to the constructor. |
| guildId   | The ID of the guild the message is in.      |
| channelId | The channel ID of the message               |
| client    | RaidenClient                                |

<a name="Message+channel"></a>

### message.channel ⇒

It returns the channel object if it exists, otherwise it returns null

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The channel object.  
<a name="Message+guild"></a>

### message.guild ⇒

It returns the guild object if it exists, otherwise it returns null

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The guild object.  
<a name="Message+system"></a>

### message.system ⇒

If the type is not one of the four types listed, then it's a system type

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The value of the property "type" of the object "this".  
<a name="Message+author"></a>

### message.author ⇒

It returns the author of the message

**Kind**: instance property of [<code>Message</code>](#Message)  
**Returns**: The author of the message.  
<a name="Message+edit"></a>

### message.edit(options) ⇒

It edits a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param   | Description |
| ------- | ----------- |
| options | Object      |

<a name="Message+delete"></a>

### message.delete(reason) ⇒

It deletes a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="Message+fetch"></a>

### message.fetch([options]) ⇒

It fetches the message from the channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| [options] | An object containing additional options to pass to the method. |

<a name="Message+crosspost"></a>

### message.crosspost() ⇒

It crossposts a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+react"></a>

### message.react(emoji) ⇒

It reacts to a message with an emoji

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param | Description                                                                    |
| ----- | ------------------------------------------------------------------------------ |
| emoji | The emoji to react with. Can be a string (e.g. "🤔") or a custom emoji object. |

<a name="Message+removeEmbeds"></a>

### message.removeEmbeds() ⇒

It removes embeds from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+removeAttachments"></a>

### message.removeAttachments() ⇒

It removes all attachments from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.  
<a name="Message+removeAttachment"></a>

### message.removeAttachment(attachment) ⇒

It removes an attachment from a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message is being edited with the new attachments.

| Param      | Description               |
| ---------- | ------------------------- |
| attachment | The attachment to remove. |

<a name="Message+reply"></a>

### message.reply([options]) ⇒

It sends a message to the channel that the message was sent in

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param     | Description                             |
| --------- | --------------------------------------- |
| [options] | The options to pass to the send method. |

<a name="Message+fetchReference"></a>

### message.fetchReference() ⇒

It fetches a message from a channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: A promise that resolves to a Message object.  
<a name="Message+pin"></a>

### message.pin(reason) ⇒

It pins the message to the channel

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message object.

| Param  | Description                          |
| ------ | ------------------------------------ |
| reason | The reason for pinning this message. |

<a name="Message+unpin"></a>

### message.unpin(reason) ⇒

It unpins a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The unpinned message.

| Param  | Description                           |
| ------ | ------------------------------------- |
| reason | The reason for unpinning the message. |

<a name="Message+inGuild"></a>

### message.inGuild() ⇒

If the guildId is defined, return true, otherwise return false.

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The boolean value of the if statement.  
<a name="Message+equals"></a>

### message.equals(message) ⇒

It returns true if the message is a partial message and the type, guildId, and content are the same

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The return value is a boolean.

| Param   | Description                |
| ------- | -------------------------- |
| message | The message to compare to. |

<a name="Message+createThread"></a>

### message.createThread([options]) ⇒

It creates a thread

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The thread object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="Message+addAttachments"></a>

### message.addAttachments([attachments]) ⇒

It adds attachments to a message

**Kind**: instance method of [<code>Message</code>](#Message)  
**Returns**: The message is being edited with the attachments and files.

| Param         | Description                            |
| ------------- | -------------------------------------- |
| [attachments] | The attachments to add to the message. |

<a name="MessageComponentInteraction"></a>

## MessageComponentInteraction ⇐ <code>Interaction</code>

It's a class that represents a message interaction

**Kind**: global class  
**Extends**: <code>Interaction</code>

- [MessageComponentInteraction](#MessageComponentInteraction) ⇐ <code>Interaction</code>
  - [new MessageComponentInteraction([data], guildId, client)](#new_MessageComponentInteraction_new)
  - [.deferUpdate([options])](#MessageComponentInteraction+deferUpdate) ⇒
  - [.update([options])](#MessageComponentInteraction+update) ⇒

<a name="new_MessageComponentInteraction_new"></a>

### new MessageComponentInteraction([data], guildId, client)

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the message is in       |
| client  | Discord.Client                              |

<a name="MessageComponentInteraction+deferUpdate"></a>

### messageComponentInteraction.deferUpdate([options]) ⇒

It takes an object as an argument, creates a new MessagePayload object with the options and a 6,
then posts to the API with the body of the MessagePayload object.

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: The response from the API.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="MessageComponentInteraction+update"></a>

### messageComponentInteraction.update([options]) ⇒

It updates the message with the given options and returns the reply if fetchReply is true

**Kind**: instance method of [<code>MessageComponentInteraction</code>](#MessageComponentInteraction)  
**Returns**: The return value is the result of the await expression.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="MessageMentions"></a>

## MessageMentions ⇐ <code>Base</code>

It's a class that stores mentions in a message

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageMentions](#MessageMentions) ⇐ <code>Base</code>
  - [new MessageMentions([data], guildId, client)](#new_MessageMentions_new)
  - [.guild](#MessageMentions+guild) ⇒

<a name="new_MessageMentions_new"></a>

### new MessageMentions([data], guildId, client)

It takes in a data object, a guildId, and a client, and then it sets the guildId, users, members,
roles, channels, and everyone properties of the object

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The guild id                                |
| client  | The client                                  |

<a name="MessageMentions+guild"></a>

### messageMentions.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>MessageMentions</code>](#MessageMentions)  
**Returns**: The guild object.

<a name="MessageReaction"></a>

## MessageReaction ⇐ <code>Base</code>

It's a class that represents a reaction on a message

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageReaction](#MessageReaction) ⇐ <code>Base</code>
  - [new MessageReaction([data], guildId, channelId, messageId, client)](#new_MessageReaction_new)
  - [.channel](#MessageReaction+channel) ⇒
  - [.guild](#MessageReaction+guild) ⇒
  - [.fetch()](#MessageReaction+fetch) ⇒
  - [.remove()](#MessageReaction+remove) ⇒
  - [.\_addUsers(user)](#MessageReaction+_addUsers) ⇒
  - [.\_removeUsers(user)](#MessageReaction+_removeUsers) ⇒

<a name="new_MessageReaction_new"></a>

### new MessageReaction([data], guildId, channelId, messageId, client)

It's a constructor for a class called Reaction.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| [data]    | The data that is passed to the constructor.    |
| guildId   | The guild ID of the message                    |
| channelId | The channel ID of the message                  |
| messageId | The ID of the message that the reaction is on. |
| client    | The client                                     |

<a name="MessageReaction+channel"></a>

### messageReaction.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The channel object.  
<a name="MessageReaction+guild"></a>

### messageReaction.guild ⇒

It returns the guild object of the channel

**Kind**: instance property of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The guild object.  
<a name="MessageReaction+fetch"></a>

### messageReaction.fetch() ⇒

It fetches the message, gets the reaction, and returns the reaction

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The reaction object.  
<a name="MessageReaction+remove"></a>

### messageReaction.remove() ⇒

It removes a reaction from a message

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: The reaction object.  
<a name="MessageReaction+_addUsers"></a>

### messageReaction.\_addUsers(user) ⇒

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: the value of the if statement.

| Param | Description                             |
| ----- | --------------------------------------- |
| user  | The user that was added to the channel. |

<a name="MessageReaction+_removeUsers"></a>

### messageReaction.\_removeUsers(user) ⇒

**Kind**: instance method of [<code>MessageReaction</code>](#MessageReaction)  
**Returns**: the value of the variable "this.me"

| Param | Description                                       |
| ----- | ------------------------------------------------- |
| user  | The user that was removed from the voice channel. |

<a name="MessageReference"></a>

## MessageReference ⇐ <code>Base</code>

It's a class that takes in a data object and a client, and then sets the properties of the class to
the values of the data object.

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageReference](#MessageReference) ⇐ <code>Base</code>
  - [new MessageReference([data], client)](#new_MessageReference_new)
  - [.toJSON()](#MessageReference+toJSON) ⇒

<a name="new_MessageReference_new"></a>

### new MessageReference([data], client)

It's a constructor function that takes in two parameters, data and client, and sets the value of
this.messageId to data.message_id if it exists, otherwise it sets it to data.messageId if it exists,
otherwise it sets it to null.

It does the same thing for the other three variables.

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | The client that is sending the request      |

<a name="MessageReference+toJSON"></a>

### messageReference.toJSON() ⇒

It returns an object with the message ID, channel ID, guild ID, and fail if not exists

**Kind**: instance method of [<code>MessageReference</code>](#MessageReference)  
**Returns**: The message ID, channel ID, guild ID, and fail if not exists.

<a name="ModalInteraction"></a>

## ModalInteraction ⇐ <code>MessageComponentInteraction</code>

It's a class that allows you to get the values of a modal

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>

- [ModalInteraction](#ModalInteraction) ⇐ <code>MessageComponentInteraction</code>
  - [new ModalInteraction([data], guildId, client)](#new_ModalInteraction_new)
  - _instance_
    - [.getTextInput(customId, [required])](#ModalInteraction+getTextInput) ⇒
    - [.getSelect(customId, [required])](#ModalInteraction+getSelect) ⇒
  - _static_
    - [.transformResolvedFields([fields])](#ModalInteraction.transformResolvedFields) ⇒

<a name="new_ModalInteraction_new"></a>

### new ModalInteraction([data], guildId, client)

It takes a JSON object, and returns a new object with the same properties, but with the values
transformed.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| [data]  | The data that is passed to the constructor.           |
| guildId | The guild ID of the guild the modal is being sent to. |
| client  | Discord.Client                                        |

<a name="ModalInteraction+getTextInput"></a>

### modalInteraction.getTextInput(customId, [required]) ⇒

It takes a customId and returns the value of the first component in the modal with that customId

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: The value of the text input.

| Param      | Default            | Description                                |
| ---------- | ------------------ | ------------------------------------------ |
| customId   |                    | The custom id of the modal                 |
| [required] | <code>false</code> | boolean - If the modal is required or not. |

<a name="ModalInteraction+getSelect"></a>

### modalInteraction.getSelect(customId, [required]) ⇒

It takes a customId and returns the values of the first component in the module with that
customId.

**Kind**: instance method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: The return value is a string.

| Param      | Default            | Description                                                                     |
| ---------- | ------------------ | ------------------------------------------------------------------------------- |
| customId   |                    | The custom id of the module you want to get the select from.                    |
| [required] | <code>false</code> | boolean - If the module is required, it will throw an error if it is not found. |

<a name="ModalInteraction.transformResolvedFields"></a>

### ModalInteraction.transformResolvedFields([fields]) ⇒

It takes an object with a property called "type" and a property called "components" and returns an
object with a property called "type" and a property called "components"

**Kind**: static method of [<code>ModalInteraction</code>](#ModalInteraction)  
**Returns**: An object with the following properties:

| Param    |
| -------- |
| [fields] |

<a name="NewsChannel"></a>

## NewsChannel ⇐ <code>BaseGuildChannel</code>

It's a class that extends BaseGuildChannel, and it has two methods: follow and crosspost

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>

- [NewsChannel](#NewsChannel) ⇐ <code>BaseGuildChannel</code>
  - [new NewsChannel([data], guildId, client)](#new_NewsChannel_new)
  - [.follow([options])](#NewsChannel+follow) ⇒
  - [.crosspost(message)](#NewsChannel+crosspost) ⇒

<a name="new_NewsChannel_new"></a>

### new NewsChannel([data], guildId, client)

It's a constructor function that takes in three parameters, data, guildId, and client.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that the role is being created with. |
| guildId | The ID of the guild the role is in.           |
| client  | The client that instantiated the object.      |

<a name="NewsChannel+follow"></a>

### newsChannel.follow([options]) ⇒

This function is used to follow a channel

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: The channel object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="NewsChannel+crosspost"></a>

### newsChannel.crosspost(message) ⇒

It takes a message object and returns a promise that resolves to the message object

**Kind**: instance method of [<code>NewsChannel</code>](#NewsChannel)  
**Returns**: The return value of the function is the return value of the function that is being
called.

| Param   | Description               |
| ------- | ------------------------- |
| message | The message to crosspost. |

<a name="PartialSticker"></a>

## PartialSticker ⇐ <code>Base</code>

It's a class that represents a partial sticker

**Kind**: global class  
**Extends**: <code>Base</code>

- [PartialSticker](#PartialSticker) ⇐ <code>Base</code>
  - [new PartialSticker([data], client)](#new_PartialSticker_new)
  - [.fetch()](#PartialSticker+fetch) ⇒

<a name="new_PartialSticker_new"></a>

### new PartialSticker([data], client)

This function is a constructor for the Sticker class, which is a subclass of the Base class, and it
takes in a data object and a client object, and it sets the id, name, formatType, createdAt, and
createdTimestamp properties of the Sticker class to the values of the id, name, format_type, id,
and createdAt properties of the data object, respectively, and it returns the Sticker class.

| Param  | Description                                  |
| ------ | -------------------------------------------- |
| [data] | The data that was passed to the constructor. |
| client | The client that instantiated the object.     |

<a name="PartialSticker+fetch"></a>

### partialSticker.fetch() ⇒

It fetches the sticker

**Kind**: instance method of [<code>PartialSticker</code>](#PartialSticker)  
**Returns**: The sticker object itself.

## Classes

<dl>
<dt><a href="#PermissionOverwrite">PermissionOverwrite</a> ⇐ <code>Base</code></dt>
<dd></dd>
<dt><a href="#PermissionOverwrite">PermissionOverwrite</a></dt>
<dd></dd>
</dl>

<a name="PermissionOverwrite"></a>

## PermissionOverwrite ⇐ <code>Base</code>

**Kind**: global class  
**Extends**: <code>Base</code>

- [PermissionOverwrite](#PermissionOverwrite) ⇐ <code>Base</code>
  - [new PermissionOverwrite()](#new_PermissionOverwrite_new)
  - [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
  - [.channel](#PermissionOverwrite+channel) ⇒
  - [.delete(reason)](#PermissionOverwrite+delete) ⇒

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite()

It's a class that represents a permission overwrite for a channel

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)

It's a constructor for a class called Overwrite.

| Param     | Description                                  |
| --------- | -------------------------------------------- |
| [data]    | The data that was received from the API.     |
| channelId | The ID of the channel this overwrite is for. |
| client    | Discord.Client                               |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒

It deletes a permission overwrite from a channel

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The return value is a Promise that resolves with a Collection&lt;Snowflake,
PermissionOverwrite&gt;.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="PermissionOverwrite"></a>

## PermissionOverwrite

**Kind**: global class

- [PermissionOverwrite](#PermissionOverwrite)
  - [new PermissionOverwrite()](#new_PermissionOverwrite_new)
  - [new PermissionOverwrite([data], channelId, client)](#new_PermissionOverwrite_new)
  - [.channel](#PermissionOverwrite+channel) ⇒
  - [.delete(reason)](#PermissionOverwrite+delete) ⇒

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite()

It's a class that represents a permission overwrite for a channel

<a name="new_PermissionOverwrite_new"></a>

### new PermissionOverwrite([data], channelId, client)

It's a constructor for a class called Overwrite.

| Param     | Description                                  |
| --------- | -------------------------------------------- |
| [data]    | The data that was received from the API.     |
| channelId | The ID of the channel this overwrite is for. |
| client    | Discord.Client                               |

<a name="PermissionOverwrite+channel"></a>

### permissionOverwrite.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The channel object.  
<a name="PermissionOverwrite+delete"></a>

### permissionOverwrite.delete(reason) ⇒

It deletes a permission overwrite from a channel

**Kind**: instance method of [<code>PermissionOverwrite</code>](#PermissionOverwrite)  
**Returns**: The return value is a Promise that resolves with a Collection&lt;Snowflake,
PermissionOverwrite&gt;.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="Presence"></a>

## Presence ⇐ <code>Base</code>

It's a class that represents a user's presence

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_Presence_new"></a>

### new Presence([data], client)

This function is a constructor for the class Presence.

| Param  | Description                              |
| ------ | ---------------------------------------- |
| [data] | The data that was received from the API. |
| client | DiscordClient                            |

<a name="Role"></a>

## Role ⇐ <code>Base</code>

It's a class that represents a role in a guild

**Kind**: global class  
**Extends**: <code>Base</code>

- [Role](#Role) ⇐ <code>Base</code>
  - [new Role([data], guildId, client)](#new_Role_new)
  - [.guild](#Role+guild) ⇒
  - [.members](#Role+members) ⇒
  - [.fetch([options])](#Role+fetch) ⇒
  - [.edit([options])](#Role+edit) ⇒
  - [.delete(reason)](#Role+delete) ⇒
  - [.clone()](#Role+clone) ⇒
  - [.setName(name, reason)](#Role+setName) ⇒
  - [.setPermissions(permissions, reason)](#Role+setPermissions) ⇒
  - [.setColor(color, reason)](#Role+setColor) ⇒
  - [.setHoist(hoist, reason)](#Role+setHoist) ⇒
  - [.setIcon(icon, reason)](#Role+setIcon) ⇒
  - [.setUnicodeEmoji(unicodeEmoji, reason)](#Role+setUnicodeEmoji) ⇒
  - [.setMentionable(mentionable, reason)](#Role+setMentionable) ⇒
  - [.setPosition(position, reason)](#Role+setPosition) ⇒
  - [.permissionsIn(channel)](#Role+permissionsIn) ⇒
  - [.deniedPermissionsIn(channel)](#Role+deniedPermissionsIn) ⇒
  - [.iconURL([options])](#Role+iconURL) ⇒

<a name="new_Role_new"></a>

### new Role([data], guildId, client)

It's a constructor for a class called Role.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| [data]  | The data that was received from the API. |
| guildId | The ID of the guild the role is in       |
| client  | Discord.Client                           |

<a name="Role+guild"></a>

### role.guild ⇒

If the guild is not in the cache, add it to the cache. If it is in the cache, return it. If it is
not in the cache and cannot be added to the cache, return null.

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: The guild object.  
<a name="Role+members"></a>

### role.members ⇒

It returns an array of all the members that have the role

**Kind**: instance property of [<code>Role</code>](#Role)  
**Returns**: A collection of members that have the role.  
<a name="Role+fetch"></a>

### role.fetch([options]) ⇒

It fetches the role from the guild

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.

| Param     | Description    |
| --------- | -------------- |
| [options] | Fetch options. |

<a name="Role+edit"></a>

### role.edit([options]) ⇒

It edits the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value is the edited role.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="Role+delete"></a>

### role.delete(reason) ⇒

It deletes the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="Role+clone"></a>

### role.clone() ⇒

It clones the role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The cloned role.  
<a name="Role+setName"></a>

### role.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The name of the channel.

| Param  | Description                  |
| ------ | ---------------------------- |
| name   | The new name of the channel. |
| reason | The reason for the edit.     |

<a name="Role+setPermissions"></a>

### role.setPermissions(permissions, reason) ⇒

It edits the permissions of a role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions object.

| Param       | Description                         |
| ----------- | ----------------------------------- |
| permissions | The permissions to set on the role. |
| reason      | The reason for the update.          |

<a name="Role+setColor"></a>

### role.setColor(color, reason) ⇒

It sets the color of the embed

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The color and reason.

| Param  | Description                           |
| ------ | ------------------------------------- |
| color  | The color of the embed.               |
| reason | The reason for the role color change. |

<a name="Role+setHoist"></a>

### role.setHoist(hoist, reason) ⇒

It sets the role's hoist property to the value of the hoist parameter

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.

| Param  | Description                                                  |
| ------ | ------------------------------------------------------------ |
| hoist  | Boolean - Whether or not to hoist the role in the user list. |
| reason | The reason for the role update.                              |

<a name="Role+setIcon"></a>

### role.setIcon(icon, reason) ⇒

It sets the icon of the guild

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value of the edit function.

| Param  | Description                                        |
| ------ | -------------------------------------------------- |
| icon   | The icon of the guild.                             |
| reason | The reason for the change (maximum 256 characters) |

<a name="Role+setUnicodeEmoji"></a>

### role.setUnicodeEmoji(unicodeEmoji, reason) ⇒

This function edits the emoji with the unicode emoji and reason.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The return value of the edit method.

| Param        | Description               |
| ------------ | ------------------------- |
| unicodeEmoji | The unicode emoji to set. |
| reason       | The reason for the edit.  |

<a name="Role+setMentionable"></a>

### role.setMentionable(mentionable, reason) ⇒

It sets the role to be mentionable or not.

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.

| Param       | Description                                             |
| ----------- | ------------------------------------------------------- |
| mentionable | Boolean - Whether the role should be mentionable or not |
| reason      | The reason for the role update.                         |

<a name="Role+setPosition"></a>

### role.setPosition(position, reason) ⇒

It sets the position of a role

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The role object.

| Param    | Description                               |
| -------- | ----------------------------------------- |
| position | The position you want to set the role to. |
| reason   | The reason for the change.                |

<a name="Role+permissionsIn"></a>

### role.permissionsIn(channel) ⇒

It returns the permissions of a user in a channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions of the user in the channel.

| Param   | Description                             |
| ------- | --------------------------------------- |
| channel | The channel to get the permissions for. |

<a name="Role+deniedPermissionsIn"></a>

### role.deniedPermissionsIn(channel) ⇒

It returns the permissions that the role is denied in the channel

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The permissions that are denied to the role.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| channel | The channel to check the permissions in. |

<a name="Role+iconURL"></a>

### role.iconURL([options]) ⇒

"If the role has an icon, return the role's icon URL, otherwise return null."

The function takes an optional parameter, options, which is an object

**Kind**: instance method of [<code>Role</code>](#Role)  
**Returns**: The URL of the role's icon.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="RolePrompts"></a>

## RolePrompts ⇐ <code>Base</code>

It's a class that takes in data, guildId, and client.

**Kind**: global class  
**Extends**: <code>Base</code>

- [RolePrompts](#RolePrompts) ⇐ <code>Base</code>
  - [new RolePrompts([data], guildId, client)](#new_RolePrompts_new)
  - _instance_
    - [.guild](#RolePrompts+guild) ⇒
  - _static_
    - [.transformRolesData([roles])](#RolePrompts.transformRolesData) ⇒

<a name="new_RolePrompts_new"></a>

### new RolePrompts([data], guildId, client)

It's a constructor for a class that takes in data, guildId, and client.

| Param   | Description                       |
| ------- | --------------------------------- |
| [data]  | The data that is being passed in. |
| guildId | The guild ID                      |
| client  | The client                        |

<a name="RolePrompts+guild"></a>

### rolePrompts.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: The guild object.  
<a name="RolePrompts.transformRolesData"></a>

### RolePrompts.transformRolesData([roles]) ⇒

It takes an object with keys that are either camelCase or snake_case and returns an object with keys
that are camelCase

**Kind**: static method of [<code>RolePrompts</code>](#RolePrompts)  
**Returns**: An object with the following properties:

- emojiId
- emojiName
- name
- rolesId

| Param   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| [roles] | The object that contains the data that needs to be transformed. |

<a name="SelectMenuInteraction"></a>

## SelectMenuInteraction ⇐ <code>MessageComponentInteraction</code>

It's a class that extends another class, and it has a constructor that takes in some data, a
guildId, and a client, and it has a property called values that is set to an array of values

**Kind**: global class  
**Extends**: <code>MessageComponentInteraction</code>  
<a name="new_SelectMenuInteraction_new"></a>

### new SelectMenuInteraction([data], guildId, client)

The above function is a constructor function that takes in three parameters, data, guildId, and
client. The data parameter is an object that has a property called data, which has a property
called values. The guildId parameter is a string, and the client parameter is an object. The
function returns an object that has a property called values, which is an array

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was passed to the constructor. |
| guildId | The ID of the guild the data is for.         |
| client  | The client instance                          |

<a name="Slash"></a>

## Slash

**Kind**: global class  
<a name="new_Slash_new"></a>

### new Slash([data], client)

It takes in a data object and a client object, and then it sets the type, name, description,
options, and defaultPermission properties of the class to the values of the data object's type,
name, description, options, and defaultPermission properties, respectively

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| [data] | The data object that is returned from the API. |
| client | The client instance.                           |

<a name="SlashOption"></a>

## SlashOption

**Kind**: global class

- [SlashOption](#SlashOption)
  - [new SlashOption([data], client)](#new_SlashOption_new)
  - [.transformChoices([o])](#SlashOption.transformChoices) ⇒
  - [.transformChannelTypes([channel])](#SlashOption.transformChannelTypes) ⇒

<a name="new_SlashOption_new"></a>

### new SlashOption([data], client)

It takes in a JSON object and returns a SlashOption object

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | The client that instantiated the object.    |

<a name="SlashOption.transformChoices"></a>

### SlashOption.transformChoices([o]) ⇒

It takes an object and returns a new object with the same keys but with the values transformed

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: An object with the properties name and value.

| Param | Description              |
| ----- | ------------------------ |
| [o]   | The object to transform. |

<a name="SlashOption.transformChannelTypes"></a>

### SlashOption.transformChannelTypes([channel]) ⇒

It takes a channel object and returns the channel type

**Kind**: static method of [<code>SlashOption</code>](#SlashOption)  
**Returns**: The channel type is being returned.

| Param     | Description               |
| --------- | ------------------------- |
| [channel] | The channel to transform. |

<a name="SlashSubCommand"></a>

## SlashSubCommand

**Kind**: global class  
<a name="new_SlashSubCommand_new"></a>

### new SlashSubCommand([data], client)

It creates a new SlashCommand object, and if the data object is not empty, it sets the name,
description, and options properties to the values in the data object

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | The client object.                          |

<a name="SlashSubCommandGroups"></a>

## SlashSubCommandGroups

**Kind**: global class  
<a name="new_SlashSubCommandGroups_new"></a>

### new SlashSubCommandGroups([data], client)

It creates a new SlashSubCommandGroup object, which is a collection of SlashSubCommand objects

| Param  | Description                                         |
| ------ | --------------------------------------------------- |
| [data] | The data that is passed to the constructor.         |
| client | The client that the command is being registered to. |

<a name="StageChannel"></a>

## StageChannel ⇐ <code>VoiceBasedChannels</code>

It's a class that extends the VoiceBasedChannels class, and adds a few extra methods to it.

**Kind**: global class  
**Extends**: <code>VoiceBasedChannels</code>

- [StageChannel](#StageChannel) ⇐ <code>VoiceBasedChannels</code>
  - [new StageChannel([data], guildId, client)](#new_StageChannel_new)
  - [.stageInstance](#StageChannel+stageInstance) ⇒
  - [.createStageInstance([options])](#StageChannel+createStageInstance) ⇒

<a name="new_StageChannel_new"></a>

### new StageChannel([data], guildId, client)

It's a constructor function that takes in three parameters, data, guildId, and client.

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that the role is being created with. |
| guildId | The ID of the guild the role is in.           |
| client  | The client that instantiated the object.      |

<a name="StageChannel+stageInstance"></a>

### stageChannel.stageInstance ⇒

If the guild exists, return the stage instance that has the same channel ID as the current
channel, otherwise return null

**Kind**: instance property of [<code>StageChannel</code>](#StageChannel)  
**Returns**: The stageInstance is being returned.  
<a name="StageChannel+createStageInstance"></a>

### stageChannel.createStageInstance([options]) ⇒

It creates a new stage instance in the guild, and sets the channel to the current channel

**Kind**: instance method of [<code>StageChannel</code>](#StageChannel)  
**Returns**: The stage instance that was created.

| Param     | Description                                |
| --------- | ------------------------------------------ |
| [options] | The options to pass to the stage instance. |

<a name="StageInstance"></a>

## StageInstance ⇐ <code>Base</code>

It's a class that represents a stage instance.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StageInstance](#StageInstance) ⇐ <code>Base</code>
  - [new StageInstance([data], guildId, client)](#new_StageInstance_new)
  - [.guild](#StageInstance+guild) ⇒
  - [.channel](#StageInstance+channel) ⇒
  - [.guildScheduledEvent](#StageInstance+guildScheduledEvent) ⇒
  - [.fetch(options)](#StageInstance+fetch) ⇒
  - [.edit(options)](#StageInstance+edit) ⇒
  - [.delete(reason)](#StageInstance+delete) ⇒
  - [.setTopic(topic, reason)](#StageInstance+setTopic) ⇒
  - [.setPrivacyLevel(privacyLevel, reason)](#StageInstance+setPrivacyLevel) ⇒

<a name="new_StageInstance_new"></a>

### new StageInstance([data], guildId, client)

| Param   | Description                                   |
| ------- | --------------------------------------------- |
| [data]  | The data that was passed into the constructor |
| guildId | The ID of the guild the voice channel is in.  |
| client  | Discord.Client                                |

<a name="StageInstance+guild"></a>

### stageInstance.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guild object.  
<a name="StageInstance+channel"></a>

### stageInstance.channel ⇒

It returns the channel object of the message

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The channel object.  
<a name="StageInstance+guildScheduledEvent"></a>

### stageInstance.guildScheduledEvent ⇒

If the guild exists, return the event with the id of the guildScheduledEventId, otherwise return
null.

**Kind**: instance property of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The guildScheduledEventId is being returned.  
<a name="StageInstance+fetch"></a>

### stageInstance.fetch(options) ⇒

It fetches the stage instance from the guild's stage instances.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The stage instance.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="StageInstance+edit"></a>

### stageInstance.edit(options) ⇒

It edits the stage instance

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit method.

| Param   |
| ------- |
| options |

<a name="StageInstance+delete"></a>

### stageInstance.delete(reason) ⇒

It deletes the stage instance

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the delete method of the StageInstances class.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="StageInstance+setTopic"></a>

### stageInstance.setTopic(topic, reason) ⇒

It sets the topic of the channel

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit function.

| Param  | Description                                    |
| ------ | ---------------------------------------------- |
| topic  | The new topic of the channel.                  |
| reason | The reason for the change (0-1024 characters). |

<a name="StageInstance+setPrivacyLevel"></a>

### stageInstance.setPrivacyLevel(privacyLevel, reason) ⇒

This function sets the privacy level of the current channel to the privacy level specified in the
first parameter, and sets the reason for the change to the reason specified in the second
parameter.

**Kind**: instance method of [<code>StageInstance</code>](#StageInstance)  
**Returns**: The return value of the edit function.

| Param        | Description                       |
| ------------ | --------------------------------- |
| privacyLevel | The privacy level of the channel. |
| reason       | The reason for the change.        |

<a name="Sticker"></a>

## Sticker ⇐ <code>Base</code>

It's a class that represents a sticker in a guild

**Kind**: global class  
**Extends**: <code>Base</code>

- [Sticker](#Sticker) ⇐ <code>Base</code>
  - [new Sticker([data], guildId, client)](#new_Sticker_new)
  - [.guild](#Sticker+guild) ⇒
  - [.fetch(options)](#Sticker+fetch) ⇒
  - [.edit(options)](#Sticker+edit) ⇒
  - [.delete(reason)](#Sticker+delete) ⇒
  - [.setName(name, reason)](#Sticker+setName) ⇒
  - [.setDescription(description, reason)](#Sticker+setDescription) ⇒
  - [.setTags(tags, reason)](#Sticker+setTags) ⇒
  - [.fetchPack()](#Sticker+fetchPack) ⇒
  - [.imageURL([options])](#Sticker+imageURL) ⇒
  - [.equals(sticker)](#Sticker+equals) ⇒

<a name="new_Sticker_new"></a>

### new Sticker([data], guildId, client)

This function is used to create a new instance of the Sticker class, which is used to represent a
sticker in a guild.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| [data]  | The data that was received from the API. |
| guildId | The ID of the guild the sticker is in    |
| client  | Discord.Client                           |

<a name="Sticker+guild"></a>

### sticker.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>Sticker</code>](#Sticker)  
**Returns**: The guild object.  
<a name="Sticker+fetch"></a>

### sticker.fetch(options) ⇒

It fetches the sticker from the server

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The sticker object.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="Sticker+edit"></a>

### sticker.edit(options) ⇒

It edits the sticker

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The sticker object.

| Param   | Description |
| ------- | ----------- |
| options | Object      |

<a name="Sticker+delete"></a>

### sticker.delete(reason) ⇒

It deletes the sticker

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The return value of the delete method in the StickerManager class.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="Sticker+setName"></a>

### sticker.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The name of the channel.

| Param  | Description               |
| ------ | ------------------------- |
| name   | The new name of the role. |
| reason | The reason for the edit.  |

<a name="Sticker+setDescription"></a>

### sticker.setDescription(description, reason) ⇒

It edits the description of the channel

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The description of the channel.

| Param       | Description                         |
| ----------- | ----------------------------------- |
| description | The new description of the channel. |
| reason      | The reason for the edit.            |

<a name="Sticker+setTags"></a>

### sticker.setTags(tags, reason) ⇒

It edits the tags of a message

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The return value of the edit method.

| Param  | Description               |
| ------ | ------------------------- |
| tags   | The new tags of the user. |
| reason | The reason for the edit.  |

<a name="Sticker+fetchPack"></a>

### sticker.fetchPack() ⇒

It fetches the Nitro Pack from the Discord API and returns it

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The pack object.  
<a name="Sticker+imageURL"></a>

### sticker.imageURL([options]) ⇒

It returns the URL of the sticker image

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: The URL of the sticker image.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="Sticker+equals"></a>

### sticker.equals(sticker) ⇒

If the object passed in is not an instance of the Sticker class, return false. Otherwise, return
true if the name, description, or tags of the object passed in are equal to the name, description,
or tags of the object calling the function.

**Kind**: instance method of [<code>Sticker</code>](#Sticker)  
**Returns**: a boolean value.

| Param   | Description                |
| ------- | -------------------------- |
| sticker | The sticker to compare to. |

<a name="StickerPack"></a>

## StickerPack ⇐ <code>Base</code>

It's a class that represents a sticker pack

**Kind**: global class  
**Extends**: <code>Base</code>

- [StickerPack](#StickerPack) ⇐ <code>Base</code>
  - [new StickerPack([data], client)](#new_StickerPack_new)
  - [.fetch()](#StickerPack+fetch) ⇒
  - [.bannerURL(options)](#StickerPack+bannerURL) ⇒

<a name="new_StickerPack_new"></a>

### new StickerPack([data], client)

It's a constructor function that takes in data and a client, and then sets the data to the class
properties.

| Param  | Description       |
| ------ | ----------------- |
| [data] |                   |
| client | Discord.js Client |

<a name="StickerPack+fetch"></a>

### stickerPack.fetch() ⇒

It fetches the sticker pack from Discord's API and returns it

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: The sticker object.  
<a name="StickerPack+bannerURL"></a>

### stickerPack.bannerURL(options) ⇒

It returns the URL of the banner image of the sticker pack.

**Kind**: instance method of [<code>StickerPack</code>](#StickerPack)  
**Returns**: The URL of the banner image.

| Param   |
| ------- |
| options |

<a name="Team"></a>

## Team ⇐ <code>Base</code>

It's a class that represents a team in the Discord API

**Kind**: global class  
**Extends**: <code>Base</code>

- [Team](#Team) ⇐ <code>Base</code>
  - [new Team([data], client)](#new_Team_new)
  - [.iconURL([options])](#Team+iconURL) ⇒

<a name="new_Team_new"></a>

### new Team([data], client)

It's a constructor for a class that extends another class

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that was passed to the constructor |
| client | The client that instantiated the object.    |

<a name="Team+iconURL"></a>

### team.iconURL([options]) ⇒

"If the team has an icon, return the icon URL, otherwise return null."

The function takes an optional parameter, options, which is an object

**Kind**: instance method of [<code>Team</code>](#Team)  
**Returns**: The URL of the team icon.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="TeamMember"></a>

## TeamMember ⇐ <code>Base</code>

It's a class that represents a team member

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_TeamMember_new"></a>

### new TeamMember([data], client)

It's a constructor for a class that takes in a data object and a client object, and sets the
state, permissions, teamId, and user properties of the class to the values of the state,
permissions, teamId, and user properties of the data object, respectively

| Param  | Description                              |
| ------ | ---------------------------------------- |
| [data] | The data that was received from the API. |
| client | The client that instantiated the object. |

<a name="TextBasedChannels"></a>

## TextBasedChannels

**Kind**: global class

- [TextBasedChannels](#TextBasedChannels)
  - [new TextBasedChannels([data], guildId, client)](#new_TextBasedChannels_new)
  - [.messages](#TextBasedChannels+messages) ⇒
  - [.send(options)](#TextBasedChannels+send) ⇒
  - [.bulkDelete(messages, reason)](#TextBasedChannels+bulkDelete) ⇒
  - [.setNsfw(nsfw, reason)](#TextBasedChannels+setNsfw) ⇒
  - [.setRateLimitPerUser(ratelimit, reason)](#TextBasedChannels+setRateLimitPerUser) ⇒
  - [.triggerTyping()](#TextBasedChannels+triggerTyping) ⇒

<a name="new_TextBasedChannels_new"></a>

### new TextBasedChannels([data], guildId, client)

It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
rateLimitPerUser, lastPinnedAt, lastPinnedTimestamp, lastMessageId, and nsfw properties of the
object to the values of the corresponding keys in the data object, or null if the key doesn't exist.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was passed to the constructor. |
| guildId | The ID of the guild the channel is in.       |
| client  | The client that instantiated the channel.    |

<a name="TextBasedChannels+messages"></a>

### textBasedChannels.messages ⇒

It returns a new MessageManager object, which is a class that manages messages

**Kind**: instance property of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: A new instance of the MessageManager class.  
<a name="TextBasedChannels+send"></a>

### textBasedChannels.send(options) ⇒

It sends a message to the channel

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the send() method.

| Param   | Description                               |
| ------- | ----------------------------------------- |
| options | An object containing the message to send. |

<a name="TextBasedChannels+bulkDelete"></a>

### textBasedChannels.bulkDelete(messages, reason) ⇒

It deletes messages in bulk

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the function.

| Param    | Description                     |
| -------- | ------------------------------- |
| messages | The messages to delete.         |
| reason   | The reason for the bulk delete. |

<a name="TextBasedChannels+setNsfw"></a>

### textBasedChannels.setNsfw(nsfw, reason) ⇒

It edits the channel's nsfw property

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the edit method.

| Param  | Description                                   |
| ------ | --------------------------------------------- |
| nsfw   | Boolean - Whether the channel is nsfw or not. |
| reason | The reason for the edit.                      |

<a name="TextBasedChannels+setRateLimitPerUser"></a>

### textBasedChannels.setRateLimitPerUser(ratelimit, reason) ⇒

It edits the ratelimit of the command

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the edit function.

| Param     | Description                   |
| --------- | ----------------------------- |
| ratelimit | The ratelimit to set.         |
| reason    | The reason for the ratelimit. |

<a name="TextBasedChannels+triggerTyping"></a>

### textBasedChannels.triggerTyping() ⇒

It triggers typing in the channel

**Kind**: instance method of [<code>TextBasedChannels</code>](#TextBasedChannels)  
**Returns**: The return value of the function.

<a name="TextChannel"></a>

## TextChannel ⇐ <code>BaseGuildChannel</code>

It's a class that extends another class, and it has a constructor that takes in a data object, a
guildId, and a client

**Kind**: global class  
**Extends**: <code>BaseGuildChannel</code>  
<a name="new_TextChannel_new"></a>

### new TextChannel([data], guildId, client)

It's a constructor function that takes in three parameters, data, guildId, and client.

| Param   | Description                                       |
| ------- | ------------------------------------------------- |
| [data]  | The data that the class will be constructed with. |
| guildId | The ID of the guild the role is in.               |
| client  | The client that instantiated the object.          |

<a name="ThreadChannel"></a>

## ThreadChannel ⇐ <code>TextBasedChannels</code>

It's a class that represents a Discord Thread Channel

**Kind**: global class  
**Extends**: <code>TextBasedChannels</code>

- [ThreadChannel](#ThreadChannel) ⇐ <code>TextBasedChannels</code>
  - [new ThreadChannel([data], guildId, client)](#new_ThreadChannel_new)
  - [.join()](#ThreadChannel+join) ⇒
  - [.add(member)](#ThreadChannel+add) ⇒
  - [.remove(user)](#ThreadChannel+remove) ⇒
  - [.fetchOwner(options)](#ThreadChannel+fetchOwner) ⇒
  - [.setArchived(archived, reason)](#ThreadChannel+setArchived) ⇒
  - [.setLocked(locked, reason)](#ThreadChannel+setLocked) ⇒
  - [.setAutoArchiveDuration(autoArchiveDuration, reason)](#ThreadChannel+setAutoArchiveDuration) ⇒
  - [.setInvitable(invitable, reason)](#ThreadChannel+setInvitable) ⇒
  - [.setFlags(flags, reason)](#ThreadChannel+setFlags) ⇒

<a name="new_ThreadChannel_new"></a>

### new ThreadChannel([data], guildId, client)

"This function is used to create a new instance of the Thread class."

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild the channel is in.      |
| client  | Discord.Client                              |

<a name="ThreadChannel+join"></a>

### threadChannel.join() ⇒

It returns a promise that resolves to the current object

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The members array.  
<a name="ThreadChannel+add"></a>

### threadChannel.add(member) ⇒

It adds a member to the members collection.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value is a Promise that resolves to the result of the add() method.

| Param  | Description                   |
| ------ | ----------------------------- |
| member | The member to add to the set. |

<a name="ThreadChannel+remove"></a>

### threadChannel.remove(user) ⇒

It removes a user from the members array.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value is the result of the remove method.

| Param | Description                        |
| ----- | ---------------------------------- |
| user  | The user to remove from the guild. |

<a name="ThreadChannel+fetchOwner"></a>

### threadChannel.fetchOwner(options) ⇒

It fetches the owner of the guild

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The owner of the guild.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| options | An object with the following properties: |

<a name="ThreadChannel+setArchived"></a>

### threadChannel.setArchived(archived, reason) ⇒

It edits the channel's archived property to the value of the archived parameter, and the reason
property to the value of the reason parameter

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit function.

| Param    | Description                                              |
| -------- | -------------------------------------------------------- |
| archived | Boolean - Whether the channel should be archived or not. |
| reason   | The reason for the edit.                                 |

<a name="ThreadChannel+setLocked"></a>

### threadChannel.setLocked(locked, reason) ⇒

It sets the locked property of a channel to true or false

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.

| Param  | Description                                           |
| ------ | ----------------------------------------------------- |
| locked | Boolean - Whether the channel should be locked or not |
| reason | The reason for the lock.                              |

<a name="ThreadChannel+setAutoArchiveDuration"></a>

### threadChannel.setAutoArchiveDuration(autoArchiveDuration, reason) ⇒

It sets the autoArchiveDuration of a channel

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.

| Param               | Description                                                                     |
| ------------------- | ------------------------------------------------------------------------------- |
| autoArchiveDuration | The duration in seconds after which the channel will be automatically archived. |
| reason              | The reason for the edit.                                                        |

<a name="ThreadChannel+setInvitable"></a>

### threadChannel.setInvitable(invitable, reason) ⇒

It sets the invitable property of the guild.

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.

| Param     | Description                                            |
| --------- | ------------------------------------------------------ |
| invitable | Boolean - Whether the role should be invitable or not. |
| reason    | The reason for the change (0-1024 characters)          |

<a name="ThreadChannel+setFlags"></a>

### threadChannel.setFlags(flags, reason) ⇒

It sets the flags of a message

**Kind**: instance method of [<code>ThreadChannel</code>](#ThreadChannel)  
**Returns**: The return value of the edit method.

| Param  | Description              |
| ------ | ------------------------ |
| flags  | The flags to set.        |
| reason | The reason for the edit. |

<a name="ThreadMember"></a>

## ThreadMember ⇐ <code>Base</code>

It's a class that represents a user in a thread

**Kind**: global class  
**Extends**: <code>Base</code>

- [ThreadMember](#ThreadMember) ⇐ <code>Base</code>
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

It's a class that represents a triggered automod rule.

**Kind**: global class  
**Extends**: <code>Base</code>

- [TriggeredAutoModRule](#TriggeredAutoModRule) ⇐ <code>Base</code>
  - [new TriggeredAutoModRule([data], guildId, client)](#new_TriggeredAutoModRule_new)
  - [.guild](#TriggeredAutoModRule+guild) ⇒
  - [.channel](#TriggeredAutoModRule+channel) ⇒
  - [.user](#TriggeredAutoModRule+user) ⇒
  - [.message](#TriggeredAutoModRule+message) ⇒
  - [.fetch([options])](#TriggeredAutoModRule+fetch) ⇒
  - [.edit([options])](#TriggeredAutoModRule+edit) ⇒
  - [.delete(reason)](#TriggeredAutoModRule+delete) ⇒
  - [.setName(name, reason)](#TriggeredAutoModRule+setName) ⇒
  - [.setEventType(eventType, reason)](#TriggeredAutoModRule+setEventType) ⇒
  - [.setTriggerMetadata(triggerMetadata, reason)](#TriggeredAutoModRule+setTriggerMetadata) ⇒
  - [.setActions(actions, reason)](#TriggeredAutoModRule+setActions) ⇒
  - [.setEnabled(enabled, reason)](#TriggeredAutoModRule+setEnabled) ⇒
  - [.setExemptRoles(exemptRoles, reason)](#TriggeredAutoModRule+setExemptRoles) ⇒
  - [.setExemptChannels(exemptChannels, reason)](#TriggeredAutoModRule+setExemptChannels) ⇒

<a name="new_TriggeredAutoModRule_new"></a>

### new TriggeredAutoModRule([data], guildId, client)

"This function is used to create a new instance of the GuildAutoModRule class, which is used to
represent a rule that is used to automatically moderate a guild."

| Param   | Description                              |
| ------- | ---------------------------------------- |
| [data]  | The data that is passed in from the API. |
| guildId | The ID of the guild the alert is for.    |
| client  | Discord.Client                           |

<a name="TriggeredAutoModRule+guild"></a>

### triggeredAutoModRule.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The guild object.  
<a name="TriggeredAutoModRule+channel"></a>

### triggeredAutoModRule.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The channel object.  
<a name="TriggeredAutoModRule+user"></a>

### triggeredAutoModRule.user ⇒

It returns the user object of the user who sent the message

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The user object.  
<a name="TriggeredAutoModRule+message"></a>

### triggeredAutoModRule.message ⇒

It returns a message object from the messageId

**Kind**: instance property of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The message object.  
<a name="TriggeredAutoModRule+fetch"></a>

### triggeredAutoModRule.fetch([options]) ⇒

It fetches the rule from the database

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The rule object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="TriggeredAutoModRule+edit"></a>

### triggeredAutoModRule.edit([options]) ⇒

It edits a rule in the guild's automod

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value is the edited rule.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="TriggeredAutoModRule+delete"></a>

### triggeredAutoModRule.delete(reason) ⇒

It deletes a rule from the database

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the delete method.

| Param  | Description                  |
| ------ | ---------------------------- |
| reason | The reason for the deletion. |

<a name="TriggeredAutoModRule+setName"></a>

### triggeredAutoModRule.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The name of the channel.

| Param  | Description                  |
| ------ | ---------------------------- |
| name   | The new name of the channel. |
| reason | The reason for the edit.     |

<a name="TriggeredAutoModRule+setEventType"></a>

### triggeredAutoModRule.setEventType(eventType, reason) ⇒

It returns a promise that resolves to the result of calling the edit function with the eventType
and reason parameters.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.

| Param     | Description               |
| --------- | ------------------------- |
| eventType | The event type to set.    |
| reason    | The reason for the event. |

<a name="TriggeredAutoModRule+setTriggerMetadata"></a>

### triggeredAutoModRule.setTriggerMetadata(triggerMetadata, reason) ⇒

It sets the triggerMetadata property of the current object to the value of the triggerMetadata
parameter

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.

| Param           | Description                  |
| --------------- | ---------------------------- |
| triggerMetadata | The metadata of the trigger. |
| reason          | The reason for the edit.     |

<a name="TriggeredAutoModRule+setActions"></a>

### triggeredAutoModRule.setActions(actions, reason) ⇒

It edits the message with the given actions and reason

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit method.

| Param   | Description                 |
| ------- | --------------------------- |
| actions | An array of actions to set. |
| reason  | The reason for the edit.    |

<a name="TriggeredAutoModRule+setEnabled"></a>

### triggeredAutoModRule.setEnabled(enabled, reason) ⇒

This function sets the enabled property of the command to the value of the enabled parameter, and
the reason property of the command to the value of the reason parameter.

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.

| Param   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| enabled | Boolean - Whether the command should be enabled or disabled. |
| reason  | The reason for the change (0-1024 characters).               |

<a name="TriggeredAutoModRule+setExemptRoles"></a>

### triggeredAutoModRule.setExemptRoles(exemptRoles, reason) ⇒

It sets the exempt roles of a role

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.

| Param       | Description                                           |
| ----------- | ----------------------------------------------------- |
| exemptRoles | An array of role IDs that are exempt from the filter. |
| reason      | The reason for the edit.                              |

<a name="TriggeredAutoModRule+setExemptChannels"></a>

### triggeredAutoModRule.setExemptChannels(exemptChannels, reason) ⇒

It edits the channel overwrites for a role

**Kind**: instance method of [<code>TriggeredAutoModRule</code>](#TriggeredAutoModRule)  
**Returns**: The return value of the edit function.

| Param          | Description                                              |
| -------------- | -------------------------------------------------------- |
| exemptChannels | An array of channel IDs that are exempt from the filter. |
| reason         | The reason for the edit.                                 |

<a name="User"></a>

## User ⇐ <code>Base</code>

It's a class that represents a user

**Kind**: global class  
**Extends**: <code>Base</code>

- [User](#User) ⇐ <code>Base</code>
  - [new User([data], client)](#new_User_new)
  - [.fetch(options)](#User+fetch) ⇒
  - [.createDM()](#User+createDM) ⇒
  - [.send([options])](#User+send) ⇒
  - [.defaultAvatarURL()](#User+defaultAvatarURL) ⇒
  - [.displayAvatarURL([options])](#User+displayAvatarURL) ⇒
  - [.bannerURL([options])](#User+bannerURL) ⇒
  - [.avatarDecorationURL([options])](#User+avatarDecorationURL) ⇒
  - [.hexAccentColor()](#User+hexAccentColor) ⇒

<a name="new_User_new"></a>

### new User([data], client)

It's a constructor for a class that extends another class.

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | DiscordClient                               |

<a name="User+fetch"></a>

### user.fetch(options) ⇒

It fetches the user from the Discord API

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| options | An object with the following properties: |

<a name="User+createDM"></a>

### user.createDM() ⇒

It creates a DM channel with the user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.  
<a name="User+send"></a>

### user.send([options]) ⇒

It sends a message to a user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="User+defaultAvatarURL"></a>

### user.defaultAvatarURL() ⇒

It returns the default avatar URL of the user

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The default avatar URL for the user.  
<a name="User+displayAvatarURL"></a>

### user.displayAvatarURL([options]) ⇒

"If the user doesn't have an avatar, return the default avatar URL, otherwise return the user's
avatar URL."

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The avatar URL of the user.

| Param     | Description           |
| --------- | --------------------- |
| [options] | dynamic, size, format |

<a name="User+bannerURL"></a>

### user.bannerURL([options]) ⇒

"If the user has a banner, return the banner URL, otherwise return null."

The function is called like this:

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The user's banner URL.

| Param     | Description                 |
| --------- | --------------------------- |
| [options] | The options for the banner. |

<a name="User+avatarDecorationURL"></a>

### user.avatarDecorationURL([options]) ⇒

"If the user has an avatar decoration, return the URL of the avatar decoration, otherwise return
null."

The function is called avatarDecorationURL because it returns the URL of the avatar decoration

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The avatar decoration URL.

| Param     |
| --------- |
| [options] |

<a name="User+hexAccentColor"></a>

### user.hexAccentColor() ⇒

If the accentColor property is not null, return a string that starts with a hash symbol and is
followed by the accentColor property converted to a string in base 16.

**Kind**: instance method of [<code>User</code>](#User)  
**Returns**: The accent color in hexadecimal format.

<a name="VerificationFormFields"></a>

## VerificationFormFields ⇐ <code>Base</code>

This class is used to create a new verification form field

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_VerificationFormFields_new"></a>

### new VerificationFormFields([data], client)

The above function is a constructor function that takes in two parameters, data and client, and
returns an object with the properties description, fieldType, label, required, and values.

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | The client that instantiated the object.    |

<a name="VoiceBasedChannels"></a>

## VoiceBasedChannels

**Kind**: global class

- [VoiceBasedChannels](#VoiceBasedChannels)
  - [new VoiceBasedChannels([data], guildId, client)](#new_VoiceBasedChannels_new)
  - [.members](#VoiceBasedChannels+members) ⇒
  - [.join([options])](#VoiceBasedChannels+join) ⇒
  - [.disconnect()](#VoiceBasedChannels+disconnect) ⇒
  - [.setRtcRegion(rtcRegion, reason)](#VoiceBasedChannels+setRtcRegion) ⇒
  - [.setBitrate(bitrate, reason)](#VoiceBasedChannels+setBitrate) ⇒

<a name="new_VoiceBasedChannels_new"></a>

### new VoiceBasedChannels([data], guildId, client)

It's a constructor function that takes in a data object, a guildId, and a client, and then sets the
userLimit, bitrate, rtcRegion, and videoQualityMode properties of the object to the values of the
corresponding properties of the data object, or null if the data object doesn't have those
properties.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was sent from the Discord API. |
| guildId | The ID of the guild the voice channel is in. |
| client  | Discord.Client                               |

<a name="VoiceBasedChannels+members"></a>

### voiceBasedChannels.members ⇒

It returns an array of members in the voice channel

**Kind**: instance property of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The members in the voice channel.  
<a name="VoiceBasedChannels+join"></a>

### voiceBasedChannels.join([options]) ⇒

It sends a packet to the Discord API to join the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The VoiceChannel object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="VoiceBasedChannels+disconnect"></a>

### voiceBasedChannels.disconnect() ⇒

It sends a packet to the Discord API to disconnect the bot from the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The VoiceConnection object.  
<a name="VoiceBasedChannels+setRtcRegion"></a>

### voiceBasedChannels.setRtcRegion(rtcRegion, reason) ⇒

This function sets the rtcRegion of the guild.

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The return value of the edit function.

| Param     | Description                            |
| --------- | -------------------------------------- |
| rtcRegion | The region to set the voice server to. |
| reason    | The reason for the change.             |

<a name="VoiceBasedChannels+setBitrate"></a>

### voiceBasedChannels.setBitrate(bitrate, reason) ⇒

It sets the bitrate of the voice channel

**Kind**: instance method of [<code>VoiceBasedChannels</code>](#VoiceBasedChannels)  
**Returns**: The bitrate of the voice channel.

| Param   | Description                               |
| ------- | ----------------------------------------- |
| bitrate | The bitrate of the voice channel in bits. |
| reason  | The reason for the change.                |

<a name="VoiceChannel"></a>

## VoiceChannel

**Kind**: global class

- [VoiceChannel](#VoiceChannel)
  - [new VoiceChannel([data], guildId, client)](#new_VoiceChannel_new)
  - [.messages](#VoiceChannel+messages) ⇒
  - [.send([options])](#VoiceChannel+send) ⇒
  - [.bulkDelete(messages, reason)](#VoiceChannel+bulkDelete) ⇒
  - [.setNsfw(nsfw, reason)](#VoiceChannel+setNsfw) ⇒
  - [.setRateLimitPerUser(ratelimit, reason)](#VoiceChannel+setRateLimitPerUser) ⇒
  - [.setUserLimit(userLimit, reason)](#VoiceChannel+setUserLimit) ⇒
  - [.setVideoQualityMode(videoQualityMode, reason)](#VoiceChannel+setVideoQualityMode) ⇒
  - [.triggerTyping()](#VoiceChannel+triggerTyping) ⇒

<a name="new_VoiceChannel_new"></a>

### new VoiceChannel([data], guildId, client)

The above function is a constructor function that takes in data, guildId, and client as parameters
and sets the rateLimitPerUser, lastMessageId, and nsfw properties to the data.rate_limit_per_user,
data.last_message_id, and data.nsfw properties respectively.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was passed to the constructor. |
| guildId | The ID of the guild the channel is in.       |
| client  | The client that instantiated the channel.    |

<a name="VoiceChannel+messages"></a>

### voiceChannel.messages ⇒

It returns a new MessageManager object, which is a class that manages messages

**Kind**: instance property of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: A new instance of the MessageManager class.  
<a name="VoiceChannel+send"></a>

### voiceChannel.send([options]) ⇒

It sends a message to the channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value is the result of the send() method.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="VoiceChannel+bulkDelete"></a>

### voiceChannel.bulkDelete(messages, reason) ⇒

It deletes messages in bulk

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the function.

| Param    | Description                     |
| -------- | ------------------------------- |
| messages | The messages to delete.         |
| reason   | The reason for the bulk delete. |

<a name="VoiceChannel+setNsfw"></a>

### voiceChannel.setNsfw(nsfw, reason) ⇒

It edits the channel's nsfw property

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The edited channel.

| Param  | Description                                   |
| ------ | --------------------------------------------- |
| nsfw   | Boolean - Whether the channel is nsfw or not. |
| reason | The reason for the edit.                      |

<a name="VoiceChannel+setRateLimitPerUser"></a>

### voiceChannel.setRateLimitPerUser(ratelimit, reason) ⇒

It edits the ratelimit of a command

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the edit function.

| Param     | Description                   |
| --------- | ----------------------------- |
| ratelimit | The ratelimit to set.         |
| reason    | The reason for the ratelimit. |

<a name="VoiceChannel+setUserLimit"></a>

### voiceChannel.setUserLimit(userLimit, reason) ⇒

It sets the user limit of a channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The userLimit and reason are being returned.

| Param     | Description                        |
| --------- | ---------------------------------- |
| userLimit | The new user limit of the channel. |
| reason    | The reason for the edit.           |

<a name="VoiceChannel+setVideoQualityMode"></a>

### voiceChannel.setVideoQualityMode(videoQualityMode, reason) ⇒

This function sets the video quality mode to the given value, and returns a promise that resolves
to the new value of the video quality mode.

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the edit function.

| Param            | Description                    |
| ---------------- | ------------------------------ |
| videoQualityMode | The video quality mode to set. |
| reason           | The reason for the change.     |

<a name="VoiceChannel+triggerTyping"></a>

### voiceChannel.triggerTyping() ⇒

It triggers typing in the channel

**Kind**: instance method of [<code>VoiceChannel</code>](#VoiceChannel)  
**Returns**: The return value of the function.

<a name="VoiceRegion"></a>

## VoiceRegion ⇐ <code>Base</code>

It's a class that represents a Discord voice region

**Kind**: global class  
**Extends**: <code>Base</code>  
<a name="new_VoiceRegion_new"></a>

### new VoiceRegion([data], client)

It's a constructor function that takes in data and a client, and then sets the data to the class
properties

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| [data] | The data that is passed to the constructor. |
| client | The client that instantiated the object.    |

<a name="VoiceState"></a>

## VoiceState ⇐ <code>Base</code>

It's a class that represents a user's voice state in a guild

**Kind**: global class  
**Extends**: <code>Base</code>

- [VoiceState](#VoiceState) ⇐ <code>Base</code>
  - [new VoiceState([data], guildId, client)](#new_VoiceState_new)
  - [.guild](#VoiceState+guild) ⇒
  - [.channel](#VoiceState+channel) ⇒
  - [.user](#VoiceState+user) ⇒
  - [.edit(options)](#VoiceState+edit) ⇒
  - [.setChannel(channel, reason)](#VoiceState+setChannel) ⇒
  - [.setDeaf(deaf, reason)](#VoiceState+setDeaf) ⇒
  - [.setMute(mute, reason)](#VoiceState+setMute) ⇒
  - [.setSuppress(suppress)](#VoiceState+setSuppress) ⇒
  - [.setRequestToSpeak(requestToSpeak)](#VoiceState+setRequestToSpeak) ⇒

<a name="new_VoiceState_new"></a>

### new VoiceState([data], guildId, client)

It's a constructor for a class that is used to store voice state data.

| Param   | Description                                      |
| ------- | ------------------------------------------------ |
| [data]  | The data that was received from the Discord API. |
| guildId | The ID of the guild the voice state is in.       |
| client  | Discord.Client                                   |

<a name="VoiceState+guild"></a>

### voiceState.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The guild object.  
<a name="VoiceState+channel"></a>

### voiceState.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The channel object.  
<a name="VoiceState+user"></a>

### voiceState.user ⇒

It returns the user object of the user who sent the message

**Kind**: instance property of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The user object.  
<a name="VoiceState+edit"></a>

### voiceState.edit(options) ⇒

It edits the member's settings

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The return value is a Promise that resolves to the edited member.

| Param   | Description                                               |
| ------- | --------------------------------------------------------- |
| options | An object containing the options to edit the member with. |

<a name="VoiceState+setChannel"></a>

### voiceState.setChannel(channel, reason) ⇒

It sets the channel of the invite

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The channel that the message was sent in.

| Param   | Description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| channel | The channel to move the member to, can be a voice channel or a category channel. |
| reason  | The reason for the update.                                                       |

<a name="VoiceState+setDeaf"></a>

### voiceState.setDeaf(deaf, reason) ⇒

It sets the deaf property of the member to deaf, and the reason property of the member to reason

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The deaf status of the member.

| Param  | Description                                            |
| ------ | ------------------------------------------------------ |
| deaf   | Boolean - Whether or not the member should be deafened |
| reason | The reason for the change.                             |

<a name="VoiceState+setMute"></a>

### voiceState.setMute(mute, reason) ⇒

It sets the mute status of a user

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The mute status and the reason for the mute.

| Param  | Description                                          |
| ------ | ---------------------------------------------------- |
| mute   | Boolean - Whether or not the member should be muted. |
| reason | The reason for the mute.                             |

<a name="VoiceState+setSuppress"></a>

### voiceState.setSuppress(suppress) ⇒

It sets the user's voice state to suppress

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The voice state of the user.

| Param    | Description |
| -------- | ----------- |
| suppress | Boolean     |

<a name="VoiceState+setRequestToSpeak"></a>

### voiceState.setRequestToSpeak(requestToSpeak) ⇒

It sets the request to speak status of a user in a voice channel

**Kind**: instance method of [<code>VoiceState</code>](#VoiceState)  
**Returns**: The return value is a Promise that resolves to the updated VoiceState.

| Param          | Description |
| -------------- | ----------- |
| requestToSpeak | boolean     |

<a name="Webhook"></a>

## Webhook ⇐ <code>Base</code>

It's a class that represents a webhook

**Kind**: global class  
**Extends**: <code>Base</code>

- [Webhook](#Webhook) ⇐ <code>Base</code>
  - [new Webhook([data], guildId, client)](#new_Webhook_new)
  - [.fetch(token)](#Webhook+fetch) ⇒
  - [.edit([options])](#Webhook+edit) ⇒
  - [.setName(name, reason)](#Webhook+setName) ⇒
  - [.setAvatar(avatar, reason)](#Webhook+setAvatar) ⇒
  - [.setChannel(channel, reason)](#Webhook+setChannel) ⇒
  - [.delete([options])](#Webhook+delete) ⇒
  - [.defaultAvatarURL()](#Webhook+defaultAvatarURL) ⇒
  - [.displayAvatarURL([options])](#Webhook+displayAvatarURL) ⇒

<a name="new_Webhook_new"></a>

### new Webhook([data], guildId, client)

This function is used to create a new webhook object, and it takes in a data object, a guildId,
and a client object.

| Param   | Description                           |
| ------- | ------------------------------------- |
| [data]  | The data that was passed in.          |
| guildId | The ID of the guild the webhook is in |
| client  | Discord.Client                        |

<a name="Webhook+fetch"></a>

### webhook.fetch(token) ⇒

It fetches a webhook from the Discord API

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: A new instance of the Webhook class.

| Param | Description               |
| ----- | ------------------------- |
| token | The token of the webhook. |

<a name="Webhook+edit"></a>

### webhook.edit([options]) ⇒

It edits a webhook

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: A new instance of the Webhook class.

| Param     |
| --------- |
| [options] |

<a name="Webhook+setName"></a>

### webhook.setName(name, reason) ⇒

It edits the name of the channel

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The name of the channel.

| Param  | Description                  |
| ------ | ---------------------------- |
| name   | The new name of the channel. |
| reason | The reason for the edit.     |

<a name="Webhook+setAvatar"></a>

### webhook.setAvatar(avatar, reason) ⇒

It sets the avatar of the bot

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The avatar of the user.

| Param  | Description                                   |
| ------ | --------------------------------------------- |
| avatar | The new avatar of the bot.                    |
| reason | The reason for the change (0-1024 characters) |

<a name="Webhook+setChannel"></a>

### webhook.setChannel(channel, reason) ⇒

It sets the channel of the invite

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The channel that the message was sent in.

| Param   | Description                                                                      |
| ------- | -------------------------------------------------------------------------------- |
| channel | The channel to move the member to, can be a voice channel or a category channel. |
| reason  | The reason for the update.                                                       |

<a name="Webhook+delete"></a>

### webhook.delete([options]) ⇒

It deletes a webhook

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The webhook object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="Webhook+defaultAvatarURL"></a>

### webhook.defaultAvatarURL() ⇒

It returns the default avatar URL.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The default avatar URL.  
<a name="Webhook+displayAvatarURL"></a>

### webhook.displayAvatarURL([options]) ⇒

If the avatar is not set, return the default avatar URL, otherwise return the avatar URL.

**Kind**: instance method of [<code>Webhook</code>](#Webhook)  
**Returns**: The avatar URL of the webhook.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="WebhookClient"></a>

## WebhookClient ⇐ <code>Base</code>

It's a class that allows you to send messages to a channel using a webhook.

**Kind**: global class  
**Extends**: <code>Base</code>

- [WebhookClient](#WebhookClient) ⇐ <code>Base</code>
  - [new WebhookClient([data], client)](#new_WebhookClient_new)
  - [.fetchWebhook()](#WebhookClient+fetchWebhook) ⇒
  - [.send([options])](#WebhookClient+send) ⇒
  - [.delete(message, thread)](#WebhookClient+delete) ⇒
  - [.edit(message, [options], thread)](#WebhookClient+edit) ⇒
  - [.fetch(message, thread)](#WebhookClient+fetch) ⇒

<a name="new_WebhookClient_new"></a>

### new WebhookClient([data], client)

The above function is a constructor function that takes in two parameters, data and client, and
sets the id, token, and url properties of the object to the values of the data object's id, token,
and url properties, or null if the data object doesn't have those properties.

| Param  | Description                                       |
| ------ | ------------------------------------------------- |
| [data] | The data that is passed to the constructor.       |
| client | The client that the webhook is being created for. |

<a name="WebhookClient+fetchWebhook"></a>

### webhookClient.fetchWebhook() ⇒

It fetches the webhook from the API and returns a new Webhook instance

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: A new Webhook object.  
<a name="WebhookClient+send"></a>

### webhookClient.send([options]) ⇒

It sends a message to a channel using a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="WebhookClient+delete"></a>

### webhookClient.delete(message, thread) ⇒

It deletes a message from a thread.

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: Nothing.

| Param   | Description                                                      |
| ------- | ---------------------------------------------------------------- |
| message | The message object or message ID to delete.                      |
| thread  | The thread ID of the thread you want to delete the message from. |

<a name="WebhookClient+edit"></a>

### webhookClient.edit(message, [options], thread) ⇒

It edits a message sent by a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message that was edited.

| Param     | Description                           |
| --------- | ------------------------------------- |
| message   | The message to edit.                  |
| [options] | The options to send to the message.   |
| thread    | The thread ID of the message to edit. |

<a name="WebhookClient+fetch"></a>

### webhookClient.fetch(message, thread) ⇒

It fetches a message from a webhook

**Kind**: instance method of [<code>WebhookClient</code>](#WebhookClient)  
**Returns**: The message object.

| Param   | Description                                                                    |
| ------- | ------------------------------------------------------------------------------ |
| message | The message to fetch. Can be a message object, a message ID, or a message URL. |
| thread  | The thread ID of the message.                                                  |

<a name="WelcomeScreen"></a>

## WelcomeScreen ⇐ <code>Base</code>

It's a class that represents a welcome screen for a guild

**Kind**: global class  
**Extends**: <code>Base</code>

- [WelcomeScreen](#WelcomeScreen) ⇐ <code>Base</code>
  - [new WelcomeScreen([data], guildId, client)](#new_WelcomeScreen_new)
  - [.guild](#WelcomeScreen+guild) ⇒
  - [.edit([options])](#WelcomeScreen+edit) ⇒
  - [.setEnabled(enabled, reason)](#WelcomeScreen+setEnabled) ⇒
  - [.setWelcomeChannels(channels, reason)](#WelcomeScreen+setWelcomeChannels) ⇒
  - [.setDescription(description, reason)](#WelcomeScreen+setDescription) ⇒

<a name="new_WelcomeScreen_new"></a>

### new WelcomeScreen([data], guildId, client)

It's a constructor for a class that takes in a data object, a guildId, and a client

| Param   | Description                                 |
| ------- | ------------------------------------------- |
| [data]  | The data that is passed to the constructor. |
| guildId | The ID of the guild                         |
| client  | The client                                  |

<a name="WelcomeScreen+guild"></a>

### welcomeScreen.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The guild object.  
<a name="WelcomeScreen+edit"></a>

### welcomeScreen.edit([options]) ⇒

It edits the welcome screen

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value is the result of the edit function.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="WelcomeScreen+setEnabled"></a>

### welcomeScreen.setEnabled(enabled, reason) ⇒

This function sets the enabled property of the command to the value of the enabled parameter, and
the reason property of the command to the value of the reason parameter.

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value of the edit function.

| Param   | Description                                                  |
| ------- | ------------------------------------------------------------ |
| enabled | Boolean - Whether the command should be enabled or disabled. |
| reason  | The reason for the change (0-1024 characters).               |

<a name="WelcomeScreen+setWelcomeChannels"></a>

### welcomeScreen.setWelcomeChannels(channels, reason) ⇒

It sets the welcome channels of the guild

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The return value is the updated guild.

| Param    | Description                                  |
| -------- | -------------------------------------------- |
| channels | The channels to set the welcome channels to. |
| reason   | The reason for the edit.                     |

<a name="WelcomeScreen+setDescription"></a>

### welcomeScreen.setDescription(description, reason) ⇒

It edits the description of the channel

**Kind**: instance method of [<code>WelcomeScreen</code>](#WelcomeScreen)  
**Returns**: The description of the channel.

| Param       | Description                         |
| ----------- | ----------------------------------- |
| description | The new description of the channel. |
| reason      | The reason for the edit.            |

<a name="WelcomeScreenChannel"></a>

## WelcomeScreenChannel ⇐ <code>Base</code>

It's a class that represents a welcome screen channel

**Kind**: global class  
**Extends**: <code>Base</code>

- [WelcomeScreenChannel](#WelcomeScreenChannel) ⇐ <code>Base</code>
  - [new WelcomeScreenChannel([data], guildId, client)](#new_WelcomeScreenChannel_new)
  - [.channel](#WelcomeScreenChannel+channel) ⇒
  - [.guild](#WelcomeScreenChannel+guild) ⇒

<a name="new_WelcomeScreenChannel_new"></a>

### new WelcomeScreenChannel([data], guildId, client)

This function is a constructor for the class ReactionRole.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| [data]  | The data that was sent from the API.         |
| guildId | The ID of the guild the reaction role is in. |
| client  | The client that the event was emitted from   |

<a name="WelcomeScreenChannel+channel"></a>

### welcomeScreenChannel.channel ⇒

It returns the channel object of the channel ID that is stored in the message object

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: The channel object.  
<a name="WelcomeScreenChannel+guild"></a>

### welcomeScreenChannel.guild ⇒

It returns the guild object of the guild ID that is stored in the database

**Kind**: instance property of [<code>WelcomeScreenChannel</code>](#WelcomeScreenChannel)  
**Returns**: The guild object.
