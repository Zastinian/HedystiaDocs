<a name="SystemChannelFlags"></a>

## SystemChannelFlags ⇐ <code>Bitfield</code>
A bitfield that represents the system channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [SystemChannelFlags](#SystemChannelFlags) ⇐ <code>Bitfield</code>
    * [new SystemChannelFlags(...bit)](#new_SystemChannelFlags_new)
    * [.Default](#SystemChannelFlags.Default) : <code>bigint</code>
    * [.Flags](#SystemChannelFlags.Flags) : <code>Object.&lt;string, bigint&gt;</code>
    * [.All](#SystemChannelFlags.All) : <code>bigint</code>

<a name="new_SystemChannelFlags_new"></a>

### new SystemChannelFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Bit(s) to set initially. |

<a name="SystemChannelFlags.Default"></a>

### SystemChannelFlags.Default : <code>bigint</code>
The default bitfield of a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
<a name="SystemChannelFlags.Flags"></a>

### SystemChannelFlags.Flags : <code>Object.&lt;string, bigint&gt;</code>
Available flags for a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Suppress_Join_Notifications | <code>bigint</code> | Suppress member join notifications. |
| Suppress_Premium_Subscriptions | <code>bigint</code> | Suppress server boost notifications. |
| Suppress_Guild_Reminder_Notifications | <code>bigint</code> | Suppress server event notifications. |
| Suppress_Join_Notification_Replies | <code>bigint</code> | Suppress replies to member join notifications. |
| Suppress_Role_Subscription_Purchase_Notifications | <code>bigint</code> | - Suppress role subscription notifications. |
| Suppress_Role_Subscription_Purchase_Notification_Replies | <code>bigint</code> | - Suppress replies to role subscription notifications. |

<a name="SystemChannelFlags.All"></a>

### SystemChannelFlags.All : <code>bigint</code>
All available flags for a system channel.

**Kind**: static property of [<code>SystemChannelFlags</code>](#SystemChannelFlags)  
