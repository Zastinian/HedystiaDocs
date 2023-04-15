---
id: utils
title: Utils
description: Utils Section
sidebar_position: 6
keywords: [Hedystia, MrEsmile, Hedystia Bot, Boxmine]
---

<a name="ActivityFlags"></a>

## ActivityFlags ⇐ <code>Bitfield</code>

Represents a set of flags that can be used to represent various activity options.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ActivityFlags](#ActivityFlags) ⇐ <code>Bitfield</code>
  - [new ActivityFlags(...bit)](#new_ActivityFlags_new)
  - [.Default](#ActivityFlags.Default) : <code>number</code>
  - [.All](#ActivityFlags.All) : <code>number</code>
  - [.Flags](#ActivityFlags.Flags) : <code>enum</code>

<a name="new_ActivityFlags_new"></a>

### new ActivityFlags(...bit)

Creates a new ActivityFlags instance.

| Param  | Type                | Description                                      |
| ------ | ------------------- | ------------------------------------------------ |
| ...bit | <code>number</code> | The bits to set for this ActivityFlags instance. |

<a name="ActivityFlags.Default"></a>

### ActivityFlags.Default : <code>number</code>

The default flag value.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
<a name="ActivityFlags.All"></a>

### ActivityFlags.All : <code>number</code>

All available flag values.

**Kind**: static property of [<code>ActivityFlags</code>](#ActivityFlags)  
<a name="ActivityFlags.Flags"></a>

### ActivityFlags.Flags : <code>enum</code>

The individual flags that can be used to represent activity options.

**Kind**: static enum of [<code>ActivityFlags</code>](#ActivityFlags)  
**Read only**: true  
**Properties**

| Name                        | Type                                       | Default       |
| --------------------------- | ------------------------------------------ | ------------- |
| Instance                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Join                        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Spectate                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Join_Request                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Sync                        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Play                        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Party_Privacy_Friends       | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Party_Privacy_Voice_Channel | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Embedded                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="ApplicationFlags"></a>

## ApplicationFlags ⇐ <code>Bitfield</code>

A bitfield for application flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ApplicationFlags](#ApplicationFlags) ⇐ <code>Bitfield</code>
  - [new ApplicationFlags(...bit)](#new_ApplicationFlags_new)
  - [.Default](#ApplicationFlags.Default) : <code>number</code>
  - [.All](#ApplicationFlags.All) : <code>number</code>
  - [.Flags](#ApplicationFlags.Flags) : <code>enum</code>

<a name="new_ApplicationFlags_new"></a>

### new ApplicationFlags(...bit)

Creates a new ApplicationFlags instance.

| Param  | Type                | Description                   |
| ------ | ------------------- | ----------------------------- |
| ...bit | <code>number</code> | Bit(s) to set in the bitfield |

<a name="ApplicationFlags.Default"></a>

### ApplicationFlags.Default : <code>number</code>

Default application flag bitfield.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
<a name="ApplicationFlags.All"></a>

### ApplicationFlags.All : <code>number</code>

All application flag bitfields.

**Kind**: static property of [<code>ApplicationFlags</code>](#ApplicationFlags)  
<a name="ApplicationFlags.Flags"></a>

### ApplicationFlags.Flags : <code>enum</code>

Application flag bitfields.

**Kind**: static enum of [<code>ApplicationFlags</code>](#ApplicationFlags)  
**Read only**: true  
**Properties**

| Name                             | Type                                       | Default       |
| -------------------------------- | ------------------------------------------ | ------------- |
| Gateway_Presence                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Gateway_Presence_Limited         | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Gateway_Guild_Members            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Gateway_Guild_Members_Limited    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Verification_Pending_Guild_Limit | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Embedded                         | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Gateway_Message_Content          | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Gateway_Message_Content_Limited  | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Application_Command_Badge        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="module_Bitfield"></a>

## Bitfield

It's a class that allows you to create a bitfield, and then you can add, remove, and check if a
bitfield has a certain bit

<a name="ChannelFlags"></a>

## ChannelFlags ⇐ <code>Bitfield</code>

Class representing bitfields of Channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ChannelFlags](#ChannelFlags) ⇐ <code>Bitfield</code>
  - [new ChannelFlags(...bit)](#new_ChannelFlags_new)
  - [.Default](#ChannelFlags.Default) : <code>bigint</code>
  - [.All](#ChannelFlags.All) : <code>bigint</code>
  - [.Flags](#ChannelFlags.Flags) : <code>enum</code>

<a name="new_ChannelFlags_new"></a>

### new ChannelFlags(...bit)

Creates a new instance of the ChannelFlags class.

| Param  | Type                | Description                             |
| ------ | ------------------- | --------------------------------------- |
| ...bit | <code>number</code> | Bit numbers to include in the Bitfield. |

<a name="ChannelFlags.Default"></a>

### ChannelFlags.Default : <code>bigint</code>

Default value for the ChannelFlags class.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
<a name="ChannelFlags.All"></a>

### ChannelFlags.All : <code>bigint</code>

Bitwise OR operation on all flags to get a bitfield with all flags.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
<a name="ChannelFlags.Flags"></a>

### ChannelFlags.Flags : <code>enum</code>

Channel flags and their corresponding bit numbers.

**Kind**: static enum of [<code>ChannelFlags</code>](#ChannelFlags)  
**Read only**: true  
**Properties**

| Name        | Type                                       | Default       |
| ----------- | ------------------------------------------ | ------------- |
| Pinned      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Require_Tag | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="ActivityType"></a>

## ActivityType ⇒

It creates an object with the keys being the index of the value in the array and the value being the
value in the array.

**Kind**: global variable  
**Returns**: The return value is an object with the following properties:

| Param | Description                                               |
| ----- | --------------------------------------------------------- |
| keys  | An array of strings that will be used to create the enum. |

<a name="module_DataManager"></a>

## DataManager

It resolves a file to a buffer

<a name="module_EmojiResolver"></a>

## EmojiResolver

It transforms an emoji into a string that can be used in a message

<a name="GuildMemberFlags"></a>

## GuildMemberFlags ⇐ <code>Bitfield</code>

A bitfield that represents flags for a guild member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [GuildMemberFlags](#GuildMemberFlags) ⇐ <code>Bitfield</code>
  - [new GuildMemberFlags(...bit)](#new_GuildMemberFlags_new)
  - [.Default](#GuildMemberFlags.Default) : <code>bigint</code>
  - [.All](#GuildMemberFlags.All) : <code>bigint</code>
  - [.Flags](#GuildMemberFlags.Flags) : <code>enum</code>

<a name="new_GuildMemberFlags_new"></a>

### new GuildMemberFlags(...bit)

| Param  | Type                | Description     |
| ------ | ------------------- | --------------- |
| ...bit | <code>string</code> | The bits to set |

<a name="GuildMemberFlags.Default"></a>

### GuildMemberFlags.Default : <code>bigint</code>

The default value for a guild member's flags.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
<a name="GuildMemberFlags.All"></a>

### GuildMemberFlags.All : <code>bigint</code>

The value of all guild member flags combined.

**Kind**: static property of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
<a name="GuildMemberFlags.Flags"></a>

### GuildMemberFlags.Flags : <code>enum</code>

The flags for a guild member.

**Kind**: static enum of [<code>GuildMemberFlags</code>](#GuildMemberFlags)  
**Read only**: true  
**Properties**

| Name                  | Type                                       | Default       |
| --------------------- | ------------------------------------------ | ------------- |
| Did_Rejoin            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Completed_Onboarding  | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Bypasses_Verification | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Started_Onboarding    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="Intents"></a>

## Intents

Represents the intents that the bot wishes to subscribe to.

**Kind**: global class

- [Intents](#Intents)
  - [new Intents(...bit)](#new_Intents_new)
  - [.Default](#Intents.Default) : <code>bigint</code>
  - [.All](#Intents.All) : <code>bigint</code>
  - [.Flags](#Intents.Flags) : <code>enum</code>

<a name="new_Intents_new"></a>

### new Intents(...bit)

Creates a new Intents bitfield.

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| ...bit | <code>number</code> | Bit(s) to set in the bitfield. |

<a name="Intents.Default"></a>

### Intents.Default : <code>bigint</code>

The default value for the Intents bitfield.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Read only**: true  
<a name="Intents.All"></a>

### Intents.All : <code>bigint</code>

The value that represents all flags in the Intents bitfield.

**Kind**: static property of [<code>Intents</code>](#Intents)  
**Read only**: true  
<a name="Intents.Flags"></a>

### Intents.Flags : <code>enum</code>

The available flags for the Intents bitfield.

**Kind**: static enum of [<code>Intents</code>](#Intents)  
**Read only**: true  
**Properties**

| Name                          | Type                                       | Default       |
| ----------------------------- | ------------------------------------------ | ------------- |
| Guilds                        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Members                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Moderation              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Emojis_And_Stickers     | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Integrations            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Webhooks                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Invites                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Voice_States            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Presences               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Messages                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Message_Reactions       | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Message_Typing          | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Direct_Messages               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Direct_Message_Reactions      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Direct_Message_Typing         | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Message_Content               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Guild_Scheduled_Events        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Auto_Moderation_Configuration | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Auto_Moderation_Execution     | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="module_InvitePayload"></a>

## InvitePayload

IIt takes an object with properties that are used to create an invite

<a name="MessageFlags"></a>

## MessageFlags ⇐ <code>Bitfield</code>

Represents a bitfield for Discord message flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [MessageFlags](#MessageFlags) ⇐ <code>Bitfield</code>
  - [new MessageFlags(...bit)](#new_MessageFlags_new)
  - [.Default](#MessageFlags.Default) : <code>BigInt</code>
  - [.All](#MessageFlags.All) : <code>BigInt</code>
  - [.Flags](#MessageFlags.Flags) : <code>enum</code>

<a name="new_MessageFlags_new"></a>

### new MessageFlags(...bit)

| Param  | Type                | Description                          |
| ------ | ------------------- | ------------------------------------ |
| ...bit | <code>number</code> | Positions to enable in the bitfield. |

<a name="MessageFlags.Default"></a>

### MessageFlags.Default : <code>BigInt</code>

The default bitfield value for a new instance.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.All"></a>

### MessageFlags.All : <code>BigInt</code>

The bitfield value with all bits set to 1.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
<a name="MessageFlags.Flags"></a>

### MessageFlags.Flags : <code>enum</code>

An object mapping flag names to their corresponding bit positions.

**Kind**: static enum of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
**Properties**

| Name                                   | Type                                       | Default       |
| -------------------------------------- | ------------------------------------------ | ------------- |
| Crossposted                            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Is_Crosspost                           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Embeds                        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Source_Message_Deleted                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Urgent                                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Has_Thread                             | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Ephemeral                              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Loading                                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Failed_To_Mention_Some_Roles_In_Thread | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Notifications                 | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="module_MessagePayload"></a>

## MessagePayload

It takes a payload object and returns a payload object

<a name="Permissions"></a>

## Permissions ⇐ <code>Bitfield</code>

Class representing a Discord permission bitfield.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [Permissions](#Permissions) ⇐ <code>Bitfield</code>
  - [new Permissions(...bit)](#new_Permissions_new)
  - [.Default](#Permissions.Default) : <code>bigint</code>
  - [.All](#Permissions.All) : <code>bigint</code>
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

### Permissions.All : <code>bigint</code>

Bitfield representing all permissions

**Kind**: static property of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
<a name="Permissions.Flags"></a>

### Permissions.Flags : <code>enum</code>

Object containing bit flags for Permissions

**Kind**: static enum of [<code>Permissions</code>](#Permissions)  
**Read only**: true  
**Properties**

| Name                       | Type                                       | Default       |
| -------------------------- | ------------------------------------------ | ------------- |
| Create_Instant_Invite      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Kick_Members               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Ban_Members                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Administrator              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Channels            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Guild               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Add_Reactions              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| View_Audit_Log             | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Priority_Speakers          | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Stream                     | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| View_Channel               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Send_Messages              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Send_TTS_Messages          | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Messages            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Embed_Links                | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Attach_Files               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Read_Message_History       | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Mention_Everyone           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Use_External_Emojis        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| View_Guild_Analitics       | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Connect                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Speak                      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Mute_Members               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Deafen_Members             | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Move_Members               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Use_Vad                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Change_Nickname            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Nicknames           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Roles               | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Webhooks            | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Emojis_And_Stickers | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Use_Applications_Commands  | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Request_To_Speak           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Events              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Manage_Threads             | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Create_Public_Threads      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Create_Private_Threads     | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Use_External_Stickers      | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Send_Messages_In_Threads   | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Use_Embedded_Activities    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Moderate_Members           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

#include "collections/RaidenCol.md.md"

## Classes

<dl>
<dt><a href="#RoleFlags">RoleFlags</a> ⇐ <code>Bitfield</code></dt>
<dd><p>Represents the possible flags for a Role</p>
</dd>
</dl>

## Typedefs

<dl>
<dt><a href="#RoleFlagsResolvable">RoleFlagsResolvable</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="RoleFlags"></a>

## RoleFlags ⇐ <code>Bitfield</code>

Represents the possible flags for a Role

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [RoleFlags](#RoleFlags) ⇐ <code>Bitfield</code>
  - [new RoleFlags(...bit)](#new_RoleFlags_new)
  - [.Default](#RoleFlags.Default) : <code>bigint</code>
  - [.All](#RoleFlags.All) : <code>bigint</code>
  - [.Flags](#RoleFlags.Flags) : <code>enum</code>

<a name="new_RoleFlags_new"></a>

### new RoleFlags(...bit)

| Param  | Type                | Description             |
| ------ | ------------------- | ----------------------- |
| ...bit | <code>bigint</code> | Bit positions to enable |

<a name="RoleFlags.Default"></a>

### RoleFlags.Default : <code>bigint</code>

The default bit(s) for a role

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
<a name="RoleFlags.All"></a>

### RoleFlags.All : <code>bigint</code>

The total bit(s) of all the flags combined

**Kind**: static property of [<code>RoleFlags</code>](#RoleFlags)  
<a name="RoleFlags.Flags"></a>

### RoleFlags.Flags : <code>enum</code>

The flags for a role

**Kind**: static enum of [<code>RoleFlags</code>](#RoleFlags)  
**Properties**

| Name      | Type                | Default       |
| --------- | ------------------- | ------------- |
| In_Prompt | <code>bigint</code> | <code></code> |

<a name="RoleFlagsResolvable"></a>

## RoleFlagsResolvable : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name   | Type                                       | Description          |
| ------ | ------------------------------------------ | -------------------- |
| [name] | <code>string</code>                        | The name of the flag |
| [bit]  | <code>bigint</code> \| <code>number</code> | The bit of the flag  |

<a name="module_Snowflake"></a>

## Snowflake

It takes a snowflake and returns an object with the snowflake's creation date, timestamp, worker ID,
process ID, increment, and binary

<a name="module_StickerPayload"></a>

## StickerPayload

It's a class that creates a payload for the VK API.

<a name="SystemChannelFlags"></a>

## SystemChannelFlags ⇐ <code>Bitfield</code>

A bitfield that represents the system channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [SystemChannelFlags](#SystemChannelFlags) ⇐ <code>Bitfield</code>
  - [new SystemChannelFlags(...bit)](#new_SystemChannelFlags_new)
  - [.Default](#SystemChannelFlags.Default) : <code>bigint</code>
  - [.All](#SystemChannelFlags.All) : <code>bigint</code>
  - [.Flags](#SystemChannelFlags.Flags) : <code>enum</code>

<a name="new_SystemChannelFlags_new"></a>

### new SystemChannelFlags(...bit)

| Param  | Type                | Description              |
| ------ | ------------------- | ------------------------ |
| ...bit | <code>number</code> | Bit(s) to set initially. |

<a name="SystemChannelFlags.Default"></a>

### SystemChannelFlags.Default : <code>bigint</code>

The default bitfield of a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
<a name="SystemChannelFlags.All"></a>

### SystemChannelFlags.All : <code>bigint</code>

All available flags for a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
<a name="SystemChannelFlags.Flags"></a>

### SystemChannelFlags.Flags : <code>enum</code>

Available flags for a system channel.

**Kind**: static enum of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Read only**: true  
**Properties**

| Name                                                     | Type                                       | Default       |
| -------------------------------------------------------- | ------------------------------------------ | ------------- |
| Suppress_Join_Notifications                              | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Premium_Subscriptions                           | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Guild_Reminder_Notifications                    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Join_Notification_Replies                       | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Role_Subscription_Purchase_Notifications        | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Suppress_Role_Subscription_Purchase_Notification_Replies | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

<a name="ThreadMemberFlags"></a>

## ThreadMemberFlags ⇐ <code>Bitfield</code>

A bitfield of flags for a thread member.

**Kind**: global class  
**Extends**: <code>Bitfield</code>

- [ThreadMemberFlags](#ThreadMemberFlags) ⇐ <code>Bitfield</code>
  - [new ThreadMemberFlags(...bit)](#new_ThreadMemberFlags_new)
  - [.Default](#ThreadMemberFlags.Default) : <code>bigint</code>
  - [.All](#ThreadMemberFlags.All) : <code>bigint</code>
  - [.Flags](#ThreadMemberFlags.Flags) : <code>enum</code>

<a name="new_ThreadMemberFlags_new"></a>

### new ThreadMemberFlags(...bit)

| Param  | Type                | Description                    |
| ------ | ------------------- | ------------------------------ |
| ...bit | <code>bigint</code> | Bit(s) to set in the bitfield. |

<a name="ThreadMemberFlags.Default"></a>

### ThreadMemberFlags.Default : <code>bigint</code>

Default bit value for a thread member.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
<a name="ThreadMemberFlags.All"></a>

### ThreadMemberFlags.All : <code>bigint</code>

Bitfield representing all available thread member flags.

**Kind**: static property of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
<a name="ThreadMemberFlags.Flags"></a>

### ThreadMemberFlags.Flags : <code>enum</code>

Thread member flags.

**Kind**: static enum of [<code>ThreadMemberFlags</code>](#ThreadMemberFlags)  
**Read only**: true  
**Properties**

| Name           | Type                                       | Default       |
| -------------- | ------------------------------------------ | ------------- |
| Has_Interacted | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| All_Messages   | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| Only_Mentions  | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |
| No_Messages    | <code>Object.&lt;string, bigint&gt;</code> | <code></code> |

## Classes

<dl>
<dt><a href="#UserFlags">UserFlags</a></dt>
<dd></dd>
</dl>

## Typedefs

<dl>
<dt><a href="#UserFlags">UserFlags</a> : <code>Object</code></dt>
<dd></dd>
</dl>

<a name="UserFlags"></a>

## UserFlags

**Kind**: global class

- [UserFlags](#UserFlags)
  - [new UserFlags(...bit)](#new_UserFlags_new)
  - [.Flags](#UserFlags.Flags) : <code>enum</code>

<a name="new_UserFlags_new"></a>

### new UserFlags(...bit)

| Param  | Type                                                              | Description                    |
| ------ | ----------------------------------------------------------------- | ------------------------------ |
| ...bit | <code>number</code> \| <code>string</code> \| <code>bigint</code> | Bit(s) to set in the bitfield. |

<a name="UserFlags.Flags"></a>

### UserFlags.Flags : <code>enum</code>

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

<a name="UserFlags"></a>

## UserFlags : <code>Object</code>

**Kind**: global typedef  
**Properties**

| Name  | Type                | Description             |
| ----- | ------------------- | ----------------------- |
| value | <code>bigint</code> | The raw bitfield value. |

- [UserFlags](#UserFlags) : <code>Object</code>
  - [new UserFlags(...bit)](#new_UserFlags_new)
  - [.Flags](#UserFlags.Flags) : <code>enum</code>

<a name="new_UserFlags_new"></a>

### new UserFlags(...bit)

| Param  | Type                                                              | Description                    |
| ------ | ----------------------------------------------------------------- | ------------------------------ |
| ...bit | <code>number</code> \| <code>string</code> \| <code>bigint</code> | Bit(s) to set in the bitfield. |

<a name="UserFlags.Flags"></a>

### UserFlags.Flags : <code>enum</code>

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

<a name="module_UserPayload"></a>

## UserPayload

It takes in a payload object, and returns a new object with the same keys, but with the values of
the keys being the values of the keys in the payload object, or undefined if the key doesn't exist
in the payload object

<a name="module_Util"></a>

## Util

It's a class that contains static methods that are used to generate Discord timestamps, resolve
colors, get buffers, generate data URIs, generate files, convert base64 to buffers, and generate ISO
strings.
