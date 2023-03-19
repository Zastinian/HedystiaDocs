<a name="module_wait"></a>

## wait ⇒ <code>Promise.&lt;void&gt;</code>
A function that returns a promise that resolves after a specified delay.

**Returns**: <code>Promise.&lt;void&gt;</code> - - A promise that resolves after the specified delay.  

| Param | Type | Default | Description |
| --- | --- | --- | --- |
| [delay] | <code>number</code> | <code>0</code> | The delay, in milliseconds, before the promise should resolve. |

**Example**  
```js
async function async() { await wait(2000) console.log("Something")}async()
```
