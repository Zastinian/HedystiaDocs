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

| Param | Type | Description |
| --- | --- | --- |
| number | <code>number</code> | The number to format. |

**Example**  
```js
console.log(formats.Number(10000))
```
<a name="TitleCase"></a>

## TitleCase(str) ⇒ <code>string</code>
Formats a string to title case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to format. console.log(formats.TitleCase("Example of text")) |

<a name="SentenceCase"></a>

## SentenceCase(str) ⇒ <code>string</code>
Formats a string to sentence case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to format. console.log(formats.SentenceCase("Example Of Text")) |

<a name="CamelCase"></a>

## CamelCase(str) ⇒ <code>string</code>
Formats a string to camel case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to format. console.log(formats.CamelCase("Example of text")) |

<a name="KebabCase"></a>

## KebabCase(str) ⇒ <code>string</code>
Formats a string to kebab case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to format. console.log(formats.KebabCase("Example of text")) |

<a name="SnakeCase"></a>

## SnakeCase(str) ⇒ <code>string</code>
Formats a string to snake case.

**Kind**: global function  
**Returns**: <code>string</code> - The formatted string.  

| Param | Type | Description |
| --- | --- | --- |
| str | <code>string</code> | The string to format. console.log(formats.SnakeCase("Example of text")) |

<a name="DateFor"></a>

## DateFor(date, [order]) ⇒ <code>string</code>
Formats a date as a string with a customizable order of day, month and year.

**Kind**: global function  
**Returns**: <code>string</code> - A string representation of the date.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| date | <code>Date</code> |  | The date to format. |
| [order] | <code>string</code> | <code>&quot;\&quot;dmy\&quot;&quot;</code> | The order in which to display the day, month and year.                                 Can be "dmy", "mdy", "ymd", "ydm", "myd" or "dym". |

**Example**  
```js
console.log(formats.DateFor(new Date(), "dmy"))console.log(formats.DateFor(new Date(), "mdy"))console.log(formats.DateFor(new Date(), "ymd"))console.log(formats.DateFor(new Date(), "ydm"))console.log(formats.DateFor(new Date(), "myd"))console.log(formats.DateFor(new Date(), "dym"))
```
