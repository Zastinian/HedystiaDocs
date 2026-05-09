# API Reference

The `@hedystia/validations` package provides a robust schema builder `h` to create type-safe schemas for your API.

## Core Schemas

These are the starting points for any validation schema.

| Method | Return Type | Description |
| :--- | :--- | :--- |
| `h.string()` | `StringSchemaType` | Validates that a value is a string. |
| `h.number()` | `NumberSchemaType` | Validates that a value is a number (excluding `NaN`). |
| `h.boolean()` | `BooleanSchemaType` | Validates that a value is a boolean (`true`/`false`). |
| `h.bigint()` | `BigIntSchemaType` | Validates that a value is a bigint. |
| `h.any()` | `AnySchemaType` | Accepts any value without validation (typed as `any`). |
| `h.unknown()` | `UnknownSchemaType` | Accepts any value, typed as `unknown`. |
| `h.never()` | `NeverSchemaType` | Always fails validation. |
| `h.null()` | `NullSchemaType` | Validates that a value is exactly `null`. |
| `h.undefined()` | `UndefinedSchemaType` | Accepts only `undefined`. |
| `h.void()` | `VoidSchemaType` | Validates `void` type. |
| `h.literal(value)` | `LiteralSchema` | Validates an exact match for a `string`, `number`, or `boolean`. |
| `h.object(definition)` | `ObjectSchemaType` | Validates an object against a key-value schema definition. |
| `h.array(schema)` | `ArraySchema` | Validates an array where every item matches the provided schema. |
| `h.enum(values)` | `UnionSchema` | Validates that a value matches one of the provided literal values in the array. |
| `h.options(...schemas)` | `UnionSchema` | Validates a union of multiple schemas (similar to Zod's `union`). |
| `h.union(...schemas)` | `UnionSchema` | Alias for `h.options`. |
| `h.tuple(a, b, ...)` | `TupleSchema` | Fixed-length positional array. |
| `h.record(v)` / `h.record(k, v)` | `RecordSchema` | Object with dynamic string keys. |
| `h.map(k, v)` | `MapSchema` | Native `Map<K, V>` validation. |
| `h.set(v)` | `SetSchema` | Native `Set<V>` validation. |
| `h.intersection(a, b, ...)` | `IntersectionSchema` | Deep merge of object schemas. |
| `h.discriminatedUnion(d, [...])` | `DiscriminatedUnionSchema` | Tagged union with O(1) lookup. |
| `h.lazy(() => schema)` | `LazySchema` | Recursive schemas. |
| `h.default(schema, v\|fn)` | `DefaultSchema` | Default value when input is undefined/null. |
| `h.transform(schema, fn)` | `TransformSchema` | Post-process the validated value. |
| `h.refine(schema, check, msg?)` | `RefineSchema` | Custom predicate validation. |
| `h.pipe(a, b)` | `PipeSchema` | Chain two schemas sequentially. |
| `h.instanceOf(class)` | `InstanceOfSchema`| Validates that a value is an instance of the specified class. |
| `h.date()` | `StringSchemaType` | Alias for `h.string().date()`. |
| `h.uuid()` | `StringSchemaType` | Alias for `h.string().uuid()`. |
| `h.email()` | `StringSchemaType` | Alias for `h.string().email()`. |
| `h.phone()` | `StringSchemaType` | Alias for `h.string().phone()`. |
| `h.domain()` | `StringSchemaType` | Alias for `h.string().domain()`. |
| `h.coerce.string()` | `StringSchemaType` | Shortcut for `h.string().coerce()`. |
| `h.coerce.number()` | `NumberSchemaType` | Shortcut for `h.number().coerce()`. |
| `h.coerce.boolean()` | `BooleanSchemaType` | Shortcut for `h.boolean().coerce()`. |
| `h.coerce.bigint()` | `BigIntSchemaType` | Shortcut for `h.bigint().coerce()`. |

## String Modifiers

Methods available on `h.string()`.

| Method | Description |
| :--- | :--- |
| `.minLength(n)` | Ensures the string has at least `n` characters. |
| `.maxLength(n)` | Ensures the string has at most `n` characters. |
| `.email()` | Validates common email format. |
| `.uuid()` | Validates [UUID v4](https://en.wikipedia.org/wiki/Universally_unique_identifier) format. |
| `.regex(ptrn)` | Matches the string against a custom Regular Expression. |
| `.phone()` | Validates international phone formats. |
| `.domain(http?)`| Validates domain/URL format. If `true` (default), requires `http` or `https`. |
| `.date()` | Validates that the string is a valid parseable ISO date. |
| `.coerce()` | Converts incoming non-string values to string automatically. |

## Number Modifiers

Methods available on `h.number()`.

| Method | Description |
| :--- | :--- |
| `.min(n)` | Ensures the number is greater than or equal to `n`. |
| `.max(n)` | Ensures the number is less than or equal to `n`. |
| `.int()` | Ensures the number is an integer. |
| `.coerce()` | Converts strings or numeric types to number automatically. |

## BigInt Modifiers

Methods available on `h.bigint()`.

| Method | Description |
| :--- | :--- |
| `.min(n)` | Ensures the bigint is greater than or equal to `n`. |
| `.max(n)` | Ensures the bigint is less than or equal to `n`. |
| `.coerce()` | Converts strings or numbers to bigint automatically. |

## General Modifiers

Methods available on most schemas to change their behavior.

| Method | Description |
| :--- | :--- |
| `.optional()` | Allows the value to be `undefined`. Maps to `T | undefined`. |
| `.null()` | Allows the value to be `null`. Maps to `T | null`. |
| `.nullable()` | Alias for `.null()`. Allows the value to be `null`. Maps to `T | null`. |
| `.array()` | Transforms the schema into an array of that type: `T[]`. |
| `.coerce()` | Enables type coercion for primitive types (string, number, boolean, bigint). |

## Type Utilities

| Helper | Description |
| :--- | :--- |
| `Infer<typeof T>` | TypeScript utility to extract the output type of a schema. |
| `InferInput<typeof T>` | Extracts the input type of a schema. |
| `InferOutput<typeof T>` | Extracts the output type of a schema (same as `Infer`). |
