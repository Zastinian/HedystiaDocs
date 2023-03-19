<a name="ChannelFlags"></a>

## ChannelFlags ⇐ <code>Bitfield</code>
Class representing bitfields of Channel flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [ChannelFlags](#ChannelFlags) ⇐ <code>Bitfield</code>
    * [new ChannelFlags(...bit)](#new_ChannelFlags_new)
    * [.Default](#ChannelFlags.Default) : <code>bigint</code>
    * [.Flags](#ChannelFlags.Flags) : <code>Object</code>
    * [.All](#ChannelFlags.All) : <code>bigint</code>

<a name="new_ChannelFlags_new"></a>

### new ChannelFlags(...bit)
Creates a new instance of the ChannelFlags class.


| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Bit numbers to include in the Bitfield. |

<a name="ChannelFlags.Default"></a>

### ChannelFlags.Default : <code>bigint</code>
Default value for the ChannelFlags class.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
<a name="ChannelFlags.Flags"></a>

### ChannelFlags.Flags : <code>Object</code>
Channel flags and their corresponding bit numbers.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
**Properties**

| Name | Type | Description |
| --- | --- | --- |
| Guild_Feed_Removed | <code>bigint</code> | Flag for guild feeds being removed. |
| Pinned | <code>bigint</code> | Flag for pinned messages. |
| Active_Channels_Removed | <code>bigint</code> | Flag for active channels being removed. |
| Require_Tag | <code>bigint</code> | Flag for tags being required. |

<a name="ChannelFlags.All"></a>

### ChannelFlags.All : <code>bigint</code>
Bitwise OR operation on all flags to get a bitfield with all flags.

**Kind**: static property of [<code>ChannelFlags</code>](#ChannelFlags)  
