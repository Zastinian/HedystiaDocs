<a name="EmbedBuilder"></a>

## EmbedBuilder
It's a class that creates a Discord embed.

**Kind**: global class  

* [EmbedBuilder](#EmbedBuilder)
    * [new EmbedBuilder([data])](#new_EmbedBuilder_new)
    * _instance_
        * [.setTitle(title)](#EmbedBuilder+setTitle) ⇒
        * [.setDescription(description)](#EmbedBuilder+setDescription) ⇒
        * [.setURL(url)](#EmbedBuilder+setURL) ⇒
        * [.setTimestamp(timestamp)](#EmbedBuilder+setTimestamp) ⇒
        * [.setColor(color)](#EmbedBuilder+setColor) ⇒
        * [.setFooter(footer)](#EmbedBuilder+setFooter) ⇒
        * [.setImage(image)](#EmbedBuilder+setImage) ⇒
        * [.setThumbnail(thumbnail)](#EmbedBuilder+setThumbnail) ⇒
        * [.setAuthor(author)](#EmbedBuilder+setAuthor) ⇒
        * [.addFields(...fields)](#EmbedBuilder+addFields) ⇒
        * [.addField(nm, vl, il)](#EmbedBuilder+addField) ⇒
        * [.setFields(...fields)](#EmbedBuilder+setFields) ⇒
        * [.toJSON()](#EmbedBuilder+toJSON) ⇒
    * _static_
        * [.transformFields(fields)](#EmbedBuilder.transformFields) ⇒

<a name="new_EmbedBuilder_new"></a>

### new EmbedBuilder([data])
It takes in an object, and then assigns the values of the object to the class properties.


| Param | Description |
| --- | --- |
| [data] | The data to use for the embed. |

<a name="EmbedBuilder+setTitle"></a>

### embedBuilder.setTitle(title) ⇒
It sets the title of the book and returns the book object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Type | Description |
| --- | --- | --- |
| title | <code>string</code> | The title of the modal. |

<a name="EmbedBuilder+setDescription"></a>

### embedBuilder.setDescription(description) ⇒
The function sets the description of the object and returns the object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Type | Description |
| --- | --- | --- |
| description | <code>string</code> | The description of the field. |

<a name="EmbedBuilder+setURL"></a>

### embedBuilder.setURL(url) ⇒
This function sets the url property of the object it is called on to the value of the argumentpassed in, and then returns the object it was called on.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Type | Description |
| --- | --- | --- |
| url | <code>string</code> | The URL to send the request to. |

<a name="EmbedBuilder+setTimestamp"></a>

### embedBuilder.setTimestamp(timestamp) ⇒
It takes a timestamp and converts it to an ISO string.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| timestamp | The timestamp of the message. |

<a name="EmbedBuilder+setColor"></a>

### embedBuilder.setColor(color) ⇒
This function sets the color of the object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The color of the object.  

| Param | Description |
| --- | --- |
| color | The color of the line. |

<a name="EmbedBuilder+setFooter"></a>

### embedBuilder.setFooter(footer) ⇒
The setFooter function takes a footer parameter and sets the footer property of the object to thefooter parameter. It then returns the object

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| footer | The footer text. |

<a name="EmbedBuilder+setImage"></a>

### embedBuilder.setImage(image) ⇒
It sets the image property of the object to the image parameter if the image parameter is notnull, otherwise it sets the image property to undefined

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| image | The image to display. |

<a name="EmbedBuilder+setThumbnail"></a>

### embedBuilder.setThumbnail(thumbnail) ⇒
It sets the thumbnail property of the object to the thumbnail parameter if it exists, otherwise itsets it to undefined

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| thumbnail | The thumbnail of the embed. |

<a name="EmbedBuilder+setAuthor"></a>

### embedBuilder.setAuthor(author) ⇒
The function sets the author of the book and returns the book object.

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| author | The author of the book. |

<a name="EmbedBuilder+addFields"></a>

### embedBuilder.addFields(...fields) ⇒
It takes an array of objects, and pushes each object into another array

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is the instance of the class.  

| Param | Description |
| --- | --- |
| ...fields | Array&lt;EmbedBuilderField&gt; | EmbedBuilderField |

<a name="EmbedBuilder+addField"></a>

### embedBuilder.addField(nm, vl, il) ⇒
It adds a field to the embed

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The object itself.  

| Param | Description |
| --- | --- |
| nm | The name of the field. |
| vl | The value of the field. |
| il | Inline |

<a name="EmbedBuilder+setFields"></a>

### embedBuilder.setFields(...fields) ⇒
It takes an array of objects, and then maps over each object, and then returns the mapped array

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The fields are being returned.  

| Param | Description |
| --- | --- |
| ...fields | Array&lt;EmbedBuilderField&gt; | EmbedBuilderField |

<a name="EmbedBuilder+toJSON"></a>

### embedBuilder.toJSON() ⇒
It returns an object with the properties of the embed

**Kind**: instance method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is an object with the properties of the embed.  
<a name="EmbedBuilder.transformFields"></a>

### EmbedBuilder.transformFields(fields) ⇒
It takes an array of objects, and returns an array of objects with the same keys, but with thevalues transformed

**Kind**: static method of [<code>EmbedBuilder</code>](#EmbedBuilder)  
**Returns**: The return value is an object with the properties name, value, and inline.  

| Param | Description |
| --- | --- |
| fields | The fields to be added to the embed. |

