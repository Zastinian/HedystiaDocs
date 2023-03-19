<a name="ApplicationFlags"></a>

## ApplicationFlags ⇐ <code>Bitfield</code>
A bitfield for application flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ApplicationFlags](#ApplicationFlags) ⇐ <code>Bitfield</code>
    * [new ApplicationFlags(...bit)](#new_ApplicationFlags_new)
    * [.Default](#ApplicationFlags.Default) : <code>number</code>
    * [.All](#ApplicationFlags.All) : <code>number</code>
    * [.Flags](#ApplicationFlags.Flags) : <code>enum</code>

<a name="new_ApplicationFlags_new"></a>

### new ApplicationFlags(...bit)
Creates a new ApplicationFlags instance.


| Param | Type | Description |
| --- | --- | --- |
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

| Name | Type | Default | Description |
| --- | --- | --- | --- |
| Embedded_Released | <code>number</code> |  | The application has been embedded |
| Managed_Emoji | <code>number</code> |  | The application can create emojis |
| Group_Dm_Create | <code>number</code> |  | The application can create group DMs |
| Gateway_Presence | <code>number</code> |  | The application can use gateway presence intents |
| Gateway_Presence_Limited | <code>number</code> |  | The application can use gateway presence intents, but with lower privileged intents |
| Gateway_Guild_Members | <code>number</code> |  | The application can use gateway guild members intents |
| Gateway_Guild_Members_Limited | <code>number</code> |  | The application can use gateway guild members intents, but with lower privileged intents |
| Verification_Pending_Guild_Limit | <code>number</code> |  | The application's guild limit is pending verification |
| Embedded | <code>number</code> |  | The application is embedded |
| Gateway_Message_Content | <code>number</code> |  | The application can use gateway message content intents |
| Gateway_Message_Content_Limited | <code>number</code> |  | The application can use gateway message content intents, but with lower privileged intents |
| Embedded_First_Party | <code>number</code> |  | The application is a first party embedded application |
| Embedded_Released | <code>number</code> | <code></code> |  |
| Managed_Emoji | <code>number</code> | <code></code> |  |
| Group_Dm_Create | <code>number</code> | <code></code> |  |
| Gateway_Presence | <code>number</code> | <code></code> |  |
| Gateway_Presence_Limited | <code>number</code> | <code></code> |  |
| Gateway_Guild_Members | <code>number</code> | <code></code> |  |
| Gateway_Guild_Members_Limited | <code>number</code> | <code></code> |  |
| Verification_Pending_Guild_Limit | <code>number</code> | <code></code> |  |
| Embedded | <code>number</code> | <code></code> |  |
| Gateway_Message_Content | <code>number</code> | <code></code> |  |
| Gateway_Message_Content_Limited | <code>number</code> | <code></code> |  |
| Embedded_First_Party | <code>number</code> | <code></code> |  |

