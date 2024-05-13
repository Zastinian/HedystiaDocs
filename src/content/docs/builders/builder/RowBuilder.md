---
title: RowBuilder
sidebar:
  order: 3
---

It's a constructor function that takes an object as an argument and sets the type property to 1 and
the components property to the components property of the object if it exists, otherwise it sets it
to an empty array

**Kind**: global class

- [RowBuilder](#RowBuilder)
  - [new RowBuilder([data])](#new_RowBuilder_new)
  - [.addComponents(button)](#RowBuilder+addComponents) ⇒ [<code>RowBuilder</code>](#RowBuilder)
  - [.build()](#RowBuilder+build) ⇒ <code>Array.&lt;object&gt;</code>

<a name="new_RowBuilder_new"></a>

### new RowBuilder([data])

It's a constructor function that takes an object as an argument and sets the type property to 1 and
the components property to the components property of the object if it exists, otherwise it sets it
to an empty array.

| Param  | Description                                        |
| ------ | -------------------------------------------------- |
| [data] | The data object that is passed to the constructor. |

<a name="RowBuilder+addComponents"></a>

### rowBuilder.addComponents(button) ⇒ [<code>RowBuilder</code>](#RowBuilder)

Add a button to the row.

**Kind**: instance method of [<code>RowBuilder</code>](#RowBuilder)  
**Returns**: [<code>RowBuilder</code>](#RowBuilder) - The updated RowBuilder object.

| Param  | Type                | Description                      |
| ------ | ------------------- | -------------------------------- |
| button | <code>object</code> | Button object to add to the row. |

<a name="RowBuilder+build"></a>

### rowBuilder.build() ⇒ <code>Array.&lt;object&gt;</code>

Returns the button row.

**Kind**: instance method of [<code>RowBuilder</code>](#RowBuilder)  
**Returns**: <code>Array.&lt;object&gt;</code> - The button row as an array of button objects.
