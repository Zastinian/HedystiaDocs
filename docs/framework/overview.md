# Framework Overview

The `hedystia` package (or `@hedystia/server`) is the core of the framework. It provides the `Hedystia` class for building HTTP and WebSocket servers with full TypeScript inference.

## Installation

```bash
bun add hedystia
```

## Creating a Server

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'

const app = new Hedystia()
  .get('/', () => ({ status: 'ok' }))
  .listen(3000)
```

## Constructor Options

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia({
  cors: true,            // Enable CORS (or pass CorsOptions)
  reusePort: false,       // Reuse OS port for multiple processes
  idleTimeout: 10,        // Seconds before idle connection closes
  sse: false,             // Use SSE instead of WebSocket for subscriptions
  debugLevel: 'none',     // Logging level: 'none' | 'debug' | 'warn' | 'log' | 'error'
  headers: h.object({ 'x-api-key': h.string() }),     // Global headers schema
  security: {                // Request security controls (see below)
    bodyLimit: 1_024 * 1_024,
    headers: { preset: 'recommended' },
    requestId: true,
  },
})
```

## Security

Hedystia 2.4 introduces built-in request security controls that can be enabled globally and overridden per route. The available options are:

| Option | Type | Description |
|---|---|---|
| `bodyLimit` | `number` | Maximum request body size in bytes |
| `maxQueryParameters` | `number` | Maximum number of URL query parameters |
| `maxQueryDepth` | `number` | Maximum nesting depth in query keys |
| `sanitize` | `boolean \| SanitizationOptions` | Remove or reject prototype-pollution keys and apply resource limits |
| `headers` | `false \| SecurityHeadersOptions` | Add security response headers (`basic`, `recommended`, or `strict` preset) |
| `requestId` | `boolean \| { header?: string }` | Add a stable `X-Request-ID` header and expose it on `ctx.requestId` |
| `rateLimit` | `false \| RateLimitOptions` | Limit requests globally or per client with a custom or built-in store |
| `timeout` | `number` | Maximum milliseconds for handler + middleware processing |

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia({
  security: {
    bodyLimit: 1_024 * 1_024,
    maxQueryParameters: 30,
    sanitize: { mode: 'strip', trimStrings: true },
    headers: { preset: 'recommended' },
    requestId: true,
    rateLimit: {
      windowMs: 60_000,
      limit: 100,
      key: 'ip',
      trustProxy: true,
    },
    timeout: 10_000,
  },
})
```

Security options can be overridden per route by passing `security` in the route schema:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
const app = new Hedystia({ security: { requestId: true } })
app.get('/admin', () => ({ admin: true }), {
  security: { rateLimit: false },  // disable rate limiting for this route
})
app.get('/public', () => 'open', { security: false })  // disable all inherited security
```

The built-in rate-limit store is suitable for a single process. Multi-instance deployments should provide a shared, atomic `RateLimitStore`.

## CORS

Enable CORS for all origins:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia({ cors: true })
```

Fine-grained CORS control:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia({
  cors: {
    origin: ['https://app.example.com', 'https://admin.example.com'],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
    allowedHeaders: ['Content-Type', 'Authorization'],
    maxAge: 86400,
  },
})
```

Dynamic origin checking:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const trustedOrigins = ['']
const app = new Hedystia({
  cors: {
    origin: async (origin) => {
      return trustedOrigins.includes(origin ?? '')
    },
  },
})
```

## Global Headers

Apply a headers schema to all routes. This validates headers on every request before the route-level handler runs:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'

const app = new Hedystia({
  headers: h.object({
    'x-api-key': h.string(),
  }),
})
  .get('/secure-data', ({ headers }) => {
    return { key: headers['x-api-key'] }
  })
  .listen(3000)
```

## Listening

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia()
app.listen(3000)
```

Returns `this`, so it's chainable (though typically placed last).

## Stopping the Server

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia()
app.close()
```

Clears all WebSocket connections and stops the HTTP server.

## Generating Type Definitions

Use `buildTypes` to output a `.d.ts` file that clients in other runtimes can import:

```ts twoslash
// @noErrors
import Hedystia, { h } from 'hedystia'
import path from 'path'

const app = new Hedystia()
  .get('/ping', () => ({ pong: true }), {
    response: h.object({ pong: h.boolean() }),
  })
  .listen(3000)

await app.buildTypes(path.join(__dirname, 'server.d.ts'))
```

The generated file contains:

```ts twoslash
// @noErrors
// server.d.ts (auto-generated)
export type AppRoutes = [
  { method: "GET"; path: "/ping"; response: { pong: boolean }; status: 200 }
]
```

## Accessing Routes

You can inspect all registered routes at runtime:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia()
console.log(app.allRoutes)
// [{ method: 'GET', path: '/', schema: { ... }, handler: fn }]
```

## Fetch Handler

Hedystia exposes a standard `fetch` method for use in environments other than Bun:

```ts twoslash
// @noErrors
import Hedystia from 'hedystia'
const app = new Hedystia().get('/', () => 'Hello!')

// Use with any Fetch API-compatible environment
const response = await app.fetch(new Request('http://localhost/'))
```

This is used by the `@hedystia/adapter` package to run Hedystia on Node.js.
