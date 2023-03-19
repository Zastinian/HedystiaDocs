<a name="Intents"></a>

## Intents
Represents the intents that the bot wishes to subscribe to.

**Kind**: global class  

* [Intents](#Intents)
    * [new Intents(...bit)](#new_Intents_new)
    * [.Default](#Intents.Default) : <code>bigint</code>
    * [.All](#Intents.All) : <code>bigint</code>
    * [.Flags](#Intents.Flags) : <code>enum</code>

<a name="new_Intents_new"></a>

### new Intents(...bit)
Creates a new Intents bitfield.


| Param | Type | Description |
| --- | --- | --- |
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

| Name | Type | Default |
| --- | --- | --- |
| Guilds | <code>bigint</code> | <code></code> | 
| Guild_Members | <code>bigint</code> | <code></code> | 
| Guild_Moderation | <code>bigint</code> | <code></code> | 
| Guild_Emojis_And_Stickers | <code>bigint</code> | <code></code> | 
| Guild_Integrations | <code>bigint</code> | <code></code> | 
| Guild_Webhooks | <code>bigint</code> | <code></code> | 
| Guild_Invites | <code>bigint</code> | <code></code> | 
| Guild_Voice_States | <code>bigint</code> | <code></code> | 
| Guild_Presences | <code>bigint</code> | <code></code> | 
| Guild_Messages | <code>bigint</code> | <code></code> | 
| Guild_Message_Reactions | <code>bigint</code> | <code></code> | 
| Guild_Message_Typing | <code>bigint</code> | <code></code> | 
| Direct_Messages | <code>bigint</code> | <code></code> | 
| Direct_Message_Reactions | <code>bigint</code> | <code></code> | 
| Direct_Message_Typing | <code>bigint</code> | <code></code> | 
| Message_Content | <code>bigint</code> | <code></code> | 
| Guild_Scheduled_Events | <code>bigint</code> | <code></code> | 
| Auto_Moderation_Configuration | <code>bigint</code> | <code></code> | 
| Auto_Moderation_Execution | <code>bigint</code> | <code></code> | 

