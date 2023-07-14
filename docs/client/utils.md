---
id: utils
title: Utils
description: Utils Section
sidebar_position: 6
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="ActivityFlags"></a>

## ActivityFlags ⇐ <code>Bitfield</code>

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ActivityFlags](#ActivityFlags) ⇐ <code>Bitfield</code>
  - [new ActivityFlags(...bit)](#new_ActivityFlags_new)
  - [.Default](#ActivityFlags.Default)
  - [.All](#ActivityFlags.All) ⇒
  - [.Flags](#ActivityFlags.Flags) : <code>enum</code>

<a name="new_ActivityFlags_new"></a>

### new ActivityFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ActivityFlags.Default"></a>

### ActivityFlags.Default

Sets the default value for the ActivityFlags to 0n.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)

| Param   | Type                | Description                   |
| ------- | ------------------- | ----------------------------- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ActivityFlags.All"></a>

### ActivityFlags.All ⇒

Calculates the value of the ActivityFlags.All by performing a bitwise OR operation
on all the values of the ActivityFlags.Flags.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
**Returns**: The calculated value of ActivityFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="ActivityFlags.Flags"></a>

### ActivityFlags.Flags : <code>enum</code>

Represents the available flags for activity settings.

**Kind**: static enum of [<code>ActivityFlags</code>](#ActivityFlags)  
**Read only**: true  
**Properties**

| Name                        | Type                | Default       |
| --------------------------- | ------------------- | ------------- |
| Instance                    | <code>bigint</code> | <code></code> |
| Join                        | <code>bigint</code> | <code></code> |
| Spectate                    | <code>bigint</code> | <code></code> |
| Join_Request                | <code>bigint</code> | <code></code> |
| Sync                        | <code>bigint</code> | <code></code> |
| Play                        | <code>bigint</code> | <code></code> |
| Party_Privacy_Friends       | <code>bigint</code> | <code></code> |
| Party_Privacy_Voice_Channel | <code>bigint</code> | <code></code> |
| Embedded                    | <code>bigint</code> | <code></code> |

<a name="ApplicationFlags"></a>

## ApplicationFlags ⇐ <code>Bitfield</code>

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ApplicationFlags](#ApplicationFlags) ⇐ <code>Bitfield</code>
  - [new ApplicationFlags(...bit)](#new_ApplicationFlags_new)
  - [.Default](#ApplicationFlags.Default)
  - [.All](#ApplicationFlags.All) ⇒
  - [.Flags](#ApplicationFlags.Flags) : <code>enum</code>

<a name="new_ApplicationFlags_new"></a>

### new ApplicationFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ApplicationFlags.Default"></a>

### ApplicationFlags.Default

Sets the default value for the ApplicationFlags to 0n.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)

| Param   | Type                | Description                   |
| ------- | ------------------- | ----------------------------- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ApplicationFlags.All"></a>

### ApplicationFlags.All ⇒

Combines all the values of the ApplicationFlags.Flags object using a bitwise OR operation
and assigns the result to the ApplicationFlags.All property.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Returns**: The calculated value of ApplicationFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="ApplicationFlags.Flags"></a>

### ApplicationFlags.Flags : <code>enum</code>

Represents the available application flags.

**Kind**: static enum of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Read only**: true  
**Properties**

| Name                             | Type                | Default       |
| -------------------------------- | ------------------- | ------------- |
| Gateway_Presence                 | <code>bigint</code> | <code></code> |
| Gateway_Presence_Limited         | <code>bigint</code> | <code></code> |
| Gateway_Guild_Members            | <code>bigint</code> | <code></code> |
| Gateway_Guild_Members_Limited    | <code>bigint</code> | <code></code> |
| Verification_Pending_Guild_Limit | <code>bigint</code> | <code></code> |
| Embedded                         | <code>bigint</code> | <code></code> |
| Gateway_Message_Content          | <code>bigint</code> | <code></code> |
| Gateway_Message_Content_Limited  | <code>bigint</code> | <code></code> |
| Application_Command_Badge        | <code>bigint</code> | <code></code> |

<a name="Bitfield"></a>

## Bitfield

**Kind**: global class

- [Bitfield](#Bitfield)
  - [new Bitfield([bit])](#new_Bitfield_new)
  - _instance_
    - [.any(...bit)](#Bitfield+any) ⇒ <code>boolean</code>
    - [.has(...bit)](#Bitfield+has) ⇒ <code>boolean</code>
    - [.add(...bit)](#Bitfield+add) ⇒ <code>this</code>
    - [.remove(...bits)](#Bitfield+remove) ⇒ [<code>Bitfield</code>](#Bitfield)
    - [.toArray()](#Bitfield+toArray) ⇒ <code>Array</code>
    - [.toString()](#Bitfield+toString) ⇒ <code>string</code>
    - [.serialize()](#Bitfield+serialize) ⇒ <code>Object</code>
    - [.freeze()](#Bitfield+freeze) ⇒
  - _static_
    - [.Flags](#Bitfield.Flags) : <code>object</code>
    - [.defaultBit](#Bitfield.defaultBit)
    - [.resolve(bit)](#Bitfield.resolve) ⇒ <code>number</code> \| <code>bigint</code>

<a name="new_Bitfield_new"></a>

### new Bitfield([bit])

Constructs a new instance of the class.

| Param | Type                | Default                                  | Description                                    |
| ----- | ------------------- | ---------------------------------------- | ---------------------------------------------- |
| [bit] | <code>number</code> | <code>this.constructor.defaultBit</code> | The bit value to initialize the instance with. |

<a name="Bitfield+any"></a>

### bitfield.any(...bit) ⇒ <code>boolean</code>

Checks if any of the given bit(s) are set in the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if any of the given bit(s) are set, false otherwise.

| Param  | Type                | Description          |
| ------ | ------------------- | -------------------- |
| ...bit | <code>bigint</code> | The bit(s) to check. |

<a name="Bitfield+has"></a>

### bitfield.has(...bit) ⇒ <code>boolean</code>

Checks if the given bit(s) are set in the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>boolean</code> - True if the bit(s) are set, false otherwise.

| Param  | Type                | Description          |
| ------ | ------------------- | -------------------- |
| ...bit | <code>bigint</code> | The bit(s) to check. |

<a name="Bitfield+add"></a>

### bitfield.add(...bit) ⇒ <code>this</code>

Adds one or more bit(s) to the current bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>this</code> - The modified instance of the class.

| Param  | Type                | Description        |
| ------ | ------------------- | ------------------ |
| ...bit | <code>bigint</code> | The bit(s) to add. |

<a name="Bitfield+remove"></a>

### bitfield.remove(...bits) ⇒ [<code>Bitfield</code>](#Bitfield)

Removes one or more bits from the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: [<code>Bitfield</code>](#Bitfield) - A new Bitfield object with the specified bits removed.

| Param   | Type                | Description                           |
| ------- | ------------------- | ------------------------------------- |
| ...bits | <code>bigint</code> | The bits to remove from the bitfield. |

<a name="Bitfield+toArray"></a>

### bitfield.toArray() ⇒ <code>Array</code>

Converts the flags of an object into an array of keys.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Array</code> - An array of keys representing the flags that are set in the object.  
<a name="Bitfield+toString"></a>

### bitfield.toString() ⇒ <code>string</code>

Returns a string representation of the bitfield.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>string</code> - - The string representation of the bitfield.  
<a name="Bitfield+serialize"></a>

### bitfield.serialize() ⇒ <code>Object</code>

Serializes the current object into a JSON object.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>Object</code> - - The serialized object.  
<a name="Bitfield+freeze"></a>

### bitfield.freeze() ⇒

Freezes the current object, making it immutable.

**Kind**: instance method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: None  
<a name="Bitfield.Flags"></a>

### Bitfield.Flags : <code>object</code>

An empty object representing a set of flags for a bitfield.

**Kind**: static property of [<code>Bitfield</code>](#Bitfield)  
<a name="Bitfield.defaultBit"></a>

### Bitfield.defaultBit

Sets the default bit value for the Bitfield class.

**Kind**: static property of [<code>Bitfield</code>](#Bitfield)

| Param      | Type                | Description                   |
| ---------- | ------------------- | ----------------------------- |
| defaultBit | <code>bigint</code> | The default bit value to set. |

<a name="Bitfield.resolve"></a>

### Bitfield.resolve(bit) ⇒ <code>number</code> \| <code>bigint</code>

Resolves a bit value based on the given input.

**Kind**: static method of [<code>Bitfield</code>](#Bitfield)  
**Returns**: <code>number</code> \| <code>bigint</code> - - The resolved bit value.  
**Throws**:

- <code>BitfieldInvalid</code> - If the specified bitfield is invalid or not found.

| Param | Type             | Description               |
| ----- | ---------------- | ------------------------- |
| bit   | <code>any</code> | The bit value to resolve. |

<a name="ChannelFlags"></a>

## ChannelFlags ⇐ <code>Bitfield</code>

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ChannelFlags](#ChannelFlags) ⇐ <code>Bitfield</code>
  - [new ChannelFlags(...bit)](#new_ChannelFlags_new)
  - [.Default](#ChannelFlags.Default)
  - [.All](#ChannelFlags.All) ⇒
  - [.Flags](#ChannelFlags.Flags) : <code>enum</code>

<a name="new_ChannelFlags_new"></a>

### new ChannelFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| ...bit | <code>bigint</code> | The bits to set in the bitfield. |

<a name="ChannelFlags.Default"></a>

### ChannelFlags.Default

Sets the default value for the ChannelFlags property to 0n.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)

| Param   | Type                | Description                   |
| ------- | ------------------- | ----------------------------- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="ChannelFlags.All"></a>

### ChannelFlags.All ⇒

Calculates the value of ChannelFlags.All by performing a bitwise OR operation on all the values
in the ChannelFlags.Flags object.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
**Returns**: The calculated value of ChannelFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="ChannelFlags.Flags"></a>

### ChannelFlags.Flags : <code>enum</code>

Channel flags and their corresponding bit numbers.

**Kind**: static enum of [<code>ChannelFlags</code>](#ChannelFlags)  
**Read only**: true  
**Properties**

| Name        | Type                | Default       |
| ----------- | ------------------- | ------------- |
| Pinned      | <code>bigint</code> | <code></code> |
| Require_Tag | <code>bigint</code> | <code></code> |

<a name="ActivityType"></a>

## ActivityType ⇒

It creates an object with the keys being the index of the value in the array and the value being the
value in the array.

**Kind**: global variable  
**Returns**: The return value is an object with the following properties:

| Param | Description                                               |
| ----- | --------------------------------------------------------- |
| keys  | An array of strings that will be used to create the enum. |

<a name="DataManager"></a>

## DataManager

A utility class for managing data.

**Kind**: global class  
<a name="DataManager.resolveFile"></a>

### DataManager.resolveFile(file) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>

Resolves a file to be used in a function or operation.

**Kind**: static method of [<code>DataManager</code>](#DataManager)  
**Returns**: <code>Promise.&lt;(Buffer\|null)&gt;</code> - - A promise that resolves to the resolved file as a Buffer, or null if the file cannot be resolved.

| Param | Type                                                                         | Description          |
| ----- | ---------------------------------------------------------------------------- | -------------------- |
| file  | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>Object</code> | The file to resolve. |

<a name="EmojiResolver"></a>

## EmojiResolver

A utility class for resolving and transforming emojis.

**Kind**: global class  
<a name="EmojiResolver.transformEmoji"></a>

### EmojiResolver.transformEmoji(emoji, client) ⇒ <code>string</code>

Transforms an emoji object or string into a formatted emoji string.

**Kind**: static method of [<code>EmojiResolver</code>](#EmojiResolver)  
**Returns**: <code>string</code> - The formatted emoji string.  
**Throws**:

- <code>RangeError</code> If the emoji is not found in the emoji cache.

| Param  | Type                                       | Description                              |
| ------ | ------------------------------------------ | ---------------------------------------- |
| emoji  | <code>Object</code> \| <code>string</code> | The emoji object or string to transform. |
| client | <code>Client</code>                        | The Discord client instance.             |

<a name="GuildMemberFlags"></a>

## GuildMemberFlags ⇐ <code>Bitfield</code>

A bitfield that represents flags for a guild member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [GuildMemberFlags](#GuildMemberFlags) ⇐ <code>Bitfield</code>
  - [new GuildMemberFlags(...bit)](#new_GuildMemberFlags_new)
  - [.Default](#GuildMemberFlags.Default)
  - [.All](#GuildMemberFlags.All) ⇒
  - [.Flags](#GuildMemberFlags.Flags) : <code>enum</code>

<a name="new_GuildMemberFlags_new"></a>

### new GuildMemberFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="GuildMemberFlags.Default"></a>

### GuildMemberFlags.Default

Sets the default value for the GuildMemberFlags to 0n.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)

| Param   | Type                | Description                   |
| ------- | ------------------- | ----------------------------- |
| Default | <code>bigint</code> | The default bit value to set. |

<a name="GuildMemberFlags.All"></a>

### GuildMemberFlags.All ⇒

Calculates the bitwise OR of all the values in the GuildMemberFlags.Flags object
and assigns the result to the GuildMemberFlags.All property.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Returns**: The calculated value of GuildMemberFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="GuildMemberFlags.Flags"></a>

### GuildMemberFlags.Flags : <code>enum</code>

Represents the flags associated with a guild member.

**Kind**: static enum of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
**Properties**

| Name                  | Type                | Default       |
| --------------------- | ------------------- | ------------- |
| Did_Rejoin            | <code>bigint</code> | <code></code> |
| Completed_Onboarding  | <code>bigint</code> | <code></code> |
| Bypasses_Verification | <code>bigint</code> | <code></code> |
| Started_Onboarding    | <code>bigint</code> | <code></code> |

<a name="Intents"></a>

## Intents ⇐ <code>Bitfield</code>

Represents the intents that the bot wishes to subscribe to.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [Intents](#Intents) ⇐ <code>Bitfield</code>
  - [new Intents(...bit)](#new_Intents_new)
  - [.Default](#Intents.Default) : <code>bigint</code>
  - [.All](#Intents.All) ⇒
  - [.Flags](#Intents.Flags) : <code>enum</code>

<a name="new_Intents_new"></a>

### new Intents(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="Intents.Default"></a>

### Intents.Default : <code>bigint</code>

Sets the default value for the Intents enum to 0.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Read only**: true  
<a name="Intents.All"></a>

### Intents.All ⇒

Combines all the values of the Intents.Flags object using a bitwise OR operation
and assigns the result to the Intents.All property.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Returns**: The calculated value of Intents.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="Intents.Flags"></a>

### Intents.Flags : <code>enum</code>

Represents the flags for different intents in Discord.

**Kind**: static enum of [<code>Intents</code>](#Intents)  
**Read only**: true  
**Properties**

| Name                          | Type                | Default       |
| ----------------------------- | ------------------- | ------------- |
| Guilds                        | <code>bigint</code> | <code></code> |
| Guild_Members                 | <code>bigint</code> | <code></code> |
| Guild_Moderation              | <code>bigint</code> | <code></code> |
| Guild_Emojis_And_Stickers     | <code>bigint</code> | <code></code> |
| Guild_Integrations            | <code>bigint</code> | <code></code> |
| Guild_Webhooks                | <code>bigint</code> | <code></code> |
| Guild_Invites                 | <code>bigint</code> | <code></code> |
| Guild_Voice_States            | <code>bigint</code> | <code></code> |
| Guild_Presences               | <code>bigint</code> | <code></code> |
| Guild_Messages                | <code>bigint</code> | <code></code> |
| Guild_Message_Reactions       | <code>bigint</code> | <code></code> |
| Guild_Message_Typing          | <code>bigint</code> | <code></code> |
| Direct_Messages               | <code>bigint</code> | <code></code> |
| Direct_Message_Reactions      | <code>bigint</code> | <code></code> |
| Direct_Message_Typing         | <code>bigint</code> | <code></code> |
| Message_Content               | <code>bigint</code> | <code></code> |
| Guild_Scheduled_Events        | <code>bigint</code> | <code></code> |
| Auto_Moderation_Configuration | <code>bigint</code> | <code></code> |
| Auto_Moderation_Execution     | <code>bigint</code> | <code></code> |

<a name="InvitePayload"></a>

## InvitePayload

A utility class for creating invite payloads.

**Kind**: global class  
<a name="InvitePayload.create"></a>

### InvitePayload.create(payload)

Creates an invite object with the given payload.

**Kind**: static method of [<code>InvitePayload</code>](#InvitePayload)

| Param                | Type                                           | Default            | Description                                          |
| -------------------- | ---------------------------------------------- | ------------------ | ---------------------------------------------------- |
| payload              | <code>Object</code>                            |                    | The payload object containing the invite properties. |
| [payload.maxAge]     | <code>number</code>                            | <code>86400</code> | The maximum age of the invite in seconds.            |
| [payload.maxUses]    | <code>number</code> \| <code>undefined</code>  |                    | The maximum number of times the invite can be used.  |
| [payload.temporary]  | <code>boolean</code> \| <code>undefined</code> |                    | Whether the invite is temporary or not.              |
| [payload.targetType] | <code>string</code> \| <code>undefined</code>  |                    | The type of target for the invite.                   |
| [payload.targetUser] | <code>string</code> \| <code>undefined</code>  |                    | The ID of the target user for the                    |

<a name="MessageFlags"></a>

## MessageFlags ⇐ <code>Bitfield</code>

Represents a bitfield for Discord message flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [MessageFlags](#MessageFlags) ⇐ <code>Bitfield</code>
  - [new MessageFlags(...bit)](#new_MessageFlags_new)
  - [.Default](#MessageFlags.Default) : <code>bigint</code>
  - [.All](#MessageFlags.All) ⇒
  - [.Flags](#MessageFlags.Flags) : <code>enum</code>

<a name="new_MessageFlags_new"></a>

### new MessageFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="MessageFlags.Default"></a>

### MessageFlags.Default : <code>bigint</code>

Sets the default value for the MessageFlags to 0n.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.All"></a>

### MessageFlags.All ⇒

Combines all the values of the MessageFlags.Flags object using a bitwise OR operation
and assigns the result to the MessageFlags.All property.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Returns**: The calculated value of Intents.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="MessageFlags.Flags"></a>

### MessageFlags.Flags : <code>enum</code>

Represents the different flags that can be applied to a message.

**Kind**: static enum of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
**Properties**

| Name                                   | Type                | Default       |
| -------------------------------------- | ------------------- | ------------- |
| Crossposted                            | <code>bigint</code> | <code></code> |
| Is_Crosspost                           | <code>bigint</code> | <code></code> |
| Suppress_Embeds                        | <code>bigint</code> | <code></code> |
| Source_Message_Deleted                 | <code>bigint</code> | <code></code> |
| Urgent                                 | <code>bigint</code> | <code></code> |
| Has_Thread                             | <code>bigint</code> | <code></code> |
| Ephemeral                              | <code>bigint</code> | <code></code> |
| Loading                                | <code>bigint</code> | <code></code> |
| Failed_To_Mention_Some_Roles_In_Thread | <code>bigint</code> | <code></code> |
| Suppress_Notifications                 | <code>bigint</code> | <code></code> |

<a name="MessagePayload"></a>

## MessagePayload

Represents a message payload and provides methods for creating and resolving message data.

**Kind**: global class

- [MessagePayload](#MessagePayload)
  - [.create(payload, type)](#MessagePayload.create) ⇒ <code>Promise.&lt;Object&gt;</code> \| <code>Object</code>
  - [.resolveFiles(file)](#MessagePayload.resolveFiles) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>
  - [.resolveData([payload])](#MessagePayload.resolveData) ⇒ <code>Object</code>
  - [.resolveMessageFlags(flags)](#MessagePayload.resolveMessageFlags) ⇒ <code>number</code> \| <code>undefined</code>
  - [.resolveModal(data, type)](#MessagePayload.resolveModal) ⇒ <code>Object</code>
  - [.resolveWebhook(payload, extras)](#MessagePayload.resolveWebhook) ⇒ <code>object</code>
  - [.resolveDefers(data, [type])](#MessagePayload.resolveDefers) ⇒ <code>object</code>

<a name="MessagePayload.create"></a>

### MessagePayload.create(payload, type) ⇒ <code>Promise.&lt;Object&gt;</code> \| <code>Object</code>

Creates a payload for a given type.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Promise.&lt;Object&gt;</code> \| <code>Object</code> - - The created payload.

| Param   | Type                | Description                    |
| ------- | ------------------- | ------------------------------ |
| payload | <code>Object</code> | The payload object.            |
| type    | <code>string</code> | The type of payload to create. |

<a name="MessagePayload.resolveFiles"></a>

### MessagePayload.resolveFiles(file) ⇒ <code>Promise.&lt;(Buffer\|null)&gt;</code>

Resolves a file to a Buffer object.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Promise.&lt;(Buffer\|null)&gt;</code> - - A Promise that resolves to a Buffer object or null if the file cannot be resolved.

| Param | Type                                                                         | Description          |
| ----- | ---------------------------------------------------------------------------- | -------------------- |
| file  | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>string</code> | The file to resolve. |

<a name="MessagePayload.resolveData"></a>

### MessagePayload.resolveData([payload]) ⇒ <code>Object</code>

Resolves the data payload for a message.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Object</code> - - The resolved data payload for the message.

| Param     | Type                | Description                                     |
| --------- | ------------------- | ----------------------------------------------- |
| [payload] | <code>Object</code> | The payload object containing the message data. |

<a name="MessagePayload.resolveMessageFlags"></a>

### MessagePayload.resolveMessageFlags(flags) ⇒ <code>number</code> \| <code>undefined</code>

Resolves the message flags and returns the parsed bitfield value.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>number</code> \| <code>undefined</code> - The parsed bitfield value of the message flags.

| Param | Type                | Description                   |
| ----- | ------------------- | ----------------------------- |
| flags | <code>number</code> | The message flags to resolve. |

<a name="MessagePayload.resolveModal"></a>

### MessagePayload.resolveModal(data, type) ⇒ <code>Object</code>

Resolves the modal data and returns an object with the specified type and data.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>Object</code> - - An object with the specified type and data.

| Param | Type                | Description            |
| ----- | ------------------- | ---------------------- |
| data  | <code>Object</code> | The modal data object. |
| type  | <code>string</code> | The type of the modal. |

<a name="MessagePayload.resolveWebhook"></a>

### MessagePayload.resolveWebhook(payload, extras) ⇒ <code>object</code>

Resolves a webhook payload by merging it with additional extras.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>object</code> - - The resolved webhook payload with merged extras.

| Param   | Type                | Description                                  |
| ------- | ------------------- | -------------------------------------------- |
| payload | <code>object</code> | The webhook payload object.                  |
| extras  | <code>object</code> | Additional extras to merge with the payload. |

<a name="MessagePayload.resolveDefers"></a>

### MessagePayload.resolveDefers(data, [type]) ⇒ <code>object</code>

Resolves deferred data by assigning the appropriate flags and returning the resolved data.

**Kind**: static method of [<code>MessagePayload</code>](#MessagePayload)  
**Returns**: <code>object</code> - - The resolved data object with assigned flags.

| Param  | Type                | Default        | Description                    |
| ------ | ------------------- | -------------- | ------------------------------ |
| data   | <code>object</code> |                | The data object to resolve.    |
| [type] | <code>number</code> | <code>5</code> | The type of the resolved data. |

<a name="Permissions"></a>

## Permissions ⇐ <code>Bitfield</code>

Class representing a Discord permission bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [Permissions](#Permissions) ⇐ <code>Bitfield</code>
  - [new Permissions(...bit)](#new_Permissions_new)
  - [.Default](#Permissions.Default) : <code>bigint</code>
  - [.All](#Permissions.All) ⇒
  - [.Flags](#Permissions.Flags) : <code>enum</code>

<a name="new_Permissions_new"></a>

### new Permissions(...bit)

Create a new Permissions bitfield

| Param  | Type                | Description             |
| ------ | ------------------- | ----------------------- |
| ...bit | <code>bigint</code> | Bit positions to enable |

<a name="Permissions.Default"></a>

### Permissions.Default : <code>bigint</code>

The default Permissions bitfield value

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
<a name="Permissions.All"></a>

### Permissions.All ⇒

Bitfield representing all permissions

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Returns**: The calculated value of Intents.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="Permissions.Flags"></a>

### Permissions.Flags : <code>enum</code>

Object containing bit flags for Permissions

**Kind**: static enum of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
**Properties**

| Name                       | Type                | Default       |
| -------------------------- | ------------------- | ------------- |
| Create_Instant_Invite      | <code>bigint</code> | <code></code> |
| Kick_Members               | <code>bigint</code> | <code></code> |
| Ban_Members                | <code>bigint</code> | <code></code> |
| Administrator              | <code>bigint</code> | <code></code> |
| Manage_Channels            | <code>bigint</code> | <code></code> |
| Manage_Guild               | <code>bigint</code> | <code></code> |
| Add_Reactions              | <code>bigint</code> | <code></code> |
| View_Audit_Log             | <code>bigint</code> | <code></code> |
| Priority_Speakers          | <code>bigint</code> | <code></code> |
| Stream                     | <code>bigint</code> | <code></code> |
| View_Channel               | <code>bigint</code> | <code></code> |
| Send_Messages              | <code>bigint</code> | <code></code> |
| Send_TTS_Messages          | <code>bigint</code> | <code></code> |
| Manage_Messages            | <code>bigint</code> | <code></code> |
| Embed_Links                | <code>bigint</code> | <code></code> |
| Attach_Files               | <code>bigint</code> | <code></code> |
| Read_Message_History       | <code>bigint</code> | <code></code> |
| Mention_Everyone           | <code>bigint</code> | <code></code> |
| Use_External_Emojis        | <code>bigint</code> | <code></code> |
| View_Guild_Analitics       | <code>bigint</code> | <code></code> |
| Connect                    | <code>bigint</code> | <code></code> |
| Speak                      | <code>bigint</code> | <code></code> |
| Mute_Members               | <code>bigint</code> | <code></code> |
| Deafen_Members             | <code>bigint</code> | <code></code> |
| Move_Members               | <code>bigint</code> | <code></code> |
| Use_Vad                    | <code>bigint</code> | <code></code> |
| Change_Nickname            | <code>bigint</code> | <code></code> |
| Manage_Nicknames           | <code>bigint</code> | <code></code> |
| Manage_Roles               | <code>bigint</code> | <code></code> |
| Manage_Webhooks            | <code>bigint</code> | <code></code> |
| Manage_Emojis_And_Stickers | <code>bigint</code> | <code></code> |
| Use_Applications_Commands  | <code>bigint</code> | <code></code> |
| Request_To_Speak           | <code>bigint</code> | <code></code> |
| Manage_Events              | <code>bigint</code> | <code></code> |
| Manage_Threads             | <code>bigint</code> | <code></code> |
| Create_Public_Threads      | <code>bigint</code> | <code></code> |
| Create_Private_Threads     | <code>bigint</code> | <code></code> |
| Use_External_Stickers      | <code>bigint</code> | <code></code> |
| Send_Messages_In_Threads   | <code>bigint</code> | <code></code> |
| Use_Embedded_Activities    | <code>bigint</code> | <code></code> |
| Moderate_Members           | <code>bigint</code> | <code></code> |

#include "collections/RaidenCol.md.md"
<a name="RoleFlags"></a>

## RoleFlags ⇐ <code>Bitfield</code>

Represents the possible flags for a Role

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [RoleFlags](#RoleFlags) ⇐ <code>Bitfield</code>
  - [new RoleFlags(...bit)](#new_RoleFlags_new)
  - [.Default](#RoleFlags.Default) : <code>bigint</code>
  - [.All](#RoleFlags.All) ⇒
  - [.Flags](#RoleFlags.Flags) : <code>enum</code>

<a name="new_RoleFlags_new"></a>

### new RoleFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="RoleFlags.Default"></a>

### RoleFlags.Default : <code>bigint</code>

Sets the RoleFlags.Default value to 0n.

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
**Read only**: true  
<a name="RoleFlags.All"></a>

### RoleFlags.All ⇒

Calculates the bitwise OR of all the values in the RoleFlags.Flags object and assigns
the result to the RoleFlags.All property.

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
**Returns**: The calculated value of RoleFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="RoleFlags.Flags"></a>

### RoleFlags.Flags : <code>enum</code>

Represents the available role flags.

**Kind**: static enum of [<code>RoleFlags</code>](#RoleFlags)  
**Read only**: true  
**Properties**

| Name      | Type                | Default       |
| --------- | ------------------- | ------------- |
| In_Prompt | <code>bigint</code> | <code></code> |

<a name="Snowflake"></a>

## Snowflake

Represents a Snowflake, a unique identifier used in distributed systems.

**Kind**: global class

- [Snowflake](#Snowflake)
  - [.deconstruct(snowflake)](#Snowflake.deconstruct) ⇒ <code>Object</code>
  - [.generate([timestamp])](#Snowflake.generate) ⇒ <code>string</code>

<a name="Snowflake.deconstruct"></a>

### Snowflake.deconstruct(snowflake) ⇒ <code>Object</code>

Deconstructs a Discord snowflake into its individual components.

**Kind**: static method of [<code>Snowflake</code>](#Snowflake)  
**Returns**: <code>Object</code> - An object containing the deconstructed components of the snowflake:

- createdAt: The date and time when the snowflake was created.
- timestamp: The timestamp of the snowflake.
- workerId: The ID of the worker that generated the snowflake.
- processId: The ID of the process that generated the snowflake.
- increment: The increment portion of the snowflake.
- binary: The binary representation of the snowflake.

| Param     | Type                | Description                   |
| --------- | ------------------- | ----------------------------- |
| snowflake | <code>string</code> | The snowflake to deconstruct. |

<a name="Snowflake.generate"></a>

### Snowflake.generate([timestamp]) ⇒ <code>string</code>

Generates a unique ID based on the given timestamp.

**Kind**: static method of [<code>Snowflake</code>](#Snowflake)  
**Returns**: <code>string</code> - - The generated unique ID.  
**Throws**:

- <code>TypeError</code> - If the timestamp is not a number or a valid Date object.

| Param       | Type                                     | Default                 | Description                            |
| ----------- | ---------------------------------------- | ----------------------- | -------------------------------------- |
| [timestamp] | <code>number</code> \| <code>Date</code> | <code>Date.now()</code> | The timestamp to generate the ID from. |

<a name="StickerPayload"></a>

## StickerPayload

Represents a sticker payload.

**Kind**: global class

- [StickerPayload](#StickerPayload)
  - [.create(payload)](#StickerPayload.create) ⇒ <code>Promise.&lt;Object&gt;</code>
  - [.resolveData([data])](#StickerPayload.resolveData) ⇒ <code>Object</code>

<a name="StickerPayload.create"></a>

### StickerPayload.create(payload) ⇒ <code>Promise.&lt;Object&gt;</code>

Creates a payload for an API request.

**Kind**: static method of [<code>StickerPayload</code>](#StickerPayload)  
**Returns**: <code>Promise.&lt;Object&gt;</code> - - The created payload.

| Param   | Type                | Description         |
| ------- | ------------------- | ------------------- |
| payload | <code>Object</code> | The payload object. |

<a name="StickerPayload.resolveData"></a>

### StickerPayload.resolveData([data]) ⇒ <code>Object</code>

Resolves the data object by validating and formatting its properties.

**Kind**: static method of [<code>StickerPayload</code>](#StickerPayload)  
**Returns**: <code>Object</code> - - The resolved data object with validated and formatted properties.  
**Throws**:

- <code>RangeError</code> - If the name property is not between 2 and 30 characters.
- <code>RangeError</code> - If the description property is not between 2 and 100 characters.
- <code>RangeError</code> - If the tags property is longer than 200 characters.

| Param  | Type                | Description                 |
| ------ | ------------------- | --------------------------- |
| [data] | <code>Object</code> | The data object to resolve. |

<a name="SystemChannelFlags"></a>

## SystemChannelFlags ⇐ <code>Bitfield</code>

A bitfield that represents the system channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [SystemChannelFlags](#SystemChannelFlags) ⇐ <code>Bitfield</code>
  - [new SystemChannelFlags(...bit)](#new_SystemChannelFlags_new)
  - [.Default](#SystemChannelFlags.Default) : <code>bigint</code>
  - [.All](#SystemChannelFlags.All) ⇒
  - [.Flags](#SystemChannelFlags.Flags) : <code>enum</code>

<a name="new_SystemChannelFlags_new"></a>

### new SystemChannelFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="SystemChannelFlags.Default"></a>

### SystemChannelFlags.Default : <code>bigint</code>

Sets the default value for the SystemChannelFlags property.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
<a name="SystemChannelFlags.All"></a>

### SystemChannelFlags.All ⇒

Calculates the value of the SystemChannelFlags.All property by performing a bitwise OR operation
on all the values of the SystemChannelFlags.Flags object.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Returns**: The calculated value of SystemChannelFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="SystemChannelFlags.Flags"></a>

### SystemChannelFlags.Flags : <code>enum</code>

Represents the flags for the system channel.

**Kind**: static enum of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
**Properties**

| Name                                                     | Type                | Default       |
| -------------------------------------------------------- | ------------------- | ------------- |
| Suppress_Join_Notifications                              | <code>bigint</code> | <code></code> |
| Suppress_Premium_Subscriptions                           | <code>bigint</code> | <code></code> |
| Suppress_Guild_Reminder_Notifications                    | <code>bigint</code> | <code></code> |
| Suppress_Join_Notification_Replies                       | <code>bigint</code> | <code></code> |
| Suppress_Role_Subscription_Purchase_Notifications        | <code>bigint</code> | <code></code> |
| Suppress_Role_Subscription_Purchase_Notification_Replies | <code>bigint</code> | <code></code> |

<a name="ThreadMemberFlags"></a>

## ThreadMemberFlags ⇐ <code>Bitfield</code>

A bitfield of flags for a thread member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ThreadMemberFlags](#ThreadMemberFlags) ⇐ <code>Bitfield</code>
  - [new ThreadMemberFlags(...bit)](#new_ThreadMemberFlags_new)
  - [.Default](#ThreadMemberFlags.Default) : <code>bigint</code>
  - [.All](#ThreadMemberFlags.All) ⇒
  - [.Flags](#ThreadMemberFlags.Flags) : <code>enum</code>

<a name="new_ThreadMemberFlags_new"></a>

### new ThreadMemberFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="ThreadMemberFlags.Default"></a>

### ThreadMemberFlags.Default : <code>bigint</code>

Sets the default value for the ThreadMemberFlags property.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
<a name="ThreadMemberFlags.All"></a>

### ThreadMemberFlags.All ⇒

Calculates the bitwise OR of all the values in the ThreadMemberFlags.Flags object
and assigns the result to the ThreadMemberFlags.All property.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Returns**: The calculated value of ThreadMemberFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="ThreadMemberFlags.Flags"></a>

### ThreadMemberFlags.Flags : <code>enum</code>

An object that represents the flags for a thread member.

**Kind**: static enum of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
**Properties**

| Name           | Type                | Default       |
| -------------- | ------------------- | ------------- |
| Has_Interacted | <code>bigint</code> | <code></code> |
| All_Messages   | <code>bigint</code> | <code></code> |
| Only_Mentions  | <code>bigint</code> | <code></code> |
| No_Messages    | <code>bigint</code> | <code></code> |

<a name="UserFlags"></a>

## UserFlags ⇐ <code>Bitfield</code>

Represents a set of user flags using a bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [UserFlags](#UserFlags) ⇐ <code>Bitfield</code>
  - [new UserFlags(...bit)](#new_UserFlags_new)
  - [.Default](#UserFlags.Default) : <code>bigint</code>
  - [.All](#UserFlags.All) ⇒
  - [.Flags](#UserFlags.Flags) : <code>enum</code>

<a name="new_UserFlags_new"></a>

### new UserFlags(...bit)

Constructs a new instance of the class.

| Param  | Type                | Description                                          |
| ------ | ------------------- | ---------------------------------------------------- |
| ...bit | <code>bigint</code> | The arguments to pass to the superclass constructor. |

<a name="UserFlags.Default"></a>

### UserFlags.Default : <code>bigint</code>

Sets the default value for the UserFlags to 0n.

**Kind**: static property of [<code>UserFlags</code>](#UserFlags)  
**Read only**: true  
<a name="UserFlags.All"></a>

### UserFlags.All ⇒

Combines all the values of the UserFlags.Flags object using a bitwise OR operation
and assigns the result to the UserFlags.All property.

**Kind**: static property of [<code>UserFlags</code>](#UserFlags)  
**Returns**: The calculated value of UserFlags.All.

| Param | Type                | Description    |
| ----- | ------------------- | -------------- |
| All   | <code>bigint</code> | All bit value. |

<a name="UserFlags.Flags"></a>

### UserFlags.Flags : <code>enum</code>

An object that represents various user flags in Discord.
Each flag is represented as a bit in a BigInt value.

**Kind**: static enum of [<code>UserFlags</code>](#UserFlags)  
**Read only**: true  
**Properties**

| Name                     | Type                | Default       |
| ------------------------ | ------------------- | ------------- |
| Staff                    | <code>bigint</code> | <code></code> |
| Partner                  | <code>bigint</code> | <code></code> |
| Hypesquad                | <code>bigint</code> | <code></code> |
| Bug_Hunter_Level_1       | <code>bigint</code> | <code></code> |
| Hypesquad_Online_House_1 | <code>bigint</code> | <code></code> |
| Hypesquad_Online_House_2 | <code>bigint</code> | <code></code> |
| Hypesquad_Online_House_3 | <code>bigint</code> | <code></code> |
| Premium_Early_Supporter  | <code>bigint</code> | <code></code> |
| Team_Pseudo_User         | <code>bigint</code> | <code></code> |
| Bug_Hunter_Level_2       | <code>bigint</code> | <code></code> |
| Verified_Bot             | <code>bigint</code> | <code></code> |
| Verified_Developer       | <code>bigint</code> | <code></code> |
| Certified_Moderator      | <code>bigint</code> | <code></code> |
| Bot_Http_Interactions    | <code>bigint</code> | <code></code> |
| Active_Developer         | <code>bigint</code> | <code></code> |

<a name="UserPayload"></a>

## UserPayload

A class representing a user payload.

**Kind**: global class  
<a name="UserPayload.create"></a>

### UserPayload.create(payload) ⇒ <code>Object</code>

Creates a user object based on the given payload.

**Kind**: static method of [<code>UserPayload</code>](#UserPayload)  
**Returns**: <code>Object</code> - - The created user object.

| Param                     | Type                | Description                                     |
| ------------------------- | ------------------- | ----------------------------------------------- |
| payload                   | <code>Object</code> | The payload object containing user information. |
| payload.username          | <code>string</code> | The username of the user.                       |
| payload.bio               | <code>string</code> | The bio of the user.                            |
| payload.avatar            | <code>string</code> | The avatar image of the user.                   |
| payload.avatarDecorations | <code>string</code> | The avatar decorations image of the user.       |

<a name="Util"></a>

## Util

Utility class with various helper functions.

**Kind**: global class

- [Util](#Util)
  - [.generateDiscordTimestamp(time, style)](#Util.generateDiscordTimestamp) ⇒ <code>string</code>
  - [.resolveColor(color)](#Util.resolveColor) ⇒ <code>number</code>
  - [.getBuffer(file)](#Util.getBuffer) ⇒ <code>Promise.&lt;Buffer&gt;</code>
  - [.generateDataURI(base64)](#Util.generateDataURI) ⇒ <code>string</code> \| <code>undefined</code>
  - [.generateFile(buffer, [filename])](#Util.generateFile) ⇒
  - [.base64ToBuffer(base64)](#Util.base64ToBuffer) ⇒ <code>Buffer</code>
  - [.generateISOString([date])](#Util.generateISOString) ⇒ <code>string</code> \| <code>null</code>

<a name="Util.generateDiscordTimestamp"></a>

### Util.generateDiscordTimestamp(time, style) ⇒ <code>string</code>

Generates a Discord timestamp string based on the given time and style.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> - - The formatted Discord timestamp string.

| Param | Type                | Description                                                                                                                                                                                                                                                                   |
| ----- | ------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| time  | <code>number</code> | The Unix timestamp to format.                                                                                                                                                                                                                                                 |
| style | <code>string</code> | The style of the timestamp. Valid values are "t" (short time), "T" (long time), "d" (short date), "D" (long date), "f" (short date/time), "F" (long date/time), "R" (relative time), "r" (relative time with seconds), "c" (calendar time), "C" (calendar time with seconds). |

<a name="Util.resolveColor"></a>

### Util.resolveColor(color) ⇒ <code>number</code>

Resolves a color value to its corresponding integer representation.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>number</code> - - The resolved color value as an integer.

| Param | Type                                       | Description                                                                                                                                |
| ----- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------ |
| color | <code>string</code> \| <code>number</code> | The color value to resolve. Can be a string representing a color name or a hexadecimal color code, or a number representing a color value. |

<a name="Util.getBuffer"></a>

### Util.getBuffer(file) ⇒ <code>Promise.&lt;Buffer&gt;</code>

Retrieves the buffer data from the given file.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Promise.&lt;Buffer&gt;</code> - - The buffer data of the file.

| Param | Type                                                                         | Description                                |
| ----- | ---------------------------------------------------------------------------- | ------------------------------------------ |
| file  | <code>Buffer</code> \| <code>MessageAttachment</code> \| <code>string</code> | The file to retrieve the buffer data from. |

<a name="Util.generateDataURI"></a>

### Util.generateDataURI(base64) ⇒ <code>string</code> \| <code>undefined</code>

Generates a data URI from a base64 string or a Buffer object.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> \| <code>undefined</code> - - The data URI string or undefined if base64 is falsy.

| Param  | Type                                       | Description                         |
| ------ | ------------------------------------------ | ----------------------------------- |
| base64 | <code>string</code> \| <code>Buffer</code> | The base64 string or Buffer object. |

<a name="Util.generateFile"></a>

### Util.generateFile(buffer, [filename]) ⇒

Generates a file with the given buffer and filename.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: None

| Param      | Type                                       | Description                                                                                             |
| ---------- | ------------------------------------------ | ------------------------------------------------------------------------------------------------------- |
| buffer     | <code>Buffer</code> \| <code>string</code> | The buffer or path to the file content.                                                                 |
| [filename] | <code>string</code>                        | The name of the file to be generated. If not provided, "file.txt" will be used as the default filename. |

<a name="Util.base64ToBuffer"></a>

### Util.base64ToBuffer(base64) ⇒ <code>Buffer</code>

Converts a base64 encoded string to a buffer.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>Buffer</code> - - The buffer representation of the base64 string.

| Param  | Type                | Description                |
| ------ | ------------------- | -------------------------- |
| base64 | <code>string</code> | The base64 encoded string. |

<a name="Util.generateISOString"></a>

### Util.generateISOString([date]) ⇒ <code>string</code> \| <code>null</code>

Generates an ISO string representation of the given date.

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> \| <code>null</code> - - The ISO string representation of the date, or null if the input is null.

| Param  | Type                                     | Default                 | Description                                                                                    |
| ------ | ---------------------------------------- | ----------------------- | ---------------------------------------------------------------------------------------------- |
| [date] | <code>number</code> \| <code>Date</code> | <code>Date.now()</code> | The date to convert to an ISO string. If not provided, the current date and time will be used. |
