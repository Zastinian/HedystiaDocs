---
id: managers
title: Managers
description: Managers Section
sidebar_position: 4
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="ActionsManager"></a>

## ActionsManager

It's a class that handles all the events that the client receives from the Discord API.

**Kind**: global class

- [ActionsManager](#ActionsManager)
  - [new ActionsManager(message, client)](#new_ActionsManager_new)
  - [.\_patch(message)](#ActionsManager+_patch) ⇒ <code>Object</code>

<a name="new_ActionsManager_new"></a>

### new ActionsManager(message, client)

It defines a property called client, and sets it to the client variable

| Param   | Type                | Description                               |
| ------- | ------------------- | ----------------------------------------- |
| message | <code>Object</code> | The message object that was sent.         |
| client  | <code>Client</code> | The client that instantiated the message. |

<a name="ActionsManager+_patch"></a>

### actionsManager.\_patch(message) ⇒ <code>Object</code>

Parses and handles different types of Discord gateway messages.

**Kind**: instance method of [<code>ActionsManager</code>](#ActionsManager)  
**Returns**: <code>Object</code> - - An instance of the corresponding message class.

| Param   | Type                | Description                                   |
| ------- | ------------------- | --------------------------------------------- |
| message | <code>Object</code> | The message object received from the gateway. |

<a name="ApplicationCommandManager"></a>

## ApplicationCommandManager ⇐ <code>Base</code>

Represents a manager for application commands.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ApplicationCommandManager](#ApplicationCommandManager) ⇐ <code>Base</code>
  - [new ApplicationCommandManager(client)](#new_ApplicationCommandManager_new)
  - _instance_
    - [.permissions](#ApplicationCommandManager+permissions) ⇒ <code>ApplicationCommandPermissionManager</code>
    - [.cache](#ApplicationCommandManager+cache) ⇒
    - [.\_add(commands, [guild], [options])](#ApplicationCommandManager+_add) ⇒ <code>ApplicationCommand</code>
    - [.create([options], [guild])](#ApplicationCommandManager+create) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
    - [.set([options], [guild])](#ApplicationCommandManager+set) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.fetch(command, options)](#ApplicationCommandManager+fetch) ⇒ <code>Promise</code>
    - [.delete(command, [guild])](#ApplicationCommandManager+delete) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
    - [.edit(command, [options], [guild])](#ApplicationCommandManager+edit) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>
    - [.\_fetchId(command, [cache], [force], [guild])](#ApplicationCommandManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
  - _static_
    - [.transformOptions(options)](#ApplicationCommandManager.transformOptions) ⇒ <code>object</code>
    - [.transformPayload(payload)](#ApplicationCommandManager.transformPayload) ⇒ <code>Object</code>

<a name="new_ApplicationCommandManager_new"></a>

### new ApplicationCommandManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ApplicationCommandManager+permissions"></a>

### applicationCommandManager.permissions ⇒ <code>ApplicationCommandPermissionManager</code>

Returns the ApplicationCommandPermissionManager for managing permissions of application commands in a guild.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>ApplicationCommandPermissionManager</code> - The ApplicationCommandPermissionManager instance.  
<a name="ApplicationCommandManager+cache"></a>

### applicationCommandManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: The Collection object representing the cache.  
<a name="ApplicationCommandManager+_add"></a>

### applicationCommandManager.\_add(commands, [guild], [options]) ⇒ <code>ApplicationCommand</code>

Adds a command to the command cache.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>ApplicationCommand</code> - The added command.

| Param           | Type                                                   | Default                                  | Description                                                                 |
| --------------- | ------------------------------------------------------ | ---------------------------------------- | --------------------------------------------------------------------------- |
| commands        | <code>string</code> \| <code>ApplicationCommand</code> |                                          | The command or command ID to add.                                           |
| [guild]         | <code>string</code>                                    | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the command to.                                  |
| [options]       | <code>object</code>                                    | <code>{cache: true, force: false}</code> | Additional options for adding the command.                                  |
| [options.cache] | <code>boolean</code>                                   | <code>true</code>                        | Whether to cache the command.                                               |
| [options.force] | <code>boolean</code>                                   | <code>false</code>                       | Whether to force adding the command even if it already exists in the cache. |

<a name="ApplicationCommandManager+create"></a>

### applicationCommandManager.create([options], [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>

Creates a new application command.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - A promise that resolves with the created application command.  
**Throws**:

- <code>Error</code> If the command creation fails.

| Param     | Type                                      | Default                               | Description                                                       |
| --------- | ----------------------------------------- | ------------------------------------- | ----------------------------------------------------------------- |
| [options] | <code>Object</code>                       |                                       | The options for the command.                                      |
| [guild]   | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object where the command should be created. |

<a name="ApplicationCommandManager+set"></a>

### applicationCommandManager.set([options], [guild]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Sets the application commands for the specified guild or globally.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves to a new instance of the cache with the updated commands.

| Param     | Type                                      | Default                               | Description                                           |
| --------- | ----------------------------------------- | ------------------------------------- | ----------------------------------------------------- |
| [options] | <code>Array.&lt;Object&gt;</code>         | <code>[{}]</code>                     | An array of options for the application commands.     |
| [guild]   | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object to set the commands for. |

<a name="ApplicationCommandManager+fetch"></a>

### applicationCommandManager.fetch(command, options) ⇒ <code>Promise</code>

Fetches commands from the API based on the provided command and options.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched commands.

| Param                     | Type                                                   | Description                                                 |
| ------------------------- | ------------------------------------------------------ | ----------------------------------------------------------- |
| command                   | <code>string</code> \| <code>ApplicationCommand</code> | The command to fetch. Can be an ID, a string, or an object. |
| options                   | <code>object</code>                                    | The options for fetching the commands.                      |
| options.cache             | <code>boolean</code>                                   | Whether to use the cache for fetching the commands.         |
| options.force             | <code>boolean</code>                                   | Whether to force fetch the commands.                        |
| options.guild             | <code>string</code>                                    | The ID of the guild to fetch the commands from.             |
| options.withLocalizations | <code>boolean</code>                                   | Whether to include localizations in the fetched commands.   |

<a name="ApplicationCommandManager+delete"></a>

### applicationCommandManager.delete(command, [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>

Deletes an application command from the specified guild or the default guild.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - - The deleted ApplicationCommand object.  
**Throws**:

- <code>RangeError</code> - If no command ID is specified.

| Param   | Type                                                   | Default                               | Description                                              |
| ------- | ------------------------------------------------------ | ------------------------------------- | -------------------------------------------------------- |
| command | <code>string</code> \| <code>ApplicationCommand</code> |                                       | The ID or the ApplicationCommand object to delete.       |
| [guild] | <code>string</code> \| <code>Guild</code>              | <code>&quot;this.guildId&quot;</code> | The ID or the Guild object where the command is located. |

<a name="ApplicationCommandManager+edit"></a>

### applicationCommandManager.edit(command, [options], [guild]) ⇒ <code>Promise.&lt;ApplicationCommand&gt;</code>

Edits an application command with the given command ID and options.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;ApplicationCommand&gt;</code> - A promise that resolves with the updated command object.  
**Throws**:

- <code>RangeError</code> If the application command is required but not provided.

| Param     | Type                                                   | Default                               | Description                                                    |
| --------- | ------------------------------------------------------ | ------------------------------------- | -------------------------------------------------------------- |
| command   | <code>string</code> \| <code>ApplicationCommand</code> |                                       | The command ID or the command object to edit.                  |
| [options] | <code>object</code>                                    |                                       | The options to update the command with.                        |
| [guild]   | <code>string</code> \| <code>Guild</code>              | <code>&quot;this.guildId&quot;</code> | The guild ID or the guild object where the command is located. |

<a name="ApplicationCommandManager+_fetchId"></a>

### applicationCommandManager.\_fetchId(command, [cache], [force], [guild]) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches the ID of a command from the API.

**Kind**: instance method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched command object.

| Param   | Type                                       | Default                               | Description                                                             |
| ------- | ------------------------------------------ | ------------------------------------- | ----------------------------------------------------------------------- |
| command | <code>string</code> \| <code>object</code> |                                       | The command ID or command object.                                       |
| [cache] | <code>boolean</code>                       | <code>true</code>                     | Whether to cache the fetched command.                                   |
| [force] | <code>boolean</code>                       | <code>false</code>                    | Whether to force fetch the command even if it is already cached.        |
| [guild] | <code>string</code> \| <code>object</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object. Defaults to the guild ID of the instance. |

<a name="ApplicationCommandManager.transformOptions"></a>

### ApplicationCommandManager.transformOptions(options) ⇒ <code>object</code>

Transforms the given options object into the appropriate JSON format based on its type.

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>object</code> - The transformed options object in JSON format.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| options | <code>object</code> | The options object to transform. |

<a name="ApplicationCommandManager.transformPayload"></a>

### ApplicationCommandManager.transformPayload(payload) ⇒ <code>Object</code>

Transforms the payload object into a standardized format for application commands.

**Kind**: static method of [<code>ApplicationCommandManager</code>](#ApplicationCommandManager)  
**Returns**: <code>Object</code> - - The transformed payload object.  
**Throws**:

- <code>RangeError</code> - If the payload is missing required fields or if the field values are out of range.

| Param   | Type                | Description                                        |
| ------- | ------------------- | -------------------------------------------------- |
| payload | <code>Object</code> | The payload object containing the command details. |

<a name="ApplicationCommandPermissionManager"></a>

## ApplicationCommandPermissionManager ⇐ <code>Base</code>

Manages application command permissions for a specific guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ApplicationCommandPermissionManager](#ApplicationCommandPermissionManager) ⇐ <code>Base</code>
  - [new ApplicationCommandPermissionManager(client, guildId)](#new_ApplicationCommandPermissionManager_new)
  - _instance_
    - [.cache](#ApplicationCommandPermissionManager+cache) ⇒
    - [.\_add(commands, [guildId], [options])](#ApplicationCommandPermissionManager+_add) ⇒ <code>ApplicationCommandPermission</code>
    - [.fetch(commands, [options])](#ApplicationCommandPermissionManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.\_fetchId(commands, [cache], [force], [guild])](#ApplicationCommandPermissionManager+_fetchId) ⇒ <code>Promise.&lt;any&gt;</code>
  - _static_
    - [.transformPermissions(o)](#ApplicationCommandPermissionManager.transformPermissions) ⇒ <code>Object</code>
    - [.transformPermission(o)](#ApplicationCommandPermissionManager.transformPermission) ⇒ <code>Object</code>
    - [.parseRemoveOptions(payload, fetchedData)](#ApplicationCommandPermissionManager.parseRemoveOptions) ⇒ <code>array</code>

<a name="new_ApplicationCommandPermissionManager_new"></a>

### new ApplicationCommandPermissionManager(client, guildId)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| client  | <code>Client</code> | The client instance. |
| guildId | <code>string</code> | The ID of the guild. |

<a name="ApplicationCommandPermissionManager+cache"></a>

### applicationCommandPermissionManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: The Collection object representing the cache.  
<a name="ApplicationCommandPermissionManager+_add"></a>

### applicationCommandPermissionManager.\_add(commands, [guildId], [options]) ⇒ <code>ApplicationCommandPermission</code>

Adds a command permission to the guild.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>ApplicationCommandPermission</code> - The added command permission.

| Param           | Type                                                   | Default                                  | Description                                                                    |
| --------------- | ------------------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------------------------ |
| commands        | <code>string</code> \| <code>ApplicationCommand</code> |                                          | The command ID or the command object.                                          |
| [guildId]       | <code>string</code>                                    | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the permission to.                                  |
| [options]       | <code>object</code>                                    | <code>{cache: true, force: false}</code> | Additional options for adding the permission.                                  |
| [options.cache] | <code>boolean</code>                                   | <code>true</code>                        | Whether to cache the permission.                                               |
| [options.force] | <code>boolean</code>                                   | <code>false</code>                       | Whether to force adding the permission even if it already exists in the cache. |

<a name="ApplicationCommandPermissionManager+fetch"></a>

### applicationCommandPermissionManager.fetch(commands, [options]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Fetches commands from the API based on the provided parameters.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves to a cache object containing the fetched commands.  
**Throws**:

- <code>RangeError</code> If the guild ID is not provided.

| Param           | Type                                       | Description                                                          |
| --------------- | ------------------------------------------ | -------------------------------------------------------------------- |
| commands        | <code>string</code> \| <code>object</code> | The command ID or an object containing the command details.          |
| [options]       | <code>object</code>                        | Additional options for the fetch operation.                          |
| [options.cache] | <code>boolean</code>                       | Whether to cache the fetched commands.                               |
| [options.force] | <code>boolean</code>                       | Whether to force fetch the commands even if they are already cached. |
| [options.guild] | <code>string</code> \| <code>Guild</code>  | The ID or instance of the guild to fetch the commands for.           |

<a name="ApplicationCommandPermissionManager+_fetchId"></a>

### applicationCommandPermissionManager.\_fetchId(commands, [cache], [force], [guild]) ⇒ <code>Promise.&lt;any&gt;</code>

Fetches the ID of a command from the server's command permissions.

**Kind**: instance method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the fetched permissions.  
**Throws**:

- <code>RangeError</code> - If the guild ID is not provided.

| Param    | Type                                       | Default                               | Description                                                                |
| -------- | ------------------------------------------ | ------------------------------------- | -------------------------------------------------------------------------- |
| commands | <code>string</code> \| <code>Object</code> |                                       | The ID of the command or an object containing the command ID.              |
| [cache]  | <code>boolean</code>                       | <code>true</code>                     | Whether to cache the fetched permissions.                                  |
| [force]  | <code>boolean</code>                       | <code>false</code>                    | Whether to force fetching the permissions even if they are already cached. |
| [guild]  | <code>string</code> \| <code>Object</code> | <code>&quot;this.guildId&quot;</code> | The ID of the guild or an object containing the guild ID.                  |

<a name="ApplicationCommandPermissionManager.transformPermissions"></a>

### ApplicationCommandPermissionManager.transformPermissions(o) ⇒ <code>Object</code>

Transforms a permissions object into the desired format.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Object</code> - - The transformed permissions object.

- id: The ID of the permission. If the ID is a string, it is used as is. If it is an object, the "id" property is used. If neither is present, it is set to undefined.
- type: The type of the permission. If the type is a string, it is converted to the corresponding ApplicationCommandPermissionType enum value. If it is already a valid enum value, it is used as is. If neither is present, it is set to 2 (USER).
- permission: The

| Param | Type                | Description                          |
| ----- | ------------------- | ------------------------------------ |
| o     | <code>Object</code> | The permissions object to transform. |

<a name="ApplicationCommandPermissionManager.transformPermission"></a>

### ApplicationCommandPermissionManager.transformPermission(o) ⇒ <code>Object</code>

Transforms a permission object into a new format.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>Object</code> - - The transformed permission object.

| Param | Type                | Description                         |
| ----- | ------------------- | ----------------------------------- |
| o     | <code>Object</code> | The permission object to transform. |

<a name="ApplicationCommandPermissionManager.parseRemoveOptions"></a>

### ApplicationCommandPermissionManager.parseRemoveOptions(payload, fetchedData) ⇒ <code>array</code>

Parses the remove options from the payload and fetched data to create an array of objects
that should be removed.

**Kind**: static method of [<code>ApplicationCommandPermissionManager</code>](#ApplicationCommandPermissionManager)  
**Returns**: <code>array</code> - - An array of objects that should be removed based on the remove options.

| Param       | Type                | Description                                       |
| ----------- | ------------------- | ------------------------------------------------- |
| payload     | <code>object</code> | The payload object containing the remove options. |
| fetchedData | <code>array</code>  | The fetched data array to filter and map.         |

<a name="AutoModManager"></a>

## AutoModManager ⇐ <code>Base</code>

Represents an AutoMod manager that handles the creation, editing, and deletion of auto-moderation rules for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [AutoModManager](#AutoModManager) ⇐ <code>Base</code>
  - [new AutoModManager(client)](#new_AutoModManager_new)
  - _instance_
    - [.cache](#AutoModManager+cache) ⇒
    - [.\_add(rules, [guildId], [options])](#AutoModManager+_add) ⇒ <code>Rule</code> \| <code>null</code>
    - [.fetch(rule, [options])](#AutoModManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
    - [.\_fetchId(rule, [cache], [force])](#AutoModManager+_fetchId) ⇒ <code>Promise.&lt;any&gt;</code>
    - [.create([options])](#AutoModManager+create) ⇒ <code>Promise</code>
    - [.edit(rule, [options])](#AutoModManager+edit) ⇒ <code>Promise.&lt;Rule&gt;</code>
    - [.delete(rule, reason)](#AutoModManager+delete) ⇒ <code>Promise.&lt;Rule&gt;</code>
  - _static_
    - [.transformPayload(payload)](#AutoModManager.transformPayload) ⇒ <code>Object</code>
    - [.transformActions(actions)](#AutoModManager.transformActions) ⇒ <code>Object</code>
    - [.transformMetadata(metadata)](#AutoModManager.transformMetadata) ⇒ <code>Object</code>

<a name="new_AutoModManager_new"></a>

### new AutoModManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="AutoModManager+cache"></a>

### autoModManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: The Collection object representing the cache.  
<a name="AutoModManager+_add"></a>

### autoModManager.\_add(rules, [guildId], [options]) ⇒ <code>Rule</code> \| <code>null</code>

Adds a rule to the guild's auto moderation system.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Rule</code> \| <code>null</code> - The added rule, or null if

| Param           | Type                                     | Default                                  | Description                                                              |
| --------------- | ---------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------ |
| rules           | <code>string</code> \| <code>Rule</code> |                                          | The rule to add. Can be either a rule ID or a Rule object.               |
| [guildId]       | <code>string</code>                      | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the rule to.                                  |
| [options]       | <code>object</code>                      | <code>{cache: true, force: false}</code> | Additional options for adding the rule.                                  |
| [options.cache] | <code>boolean</code>                     | <code>true</code>                        | Whether to cache the added rule.                                         |
| [options.force] | <code>boolean</code>                     | <code>false</code>                       | Whether to force adding the rule even if it already exists in the cache. |

<a name="AutoModManager+fetch"></a>

### autoModManager.fetch(rule, [options]) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches auto-moderation rules from the server based on the provided rule and options.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched auto-moderation rules.

| Param           | Type                                       | Default            | Description                                                              |
| --------------- | ------------------------------------------ | ------------------ | ------------------------------------------------------------------------ |
| rule            | <code>string</code> \| <code>object</code> |                    | The rule ID or an object containing the rule details.                    |
| [options]       | <code>object</code>                        |                    | Additional options for the fetch request.                                |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched rules.                                      |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force the fetch request even if the rules are already cached. |

<a name="AutoModManager+_fetchId"></a>

### autoModManager.\_fetchId(rule, [cache], [force]) ⇒ <code>Promise.&lt;any&gt;</code>

Fetches the ID of a rule from the auto-moderation rules in a guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;any&gt;</code> - - A promise that resolves to the fetched rule.

| Param   | Type                                       | Default            | Description                                                      |
| ------- | ------------------------------------------ | ------------------ | ---------------------------------------------------------------- |
| rule    | <code>string</code> \| <code>Object</code> |                    | The rule ID or an object containing the rule ID.                 |
| [cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched rule.                               |
| [force] | <code>boolean</code>                       | <code>false</code> | Whether to force fetching the rule even if it is already cached. |

<a name="AutoModManager+create"></a>

### autoModManager.create([options]) ⇒ <code>Promise</code>

Creates a new auto-moderation rule for the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created rule.

| Param            | Type                | Description                        |
| ---------------- | ------------------- | ---------------------------------- |
| [options]        | <code>Object</code> | The options for creating the rule. |
| [options.reason] | <code>string</code> | The reason for creating the rule.  |

<a name="AutoModManager+edit"></a>

### autoModManager.edit(rule, [options]) ⇒ <code>Promise.&lt;Rule&gt;</code>

Edits an auto-moderation rule in the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;Rule&gt;</code> - A promise that resolves with the edited rule.

| Param            | Type                                     | Description                                |
| ---------------- | ---------------------------------------- | ------------------------------------------ |
| rule             | <code>string</code> \| <code>Rule</code> | The ID or the rule object to edit.         |
| [options]        | <code>Object</code>                      | Additional options for the edit operation. |
| [options.reason] | <code>string</code>                      | The reason for the edit.                   |

<a name="AutoModManager+delete"></a>

### autoModManager.delete(rule, reason) ⇒ <code>Promise.&lt;Rule&gt;</code>

Deletes an auto-moderation rule from the guild.

**Kind**: instance method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Promise.&lt;Rule&gt;</code> - - The deleted rule object.

| Param  | Type                                     | Description                          |
| ------ | ---------------------------------------- | ------------------------------------ |
| rule   | <code>string</code> \| <code>Rule</code> | The ID or the rule object to delete. |
| reason | <code>string</code>                      | The reason for deleting the rule.    |

<a name="AutoModManager.transformPayload"></a>

### AutoModManager.transformPayload(payload) ⇒ <code>Object</code>

Transforms the payload object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed payload object.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| payload | <code>Object</code> | The payload object to transform. |

<a name="AutoModManager.transformActions"></a>

### AutoModManager.transformActions(actions) ⇒ <code>Object</code>

Transforms the actions object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed actions object.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| actions | <code>Object</code> | The actions object to transform. |

<a name="AutoModManager.transformMetadata"></a>

### AutoModManager.transformMetadata(metadata) ⇒ <code>Object</code>

Transforms the given metadata object into a new format.

**Kind**: static method of [<code>AutoModManager</code>](#AutoModManager)  
**Returns**: <code>Object</code> - - The transformed metadata object.

| Param    | Type                | Description                       |
| -------- | ------------------- | --------------------------------- |
| metadata | <code>Object</code> | The metadata object to transform. |

<a name="BaseThreadManager"></a>

## BaseThreadManager ⇐ <code>Base</code>

Represents a base thread manager that handles operations related to thread channels.

**Kind**: global class  
**Extends**: <code>Base</code>

- [BaseThreadManager](#BaseThreadManager) ⇐ <code>Base</code>
  - [new BaseThreadManager(client)](#new_BaseThreadManager_new)
  - [.cache](#BaseThreadManager+cache) ⇒
  - [.\_add(threads, [guildId], [options])](#BaseThreadManager+_add) ⇒ <code>ThreadChannel</code> \| <code>null</code>
  - [.create(message, options)](#BaseThreadManager+create)
  - [.fetch(thread, [options])](#BaseThreadManager+fetch) ⇒ <code>Promise</code>
  - [.fetchActive()](#BaseThreadManager+fetchActive) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
  - [.fetchArchivedThread([options])](#BaseThreadManager+fetchArchivedThread) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>
  - [.fetchForumThreads([query])](#BaseThreadManager+fetchForumThreads) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_BaseThreadManager_new"></a>

### new BaseThreadManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="BaseThreadManager+cache"></a>

### baseThreadManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: The Collection object representing the cache.  
<a name="BaseThreadManager+_add"></a>

### baseThreadManager.\_add(threads, [guildId], [options]) ⇒ <code>ThreadChannel</code> \| <code>null</code>

Adds a thread to the guild's thread cache.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>ThreadChannel</code> \| <code>null</code> - The added thread or null if no thread is provided.

| Param           | Type                                                        | Default                   | Description                                                                |
| --------------- | ----------------------------------------------------------- | ------------------------- | -------------------------------------------------------------------------- |
| threads         | <code>string</code> \| <code>ThreadChannelResolvable</code> |                           | The thread or thread ID to add.                                            |
| [guildId]       | <code>Snowflake</code>                                      | <code>this.guildId</code> | The ID of the guild where the thread belongs.                              |
| [options]       | <code>Object</code>                                         |                           | Additional options for adding the thread.                                  |
| [options.cache] | <code>boolean</code>                                        | <code>true</code>         | Whether to cache the thread.                                               |
| [options.force] | <code>boolean</code>                                        | <code>true</code>         | Whether to force adding the thread even if it already exists in the cache. |

<a name="BaseThreadManager+create"></a>

### baseThreadManager.create(message, options)

Creates a new thread in the current channel with the given message and options.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)

| Param                         | Type                                       | Description                                                     |
| ----------------------------- | ------------------------------------------ | --------------------------------------------------------------- |
| message                       | <code>string</code> \| <code>object</code> | The message content or message object to start the thread with. |
| options                       | <code>object</code>                        | The options for creating the thread.                            |
| [options.reason]              | <code>string</code>                        | The reason for creating the thread.                             |
| [options.name]                | <code>string</code>                        | The name of the thread.                                         |
| [options.type]                | <code>string</code> \| <code>number</code> | The type of the thread. Can be a string or number.              |
| [options.invitable]           | <code>boolean</code>                       | Whether the thread is invitable.                                |
| [options.autoArchiveDuration] | <code>number</code>                        | The auto archive                                                |

<a name="BaseThreadManager+fetch"></a>

### baseThreadManager.fetch(thread, [options]) ⇒ <code>Promise</code>

Fetches a thread from the client's channels.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise</code> - A promise that resolves to the fetched thread.

| Param     | Type                | Description                               |
| --------- | ------------------- | ----------------------------------------- |
| thread    | <code>string</code> | The ID of the thread to fetch.            |
| [options] | <code>Object</code> | Additional options for the fetch request. |

<a name="BaseThreadManager+fetchActive"></a>

### baseThreadManager.fetchActive() ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

Fetches the active threads for the current guild.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the active threads.  
<a name="BaseThreadManager+fetchArchivedThread"></a>

### baseThreadManager.fetchArchivedThread([options]) ⇒ <code>Promise.&lt;FetchedThreads&gt;</code>

Fetches archived threads based on the provided options.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)  
**Returns**: <code>Promise.&lt;FetchedThreads&gt;</code> - - A promise that resolves to a FetchedThreads object containing the fetched threads.

| Param            | Type                 | Default            | Description                                          |
| ---------------- | -------------------- | ------------------ | ---------------------------------------------------- |
| [options]        | <code>Object</code>  |                    | The options for fetching archived threads.           |
| [options.before] | <code>Date</code>    |                    | The date before which the threads should be fetched. |
| [options.limit]  | <code>number</code>  | <code>25</code>    | The maximum number of threads to fetch.              |
| [options.public] | <code>boolean</code> | <code>false</code> | Whether to fetch public or private archived threads. |

<a name="BaseThreadManager+fetchForumThreads"></a>

### baseThreadManager.fetchForumThreads([query]) ⇒ <code>Promise.&lt;Object&gt;</code>

Fetches forum threads based on the provided query parameters.

**Kind**: instance method of [<code>BaseThreadManager</code>](#BaseThreadManager)

| Param             | Type                 | Default                                                  | Description                                      |
| ----------------- | -------------------- | -------------------------------------------------------- | ------------------------------------------------ |
| [query]           | <code>Object</code>  |                                                          | The query parameters for fetching forum threads. |
| [query.archived]  | <code>boolean</code> |                                                          | Whether to include archived threads.             |
| [query.sortBy]    | <code>string</code>  | <code>&quot;\&quot;last_message_time\&quot;&quot;</code> | The field to sort the threads by.                |
| [query.sortOrder] | <code>string</code>  | <code>&quot;\&quot;desc\&quot;&quot;</code>              | The order in which to sort the threads.          |
| [query.limit]     | <code>number</code>  | <code>25</code>                                          | The maximum number of threads to fetch.          |
| [query.offset]    | <code>number</code>  | <code>50</code>                                          | The offset from which to start fetching threads. |

<a name="ChannelManager"></a>

## ChannelManager ⇐ <code>Base</code>

Represents a Channel Manager that handles operations related to channels.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ChannelManager](#ChannelManager) ⇐ <code>Base</code>
  - [new ChannelManager(client)](#new_ChannelManager_new)
  - _instance_
    - [.cache](#ChannelManager+cache) ⇒
    - [.\_add(channels, [guildId], [options])](#ChannelManager+_add) ⇒ <code>Channel</code>
    - [.fetch(channel, [options])](#ChannelManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
    - [.\_fetchId(channel, [cache], [force])](#ChannelManager+_fetchId) ⇒ <code>Promise.&lt;Channel&gt;</code>
    - [.edit(channel, [options])](#ChannelManager+edit) ⇒ <code>Promise.&lt;Channel&gt;</code>
    - [.delete(channel, reason)](#ChannelManager+delete) ⇒ <code>Promise.&lt;Channel&gt;</code>
    - [.createInvite(channel, [options])](#ChannelManager+createInvite) ⇒ <code>Promise.&lt;Invite&gt;</code>
    - [.follow(news, [options])](#ChannelManager+follow) ⇒ <code>Promise.&lt;string&gt;</code>
    - [.triggerTyping(channel)](#ChannelManager+triggerTyping) ⇒ <code>Promise.&lt;void&gt;</code>
    - [.clone(channel)](#ChannelManager+clone) ⇒ <code>Promise.&lt;Channel&gt;</code>
  - _static_
    - [.transformPayload(o, [position])](#ChannelManager.transformPayload) ⇒ <code>object</code>
    - [.transformOverwrites(p)](#ChannelManager.transformOverwrites) ⇒ <code>Object</code>

<a name="new_ChannelManager_new"></a>

### new ChannelManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ChannelManager+cache"></a>

### channelManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: The Collection object representing the cache.  
<a name="ChannelManager+_add"></a>

### channelManager.\_add(channels, [guildId], [options]) ⇒ <code>Channel</code>

Adds a channel to the cache and returns the channel object.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Channel</code> - The added channel object.

| Param           | Type                                        | Default                                  | Description                                           |
| --------------- | ------------------------------------------- | ---------------------------------------- | ----------------------------------------------------- |
| channels        | <code>string</code> \| <code>Channel</code> |                                          | The channel ID or channel object to add.              |
| [guildId]       | <code>string</code>                         | <code>&quot;this.guildId&quot;</code>    | The ID of the guild the channel belongs to.           |
| [options]       | <code>object</code>                         | <code>{cache: true, force: false}</code> | Additional options for adding the channel.            |
| [options.cache] | <code>boolean</code>                        | <code>true</code>                        | Whether to cache the channel object.                  |
| [options.force] | <code>boolean</code>                        | <code>false</code>                       | Whether to force fetching the channel from the cache. |

<a name="ChannelManager+fetch"></a>

### channelManager.fetch(channel, [options]) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches a channel from the server based on the provided channel ID or channel object.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched channel object.

| Param           | Type                                       | Description                                       |
| --------------- | ------------------------------------------ | ------------------------------------------------- |
| channel         | <code>string</code> \| <code>object</code> | The channel ID or channel object to fetch.        |
| [options]       | <code>object</code>                        | Additional options for the fetch operation.       |
| [options.cache] | <code>boolean</code>                       | Whether to use the cache for the fetch operation. |
| [options.force] | <code>boolean</code>                       | Whether to force a fresh fetch from the server.   |

<a name="ChannelManager+_fetchId"></a>

### channelManager.\_fetchId(channel, [cache], [force]) ⇒ <code>Promise.&lt;Channel&gt;</code>

Fetches the ID of a channel from the API.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves to the fetched channel.  
**Throws**:

- <code>RangeError</code> - If the fetched channel is not a part of the guild.

| Param   | Type                                        | Default            | Description                                                         |
| ------- | ------------------------------------------- | ------------------ | ------------------------------------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> |                    | The channel or channel ID to fetch.                                 |
| [cache] | <code>boolean</code>                        | <code>true</code>  | Whether to cache the fetched channel.                               |
| [force] | <code>boolean</code>                        | <code>false</code> | Whether to force fetching the channel even if it is already cached. |

<a name="ChannelManager+edit"></a>

### channelManager.edit(channel, [options]) ⇒ <code>Promise.&lt;Channel&gt;</code>

Edits a channel with the given options.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the edited channel.

| Param            | Type                                        | Description                                                          |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| channel          | <code>string</code> \| <code>Channel</code> | The channel to edit. Can be either a channel ID or a Channel object. |
| [options]        | <code>Object</code>                         | The options for editing the channel.                                 |
| [options.reason] | <code>string</code>                         | The reason for the channel edit.                                     |

<a name="ChannelManager+delete"></a>

### channelManager.delete(channel, reason) ⇒ <code>Promise.&lt;Channel&gt;</code>

Deletes a channel.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves with the deleted channel.

| Param   | Type                                        | Description                                                            |
| ------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to delete. Can be either a channel ID or a Channel object. |
| reason  | <code>string</code>                         | The reason for deleting the channel.                                   |

<a name="ChannelManager+createInvite"></a>

### channelManager.createInvite(channel, [options]) ⇒ <code>Promise.&lt;Invite&gt;</code>

Creates an invite for a given channel with optional options.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Invite&gt;</code> - - A promise that resolves with the created invite.

| Param            | Type                                        | Description                                         |
| ---------------- | ------------------------------------------- | --------------------------------------------------- |
| channel          | <code>string</code> \| <code>Channel</code> | The channel or channel ID to create the invite for. |
| [options]        | <code>Object</code>                         | Optional parameters for creating the invite.        |
| [options.reason] | <code>string</code>                         | The reason for creating the invite.                 |

<a name="ChannelManager+follow"></a>

### channelManager.follow(news, [options]) ⇒ <code>Promise.&lt;string&gt;</code>

Follows a news channel and adds it to the list of followed channels.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves with the ID of the followed channel.

| Param             | Type                                            | Description                                                                                                               |
| ----------------- | ----------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------- |
| news              | <code>string</code> \| <code>NewsChannel</code> | The news channel to follow. Can be either a string representing the channel ID or a NewsChannel object.                   |
| [options]         | <code>Object</code>                             | Additional options for following the channel.                                                                             |
| [options.reason]  | <code>string</code>                             | The reason for following the channel.                                                                                     |
| [options.channel] | <code>string</code> \| <code>NewsChannel</code> | The channel to receive webhook notifications. Can be either a string representing the channel ID or a NewsChannel object. |

<a name="ChannelManager+triggerTyping"></a>

### channelManager.triggerTyping(channel) ⇒ <code>Promise.&lt;void&gt;</code>

Triggers the typing indicator in a given channel.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the typing indicator is triggered.

| Param   | Type                                        | Description                           |
| ------- | ------------------------------------------- | ------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel ID or the channel object. |

<a name="ChannelManager+clone"></a>

### channelManager.clone(channel) ⇒ <code>Promise.&lt;Channel&gt;</code>

Clones a channel by creating a new channel with the same properties and permission overwrites.

**Kind**: instance method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - - A promise that resolves with the cloned channel.  
**Throws**:

- <code>RangeError</code> - If the channel is not found in the cache.

| Param   | Type                                        | Description                                    |
| ------- | ------------------------------------------- | ---------------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel ID or the channel object to clone. |

<a name="ChannelManager.transformPayload"></a>

### ChannelManager.transformPayload(o, [position]) ⇒ <code>object</code>

Transforms the payload object into the desired format based on the given parameters.

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>object</code> - - The transformed payload object.

| Param      | Type                 | Default            | Description                                                                         |
| ---------- | -------------------- | ------------------ | ----------------------------------------------------------------------------------- |
| o          | <code>object</code>  |                    | The payload object to transform.                                                    |
| [position] | <code>boolean</code> | <code>false</code> | Indicates whether to include position-related properties in the transformed object. |

<a name="ChannelManager.transformOverwrites"></a>

### ChannelManager.transformOverwrites(p) ⇒ <code>Object</code>

Transforms an object of overwrite properties into a standardized format.

**Kind**: static method of [<code>ChannelManager</code>](#ChannelManager)  
**Returns**: <code>Object</code> - - The transformed overwrite object.

| Param   | Type                              | Description                                 |
| ------- | --------------------------------- | ------------------------------------------- |
| p       | <code>Object</code>               | The overwrite properties object.            |
| p.id    | <code>string</code>               | The ID of the overwrite.                    |
| p.type  | <code>string</code>               | The type of the overwrite.                  |
| p.allow | <code>Array.&lt;string&gt;</code> | The permissions to allow for the overwrite. |
| p.deny  | <code>Array.&lt;string&gt;</code> | The permissions to deny for the overwrite.  |

<a name="EmojiManager"></a>

## EmojiManager ⇐ <code>Base</code>

Represents a manager for handling emojis in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [EmojiManager](#EmojiManager) ⇐ <code>Base</code>
  - [new EmojiManager(client)](#new_EmojiManager_new)
  - _instance_
    - [.cache](#EmojiManager+cache) ⇒
    - [.\_add(emojis, [guildId], [options])](#EmojiManager+_add) ⇒ <code>Emoji</code> \| <code>null</code>
    - [.create([options])](#EmojiManager+create) ⇒ <code>Promise.&lt;Emoji&gt;</code>
    - [.edit(emoji, [options])](#EmojiManager+edit) ⇒ <code>Promise.&lt;Emoji&gt;</code>
    - [.delete(emoji, reason)](#EmojiManager+delete) ⇒ <code>Promise.&lt;Emoji&gt;</code>
    - [.fetch(emoji, [options])](#EmojiManager+fetch) ⇒ <code>Promise.&lt;EmojiCache&gt;</code>
    - [.\_fetchId(emoji, [cache], [force])](#EmojiManager+_fetchId) ⇒ <code>Promise.&lt;Emoji&gt;</code>
  - _static_
    - [.transformRoles(roles)](#EmojiManager.transformRoles) ⇒ <code>string</code> \| <code>undefined</code>
    - [.transformOptions(o)](#EmojiManager.transformOptions) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_EmojiManager_new"></a>

### new EmojiManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="EmojiManager+cache"></a>

### emojiManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: The Collection object representing the cache.  
<a name="EmojiManager+_add"></a>

### emojiManager.\_add(emojis, [guildId], [options]) ⇒ <code>Emoji</code> \| <code>null</code>

Adds an emoji to the cache and returns the emoji object.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Emoji</code> \| <code>null</code> - The added emoji object, or null if no emoji is provided.

| Param           | Type                                                | Default                                  | Description                                          |
| --------------- | --------------------------------------------------- | ---------------------------------------- | ---------------------------------------------------- |
| emojis          | <code>string</code> \| <code>EmojiResolvable</code> |                                          | The emoji or emoji ID to add to the cache.           |
| [guildId]       | <code>string</code>                                 | <code>&quot;this.guildId&quot;</code>    | The ID of the guild where the emoji belongs.         |
| [options]       | <code>object</code>                                 | <code>{cache: true, force: false}</code> | Additional options for adding the emoji.             |
| [options.cache] | <code>boolean</code>                                | <code>true</code>                        | Whether to cache the emoji object.                   |
| [options.force] | <code>boolean</code>                                | <code>false</code>                       | Whether to force re-fetching the emoji from the API. |

<a name="EmojiManager+create"></a>

### emojiManager.create([options]) ⇒ <code>Promise.&lt;Emoji&gt;</code>

Creates a new emoji in the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - A promise that resolves with the created emoji.

| Param            | Type                | Description                         |
| ---------------- | ------------------- | ----------------------------------- |
| [options]        | <code>Object</code> | The options for creating the emoji. |
| [options.reason] | <code>string</code> | The reason for creating the emoji.  |

<a name="EmojiManager+edit"></a>

### emojiManager.edit(emoji, [options]) ⇒ <code>Promise.&lt;Emoji&gt;</code>

Edits an emoji in the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - A promise that resolves with the edited emoji.

| Param            | Type                                      | Description                                                        |
| ---------------- | ----------------------------------------- | ------------------------------------------------------------------ |
| emoji            | <code>string</code> \| <code>Emoji</code> | The emoji to edit. Can be either the emoji ID or the Emoji object. |
| [options]        | <code>Object</code>                       | Additional options for editing the emoji.                          |
| [options.reason] | <code>string</code>                       | The reason for editing the emoji.                                  |

<a name="EmojiManager+delete"></a>

### emojiManager.delete(emoji, reason) ⇒ <code>Promise.&lt;Emoji&gt;</code>

Deletes an emoji from the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - - The deleted emoji.  
**Throws**:

- <code>Error</code> - If the deletion fails.

| Param  | Type                                      | Description                                                          |
| ------ | ----------------------------------------- | -------------------------------------------------------------------- |
| emoji  | <code>string</code> \| <code>Emoji</code> | The emoji to delete. Can be either the emoji ID or the Emoji object. |
| reason | <code>string</code>                       | The reason for deleting the emoji.                                   |

<a name="EmojiManager+fetch"></a>

### emojiManager.fetch(emoji, [options]) ⇒ <code>Promise.&lt;EmojiCache&gt;</code>

Fetches an emoji from the guild's emoji list.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;EmojiCache&gt;</code> - A promise that resolves to the fetched emoji.

| Param           | Type                                       | Default            | Description                                                                            |
| --------------- | ------------------------------------------ | ------------------ | -------------------------------------------------------------------------------------- |
| emoji           | <code>string</code> \| <code>object</code> |                    | The emoji to fetch. Can be either an emoji ID or a string representation of the emoji. |
| [options]       | <code>object</code>                        |                    | Additional options for the fetch operation.                                            |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched emoji.                                                    |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force the fetch operation even if the emoji is already cached.              |

<a name="EmojiManager+_fetchId"></a>

### emojiManager.\_fetchId(emoji, [cache], [force]) ⇒ <code>Promise.&lt;Emoji&gt;</code>

Fetches the ID of an emoji from the guild.

**Kind**: instance method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Emoji&gt;</code> - - A promise that resolves to the fetched emoji.

| Param   | Type                                      | Default            | Description                                                    |
| ------- | ----------------------------------------- | ------------------ | -------------------------------------------------------------- |
| emoji   | <code>string</code> \| <code>Emoji</code> |                    | The emoji or the ID of the emoji to fetch.                     |
| [cache] | <code>boolean</code>                      | <code>true</code>  | Whether to cache the fetched emoji.                            |
| [force] | <code>boolean</code>                      | <code>false</code> | Whether to force fetch the emoji even if it is already cached. |

<a name="EmojiManager.transformRoles"></a>

### EmojiManager.transformRoles(roles) ⇒ <code>string</code> \| <code>undefined</code>

Transforms the given roles object into a string or returns the id property of the roles object.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>string</code> \| <code>undefined</code> - - The transformed roles as a string or the id property of the roles object.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| roles | <code>Object</code> | The roles object to transform. |

<a name="EmojiManager.transformOptions"></a>

### EmojiManager.transformOptions(o) ⇒ <code>Promise.&lt;Object&gt;</code>

Transforms the given options object into a new object with modified properties.

**Kind**: static method of [<code>EmojiManager</code>](#EmojiManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the transformed options object.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| o     | <code>Object</code> | The options object to transform. |

<a name="GuildApplicationCommandManager"></a>

## GuildApplicationCommandManager ⇐ <code>ApplicationCommandManager</code>

Represents a manager for guild-specific application commands.

**Kind**: global class  
**Extends**: <code>ApplicationCommandManager</code>  
<a name="new_GuildApplicationCommandManager_new"></a>

### new GuildApplicationCommandManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildAutoModManager"></a>

## GuildAutoModManager ⇐ <code>AutoModManager</code>

Represents a manager for guild-specific auto moderation settings.

**Kind**: global class  
**Extends**: <code>AutoModManager</code>

- [GuildAutoModManager](#GuildAutoModManager) ⇐ <code>AutoModManager</code>
  - [new GuildAutoModManager(guildId, client)](#new_GuildAutoModManager_new)
  - [.cache](#GuildAutoModManager+cache) ⇒ <code>Array</code>

<a name="new_GuildAutoModManager_new"></a>

### new GuildAutoModManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildAutoModManager+cache"></a>

### guildAutoModManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildAutoModManager</code>](#GuildAutoModManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.

<a name="GuildBanManager"></a>

## GuildBanManager ⇐ <code>Base</code>

Represents a manager for handling guild bans.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildBanManager](#GuildBanManager) ⇐ <code>Base</code>
  - [new GuildBanManager(guildId, client)](#new_GuildBanManager_new)
  - _instance_
    - [.cache](#GuildBanManager+cache) ⇒
    - [.\_add(bans, [guildId], [options])](#GuildBanManager+_add) ⇒ <code>GuildBan</code> \| <code>null</code>
    - [.create(user, [options])](#GuildBanManager+create) ⇒ <code>Promise.&lt;GuildBan&gt;</code>
    - [.remove(user, reason)](#GuildBanManager+remove) ⇒ <code>Promise.&lt;Ban&gt;</code>
    - [.fetch(ban, options)](#GuildBanManager+fetch) ⇒ <code>Promise.&lt;object&gt;</code>
    - [.\_fetchId(ban, [cache], [force])](#GuildBanManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
  - _static_
    - [.transformPayloadd(o)](#GuildBanManager.transformPayloadd) ⇒ <code>Object</code>

<a name="new_GuildBanManager_new"></a>

### new GuildBanManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildBanManager+cache"></a>

### guildBanManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildBanManager+_add"></a>

### guildBanManager.\_add(bans, [guildId], [options]) ⇒ <code>GuildBan</code> \| <code>null</code>

Adds a ban to the guild's ban cache.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>GuildBan</code> \| <code>null</code> - - The added GuildBan object, or null if the ban is

| Param           | Type                                         | Default                                  | Description                                                             |
| --------------- | -------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------- |
| bans            | <code>string</code> \| <code>GuildBan</code> |                                          | The ban ID or GuildBan object to add.                                   |
| [guildId]       | <code>string</code>                          | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the ban to.                                  |
| [options]       | <code>object</code>                          | <code>{cache: true, force: false}</code> | Additional options for adding the ban.                                  |
| [options.cache] | <code>boolean</code>                         | <code>true</code>                        | Whether to cache the ban.                                               |
| [options.force] | <code>boolean</code>                         | <code>false</code>                       | Whether to force adding the ban even if it already exists in the cache. |

<a name="GuildBanManager+create"></a>

### guildBanManager.create(user, [options]) ⇒ <code>Promise.&lt;GuildBan&gt;</code>

Creates a ban for a user in the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;GuildBan&gt;</code> - A promise that resolves with the created GuildBan object.  
**Throws**:

- <code>Error</code> If the API request fails.

| Param            | Type                                     | Description                                         |
| ---------------- | ---------------------------------------- | --------------------------------------------------- |
| user             | <code>string</code> \| <code>User</code> | The user to ban. Can be a user ID or a User object. |
| [options]        | <code>Object</code>                      | Additional options for the ban.                     |
| [options.reason] | <code>string</code>                      | The reason for the ban.                             |

<a name="GuildBanManager+remove"></a>

### guildBanManager.remove(user, reason) ⇒ <code>Promise.&lt;Ban&gt;</code>

Removes a user from the ban list in the guild.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;Ban&gt;</code> - A promise that resolves with the ban object of the removed user.

| Param  | Type                                     | Description                                                              |
| ------ | ---------------------------------------- | ------------------------------------------------------------------------ |
| user   | <code>string</code> \| <code>User</code> | The user to remove from the ban list. Can be a user ID or a User object. |
| reason | <code>string</code>                      | The reason for removing the user from the ban list.                      |

<a name="GuildBanManager+fetch"></a>

### guildBanManager.fetch(ban, options) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches ban information from the server.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched ban information.

| Param         | Type                                       | Description                       |
| ------------- | ------------------------------------------ | --------------------------------- |
| ban           | <code>string</code> \| <code>object</code> | The ban ID or ban object.         |
| options       | <code>object</code>                        | Additional options for the fetch. |
| options.cache | <code>boolean</code>                       | Whether to use cached data.       |
| options.force | <code>boolean</code>                       | Whether to force a fresh fetch.   |

<a name="GuildBanManager+_fetchId"></a>

### guildBanManager.\_fetchId(ban, [cache], [force]) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches the ID of a ban from the server.

**Kind**: instance method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The fetched ban object.

| Param   | Type                                       | Default            | Description                                                     |
| ------- | ------------------------------------------ | ------------------ | --------------------------------------------------------------- |
| ban     | <code>string</code> \| <code>object</code> |                    | The ban object or the ID of the ban.                            |
| [cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched ban.                               |
| [force] | <code>boolean</code>                       | <code>false</code> | Whether to force fetching the ban even if it is already cached. |

<a name="GuildBanManager.transformPayloadd"></a>

### GuildBanManager.transformPayloadd(o) ⇒ <code>Object</code>

Transforms the payload object for deleting messages.

**Kind**: static method of [<code>GuildBanManager</code>](#GuildBanManager)  
**Returns**: <code>Object</code> - The transformed payload object.  
**Throws**:

- <code>RangeError</code> If the days value is less than 0 or greater than 7.

| Param  | Type                | Description                            |
| ------ | ------------------- | -------------------------------------- |
| o      | <code>Object</code> | The payload object.                    |
| o.days | <code>number</code> | The number of days to delete messages. |

<a name="GuildChannelManager"></a>

## GuildChannelManager ⇐ <code>ChannelManager</code>

Represents a manager for guild channels.

**Kind**: global class  
**Extends**: <code>ChannelManager</code>

- [GuildChannelManager](#GuildChannelManager) ⇐ <code>ChannelManager</code>
  - [new GuildChannelManager(guildId, client)](#new_GuildChannelManager_new)
  - [.cache](#GuildChannelManager+cache) ⇒ <code>Array</code>
  - [.create([options])](#GuildChannelManager+create) ⇒ <code>Promise.&lt;Channel&gt;</code>
  - [.modifyPosition([options])](#GuildChannelManager+modifyPosition) ⇒ <code>Promise</code>

<a name="new_GuildChannelManager_new"></a>

### new GuildChannelManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildChannelManager+cache"></a>

### guildChannelManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Array</code> - - The filtered cache objects for the current guild.  
<a name="GuildChannelManager+create"></a>

### guildChannelManager.create([options]) ⇒ <code>Promise.&lt;Channel&gt;</code>

Creates a new channel in the guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the created channel.

| Param            | Type                | Description                           |
| ---------------- | ------------------- | ------------------------------------- |
| [options]        | <code>Object</code> | The options for creating the channel. |
| [options.reason] | <code>string</code> | The reason for creating the channel.  |

<a name="GuildChannelManager+modifyPosition"></a>

### guildChannelManager.modifyPosition([options]) ⇒ <code>Promise</code>

Modifies the position of channels in a guild.

**Kind**: instance method of [<code>GuildChannelManager</code>](#GuildChannelManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the position is modified.

| Param            | Type                | Description                                 |
| ---------------- | ------------------- | ------------------------------------------- |
| [options]        | <code>Object</code> | The options for modifying the position.     |
| [options.reason] | <code>string</code> | The reason for modifying the position.      |
| [options.data]   | <code>Array</code>  | The data containing the channels to modify. |

<a name="GuildDiscoveryManager"></a>

## GuildDiscoveryManager ⇐ <code>Base</code>

Represents a manager for guild discovery settings.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildDiscoveryManager](#GuildDiscoveryManager) ⇐ <code>Base</code>
  - [new GuildDiscoveryManager(guildId, client)](#new_GuildDiscoveryManager_new)
  - _instance_
    - [.\_add(discovery)](#GuildDiscoveryManager+_add) ⇒ <code>GuildDiscovery</code> \| <code>null</code>
    - [.fetch([guild])](#GuildDiscoveryManager+fetch) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>
    - [.edit(guild, options)](#GuildDiscoveryManager+edit) ⇒ <code>Promise</code>
  - _static_
    - [.transformPayload(payload)](#GuildDiscoveryManager.transformPayload) ⇒ <code>Object</code>

<a name="new_GuildDiscoveryManager_new"></a>

### new GuildDiscoveryManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildDiscoveryManager+_add"></a>

### guildDiscoveryManager.\_add(discovery) ⇒ <code>GuildDiscovery</code> \| <code>null</code>

Adds a GuildDiscovery object to the guild's discovery settings.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>GuildDiscovery</code> \| <code>null</code> - - The added GuildDiscovery object or null if discovery is falsy.

| Param     | Type                                               | Description                           |
| --------- | -------------------------------------------------- | ------------------------------------- |
| discovery | <code>string</code> \| <code>GuildDiscovery</code> | The discovery object or the guild ID. |

<a name="GuildDiscoveryManager+fetch"></a>

### guildDiscoveryManager.fetch([guild]) ⇒ <code>Promise.&lt;DiscoveryMetadata&gt;</code>

Fetches the discovery metadata for a guild.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Promise.&lt;DiscoveryMetadata&gt;</code> - - A promise that resolves to the discovery metadata.  
**Throws**:

- <code>RangeError</code> - If the guild ID is not provided.

| Param   | Type                                      | Default                               | Description                                             |
| ------- | ----------------------------------------- | ------------------------------------- | ------------------------------------------------------- |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or Guild object to fetch the metadata for. |

<a name="GuildDiscoveryManager+edit"></a>

### guildDiscoveryManager.edit(guild, options) ⇒ <code>Promise</code>

Edits the discovery metadata for a guild.

**Kind**: instance method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the updated discovery metadata.  
**Throws**:

- <code>RangeError</code> If the guild is not provided.

| Param   | Type                                      | Description                                                      |
| ------- | ----------------------------------------- | ---------------------------------------------------------------- |
| guild   | <code>string</code> \| <code>Guild</code> | The guild ID or guild object to edit the discovery metadata for. |
| options | <code>Object</code>                       | The options to update the discovery metadata.                    |

<a name="GuildDiscoveryManager.transformPayload"></a>

### GuildDiscoveryManager.transformPayload(payload) ⇒ <code>Object</code>

Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>GuildDiscoveryManager</code>](#GuildDiscoveryManager)  
**Returns**: <code>Object</code> - - The transformed object.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| payload | <code>Object</code> | The payload object to transform. |

<a name="GuildEmojiManager"></a>

## GuildEmojiManager ⇐ <code>EmojiManager</code>

Represents a manager for guild emojis.

**Kind**: global class  
**Extends**: <code>EmojiManager</code>

- [GuildEmojiManager](#GuildEmojiManager) ⇐ <code>EmojiManager</code>
  - [new GuildEmojiManager(guildId, client)](#new_GuildEmojiManager_new)
  - [.cache](#GuildEmojiManager+cache) ⇒ <code>Array</code>
  - [.\_add(emojis, [options])](#GuildEmojiManager+_add) ⇒ <code>Promise</code>

<a name="new_GuildEmojiManager_new"></a>

### new GuildEmojiManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildEmojiManager+cache"></a>

### guildEmojiManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
<a name="GuildEmojiManager+_add"></a>

### guildEmojiManager.\_add(emojis, [options]) ⇒ <code>Promise</code>

Adds emojis to the guild's emoji collection.

**Kind**: instance method of [<code>GuildEmojiManager</code>](#GuildEmojiManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the emojis are added.

| Param           | Type                 | Default            | Description                              |
| --------------- | -------------------- | ------------------ | ---------------------------------------- |
| emojis          | <code>Array</code>   |                    | The emojis to add.                       |
| [options]       | <code>Object</code>  |                    | Additional options for adding emojis.    |
| [options.cache] | <code>boolean</code> | <code>true</code>  | Whether to cache the added emojis.       |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the addition of emojis. |

<a name="GuildIntegrationManager"></a>

## GuildIntegrationManager ⇐ <code>Base</code>

Represents a manager for guild integrations.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildIntegrationManager](#GuildIntegrationManager) ⇐ <code>Base</code>
  - [new GuildIntegrationManager(guildId, client)](#new_GuildIntegrationManager_new)
  - [.cache](#GuildIntegrationManager+cache) ⇒
  - [.\_add(integrations, [guildId], [options])](#GuildIntegrationManager+_add) ⇒ <code>Integration</code> \| <code>null</code>
  - [.fetch([options], [guild])](#GuildIntegrationManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
  - [.delete(options, reason)](#GuildIntegrationManager+delete) ⇒ <code>Promise</code>

<a name="new_GuildIntegrationManager_new"></a>

### new GuildIntegrationManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildIntegrationManager+cache"></a>

### guildIntegrationManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildIntegrationManager+_add"></a>

### guildIntegrationManager.\_add(integrations, [guildId], [options]) ⇒ <code>Integration</code> \| <code>null</code>

Adds an integration to the guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Integration</code> \| <code>null</code> - - The added integration or null if integrations is falsy.

| Param           | Type                                            | Default                                  | Description                                                           |
| --------------- | ----------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| integrations    | <code>string</code> \| <code>Integration</code> |                                          | The integration ID or the integration object.                         |
| [guildId]       | <code>string</code>                             | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the integration to.                        |
| [options]       | <code>object</code>                             | <code>{cache: true, force: false}</code> | Additional options for adding the integration.                        |
| [options.cache] | <code>boolean</code>                            | <code>true</code>                        | Whether to cache the integration.                                     |
| [options.force] | <code>boolean</code>                            | <code>false</code>                       | Whether to force adding the integration even if it is already cached. |

<a name="GuildIntegrationManager+fetch"></a>

### guildIntegrationManager.fetch([options], [guild]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Fetches the integrations for a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a cache object containing the fetched integrations.

| Param           | Type                                      | Default                               | Description                                                            |
| --------------- | ----------------------------------------- | ------------------------------------- | ---------------------------------------------------------------------- |
| [options]       | <code>Object</code>                       |                                       | Optional parameters for the fetch request.                             |
| [options.cache] | <code>boolean</code>                      |                                       | Whether to cache the fetched data.                                     |
| [options.force] | <code>boolean</code>                      |                                       | Whether to force the fetch request even if the data is already cached. |
| [guild]         | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild to fetch integrations for. Defaults to the current guild.    |

<a name="GuildIntegrationManager+delete"></a>

### guildIntegrationManager.delete(options, reason) ⇒ <code>Promise</code>

Deletes an integration from a guild.

**Kind**: instance method of [<code>GuildIntegrationManager</code>](#GuildIntegrationManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the integration is deleted and the deleted integration is added to the list of deleted integrations.

| Param               | Type                | Description                                           |
| ------------------- | ------------------- | ----------------------------------------------------- |
| options             | <code>Object</code> | The options for deleting the integration.             |
| options.guild       | <code>string</code> | The ID of the guild where the integration is located. |
| options.integration | <code>string</code> | The ID of the integration to delete.                  |
| reason              | <code>string</code> | The reason for deleting the integration.              |

<a name="GuildInviteManager"></a>

## GuildInviteManager ⇐ <code>Base</code>

Represents a manager for handling guild invites.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildInviteManager](#GuildInviteManager) ⇐ <code>Base</code>
  - [new GuildInviteManager(guild, client)](#new_GuildInviteManager_new)
  - [.cache](#GuildInviteManager+cache) ⇒
  - [.\_add(invites, [guild], [options])](#GuildInviteManager+_add) ⇒ <code>Invite</code> \| <code>null</code>
  - [.fetch([options])](#GuildInviteManager+fetch) ⇒ <code>Promise.&lt;CacheConstructor&gt;</code>
  - [.delete(invite, reason)](#GuildInviteManager+delete) ⇒ <code>Promise</code>

<a name="new_GuildInviteManager_new"></a>

### new GuildInviteManager(guild, client)

Constructs a new instance of the class.

| Param  | Type                | Description                                   |
| ------ | ------------------- | --------------------------------------------- |
| guild  | <code>Guild</code>  | The guild associated with the invite manager. |
| client | <code>Client</code> | The client instance.                          |

<a name="GuildInviteManager+cache"></a>

### guildInviteManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildInviteManager+_add"></a>

### guildInviteManager.\_add(invites, [guild], [options]) ⇒ <code>Invite</code> \| <code>null</code>

Adds an invite to the guild's invite cache.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Invite</code> \| <code>null</code> - The added invite or null if no invite is provided.

| Param           | Type                                       | Default                                  | Description                                                  |
| --------------- | ------------------------------------------ | ---------------------------------------- | ------------------------------------------------------------ |
| invites         | <code>string</code> \| <code>Invite</code> |                                          | The invite code or Invite object to add.                     |
| [guild]         | <code>Guild</code>                         | <code>this.guild</code>                  | The guild to add the invite to.                              |
| [options]       | <code>Object</code>                        | <code>{cache: true, force: false}</code> | Additional options for adding the invite.                    |
| [options.cache] | <code>boolean</code>                       | <code>true</code>                        | Whether to cache the invite.                                 |
| [options.force] | <code>boolean</code>                       | <code>false</code>                       | Whether to force the retrieval of the invite from the cache. |

<a name="GuildInviteManager+fetch"></a>

### guildInviteManager.fetch([options]) ⇒ <code>Promise.&lt;CacheConstructor&gt;</code>

Fetches guild invites from the API and returns a new cache constructor with the fetched data.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Promise.&lt;CacheConstructor&gt;</code> - A promise that resolves to a new cache constructor with the fetched data.

| Param           | Type                 | Description                                |
| --------------- | -------------------- | ------------------------------------------ |
| [options]       | <code>Object</code>  | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> | Whether to use cached data or not.         |
| [options.force] | <code>boolean</code> | Whether to force a fresh fetch or not.     |

<a name="GuildInviteManager+delete"></a>

### guildInviteManager.delete(invite, reason) ⇒ <code>Promise</code>

Deletes an invitation with the specified code and reason.

**Kind**: instance method of [<code>GuildInviteManager</code>](#GuildInviteManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the deleted invitation.  
**Throws**:

- <code>RangeError</code> If no invitation code is specified.

| Param  | Type                                       | Description                              |
| ------ | ------------------------------------------ | ---------------------------------------- |
| invite | <code>string</code> \| <code>object</code> | The invitation code or object to delete. |
| reason | <code>string</code>                        | The reason for deleting the invitation.  |

<a name="GuildManager"></a>

## GuildManager ⇐ <code>Base</code>

Represents a manager for guild-related operations.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildManager](#GuildManager) ⇐ <code>Base</code>
  - [new GuildManager(client, websocket)](#new_GuildManager_new)
  - _instance_
    - [.cache](#GuildManager+cache) ⇒
    - [.\_add(guilds, [options])](#GuildManager+_add) ⇒ <code>Guild</code> \| <code>null</code>
    - [.create(options)](#GuildManager+create) ⇒ <code>Promise</code>
    - [.fetch(guild, options)](#GuildManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.\_fetchId(guild, [options])](#GuildManager+_fetchId) ⇒ <code>Promise.&lt;string&gt;</code>
    - [.edit(guilds, [options])](#GuildManager+edit) ⇒ <code>Promise.&lt;Guild&gt;</code>
    - [.delete(guild)](#GuildManager+delete) ⇒ <code>Promise.&lt;Guild&gt;</code>
    - [.fetchPreview(guild)](#GuildManager+fetchPreview) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>
    - [.modifyMFALevel(guild, [options])](#GuildManager+modifyMFALevel) ⇒ <code>Promise.&lt;Guild&gt;</code>
  - _static_
    - [.transformPayload(payload)](#GuildManager.transformPayload) ⇒ <code>Object</code>
    - [.transformOptions(o)](#GuildManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildManager_new"></a>

### new GuildManager(client, websocket)

Constructs a new instance of the class.

| Param     | Type                   | Description           |
| --------- | ---------------------- | --------------------- |
| client    | <code>Client</code>    | The client object.    |
| websocket | <code>WebSocket</code> | The WebSocket object. |

<a name="GuildManager+cache"></a>

### guildManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>GuildManager</code>](#GuildManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildManager+_add"></a>

### guildManager.\_add(guilds, [options]) ⇒ <code>Guild</code> \| <code>null</code>

Adds a guild to the cache and returns the guild object.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Guild</code> \| <code>null</code> - The guild object that was added to the cache, or null if the guild is not provided.

| Param           | Type                                      | Default            | Description                                                               |
| --------------- | ----------------------------------------- | ------------------ | ------------------------------------------------------------------------- |
| guilds          | <code>string</code> \| <code>Guild</code> |                    | The guild ID or the guild object to add.                                  |
| [options]       | <code>object</code>                       |                    | Additional options for adding the guild.                                  |
| [options.cache] | <code>boolean</code>                      | <code>true</code>  | Whether to cache the guild object.                                        |
| [options.force] | <code>boolean</code>                      | <code>false</code> | Whether to force adding the guild even if it already exists in the cache. |

<a name="GuildManager+create"></a>

### guildManager.create(options) ⇒ <code>Promise</code>

Creates a new guild with the given options.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created guild.

| Param   | Type                | Description                         |
| ------- | ------------------- | ----------------------------------- |
| options | <code>Object</code> | The options for creating the guild. |

<a name="GuildManager+fetch"></a>

### guildManager.fetch(guild, options) ⇒ <code>Promise.&lt;Cache&gt;</code>

Fetches guild information from the Discord API.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)

| Param          | Type                                       | Description                                                                |
| -------------- | ------------------------------------------ | -------------------------------------------------------------------------- |
| guild          | <code>string</code> \| <code>object</code> | The guild ID or guild object to fetch.                                     |
| options        | <code>object</code>                        | Additional options for the fetch request.                                  |
| options.cache  | <code>boolean</code>                       | Whether to cache the fetched guild information.                            |
| options.force  | <code>boolean</code>                       | Whether to force fetch the guild information even if it is already cached. |
| options.before | <code>string</code>                        | The ID of the guild to fetch guilds before.                                |
| options.after  | <code>string</code>                        | The ID of the guild to fetch guilds after.                                 |
| options.limit  | <code>number</code>                        | The maximum number of guilds to fetch.                                     |

<a name="GuildManager+_fetchId"></a>

### guildManager.\_fetchId(guild, [options]) ⇒ <code>Promise.&lt;string&gt;</code>

Fetches the ID of a guild asynchronously.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - - A promise that resolves with the fetched guild ID.

| Param                | Type                                      | Description                                                  |
| -------------------- | ----------------------------------------- | ------------------------------------------------------------ |
| guild                | <code>string</code> \| <code>Guild</code> | The guild or guild ID to fetch the ID for.                   |
| [options]            | <code>Object</code>                       | Additional options for the fetch.                            |
| [options.cache]      | <code>boolean</code>                      | Whether to cache the fetched ID.                             |
| [options.force]      | <code>boolean</code>                      | Whether to force the fetch even if the ID is already cached. |
| [options.withCounts] | <code>boolean</code>                      | Whether to include counts in the fetch query.                |

<a name="GuildManager+edit"></a>

### guildManager.edit(guilds, [options]) ⇒ <code>Promise.&lt;Guild&gt;</code>

Edits a guild with the given options.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - A promise that resolves with the edited guild.

| Param            | Type                                      | Description                                      |
| ---------------- | ----------------------------------------- | ------------------------------------------------ |
| guilds           | <code>string</code> \| <code>Guild</code> | The ID or the Guild object of the guild to edit. |
| [options]        | <code>Object</code>                       | The options to edit the guild with.              |
| [options.reason] | <code>string</code>                       | The reason for the edit.                         |

<a name="GuildManager+delete"></a>

### guildManager.delete(guild) ⇒ <code>Promise.&lt;Guild&gt;</code>

Deletes a guild from the server.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - - The deleted guild.

| Param | Type                                      | Description                                                      |
| ----- | ----------------------------------------- | ---------------------------------------------------------------- |
| guild | <code>string</code> \| <code>Guild</code> | The guild to delete. Can be either a guild ID or a Guild object. |

<a name="GuildManager+fetchPreview"></a>

### guildManager.fetchPreview(guild) ⇒ <code>Promise.&lt;GuildPreview&gt;</code>

Fetches the preview information for a guild.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;GuildPreview&gt;</code> - - A promise that resolves to a GuildPreview object.

| Param | Type                                      | Description                   |
| ----- | ----------------------------------------- | ----------------------------- |
| guild | <code>string</code> \| <code>Guild</code> | The guild ID or guild object. |

<a name="GuildManager+modifyMFALevel"></a>

### guildManager.modifyMFALevel(guild, [options]) ⇒ <code>Promise.&lt;Guild&gt;</code>

Modifies the MFA (Multi-Factor Authentication) level for a guild.

**Kind**: instance method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Promise.&lt;Guild&gt;</code> - A promise that resolves with the modified guild.  
**Throws**:

- <code>RangeError</code> If no guild ID is specified.

| Param              | Type                                       | Description                              |
| ------------------ | ------------------------------------------ | ---------------------------------------- |
| guild              | <code>string</code> \| <code>Guild</code>  | The guild or guild ID to modify.         |
| [options]          | <code>Object</code>                        | Additional options for the modification. |
| [options.reason]   | <code>string</code>                        | The reason for the modification.         |
| [options.mfaLevel] | <code>string</code> \| <code>number</code> | The new MFA level to set for the guild.  |

<a name="GuildManager.transformPayload"></a>

### GuildManager.transformPayload(payload) ⇒ <code>Object</code>

Transforms the given payload object into a new format.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Object</code> - - The transformed payload object.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| payload | <code>Object</code> | The payload object to transform. |

<a name="GuildManager.transformOptions"></a>

### GuildManager.transformOptions(o) ⇒ <code>Object</code>

Transforms the options object by extracting the "before" and "after" properties
and setting them to their corresponding IDs if they are strings, or undefined if they
are not provided. The "limit" property is set to 200 if it is not provided.

**Kind**: static method of [<code>GuildManager</code>](#GuildManager)  
**Returns**: <code>Object</code> - - The transformed options object.

| Param      | Type                | Description                                  |
| ---------- | ------------------- | -------------------------------------------- |
| o          | <code>Object</code> | The options object.                          |
| [o.before] | <code>string</code> | The "before" property of the options object. |
| [o.after]  | <code>string</code> | The "after" property of the options object.  |
| [o.limit]  | <code>number</code> | The "limit" property of the options object.  |

<a name="GuildMemberManager"></a>

## GuildMemberManager ⇐ <code>Base</code>

Represents a manager for guild members.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildMemberManager](#GuildMemberManager) ⇐ <code>Base</code>
  - [new GuildMemberManager(guildId, client)](#new_GuildMemberManager_new)
  - _instance_
    - [.cache](#GuildMemberManager+cache) ⇒
    - [.\_add(members, [guildId], [options])](#GuildMemberManager+_add) ⇒ <code>GuildMember</code> \| <code>null</code>
    - [.fetch(member, options)](#GuildMemberManager+fetch)
    - [.list([options])](#GuildMemberManager+list) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.search(options)](#GuildMemberManager+search) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.kick(member, reason)](#GuildMemberManager+kick) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
    - [.ban(member, [options])](#GuildMemberManager+ban) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
    - [.unban(user, reason)](#GuildMemberManager+unban) ⇒ <code>User</code>
    - [.edit(member, [options])](#GuildMemberManager+edit) ⇒ <code>Promise.&lt;GuildMember&gt;</code>
    - [.\_fetchId(member, [options])](#GuildMemberManager+_fetchId) ⇒ <code>Promise.&lt;Object&gt;</code>
  - _static_
    - [.transformTimeout(date)](#GuildMemberManager.transformTimeout) ⇒ <code>string</code> \| <code>null</code>
    - [.transformOptions(options, [edit])](#GuildMemberManager.transformOptions) ⇒ <code>Object</code>
    - [.transformPayload(payload)](#GuildMemberManager.transformPayload) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code>

<a name="new_GuildMemberManager_new"></a>

### new GuildMemberManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildMemberManager+cache"></a>

### guildMemberManager.cache ⇒

Returns the cache object.

**Kind**: instance property of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: The cache object.  
<a name="GuildMemberManager+_add"></a>

### guildMemberManager.\_add(members, [guildId], [options]) ⇒ <code>GuildMember</code> \| <code>null</code>

Adds a member to the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>GuildMember</code> \| <code>null</code> - The added member object

| Param           | Type                                            | Default                                  | Description                                                                                     |
| --------------- | ----------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------------------- |
| members         | <code>string</code> \| <code>GuildMember</code> |                                          | The member to add. Can be either a string representing the member's ID or a GuildMember object. |
| [guildId]       | <code>string</code>                             | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the member to.                                                       |
| [options]       | <code>object</code>                             | <code>{cache: true, force: false}</code> | Additional options for adding the member.                                                       |
| [options.cache] | <code>boolean</code>                            | <code>true</code>                        | Whether to cache the member object.                                                             |
| [options.force] | <code>boolean</code>                            | <code>false</code>                       | Whether to force adding the member even if it already exists in the cache.                      |

<a name="GuildMemberManager+fetch"></a>

### guildMemberManager.fetch(member, options)

Fetches guild members from the server.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)

| Param               | Type                                       | Default                                 | Description                                                         |
| ------------------- | ------------------------------------------ | --------------------------------------- | ------------------------------------------------------------------- |
| member              | <code>string</code> \| <code>object</code> |                                         | The member to fetch. Can be a member ID or a member object.         |
| options             | <code>object</code>                        |                                         | Additional options for the fetch.                                   |
| [options.cache]     | <code>boolean</code>                       | <code>true</code>                       | Whether to cache the fetched members.                               |
| [options.force]     | <code>boolean</code>                       | <code>false</code>                      | Whether to force fetch the members even if they are already cached. |
| [options.query]     | <code>string</code>                        | <code>&quot;\&quot;\&quot;&quot;</code> | A query string to filter the members.                               |
| [options.limit]     | <code>number</code>                        | <code>1000</code>                       | The maximum number of members to fetch.                             |
| [options.presences] | <code>boolean</code>                       |                                         | Whether to include                                                  |

<a name="GuildMemberManager+list"></a>

### guildMemberManager.list([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Retrieves a list of members from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a Cache object containing the retrieved members.

| Param           | Type                | Default         | Description                                |
| --------------- | ------------------- | --------------- | ------------------------------------------ |
| [options]       | <code>Object</code> |                 | The options for listing members.           |
| [options.limit] | <code>number</code> | <code>50</code> | The maximum number of members to retrieve. |

<a name="GuildMemberManager+search"></a>

### guildMemberManager.search(options) ⇒ <code>Promise.&lt;Cache&gt;</code>

Searches for members in a guild based on the provided query.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A Promise that resolves to a Cache object containing the search results.  
**Throws**:

- <code>RangeError</code> If the query is not provided.

| Param           | Type                | Default         | Description                              |
| --------------- | ------------------- | --------------- | ---------------------------------------- |
| options         | <code>Object</code> |                 | The search options.                      |
| options.query   | <code>string</code> |                 | The query to search for.                 |
| [options.limit] | <code>number</code> | <code>50</code> | The maximum number of results to return. |

<a name="GuildMemberManager+kick"></a>

### guildMemberManager.kick(member, reason) ⇒ <code>Promise.&lt;GuildMember&gt;</code>

Kicks a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - - The deleted member object.  
**Throws**:

- <code>RangeError</code> - If a valid GuildMember is not specified.

| Param  | Type                                            | Description                                                                                      |
| ------ | ----------------------------------------------- | ------------------------------------------------------------------------------------------------ |
| member | <code>string</code> \| <code>GuildMember</code> | The member to kick. Can be either a string representing the member's ID or a GuildMember object. |
| reason | <code>string</code>                             | The reason for kicking the member. Optional.                                                     |

<a name="GuildMemberManager+ban"></a>

### guildMemberManager.ban(member, [options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>

Bans a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - - The banned member.

| Param     | Type                     | Description                     |
| --------- | ------------------------ | ------------------------------- |
| member    | <code>GuildMember</code> | The member to ban.              |
| [options] | <code>Object</code>      | Additional options for the ban. |

<a name="GuildMemberManager+unban"></a>

### guildMemberManager.unban(user, reason) ⇒ <code>User</code>

Unbans a user from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>User</code> - - The unbanned user.  
**Throws**:

- <code>Error</code> - If the user or guild is not found.

| Param  | Type                | Description                        |
| ------ | ------------------- | ---------------------------------- |
| user   | <code>User</code>   | The user to unban.                 |
| reason | <code>string</code> | The reason for unbanning the user. |

<a name="GuildMemberManager+edit"></a>

### guildMemberManager.edit(member, [options]) ⇒ <code>Promise.&lt;GuildMember&gt;</code>

Edits a guild member with the specified options.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;GuildMember&gt;</code> - A promise that resolves with the edited GuildMember object.

| Param            | Type                                            | Description                                                            |
| ---------------- | ----------------------------------------------- | ---------------------------------------------------------------------- |
| member           | <code>string</code> \| <code>GuildMember</code> | The member to edit. Can be either a member ID or a GuildMember object. |
| [options]        | <code>Object</code>                             | The options for editing the member.                                    |
| [options.reason] | <code>string</code>                             | The reason for the edit.                                               |

<a name="GuildMemberManager+_fetchId"></a>

### guildMemberManager.\_fetchId(member, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>

Fetches the ID of a member from the guild.

**Kind**: instance method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the fetched member object.

| Param           | Type                                       | Default           | Description                                                      |
| --------------- | ------------------------------------------ | ----------------- | ---------------------------------------------------------------- |
| member          | <code>string</code> \| <code>Object</code> |                   | The member object or the ID of the member.                       |
| [options]       | <code>Object</code>                        |                   | Additional options for the fetch.                                |
| [options.force] | <code>boolean</code>                       |                   | Whether to force the fetch even if the member is already cached. |
| [options.cache] | <code>boolean</code>                       | <code>true</code> | Whether to cache the fetched member.                             |

<a name="GuildMemberManager.transformTimeout"></a>

### GuildMemberManager.transformTimeout(date) ⇒ <code>string</code> \| <code>null</code>

Transforms a given date into an ISO string format.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>string</code> \| <code>null</code> - - The transformed date in ISO string format, or null if the input is null.

| Param | Type                                                          | Description            |
| ----- | ------------------------------------------------------------- | ---------------------- |
| date  | <code>Date</code> \| <code>string</code> \| <code>null</code> | The date to transform. |

<a name="GuildMemberManager.transformOptions"></a>

### GuildMemberManager.transformOptions(options, [edit]) ⇒ <code>Object</code>

Transforms the given options object based on the provided parameters.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>Object</code> - - The transformed options object.

| Param   | Type                 | Default            | Description                                                   |
| ------- | -------------------- | ------------------ | ------------------------------------------------------------- |
| options | <code>Object</code>  |                    | The options object to transform.                              |
| [edit]  | <code>boolean</code> | <code>false</code> | Indicates whether the transformation is for editing purposes. |

<a name="GuildMemberManager.transformPayload"></a>

### GuildMemberManager.transformPayload(payload) ⇒ <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code>

Transforms the given payload into a new format.

**Kind**: static method of [<code>GuildMemberManager</code>](#GuildMemberManager)  
**Returns**: <code>string</code> \| <code>Array.&lt;string&gt;</code> \| <code>undefined</code> - - The transformed payload.

| Param   | Type             | Description               |
| ------- | ---------------- | ------------------------- |
| payload | <code>any</code> | The payload to transform. |

<a name="GuildMemberRoleManager"></a>

## GuildMemberRoleManager ⇐ <code>RoleManager</code>

Represents a manager for handling roles of a guild member.

**Kind**: global class  
**Extends**: <code>RoleManager</code>

- [GuildMemberRoleManager](#GuildMemberRoleManager) ⇐ <code>RoleManager</code>
  - [new GuildMemberRoleManager(guildId, member, client)](#new_GuildMemberRoleManager_new)
  - _instance_
    - [.highest](#GuildMemberRoleManager+highest) ⇒
    - [.cache](#GuildMemberRoleManager+cache) ⇒ <code>Array</code>
    - [.add(roles, reason)](#GuildMemberRoleManager+add) ⇒ <code>Promise.&lt;void&gt;</code>
    - [.remove(roles, reason)](#GuildMemberRoleManager+remove) ⇒ <code>Promise.&lt;null&gt;</code>
    - [.set(roles, reason)](#GuildMemberRoleManager+set) ⇒ <code>Promise.&lt;void&gt;</code>
  - _static_
    - [.transformRole(role)](#GuildMemberRoleManager.transformRole) ⇒ <code>Array.&lt;string&gt;</code>

<a name="new_GuildMemberRoleManager_new"></a>

### new GuildMemberRoleManager(guildId, member, client)

Constructs a new instance of the class.

| Param   | Type                     | Description              |
| ------- | ------------------------ | ------------------------ |
| guildId | <code>string</code>      | The ID of the guild.     |
| member  | <code>GuildMember</code> | The guild member object. |
| client  | <code>Client</code>      | The client object.       |

<a name="GuildMemberRoleManager+highest"></a>

### guildMemberRoleManager.highest ⇒

Get the highest positioned item from the cache collection.

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: The highest positioned item from the cache collection.  
<a name="GuildMemberRoleManager+cache"></a>

### guildMemberRoleManager.cache ⇒ <code>Array</code>

Retrieves the cache of objects, filtered based on the guild ID and member roles.

**Kind**: instance property of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that match the guild ID or are included in the member roles.  
<a name="GuildMemberRoleManager+add"></a>

### guildMemberRoleManager.add(roles, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Adds roles to a member in a guild.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the roles have been added.  
**Throws**:

- <code>RangeError</code> If an invalid role is specified or if the role cache is empty.

| Param  | Type                                                        | Description                                                          |
| ------ | ----------------------------------------------------------- | -------------------------------------------------------------------- |
| roles  | <code>Array.&lt;string&gt;</code> \| <code>RaidenCol</code> | The roles to add. Can be an array of role IDs or a RaidenCol object. |
| reason | <code>string</code>                                         | The reason for adding the roles.                                     |

<a name="GuildMemberRoleManager+remove"></a>

### guildMemberRoleManager.remove(roles, reason) ⇒ <code>Promise.&lt;null&gt;</code>

Removes the specified roles from the member.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;null&gt;</code> - A promise that resolves to null when the roles have been removed.

| Param  | Type                                                        | Description                                                             |
| ------ | ----------------------------------------------------------- | ----------------------------------------------------------------------- |
| roles  | <code>Array.&lt;string&gt;</code> \| <code>RaidenCol</code> | The roles to remove. Can be an array of role IDs or a RaidenCol object. |
| reason | <code>string</code>                                         | The reason for removing the roles.                                      |

<a name="GuildMemberRoleManager+set"></a>

### guildMemberRoleManager.set(roles, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Sets the roles for a guild member.

**Kind**: instance method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the roles are set.

| Param  | Type                              | Description                            |
| ------ | --------------------------------- | -------------------------------------- |
| roles  | <code>Array.&lt;string&gt;</code> | The roles to set for the guild member. |
| reason | <code>string</code>               | The reason for setting the roles.      |

<a name="GuildMemberRoleManager.transformRole"></a>

### GuildMemberRoleManager.transformRole(role) ⇒ <code>Array.&lt;string&gt;</code>

Transforms the given role into an array of role IDs.

**Kind**: static method of [<code>GuildMemberRoleManager</code>](#GuildMemberRoleManager)  
**Returns**: <code>Array.&lt;string&gt;</code> - - An array of role IDs.

| Param | Type                                          | Description            |
| ----- | --------------------------------------------- | ---------------------- |
| role  | <code>RaidenCol</code> \| <code>string</code> | The role to transform. |

<a name="GuildMemberVerificationManager"></a>

## GuildMemberVerificationManager ⇐ <code>Base</code>

Represents a manager for guild member verification settings.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildMemberVerificationManager](#GuildMemberVerificationManager) ⇐ <code>Base</code>
  - [new GuildMemberVerificationManager(guildId, client)](#new_GuildMemberVerificationManager_new)
  - _instance_
    - [.fetch([options])](#GuildMemberVerificationManager+fetch) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
    - [.edit([options])](#GuildMemberVerificationManager+edit) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>
  - _static_
    - [.createFormFields(fields)](#GuildMemberVerificationManager.createFormFields) ⇒ <code>Object</code>

<a name="new_GuildMemberVerificationManager_new"></a>

### new GuildMemberVerificationManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildMemberVerificationManager+fetch"></a>

### guildMemberVerificationManager.fetch([options]) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>

Fetches the member verification information for a guild.

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Promise.&lt;GuildMemberVerification&gt;</code> - - A promise that resolves with the fetched GuildMemberVerification object.

| Param                | Type                                       | Description                                           |
| -------------------- | ------------------------------------------ | ----------------------------------------------------- |
| [options]            | <code>Object</code>                        | The options for the fetch request.                    |
| [options.withGuild]  | <code>boolean</code>                       | Whether to include guild information in the response. |
| [options.inviteCode] | <code>string</code> \| <code>Object</code> | The invite code or object containing the invite code. |

<a name="GuildMemberVerificationManager+edit"></a>

### guildMemberVerificationManager.edit([options]) ⇒ <code>Promise.&lt;GuildMemberVerification&gt;</code>

Edits the member verification settings for the guild.

**Kind**: instance method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Promise.&lt;GuildMemberVerification&gt;</code> - A promise that resolves with the updated GuildMemberVerification object.

| Param                 | Type                              | Description                                             |
| --------------------- | --------------------------------- | ------------------------------------------------------- |
| [options]             | <code>Object</code>               | The options for the member verification settings.       |
| [options.enabled]     | <code>boolean</code>              | Whether member verification is enabled or not.          |
| [options.fields]      | <code>Array.&lt;Object&gt;</code> | An array of form field objects for member verification. |
| [options.description] | <code>string</code>               | The description for the member verification form.       |

<a name="GuildMemberVerificationManager.createFormFields"></a>

### GuildMemberVerificationManager.createFormFields(fields) ⇒ <code>Object</code>

Creates a form field object with the given fields.

**Kind**: static method of [<code>GuildMemberVerificationManager</code>](#GuildMemberVerificationManager)  
**Returns**: <code>Object</code> - - The created form field object.

| Param  | Type                | Description                                     |
| ------ | ------------------- | ----------------------------------------------- |
| fields | <code>Object</code> | The fields to include in the form field object. |

<a name="GuildPruneManager"></a>

## GuildPruneManager ⇐ <code>Base</code>

Represents a manager for pruning members in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildPruneManager](#GuildPruneManager) ⇐ <code>Base</code>
  - [new GuildPruneManager(guildid, client)](#new_GuildPruneManager_new)
  - _instance_
    - [.prune([options])](#GuildPruneManager+prune) ⇒ <code>boolean</code>
    - [.fetchCount([options])](#GuildPruneManager+fetchCount) ⇒ <code>Promise.&lt;number&gt;</code>
  - _static_
    - [.transformRoles(roles)](#GuildPruneManager.transformRoles) ⇒ <code>Array</code>
    - [.transformOptions(o)](#GuildPruneManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildPruneManager_new"></a>

### new GuildPruneManager(guildid, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildid | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildPruneManager+prune"></a>

### guildPruneManager.prune([options]) ⇒ <code>boolean</code>

Prunes (removes) inactive members from the guild based on the specified options.

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>boolean</code> - - True if the prune was successful, false otherwise.  
**Throws**:

- <code>Error</code> - If an error occurs during the prune process.

| Param            | Type                | Description               |
| ---------------- | ------------------- | ------------------------- |
| [options]        | <code>Object</code> | The options for pruning.  |
| [options.reason] | <code>string</code> | The reason for the prune. |

<a name="GuildPruneManager+fetchCount"></a>

### guildPruneManager.fetchCount([options]) ⇒ <code>Promise.&lt;number&gt;</code>

Fetches the count of pruned members in a guild based on the given options.

**Kind**: instance method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Promise.&lt;number&gt;</code> - - A promise that resolves to the prune count.

| Param     | Type                | Description                               |
| --------- | ------------------- | ----------------------------------------- |
| [options] | <code>Object</code> | The options for fetching the prune count. |

<a name="GuildPruneManager.transformRoles"></a>

### GuildPruneManager.transformRoles(roles) ⇒ <code>Array</code>

Transforms the given roles object into an array of role IDs.

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Array</code> - - An array of role IDs.

| Param | Type                                      | Description                    |
| ----- | ----------------------------------------- | ------------------------------ |
| roles | <code>Object</code> \| <code>Array</code> | The roles object to transform. |

<a name="GuildPruneManager.transformOptions"></a>

### GuildPruneManager.transformOptions(o) ⇒ <code>Object</code>

Transforms the options object for server deletion.

**Kind**: static method of [<code>GuildPruneManager</code>](#GuildPruneManager)  
**Returns**: <code>Object</code> - - The transformed options object.  
**Throws**:

- <code>RangeError</code> - If the days value is not between 1 and 30.

| Param   | Type                              | Description                                                       |
| ------- | --------------------------------- | ----------------------------------------------------------------- |
| o       | <code>Object</code>               | The options object.                                               |
| o.days  | <code>number</code>               | The number of days for server deletion. Must be between 1 and 30. |
| o.count | <code>boolean</code>              | Whether to include the complete prune count. Default is true.     |
| o.roles | <code>Array.&lt;string&gt;</code> | The roles to include in the deletion. Default is undefined.       |

<a name="GuildRoleManager"></a>

## GuildRoleManager ⇐ <code>RoleManager</code>

A class representing a manager for guild roles.

**Kind**: global class  
**Extends**: <code>RoleManager</code>

- [GuildRoleManager](#GuildRoleManager) ⇐ <code>RoleManager</code>
  - [new GuildRoleManager(guildId, client)](#new_GuildRoleManager_new)
  - [.highest](#GuildRoleManager+highest) ⇒
  - [.everyone](#GuildRoleManager+everyone) ⇒
  - [.cache](#GuildRoleManager+cache) ⇒ <code>Array</code>

<a name="new_GuildRoleManager_new"></a>

### new GuildRoleManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildRoleManager+highest"></a>

### guildRoleManager.highest ⇒

Get the highest role from the cache based on position.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The highest role object.  
<a name="GuildRoleManager+everyone"></a>

### guildRoleManager.everyone ⇒

Get the cached data for everyone in the guild.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: The cached data for everyone in the guild.  
<a name="GuildRoleManager+cache"></a>

### guildRoleManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildRoleManager</code>](#GuildRoleManager)  
**Returns**: <code>Array</code> - - The filtered cache objects for the current guild.

<a name="GuildScheduledEventManager"></a>

## GuildScheduledEventManager ⇐ <code>ScheduledEventManager</code>

Represents a scheduled event manager for a specific guild.

**Kind**: global class  
**Extends**: <code>ScheduledEventManager</code>

- [GuildScheduledEventManager](#GuildScheduledEventManager) ⇐ <code>ScheduledEventManager</code>
  - [new GuildScheduledEventManager(guildId, client)](#new_GuildScheduledEventManager_new)
  - [.cache](#GuildScheduledEventManager+cache) ⇒ <code>Array</code>

<a name="new_GuildScheduledEventManager_new"></a>

### new GuildScheduledEventManager(guildId, client)

Constructs a new instance of the GuildScheduledEvent class.

| Param   | Type                | Description                                              |
| ------- | ------------------- | -------------------------------------------------------- |
| guildId | <code>string</code> | The ID of the guild associated with the scheduled event. |
| client  | <code>Client</code> | The Discord client object.                               |

<a name="GuildScheduledEventManager+cache"></a>

### guildScheduledEventManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildScheduledEventManager</code>](#GuildScheduledEventManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.

<a name="GuildScheduledEventUsersManager"></a>

## GuildScheduledEventUsersManager ⇐ <code>Base</code>

Represents a manager for handling guild scheduled event users.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildScheduledEventUsersManager](#GuildScheduledEventUsersManager) ⇐ <code>Base</code>
  - [new GuildScheduledEventUsersManager(event, guildId, client)](#new_GuildScheduledEventUsersManager_new)
  - _instance_
    - [.resolve(scheduledEventUser, event)](#GuildScheduledEventUsersManager+resolve) ⇒ <code>GuildScheduledEventUser</code> \| <code>null</code>
    - [.fetch([event], [options])](#GuildScheduledEventUsersManager+fetch) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>
  - _static_
    - [.transformQuery(query)](#GuildScheduledEventUsersManager.transformQuery) ⇒ <code>Object</code>

<a name="new_GuildScheduledEventUsersManager_new"></a>

### new GuildScheduledEventUsersManager(event, guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| event   | <code>Event</code>  | The event object.    |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildScheduledEventUsersManager+resolve"></a>

### guildScheduledEventUsersManager.resolve(scheduledEventUser, event) ⇒ <code>GuildScheduledEventUser</code> \| <code>null</code>

Resolves a scheduled event user and returns a GuildScheduledEventUser object.

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>GuildScheduledEventUser</code> \| <code>null</code> - - The resolved GuildScheduledEventUser object or null if scheduledEventUser is falsy.

| Param              | Type                                     | Description                          |
| ------------------ | ---------------------------------------- | ------------------------------------ |
| scheduledEventUser | <code>string</code> \| <code>null</code> | The scheduled event user to resolve. |
| event              | <code>object</code>                      | The event object.                    |

<a name="GuildScheduledEventUsersManager+fetch"></a>

### guildScheduledEventUsersManager.fetch([event], [options]) ⇒ <code>Promise.&lt;RaidenCol&gt;</code>

Fetches the users associated with a scheduled event in a guild.

**Kind**: instance method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>Promise.&lt;RaidenCol&gt;</code> - - A promise that resolves to a RaidenCol object containing the fetched users.

| Param     | Type                                      | Default                 | Description                               |
| --------- | ----------------------------------------- | ----------------------- | ----------------------------------------- |
| [event]   | <code>Event</code> \| <code>string</code> | <code>this.event</code> | The event object or event ID.             |
| [options] | <code>object</code>                       |                         | Additional options for the fetch request. |

<a name="GuildScheduledEventUsersManager.transformQuery"></a>

### GuildScheduledEventUsersManager.transformQuery(query) ⇒ <code>Object</code>

Transforms a query object into a formatted query object with default values and
proper type checking.

**Kind**: static method of [<code>GuildScheduledEventUsersManager</code>](#GuildScheduledEventUsersManager)  
**Returns**: <code>Object</code> - - The transformed query object.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| query | <code>Object</code> | The query object to transform. |

<a name="GuildStageInstanceManger"></a>

## GuildStageInstanceManger ⇐ <code>StageInstanceManager</code>

A class that extends the StageInstanceManager class and manages stage instances for a specific guild.

**Kind**: global class  
**Extends**: <code>StageInstanceManager</code>

- [GuildStageInstanceManger](#GuildStageInstanceManger) ⇐ <code>StageInstanceManager</code>
  - [new GuildStageInstanceManger(guildId, client)](#new_GuildStageInstanceManger_new)
  - [.cache](#GuildStageInstanceManger+cache) ⇒ <code>Array</code>

<a name="new_GuildStageInstanceManger_new"></a>

### new GuildStageInstanceManger(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildStageInstanceManger+cache"></a>

### guildStageInstanceManger.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildStageInstanceManger</code>](#GuildStageInstanceManger)  
**Returns**: <code>Array</code> - - An array of objects from the cache that belong to the current guild.

<a name="GuildStickerManager"></a>

## GuildStickerManager ⇐ <code>StickerManager</code>

Represents a sticker manager for a specific guild.

**Kind**: global class  
**Extends**: <code>StickerManager</code>

- [GuildStickerManager](#GuildStickerManager) ⇐ <code>StickerManager</code>
  - [new GuildStickerManager(guildId, client)](#new_GuildStickerManager_new)
  - [.cache](#GuildStickerManager+cache) ⇒ <code>Array</code>

<a name="new_GuildStickerManager_new"></a>

### new GuildStickerManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildStickerManager+cache"></a>

### guildStickerManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildStickerManager</code>](#GuildStickerManager)  
**Returns**: <code>Array</code> - - An array of objects from the cache that belong to the current guild.

<a name="GuildTemplateManager"></a>

## GuildTemplateManager ⇐ <code>Base</code>

Represents a manager for guild templates.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildTemplateManager](#GuildTemplateManager) ⇐ <code>Base</code>
  - [new GuildTemplateManager(guildId, client)](#new_GuildTemplateManager_new)
  - _instance_
    - [.cache](#GuildTemplateManager+cache) ⇒
    - [.\_add(templates, [options])](#GuildTemplateManager+_add) ⇒ <code>GuildTemplate</code> \| <code>null</code>
    - [.fetch([options])](#GuildTemplateManager+fetch) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.create(options)](#GuildTemplateManager+create) ⇒ <code>Promise.&lt;Object&gt;</code>
    - [.edit(code, [options])](#GuildTemplateManager+edit) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
    - [.sync(code)](#GuildTemplateManager+sync) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
    - [.delete(code)](#GuildTemplateManager+delete) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>
  - _static_
    - [.transformPayload(o)](#GuildTemplateManager.transformPayload) ⇒ <code>Object</code>

<a name="new_GuildTemplateManager_new"></a>

### new GuildTemplateManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildTemplateManager+cache"></a>

### guildTemplateManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: The Collection object representing the cache.  
<a name="GuildTemplateManager+_add"></a>

### guildTemplateManager.\_add(templates, [options]) ⇒ <code>GuildTemplate</code> \| <code>null</code>

Adds a template to the cache and returns the template object.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>GuildTemplate</code> \| <code>null</code> - The template object if it exists, otherwise null.

| Param           | Type                                       | Default            | Description                                                          |
| --------------- | ------------------------------------------ | ------------------ | -------------------------------------------------------------------- |
| templates       | <code>string</code> \| <code>Object</code> |                    | The template code or an object containing the template code.         |
| [options]       | <code>object</code>                        |                    | Optional options for the template.                                   |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the template or not.                                |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force the template to be retrieved from the cache or not. |

<a name="GuildTemplateManager+fetch"></a>

### guildTemplateManager.fetch([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Fetches templates from the server.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - - A promise that resolves to a cache object containing the fetched templates.

| Param           | Type                 | Default            | Description                                                                  |
| --------------- | -------------------- | ------------------ | ---------------------------------------------------------------------------- |
| [options]       | <code>Object</code>  |                    | Optional parameters for the fetch request.                                   |
| [options.cache] | <code>boolean</code> | <code>true</code>  | Whether to cache the fetched templates.                                      |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch request even if the templates are already cached. |

<a name="GuildTemplateManager+create"></a>

### guildTemplateManager.create(options) ⇒ <code>Promise.&lt;Object&gt;</code>

Creates a guild template with the given options.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves to the created guild template.

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| options | <code>Object</code> | The options for creating the guild template. |

<a name="GuildTemplateManager+edit"></a>

### guildTemplateManager.edit(code, [options]) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>

Edits a guild template with the given code and options.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - A promise that resolves with the edited GuildTemplate object.  
**Throws**:

- <code>RangeError</code> If the code is not provided.

| Param     | Type                                              | Description                                               |
| --------- | ------------------------------------------------- | --------------------------------------------------------- |
| code      | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object of the template to edit. |
| [options] | <code>Object</code>                               | The options for editing the template.                     |

<a name="GuildTemplateManager+sync"></a>

### guildTemplateManager.sync(code) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>

Synchronizes a guild template with the provided code.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - - A promise that resolves with the synchronized GuildTemplate.  
**Throws**:

- <code>RangeError</code> - If the code is not provided.

| Param | Type                                              | Description                               |
| ----- | ------------------------------------------------- | ----------------------------------------- |
| code  | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object to sync. |

<a name="GuildTemplateManager+delete"></a>

### guildTemplateManager.delete(code) ⇒ <code>Promise.&lt;GuildTemplate&gt;</code>

Deletes a guild template.

**Kind**: instance method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Promise.&lt;GuildTemplate&gt;</code> - A promise that resolves with the deleted template.  
**Throws**:

- <code>RangeError</code> If the code is not provided.

| Param | Type                                              | Description                                                 |
| ----- | ------------------------------------------------- | ----------------------------------------------------------- |
| code  | <code>string</code> \| <code>GuildTemplate</code> | The code or GuildTemplate object of the template to delete. |

<a name="GuildTemplateManager.transformPayload"></a>

### GuildTemplateManager.transformPayload(o) ⇒ <code>Object</code>

Transforms the given payload object by extracting the "name" and "description" properties.
If these properties are not present in the object, they will be set to undefined in the returned object.

**Kind**: static method of [<code>GuildTemplateManager</code>](#GuildTemplateManager)  
**Returns**: <code>Object</code> - - The transformed object with "name" and "description" properties.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| o     | <code>Object</code> | The payload object to transform. |

<a name="GuildVanityManager"></a>

## GuildVanityManager ⇐ <code>Base</code>

Represents a manager for handling guild vanity URLs.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildVanityManager](#GuildVanityManager) ⇐ <code>Base</code>
  - [new GuildVanityManager(guildId, client)](#new_GuildVanityManager_new)
  - [.fetch([guild])](#GuildVanityManager+fetch) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>
  - [.edit(code, [guild])](#GuildVanityManager+edit) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>

<a name="new_GuildVanityManager_new"></a>

### new GuildVanityManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildVanityManager+fetch"></a>

### guildVanityManager.fetch([guild]) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>

Fetches the vanity URL for the specified guild.

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: <code>Promise.&lt;GuildVanity&gt;</code> - - A promise that resolves to a GuildVanity object containing the vanity URL information.

| Param   | Type                                      | Default                               | Description                                                  |
| ------- | ----------------------------------------- | ------------------------------------- | ------------------------------------------------------------ |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or Guild object. Defaults to the current guild. |

<a name="GuildVanityManager+edit"></a>

### guildVanityManager.edit(code, [guild]) ⇒ <code>Promise.&lt;GuildVanity&gt;</code>

Edits the code for a guild's vanity URL.

**Kind**: instance method of [<code>GuildVanityManager</code>](#GuildVanityManager)  
**Returns**: <code>Promise.&lt;GuildVanity&gt;</code> - A promise that resolves with the updated GuildVanity object.

| Param   | Type                                      | Default                               | Description                                              |
| ------- | ----------------------------------------- | ------------------------------------- | -------------------------------------------------------- |
| code    | <code>string</code>                       |                                       | The new code for the vanity URL.                         |
| [guild] | <code>string</code> \| <code>Guild</code> | <code>&quot;this.guildId&quot;</code> | The guild ID or guild object to edit the vanity URL for. |

<a name="GuildVoiceStateManager"></a>

## GuildVoiceStateManager ⇐ <code>VoiceStateManager</code>

Represents a voice state manager for a specific guild.

**Kind**: global class  
**Extends**: <code>VoiceStateManager</code>

- [GuildVoiceStateManager](#GuildVoiceStateManager) ⇐ <code>VoiceStateManager</code>
  - [new GuildVoiceStateManager(guildId, client)](#new_GuildVoiceStateManager_new)
  - [.cache](#GuildVoiceStateManager+cache) ⇒ <code>Array</code>
  - [.edit(user, [options])](#GuildVoiceStateManager+edit) ⇒ <code>Promise.&lt;void&gt;</code>

<a name="new_GuildVoiceStateManager_new"></a>

### new GuildVoiceStateManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="GuildVoiceStateManager+cache"></a>

### guildVoiceStateManager.cache ⇒ <code>Array</code>

Retrieves the cache for the current guild.

**Kind**: instance property of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: <code>Array</code> - An array of objects from the cache that belong to the current guild.  
<a name="GuildVoiceStateManager+edit"></a>

### guildVoiceStateManager.edit(user, [options]) ⇒ <code>Promise.&lt;void&gt;</code>

Edits the voice state of a user in a guild.

**Kind**: instance method of [<code>GuildVoiceStateManager</code>](#GuildVoiceStateManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - A promise that resolves when the voice state is successfully edited.

| Param                    | Type                                        | Description                                      |
| ------------------------ | ------------------------------------------- | ------------------------------------------------ |
| user                     | <code>string</code> \| <code>User</code>    | The user or user ID to edit the voice state for. |
| [options]                | <code>Object</code>                         | The options for editing the voice state.         |
| [options.channel]        | <code>string</code> \| <code>Channel</code> | The channel or channel ID to move the user to.   |
| [options.suppress]       | <code>boolean</code>                        | Whether to suppress the user's audio.            |
| [options.requestToSpeak] | <code>Date</code>                           | The timestamp for the user's request to speak.   |

<a name="GuildWidgetManager"></a>

## GuildWidgetManager ⇐ <code>Base</code>

Represents a manager for guild widget settings.

**Kind**: global class  
**Extends**: <code>Base</code>

- [GuildWidgetManager](#GuildWidgetManager) ⇐ <code>Base</code>
  - [new GuildWidgetManager(guildId, client)](#new_GuildWidgetManager_new)
  - _instance_
    - [.fetchSettings()](#GuildWidgetManager+fetchSettings) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
    - [.fetch()](#GuildWidgetManager+fetch) ⇒ <code>Promise.&lt;GuildWidget&gt;</code>
    - [.edit([options])](#GuildWidgetManager+edit) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>
  - _static_
    - [.transformOptions(o)](#GuildWidgetManager.transformOptions) ⇒ <code>Object</code>

<a name="new_GuildWidgetManager_new"></a>

### new GuildWidgetManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client object.   |

<a name="GuildWidgetManager+fetchSettings"></a>

### guildWidgetManager.fetchSettings() ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>

Fetches the widget settings for the guild.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidgetSettings&gt;</code> - - A promise that resolves to an instance of GuildWidgetSettings.  
<a name="GuildWidgetManager+fetch"></a>

### guildWidgetManager.fetch() ⇒ <code>Promise.&lt;GuildWidget&gt;</code>

Fetches the guild widget data for the current guild.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidget&gt;</code> - A promise that resolves to a GuildWidget object representing the guild widget data.  
<a name="GuildWidgetManager+edit"></a>

### guildWidgetManager.edit([options]) ⇒ <code>Promise.&lt;GuildWidgetSettings&gt;</code>

Edits the guild widget settings with the provided options.

**Kind**: instance method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Promise.&lt;GuildWidgetSettings&gt;</code> - A promise that resolves with the updated guild widget settings.

| Param            | Type                | Description                                        |
| ---------------- | ------------------- | -------------------------------------------------- |
| [options]        | <code>Object</code> | The options for editing the guild widget settings. |
| [options.reason] | <code>string</code> | The reason for the edit.                           |

<a name="GuildWidgetManager.transformOptions"></a>

### GuildWidgetManager.transformOptions(o) ⇒ <code>Object</code>

Transforms the given options object into a new object with specific properties.

**Kind**: static method of [<code>GuildWidgetManager</code>](#GuildWidgetManager)  
**Returns**: <code>Object</code> - - The transformed object with the following properties:

- enabled: A boolean indicating whether the option is enabled.
- channel_id: A string representing the channel ID, or null if not provided.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| o     | <code>Object</code> | The options object to transform. |

<a name="MessageManager"></a>

## MessageManager ⇐ <code>Base</code>

Represents a message manager for a specific guild and channel.

**Kind**: global class  
**Extends**: <code>Base</code>

- [MessageManager](#MessageManager) ⇐ <code>Base</code>
  - [new MessageManager(guildId, channelId, client)](#new_MessageManager_new)
  - _instance_
    - [.guild](#MessageManager+guild) ⇒
    - [.cache](#MessageManager+cache) ⇒
    - [.\_add(messages, [guildId], [channelId], [options])](#MessageManager+_add)
    - [.send([channel], [options])](#MessageManager+send) ⇒ <code>Promise.&lt;Message&gt;</code>
    - [.bulkDelete([channel], [message], [reason])](#MessageManager+bulkDelete) ⇒ <code>Promise.&lt;Array&gt;</code>
    - [.delete(message, reason)](#MessageManager+delete) ⇒ <code>Promise.&lt;Message&gt;</code>
    - [.edit(message, options)](#MessageManager+edit) ⇒ <code>Promise.&lt;Message&gt;</code>
    - [.fetch(message, [options])](#MessageManager+fetch) ⇒ <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code>
    - [.\_fetchId(message, [cache], [force])](#MessageManager+_fetchId) ⇒ <code>Promise.&lt;object&gt;</code>
    - [.crosspost(channel, message)](#MessageManager+crosspost) ⇒ <code>Promise.&lt;Message&gt;</code>
    - [.react(message, emoji)](#MessageManager+react) ⇒ <code>Promise.&lt;void&gt;</code>
    - [.pins()](#MessageManager+pins) ⇒ <code>Promise.&lt;Cache&gt;</code>
    - [.unpin(message, reason)](#MessageManager+unpin) ⇒ <code>Promise.&lt;void&gt;</code>
    - [.pin(message, reason)](#MessageManager+pin) ⇒ <code>Promise.&lt;void&gt;</code>
  - _static_
    - [.transformOptions(o)](#MessageManager.transformOptions) ⇒ <code>Object</code> \| <code>null</code>

<a name="new_MessageManager_new"></a>

### new MessageManager(guildId, channelId, client)

Constructs a new instance of the class.

| Param     | Type                | Description            |
| --------- | ------------------- | ---------------------- |
| guildId   | <code>string</code> | The ID of the guild.   |
| channelId | <code>string</code> | The ID of the channel. |
| client    | <code>Client</code> | The client instance.   |

<a name="MessageManager+guild"></a>

### messageManager.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The guild object if found, otherwise null.  
<a name="MessageManager+cache"></a>

### messageManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>MessageManager</code>](#MessageManager)  
**Returns**: The Collection object representing the cache.  
<a name="MessageManager+_add"></a>

### messageManager.\_add(messages, [guildId], [channelId], [options])

Adds a message to the cache and returns the message object.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)

| Param           | Type                                        | Default                                  | Description                                                 |
| --------------- | ------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------- |
| messages        | <code>string</code> \| <code>Message</code> |                                          | The message or message ID to add to the cache.              |
| [guildId]       | <code>string</code>                         | <code>&quot;this.guildId&quot;</code>    | The ID of the guild the message belongs to.                 |
| [channelId]     | <code>string</code>                         | <code>&quot;this.channelId&quot;</code>  | The ID of the channel the message belongs to.               |
| [options]       | <code>object</code>                         | <code>{cache: true, force: false}</code> | Additional options for adding the message.                  |
| [options.cache] | <code>boolean</code>                        | <code>true</code>                        | Whether to cache the message.                               |
| [options.force] | <code>boolean</code>                        | <code>false</code>                       | Whether to force adding the message to the cache even if it |

<a name="MessageManager+send"></a>

### messageManager.send([channel], [options]) ⇒ <code>Promise.&lt;Message&gt;</code>

Sends a message to a specified channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the sent message.

| Param     | Type                                        | Default                                 | Description                                                                         |
| --------- | ------------------------------------------- | --------------------------------------- | ----------------------------------------------------------------------------------- |
| [channel] | <code>string</code> \| <code>Channel</code> | <code>&quot;this.channelId&quot;</code> | The channel to send the message to. Can be either a channel ID or a Channel object. |
| [options] | <code>object</code>                         |                                         | Additional options for the message.                                                 |

<a name="MessageManager+bulkDelete"></a>

### messageManager.bulkDelete([channel], [message], [reason]) ⇒ <code>Promise.&lt;Array&gt;</code>

Bulk deletes messages in a channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Array&gt;</code> - - A promise that resolves to an array of deleted message IDs and their corresponding Message objects.  
**Throws**:

- <code>RangeError</code>

| Param     | Type                                                                                                  | Default                                 | Description                                                                                                                                                    |
| --------- | ----------------------------------------------------------------------------------------------------- | --------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| [channel] | <code>string</code> \| <code>Channel</code>                                                           | <code>&quot;this.channelId&quot;</code> | The channel ID or Channel object where the messages should be deleted.                                                                                         |
| [message] | <code>Array.&lt;Message&gt;</code> \| <code>Map.&lt;string, Message&gt;</code> \| <code>number</code> | <code>[]</code>                         | The messages to be deleted. Can be an array of Message objects, a Map of Message objects, or a number representing the number of messages to fetch and delete. |
| [reason]  | <code>string</code>                                                                                   |                                         | The reason for deleting the messages.                                                                                                                          |

<a name="MessageManager+delete"></a>

### messageManager.delete(message, reason) ⇒ <code>Promise.&lt;Message&gt;</code>

Deletes a message from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - A promise that resolves to the deleted message object.

| Param   | Type                                        | Description                                                                       |
| ------- | ------------------------------------------- | --------------------------------------------------------------------------------- |
| message | <code>string</code> \| <code>Message</code> | The message to delete. Can be either the message ID or the message object itself. |
| reason  | <code>string</code>                         | The reason for deleting the message.                                              |

<a name="MessageManager+edit"></a>

### messageManager.edit(message, options) ⇒ <code>Promise.&lt;Message&gt;</code>

Edits a message with the given options.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves with the edited message.

| Param   | Type                                        | Description                             |
| ------- | ------------------------------------------- | --------------------------------------- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to edit.      |
| options | <code>Object</code>                         | The options to update the message with. |

<a name="MessageManager+fetch"></a>

### messageManager.fetch(message, [options]) ⇒ <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code>

Fetches a message or a list of messages from the server.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;(Message\|Map.&lt;string, Message&gt;)&gt;</code> - - A single message object if a message ID is provided, or a map of message IDs to message objects if options are provided.

| Param           | Type                                       | Default            | Description                                                                           |
| --------------- | ------------------------------------------ | ------------------ | ------------------------------------------------------------------------------------- |
| message         | <code>string</code> \| <code>object</code> |                    | The ID of the message to fetch or an object containing options for fetching messages. |
| [options]       | <code>object</code>                        |                    | Additional options for fetching messages.                                             |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched messages.                                                |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force fetch the messages even if they are already cached.                  |

<a name="MessageManager+_fetchId"></a>

### messageManager.\_fetchId(message, [cache], [force]) ⇒ <code>Promise.&lt;object&gt;</code>

Fetches a message by its ID from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - A promise that resolves to the fetched message object.

| Param   | Type                                       | Default            | Description                                                      |
| ------- | ------------------------------------------ | ------------------ | ---------------------------------------------------------------- |
| message | <code>string</code> \| <code>object</code> |                    | The ID of the message or the message object itself.              |
| [cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched message.                            |
| [force] | <code>boolean</code>                       | <code>false</code> | Whether to force fetch the message even if it is already cached. |

<a name="MessageManager+crosspost"></a>

### messageManager.crosspost(channel, message) ⇒ <code>Promise.&lt;Message&gt;</code>

Crossposts a message to a specified channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - - A promise that resolves to the crossposted message.

| Param   | Type                                        | Description                              |
| ------- | ------------------------------------------- | ---------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel to crosspost the message to. |
| message | <code>string</code> \| <code>Message</code> | The message to crosspost.                |

<a name="MessageManager+react"></a>

### messageManager.react(message, emoji) ⇒ <code>Promise.&lt;void&gt;</code>

Reacts to a message with the specified emoji.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the reaction is successfully added.

| Param   | Type                                        | Description                                                              |
| ------- | ------------------------------------------- | ------------------------------------------------------------------------ |
| message | <code>string</code> \| <code>Message</code> | The message to react to. Can be either a message ID or a Message object. |
| emoji   | <code>string</code>                         | The emoji to react with.                                                 |

<a name="MessageManager+pins"></a>

### messageManager.pins() ⇒ <code>Promise.&lt;Cache&gt;</code>

Retrieves the pinned messages in the current channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A Promise that resolves to a Cache object containing the pinned messages.  
<a name="MessageManager+unpin"></a>

### messageManager.unpin(message, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Unpins a message from the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the message is successfully unpinned.

| Param   | Type                                        | Description                           |
| ------- | ------------------------------------------- | ------------------------------------- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to unpin.   |
| reason  | <code>string</code>                         | The reason for unpinning the message. |

<a name="MessageManager+pin"></a>

### messageManager.pin(message, reason) ⇒ <code>Promise.&lt;void&gt;</code>

Pins a message in the channel.

**Kind**: instance method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the message is pinned.

| Param   | Type                                        | Description                         |
| ------- | ------------------------------------------- | ----------------------------------- |
| message | <code>string</code> \| <code>Message</code> | The message or message ID to pin.   |
| reason  | <code>string</code>                         | The reason for pinning the message. |

<a name="MessageManager.transformOptions"></a>

### MessageManager.transformOptions(o) ⇒ <code>Object</code> \| <code>null</code>

Transforms the given options object into a new object with specific properties.

**Kind**: static method of [<code>MessageManager</code>](#MessageManager)  
**Returns**: <code>Object</code> \| <code>null</code> - - The transformed object or null if the input is null.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| o     | <code>Object</code> | The options object to transform. |

<a name="PermissionOverwriteManager"></a>

## PermissionOverwriteManager ⇐ <code>Base</code>

Represents a manager for permission overwrites in a channel.

**Kind**: global class  
**Extends**: <code>Base</code>

- [PermissionOverwriteManager](#PermissionOverwriteManager) ⇐ <code>Base</code>
  - [new PermissionOverwriteManager(channelId, [overwrites], client)](#new_PermissionOverwriteManager_new)
  - _instance_
    - [.cache](#PermissionOverwriteManager+cache) ⇒ <code>Collection</code>
    - [.resolve(overwrites)](#PermissionOverwriteManager+resolve) ⇒ <code>PermissionOverwrite</code> \| <code>undefined</code>
    - [.create(user, overwrites, [options])](#PermissionOverwriteManager+create) ⇒ <code>Promise.&lt;void&gt;</code>
    - [.set(overwrites, reason)](#PermissionOverwriteManager+set) ⇒ <code>Promise</code>
    - [.edit(userOrRole, [options], [overwriteOptions])](#PermissionOverwriteManager+edit) ⇒ <code>Promise.&lt;Channel&gt;</code>
    - [.delete(userOrRole, reason)](#PermissionOverwriteManager+delete) ⇒ <code>Promise.&lt;Channel&gt;</code>
  - _static_
    - [.editOverwrites(existing, overwrites, type)](#PermissionOverwriteManager.editOverwrites) ⇒ <code>object</code>
    - [.transformOverwrites(existing, [overwrites], type)](#PermissionOverwriteManager.transformOverwrites) ⇒ <code>Object</code>

<a name="new_PermissionOverwriteManager_new"></a>

### new PermissionOverwriteManager(channelId, [overwrites], client)

Constructs a new instance of the Channel class.

| Param        | Type                | Description                        |
| ------------ | ------------------- | ---------------------------------- |
| channelId    | <code>string</code> | The ID of the channel.             |
| [overwrites] | <code>object</code> | The initial permission overwrites. |
| client       | <code>Client</code> | The client instance.               |

<a name="PermissionOverwriteManager+cache"></a>

### permissionOverwriteManager.cache ⇒ <code>Collection</code>

Get the cache collection.

**Kind**: instance property of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Collection</code> - - The cache collection.  
<a name="PermissionOverwriteManager+resolve"></a>

### permissionOverwriteManager.resolve(overwrites) ⇒ <code>PermissionOverwrite</code> \| <code>undefined</code>

Resolves the given `overwrites` parameter and returns a new `PermissionOverwrite` object.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>PermissionOverwrite</code> \| <code>undefined</code> - A new `PermissionOverwrite` object if `overwrites` is provided, otherwise `undefined`.

| Param      | Type                                                           | Description                                                                                                                    |
| ---------- | -------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------ |
| overwrites | <code>string</code> \| <code>PermissionOverwriteOptions</code> | The overwrites to resolve. Can be a string representing the ID of the overwrite or an object containing the overwrite options. |

<a name="PermissionOverwriteManager+create"></a>

### permissionOverwriteManager.create(user, overwrites, [options]) ⇒ <code>Promise.&lt;void&gt;</code>

Creates or edits permission overwrites for a user or role in a channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the permission overwrites are created or edited.  
**Throws**:

- <code>RangeError</code> - If no user or role is found.

| Param            | Type                                                          | Description                                                       |
| ---------------- | ------------------------------------------------------------- | ----------------------------------------------------------------- |
| user             | <code>User</code> \| <code>Role</code> \| <code>string</code> | The user or role to create or edit permission overwrites for.     |
| overwrites       | <code>PermissionOverwriteOptions</code>                       | The permission overwrites to apply.                               |
| [options]        | <code>CreateOptions</code>                                    | Additional options for creating or editing permission overwrites. |
| [options.reason] | <code>string</code>                                           | The reason for creating or editing the permission overwrites.     |

<a name="PermissionOverwriteManager+set"></a>

### permissionOverwriteManager.set(overwrites, reason) ⇒ <code>Promise</code>

Sets the permission overwrites for a channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise</code> - A promise that resolves when the permission overwrites are set.

| Param      | Type                | Description                                       |
| ---------- | ------------------- | ------------------------------------------------- |
| overwrites | <code>Array</code>  | An array of permission overwrite objects.         |
| reason     | <code>string</code> | The reason for setting the permission overwrites. |

<a name="PermissionOverwriteManager+edit"></a>

### permissionOverwriteManager.edit(userOrRole, [options], [overwriteOptions]) ⇒ <code>Promise.&lt;Channel&gt;</code>

Edits the permissions for a user or role in the channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the updated channel object.  
**Throws**:

- <code>RangeError</code> If no user or role is specified.

| Param                     | Type                                                          | Description                                           |
| ------------------------- | ------------------------------------------------------------- | ----------------------------------------------------- |
| userOrRole                | <code>string</code> \| <code>User</code> \| <code>Role</code> | The user or role to edit permissions for.             |
| [options]                 | <code>Object</code>                                           | The options for the permission overwrite.             |
| [overwriteOptions]        | <code>Object</code>                                           | The options for overwriting the permission overwrite. |
| [overwriteOptions.reason] | <code>string</code>                                           | The reason for the permission overwrite.              |
| [overwriteOptions.type]   | <code>string</code>                                           | The type of permission overwrite.                     |

<a name="PermissionOverwriteManager+delete"></a>

### permissionOverwriteManager.delete(userOrRole, reason) ⇒ <code>Promise.&lt;Channel&gt;</code>

Deletes the permission for a user or role in the channel.

**Kind**: instance method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the updated channel object.

| Param      | Type                                                          | Description                                    |
| ---------- | ------------------------------------------------------------- | ---------------------------------------------- |
| userOrRole | <code>string</code> \| <code>User</code> \| <code>Role</code> | The user or role to delete the permission for. |
| reason     | <code>string</code>                                           | The reason for deleting the permission.        |

<a name="PermissionOverwriteManager.editOverwrites"></a>

### PermissionOverwriteManager.editOverwrites(existing, overwrites, type) ⇒ <code>object</code>

Edits the existing overwrites with the provided overwrites and type.

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>object</code> - - The updated overwrites object.

| Param      | Type                                              | Description                     |
| ---------- | ------------------------------------------------- | ------------------------------- |
| existing   | <code>object</code>                               | The existing overwrites object. |
| overwrites | <code>object</code>                               | The new overwrites to apply.    |
| type       | <code>string</code> \| <code>OverwriteType</code> | The type of overwrite.          |

<a name="PermissionOverwriteManager.transformOverwrites"></a>

### PermissionOverwriteManager.transformOverwrites(existing, [overwrites], type) ⇒ <code>Object</code>

Transforms the existing overwrites with the provided overwrites and returns a new object
with the updated allow and deny properties.

**Kind**: static method of [<code>PermissionOverwriteManager</code>](#PermissionOverwriteManager)  
**Returns**: <code>Object</code> - - The transformed overwrites object.

| Param        | Type                | Description                     |
| ------------ | ------------------- | ------------------------------- |
| existing     | <code>Object</code> | The existing overwrites object. |
| [overwrites] | <code>Object</code> | The new overwrites to apply.    |
| type         | <code>string</code> | The type of the overwrites.     |

<a name="PresenceManager"></a>

## PresenceManager ⇐ <code>Base</code>

Represents a presence manager that handles the caching and retrieval of presence data.

**Kind**: global class  
**Extends**: <code>Base</code>

- [PresenceManager](#PresenceManager) ⇐ <code>Base</code>
  - [new PresenceManager(client)](#new_PresenceManager_new)
  - [.cache](#PresenceManager+cache) ⇒
  - [.\_add(presences, [options])](#PresenceManager+_add) ⇒ <code>Presence</code> \| <code>null</code>

<a name="new_PresenceManager_new"></a>

### new PresenceManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description          |
| ------ | ------------------- | -------------------- |
| client | <code>Client</code> | The client instance. |

<a name="PresenceManager+cache"></a>

### presenceManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: The Collection object representing the cache.  
<a name="PresenceManager+_add"></a>

### presenceManager.\_add(presences, [options]) ⇒ <code>Presence</code> \| <code>null</code>

Adds a presence to the cache and returns the presence object.

**Kind**: instance method of [<code>PresenceManager</code>](#PresenceManager)  
**Returns**: <code>Presence</code> \| <code>null</code> - The presence object that was added to the cache, or null if presences is falsy.

| Param           | Type                                         | Default            | Description                                                    |
| --------------- | -------------------------------------------- | ------------------ | -------------------------------------------------------------- |
| presences       | <code>string</code> \| <code>Presence</code> |                    | The presence object or the ID of the presence.                 |
| [options]       | <code>object</code>                          |                    | Additional options for adding the presence.                    |
| [options.cache] | <code>boolean</code>                         | <code>true</code>  | Whether to cache the presence object.                          |
| [options.force] | <code>boolean</code>                         | <code>false</code> | Whether to force the retrieval of the presence from the cache. |

<a name="ReactionManager"></a>

## ReactionManager ⇐ <code>Base</code>

A class representing a reaction manager for a specific message in a channel.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ReactionManager](#ReactionManager) ⇐ <code>Base</code>
  - [new ReactionManager(reactions, messageId, channelId, guildId, client)](#new_ReactionManager_new)
  - [.guild](#ReactionManager+guild) ⇒
  - [.cache](#ReactionManager+cache) ⇒
  - [.resolve(reaction)](#ReactionManager+resolve) ⇒ <code>MessageReaction</code>
  - [.removeAll()](#ReactionManager+removeAll) ⇒ <code>void</code>

<a name="new_ReactionManager_new"></a>

### new ReactionManager(reactions, messageId, channelId, guildId, client)

Constructs a new instance of the ReactionCollector class.

| Param     | Type                | Description                   |
| --------- | ------------------- | ----------------------------- |
| reactions | <code>Array</code>  | An array of reaction objects. |
| messageId | <code>string</code> | The ID of the message.        |
| channelId | <code>string</code> | The ID of the channel.        |
| guildId   | <code>string</code> | The ID of the guild.          |
| client    | <code>Client</code> | The client instance.          |

<a name="ReactionManager+guild"></a>

### reactionManager.guild ⇒

Retrieves the guild associated with this guildId.

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The guild object if found, otherwise null.  
<a name="ReactionManager+cache"></a>

### reactionManager.cache ⇒

Get the cache of reactions.

**Kind**: instance property of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: The cache of reactions.  
<a name="ReactionManager+resolve"></a>

### reactionManager.resolve(reaction) ⇒ <code>MessageReaction</code>

Resolves a reaction object and returns a new MessageReaction instance.

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)  
**Returns**: <code>MessageReaction</code> - A new MessageReaction instance with the resolved reaction object.

| Param    | Type                                                | Description                                                                           |
| -------- | --------------------------------------------------- | ------------------------------------------------------------------------------------- |
| reaction | <code>string</code> \| <code>MessageReaction</code> | The reaction object to resolve. Can be either a string or a MessageReaction instance. |

<a name="ReactionManager+removeAll"></a>

### reactionManager.removeAll() ⇒ <code>void</code>

Removes all reactions from a specific message in a channel.

**Kind**: instance method of [<code>ReactionManager</code>](#ReactionManager)

<a name="ReactionUserManager"></a>

## ReactionUserManager ⇐ <code>Base</code>

A class representing a manager for reaction users.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ReactionUserManager](#ReactionUserManager) ⇐ <code>Base</code>
  - [new ReactionUserManager(reaction, channelId, messageId, emoji, client)](#new_ReactionUserManager_new)
  - _instance_
    - [.cache](#ReactionUserManager+cache) ⇒
    - [.\_add(users, [options])](#ReactionUserManager+_add) ⇒ <code>User</code> \| <code>null</code>
    - [.fetch(options)](#ReactionUserManager+fetch) ⇒ <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code>
    - [.remove([user])](#ReactionUserManager+remove) ⇒ <code>Promise.&lt;Reaction&gt;</code>
  - _static_
    - [.transformOptions(o)](#ReactionUserManager.transformOptions) ⇒ <code>Object</code>

<a name="new_ReactionUserManager_new"></a>

### new ReactionUserManager(reaction, channelId, messageId, emoji, client)

Constructs a ReactionCollector instance.

| Param     | Type                  | Description                                        |
| --------- | --------------------- | -------------------------------------------------- |
| reaction  | <code>Reaction</code> | The reaction object.                               |
| channelId | <code>string</code>   | The ID of the channel where the reaction occurred. |
| messageId | <code>string</code>   | The ID of the message where the reaction occurred. |
| emoji     | <code>Emoji</code>    | The emoji that was reacted with.                   |
| client    | <code>Client</code>   | The client instance.                               |

<a name="ReactionUserManager+cache"></a>

### reactionUserManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: The Collection object representing the cache.  
<a name="ReactionUserManager+_add"></a>

### reactionUserManager.\_add(users, [options]) ⇒ <code>User</code> \| <code>null</code>

Adds a user to the collection of users.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>User</code> \| <code>null</code> - The added user object or null if no user is provided.

| Param           | Type                                     | Default            | Description                                                      |
| --------------- | ---------------------------------------- | ------------------ | ---------------------------------------------------------------- |
| users           | <code>User</code> \| <code>string</code> |                    | The user object or user ID to add.                               |
| [options]       | <code>Object</code>                      |                    | Additional options for adding the user.                          |
| [options.cache] | <code>boolean</code>                     | <code>true</code>  | Whether to cache the user object.                                |
| [options.force] | <code>boolean</code>                     | <code>false</code> | Whether to force fetching the user even if it is already cached. |

<a name="ReactionUserManager+fetch"></a>

### reactionUserManager.fetch(options) ⇒ <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code>

Fetches reaction users for a specific message and emoji.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Promise.&lt;Map.&lt;string, ReactionUser&gt;&gt;</code> - - A promise that resolves to a map of reaction users, where the keys are user IDs and the values are ReactionUser objects.

| Param           | Type                 | Default            | Description                                                            |
| --------------- | -------------------- | ------------------ | ---------------------------------------------------------------------- |
| options         | <code>Object</code>  |                    | The options for the fetch request.                                     |
| [options.cache] | <code>boolean</code> | <code>true</code>  | Whether to cache the fetched data.                                     |
| [options.force] | <code>boolean</code> | <code>false</code> | Whether to force the fetch request even if the data is already cached. |

<a name="ReactionUserManager+remove"></a>

### reactionUserManager.remove([user]) ⇒ <code>Promise.&lt;Reaction&gt;</code>

Removes a reaction from a message.

**Kind**: instance method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Promise.&lt;Reaction&gt;</code> - The removed reaction.  
**Throws**:

- <code>RangeError</code> If no user is found.

| Param  | Type                                     | Default                                      | Description                                                              |
| ------ | ---------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------ |
| [user] | <code>string</code> \| <code>User</code> | <code>&quot;this.client.user.id&quot;</code> | The user ID or User object of the user whose reaction should be removed. |

<a name="ReactionUserManager.transformOptions"></a>

### ReactionUserManager.transformOptions(o) ⇒ <code>Object</code>

Transforms the options object by extracting the "after" and "limit" properties.

**Kind**: static method of [<code>ReactionUserManager</code>](#ReactionUserManager)  
**Returns**: <code>Object</code> - - The transformed options object.

| Param | Type                | Description         |
| ----- | ------------------- | ------------------- |
| o     | <code>Object</code> | The options object. |

<a name="RoleManager"></a>

## RoleManager ⇐ <code>Base</code>

Represents a Role Manager that handles operations related to roles in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [RoleManager](#RoleManager) ⇐ <code>Base</code>
  - [new RoleManager(client)](#new_RoleManager_new)
  - _instance_
    - [.cache](#RoleManager+cache) ⇒
    - [.\_add(roles, [guildId], [options])](#RoleManager+_add) ⇒ <code>Role</code> \| <code>null</code>
    - [.fetch(roles, options)](#RoleManager+fetch) ⇒ <code>Promise</code>
    - [.create(options)](#RoleManager+create) ⇒ <code>Promise.&lt;Role&gt;</code>
    - [.edit(role, [options])](#RoleManager+edit) ⇒ <code>Promise.&lt;Role&gt;</code>
    - [.delete(role, reason)](#RoleManager+delete) ⇒ <code>Promise.&lt;Role&gt;</code>
    - [.clone([role])](#RoleManager+clone) ⇒ <code>Promise</code>
    - [.modifyPosition([options])](#RoleManager+modifyPosition) ⇒ <code>Promise</code>
  - _static_
    - [.transformPayload(o, [modifyPosition])](#RoleManager.transformPayload) ⇒ <code>Promise.&lt;object&gt;</code>

<a name="new_RoleManager_new"></a>

### new RoleManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="RoleManager+cache"></a>

### roleManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>RoleManager</code>](#RoleManager)  
**Returns**: The Collection object representing the cache.  
<a name="RoleManager+_add"></a>

### roleManager.\_add(roles, [guildId], [options]) ⇒ <code>Role</code> \| <code>null</code>

Adds a role to the cache and returns the role object.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Role</code> \| <code>null</code> - The role object that was added to the cache

| Param           | Type                                     | Default                                  | Description                                                                         |
| --------------- | ---------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------------- |
| roles           | <code>string</code> \| <code>Role</code> |                                          | The role ID or role object to add to the cache.                                     |
| [guildId]       | <code>string</code>                      | <code>&quot;this.guildId&quot;</code>    | The ID of the guild the role belongs to.                                            |
| [options]       | <code>object</code>                      | <code>{cache: true, force: false}</code> | Additional options for role caching.                                                |
| [options.cache] | <code>boolean</code>                     | <code>true</code>                        | Whether to cache the role object.                                                   |
| [options.force] | <code>boolean</code>                     | <code>false</code>                       | Whether to force fetching the role from the API even if it is already in the cache. |

<a name="RoleManager+fetch"></a>

### roleManager.fetch(roles, options) ⇒ <code>Promise</code>

Fetches roles from the server based on the provided roles and options.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - - A promise that resolves to the fetched roles.

| Param   | Type                                       | Description                                                                                 |
| ------- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| roles   | <code>string</code> \| <code>object</code> | The roles to fetch. Can be a string representing a role ID or an object containing options. |
| options | <code>object</code>                        | The options for fetching roles. Can contain properties like cache and force.                |

<a name="RoleManager+create"></a>

### roleManager.create(options) ⇒ <code>Promise.&lt;Role&gt;</code>

Creates a new role in the guild with the given options.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - A promise that resolves with the created role.

| Param            | Type                | Description                                |
| ---------------- | ------------------- | ------------------------------------------ |
| options          | <code>Object</code> | The options for creating the role.         |
| options.reason   | <code>string</code> | The reason for creating the role.          |
| options.position | <code>number</code> | The position of the role in the hierarchy. |

<a name="RoleManager+edit"></a>

### roleManager.edit(role, [options]) ⇒ <code>Promise.&lt;Role&gt;</code>

Edits a role in the guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - A promise that resolves with the edited role object.

| Param              | Type                                     | Description                              |
| ------------------ | ---------------------------------------- | ---------------------------------------- |
| role               | <code>string</code> \| <code>Role</code> | The role ID or role object to edit.      |
| [options]          | <code>Object</code>                      | Additional options for editing the role. |
| [options.reason]   | <code>string</code>                      | The reason for editing the role.         |
| [options.position] | <code>number</code>                      | The new position of the role.            |

<a name="RoleManager+delete"></a>

### roleManager.delete(role, reason) ⇒ <code>Promise.&lt;Role&gt;</code>

Deletes a role from the guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;Role&gt;</code> - - The deleted role.  
**Throws**:

- <code>Error</code> - If the role cannot be deleted.

| Param  | Type                                     | Description                                                       |
| ------ | ---------------------------------------- | ----------------------------------------------------------------- |
| role   | <code>string</code> \| <code>Role</code> | The role to delete. Can be either the role ID or the Role object. |
| reason | <code>string</code>                      | The reason for deleting the role.                                 |

<a name="RoleManager+clone"></a>

### roleManager.clone([role]) ⇒ <code>Promise</code>

Clones a role by creating a new instance of it.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - - A promise that resolves with the cloned role.  
**Throws**:

- <code>RangeError</code> - If the role is not found in the cache.

| Param  | Type                                       | Description                                                  |
| ------ | ------------------------------------------ | ------------------------------------------------------------ |
| [role] | <code>string</code> \| <code>Object</code> | The role to clone. Can be either a role ID or a role object. |

<a name="RoleManager+modifyPosition"></a>

### roleManager.modifyPosition([options]) ⇒ <code>Promise</code>

Modifies the position of roles in a guild.

**Kind**: instance method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the modified roles.

| Param            | Type                | Description                              |
| ---------------- | ------------------- | ---------------------------------------- |
| [options]        | <code>Object</code> | The options for modifying the position.  |
| [options.reason] | <code>string</code> | The reason for the modification.         |
| [options.data]   | <code>Array</code>  | The data containing the roles to modify. |

<a name="RoleManager.transformPayload"></a>

### RoleManager.transformPayload(o, [modifyPosition]) ⇒ <code>Promise.&lt;object&gt;</code>

Transforms the payload object based on the provided parameters.

**Kind**: static method of [<code>RoleManager</code>](#RoleManager)  
**Returns**: <code>Promise.&lt;object&gt;</code> - - The transformed payload object.

| Param            | Type                 | Default            | Description                              |
| ---------------- | -------------------- | ------------------ | ---------------------------------------- |
| o                | <code>object</code>  |                    | The payload object to transform.         |
| [modifyPosition] | <code>boolean</code> | <code>false</code> | Whether to modify the position property. |

<a name="RolePromptManager"></a>

## RolePromptManager ⇐ <code>Base</code>

Represents a manager for role prompts in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [RolePromptManager](#RolePromptManager) ⇐ <code>Base</code>
  - [new RolePromptManager(guildId, client)](#new_RolePromptManager_new)
  - _instance_
    - [.cache](#RolePromptManager+cache) ⇒
    - [.\_add(prompts, [guildId], [options])](#RolePromptManager+_add) ⇒ <code>RolePrompt</code> \| <code>null</code>
    - [.fetch([options])](#RolePromptManager+fetch) ⇒ <code>Promise.&lt;Object&gt;</code>
    - [.set([options])](#RolePromptManager+set) ⇒ <code>Promise.&lt;Cache&gt;</code>
  - _static_
    - [.transformPayload(payload)](#RolePromptManager.transformPayload) ⇒ <code>object</code>
    - [.transformRoles(roles)](#RolePromptManager.transformRoles) ⇒ <code>Object</code>

<a name="new_RolePromptManager_new"></a>

### new RolePromptManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="RolePromptManager+cache"></a>

### rolePromptManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: The Collection object representing the cache.  
<a name="RolePromptManager+_add"></a>

### rolePromptManager.\_add(prompts, [guildId], [options]) ⇒ <code>RolePrompt</code> \| <code>null</code>

Adds a role prompt to the collection.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>RolePrompt</code> \| <code>null</code> - The added role prompt or null if prompts is falsy.

| Param           | Type                                           | Default                                  | Description                                                                |
| --------------- | ---------------------------------------------- | ---------------------------------------- | -------------------------------------------------------------------------- |
| prompts         | <code>string</code> \| <code>RolePrompt</code> |                                          | The ID of the prompt or the prompt object itself.                          |
| [guildId]       | <code>string</code>                            | <code>&quot;this.guildId&quot;</code>    | The ID of the guild where the prompt is added.                             |
| [options]       | <code>object</code>                            | <code>{cache: true, force: false}</code> | Additional options for adding the prompt.                                  |
| [options.cache] | <code>boolean</code>                           | <code>true</code>                        | Whether to cache the prompt.                                               |
| [options.force] | <code>boolean</code>                           | <code>false</code>                       | Whether to force adding the prompt even if it already exists in the cache. |

<a name="RolePromptManager+fetch"></a>

### rolePromptManager.fetch([options]) ⇒ <code>Promise.&lt;Object&gt;</code>

Fetches role prompts from the server.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - A promise that resolves to the fetched role prompts.

| Param           | Type                 | Description                                |
| --------------- | -------------------- | ------------------------------------------ |
| [options]       | <code>Object</code>  | Optional parameters for the fetch request. |
| [options.cache] | <code>boolean</code> | Whether to use cached data or not.         |
| [options.force] | <code>boolean</code> | Whether to force a fresh fetch or not.     |

<a name="RolePromptManager+set"></a>

### rolePromptManager.set([options]) ⇒ <code>Promise.&lt;Cache&gt;</code>

Sets the role prompts for the guild.

**Kind**: instance method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Promise.&lt;Cache&gt;</code> - A promise that resolves with a new instance of the cache
containing the updated role prompts.

| Param            | Type                | Description                               |
| ---------------- | ------------------- | ----------------------------------------- |
| [options]        | <code>Object</code> | The options for setting the role prompts. |
| [options.reason] | <code>string</code> | The reason for setting the role prompts.  |

<a name="RolePromptManager.transformPayload"></a>

### RolePromptManager.transformPayload(payload) ⇒ <code>object</code>

Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>object</code> - - The transformed object with properties: title, description, required, and roles.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| payload | <code>object</code> | The payload object to transform. |

<a name="RolePromptManager.transformRoles"></a>

### RolePromptManager.transformRoles(roles) ⇒ <code>Object</code>

Transforms a roles object into a new format.

**Kind**: static method of [<code>RolePromptManager</code>](#RolePromptManager)  
**Returns**: <code>Object</code> - - The transformed roles object.

| Param | Type                | Description                    |
| ----- | ------------------- | ------------------------------ |
| roles | <code>Object</code> | The roles object to transform. |

<a name="ScheduledEventManager"></a>

## ScheduledEventManager ⇐ <code>Base</code>

Represents a Scheduled Event Manager that handles creating, editing, and deleting scheduled events for a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ScheduledEventManager](#ScheduledEventManager) ⇐ <code>Base</code>
  - [new ScheduledEventManager(client)](#new_ScheduledEventManager_new)
  - _instance_
    - [.cache](#ScheduledEventManager+cache) ⇒
    - [.\_add(events, [guildId], [options])](#ScheduledEventManager+_add) ⇒ <code>GuildScheduledEvent</code> \| <code>null</code>
    - [.create([options])](#ScheduledEventManager+create) ⇒ <code>Promise</code>
    - [.edit(event, [options])](#ScheduledEventManager+edit) ⇒ <code>Promise.&lt;Object&gt;</code>
    - [.delete(event)](#ScheduledEventManager+delete) ⇒ <code>Promise.&lt;Object&gt;</code>
    - [.fetch(events, options)](#ScheduledEventManager+fetch) ⇒ <code>Promise</code>
    - [.\_fetchId(events, [cache], [force])](#ScheduledEventManager+_fetchId) ⇒ <code>Promise.&lt;Event&gt;</code>
  - _static_
    - [.transformOptions(o, [create])](#ScheduledEventManager.transformOptions) ⇒ <code>Promise.&lt;Object&gt;</code>

<a name="new_ScheduledEventManager_new"></a>

### new ScheduledEventManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="ScheduledEventManager+cache"></a>

### scheduledEventManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: The Collection object representing the cache.  
<a name="ScheduledEventManager+_add"></a>

### scheduledEventManager.\_add(events, [guildId], [options]) ⇒ <code>GuildScheduledEvent</code> \| <code>null</code>

Adds an event to the guild's scheduled events.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>GuildScheduledEvent</code> \| <code>null</code> - - The added event or null if the events parameter is falsy

| Param           | Type                                                    | Default                                  | Description                                                               |
| --------------- | ------------------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| events          | <code>string</code> \| <code>GuildScheduledEvent</code> |                                          | The event or event ID to add.                                             |
| [guildId]       | <code>string</code>                                     | <code>&quot;this.guildId&quot;</code>    | The ID of the guild to add the event to.                                  |
| [options]       | <code>object</code>                                     | <code>{cache: true, force: false}</code> | Additional options for adding the event.                                  |
| [options.cache] | <code>boolean</code>                                    | <code>true</code>                        | Whether to cache the event.                                               |
| [options.force] | <code>boolean</code>                                    | <code>false</code>                       | Whether to force adding the event even if it already exists in the cache. |

<a name="ScheduledEventManager+create"></a>

### scheduledEventManager.create([options]) ⇒ <code>Promise</code>

Creates a scheduled event with the given options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the created event.

| Param            | Type                | Description                          |
| ---------------- | ------------------- | ------------------------------------ |
| [options]        | <code>Object</code> | The options for the scheduled event. |
| [options.reason] | <code>string</code> | The reason for creating the event.   |

<a name="ScheduledEventManager+edit"></a>

### scheduledEventManager.edit(event, [options]) ⇒ <code>Promise.&lt;Object&gt;</code>

Edits a scheduled event with the given options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - A promise that resolves with the updated event object.

| Param            | Type                                       | Description                                     |
| ---------------- | ------------------------------------------ | ----------------------------------------------- |
| event            | <code>string</code> \| <code>Object</code> | The ID of the event or the event object itself. |
| [options]        | <code>Object</code>                        | The options to update the event with.           |
| [options.reason] | <code>string</code>                        | The reason for editing the event.               |

<a name="ScheduledEventManager+delete"></a>

### scheduledEventManager.delete(event) ⇒ <code>Promise.&lt;Object&gt;</code>

Deletes an event from the scheduled events of a guild.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The deleted event object.

| Param | Type                                       | Description                                                                                 |
| ----- | ------------------------------------------ | ------------------------------------------------------------------------------------------- |
| event | <code>string</code> \| <code>Object</code> | The event to be deleted. Can be either the event ID as a string or the event object itself. |

<a name="ScheduledEventManager+fetch"></a>

### scheduledEventManager.fetch(events, options) ⇒ <code>Promise</code>

Fetches scheduled events from the server based on the provided options.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched events.

| Param         | Type                 | Description                                                                          |
| ------------- | -------------------- | ------------------------------------------------------------------------------------ |
| events        | <code>any</code>     | The events to fetch. Can be an ID, an array of IDs, or an object with query options. |
| options       | <code>object</code>  | The options for fetching the events.                                                 |
| options.cache | <code>boolean</code> | Whether to cache the fetched events. Default is true.                                |
| options.force | <code>boolean</code> | Whether to force fetch the events even if they are already cached. Default is false. |

<a name="ScheduledEventManager+_fetchId"></a>

### scheduledEventManager.\_fetchId(events, [cache], [force]) ⇒ <code>Promise.&lt;Event&gt;</code>

Fetches the ID of an event from the server.

**Kind**: instance method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Event&gt;</code> - - The fetched event.

| Param   | Type                                      | Default            | Description                                                    |
| ------- | ----------------------------------------- | ------------------ | -------------------------------------------------------------- |
| events  | <code>string</code> \| <code>Event</code> |                    | The ID of the event or the event object itself.                |
| [cache] | <code>boolean</code>                      | <code>true</code>  | Whether to cache the fetched event.                            |
| [force] | <code>boolean</code>                      | <code>false</code> | Whether to force fetch the event even if it is already cached. |

<a name="ScheduledEventManager.transformOptions"></a>

### ScheduledEventManager.transformOptions(o, [create]) ⇒ <code>Promise.&lt;Object&gt;</code>

Transforms the options object into the desired format based on the provided parameters.

**Kind**: static method of [<code>ScheduledEventManager</code>](#ScheduledEventManager)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The transformed options object.

| Param    | Type                 | Default            | Description                                                           |
| -------- | -------------------- | ------------------ | --------------------------------------------------------------------- |
| o        | <code>Object</code>  |                    | The options object to transform.                                      |
| [create] | <code>boolean</code> | <code>false</code> | Indicates whether to transform the options for creating a new object. |

<a name="StageInstanceManager"></a>

## StageInstanceManager ⇐ <code>Base</code>

Manages stage instances in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StageInstanceManager](#StageInstanceManager) ⇐ <code>Base</code>
  - [new StageInstanceManager(client)](#new_StageInstanceManager_new)
  - _instance_
    - [.cache](#StageInstanceManager+cache) ⇒
    - [.\_add(stageInstances, [guildId], [options])](#StageInstanceManager+_add) ⇒ <code>StageInstance</code> \| <code>null</code>
    - [.fetch(channel, [options])](#StageInstanceManager+fetch) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
    - [.create([options])](#StageInstanceManager+create) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
    - [.edit(channel, [options])](#StageInstanceManager+edit) ⇒ <code>Promise.&lt;StageInstance&gt;</code>
    - [.delete(channel, reason)](#StageInstanceManager+delete) ⇒ <code>Promise.&lt;(StageInstance\|null)&gt;</code>
  - _static_
    - [.transformPayload([payload])](#StageInstanceManager.transformPayload) ⇒ <code>object</code>

<a name="new_StageInstanceManager_new"></a>

### new StageInstanceManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="StageInstanceManager+cache"></a>

### stageInstanceManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: The Collection object representing the cache.  
<a name="StageInstanceManager+_add"></a>

### stageInstanceManager.\_add(stageInstances, [guildId], [options]) ⇒ <code>StageInstance</code> \| <code>null</code>

Adds a stage instance to the cache and returns the stage instance object.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>StageInstance</code> \| <code>null</code> - The stage

| Param           | Type                                              | Default                                  | Description                                                                   |
| --------------- | ------------------------------------------------- | ---------------------------------------- | ----------------------------------------------------------------------------- |
| stageInstances  | <code>string</code> \| <code>StageInstance</code> |                                          | The stage instance ID or the stage instance object.                           |
| [guildId]       | <code>string</code>                               | <code>&quot;this.guildId&quot;</code>    | The ID of the guild where the stage instance belongs to.                      |
| [options]       | <code>object</code>                               | <code>{cache: true, force: false}</code> | Additional options for adding the stage instance.                             |
| [options.cache] | <code>boolean</code>                              | <code>true</code>                        | Whether to cache the stage instance or not.                                   |
| [options.force] | <code>boolean</code>                              | <code>false</code>                       | Whether to force fetch the stage instance even if it is already in the cache. |

<a name="StageInstanceManager+fetch"></a>

### stageInstanceManager.fetch(channel, [options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

Fetches a stage instance from the API.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the fetched stage instance.

| Param           | Type                                        | Default            | Description                                                             |
| --------------- | ------------------------------------------- | ------------------ | ----------------------------------------------------------------------- |
| channel         | <code>string</code> \| <code>Channel</code> |                    | The channel or channel ID to fetch the stage instance from.             |
| [options]       | <code>Object</code>                         |                    | Additional options for the fetch.                                       |
| [options.cache] | <code>boolean</code>                        | <code>true</code>  | Whether to cache the fetched stage instance.                            |
| [options.force] | <code>boolean</code>                        | <code>false</code> | Whether to force fetch the stage instance even if it is already cached. |

<a name="StageInstanceManager+create"></a>

### stageInstanceManager.create([options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

Creates a new stage instance with the given options.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the created stage instance.

| Param            | Type                | Description                                  |
| ---------------- | ------------------- | -------------------------------------------- |
| [options]        | <code>Object</code> | The options for creating the stage instance. |
| [options.reason] | <code>string</code> | The reason for creating the stage instance.  |

<a name="StageInstanceManager+edit"></a>

### stageInstanceManager.edit(channel, [options]) ⇒ <code>Promise.&lt;StageInstance&gt;</code>

Edits a stage instance in a channel.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;StageInstance&gt;</code> - A promise that resolves with the updated stage instance.

| Param            | Type                                        | Description                                                    |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------- |
| channel          | <code>string</code> \| <code>Channel</code> | The channel or channel ID where the stage instance is located. |
| [options]        | <code>Object</code>                         | Additional options for editing the stage instance.             |
| [options.reason] | <code>string</code>                         | The reason for editing the stage instance.                     |

<a name="StageInstanceManager+delete"></a>

### stageInstanceManager.delete(channel, reason) ⇒ <code>Promise.&lt;(StageInstance\|null)&gt;</code>

Deletes a stage instance from a channel.

**Kind**: instance method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>Promise.&lt;(StageInstance\|null)&gt;</code> - - A promise that resolves to the deleted stage instance, or null if it does not exist.

| Param   | Type                                        | Description                                                    |
| ------- | ------------------------------------------- | -------------------------------------------------------------- |
| channel | <code>string</code> \| <code>Channel</code> | The channel or channel ID where the stage instance is located. |
| reason  | <code>string</code>                         | The reason for deleting the stage instance.                    |

<a name="StageInstanceManager.transformPayload"></a>

### StageInstanceManager.transformPayload([payload]) ⇒ <code>object</code>

Transforms the given payload object into a new object with specific properties.

**Kind**: static method of [<code>StageInstanceManager</code>](#StageInstanceManager)  
**Returns**: <code>object</code> - - The transformed payload object.

| Param     | Type                | Description                      |
| --------- | ------------------- | -------------------------------- |
| [payload] | <code>object</code> | The payload object to transform. |

<a name="StickerManager"></a>

## StickerManager ⇐ <code>Base</code>

Represents a Sticker Manager that handles operations related to stickers in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [StickerManager](#StickerManager) ⇐ <code>Base</code>
  - [new StickerManager(client)](#new_StickerManager_new)
  - [.cache](#StickerManager+cache) ⇒
  - [.\_add(stickers, [guildId], [options])](#StickerManager+_add) ⇒ <code>Sticker</code> \| <code>null</code>
  - [.fetch(sticker, [options])](#StickerManager+fetch) ⇒ <code>Promise.&lt;Sticker&gt;</code>
  - [.\_fetchId(sticker, [cache], [force])](#StickerManager+_fetchId) ⇒ <code>Promise.&lt;Sticker&gt;</code>
  - [.create([options])](#StickerManager+create) ⇒ <code>Promise.&lt;Sticker&gt;</code>
  - [.edit(sticker, [options])](#StickerManager+edit) ⇒ <code>Promise.&lt;Sticker&gt;</code>
  - [.delete(sticker, reason)](#StickerManager+delete) ⇒ <code>Promise.&lt;Sticker&gt;</code>

<a name="new_StickerManager_new"></a>

### new StickerManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="StickerManager+cache"></a>

### stickerManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>StickerManager</code>](#StickerManager)  
**Returns**: The Collection object representing the cache.  
<a name="StickerManager+_add"></a>

### stickerManager.\_add(stickers, [guildId], [options]) ⇒ <code>Sticker</code> \| <code>null</code>

Adds a sticker to the cache and returns the sticker object.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Sticker</code> \| <code>null</code> - The sticker object that was added to the cache

| Param           | Type                                        | Default                                  | Description                                                               |
| --------------- | ------------------------------------------- | ---------------------------------------- | ------------------------------------------------------------------------- |
| stickers        | <code>string</code> \| <code>Sticker</code> |                                          | The sticker object or sticker ID to add to the cache.                     |
| [guildId]       | <code>string</code>                         | <code>&quot;this.guildId&quot;</code>    | The ID of the guild where the sticker belongs.                            |
| [options]       | <code>object</code>                         | <code>{cache: true, force: false}</code> | Additional options for adding the sticker.                                |
| [options.cache] | <code>boolean</code>                        | <code>true</code>                        | Whether to cache the sticker object.                                      |
| [options.force] | <code>boolean</code>                        | <code>false</code>                       | Whether to force fetching the sticker even if it is already in the cache. |

<a name="StickerManager+fetch"></a>

### stickerManager.fetch(sticker, [options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Fetches a sticker from the server based on the provided sticker ID or options.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - A promise that resolves to the fetched sticker.

| Param           | Type                                       | Default            | Description                                                      |
| --------------- | ------------------------------------------ | ------------------ | ---------------------------------------------------------------- |
| sticker         | <code>string</code> \| <code>object</code> |                    | The sticker ID or options object.                                |
| [options]       | <code>object</code>                        |                    | The options for fetching the sticker.                            |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched sticker.                            |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force fetch the sticker even if it is already cached. |

<a name="StickerManager+_fetchId"></a>

### stickerManager.\_fetchId(sticker, [cache], [force]) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Fetches the ID of a sticker from the server.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - A promise that resolves with the fetched sticker.

| Param   | Type                                        | Default            | Description                                                         |
| ------- | ------------------------------------------- | ------------------ | ------------------------------------------------------------------- |
| sticker | <code>string</code> \| <code>Sticker</code> |                    | The sticker or sticker ID to fetch.                                 |
| [cache] | <code>boolean</code>                        | <code>true</code>  | Whether to cache the fetched sticker.                               |
| [force] | <code>boolean</code>                        | <code>false</code> | Whether to force fetching the sticker even if it is already cached. |

<a name="StickerManager+create"></a>

### stickerManager.create([options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Creates a sticker in the guild.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - A promise that resolves with the created sticker.

| Param            | Type                | Description                           |
| ---------------- | ------------------- | ------------------------------------- |
| [options]        | <code>Object</code> | The options for creating the sticker. |
| [options.reason] | <code>string</code> | The reason for creating the sticker.  |

<a name="StickerManager+edit"></a>

### stickerManager.edit(sticker, [options]) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Edits a sticker with the given options.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - A promise that resolves with the edited sticker.

| Param            | Type                                        | Description                                                          |
| ---------------- | ------------------------------------------- | -------------------------------------------------------------------- |
| sticker          | <code>string</code> \| <code>Sticker</code> | The sticker to edit. Can be either a sticker ID or a sticker object. |
| [options]        | <code>Object</code>                         | The options for editing the sticker.                                 |
| [options.reason] | <code>string</code>                         | The reason for editing the sticker.                                  |

<a name="StickerManager+delete"></a>

### stickerManager.delete(sticker, reason) ⇒ <code>Promise.&lt;Sticker&gt;</code>

Deletes a sticker from the guild.

**Kind**: instance method of [<code>StickerManager</code>](#StickerManager)  
**Returns**: <code>Promise.&lt;Sticker&gt;</code> - - The deleted sticker object.  
**Throws**:

- <code>Error</code> - If the sticker deletion fails.

| Param   | Type                                        | Description                                                            |
| ------- | ------------------------------------------- | ---------------------------------------------------------------------- |
| sticker | <code>string</code> \| <code>Sticker</code> | The sticker to delete. Can be either a sticker ID or a sticker object. |
| reason  | <code>string</code>                         | The reason for deleting the sticker.                                   |

<a name="ThreadManager"></a>

## ThreadManager ⇐ <code>BaseThreadManager</code>

A class representing a thread manager for a specific channel in a guild.
Extends the BaseThreadManager class.

**Kind**: global class  
**Extends**: <code>BaseThreadManager</code>

- [ThreadManager](#ThreadManager) ⇐ <code>BaseThreadManager</code>
  - [new ThreadManager(channelId, guildId, client)](#new_ThreadManager_new)
  - [.cache](#ThreadManager+cache) ⇒ <code>Array</code>

<a name="new_ThreadManager_new"></a>

### new ThreadManager(channelId, guildId, client)

Constructs a new instance of the class.

| Param     | Type                | Description            |
| --------- | ------------------- | ---------------------- |
| channelId | <code>string</code> | The ID of the channel. |
| guildId   | <code>string</code> | The ID of the guild.   |
| client    | <code>Client</code> | The client object.     |

<a name="ThreadManager+cache"></a>

### threadManager.cache ⇒ <code>Array</code>

Retrieves the cache items that have a parentId matching the channelId of the current instance.

**Kind**: instance property of [<code>ThreadManager</code>](#ThreadManager)  
**Returns**: <code>Array</code> - An array of cache items that have a matching parentId.

<a name="ThreadMemberManager"></a>

## ThreadMemberManager ⇐ <code>Base</code>

Manages the members of a thread in a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [ThreadMemberManager](#ThreadMemberManager) ⇐ <code>Base</code>
  - [new ThreadMemberManager(guildId, threadId, client)](#new_ThreadMemberManager_new)
  - [.cache](#ThreadMemberManager+cache) ⇒
  - [.\_add(members, [guildId], [threadId], [options])](#ThreadMemberManager+_add)
  - [.join()](#ThreadMemberManager+join) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.fetch(user, [options])](#ThreadMemberManager+fetch) ⇒ <code>Promise</code>
  - [.\_fetchId(user, [cache], [force])](#ThreadMemberManager+_fetchId) ⇒ <code>Promise.&lt;string&gt;</code>
  - [.add([user])](#ThreadMemberManager+add) ⇒ <code>Promise.&lt;void&gt;</code>
  - [.remove([user])](#ThreadMemberManager+remove) ⇒ <code>Promise.&lt;(GuildMember\|null)&gt;</code>

<a name="new_ThreadMemberManager_new"></a>

### new ThreadMemberManager(guildId, threadId, client)

Constructs a new instance of the ThreadWatcher class.

| Param    | Type                | Description                                |
| -------- | ------------------- | ------------------------------------------ |
| guildId  | <code>string</code> | The ID of the guild the thread belongs to. |
| threadId | <code>string</code> | The ID of the thread.                      |
| client   | <code>Client</code> | The client instance.                       |

<a name="ThreadMemberManager+cache"></a>

### threadMemberManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: The Collection object representing the cache.  
<a name="ThreadMemberManager+_add"></a>

### threadMemberManager.\_add(members, [guildId], [threadId], [options])

Adds a member to a thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)

| Param           | Type                                       | Default                                    | Description                                                               |
| --------------- | ------------------------------------------ | ------------------------------------------ | ------------------------------------------------------------------------- |
| members         | <code>string</code> \| <code>Object</code> |                                            | The member or user ID to add to the thread.                               |
| [guildId]       | <code>string</code>                        | <code>&quot;this.guildId&quot;</code>      | The ID of the guild where the thread is located.                          |
| [threadId]      | <code>string</code>                        | <code>&quot;this.threadId&quot;</code>     | The ID of the thread.                                                     |
| [options]       | <code>object</code>                        | <code>{ cache: true, force: false }</code> | Additional options for adding the member.                                 |
| [options.cache] | <code>boolean</code>                       | <code>true</code>                          | Whether to cache the thread member.                                       |
| [options.force] | <code>boolean</code>                       | <code>false</code>                         | Whether to force fetching the thread member even if it is already cached. |

<a name="ThreadMemberManager+join"></a>

### threadMemberManager.join() ⇒ <code>Promise.&lt;void&gt;</code>

Joins the current user to a thread in a channel.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user has successfully joined the thread.  
<a name="ThreadMemberManager+fetch"></a>

### threadMemberManager.fetch(user, [options]) ⇒ <code>Promise</code>

Fetches data for a user or thread from the server.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise</code> - A promise that resolves with the fetched data.

| Param           | Type                                       | Default            | Description                                        |
| --------------- | ------------------------------------------ | ------------------ | -------------------------------------------------- |
| user            | <code>string</code> \| <code>object</code> |                    | The user ID or object containing user information. |
| [options]       | <code>object</code>                        |                    | Additional options for the fetch request.          |
| [options.cache] | <code>boolean</code>                       | <code>true</code>  | Whether to cache the fetched data.                 |
| [options.force] | <code>boolean</code>                       | <code>false</code> | Whether to force a fresh fetch from the server.    |

<a name="ThreadMemberManager+_fetchId"></a>

### threadMemberManager.\_fetchId(user, [cache], [force]) ⇒ <code>Promise.&lt;string&gt;</code>

Fetches the ID of a user asynchronously.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;string&gt;</code> - A promise that resolves to the user ID.

| Param   | Type                                           | Default           | Description                                                  |
| ------- | ---------------------------------------------- | ----------------- | ------------------------------------------------------------ |
| user    | <code>string</code> \| <code>UserObject</code> |                   | The user or user ID to fetch the ID for.                     |
| [cache] | <code>boolean</code>                           | <code>true</code> | Whether to cache the fetched ID.                             |
| [force] | <code>boolean</code>                           | <code>true</code> | Whether to force the fetch even if the ID is already cached. |

<a name="ThreadMemberManager+add"></a>

### threadMemberManager.add([user]) ⇒ <code>Promise.&lt;void&gt;</code>

Adds a user to the thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the user has been added to the thread.

| Param  | Type                                     | Default                                      | Description                                                       |
| ------ | ---------------------------------------- | -------------------------------------------- | ----------------------------------------------------------------- |
| [user] | <code>string</code> \| <code>User</code> | <code>&quot;this.client.user.id&quot;</code> | The user to add to the thread. Can be a user ID or a User object. |

<a name="ThreadMemberManager+remove"></a>

### threadMemberManager.remove([user]) ⇒ <code>Promise.&lt;(GuildMember\|null)&gt;</code>

Removes a user from the thread.

**Kind**: instance method of [<code>ThreadMemberManager</code>](#ThreadMemberManager)  
**Returns**: <code>Promise.&lt;(GuildMember\|null)&gt;</code> - - A promise that resolves with the deleted member object, or null if the user was not found.

| Param  | Type                                               | Default                                      | Description                                                           |
| ------ | -------------------------------------------------- | -------------------------------------------- | --------------------------------------------------------------------- |
| [user] | <code>string</code> \| <code>UserResolvable</code> | <code>&quot;this.client.user.id&quot;</code> | The user to remove from the thread. Defaults to the client's user ID. |

<a name="UserManager"></a>

## UserManager ⇐ <code>Base</code>

Represents a user manager that handles user-related operations.

**Kind**: global class  
**Extends**: <code>Base</code>

- [UserManager](#UserManager) ⇐ <code>Base</code>
  - [new UserManager(client)](#new_UserManager_new)
  - [.cache](#UserManager+cache) ⇒
  - [.\_add(users, [options])](#UserManager+_add) ⇒ <code>User</code>
  - [.fetch(user, [options])](#UserManager+fetch) ⇒ <code>Promise.&lt;User&gt;</code>
  - [.edit(options)](#UserManager+edit) ⇒ <code>Promise.&lt;User&gt;</code>
  - [.createDM(user)](#UserManager+createDM) ⇒ <code>Promise.&lt;Channel&gt;</code>
  - [.send(user, [options])](#UserManager+send) ⇒ <code>Promise.&lt;Message&gt;</code>

<a name="new_UserManager_new"></a>

### new UserManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="UserManager+cache"></a>

### userManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>UserManager</code>](#UserManager)  
**Returns**: The Collection object representing the cache.  
<a name="UserManager+_add"></a>

### userManager.\_add(users, [options]) ⇒ <code>User</code>

Adds a user to the collection.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>User</code> - The added user object.

| Param           | Type                                     | Default            | Description                                                      |
| --------------- | ---------------------------------------- | ------------------ | ---------------------------------------------------------------- |
| users           | <code>User</code> \| <code>string</code> |                    | The user object or user ID to add.                               |
| [options]       | <code>Object</code>                      |                    | Additional options for adding the user.                          |
| [options.cache] | <code>boolean</code>                     | <code>true</code>  | Whether to cache the user object.                                |
| [options.force] | <code>boolean</code>                     | <code>false</code> | Whether to force fetching the user even if it is already cached. |

<a name="UserManager+fetch"></a>

### userManager.fetch(user, [options]) ⇒ <code>Promise.&lt;User&gt;</code>

Fetches user data from the server.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;User&gt;</code> - A promise that resolves to the fetched user data.

| Param           | Type                                     | Default            | Description                                                        |
| --------------- | ---------------------------------------- | ------------------ | ------------------------------------------------------------------ |
| user            | <code>string</code> \| <code>User</code> |                    | The user ID or user object.                                        |
| [options]       | <code>Object</code>                      |                    | Additional options for the fetch request.                          |
| [options.cache] | <code>boolean</code>                     | <code>true</code>  | Whether to cache the fetched user data.                            |
| [options.force] | <code>boolean</code>                     | <code>false</code> | Whether to force a fresh fetch even if the data is already cached. |

<a name="UserManager+edit"></a>

### userManager.edit(options) ⇒ <code>Promise.&lt;User&gt;</code>

Edits the user's profile with the provided options.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;User&gt;</code> - A promise that resolves with the updated user object.

| Param   | Type                | Description                             |
| ------- | ------------------- | --------------------------------------- |
| options | <code>Object</code> | The options to edit the user's profile. |

<a name="UserManager+createDM"></a>

### userManager.createDM(user) ⇒ <code>Promise.&lt;Channel&gt;</code>

Creates a direct message channel with the specified user.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;Channel&gt;</code> - A promise that resolves with the created direct message channel.  
**Throws**:

- <code>RangeError</code> If no user is provided.

| Param | Type                                     | Description                                         |
| ----- | ---------------------------------------- | --------------------------------------------------- |
| user  | <code>string</code> \| <code>User</code> | The user to create the direct message channel with. |

<a name="UserManager+send"></a>

### userManager.send(user, [options]) ⇒ <code>Promise.&lt;Message&gt;</code>

Sends a message to a user through a direct message channel.

**Kind**: instance method of [<code>UserManager</code>](#UserManager)  
**Returns**: <code>Promise.&lt;Message&gt;</code> - A promise that resolves to the sent message.

| Param     | Type                | Description                                          |
| --------- | ------------------- | ---------------------------------------------------- |
| user      | <code>User</code>   | The user to send the message to.                     |
| [options] | <code>Object</code> | Additional options for creating the message payload. |

<a name="VoiceStateManager"></a>

## VoiceStateManager ⇐ <code>Base</code>

Represents a Voice State Manager that handles voice state related operations.

**Kind**: global class  
**Extends**: <code>Base</code>

- [VoiceStateManager](#VoiceStateManager) ⇐ <code>Base</code>
  - [new VoiceStateManager(client)](#new_VoiceStateManager_new)
  - [.cache](#VoiceStateManager+cache) ⇒
  - [.\_add(voiceStates, [guildId], [options])](#VoiceStateManager+_add) ⇒ <code>VoiceState</code> \| <code>null</code>

<a name="new_VoiceStateManager_new"></a>

### new VoiceStateManager(client)

Constructs a new instance of the class.

| Param  | Type                | Description                                               |
| ------ | ------------------- | --------------------------------------------------------- |
| client | <code>Client</code> | The client object used for communication with the server. |

<a name="VoiceStateManager+cache"></a>

### voiceStateManager.cache ⇒

Getter method for the cache property.

**Kind**: instance property of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: The Collection object representing the cache.  
<a name="VoiceStateManager+_add"></a>

### voiceStateManager.\_add(voiceStates, [guildId], [options]) ⇒ <code>VoiceState</code> \| <code>null</code>

Adds a voice state to the cache and returns the voice state object.

**Kind**: instance method of [<code>VoiceStateManager</code>](#VoiceStateManager)  
**Returns**: <code>VoiceState</code> \| <code>null</code> - The voice state object.

| Param           | Type                                           | Default                                  | Description                                                           |
| --------------- | ---------------------------------------------- | ---------------------------------------- | --------------------------------------------------------------------- |
| voiceStates     | <code>string</code> \| <code>VoiceState</code> |                                          | The voice state object or user ID.                                    |
| [guildId]       | <code>string</code>                            | <code>&quot;this.guildId&quot;</code>    | The ID of the guild the voice state belongs to.                       |
| [options]       | <code>object</code>                            | <code>{cache: true, force: false}</code> | Additional options for the operation.                                 |
| [options.cache] | <code>boolean</code>                           | <code>true</code>                        | Whether to cache the voice state.                                     |
| [options.force] | <code>boolean</code>                           | <code>false</code>                       | Whether to force update the voice state even if it is already cached. |

<a name="WebsocketManager"></a>

## WebsocketManager ⇐ <code>WebSocket</code>

Represents a WebSocket manager that extends the WebSocket class.

**Kind**: global class  
**Extends**: <code>WebSocket</code>

- [WebsocketManager](#WebsocketManager) ⇐ <code>WebSocket</code>
  - [new WebsocketManager(client)](#new_WebsocketManager_new)
  - _instance_
    - [.connect()](#WebsocketManager+connect) ⇒
    - [.handleConnect()](#WebsocketManager+handleConnect) ⇒
    - [.handleClose(err)](#WebsocketManager+handleClose) ⇒ <code>null</code>
    - [.handleOpen()](#WebsocketManager+handleOpen) ⇒ <code>void</code>
    - [.handleResume()](#WebsocketManager+handleResume) ⇒ <code>void</code>
    - [.handleReconnect()](#WebsocketManager+handleReconnect) ⇒ <code>void</code>
    - [.destroy(closeCode)](#WebsocketManager+destroy) ⇒ <code>Promise</code>
    - [.handleError(error)](#WebsocketManager+handleError) ⇒ <code>void</code>
    - [.send(payload)](#WebsocketManager+send) ⇒ <code>Promise.&lt;void&gt;</code>
  - _static_
    - [.transformPayload(payload)](#WebsocketManager.transformPayload) ⇒ <code>object</code> \| <code>null</code>

<a name="new_WebsocketManager_new"></a>

### new WebsocketManager(client)

Constructs a new instance of the WebSocketClient class.

| Param  | Type                | Description        |
| ------ | ------------------- | ------------------ |
| client | <code>Client</code> | The client object. |

<a name="WebsocketManager+connect"></a>

### websocketManager.connect() ⇒

Establishes a connection to the WebSocket server.
If the connection is not open, it will retry after a timeout.
Retrieves the URL, shards, and session start limit from the bot gateway API.
If the URL or session start limit is not available, or the remaining session start limit is less than 1,
it logs an error message and exits the process.
Sends an Identify opcode to the server with the client's token, intents, presence, and properties.
Logs the WebSocket information.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: None  
<a name="WebsocketManager+handleConnect"></a>

### websocketManager.handleConnect() ⇒

Handles the connection of the websocket.
If the websocket is closed, it logs a debug message and returns.
Otherwise, it listens for incoming messages and creates a new instance of ActionsManager
to handle the received data.
It also listens for the "close" event and calls the handleClose method.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: None  
<a name="WebsocketManager+handleClose"></a>

### websocketManager.handleClose(err) ⇒ <code>null</code>

Handles the closing of the resource and returns the result of the error handling.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>null</code> - - Returns null if the error handling is successful.

| Param | Type               | Description                 |
| ----- | ------------------ | --------------------------- |
| err   | <code>Error</code> | The error object to handle. |

<a name="WebsocketManager+handleOpen"></a>

### websocketManager.handleOpen() ⇒ <code>void</code>

Handles the "open" event of the WebSocket connection.
If the connection is successfully opened, it logs a debug message and calls the handleConnect() function.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+handleResume"></a>

### websocketManager.handleResume() ⇒ <code>void</code>

Handles the resumption of a WebSocket connection.
If no session ID is found, it will re-identify and establish a new connection.
If a session ID is found, it will attempt to resume the connection using the session ID.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+handleReconnect"></a>

### websocketManager.handleReconnect() ⇒ <code>void</code>

Handles the reconnection process for the WebSocket connection.
If there is no resume gateway URL, it will re-identify and connect again.
If the status is not "CLOSED" and reconnect is enabled, it will initiate a reconnect.
It will clear the heartbeat interval if it exists.
Sets the status to "RECONNECTING".
Removes all event listeners.
Sets a timeout to close the previous WebSocket connection and create a new one.
If the previous connection is not closed, it will be forcefully closed.
If the WebSocket is already closed, it will log a message.
Creates a new WebSocket connection to the resume gateway URL.
Sets the close sequence and marks the WebSocket as reconnected.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
<a name="WebsocketManager+destroy"></a>

### websocketManager.destroy(closeCode) ⇒ <code>Promise</code>

Destroys the current instance of the object.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>Promise</code> - - A promise that resolves when the instance is successfully destroyed.

| Param     | Type                   | Description                                |
| --------- | ---------------------- | ------------------------------------------ |
| closeCode | <code>closeCode</code> | The code to use when closing the instance. |

<a name="WebsocketManager+handleError"></a>

### websocketManager.handleError(error) ⇒ <code>void</code>

Handles errors that occur during websocket communication.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Throws**:

- <code>WebsocketError</code> - Throws a WebsocketError with the corresponding error message and code.

| Param | Type                | Description     |
| ----- | ------------------- | --------------- |
| error | <code>number</code> | The error code. |

<a name="WebsocketManager+send"></a>

### websocketManager.send(payload) ⇒ <code>Promise.&lt;void&gt;</code>

Sends a payload over the websocket connection.

**Kind**: instance method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves when the payload has been sent.

| Param   | Type             | Description          |
| ------- | ---------------- | -------------------- |
| payload | <code>any</code> | The payload to send. |

<a name="WebsocketManager.transformPayload"></a>

### WebsocketManager.transformPayload(payload) ⇒ <code>object</code> \| <code>null</code>

Transforms a payload object by converting the "op" property to its corresponding opcode value.

**Kind**: static method of [<code>WebsocketManager</code>](#WebsocketManager)  
**Returns**: <code>object</code> \| <code>null</code> - - The transformed payload object, or null if the "op" property is missing.

| Param   | Type                | Description                      |
| ------- | ------------------- | -------------------------------- |
| payload | <code>object</code> | The payload object to transform. |

<a name="WelcomeScreenManager"></a>

## WelcomeScreenManager ⇐ <code>Base</code>

Represents a manager for the welcome screen of a guild.

**Kind**: global class  
**Extends**: <code>Base</code>

- [WelcomeScreenManager](#WelcomeScreenManager) ⇐ <code>Base</code>
  - [new WelcomeScreenManager(guildId, client)](#new_WelcomeScreenManager_new)
  - _instance_
    - [.fetch()](#WelcomeScreenManager+fetch) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
    - [.edit([options])](#WelcomeScreenManager+edit) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>
  - _static_
    - [.transformChannels(channels)](#WelcomeScreenManager.transformChannels) ⇒ <code>Object</code>
    - [.transformOptions(o)](#WelcomeScreenManager.transformOptions) ⇒ <code>Object</code>

<a name="new_WelcomeScreenManager_new"></a>

### new WelcomeScreenManager(guildId, client)

Constructs a new instance of the class.

| Param   | Type                | Description          |
| ------- | ------------------- | -------------------- |
| guildId | <code>string</code> | The ID of the guild. |
| client  | <code>Client</code> | The client instance. |

<a name="WelcomeScreenManager+fetch"></a>

### welcomeScreenManager.fetch() ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>

Fetches the welcome screen for the guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Promise.&lt;WelcomeScreen&gt;</code> - A promise that resolves to a WelcomeScreen object representing the fetched welcome screen.  
<a name="WelcomeScreenManager+edit"></a>

### welcomeScreenManager.edit([options]) ⇒ <code>Promise.&lt;WelcomeScreen&gt;</code>

Edits the welcome screen settings for the guild.

**Kind**: instance method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Promise.&lt;WelcomeScreen&gt;</code> - A promise that resolves with the updated WelcomeScreen object.

| Param            | Type                | Description                                 |
| ---------------- | ------------------- | ------------------------------------------- |
| [options]        | <code>Object</code> | The options for editing the welcome screen. |
| [options.reason] | <code>string</code> | The reason for the edit.                    |

<a name="WelcomeScreenManager.transformChannels"></a>

### WelcomeScreenManager.transformChannels(channels) ⇒ <code>Object</code>

Transforms the given channels object into a new format.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Object</code> - - The transformed channels object.

| Param    | Type                | Description                       |
| -------- | ------------------- | --------------------------------- |
| channels | <code>Object</code> | The channels object to transform. |

<a name="WelcomeScreenManager.transformOptions"></a>

### WelcomeScreenManager.transformOptions(o) ⇒ <code>Object</code>

Transforms the options object into a new object with specific properties.

**Kind**: static method of [<code>WelcomeScreenManager</code>](#WelcomeScreenManager)  
**Returns**: <code>Object</code> - - The transformed object with specific properties.

| Param | Type                | Description                      |
| ----- | ------------------- | -------------------------------- |
| o     | <code>Object</code> | The options object to transform. |
