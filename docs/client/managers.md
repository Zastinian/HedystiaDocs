---
id: managers
title: Managers
description: Managers Section
sidebar_position: 4
keywords: [Hedystia, MrEsmile, Hedystia Bot, Boxmine]
---

<a name="ActionsManager"></a>

## ActionsManager

**Kind**: global class

- [ActionsManager](#ActionsManager)
  - [new ActionsManager(message, client)](#new_ActionsManager_new)
  - [.\_patch(message)](#ActionsManager+_patch) ⇒

<a name="new_ActionsManager_new"></a>

### new ActionsManager(message, client)

It defines a property called client, and sets it to the client variable

| Param   | Description                               |
| ------- | ----------------------------------------- |
| message | The message object that was sent.         |
| client  | The client that instantiated the message. |

<a name="ActionsManager+_patch"></a>

### actionsManager.\_patch(message) ⇒

It takes a message from the websocket and returns a class that represents the message.

**Kind**: instance method of [<code>ActionsManager</code>](#ActionsManager)  
**Returns**: The event is being returned.

| Param   | Description                                       |
| ------- | ------------------------------------------------- |
| message | The message that was received from the websocket. |

<a name="ApplicationCommandManager"></a>

## ApplicationCommandManager

**Kind**: global class

- [ApplicationCommandManager](#ApplicationCommandManager)
  - [new ApplicationCommandManager(client)](#new_ApplicationCommandManager_new)
  - _instance_
    - [.permissions](#ApplicationCommandManager+permissions) ⇒
    - [.cache](#ApplicationCommandManager+cache) ⇒
    - [.\_add(commands, [guild], [options])](#ApplicationCommandManager+_add) ⇒
    - [.create([options], [guild])](#ApplicationCommandManager+create) ⇒
    - [.set([options], [guild])](#ApplicationCommandManager+set) ⇒
    - [.fetch(command, options)](#ApplicationCommandManager+fetch) ⇒
    - [.delete(command, [guild])](#ApplicationCommandManager+delete) ⇒
    - [.edit(command, [options], [guild])](#ApplicationCommandManager+edit) ⇒
    - [.\_fetchId(command, [cache], [force], [guild])](#ApplicationCommandManager+_fetchId) ⇒
  - _static_
    - [.transformOptions([options])](#ApplicationCommandManager.transformOptions) ⇒
    - [.transformPayload([payload])](#ApplicationCommandManager.transformPayload) ⇒

<a name="new_ApplicationCommandManager_new"></a>

### new ApplicationCommandManager(client)

It's a constructor function that takes a client parameter and passes it to the super function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="ApplicationCommandManager+permissions"></a>

### applicationCommandManager.permissions ⇒

It returns a new ApplicationCommandPermissionManager object, which is a class that I made.

I'm not sure if this is the right place to ask this question, but I'm not sure where else to ask
it.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: A new instance of the ApplicationCommandPermissionManager class.  
<a name="ApplicationCommandManager+cache"></a>

### applicationCommandManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The Collection object.  
<a name="ApplicationCommandManager+_add"></a>

### applicationCommandManager.\_add(commands, [guild], [options]) ⇒

\_add(commands, guild = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                     |
| --------- | ------------------------------- |
| commands  | The command or commands to add. |
| [guild]   | The guild ID                    |
| [options] | cache = true, force = false     |

<a name="ApplicationCommandManager+create"></a>

### applicationCommandManager.create([options], [guild]) ⇒

It creates a new command for the application

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                                             |
| --------- | ------------------------------------------------------- |
| [options] | The options for the command.                            |
| [guild]   | The guild ID or guild object to create the command for. |

<a name="ApplicationCommandManager+set"></a>

### applicationCommandManager.set([options], [guild]) ⇒

It sets the commands for a guild

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: An array of objects.

| Param     | Description                                                |
| --------- | ---------------------------------------------------------- |
| [options] | An array of objects that contain the following properties: |
| [guild]   | The guild ID or guild object to set the commands for.      |

<a name="ApplicationCommandManager+fetch"></a>

### applicationCommandManager.fetch(command, options) ⇒

It fetches commands from the API

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: An array of objects.

| Param   | Description           |
| ------- | --------------------- |
| command | The command to fetch. |
| options |                       |

<a name="ApplicationCommandManager+delete"></a>

### applicationCommandManager.delete(command, [guild]) ⇒

It deletes a command from the application

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The deleted command.

| Param   | Description                           |
| ------- | ------------------------------------- |
| command | The command to delete.                |
| [guild] | The guild to remove the command from. |

<a name="ApplicationCommandManager+edit"></a>

### applicationCommandManager.edit(command, [options], [guild]) ⇒

It edits an application command

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param     | Description                  |
| --------- | ---------------------------- |
| command   | The command to edit.         |
| [options] | The options for the command. |
| [guild]   | The guild ID                 |

<a name="ApplicationCommandManager+_fetchId"></a>

### applicationCommandManager.\_fetchId(command, [cache], [force], [guild]) ⇒

It fetches a command from the API and adds it to the cache

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The command object.

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| command |                    | The command to fetch.                           |
| [cache] | <code>true</code>  | Whether or not to cache the command.            |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |
| [guild] |                    | The guild to fetch the command from.            |

<a name="ApplicationCommandManager.transformOptions"></a>

### ApplicationCommandManager.transformOptions([options]) ⇒

If the option type is a sub command group or sub command, return a new instance of the respective
class, otherwise return a new instance of the SlashOption class

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The return value is a JSON object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="ApplicationCommandManager.transformPayload"></a>

### ApplicationCommandManager.transformPayload([payload]) ⇒

It takes a payload object and returns a transformed payload object

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The return is a new object with the properties of the payload object.

| Param     | Description                          |
| --------- | ------------------------------------ |
| [payload] | The payload that is sent to the API. |

<a name="ApplicationCommandPermissionManager"></a>

## ApplicationCommandPermissionManager

**Kind**: global class

- [ApplicationCommandPermissionManager](#ApplicationCommandPermissionManager)
  - [new ApplicationCommandPermissionManager(client, guildId)](#new_ApplicationCommandPermissionManager_new)
  - _instance_
    - [.cache](#ApplicationCommandPermissionManager+cache) ⇒
    - [.\_add(commands, [guildId], [options])](#ApplicationCommandPermissionManager+_add) ⇒
    - [.fetch(commands, options)](#ApplicationCommandPermissionManager+fetch) ⇒
    - [.\_fetchId(commands, [cache], [force], [guild])](#ApplicationCommandPermissionManager+_fetchId) ⇒
  - _static_
    - [.transformPermissions([o])](#ApplicationCommandPermissionManager.transformPermissions) ⇒
    - [.transformPermission([o])](#ApplicationCommandPermissionManager.transformPermission) ⇒
    - [.parseRemoveOptions(payload, fetchedData)](#ApplicationCommandPermissionManager.parseRemoveOptions) ⇒

<a name="new_ApplicationCommandPermissionManager_new"></a>

### new ApplicationCommandPermissionManager(client, guildId)

This function is a constructor for the class GuildSettings. It takes in a client and a guildId and
sets the guildId to the guildId that was passed in.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| client  | The client object                                     |
| guildId | The ID of the guild you want to get the settings for. |

<a name="ApplicationCommandPermissionManager+cache"></a>

### applicationCommandPermissionManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The Collection object.  
<a name="ApplicationCommandPermissionManager+_add"></a>

### applicationCommandPermissionManager.\_add(commands, [guildId], [options]) ⇒

\_add(commands, guildId = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is a new instance of the ApplicationCommandPermission class.

| Param     | Description                                     |
| --------- | ----------------------------------------------- |
| commands  | The command or command ID to add.               |
| [guildId] | The ID of the guild to get the permissions for. |
| [options] | cache = true, force = false                     |

<a name="ApplicationCommandPermissionManager+fetch"></a>

### applicationCommandPermissionManager.fetch(commands, options) ⇒

It fetches the command permissions for a guild

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is a new instance of the cache constructor.

| Param    | Description                                         |
| -------- | --------------------------------------------------- |
| commands | The command ID or an array of command IDs to fetch. |
| options  |                                                     |

<a name="ApplicationCommandPermissionManager+_fetchId"></a>

### applicationCommandPermissionManager.\_fetchId(commands, [cache], [force], [guild]) ⇒

It fetches the permissions of a command from the API

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The permissions of the command.

| Param    | Default            | Description                                      |
| -------- | ------------------ | ------------------------------------------------ |
| commands |                    | The command to fetch permissions for.            |
| [cache]  | <code>true</code>  | Whether or not to cache the command permissions. |
| [force]  | <code>false</code> | If true, it will force the cache to be updated.  |
| [guild]  |                    | The guild to fetch the command permissions for.  |

<a name="ApplicationCommandPermissionManager.transformPermissions"></a>

### ApplicationCommandPermissionManager.transformPermissions([o]) ⇒

"If the object has an id property, and that property is a string, then return that property,
otherwise if the object has an id property, and that property has an id property, then return that
property, otherwise return undefined."

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is an object with the following properties:

| Param | Description                                 |
| ----- | ------------------------------------------- |
| [o]   | This is the object that is being passed in. |

<a name="ApplicationCommandPermissionManager.transformPermission"></a>

### ApplicationCommandPermissionManager.transformPermission([o]) ⇒

It takes an object with a command property and a permissions property, and returns an object with
an id property and a permissions property

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The return value is an object with two properties: id and permissions.

| Param | Description                           |
| ----- | ------------------------------------- |
| [o]   | The object that is being transformed. |

<a name="ApplicationCommandPermissionManager.parseRemoveOptions"></a>

### ApplicationCommandPermissionManager.parseRemoveOptions(payload, fetchedData) ⇒

It takes a payload and fetched data, and returns an array of objects that are not in the payload

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: An array of objects.

| Param       | Description                             |
| ----------- | --------------------------------------- |
| payload     | The payload that is sent to the server. |
| fetchedData | Array of objects                        |

<a name="AutoModManager"></a>

## AutoModManager

**Kind**: global class

- [AutoModManager](#AutoModManager)
  - [new AutoModManager(client)](#new_AutoModManager_new)
  - _instance_
    - [.cache](#AutoModManager+cache) ⇒
    - [.\_add(rules, [guildId], [options])](#AutoModManager+_add) ⇒
    - [.fetch(rule, options)](#AutoModManager+fetch) ⇒
    - [.\_fetchId(rule, [cache], [force])](#AutoModManager+_fetchId) ⇒
    - [.create([options])](#AutoModManager+create) ⇒
    - [.edit(rule, [options])](#AutoModManager+edit) ⇒
    - [.delete(rule, reason)](#AutoModManager+delete) ⇒
  - _static_
    - [.transformPayload([payload])](#AutoModManager.transformPayload) ⇒
    - [.transformActions([actions])](#AutoModManager.transformActions) ⇒
    - [.transformMetadata([metadata])](#AutoModManager.transformMetadata) ⇒

<a name="new_AutoModManager_new"></a>

### new AutoModManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="AutoModManager+cache"></a>

### autoModManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The Collection class.  
<a name="AutoModManager+_add"></a>

### autoModManager.\_add(rules, [guildId], [options]) ⇒

It adds a rule to the cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule object

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| rules     | The rule object or ID of the rule to add.   |
| [guildId] | The ID of the guild to fetch the rule from. |
| [options] | cache = true, force = false                 |

<a name="AutoModManager+fetch"></a>

### autoModManager.fetch(rule, options) ⇒

It fetches all the rules from the API and returns them in a cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: An array of objects.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| rule    | The rule ID or object.                         |
| options | An object containing the following properties: |

<a name="AutoModManager+_fetchId"></a>

### autoModManager.\_fetchId(rule, [cache], [force]) ⇒

It fetches a rule from the API and adds it to the cache

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule object

| Param   | Default            | Description                                          |
| ------- | ------------------ | ---------------------------------------------------- |
| rule    |                    | The rule to fetch. Can be a string or a rule object. |
| [cache] | <code>true</code>  | Whether or not to cache the rule.                    |
| [force] | <code>false</code> | If true, it will force the cache to be updated.      |

<a name="AutoModManager+create"></a>

### autoModManager.create([options]) ⇒

It creates a new rule

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: A new rule object

| Param     | Description               |
| --------- | ------------------------- |
| [options] | The options for the rule. |

<a name="AutoModManager+edit"></a>

### autoModManager.edit(rule, [options]) ⇒

It edits an existing rule

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The rule that was edited.

| Param     | Description                                          |
| --------- | ---------------------------------------------------- |
| rule      | The rule to edit. Can be a rule object or a rule ID. |
| [options] | Object                                               |

<a name="AutoModManager+delete"></a>

### autoModManager.delete(rule, reason) ⇒

It deletes a rule from the server

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The deleted rule.

| Param  | Description                                            |
| ------ | ------------------------------------------------------ |
| rule   | The rule to delete. Can be a rule ID or a rule object. |
| reason | The reason for the deletion.                           |

<a name="AutoModManager.transformPayload"></a>

### AutoModManager.transformPayload([payload]) ⇒

It takes a payload object and returns a new object with the same properties, but with the values
transformed to match the API's expected format

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The payload is being returned.

| Param     | Description               |
| --------- | ------------------------- |
| [payload] | The payload to transform. |

<a name="AutoModManager.transformActions"></a>

### AutoModManager.transformActions([actions]) ⇒

It takes an object with a `type` property and an optional `metadata` property, and returns an
object with a `type` property and an optional `metadata` property

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: An object with a type and metadata property.

| Param     | Description               |
| --------- | ------------------------- |
| [actions] | The actions to transform. |

<a name="AutoModManager.transformMetadata"></a>

### AutoModManager.transformMetadata([metadata]) ⇒

It takes in a metadata object, and returns a new object with the same properties, but with the
properties renamed to match the new naming scheme

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The return value is the metadata object with the values of the metadata object being
assigned to the keys of the new object.

| Param      | Description                                                          |
| ---------- | -------------------------------------------------------------------- |
| [metadata] | The metadata object that is passed to the constructor of the plugin. |

<a name="BaseThreadManager"></a>

## BaseThreadManager

**Kind**: global class

- [BaseThreadManager](#BaseThreadManager)
  - [new BaseThreadManager(client)](#new_BaseThreadManager_new)
  - [.cache](#BaseThreadManager+cache) ⇒
  - [.\_add(threads, [guildId], [options])](#BaseThreadManager+_add) ⇒
  - [.create(message, options)](#BaseThreadManager+create) ⇒
  - [.fetch(thread, [options])](#BaseThreadManager+fetch) ⇒
  - [.fetchActive()](#BaseThreadManager+fetchActive) ⇒
  - [.fetchArchivedThread([options])](#BaseThreadManager+fetchArchivedThread) ⇒
  - [.fetchForumThreads([query])](#BaseThreadManager+fetchForumThreads) ⇒

<a name="new_BaseThreadManager_new"></a>

### new BaseThreadManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="BaseThreadManager+cache"></a>

### baseThreadManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: The Collection class.  
<a name="BaseThreadManager+_add"></a>

### baseThreadManager.\_add(threads, [guildId], [options]) ⇒

It adds a thread to the cache

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A thread object

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| threads   | The thread object or thread ID.             |
| [guildId] | The guild ID of the guild the thread is in. |
| [options] | cache = true, force = true                  |

<a name="BaseThreadManager+create"></a>

### baseThreadManager.create(message, options) ⇒

It creates a thread

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A new thread is being returned.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| message | The message to create the thread from.         |
| options | An object containing the following parameters: |

<a name="BaseThreadManager+fetch"></a>

### baseThreadManager.fetch(thread, [options]) ⇒

It fetches a thread

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A channel object.

| Param     | Description                              |
| --------- | ---------------------------------------- |
| thread    | The thread ID.                           |
| [options] | An object containing additional options. |

<a name="BaseThreadManager+fetchActive"></a>

### baseThreadManager.fetchActive() ⇒

It fetches all the active threads in a guild

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: An array of threads  
<a name="BaseThreadManager+fetchArchivedThread"></a>

### baseThreadManager.fetchArchivedThread([options]) ⇒

This function fetches archived threads from a channel

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: A new FetchedThreads object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="BaseThreadManager+fetchForumThreads"></a>

### baseThreadManager.fetchForumThreads([query]) ⇒

This function fetches forum threads from the specified channel

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: An array of threads

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| [query] | An object containing the following parameters: |

<a name="ChannelManager"></a>

## ChannelManager

**Kind**: global class

- [ChannelManager](#ChannelManager)
  - [new ChannelManager(client)](#new_ChannelManager_new)
  - _instance_
    - [.cache](#ChannelManager+cache) ⇒
    - [.\_add(channels, [guildId], [options])](#ChannelManager+_add) ⇒
    - [.fetch(channel, options)](#ChannelManager+fetch) ⇒
    - [.\_fetchId(channel, [cache], [force])](#ChannelManager+_fetchId) ⇒
    - [.edit(channel, [options])](#ChannelManager+edit) ⇒
    - [.delete(channel, reason)](#ChannelManager+delete) ⇒
    - [.createInvite(channel, [options])](#ChannelManager+createInvite) ⇒
    - [.follow(news, [options])](#ChannelManager+follow) ⇒
    - [.triggerTyping(channel)](#ChannelManager+triggerTyping) ⇒
    - [.clone(channel)](#ChannelManager+clone) ⇒
  - _static_
    - [.transformPayload([o], [position])](#ChannelManager.transformPayload) ⇒
    - [.transformOverwrites([p])](#ChannelManager.transformOverwrites) ⇒

<a name="new_ChannelManager_new"></a>

### new ChannelManager(client)

It's a constructor function that takes a client parameter and passes it to the super function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="ChannelManager+cache"></a>

### channelManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The Collection object.  
<a name="ChannelManager+_add"></a>

### channelManager.\_add(channels, [guildId], [options]) ⇒

It takes a channel object, and returns a channel object

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: A channel object.

| Param     | Description                            |
| --------- | -------------------------------------- |
| channels  | The channel object or channel ID.      |
| [guildId] | The ID of the guild the channel is in. |
| [options] | cache = true, force = false            |

<a name="ChannelManager+fetch"></a>

### channelManager.fetch(channel, options) ⇒

It fetches all the channels in a guild.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: An array of objects.

| Param   | Description               |
| ------- | ------------------------- |
| channel | The channel ID or object. |
| options |                           |

<a name="ChannelManager+_fetchId"></a>

### channelManager.\_fetchId(channel, [cache], [force]) ⇒

It fetches the channel ID from the API and adds it to the cache

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| channel |                    | The channel to fetch.                           |
| [cache] | <code>true</code>  | Whether or not to cache the channel.            |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="ChannelManager+edit"></a>

### channelManager.edit(channel, [options]) ⇒

It edits a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param     | Description          |
| --------- | -------------------- |
| channel   | The channel to edit. |
| [options] | Object               |

<a name="ChannelManager+delete"></a>

### channelManager.delete(channel, reason) ⇒

It deletes a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The deleted channel.

| Param   | Description                  |
| ------- | ---------------------------- |
| channel | The channel to delete.       |
| reason  | The reason for the deletion. |

<a name="ChannelManager+createInvite"></a>

### channelManager.createInvite(channel, [options]) ⇒

It creates an invite for a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: An invite object.

| Param     | Description                           |
| --------- | ------------------------------------- |
| channel   | The channel to create the invite for. |
| [options] | Object                                |

<a name="ChannelManager+follow"></a>

### channelManager.follow(news, [options]) ⇒

It follows a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel that was followed.

| Param     | Description                     |
| --------- | ------------------------------- |
| news      | The channel you want to follow. |
| [options] | Object                          |

<a name="ChannelManager+triggerTyping"></a>

### channelManager.triggerTyping(channel) ⇒

It triggers typing in a channel

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: Nothing.

| Param   | Description                                  |
| ------- | -------------------------------------------- |
| channel | The channel to send the typing indicator to. |

<a name="ChannelManager+clone"></a>

### channelManager.clone(channel) ⇒

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The channel object.

| Param   | Description           |
| ------- | --------------------- |
| channel | The channel to clone. |

<a name="ChannelManager.transformPayload"></a>

### ChannelManager.transformPayload([o], [position]) ⇒

It transforms an object into another object

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: an object with the properties of name, type, topic, bitrate, user_limit,
rate_limit_per_user, position, permission_overwrites, parent_id, nsfw, archived,
auto_archive_duration, locked, invitable, default_auto_archive_duration, video_quality_mode,
rtc_region, and

| Param      | Default            | Description                           |
| ---------- | ------------------ | ------------------------------------- |
| [o]        |                    | The object that is being transformed. |
| [position] | <code>false</code> | boolean                               |

<a name="ChannelManager.transformOverwrites"></a>

### ChannelManager.transformOverwrites([p]) ⇒

It takes an object with properties id, type, allow, and deny, and returns an object with the same
properties, but with the id property being a string, the type property being a number, and the
allow and deny properties being strings

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The return is an object with the properties id, type, allow, and deny.

| Param | Description            |
| ----- | ---------------------- |
| [p]   | The overwrites object. |

<a name="EmojiManager"></a>

## EmojiManager

**Kind**: global class

- [EmojiManager](#EmojiManager)
  - [new EmojiManager(client)](#new_EmojiManager_new)
  - _instance_
    - [.cache](#EmojiManager+cache) ⇒
    - [.\_add(emojis, [guildId], [options])](#EmojiManager+_add) ⇒
    - [.create([options])](#EmojiManager+create) ⇒
    - [.edit(emoji, [options])](#EmojiManager+edit) ⇒
    - [.delete(emoji, reason)](#EmojiManager+delete) ⇒
    - [.fetch(emoji, options)](#EmojiManager+fetch) ⇒
    - [.\_fetchId(emoji, [cache], [force])](#EmojiManager+_fetchId) ⇒
  - _static_
    - [.transformRoles([roles])](#EmojiManager.transformRoles) ⇒
    - [.transformOptions(o)](#EmojiManager.transformOptions) ⇒

<a name="new_EmojiManager_new"></a>

### new EmojiManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="EmojiManager+cache"></a>

### emojiManager.cache ⇒

`return Collection`

**Kind**: instance property of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The Collection class  
<a name="EmojiManager+_add"></a>

### emojiManager.\_add(emojis, [guildId], [options]) ⇒

It takes an emoji object, and returns an emoji object

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new Emoji object

| Param     | Description                                                                              |
| --------- | ---------------------------------------------------------------------------------------- |
| emojis    | The emoji(s) to add to the cache. Can be an emoji object, an emoji ID, or an emoji name. |
| [guildId] | The ID of the guild the emoji is in.                                                     |
| [options] | cache = true, force = false                                                              |

<a name="EmojiManager+create"></a>

### emojiManager.create([options]) ⇒

It creates a new emoji

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new emoji object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="EmojiManager+edit"></a>

### emojiManager.edit(emoji, [options]) ⇒

It edits an emoji

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The emoji object

| Param     | Description                                                |
| --------- | ---------------------------------------------------------- |
| emoji     | The emoji to edit. Can be an emoji object, or an emoji ID. |
| [options] | Object                                                     |

<a name="EmojiManager+delete"></a>

### emojiManager.delete(emoji, reason) ⇒

It deletes an emoji from the guild

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The deleted emoji

| Param  | Description                                              |
| ------ | -------------------------------------------------------- |
| emoji  | The emoji to delete. Can be a string or an Emoji object. |
| reason | The reason for the deletion.                             |

<a name="EmojiManager+fetch"></a>

### emojiManager.fetch(emoji, options) ⇒

It fetches all the emojis in the guild

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new cache constructor

| Param   | Description                                                                |
| ------- | -------------------------------------------------------------------------- |
| emoji   | The emoji to fetch. Can be an emoji object, an emoji ID, or an emoji name. |
| options | An object containing the following properties:                             |

<a name="EmojiManager+_fetchId"></a>

### emojiManager.\_fetchId(emoji, [cache], [force]) ⇒

It fetches an emoji from the API and adds it to the cache

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The emoji object

| Param   | Default            | Description                                             |
| ------- | ------------------ | ------------------------------------------------------- |
| emoji   |                    | The emoji to fetch. Can be a string or an Emoji object. |
| [cache] | <code>true</code>  | Whether or not to cache the emoji.                      |
| [force] | <code>false</code> | If true, it will force the cache to be updated.         |

<a name="EmojiManager.transformRoles"></a>

### EmojiManager.transformRoles([roles]) ⇒

It transforms the roles object into a string.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The roles object is being returned.

| Param   | Description                  |
| ------- | ---------------------------- |
| [roles] | The roles that the user has. |

<a name="EmojiManager.transformOptions"></a>

### EmojiManager.transformOptions(o) ⇒

It takes an object with a name, image, and roles property, and returns an object with the same
properties, but with the image property being a data URI

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: A new object with the name, image, and roles properties.

| Param | Description         |
| ----- | ------------------- |
| o     | The options object. |

<a name="GuildApplicationCommandManager"></a>

## GuildApplicationCommandManager

**Kind**: global class  
<a name="new_GuildApplicationCommandManager_new"></a>

### new GuildApplicationCommandManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildAutoModManager"></a>

## GuildAutoModManager

**Kind**: global class

- [GuildAutoModManager](#GuildAutoModManager)
  - [new GuildAutoModManager(guildId, client)](#new_GuildAutoModManager_new)
  - [.cache](#GuildAutoModManager+cache) ⇒

<a name="new_GuildAutoModManager_new"></a>

### new GuildAutoModManager(guildId, client)

`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
assigns them to the `guildId` and `client` properties of the class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildAutoModManager+cache"></a>

### guildAutoModManager.cache ⇒

`return super.cache.filter((o) => o.guildId === this.guildId)`

The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildAutoModManager</code>](#GuildAutoModManager)  
**Returns**: The cache property is being returned.

<a name="GuildBanManager"></a>

## GuildBanManager

**Kind**: global class

- [GuildBanManager](#GuildBanManager)
  - [new GuildBanManager(guildId, client)](#new_GuildBanManager_new)
  - _instance_
    - [.cache](#GuildBanManager+cache) ⇒
    - [.\_add(bans, [guildId], [options])](#GuildBanManager+_add) ⇒
    - [.create(user, [options])](#GuildBanManager+create) ⇒
    - [.remove(user, reason)](#GuildBanManager+remove) ⇒
    - [.fetch(ban, options)](#GuildBanManager+fetch) ⇒
    - [.\_fetchId(ban, [cache], [force])](#GuildBanManager+_fetchId) ⇒
  - _static_
    - [.transformPayloadd([o])](#GuildBanManager.transformPayloadd) ⇒

<a name="new_GuildBanManager_new"></a>

### new GuildBanManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildBanManager+cache"></a>

### guildBanManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The Collection class  
<a name="GuildBanManager+_add"></a>

### guildBanManager.\_add(bans, [guildId], [options]) ⇒

It adds a ban to the cache

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new instance of the GuildBan class.

| Param     | Description                                          |
| --------- | ---------------------------------------------------- |
| bans      | The ban object or ID of the ban to add to the cache. |
| [guildId] | The ID of the guild to fetch the bans from.          |
| [options] | Object                                               |

<a name="GuildBanManager+create"></a>

### guildBanManager.create(user, [options]) ⇒

It bans a user from the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new instance of the GuildBanManager class.

| Param     | Description      |
| --------- | ---------------- |
| user      | The user to ban. |
| [options] | Object           |

<a name="GuildBanManager+remove"></a>

### guildBanManager.remove(user, reason) ⇒

It removes a ban from a guild

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A ban object

| Param  | Description                                                 |
| ------ | ----------------------------------------------------------- |
| user   | The user to ban. Can be a user object, user ID, or mention. |
| reason | The reason for the ban.                                     |

<a name="GuildBanManager+fetch"></a>

### guildBanManager.fetch(ban, options) ⇒

It fetches a list of bans from the API and returns a cache of them

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: A new cache constructor

| Param   | Description                                                                   |
| ------- | ----------------------------------------------------------------------------- |
| ban     | The ban to fetch. Can be a ban object, a user object, a user ID, or a string. |
| options | An object containing the following properties:                                |

<a name="GuildBanManager+_fetchId"></a>

### guildBanManager.\_fetchId(ban, [cache], [force]) ⇒

It fetches a ban from the API and adds it to the cache

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The ban object

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| ban     |                    | The ban object or id to fetch.                  |
| [cache] | <code>true</code>  | Whether or not to cache the ban.                |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="GuildBanManager.transformPayloadd"></a>

### GuildBanManager.transformPayloadd([o]) ⇒

It takes an object with a property called days, and if that property is less than 0 or greater
than 7, it throws a RangeError. Otherwise, it returns an object with a property called
delete_message_days

**Kind**: static method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The payload for the request.

| Param | Description                              |
| ----- | ---------------------------------------- |
| [o]   | The object that contains the parameters. |

<a name="GuildChannelManager"></a>

## GuildChannelManager

**Kind**: global class

- [GuildChannelManager](#GuildChannelManager)
  - [new GuildChannelManager(guildId, client)](#new_GuildChannelManager_new)
  - [.cache](#GuildChannelManager+cache) ⇒
  - [.create([options])](#GuildChannelManager+create) ⇒
  - [.modifyPosition([options])](#GuildChannelManager+modifyPosition) ⇒

<a name="new_GuildChannelManager_new"></a>

### new GuildChannelManager(guildId, client)

It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
guildId that was passed in, and then sets the client to the client that was passed in.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run from.        |

<a name="GuildChannelManager+cache"></a>

### guildChannelManager.cache ⇒

It filters the cache to only include objects that have a guild_id or guildId property that matches
the guildId of the current instance

**Kind**: instance property of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: The cache is being filtered to only return the objects that have the same guildId as the
guildId of the current guild.  
<a name="GuildChannelManager+create"></a>

### guildChannelManager.create([options]) ⇒

It creates a new channel in the guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: The channel object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildChannelManager+modifyPosition"></a>

### guildChannelManager.modifyPosition([options]) ⇒

It takes an array of objects, transforms them, and then sends them to the API

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: A new cache object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildDiscoveryManager"></a>

## GuildDiscoveryManager

**Kind**: global class

- [GuildDiscoveryManager](#GuildDiscoveryManager)
  - [new GuildDiscoveryManager(guildId, client)](#new_GuildDiscoveryManager_new)
  - _instance_
    - [.\_add(discovery)](#GuildDiscoveryManager+_add) ⇒
    - [.fetch([guild])](#GuildDiscoveryManager+fetch) ⇒
    - [.edit([guild], [options])](#GuildDiscoveryManager+edit) ⇒
  - _static_
    - [.transformPayload([payload])](#GuildDiscoveryManager.transformPayload) ⇒

<a name="new_GuildDiscoveryManager_new"></a>

### new GuildDiscoveryManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildDiscoveryManager+_add"></a>

### guildDiscoveryManager.\_add(discovery) ⇒

`_add` is a function that takes a `discovery` parameter and returns a new `GuildDiscovery` object.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: A new GuildDiscovery object

| Param     | Description                |
| --------- | -------------------------- |
| discovery | The discovery object or ID |

<a name="GuildDiscoveryManager+fetch"></a>

### guildDiscoveryManager.fetch([guild]) ⇒

`fetch` fetches the discovery metadata for a guild

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The discovery metadata for the guild.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| [guild] | The guild to fetch the discovery metadata for. |

<a name="GuildDiscoveryManager+edit"></a>

### guildDiscoveryManager.edit([guild], [options]) ⇒

`edit` edits the discovery metadata of a guild

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The discovery object

| Param     | Description                                                      |
| --------- | ---------------------------------------------------------------- |
| [guild]   | The guild ID or guild object to edit the discovery metadata for. |
| [options] | Object                                                           |

<a name="GuildDiscoveryManager.transformPayload"></a>

### GuildDiscoveryManager.transformPayload([payload]) ⇒

It takes a payload object and returns a new object with the same keys, but with the values
transformed to match the API's expectations

**Kind**: static method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: The transformed payload.

| Param     | Description                          |
| --------- | ------------------------------------ |
| [payload] | The payload that is sent to the API. |

<a name="GuildEmojiManager"></a>

## GuildEmojiManager

**Kind**: global class

- [GuildEmojiManager](#GuildEmojiManager)
  - [new GuildEmojiManager(guildId, client)](#new_GuildEmojiManager_new)
  - [.cache](#GuildEmojiManager+cache) ⇒
  - [.\_add(emojis, [options])](#GuildEmojiManager+_add) ⇒

<a name="new_GuildEmojiManager_new"></a>

### new GuildEmojiManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildEmojiManager+cache"></a>

### guildEmojiManager.cache ⇒

It returns the cache, but only the cache that has the same guildId as the current guild

**Kind**: instance property of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: The cache is being filtered by the guildId.  
<a name="GuildEmojiManager+_add"></a>

### guildEmojiManager.\_add(emojis, [options]) ⇒

`_add` is a function that adds emojis to a guild

**Kind**: instance method of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: The return value of the super.\_add method.

| Param     | Description                                                           |
| --------- | --------------------------------------------------------------------- |
| emojis    | The emojis to add. This can be a single emoji, or an array of emojis. |
| [options] | cache = true, force = false                                           |

<a name="GuildIntegrationManager"></a>

## GuildIntegrationManager

**Kind**: global class

- [GuildIntegrationManager](#GuildIntegrationManager)
  - [new GuildIntegrationManager(guildId, client)](#new_GuildIntegrationManager_new)
  - [.cache](#GuildIntegrationManager+cache) ⇒
  - [.\_add(integrations, [guildId], [options])](#GuildIntegrationManager+_add) ⇒
  - [.fetch([options], [guild])](#GuildIntegrationManager+fetch) ⇒
  - [.delete([options], reason)](#GuildIntegrationManager+delete) ⇒

<a name="new_GuildIntegrationManager_new"></a>

### new GuildIntegrationManager(guildId, client)

It's a constructor function that takes in a guildId and a client, and then sets the guildId to the
guildId that was passed in, and then sets the client to the client that was passed in.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run from.        |

<a name="GuildIntegrationManager+cache"></a>

### guildIntegrationManager.cache ⇒

It returns a collection of all the elements in the document with the given tag name.

**Kind**: instance property of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The Collection class.  
<a name="GuildIntegrationManager+_add"></a>

### guildIntegrationManager.\_add(integrations, [guildId], [options]) ⇒

\_add(integrations, guildId = this.guildId, options = {cache: true, force: false})

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The integration object

| Param        | Description                 |
| ------------ | --------------------------- |
| integrations | The integrations object     |
| [guildId]    | The ID of the guild         |
| [options]    | cache = true, force = false |

<a name="GuildIntegrationManager+fetch"></a>

### guildIntegrationManager.fetch([options], [guild]) ⇒

It fetches the integrations for a guild

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: An array of objects.

| Param     | Description                   |
| --------- | ----------------------------- |
| [options] | cache = true, force = false   |
| [guild]   | The guild ID or guild object. |

<a name="GuildIntegrationManager+delete"></a>

### guildIntegrationManager.delete([options], reason) ⇒

It deletes an integration from a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The integration object.

| Param     | Description                   |
| --------- | ----------------------------- |
| [options] | Object                        |
| reason    | The reason for the audit log. |

<a name="GuildInviteManager"></a>

## GuildInviteManager

**Kind**: global class

- [GuildInviteManager](#GuildInviteManager)
  - [new GuildInviteManager(guild, client)](#new_GuildInviteManager_new)
  - [.cache](#GuildInviteManager+cache) ⇒
  - [.\_add(invites, [guild], [options])](#GuildInviteManager+_add) ⇒
  - [.fetch([options])](#GuildInviteManager+fetch) ⇒
  - [.delete(invite, reason)](#GuildInviteManager+delete) ⇒

<a name="new_GuildInviteManager_new"></a>

### new GuildInviteManager(guild, client)

It's a constructor function that takes in a guild and a client, and sets the guild to the guild that
was passed in

| Param  | Description                                           |
| ------ | ----------------------------------------------------- |
| guild  | The guild object that the event is being emitted for. |
| client | The client that the command is being run on.          |

<a name="GuildInviteManager+cache"></a>

### guildInviteManager.cache ⇒

`cache` is a getter that returns the `Collection` class

**Kind**: instance property of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The Collection class  
<a name="GuildInviteManager+_add"></a>

### guildInviteManager.\_add(invites, [guild], [options]) ⇒

It adds an invite to the cache

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The invite object

| Param     | Description                       |
| --------- | --------------------------------- |
| invites   | The invite code or invite object. |
| [guild]   | The guild the invite is for.      |
| [options] | cache = true, force = false       |

<a name="GuildInviteManager+fetch"></a>

### guildInviteManager.fetch([options]) ⇒

It fetches all the invites for the guild and returns a new cache of the invites

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: A new instance of the cache constructor.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildInviteManager+delete"></a>

### guildInviteManager.delete(invite, reason) ⇒

It deletes an invite

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The invite object

| Param  | Description                                 |
| ------ | ------------------------------------------- |
| invite | The invite code or invite object to delete. |
| reason | The reason for deleting the invite.         |

<a name="GuildManager"></a>

## GuildManager

**Kind**: global class

- [GuildManager](#GuildManager)
  - [new GuildManager(client, websocket)](#new_GuildManager_new)
  - _instance_
    - [.cache](#GuildManager+cache) ⇒
    - [.\_add(guilds, [options])](#GuildManager+_add) ⇒
    - [.create([options])](#GuildManager+create) ⇒
    - [.fetch(guild, options)](#GuildManager+fetch) ⇒ <code>function</code>
    - [.\_fetchId(guild, options)](#GuildManager+_fetchId) ⇒
    - [.edit(guilds, [options])](#GuildManager+edit) ⇒
    - [.delete(guild)](#GuildManager+delete) ⇒
    - [.fetchPreview(guild)](#GuildManager+fetchPreview) ⇒
    - [.modifyMFALevel(guild, [options])](#GuildManager+modifyMFALevel) ⇒
  - _static_
    - [.transformPayload([payload])](#GuildManager.transformPayload) ⇒
    - [.transformOptions([o])](#GuildManager.transformOptions) ⇒

<a name="new_GuildManager_new"></a>

### new GuildManager(client, websocket)

It's a constructor function that takes in two parameters, client and websocket, and then calls the
super function with those two parameters.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| client    | The client object                              |
| websocket | The websocket that the client is connected to. |

<a name="GuildManager+cache"></a>

### guildManager.cache ⇒

The function returns a collection of objects that are stored in the cache.

**Kind**: instance property of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The Collection class.  
<a name="GuildManager+_add"></a>

### guildManager.\_add(guilds, [options]) ⇒

It adds a guild to the cache

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: A new instance of the Guild class.

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| guilds    | The guild object or ID of the guild to add. |
| [options] | cache = true, force = false                 |

<a name="GuildManager+create"></a>

### guildManager.create([options]) ⇒

It creates a new guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guild object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildManager+fetch"></a>

### guildManager.fetch(guild, options) ⇒ <code>function</code>

It fetches the guilds of the user

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>function</code> - constructor cache

| Param   | Description         |
| ------- | ------------------- |
| guild   | The guild to fetch. |
| options |                     |

<a name="GuildManager+_fetchId"></a>

### guildManager.\_fetchId(guild, options) ⇒

It fetches a guild by ID

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guild object.

| Param   | Description            |
| ------- | ---------------------- |
| guild   | The guild object or ID |
| options |                        |

<a name="GuildManager+edit"></a>

### guildManager.edit(guilds, [options]) ⇒

It edits a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The guilds object.

| Param     | Description      |
| --------- | ---------------- |
| guilds    | The guild object |
| [options] | Object           |

<a name="GuildManager+delete"></a>

### guildManager.delete(guild) ⇒

It deletes a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The deleted guild.

| Param | Description          |
| ----- | -------------------- |
| guild | The guild to delete. |

<a name="GuildManager+fetchPreview"></a>

### guildManager.fetchPreview(guild) ⇒

It fetches the preview of a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: A new GuildPreview object.

| Param | Description                         |
| ----- | ----------------------------------- |
| guild | The guild to fetch the preview for. |

<a name="GuildManager+modifyMFALevel"></a>

### guildManager.modifyMFALevel(guild, [options]) ⇒

It modifies the MFA level of a guild

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The client.guilds.\_add(guildId)

| Param     | Description                           |
| --------- | ------------------------------------- |
| guild     | The guild to modify the MFA level of. |
| [options] | Object                                |

<a name="GuildManager.transformPayload"></a>

### GuildManager.transformPayload([payload]) ⇒

It takes a payload object, and returns a new object with the same keys, but with the values
transformed

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The payload is being returned.

| Param     |
| --------- |
| [payload] |

<a name="GuildManager.transformOptions"></a>

### GuildManager.transformOptions([o]) ⇒

It takes an object with optional properties `before`, `after`, and `limit`, and returns an object
with the same properties, but with the `before` and `after` properties converted to strings if
they are not already strings.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The return value is an object with the following properties:

| Param | Description         |
| ----- | ------------------- |
| [o]   | The options object. |

<a name="GuildMemberManager"></a>

## GuildMemberManager

**Kind**: global class

- [GuildMemberManager](#GuildMemberManager)
  - [new GuildMemberManager(guildId, client)](#new_GuildMemberManager_new)
  - _instance_
    - [.cache](#GuildMemberManager+cache) ⇒
    - [.\_add(members, [guildId], [options])](#GuildMemberManager+_add) ⇒
    - [.fetch(member, options)](#GuildMemberManager+fetch) ⇒
    - [.list([options])](#GuildMemberManager+list) ⇒
    - [.search([options])](#GuildMemberManager+search) ⇒
    - [.kick(member, reason)](#GuildMemberManager+kick) ⇒
    - [.ban(member, [options])](#GuildMemberManager+ban) ⇒
    - [.unban(user, reason)](#GuildMemberManager+unban) ⇒
    - [.edit(member, [options])](#GuildMemberManager+edit) ⇒
    - [.\_fetchId(member, options)](#GuildMemberManager+_fetchId) ⇒
  - _static_
    - [.transformTimeout(date)](#GuildMemberManager.transformTimeout) ⇒
    - [.transformOptions([options], [edit])](#GuildMemberManager.transformOptions) ⇒
    - [.transformPayload([payload])](#GuildMemberManager.transformPayload) ⇒

<a name="new_GuildMemberManager_new"></a>

### new GuildMemberManager(guildId, client)

This function is a constructor for the class

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildMemberManager+cache"></a>

### guildMemberManager.cache ⇒

It returns the value of the variable Collections.

**Kind**: instance property of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The cache object  
<a name="GuildMemberManager+_add"></a>

### guildMemberManager.\_add(members, [guildId], [options]) ⇒

It creates a new GuildMember object if the member isn't cached, or returns the cached member if it
is

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new GuildMember object

| Param     | Description                                                                                  |
| --------- | -------------------------------------------------------------------------------------------- |
| members   | The member(s) to add to the cache. Can be a string, a user object, or a guild member object. |
| [guildId] | The ID of the guild the member is in.                                                        |
| [options] | cache = true, force = false                                                                  |

<a name="GuildMemberManager+fetch"></a>

### guildMemberManager.fetch(member, options) ⇒

It fetches the members of a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A promise that resolves to a new cache.constructor

| Param   | Description                                                                     |
| ------- | ------------------------------------------------------------------------------- |
| member  | The member to fetch. Can be a user ID, a user object, or a guild member object. |
| options |                                                                                 |

<a name="GuildMemberManager+list"></a>

### guildMemberManager.list([options]) ⇒

It gets a list of members from the API and returns a cache of the members

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new cache constructor

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberManager+search"></a>

### guildMemberManager.search([options]) ⇒

It searches for members in a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new cache constructor

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberManager+kick"></a>

### guildMemberManager.kick(member, reason) ⇒

It kicks a member from the guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The deleted member

| Param  | Description                                                                          |
| ------ | ------------------------------------------------------------------------------------ |
| member | The member to kick. Can be a GuildMember object, a User object, or a user ID string. |
| reason | The reason for the kick.                                                             |

<a name="GuildMemberManager+ban"></a>

### guildMemberManager.ban(member, [options]) ⇒

It bans a member from a guild

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The member that was banned.

| Param     | Description        |
| --------- | ------------------ |
| member    | The member to ban. |
| [options] | Object             |

<a name="GuildMemberManager+unban"></a>

### guildMemberManager.unban(user, reason) ⇒

Unban a user from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The user that was unbanned.

| Param  | Description               |
| ------ | ------------------------- |
| user   | The user to unban.        |
| reason | The reason for the unban. |

<a name="GuildMemberManager+edit"></a>

### guildMemberManager.edit(member, [options]) ⇒

It edits a guild member

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: A new member object

| Param     | Description                     |
| --------- | ------------------------------- |
| member    | The member to edit.             |
| [options] | The options to pass to the API. |

<a name="GuildMemberManager+_fetchId"></a>

### guildMemberManager.\_fetchId(member, options) ⇒

It fetches a member from the API and returns the member object

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The member object

| Param   | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| member  | The member to fetch. Can be a string, a member object, or a user object. |
| options | An object with the following properties:                                 |

<a name="GuildMemberManager.transformTimeout"></a>

### GuildMemberManager.transformTimeout(date) ⇒

If the date is null, return null. If the date is not null, return the date as an ISO string

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The date is being returned in ISO format.

| Param | Description                 |
| ----- | --------------------------- |
| date  | The date to be transformed. |

<a name="GuildMemberManager.transformOptions"></a>

### GuildMemberManager.transformOptions([options], [edit]) ⇒

It transforms the options object into a format that the API can understand

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: an object with the keys limit, after, and the values of the options.limit, options.after,
and options.after?.user?.id, options.after?.id.

| Param     | Default            | Description                                    |
| --------- | ------------------ | ---------------------------------------------- |
| [options] |                    | The options object.                            |
| [edit]    | <code>false</code> | Whether or not the user is editing the member. |

<a name="GuildMemberManager.transformPayload"></a>

### GuildMemberManager.transformPayload([payload]) ⇒

If the payload is an array, map each element to its id, otherwise return the id of the payload

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The user id

| Param     | Description                                |
| --------- | ------------------------------------------ |
| [payload] | The payload that is being sent to the API. |

<a name="GuildMemberRoleManager"></a>

## GuildMemberRoleManager

**Kind**: global class

- [GuildMemberRoleManager](#GuildMemberRoleManager)
  - [new GuildMemberRoleManager(guildId, member, client)](#new_GuildMemberRoleManager_new)
  - _instance_
    - [.highest](#GuildMemberRoleManager+highest) ⇒
    - [.cache](#GuildMemberRoleManager+cache) ⇒
    - [.add(roles, reason)](#GuildMemberRoleManager+add) ⇒
    - [.remove(roles, reason)](#GuildMemberRoleManager+remove) ⇒
    - [.set(roles, reason)](#GuildMemberRoleManager+set) ⇒
  - _static_
    - [.transformRole([role])](#GuildMemberRoleManager.transformRole) ⇒

<a name="new_GuildMemberRoleManager_new"></a>

### new GuildMemberRoleManager(guildId, member, client)

`This function is a constructor for the class.`

| Param   | Description                                         |
| ------- | --------------------------------------------------- |
| guildId | The ID of the guild the member is in.               |
| member  | The member object of the member who left the guild. |
| client  | The client that the command is being run from.      |

<a name="GuildMemberRoleManager+highest"></a>

### guildMemberRoleManager.highest ⇒

It sorts the cache by position, then returns the first item in the sorted collection

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The highest position in the cache.  
<a name="GuildMemberRoleManager+cache"></a>

### guildMemberRoleManager.cache ⇒

It returns the cache, but only if the cache's id is the same as the guild id, or if the member has
the role

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The cache is being filtered to only return objects that have the same id as the guildId or
the member's roles.  
<a name="GuildMemberRoleManager+add"></a>

### guildMemberRoleManager.add(roles, reason) ⇒

It adds a role to a member

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The member object

| Param  | Description                       |
| ------ | --------------------------------- |
| roles  | The role(s) to add to the member. |
| reason | The reason for the action.        |

<a name="GuildMemberRoleManager+remove"></a>

### guildMemberRoleManager.remove(roles, reason) ⇒

It removes a role from a member

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The member object

| Param  | Description                            |
| ------ | -------------------------------------- |
| roles  | The role(s) to remove from the member. |
| reason | The reason for the role removal.       |

<a name="GuildMemberRoleManager+set"></a>

### guildMemberRoleManager.set(roles, reason) ⇒

It takes an array of role IDs and a reason, and then it returns a promise that resolves to the
result of the edit request.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The roles that the member has.

| Param  | Description                     |
| ------ | ------------------------------- |
| roles  | The roles to set.               |
| reason | The reason for the role change. |

<a name="GuildMemberRoleManager.transformRole"></a>

### GuildMemberRoleManager.transformRole([role]) ⇒

It takes a role object, array, or string and returns an array of role IDs

**Kind**: static method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The role is being returned.

| Param  | Description                                                                   |
| ------ | ----------------------------------------------------------------------------- |
| [role] | The role to check for. Can be a string, a role object, or an array of either. |

<a name="GuildMemberVerificationManager"></a>

## GuildMemberVerificationManager

**Kind**: global class

- [GuildMemberVerificationManager](#GuildMemberVerificationManager)
  - [new GuildMemberVerificationManager(guildId, client)](#new_GuildMemberVerificationManager_new)
  - _instance_
    - [.fetch([options])](#GuildMemberVerificationManager+fetch) ⇒
    - [.edit([options])](#GuildMemberVerificationManager+edit) ⇒
  - _static_
    - [.createFormFields([fields])](#GuildMemberVerificationManager.createFormFields) ⇒

<a name="new_GuildMemberVerificationManager_new"></a>

### new GuildMemberVerificationManager(guildId, client)

`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
assigns them to the `guildId` and `client` properties of the class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildMemberVerificationManager+fetch"></a>

### guildMemberVerificationManager.fetch([options]) ⇒

`fetch` fetches the guild's member verification settings

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: A new GuildMemberVerification object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberVerificationManager+edit"></a>

### guildMemberVerificationManager.edit([options]) ⇒

It edits the verification form

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: A new GuildMemberVerification object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildMemberVerificationManager.createFormFields"></a>

### GuildMemberVerificationManager.createFormFields([fields]) ⇒

It takes an object with any of the following keys: `fieldType`, `field_type`, `type`, `label`,
`required`, `values`, `choices` and returns an object with the following keys: `field_type`,
`label`, `required`, `values`, `choices`

**Kind**: static method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: An object with the following properties:
field_type: The type of field.
label: The label of the field.
required: Whether or not the field is required.
values: The values of the field.
choices: The choices of the field.

| Param    | Description                                        |
| -------- | -------------------------------------------------- |
| [fields] | The fields object that is passed in from the form. |

<a name="GuildPruneManager"></a>

## GuildPruneManager

**Kind**: global class

- [GuildPruneManager](#GuildPruneManager)
  - [new GuildPruneManager(guildid, client)](#new_GuildPruneManager_new)
  - _instance_
    - [.prune([options])](#GuildPruneManager+prune) ⇒
    - [.fetchCount([options])](#GuildPruneManager+fetchCount) ⇒
  - _static_
    - [.transformRoles([roles])](#GuildPruneManager.transformRoles) ⇒
    - [.transformOptions([o])](#GuildPruneManager.transformOptions) ⇒

<a name="new_GuildPruneManager_new"></a>

### new GuildPruneManager(guildid, client)

`constructor(guildid, client)` is a function that takes two arguments, `guildid` and `client`, and
sets the `guildid` property of the class to the `guildid` argument, and the `client` property of the
class to the `client` argument

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildid | The ID of the guild you want to get the settings for. |
| client  | The client object                                     |

<a name="GuildPruneManager+prune"></a>

### guildPruneManager.prune([options]) ⇒

It prunes members from a guild

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The number of members that were pruned.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| [options] | An object containing the following parameters: |

<a name="GuildPruneManager+fetchCount"></a>

### guildPruneManager.fetchCount([options]) ⇒

It fetches the prune count of a guild

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The number of members that would be pruned.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| [options] | An object containing the following parameters: |

<a name="GuildPruneManager.transformRoles"></a>

### GuildPruneManager.transformRoles([roles]) ⇒

It takes an array of role objects or strings and returns an array of role IDs

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: An array of strings

| Param   | Description                                                                                                     |
| ------- | --------------------------------------------------------------------------------------------------------------- |
| [roles] | The roles to check against. This can be a single role, an array of roles, or an object with a `roles` property. |

<a name="GuildPruneManager.transformOptions"></a>

### GuildPruneManager.transformOptions([o]) ⇒

It takes an object with the keys `days`, `count`, and `roles`, and returns an object with the keys
`days`, `complete_prune_count`, and `include_roles`

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: The transformed options for the prune command.

| Param | Description         |
| ----- | ------------------- |
| [o]   | The options object. |

<a name="GuildRoleManager"></a>

## GuildRoleManager

**Kind**: global class

- [GuildRoleManager](#GuildRoleManager)
  - [new GuildRoleManager(guildId, client)](#new_GuildRoleManager_new)
  - [.highest](#GuildRoleManager+highest) ⇒
  - [.everyone](#GuildRoleManager+everyone) ⇒
  - [.cache](#GuildRoleManager+cache) ⇒

<a name="new_GuildRoleManager_new"></a>

### new GuildRoleManager(guildId, client)

`constructor` is a function that runs when a new instance of the class is created

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildRoleManager+highest"></a>

### guildRoleManager.highest ⇒

It sorts the roles in the cache by their position, and then returns the first one

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The highest role in the guild.  
<a name="GuildRoleManager+everyone"></a>

### guildRoleManager.everyone ⇒

It returns the cached data for the guild

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cache is being returned.  
<a name="GuildRoleManager+cache"></a>

### guildRoleManager.cache ⇒

It returns the cache, but only the cache that has the same guild ID as the current guild

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cache of the super class, but filtered to only include objects that have a guild_id or
guildId property that matches the guildId of the current class.

<a name="GuildScheduledEventManager"></a>

## GuildScheduledEventManager

**Kind**: global class

- [GuildScheduledEventManager](#GuildScheduledEventManager)
  - [new GuildScheduledEventManager(guildId, client)](#new_GuildScheduledEventManager_new)
  - [.cache](#GuildScheduledEventManager+cache) ⇒

<a name="new_GuildScheduledEventManager_new"></a>

### new GuildScheduledEventManager(guildId, client)

It creates a new instance of the GuildScheduledEventUsersManager class.

| Param   | Description                                       |
| ------- | ------------------------------------------------- |
| guildId | The ID of the guild the event is in               |
| client  | The client that the manager is being created for. |

<a name="GuildScheduledEventManager+cache"></a>

### guildScheduledEventManager.cache ⇒

It returns the cache, but only the cache that has the same guildId as the current guild

**Kind**: instance property of [<code>GuildScheduledEventManager</code>](#GuildScheduledEventManager)  
**Returns**: The cache is being filtered by the guildId.

<a name="GuildScheduledEventUsersManager"></a>

## GuildScheduledEventUsersManager

**Kind**: global class

- [GuildScheduledEventUsersManager](#GuildScheduledEventUsersManager)
  - [new GuildScheduledEventUsersManager(event, guildId, client)](#new_GuildScheduledEventUsersManager_new)
  - _instance_
    - [.resolve(scheduledEventUser, event)](#GuildScheduledEventUsersManager+resolve) ⇒
    - [.fetch([event], [options])](#GuildScheduledEventUsersManager+fetch) ⇒
  - _static_
    - [.transformQuery([query])](#GuildScheduledEventUsersManager.transformQuery) ⇒

<a name="new_GuildScheduledEventUsersManager_new"></a>

### new GuildScheduledEventUsersManager(event, guildId, client)

It's a constructor for the class

| Param   | Description                                        |
| ------- | -------------------------------------------------- |
| event   | The event that was triggered.                      |
| guildId | The ID of the guild the event is being emitted in. |
| client  | The client object                                  |

<a name="GuildScheduledEventUsersManager+resolve"></a>

### guildScheduledEventUsersManager.resolve(scheduledEventUser, event) ⇒

If the scheduledEventUser is a string, it's a user ID, so we return a partial
GuildScheduledEventUser object with the user ID and member ID. If it's an object, we return a full
GuildScheduledEventUser object

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: A new GuildScheduledEventUser

| Param              | Description                                     |
| ------------------ | ----------------------------------------------- |
| scheduledEventUser | The scheduled event user object.                |
| event              | The event to get the scheduled event user from. |

<a name="GuildScheduledEventUsersManager+fetch"></a>

### guildScheduledEventUsersManager.fetch([event], [options]) ⇒

It fetches the users of a scheduled event

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: A RaidenCol of GuildScheduledEventUser objects

| Param     | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| [event]   | The event to fetch the users for. Can be a string or a GuildScheduledEvent object. |
| [options] | An object with the following properties:                                           |

<a name="GuildScheduledEventUsersManager.transformQuery"></a>

### GuildScheduledEventUsersManager.transformQuery([query]) ⇒

It takes a query object and returns a new query object with the same properties, but with some of
them transformed

**Kind**: static method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: An object with the following properties:
limit: The value of the query.limit property, or 100 if query.limit is undefined.
with_member: The value of the query.withMember property, or undefined if query.withMember is
undefined.
before: The value of the query.before property, or undefined if query.before is undefined.
after

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| [query] | The query object that was passed to the route. |

<a name="GuildStageInstanceManger"></a>

## GuildStageInstanceManger

**Kind**: global class

- [GuildStageInstanceManger](#GuildStageInstanceManger)
  - [new GuildStageInstanceManger(guildId, client)](#new_GuildStageInstanceManger_new)
  - [.cache](#GuildStageInstanceManger+cache) ⇒

<a name="new_GuildStageInstanceManger_new"></a>

### new GuildStageInstanceManger(guildId, client)

`constructor` is a function that runs when a new instance of the class is created

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildStageInstanceManger+cache"></a>

### guildStageInstanceManger.cache ⇒

`return super.cache.filter((o) => o.guildId === this.guildId)`

The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildStageInstanceManger</code>](#GuildStageInstanceManger)  
**Returns**: The cache property is being returned.

<a name="GuildStickerManager"></a>

## GuildStickerManager

**Kind**: global class

- [GuildStickerManager](#GuildStickerManager)
  - [new GuildStickerManager(guildId, client)](#new_GuildStickerManager_new)
  - [.cache](#GuildStickerManager+cache) ⇒

<a name="new_GuildStickerManager_new"></a>

### new GuildStickerManager(guildId, client)

`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
assigns them to the `guildId` and `client` properties of the class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildStickerManager+cache"></a>

### guildStickerManager.cache ⇒

`return super.cache.filter((o) => o.guildId === this.guildId)`

The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildStickerManager</code>](#GuildStickerManager)  
**Returns**: The cache property is being returned.

<a name="GuildTemplateManager"></a>

## GuildTemplateManager

**Kind**: global class

- [GuildTemplateManager](#GuildTemplateManager)
  - [new GuildTemplateManager(guildId, client)](#new_GuildTemplateManager_new)
  - _instance_
    - [.cache](#GuildTemplateManager+cache) ⇒
    - [.\_add(templates, [options])](#GuildTemplateManager+_add) ⇒
    - [.fetch([options])](#GuildTemplateManager+fetch) ⇒
    - [.create([options])](#GuildTemplateManager+create) ⇒
    - [.edit(code, [options])](#GuildTemplateManager+edit) ⇒
    - [.sync(code)](#GuildTemplateManager+sync) ⇒
    - [.delete(code)](#GuildTemplateManager+delete) ⇒
  - _static_
    - [.transformPayload([o])](#GuildTemplateManager.transformPayload) ⇒

<a name="new_GuildTemplateManager_new"></a>

### new GuildTemplateManager(guildId, client)

`constructor(guildId, client)` is a function that takes two parameters, `guildId` and `client`, and
sets the `guildId` property of the class to the `guildId` parameter, and the `client` property of
the class to the `client` parameter

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildTemplateManager+cache"></a>

### guildTemplateManager.cache ⇒

`return Collection;`

**Kind**: instance property of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The cache property is being returned.  
<a name="GuildTemplateManager+_add"></a>

### guildTemplateManager.\_add(templates, [options]) ⇒

It adds a template to the cache

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate object.

| Param     | Description                              |
| --------- | ---------------------------------------- |
| templates | The template code or template object.    |
| [options] | An object with the following properties: |

<a name="GuildTemplateManager+fetch"></a>

### guildTemplateManager.fetch([options]) ⇒

It fetches all the templates from the API and returns a new cache of them

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the cache constructor.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildTemplateManager+create"></a>

### guildTemplateManager.create([options]) ⇒

`create` creates a new guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate instance.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="GuildTemplateManager+edit"></a>

### guildTemplateManager.edit(code, [options]) ⇒

It edits a guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new GuildTemplate instance.

| Param     | Description                                |
| --------- | ------------------------------------------ |
| code      | The code of the template you want to edit. |
| [options] | Object                                     |

<a name="GuildTemplateManager+sync"></a>

### guildTemplateManager.sync(code) ⇒

It syncs the template with the Discord API

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the GuildTemplate class.

| Param | Description                                |
| ----- | ------------------------------------------ |
| code  | The code of the template you want to sync. |

<a name="GuildTemplateManager+delete"></a>

### guildTemplateManager.delete(code) ⇒

It deletes a guild template

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: A new instance of the GuildTemplate class.

| Param | Description                                  |
| ----- | -------------------------------------------- |
| code  | The code of the template you want to delete. |

<a name="GuildTemplateManager.transformPayload"></a>

### GuildTemplateManager.transformPayload([o]) ⇒

It takes an object and returns a new object with only the properties that are defined

**Kind**: static method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The transformPayload function is being returned.

| Param | Description              |
| ----- | ------------------------ |
| [o]   | The object to transform. |

<a name="GuildVanityManager"></a>

## GuildVanityManager

**Kind**: global class

- [GuildVanityManager](#GuildVanityManager)
  - [new GuildVanityManager(guildId, client)](#new_GuildVanityManager_new)
  - [.fetch([guild])](#GuildVanityManager+fetch) ⇒
  - [.edit(code, [guild])](#GuildVanityManager+edit) ⇒

<a name="new_GuildVanityManager_new"></a>

### new GuildVanityManager(guildId, client)

The constructor function is a function that is called when an object is created from a class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run from.        |

<a name="GuildVanityManager+fetch"></a>

### guildVanityManager.fetch([guild]) ⇒

It fetches the vanity url of a guild

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: A new instance of the GuildVanity class.

| Param   | Description                                               |
| ------- | --------------------------------------------------------- |
| [guild] | The guild ID or guild object to fetch the vanity URL for. |

<a name="GuildVanityManager+edit"></a>

### guildVanityManager.edit(code, [guild]) ⇒

It edits the guild's vanity url

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: A new GuildVanity object.

| Param   | Description                                              |
| ------- | -------------------------------------------------------- |
| code    | The vanity code you want to set.                         |
| [guild] | The guild ID or guild object to edit the vanity URL for. |

<a name="GuildVoiceStateManager"></a>

## GuildVoiceStateManager

**Kind**: global class

- [GuildVoiceStateManager](#GuildVoiceStateManager)
  - [new GuildVoiceStateManager(guildId, client)](#new_GuildVoiceStateManager_new)
  - [.cache](#GuildVoiceStateManager+cache) ⇒
  - [.edit(user, [options])](#GuildVoiceStateManager+edit) ⇒

<a name="new_GuildVoiceStateManager_new"></a>

### new GuildVoiceStateManager(guildId, client)

It creates a new instance of the class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildVoiceStateManager+cache"></a>

### guildVoiceStateManager.cache ⇒

`return super.cache.filter((o) => o.guildId === this.guildId);`

The `super` keyword is used to access and call functions on an object's parent

**Kind**: instance property of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: The cache property is being returned.  
<a name="GuildVoiceStateManager+edit"></a>

### guildVoiceStateManager.edit(user, [options]) ⇒

It edits the voice state of a user in a guild

**Kind**: instance method of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: undefined

| Param     | Description                          |
| --------- | ------------------------------------ |
| user      | The user to edit the voice state of. |
| [options] | Object                               |

<a name="GuildWidgetManager"></a>

## GuildWidgetManager

**Kind**: global class

- [GuildWidgetManager](#GuildWidgetManager)
  - [new GuildWidgetManager(guildId, client)](#new_GuildWidgetManager_new)
  - _instance_
    - [.fetchSettings()](#GuildWidgetManager+fetchSettings) ⇒
    - [.fetch()](#GuildWidgetManager+fetch) ⇒
    - [.edit([options])](#GuildWidgetManager+edit) ⇒
  - _static_
    - [.transformOptions([o])](#GuildWidgetManager.transformOptions) ⇒

<a name="new_GuildWidgetManager_new"></a>

### new GuildWidgetManager(guildId, client)

`constructor` is a function that runs when a new instance of the class is created

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="GuildWidgetManager+fetchSettings"></a>

### guildWidgetManager.fetchSettings() ⇒

It fetches the guild widget settings and returns a new GuildWidgetSettings object.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new instance of GuildWidgetSettings  
<a name="GuildWidgetManager+fetch"></a>

### guildWidgetManager.fetch() ⇒

It fetches the guild widget from the API and returns a new GuildWidget object.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new instance of the GuildWidget class.  
<a name="GuildWidgetManager+edit"></a>

### guildWidgetManager.edit([options]) ⇒

It edits the widget settings of a guild

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: A new GuildWidgetSettings object.

| Param     | Description                     |
| --------- | ------------------------------- |
| [options] | The options to pass to the API. |

<a name="GuildWidgetManager.transformOptions"></a>

### GuildWidgetManager.transformOptions([o]) ⇒

It takes an object with the keys `enabled` and `channel` and returns an object with the keys
`enabled` and `channel_id`

**Kind**: static method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: The transformed options object.

| Param | Description         |
| ----- | ------------------- |
| [o]   | The options object. |

<a name="MessageManager"></a>

## MessageManager

**Kind**: global class

- [MessageManager](#MessageManager)
  - [new MessageManager(guildId, channelId, client)](#new_MessageManager_new)
  - _instance_
    - [.guild](#MessageManager+guild) ⇒
    - [.cache](#MessageManager+cache) ⇒
    - [.\_add(messages, [guildId], [channelId], [options])](#MessageManager+_add) ⇒
    - [.send([channel], [options])](#MessageManager+send) ⇒
    - [.bulkDelete([channel], [message], reason)](#MessageManager+bulkDelete) ⇒
    - [.delete(message, reason)](#MessageManager+delete) ⇒
    - [.edit(message, options)](#MessageManager+edit) ⇒
    - [.fetch(message, options)](#MessageManager+fetch) ⇒
    - [.\_fetchId(message, [cache], [force])](#MessageManager+_fetchId) ⇒
    - [.crosspost(channel, message)](#MessageManager+crosspost) ⇒
    - [.react(message, emoji)](#MessageManager+react) ⇒
    - [.pins()](#MessageManager+pins) ⇒
    - [.unpin(message, reason)](#MessageManager+unpin) ⇒
    - [.pin(message, reason)](#MessageManager+pin) ⇒
  - _static_
    - [.transformOptions([o])](#MessageManager.transformOptions) ⇒

<a name="new_MessageManager_new"></a>

### new MessageManager(guildId, channelId, client)

The constructor function is a function that is called when an object is created from a class.

| Param     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| guildId   | The ID of the guild you want to send the message to.           |
| channelId | The channel ID of the channel you want to send the message to. |
| client    | The client that the command is being run on.                   |

<a name="MessageManager+guild"></a>

### messageManager.guild ⇒

It returns the guild object if it exists, otherwise it returns null.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The guild object.  
<a name="MessageManager+cache"></a>

### messageManager.cache ⇒

It returns a collection of all the elements in the document that have the same tag name as the one
passed to the function.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The Collection class.  
<a name="MessageManager+_add"></a>

### messageManager.\_add(messages, [guildId], [channelId], [options]) ⇒

\_add(messages, guildId = this.guildId, channelId = this.channelId, options = {cache: true, force:
false})

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object

| Param       | Description                                      |
| ----------- | ------------------------------------------------ |
| messages    | The message object                               |
| [guildId]   | The guild ID of the message                      |
| [channelId] | The channel ID of the channel the message is in. |
| [options]   | cache = true, force = false                      |

<a name="MessageManager+send"></a>

### messageManager.send([channel], [options]) ⇒

It sends a message to a channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A message object.

| Param     | Description                         |
| --------- | ----------------------------------- |
| [channel] | The channel to send the message to. |
| [options] | The options for the message.        |

<a name="MessageManager+bulkDelete"></a>

### messageManager.bulkDelete([channel], [message], reason) ⇒

It deletes messages in bulk

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: An array of messages.

| Param     | Description                              |
| --------- | ---------------------------------------- |
| [channel] | The channel to delete the messages from. |
| [message] | The message to be deleted.               |
| reason    | The reason for the bulk delete.          |

<a name="MessageManager+delete"></a>

### messageManager.delete(message, reason) ⇒

It deletes a message from a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The deleted message.

| Param   | Description                  |
| ------- | ---------------------------- |
| message | The message to delete.       |
| reason  | The reason for the deletion. |

<a name="MessageManager+edit"></a>

### messageManager.edit(message, options) ⇒

It edits a message.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A message object.

| Param   | Description          |
| ------- | -------------------- |
| message | The message to edit. |
| options |                      |

<a name="MessageManager+fetch"></a>

### messageManager.fetch(message, options) ⇒

It fetches messages from a channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: An array of objects.

| Param   | Description                                                               |
| ------- | ------------------------------------------------------------------------- |
| message | The message to fetch. Can be a message object, a message ID, or a string. |
| options |                                                                           |

<a name="MessageManager+_fetchId"></a>

### messageManager.\_fetchId(message, [cache], [force]) ⇒

It fetches a message from the API and adds it to the cache

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Default            | Description                          |
| ------- | ------------------ | ------------------------------------ |
| message |                    | The message object or message ID     |
| [cache] | <code>true</code>  | Whether or not to cache the message. |
| [force] | <code>false</code> | true                                 |

<a name="MessageManager+crosspost"></a>

### messageManager.crosspost(channel, message) ⇒

It takes a message and a channel and crossposts the message to the channel

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Description                              |
| ------- | ---------------------------------------- |
| channel | The channel to crosspost the message to. |
| message | The message to crosspost.                |

<a name="MessageManager+react"></a>

### messageManager.react(message, emoji) ⇒

It takes a message and an emoji and adds the emoji to the message.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message object.

| Param   | Description              |
| ------- | ------------------------ |
| message | The message to react to. |
| emoji   | The emoji to react with. |

<a name="MessageManager+pins"></a>

### messageManager.pins() ⇒

It gets the pins from the channel and returns a cache of the pins

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: A new cache object.  
<a name="MessageManager+unpin"></a>

### messageManager.unpin(message, reason) ⇒

It deletes a message from the pinned messages list.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message that was unpinned.

| Param   | Description               |
| ------- | ------------------------- |
| message | The message to unpin.     |
| reason  | The reason for the unpin. |

<a name="MessageManager+pin"></a>

### messageManager.pin(message, reason) ⇒

This function pins a message to a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The message that was pinned.

| Param   | Description                         |
| ------- | ----------------------------------- |
| message | The message to pin.                 |
| reason  | The reason for pinning the message. |

<a name="MessageManager.transformOptions"></a>

### MessageManager.transformOptions([o]) ⇒

It takes an object with optional properties, and returns an object with the same optional
properties, but with the values transformed to a different type

**Kind**: static method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: an object with the properties limit, around, before, and after.

| Param | Description        |
| ----- | ------------------ |
| [o]   | The options object |

<a name="PermissionOverwriteManager"></a>

## PermissionOverwriteManager

**Kind**: global class

- [PermissionOverwriteManager](#PermissionOverwriteManager)
  - [new PermissionOverwriteManager(channelId, [overwrites], client)](#new_PermissionOverwriteManager_new)
  - _instance_
    - [.cache](#PermissionOverwriteManager+cache) ⇒
    - [.resolve(overwrites)](#PermissionOverwriteManager+resolve) ⇒
    - [.create(user, overwrites, [options])](#PermissionOverwriteManager+create) ⇒
    - [.set(overwrites, reason)](#PermissionOverwriteManager+set) ⇒
    - [.edit(userOrRole, [options], [overwriteOptions])](#PermissionOverwriteManager+edit) ⇒
    - [.delete(userOrRole, reason)](#PermissionOverwriteManager+delete) ⇒
  - _static_
    - [.editOverwrites(existing, overwrites, type)](#PermissionOverwriteManager.editOverwrites) ⇒
    - [.transformOverwrites(existing, [overwrites], type)](#PermissionOverwriteManager.transformOverwrites)

<a name="new_PermissionOverwriteManager_new"></a>

### new PermissionOverwriteManager(channelId, [overwrites], client)

It creates a new object with the properties of the overwrites object, and the channelId property.

| Param        | Description                                          |
| ------------ | ---------------------------------------------------- |
| channelId    | The ID of the channel to create the invite for.      |
| [overwrites] | An object containing the overwrites for the channel. |
| client       | The client that is creating the channel.             |

<a name="PermissionOverwriteManager+cache"></a>

### permissionOverwriteManager.cache ⇒

It returns a collection of all the overwrites in the channel, mapped to their resolved permission
overwrites

**Kind**: instance property of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: A collection of overwrites  
<a name="PermissionOverwriteManager+resolve"></a>

### permissionOverwriteManager.resolve(overwrites) ⇒

It takes an object, and returns a new PermissionOverwrite object

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: A new PermissionOverwrite object.

| Param      | Description                |
| ---------- | -------------------------- |
| overwrites | The overwrites to resolve. |

<a name="PermissionOverwriteManager+create"></a>

### permissionOverwriteManager.create(user, overwrites, [options]) ⇒

It creates a new permission overwrite for a user or role

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object

| Param      | Description                                        |
| ---------- | -------------------------------------------------- |
| user       | The user or role to add the overwrite to.          |
| overwrites | An object containing the permissions to overwrite. |
| [options]  | Object                                             |

<a name="PermissionOverwriteManager+set"></a>

### permissionOverwriteManager.set(overwrites, reason) ⇒

It takes an array of permission overwrites and sets them on the channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object

| Param      | Description                |
| ---------- | -------------------------- |
| overwrites | An array of overwrites.    |
| reason     | The reason for the change. |

<a name="PermissionOverwriteManager+edit"></a>

### permissionOverwriteManager.edit(userOrRole, [options], [overwriteOptions]) ⇒

It edits the permission overwrites of a channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object

| Param              | Description                                                           |
| ------------------ | --------------------------------------------------------------------- |
| userOrRole         | The user or role to edit the overwrite for.                           |
| [options]          | The options to overwrite the permission with.                         |
| [overwriteOptions] | This is an object that contains the reason and type of the overwrite. |

<a name="PermissionOverwriteManager+delete"></a>

### permissionOverwriteManager.delete(userOrRole, reason) ⇒

It deletes a permission overwrite for a user or role in a channel

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: The channel object

| Param      | Description                                              |
| ---------- | -------------------------------------------------------- |
| userOrRole | The user or role to delete the permission overwrite for. |
| reason     | The reason for the audit log entry.                      |

<a name="PermissionOverwriteManager.editOverwrites"></a>

### PermissionOverwriteManager.editOverwrites(existing, overwrites, type) ⇒

It takes an existing overwrite, overwrites it with the new overwrites, and returns the new overwrite

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: An object with the following properties:
allow: A string representation of the permissions that are allowed.
deny: A string representation of the permissions that are denied.
type: The type of overwrite.

| Param      | Description                                              |
| ---------- | -------------------------------------------------------- |
| existing   | The existing overwrite object.                           |
| overwrites | The overwrites to apply.                                 |
| type       | The type of overwrite. This can be a string or a number. |

<a name="PermissionOverwriteManager.transformOverwrites"></a>

### PermissionOverwriteManager.transformOverwrites(existing, [overwrites], type)

It takes an existing role, overwrites, and a type, and returns a new role with the overwrites
applied

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)

| Param        | Description                                                    |
| ------------ | -------------------------------------------------------------- |
| existing     | The existing permissions object.                               |
| [overwrites] | The overwrites object that is passed in from the user.         |
| type         | The type of the permission. This is either "role" or "member". |

<a name="PresenceManager"></a>

## PresenceManager

**Kind**: global class

- [PresenceManager](#PresenceManager)
  - [new PresenceManager(client)](#new_PresenceManager_new)
  - [.cache](#PresenceManager+cache) ⇒
  - [.\_add(presences, [options])](#PresenceManager+_add) ⇒

<a name="new_PresenceManager_new"></a>

### new PresenceManager(client)

A constructor function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="PresenceManager+cache"></a>

### presenceManager.cache ⇒

`cache` is a getter that returns the `Collection` class

**Kind**: instance property of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: The Collection class  
<a name="PresenceManager+_add"></a>

### presenceManager.\_add(presences, [options]) ⇒

It adds a presence to the cache

**Kind**: instance method of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: A presence object

| Param     | Description                                                                        |
| --------- | ---------------------------------------------------------------------------------- |
| presences | The presence(s) to add. Can be a string, a presence object, or an array of either. |
| [options] | cache = true, force = false                                                        |

<a name="ReactionManager"></a>

## ReactionManager

**Kind**: global class

- [ReactionManager](#ReactionManager)
  - [new ReactionManager(reactions, messageId, channelId, guildId, client)](#new_ReactionManager_new)
  - [.guild](#ReactionManager+guild) ⇒
  - [.cache](#ReactionManager+cache) ⇒
  - [.resolve(reaction)](#ReactionManager+resolve) ⇒
  - [.removeAll()](#ReactionManager+removeAll) ⇒

<a name="new_ReactionManager_new"></a>

### new ReactionManager(reactions, messageId, channelId, guildId, client)

It's a constructor for the MessageReactionManager class

| Param     | Description                                      |
| --------- | ------------------------------------------------ |
| reactions | The reactions of the message.                    |
| messageId | The ID of the message that the reactions are on. |
| channelId | The channel ID of the message                    |
| guildId   | The ID of the guild the message is in.           |
| client    | The client instance                              |

<a name="ReactionManager+guild"></a>

### reactionManager.guild ⇒

`return this.client.guilds._add(this.guildId) ?? null`

The `??` is a nullish coalescing operator. It's a fancy way of saying "if the left side is null or
undefined, return the right side"

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The guild object  
<a name="ReactionManager+cache"></a>

### reactionManager.cache ⇒

It returns the value of the `reactions` property

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The reactions property of the object.  
<a name="ReactionManager+resolve"></a>

### reactionManager.resolve(reaction) ⇒

It takes a reaction object and returns a MessageReaction object

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: A new MessageReaction object

| Param    | Description                                                                                         |
| -------- | --------------------------------------------------------------------------------------------------- |
| reaction | The reaction to resolve. This can be a string, a MessageReaction object, or a ReactionEmoji object. |

<a name="ReactionManager+removeAll"></a>

### reactionManager.removeAll() ⇒

It removes all reactions from a message

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: Nothing

<a name="ReactionUserManager"></a>

## ReactionUserManager

**Kind**: global class

- [ReactionUserManager](#ReactionUserManager)
  - [new ReactionUserManager(reaction, channelId, messageId, emoji, client)](#new_ReactionUserManager_new)
  - _instance_
    - [.cache](#ReactionUserManager+cache) ⇒
    - [.\_add(users, [options])](#ReactionUserManager+_add) ⇒
    - [.fetch(options)](#ReactionUserManager+fetch) ⇒
    - [.remove([user])](#ReactionUserManager+remove) ⇒
  - _static_
    - [.transformOptions([o])](#ReactionUserManager.transformOptions) ⇒

<a name="new_ReactionUserManager_new"></a>

### new ReactionUserManager(reaction, channelId, messageId, emoji, client)

It's a constructor for the Reaction class

| Param     | Description                                        |
| --------- | -------------------------------------------------- |
| reaction  | The reaction object                                |
| channelId | The channel ID of the message that was reacted to. |
| messageId | The ID of the message that was reacted to          |
| emoji     | The emoji used                                     |
| client    | The client that instantiated the event             |

<a name="ReactionUserManager+cache"></a>

### reactionUserManager.cache ⇒

`return Collection`

**Kind**: instance property of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The Collection class  
<a name="ReactionUserManager+_add"></a>

### reactionUserManager.\_add(users, [options]) ⇒

It adds a user to the cache

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: A new user object

| Param     | Description                              |
| --------- | ---------------------------------------- |
| users     | The user(s) to add to the cache.         |
| [options] | An object with the following properties: |

<a name="ReactionUserManager+fetch"></a>

### reactionUserManager.fetch(options) ⇒

It fetches the users that reacted to a message with a specific emoji

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: A new instance of the cache constructor.

| Param   | Description                                    |
| ------- | ---------------------------------------------- |
| options | An object containing the following properties: |

<a name="ReactionUserManager+remove"></a>

### reactionUserManager.remove([user]) ⇒

It removes a reaction from a message

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The reaction

| Param  | Description                           |
| ------ | ------------------------------------- |
| [user] | The user to remove the reaction from. |

<a name="ReactionUserManager.transformOptions"></a>

### ReactionUserManager.transformOptions([o]) ⇒

It takes an object with optional `after` and `limit` properties, and returns an object with `after`
and `limit` properties, where `after` is a string and `limit` is a number

**Kind**: static method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The transformed options object.

| Param | Description                                        |
| ----- | -------------------------------------------------- |
| [o]   | The options object that is passed to the function. |

<a name="RoleManager"></a>

## RoleManager

**Kind**: global class

- [RoleManager](#RoleManager)
  - [new RoleManager(client)](#new_RoleManager_new)
  - _instance_
    - [.cache](#RoleManager+cache) ⇒
    - [.\_add(roles, [guildId], [options])](#RoleManager+_add) ⇒
    - [.fetch(roles, options)](#RoleManager+fetch) ⇒
    - [.create([options])](#RoleManager+create) ⇒
    - [.edit(role, [options])](#RoleManager+edit) ⇒
    - [.delete(role, reason)](#RoleManager+delete) ⇒
    - [.clone([role])](#RoleManager+clone) ⇒
    - [.modifyPosition([options])](#RoleManager+modifyPosition) ⇒
  - _static_
    - [.transformPayload([o], [modifyPosition])](#RoleManager.transformPayload) ⇒

<a name="new_RoleManager_new"></a>

### new RoleManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="RoleManager+cache"></a>

### roleManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The Collection class.  
<a name="RoleManager+_add"></a>

### roleManager.\_add(roles, [guildId], [options]) ⇒

It adds a role to the cache

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A role object

| Param     | Description                                     |
| --------- | ----------------------------------------------- |
| roles     | The role object or role ID to add to the cache. |
| [guildId] | The guild ID to use for the role.               |
| [options] | cache = true, force = false                     |

<a name="RoleManager+fetch"></a>

### roleManager.fetch(roles, options) ⇒

It fetches all the roles in a guild and returns them

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The role object

| Param   | Description                                                                         |
| ------- | ----------------------------------------------------------------------------------- |
| roles   | The role(s) to fetch. Can be a role ID, a role object, or an array of role objects. |
| options | An object containing the following properties:                                      |

<a name="RoleManager+create"></a>

### roleManager.create([options]) ⇒

It creates a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new role object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="RoleManager+edit"></a>

### roleManager.edit(role, [options]) ⇒

It edits a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The role object

| Param     | Description                                          |
| --------- | ---------------------------------------------------- |
| role      | The role to edit. Can be a role object or a role ID. |
| [options] | Object                                               |

<a name="RoleManager+delete"></a>

### roleManager.delete(role, reason) ⇒

`delete` deletes a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The deleted role

| Param  | Description                                            |
| ------ | ------------------------------------------------------ |
| role   | The role to delete. Can be a role object or a role ID. |
| reason | The reason for the role deletion.                      |

<a name="RoleManager+clone"></a>

### roleManager.clone([role]) ⇒

`clone` clones a role

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new role object

| Param  | Description        |
| ------ | ------------------ |
| [role] | The role to clone. |

<a name="RoleManager+modifyPosition"></a>

### roleManager.modifyPosition([options]) ⇒

It takes an array of role objects, transforms them into a format that the API can understand, and
then sends them to the API

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A new cache object with the roles that were modified.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="RoleManager.transformPayload"></a>

### RoleManager.transformPayload([o], [modifyPosition]) ⇒

It takes an object, and returns an object with the same properties, but with some of them modified

**Kind**: static method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: A function that takes two parameters, o and modifyPosition.

| Param            | Default            | Description                                        |
| ---------------- | ------------------ | -------------------------------------------------- |
| [o]              |                    | The object to transform.                           |
| [modifyPosition] | <code>false</code> | Whether or not to modify the position of the role. |

<a name="RolePromptManager"></a>

## RolePromptManager

**Kind**: global class

- [RolePromptManager](#RolePromptManager)
  - [new RolePromptManager(guildId, client)](#new_RolePromptManager_new)
  - _instance_
    - [.cache](#RolePromptManager+cache) ⇒
    - [.\_add(prompts, [guildId], [options])](#RolePromptManager+_add) ⇒
    - [.fetch([options])](#RolePromptManager+fetch) ⇒
    - [.set([options])](#RolePromptManager+set) ⇒
  - _static_
    - [.transformPayload([payload])](#RolePromptManager.transformPayload) ⇒
    - [.transformRoles([roles])](#RolePromptManager.transformRoles)

<a name="new_RolePromptManager_new"></a>

### new RolePromptManager(guildId, client)

`constructor(guildId, client)` is a function that takes two arguments, `guildId` and `client`, and
assigns them to the `guildId` and `client` properties of the class.

| Param   | Description                                           |
| ------- | ----------------------------------------------------- |
| guildId | The ID of the guild you want to get the settings for. |
| client  | The client that the command is being run on.          |

<a name="RolePromptManager+cache"></a>

### rolePromptManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The Collection class  
<a name="RolePromptManager+_add"></a>

### rolePromptManager.\_add(prompts, [guildId], [options]) ⇒

It adds a role prompt to the cache

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new RolePrompts object

| Param     | Description                                                                                                                                                         |
| --------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| prompts   | This is the prompt you want to add. It can be a string or an object. If it's a string, it will be the prompt's ID. If it's an object, it will be the prompt's data. |
| [guildId] | The guild ID to use for the role prompt.                                                                                                                            |
| [options] | -                                                                                                                                                                   |

<a name="RolePromptManager+fetch"></a>

### rolePromptManager.fetch([options]) ⇒

It fetches all role prompts from the API and returns them in a cache

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new instance of the cache constructor.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="RolePromptManager+set"></a>

### rolePromptManager.set([options]) ⇒

It sets the role prompts for the guild

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: A new cache.constructor

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="RolePromptManager.transformPayload"></a>

### RolePromptManager.transformPayload([payload]) ⇒

It transforms the payload into a format that the API can understand.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The payload is being returned with the title, description, required, and roles.

| Param     | Description                                 |
| --------- | ------------------------------------------- |
| [payload] | The payload that is passed to the function. |

<a name="RolePromptManager.transformRoles"></a>

### RolePromptManager.transformRoles([roles])

It takes an object with the keys `emojiName`, `emojiId`, `name`, and `role` and returns an object
with the keys `emoji_name`, `emoji_id`, `name`, and `role_id`

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)

| Param   | Description       |
| ------- | ----------------- |
| [roles] | The roles object. |

<a name="ScheduledEventManager"></a>

## ScheduledEventManager

**Kind**: global class

- [ScheduledEventManager](#ScheduledEventManager)
  - [new ScheduledEventManager(client)](#new_ScheduledEventManager_new)
  - _instance_
    - [.cache](#ScheduledEventManager+cache) ⇒
    - [.\_add(events, [guildId], [options])](#ScheduledEventManager+_add) ⇒
    - [.create([options])](#ScheduledEventManager+create) ⇒
    - [.edit(event, [options])](#ScheduledEventManager+edit) ⇒
    - [.delete(event)](#ScheduledEventManager+delete) ⇒
    - [.fetch(events, options)](#ScheduledEventManager+fetch) ⇒
    - [.\_fetchId(events, [cache], [force])](#ScheduledEventManager+_fetchId) ⇒
  - _static_
    - [.transformOptions([o], [create])](#ScheduledEventManager.transformOptions) ⇒

<a name="new_ScheduledEventManager_new"></a>

### new ScheduledEventManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="ScheduledEventManager+cache"></a>

### scheduledEventManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The Collection class  
<a name="ScheduledEventManager+_add"></a>

### scheduledEventManager.\_add(events, [guildId], [options]) ⇒

It adds a scheduled event to the cache.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new instance of the GuildScheduledEvent class.

| Param     | Description                                                        |
| --------- | ------------------------------------------------------------------ |
| events    | The event to add. Can be a string or a GuildScheduledEvent object. |
| [guildId] | The ID of the guild the event is in.                               |
| [options] | cache = true, force = false                                        |

<a name="ScheduledEventManager+create"></a>

### scheduledEventManager.create([options]) ⇒

It creates a scheduled event

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new ScheduledEvent instance.

| Param     | Description                                    |
| --------- | ---------------------------------------------- |
| [options] | An object containing the following parameters: |

<a name="ScheduledEventManager+edit"></a>

### scheduledEventManager.edit(event, [options]) ⇒

It edits a scheduled event

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The event object

| Param     | Description                                                                     |
| --------- | ------------------------------------------------------------------------------- |
| event     | The event to edit. This can be a ScheduledEvent object, or the ID of the event. |
| [options] | The options to pass to the event.                                               |

<a name="ScheduledEventManager+delete"></a>

### scheduledEventManager.delete(event) ⇒

It deletes an event from the database

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The deleted event

| Param | Description                                                 |
| ----- | ----------------------------------------------------------- |
| event | The event to delete. Can be an event object or an event ID. |

<a name="ScheduledEventManager+fetch"></a>

### scheduledEventManager.fetch(events, options) ⇒

It fetches scheduled events from the API and returns a collection of them

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: A new cache constructor with the events mapped to the id and the \_add function.

| Param   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| events  | The event ID, or an object containing the following parameters: |
| options | The options object.                                             |

<a name="ScheduledEventManager+_fetchId"></a>

### scheduledEventManager.\_fetchId(events, [cache], [force]) ⇒

It fetches an event by ID, and returns it

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The event object

| Param   | Default            | Description                                                |
| ------- | ------------------ | ---------------------------------------------------------- |
| events  |                    | The event to fetch. Can be an event ID or an event object. |
| [cache] | <code>true</code>  | Whether or not to cache the event.                         |
| [force] | <code>false</code> | If true, it will force the cache to be updated.            |

<a name="ScheduledEventManager.transformOptions"></a>

### ScheduledEventManager.transformOptions([o], [create]) ⇒

It takes an object with the properties of the class, and returns an object with the properties of
the API

**Kind**: static method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The return value is a promise that resolves to a GuildScheduledEvent object.

| Param    | Default            | Description                              |
| -------- | ------------------ | ---------------------------------------- |
| [o]      |                    | The options object.                      |
| [create] | <code>false</code> | Whether or not this is a create request. |

<a name="StageInstanceManager"></a>

## StageInstanceManager

**Kind**: global class

- [StageInstanceManager](#StageInstanceManager)
  - [new StageInstanceManager(client)](#new_StageInstanceManager_new)
  - _instance_
    - [.cache](#StageInstanceManager+cache) ⇒
    - [.\_add(stageInstances, [guildId], [options])](#StageInstanceManager+_add) ⇒
    - [.fetch(channel, [options])](#StageInstanceManager+fetch) ⇒
    - [.create([options])](#StageInstanceManager+create) ⇒
    - [.edit(channel, [options])](#StageInstanceManager+edit) ⇒
    - [.delete(channel, reason)](#StageInstanceManager+delete) ⇒
  - _static_
    - [.transformPayload([payload])](#StageInstanceManager.transformPayload) ⇒

<a name="new_StageInstanceManager_new"></a>

### new StageInstanceManager(client)

A constructor function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="StageInstanceManager+cache"></a>

### stageInstanceManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The Collection class.  
<a name="StageInstanceManager+_add"></a>

### stageInstanceManager.\_add(stageInstances, [guildId], [options]) ⇒

It adds a stage instance to the cache.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new StageInstance object

| Param          | Description                                                 |
| -------------- | ----------------------------------------------------------- |
| stageInstances | This is the stage instance object or the stage instance ID. |
| [guildId]      | The guild ID of the guild the stage instance is in.         |
| [options]      | cache = true, force = false                                 |

<a name="StageInstanceManager+fetch"></a>

### stageInstanceManager.fetch(channel, [options]) ⇒

It fetches a stage instance from the API and adds it to the cache

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The stage instance

| Param     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| channel   | The channel to fetch. Can be a channel ID or a channel object. |
| [options] | Object                                                         |

<a name="StageInstanceManager+create"></a>

### stageInstanceManager.create([options]) ⇒

It creates a new stage instance.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new StageInstance object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="StageInstanceManager+edit"></a>

### stageInstanceManager.edit(channel, [options]) ⇒

It edits a stage instance

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A stage instance object

| Param     | Description                     |
| --------- | ------------------------------- |
| channel   | The channel to edit.            |
| [options] | The options to pass to the API. |

<a name="StageInstanceManager+delete"></a>

### stageInstanceManager.delete(channel, reason) ⇒

It deletes a stage instance

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The deleted stage

| Param   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| channel | The channel to delete. Can be a channel object or a channel ID. |
| reason  | The reason for the deletion.                                    |

<a name="StageInstanceManager.transformPayload"></a>

### StageInstanceManager.transformPayload([payload]) ⇒

It takes a payload object and returns a new object with the same properties, but with the
`channel` property replaced with a `channel_id` property

**Kind**: static method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: A new object with the properties channel_id, topic, and privacy_level.

| Param     | Description                                        |
| --------- | -------------------------------------------------- |
| [payload] | The payload object that is passed to the function. |

<a name="StickerManager"></a>

## StickerManager

**Kind**: global class

- [StickerManager](#StickerManager)
  - [new StickerManager(client)](#new_StickerManager_new)
  - [.cache](#StickerManager+cache) ⇒
  - [.\_add(stickers, [guildId], [options])](#StickerManager+_add) ⇒
  - [.fetch(sticker, options)](#StickerManager+fetch) ⇒
  - [.\_fetchId(sticker, [cache], [force])](#StickerManager+_fetchId) ⇒
  - [.create([options])](#StickerManager+create) ⇒
  - [.edit(sticker, [options])](#StickerManager+edit) ⇒
  - [.delete(sticker, reason)](#StickerManager+delete) ⇒

<a name="new_StickerManager_new"></a>

### new StickerManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="StickerManager+cache"></a>

### stickerManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The Collection class  
<a name="StickerManager+_add"></a>

### stickerManager.\_add(stickers, [guildId], [options]) ⇒

It adds a sticker to the cache

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A sticker object

| Param     | Description                          |
| --------- | ------------------------------------ |
| stickers  | The sticker object or sticker ID.    |
| [guildId] | The guild ID to use for the sticker. |
| [options] | cache = true, force = false          |

<a name="StickerManager+fetch"></a>

### stickerManager.fetch(sticker, options) ⇒

It fetches all the stickers in a guild

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A new cache object with the sticker id and the sticker object

| Param   | Description                                                              |
| ------- | ------------------------------------------------------------------------ |
| sticker | The sticker to fetch. Can be a sticker ID, a sticker object, or nothing. |
| options | An object containing the following properties:                           |

<a name="StickerManager+_fetchId"></a>

### stickerManager.\_fetchId(sticker, [cache], [force]) ⇒

It fetches a sticker from the API and adds it to the cache

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The sticker object

| Param   | Default            | Description                                     |
| ------- | ------------------ | ----------------------------------------------- |
| sticker |                    | The sticker object or ID.                       |
| [cache] | <code>true</code>  | Whether or not to cache the sticker.            |
| [force] | <code>false</code> | If true, it will force the cache to be updated. |

<a name="StickerManager+create"></a>

### stickerManager.create([options]) ⇒

It creates a sticker.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A new sticker object

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="StickerManager+edit"></a>

### stickerManager.edit(sticker, [options]) ⇒

It edits a sticker.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: A sticker object

| Param     | Description                                                   |
| --------- | ------------------------------------------------------------- |
| sticker   | The sticker to edit. Can be a sticker object or a sticker ID. |
| [options] | Object                                                        |

<a name="StickerManager+delete"></a>

### stickerManager.delete(sticker, reason) ⇒

It deletes a sticker

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The deleted sticker

| Param   | Description                                                     |
| ------- | --------------------------------------------------------------- |
| sticker | The sticker to delete. Can be a sticker object or a sticker ID. |
| reason  | The reason for the deletion.                                    |

<a name="ThreadManager"></a>

## ThreadManager

**Kind**: global class

- [ThreadManager](#ThreadManager)
  - [new ThreadManager(channelId, guildId, client)](#new_ThreadManager_new)
  - [.cache](#ThreadManager+cache) ⇒

<a name="new_ThreadManager_new"></a>

### new ThreadManager(channelId, guildId, client)

`This function is a constructor for the class.`

| Param     | Description                                                    |
| --------- | -------------------------------------------------------------- |
| channelId | The channel ID of the channel you want to send the message to. |
| guildId   | The ID of the guild the channel is in.                         |
| client    | The client that the command is being run on.                   |

<a name="ThreadManager+cache"></a>

### threadManager.cache ⇒

It returns the cache, but only the cache items that have a parentId that matches the channelId

**Kind**: instance property of [<code>ThreadManager</code>](#ThreadManager)  
**Returns**: The cache property is being returned.

<a name="ThreadMemberManager"></a>

## ThreadMemberManager

**Kind**: global class

- [ThreadMemberManager](#ThreadMemberManager)
  - [new ThreadMemberManager(guildId, threadId, client)](#new_ThreadMemberManager_new)
  - [.cache](#ThreadMemberManager+cache) ⇒
  - [.\_add(members, [guildId], [threadId], [options])](#ThreadMemberManager+_add) ⇒
  - [.join()](#ThreadMemberManager+join) ⇒
  - [.fetch(user, options)](#ThreadMemberManager+fetch) ⇒
  - [.\_fetchId(user, [cache], [force])](#ThreadMemberManager+_fetchId) ⇒
  - [.add([user])](#ThreadMemberManager+add) ⇒
  - [.remove([user])](#ThreadMemberManager+remove) ⇒

<a name="new_ThreadMemberManager_new"></a>

### new ThreadMemberManager(guildId, threadId, client)

`constructor` is a function that runs when a new instance of the class is created

| Param    | Description                                  |
| -------- | -------------------------------------------- |
| guildId  | The ID of the guild the thread is in.        |
| threadId | The ID of the thread you want to get.        |
| client   | The client that the thread was created with. |

<a name="ThreadMemberManager+cache"></a>

### threadMemberManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The Collection class  
<a name="ThreadMemberManager+_add"></a>

### threadMemberManager.\_add(members, [guildId], [threadId], [options]) ⇒

It adds a member to the cache

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: A new ThreadMember object

| Param      | Description                                                                             |
| ---------- | --------------------------------------------------------------------------------------- |
| members    | The member(s) to add to the cache. This can be a single member, or an array of members. |
| [guildId]  | The guild ID of the guild the thread is in.                                             |
| [threadId] | The ID of the thread                                                                    |
| [options]  | cache = true, force = false                                                             |

<a name="ThreadMemberManager+join"></a>

### threadMemberManager.join() ⇒

It joins a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The user object  
<a name="ThreadMemberManager+fetch"></a>

### threadMemberManager.fetch(user, options) ⇒

It fetches the members of a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: A new cache constructor

| Param   | Description                                                        |
| ------- | ------------------------------------------------------------------ |
| user    | The user to fetch. Can be a user object, a user ID, or a user tag. |
| options | An object containing the following properties:                     |

<a name="ThreadMemberManager+_fetchId"></a>

### threadMemberManager.\_fetchId(user, [cache], [force]) ⇒

It fetches a user's ID from the API and returns it

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The member object

| Param   | Default           | Description                                                             |
| ------- | ----------------- | ----------------------------------------------------------------------- |
| user    |                   | The user to fetch. Can be a user object, a user ID, or a member object. |
| [cache] | <code>true</code> | Whether or not to cache the member.                                     |
| [force] | <code>true</code> | If true, it will force the cache to be updated.                         |

<a name="ThreadMemberManager+add"></a>

### threadMemberManager.add([user]) ⇒

It adds a user to a thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The user object

| Param  | Description                    |
| ------ | ------------------------------ |
| [user] | The user to add to the thread. |

<a name="ThreadMemberManager+remove"></a>

### threadMemberManager.remove([user]) ⇒

It removes a user from the thread

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The deleted member

| Param  | Description                         |
| ------ | ----------------------------------- |
| [user] | The user to remove from the thread. |

<a name="UserManager"></a>

## UserManager

**Kind**: global class

- [UserManager](#UserManager)
  - [new UserManager(client)](#new_UserManager_new)
  - [.cache](#UserManager+cache) ⇒
  - [.\_add(users, [options])](#UserManager+_add) ⇒
  - [.fetch(user, [options])](#UserManager+fetch) ⇒
  - [.edit([options])](#UserManager+edit) ⇒
  - [.createDM(user)](#UserManager+createDM) ⇒
  - [.send(user, [options])](#UserManager+send) ⇒

<a name="new_UserManager_new"></a>

### new UserManager(client)

It's a constructor function that takes a client parameter and passes it to the super function.

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="UserManager+cache"></a>

### userManager.cache ⇒

The function returns a collection of objects that are stored in the cache.

**Kind**: instance property of [<code>UserManager</code>](#UserManager)  
**Returns**: The Collection class.  
<a name="UserManager+_add"></a>

### userManager.\_add(users, [options]) ⇒

It adds a user to the cache

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: A user object.

| Param     | Description                                     |
| --------- | ----------------------------------------------- |
| users     | The user object or user ID to add to the cache. |
| [options] | cache = true, force = false                     |

<a name="UserManager+fetch"></a>

### userManager.fetch(user, [options]) ⇒

It fetches a user from the API and adds it to the cache

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The user object.

| Param     | Description                 |
| --------- | --------------------------- |
| user      | The user object or user ID. |
| [options] | cache = true, force = false |

<a name="UserManager+edit"></a>

### userManager.edit([options]) ⇒

This function edits the user's profile.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The user object.

| Param     | Description                               |
| --------- | ----------------------------------------- |
| [options] | The options to pass to the edit function. |

<a name="UserManager+createDM"></a>

### userManager.createDM(user) ⇒

It creates a DM channel with the user you specify

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The channel object.

| Param | Description                   |
| ----- | ----------------------------- |
| user  | The user to create a DM with. |

<a name="UserManager+send"></a>

### userManager.send(user, [options]) ⇒

It creates a message payload, creates a DM channel, and sends the message payload to the DM
channel.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: The message that was sent.

| Param     | Description                      |
| --------- | -------------------------------- |
| user      | The user to send the message to. |
| [options] | Object                           |

<a name="VoiceStateManager"></a>

## VoiceStateManager

**Kind**: global class

- [VoiceStateManager](#VoiceStateManager)
  - [new VoiceStateManager(client)](#new_VoiceStateManager_new)
  - [.cache](#VoiceStateManager+cache) ⇒
  - [.\_add(voiceStates, [guildId], [options])](#VoiceStateManager+_add) ⇒

<a name="new_VoiceStateManager_new"></a>

### new VoiceStateManager(client)

It's a constructor function that takes a client parameter and passes it to the super function

| Param  | Description        |
| ------ | ------------------ |
| client | The client object. |

<a name="VoiceStateManager+cache"></a>

### voiceStateManager.cache ⇒

It returns the Collection object.

**Kind**: instance property of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: The Collection class  
<a name="VoiceStateManager+_add"></a>

### voiceStateManager.\_add(voiceStates, [guildId], [options]) ⇒

It adds a new voice state to the cache.

**Kind**: instance method of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: A new VoiceState object

| Param       | Description                                 |
| ----------- | ------------------------------------------- |
| voiceStates | The voice state object to add to the cache. |
| [guildId]   | The guild ID to use for the voice state.    |
| [options]   | An object with the following properties:    |

<a name="WelcomeScreenManager"></a>

## WelcomeScreenManager

**Kind**: global class

- [WelcomeScreenManager](#WelcomeScreenManager)
  - [new WelcomeScreenManager(guildId, client)](#new_WelcomeScreenManager_new)
  - _instance_
    - [.fetch()](#WelcomeScreenManager+fetch) ⇒
    - [.edit([options])](#WelcomeScreenManager+edit) ⇒
  - _static_
    - [.transformChannels([channels])](#WelcomeScreenManager.transformChannels) ⇒
    - [.transformOptions([o])](#WelcomeScreenManager.transformOptions) ⇒

<a name="new_WelcomeScreenManager_new"></a>

### new WelcomeScreenManager(guildId, client)

This function is a constructor for the class Guild. It takes in a guildId and a client, and sets
the guildId to the guildId passed in, and sets the client to the client passed in.

| Param   | Description                                              |
| ------- | -------------------------------------------------------- |
| guildId | The ID of the guild you want to get the member count of. |
| client  | The client that the command is being run from.           |

<a name="WelcomeScreenManager+fetch"></a>

### welcomeScreenManager.fetch() ⇒

It fetches the welcome screen of a guild

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: A new instance of the WelcomeScreen class.  
<a name="WelcomeScreenManager+edit"></a>

### welcomeScreenManager.edit([options]) ⇒

It edits the welcome screen of a guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: A new WelcomeScreen object.

| Param     | Description |
| --------- | ----------- |
| [options] | Object      |

<a name="WelcomeScreenManager.transformChannels"></a>

### WelcomeScreenManager.transformChannels([channels]) ⇒

It takes an object with a property called `id` that can be either a string or an object with a
property called `id` that is a string

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: An object with the following properties:

- channel_id
- description
- emoji_id
- emoji_name

| Param      | Description                                    |
| ---------- | ---------------------------------------------- |
| [channels] | The channel object that you want to transform. |

<a name="WelcomeScreenManager.transformOptions"></a>

### WelcomeScreenManager.transformOptions([o]) ⇒

It takes an object with a property called "channels" which is an array of objects, and returns an
object with a property called "welcome_channels" which is an array of objects.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: an object with the properties enabled, welcome_channels, and description.

| Param | Description                   |
| ----- | ----------------------------- |
| [o]   | The object that is passed in. |
