---
id: utils
title: Utils
description: Utils Section
sidebar_position: 4
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="module_ButtonStyle"></a>

## ButtonStyle

Exporting the object to be used in other files.

<a name="module_Colors"></a>

## Colors

It's a list of colors.

<a name="Util"></a>

## Util

Utility functions for common tasks

**Kind**: global class

- [Util](#Util)
  - [.resolveColor(color)](#Util.resolveColor) ⇒ <code>number</code>
  - [.generateISOString([date])](#Util.generateISOString) ⇒ <code>string</code> \| <code>null</code>

<a name="Util.resolveColor"></a>

### Util.resolveColor(color) ⇒ <code>number</code>

Resolves a color to a hexadecimal value

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>number</code> - The hexadecimal value of the color

| Param | Type                                       | Description          |
| ----- | ------------------------------------------ | -------------------- |
| color | <code>string</code> \| <code>number</code> | The color to resolve |

<a name="Util.generateISOString"></a>

### Util.generateISOString([date]) ⇒ <code>string</code> \| <code>null</code>

Generates an ISO string from a Date object or timestamp

**Kind**: static method of [<code>Util</code>](#Util)  
**Returns**: <code>string</code> \| <code>null</code> - The ISO string or null if date is null

| Param  | Type                                                          | Default                 | Description                                              |
| ------ | ------------------------------------------------------------- | ----------------------- | -------------------------------------------------------- |
| [date] | <code>Date</code> \| <code>number</code> \| <code>null</code> | <code>Date.now()</code> | The Date object or timestamp to convert to an ISO string |
