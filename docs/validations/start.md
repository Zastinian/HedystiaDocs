# Validation

Hedystia ships with a built-in schema builder called `h`. It implements the [Standard Schema](https://standardschema.dev/) specification, meaning it integrates cleanly with any Standard Schema-compatible library.

## Importing `h`

```ts twoslash
// @noErrors
import { h } from 'hedystia'
// or from the standalone package:
// import { h } from '@hedystia/validations'
```

## Primitive Types

### `h.string()`

Validates a string value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.string()                     // any string
h.string().minLength(3)        // at least 3 characters
h.string().maxLength(100)      // at most 100 characters
h.string().email()             // valid email format
h.string().uuid()              // valid UUID format
h.string().domain()            // valid URL with http(s)
h.string().phone()             // valid phone number
h.string().date()              // parseable date string
h.string().regex(/^[a-z]+$/)   // matches regex
```

### `h.number()`

Validates a number value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.number()               // any number
h.number().min(0)        // must be >= 0
h.number().max(100)      // must be <= 100
h.number().coerce()      // coerce string → number (useful for URL params/query)
```

### `h.boolean()`

Validates a boolean value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.boolean()              // true or false
h.boolean().coerce()     // coerce strings: "true"/"1" → true, "false"/"0" → false
```

### `h.any()`

Accepts any value without validation.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.any()
```

### `h.unknown()`

Accepts any value, typed as `unknown` (safer than `any`).

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.unknown()
```

### `h.never()`

Always fails validation. Useful for exhaustiveness checks.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.never()
```

### `h.bigint()`

Validates a bigint value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.bigint()                // any bigint
h.bigint().min(0n)        // >= 0n
h.bigint().max(100n)      // <= 100n
h.bigint().coerce()       // coerce string/number → bigint
```

### `h.undefined()`

Accepts only `undefined`.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.undefined()
```

### `h.void()`

Accepts `void` (undefined).

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.void()
```

## Composite Types

### `h.object()`

Validates a plain object with typed fields.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.object({
  id: h.number(),
  name: h.string(),
  email: h.string().email(),
})
```

Nested objects are supported:

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.object({
  user: h.object({
    id: h.number(),
    profile: h.object({
      bio: h.string(),
    }),
  }),
})
```

### `h.literal()`

Validates an exact value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.literal('admin')
h.literal(42)
h.literal(true)
```

### `h.options()`

Validates a union of values. Pass multiple schemas; the first match wins.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.options(h.literal('en'), h.literal('es'), h.literal('fr'))
// equivalent to: 'en' | 'es' | 'fr'
```

### Array Schemas

Call `.array()` on any schema to validate an array of that type.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.string().array()                   // string[]
h.number().array()                   // number[]
h.object({ id: h.number() }).array() // Array<{ id: number }>
```

### `.optional()`

Makes any field optional (accepts `undefined`).

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.object({
  name: h.string(),
  bio: h.string().optional(),      // string | undefined
  age: h.number().optional(),
})
```

### `.null()` / `.nullable()`

Extends a schema to also accept `null`. Both methods are interchangeable.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.string().null()       // string | null
h.string().nullable()   // string | null (same as .null())
h.number().null()       // number | null
h.string().enum(['red', 'green', 'blue'] as const)
h.number().enum([1, 2, 3] as const)
```

## Using Schemas in Routes

All schemas are plugged into the route's third argument:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia()
// ---cut---
app.post(
  '/products',
  ({ body }) => {
    return { id: 1, ...body }
  },
  {
    body: h.object({
      name: h.string().minLength(1).maxLength(100),
      price: h.number().min(0),
      category: h.options(
        h.literal('clothing'),
        h.literal('electronics'),
        h.literal('food')
      ),
      tags: h.string().array().optional(),
    }),
    response: h.object({
      id: h.number(),
      name: h.string(),
      price: h.number(),
    }),
    error: h.object({
      message: h.string(),
      code: h.number(),
    }),
  }
)
```

## Coercion

URL parameters and query strings are always strings. Use `.coerce()` to convert them automatically:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia()
// ---cut---
app.get(
  '/items/:id',
  ({ params, query }) => {
    // params.id is number (coerced)
    // query.page is number (coerced)
    return { id: params.id, page: query.page }
  },
  {
    params: h.object({ id: h.number().coerce() }),
    query: h.object({
      page: h.number().coerce().optional(),
    }),
  }
)
```

### `h.union(...schemas)`

Alias for `h.options`. Validates a union of multiple schemas.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.union(h.string(), h.number())
```

### `h.tuple(a, b, ...)`

Fixed-length positional array with typed elements.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.tuple(h.string(), h.number())
// [string, number]

// With rest items
h.tuple(h.string()).rest_(h.number())
// [string, ...number[]]
```

### `h.record(v)`

Object with dynamic string keys and typed values.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.record(h.number())
// { [key: string]: number }
```

### `h.map(k, v)`

Validates a native `Map` with typed key and value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.map(h.string(), h.number())
// Map<string, number>
```

### `h.set(v)`

Validates a native `Set` with typed values.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.set(h.string())
// Set<string>
```

### `h.intersection(a, b, ...)`

Combines multiple schemas via deep merge of object outputs.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.intersection(
  h.object({ a: h.string() }),
  h.object({ b: h.number() })
)
// { a: string; b: number }
```

### `h.discriminatedUnion(d, [...])`

Tagged union with O(1) discriminator lookup for performance.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.discriminatedUnion('type', [
  h.object({ type: h.literal('a'), value: h.string() }),
  h.object({ type: h.literal('b'), count: h.number() }),
])
```

### `h.lazy(() => schema)`

Recursive schemas for self-referencing types.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
interface Category {
  name: string
  children: Category[]
}
const categorySchema = h.object({
  name: h.string(),
  children: h.lazy(() => categorySchema).array(),
})
```

## Transform & Refine

### `h.default(schema, value)`

Fills in a default when input is `undefined` or `null`.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.default(h.string(), 'hello')
```

### `h.transform(schema, fn)`

Post-process the validated value.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.transform(h.string(), (s) => s.toUpperCase())
```

### `h.refine(schema, check, msg?)`

Custom validation. Return `true` (pass), `false`, or a string/Issue array.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.refine(h.string(), (s) => s.length > 3, 'Must be > 3 chars')
```

### `h.pipe(a, b)`

Chain two schemas sequentially, passing output of `a` as input to `b`.

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.pipe(h.string(), h.transform(h.string(), (s) => s.length))
```

## Coercion Shortcuts

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.coerce.string()     // h.string().coerce()
h.coerce.number()     // h.number().coerce()
h.coerce.boolean()    // h.boolean().coerce()
h.coerce.bigint()     // h.bigint().coerce()
```

## Object Schema Methods

Object schemas have additional methods for manipulation:

```ts twoslash
// @noErrors
import { h } from 'hedystia'
const obj = h.object({ name: h.string(), age: h.number(), bio: h.string().optional() })

obj.strict()          // Reject unknown keys
obj.passthrough()     // Allow unknown keys
obj.pick(['name'])    // { name: string }
obj.omit(['age'])     // { name: string; bio: string | undefined }
obj.partial()         // All keys become optional
obj.extend({ role: h.string() })   // Add more fields
obj.merge(other)      // Deep merge with another object schema
```

## Array Schema Methods

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.string().array().min(1)     // At least 1 item
h.string().array().max(10)    // At most 10 items
h.string().array().nonEmpty() // Alias for min(1)
```

## Number Schema Methods

```ts twoslash
// @noErrors
import { h } from 'hedystia'
h.number().int()     // Must be an integer
```

## Standard Schema Compatibility

Since `h` implements the Standard Schema specification, you can use third-party libraries like Zod or Valibot in any schema position:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia()
// ---cut---
import { z } from 'zod'

app.post(
  '/login',
  ({ body }) => ({ token: 'abc' }),
  {
    body: z.object({
      username: z.string().min(3),
      password: z.string().min(8),
    }),
  }
)
```
