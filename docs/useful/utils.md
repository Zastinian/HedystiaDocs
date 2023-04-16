---
id: utils
title: Utils
description: Use of the utils section
sidebar_position: 5
keywords: [Hedystia, Hedystia Bot, Boxmine]
---

<a name="log"></a>

## log(text, color) ⇒ <code>void</code>

Make a log with or without color

**Kind**: global function  
**Returns**: <code>void</code> - void

| Param | Type                |
| ----- | ------------------- |
| text  | <code>String</code> |
| color | <code>String</code> |

**Example**

```js
log("Something");
log("Something", listLogColor.FgRed);
```

<a name="millisecond"></a>

## millisecond(ms) ⇒ <code>Number</code>

Converts the indicated time to milliseconds

**Kind**: global function  
**Returns**: <code>Number</code> - Number

| Param | Type                |
| ----- | ------------------- |
| ms    | <code>String</code> |

**Example**

```js
console.log(millisecond("1000 ms"));
console.log(millisecond("1 s"));
console.log(millisecond("1 m"));
console.log(millisecond("1 h"));
console.log(millisecond("1 d"));
console.log(millisecond("1 w"));
console.log(millisecond("1 y"));
```

<a name="random"></a>

## random(min, max) ⇒ <code>Number</code>

Get a random number between 2 numbers

**Kind**: global function  
**Returns**: <code>Number</code> - Number

| Param | Type                |
| ----- | ------------------- |
| min   | <code>Number</code> |
| max   | <code>Number</code> |

**Example**

```js
console.log(random(1, 10));
```

<a name="randomItem"></a>

## randomItem(items) ⇒ <code>String</code>

Get a random element from an array

**Kind**: global function  
**Returns**: <code>String</code> - String

| Param | Type               |
| ----- | ------------------ |
| items | <code>Array</code> |

**Example**

```js
console.log(randomItem(["a", "b", "c"]));
```

<a name="module_colorZero"></a>

## colorZero ⇒ <code>String</code>

Returns a selected symbol

**Returns**: <code>String</code> - String

| Param          | Type                |
| -------------- | ------------------- |
| symbols.Symbol | <code>String</code> |

**Example**

```js
console.log(symbols.tick);
```

<a name="type"></a>

## type(obj) ⇒ <code>String</code>

Check what type is provided

**Kind**: global function  
**Returns**: <code>String</code> - String

| Param | Type             |
| ----- | ---------------- |
| obj   | <code>any</code> |

**Example**

```js
console.log(type(null));
console.log(type(undefined));
console.log(type(5));
console.log(type(true));
console.log(type("str"));
```

<a name="module_wait"></a>

## wait ⇒ <code>Promise.&lt;void&gt;</code>

A function that returns a promise that resolves after a specified delay.

**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves after the specified delay.

| Param   | Type                | Default        | Description                                                    |
| ------- | ------------------- | -------------- | -------------------------------------------------------------- |
| [delay] | <code>number</code> | <code>0</code> | The delay, in milliseconds, before the promise should resolve. |

**Example**

```js
async function async() {
  await wait(2000);
  console.log("Something");
}
async();
```

## Functions

<dl>
<dt><a href="#Number">Number(number)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a number to a string with thousand separators.</p>
</dd>
<dt><a href="#TitleCase">TitleCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string to title case.</p>
</dd>
<dt><a href="#SentenceCase">SentenceCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string to sentence case.</p>
</dd>
<dt><a href="#CamelCase">CamelCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string to camel case.</p>
</dd>
<dt><a href="#KebabCase">KebabCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string to kebab case.</p>
</dd>
<dt><a href="#SnakeCase">SnakeCase(str)</a> ⇒ <code>string</code></dt>
<dd><p>Formats a string to snake case.</p>
</dd>
<dt><a href="#DateFor">DateFor(date, [order])</a> ⇒ <code>string</code></dt>
<dd><p>Formats a date as a string with a customizable order of day, month and year.</p>
</dd>
</dl>

<a name="Number"></a>

## Number(number) ⇒ <code>string</code>

Formats a number to a string with thousand separators.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param  | Type                | Description           |
| ------ | ------------------- | --------------------- |
| number | <code>number</code> | The number to format. |

**Example**

```js
console.log(formats.Number(10000));
```

<a name="TitleCase"></a>

## TitleCase(str) ⇒ <code>string</code>

Formats a string to title case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param | Type                | Description                                                             |
| ----- | ------------------- | ----------------------------------------------------------------------- |
| str   | <code>string</code> | The string to format. console.log(formats.TitleCase("Example of text")) |

<a name="SentenceCase"></a>

## SentenceCase(str) ⇒ <code>string</code>

Formats a string to sentence case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param | Type                | Description                                                                |
| ----- | ------------------- | -------------------------------------------------------------------------- |
| str   | <code>string</code> | The string to format. console.log(formats.SentenceCase("Example Of Text")) |

<a name="CamelCase"></a>

## CamelCase(str) ⇒ <code>string</code>

Formats a string to camel case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param | Type                | Description                                                             |
| ----- | ------------------- | ----------------------------------------------------------------------- |
| str   | <code>string</code> | The string to format. console.log(formats.CamelCase("Example of text")) |

<a name="KebabCase"></a>

## KebabCase(str) ⇒ <code>string</code>

Formats a string to kebab case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param | Type                | Description                                                             |
| ----- | ------------------- | ----------------------------------------------------------------------- |
| str   | <code>string</code> | The string to format. console.log(formats.KebabCase("Example of text")) |

<a name="SnakeCase"></a>

## SnakeCase(str) ⇒ <code>string</code>

Formats a string to snake case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.

| Param | Type                | Description                                                             |
| ----- | ------------------- | ----------------------------------------------------------------------- |
| str   | <code>string</code> | The string to format. console.log(formats.SnakeCase("Example of text")) |

<a name="DateFor"></a>

## DateFor(date, [order]) ⇒ <code>string</code>

Formats a date as a string with a customizable order of day, month and year.

**Kind**: global function  
**Returns**: <code>string</code> - A string representation of the date.

| Param   | Type                | Default                                    | Description                                                                                               |
| ------- | ------------------- | ------------------------------------------ | --------------------------------------------------------------------------------------------------------- |
| date    | <code>Date</code>   |                                            | The date to format.                                                                                       |
| [order] | <code>string</code> | <code>&quot;\&quot;dmy\&quot;&quot;</code> | The order in which to display the day, month and year. Can be "dmy", "mdy", "ymd", "ydm", "myd" or "dym". |

**Example**

```js
console.log(formats.DateFor(new Date(), "dmy"));
console.log(formats.DateFor(new Date(), "mdy"));
console.log(formats.DateFor(new Date(), "ymd"));
console.log(formats.DateFor(new Date(), "ydm"));
console.log(formats.DateFor(new Date(), "myd"));
console.log(formats.DateFor(new Date(), "dym"));
```
