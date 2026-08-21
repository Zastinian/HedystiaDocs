# Swagger Plugin

The `@hedystia/swagger` plugin automatically generates an OpenAPI 3.0 specification from your server's route definitions and serves an interactive Swagger UI.

## Installation

```bash
bun add @hedystia/swagger
```

## Basic Setup

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
import { swagger } from '@hedystia/swagger'

const swaggerPlugin = swagger({
  title: 'My API',
  description: 'Built with Hedystia',
  version: '1.0.0',
})

const app = new Hedystia()
  .get('/hello', () => 'Hello!', {
    response: h.string(),
    description: 'A welcome message',
  })
  .post(
    '/users',
    ({ body }) => ({ id: 1, ...body }),
    {
      body: h.object({ name: h.string() }),
      response: h.object({ id: h.number(), name: h.string() }),
      tags: ['Users'],
    }
  )

app.use('/swagger', swaggerPlugin.plugin(app))
app.listen(3000)
```

Visit `http://localhost:3000/swagger` to view the interactive docs.

## Configuration Options

```ts twoslash
// @noErrors
import { swagger } from '@hedystia/swagger'
swagger({
  title: 'My API',           // Title shown in Swagger UI
  description: 'API docs',   // Description below the title
  version: '1.0.0',          // API version
  tags: [                    // Tag definitions for grouping
    { name: 'Users', description: 'User management routes' },
    { name: 'Auth', description: 'Authentication routes' },
  ],
})
```

## Route Metadata

Add documentation metadata to individual routes:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia()
app.put(
  '/users/:id',
  ({ params, body }) => ({ id: params.id, ...body }),
  {
    params: h.object({ id: h.number().coerce() }),
    body: h.object({
      name: h.string().maxLength(100),
      email: h.string().email().optional(),
    }),
    response: h.object({ id: h.number(), name: h.string() }),
    description: 'Update an existing user',  // Route description
    tags: ['Users'],                          // Appears under this tag
  }
)
```

## Grouping Routes with Tags

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
import { swagger } from '@hedystia/swagger'
const app = new Hedystia()
const swaggerPlugin = swagger({
  title: 'E-Commerce API',
  version: '2.0.0',
  tags: [
    { name: 'Products', description: 'Product catalog' },
    { name: 'Orders', description: 'Order processing' },
    { name: 'Users', description: 'User accounts' },
  ],
})

app
  .get('/products', () => [], { tags: ['Products'] })
  .post('/orders', ({ body }) => body, { body: h.object({ productId: h.number().coerce() }), tags: ['Orders'] })
  .get('/me', () => ({ id: 1 }), { tags: ['Users'] })
```

## Static Routes in Swagger

Static routes declared with `.static()` are included in the spec:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia()
app.static(
  '/version',
  { version: '1.0.0', build: 'stable' },
  {
    response: h.object({ version: h.string(), build: h.string() }),
    description: 'Returns the current API version',
  }
)
```

## Subscription Routes

WebSocket and subscription routes appear in the OpenAPI spec using vendor extensions instead of pretending they are standard HTTP verbs:

- `x-hedystia-websocket` for `.ws()` routes
- `x-hedystia-subscription` for `.subscription()` routes

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia()
app.subscription(
  '/events/:id',
  (ctx) => { ctx.sendData({ event: ctx.params.id }) },
  {
    data: h.object({ event: h.string() }),
    params: h.object({ id: h.string() }),
    error: h.object({ message: h.string() }),
  }
)
app.ws('/chat', { message: (ws, msg) => ws.send('Echo: ' + msg) })
```

These extensions are excluded from tag grouping and rendered as custom operations in the Swagger UI.

## Security in OpenAPI

When `security` is configured on the server or on individual routes, the OpenAPI spec reflects those constraints:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
import { swagger } from '@hedystia/swagger'

const swaggerPlugin = swagger({
  title: 'Secure API',
  version: '1.0.0',
})

const app = new Hedystia({
  security: {
    rateLimit: { windowMs: 60_000, limit: 100, key: 'ip' },
    requestId: true,
  },
})
  .get('/health', () => ({ ok: true }))
  .get('/admin', () => ({ admin: true }), {
    security: { rateLimit: false },
  })
  .get('/public', () => 'open', { security: false })
```

Routes with `security: false` are treated as explicitly public in the spec.

## Full Example

Here's a complete setup from the Hedystia examples:

```typescript
import { swagger } from '@hedystia/swagger'
import Hedystia, { h } from 'hedystia'

const swaggerPlugin = swagger({
  title: 'My API with Hedystia',
  description: 'An example API using Hedystia with Swagger',
  version: '1.0.0',
  tags: [{ name: 'Users', description: 'User related paths' }],
})

const app = new Hedystia()
  .get('/hello', () => 'Hello', {
    response: h.string(),
    description: 'A simple hello route',
  })
  .post('/user', (ctx) => ({ id: 1, name: ctx.body.name }), {
    response: h.object({ id: h.number(), name: h.string() }),
    headers: h.object({ authorization: h.string() }),
    tags: ['Users'],
  })
  .group('/admin', (g) =>
    g.get('/dash', () => 'Admin dashboard', { response: h.string() })
  )
  .ws('/live', { message: (ws, msg) => ws.send('Echo: ' + msg) })

app.use('/swagger', swaggerPlugin.plugin(app))
app.listen(3000)
```
