<a name="MessageFlags"></a>

## MessageFlags ⇐ <code>Bitfield</code>
Represents a bitfield for Discord message flags.

**Kind**: global class  
**Extends**: <code>Bitfield</code>  

* [MessageFlags](#MessageFlags) ⇐ <code>Bitfield</code>
    * [new MessageFlags(...bit)](#new_MessageFlags_new)
    * [.Flags](#MessageFlags.Flags) : <code>Object.&lt;string, BigInt&gt;</code>
    * [.Default](#MessageFlags.Default) : <code>BigInt</code>
    * [.All](#MessageFlags.All) : <code>BigInt</code>

<a name="new_MessageFlags_new"></a>

### new MessageFlags(...bit)

| Param | Type | Description |
| --- | --- | --- |
| ...bit | <code>number</code> | Positions to enable in the bitfield. |

<a name="MessageFlags.Flags"></a>

### MessageFlags.Flags : <code>Object.&lt;string, BigInt&gt;</code>
An object mapping flag names to their corresponding bit positions.

**Kind**: static property of [<code>MessageFlags</code>](#MessageFlags)  
**Read only**: true  
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
