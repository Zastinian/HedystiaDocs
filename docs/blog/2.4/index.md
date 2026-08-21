# Hedystia 2.4 - Secure APIs, Dialect-Aware Data, and Stronger Types

**Built-in request security, portable database migrations, smarter inserts, safer routing, and async validation.**

Hedystia 2.4 is the security and correctness release. It adds practical application-layer protections to the server, makes database operations behave consistently across SQL dialects, and closes several type-safety gaps across the ecosystem.

Released on **15 August 2026**.

## 🛡️ Request Security Controls

Security can now be configured globally and overridden per route. The server can enforce request body and query limits, sanitize dangerous input keys, add security headers, attach request IDs, limit request rates, and time out slow handlers.

```ts
import Hedystia from "hedystia";

const app = new Hedystia({
  security: {
    bodyLimit: 1_024 * 1_024,
    maxQueryParameters: 30,
    sanitize: { mode: "strip", trimStrings: true },
    headers: { preset: "recommended" },
    requestId: true,
    rateLimit: {
      windowMs: 60_000,
      limit: 100,
      key: "ip",
      trustProxy: true,
    },
    timeout: 10_000,
  },
});

app.get("/health", (ctx) => ({ ok: true, requestId: ctx.requestId }));
app.listen(3000);
```

Security options are also available on individual routes. Use `security: false` only for an intentional public exception. The built-in sanitizer protects against prototype-pollution keys and resource exhaustion; it does not replace output encoding or parameterized database queries.

### Security API

| Option | What it protects |
|--------|------------------|
| `bodyLimit` | Oversized request bodies |
| `maxQueryParameters` / `maxQueryDepth` | Excessive query input |
| `sanitize` | Dangerous keys, long strings, and deep input |
| `headers` | Common security response headers |
| `requestId` | Request tracing with `X-Request-ID` |
| `rateLimit` | Global or per-client request bursts |
| `timeout` | Handlers and middleware that run too long |

The memory rate-limit store is intended for one process. Multi-instance deployments should provide a shared, atomic `RateLimitStore` and enable `trustProxy` only behind a trusted proxy.

## 🗄️ Dialect-Aware Database Migrations and Indexes

`@hedystia/db` now compiles identifiers, placeholders, and migration bookkeeping for the active dialect instead of assuming MySQL syntax. PostgreSQL receives `$1`, `$2` parameters while SQLite and MySQL continue using `?` placeholders.

Indexes can be created and removed from migrations on SQLite, MySQL, and PostgreSQL:

```ts
import { database, integer, migration, table, varchar } from "@hedystia/db";

const users = table("users", {
  id: integer().primaryKey().autoIncrement(),
  email: varchar(255).notNull(),
});

const addEmailIndex = migration("users_email_index", {
  async up({ schema }) {
    await schema.addIndex("users", ["email"], true);
  },
  async down({ schema }) {
    await schema.dropIndex("users", "users_email_index");
  },
});

const db = database({
  schemas: [users],
  migrations: [addEmailIndex],
  database: "postgres",
  connection: {
    host: "localhost",
    user: "postgres",
    password: "password",
    database: "app",
  },
});
```

File and S3 storage reject index operations explicitly because they do not have a database index engine. File and S3 transactions now restore snapshots, including newly created table artifacts, when a migration fails.

## ✅ Type-Safe and Reliable Inserts

Insert inference now understands auto-increment, defaulted, and nullable columns. Required `notNull()` fields without defaults must be provided at compile time and are checked at runtime as well.

```ts
const user = await db.users.insert({
  email: "alice@example.com",
});

await db.users.insertMany([
  { email: "bob@example.com" },
  { email: "cara@example.com" },
]);
```

Bulk inserts are available through the exported `compileBulkInsert` helper. PostgreSQL inserts preserve generated IDs with `RETURNING`, and bulk insert results map IDs back to their rows.

## 🧭 Safer, More Predictable Routing

The router was rebuilt around clear precedence rules:

1. Static segments (`/users/new`)
2. Parameters (`/users/:id`)
3. Wildcards (`/files/*path`)

Trailing slashes are normalized, encoded parameters are decoded safely, malformed escape sequences do not crash the request, and wildcards capture the complete remaining path. The same route behavior is used by HTTP, SSE, and subscription layers.

## ⚡ Async Validation and Defaults

Validation composition now works with asynchronous child schemas. Objects, arrays, unions, `instanceof`, nested definitions, and `safeParse` preserve Promise results and issue paths correctly.

Defaulted object fields are optional in input inference and JSON Schema, then materialized in the parsed output:

```ts
import { h } from "@hedystia/validations";

const settings = h.object({
  theme: h.default(h.string(), "system"),
  profile: h.object({
    locale: h.default(h.string(), "en-US"),
  }),
});

const value = await settings.parse({ profile: {} });
// { theme: "system", profile: { locale: "en-US" } }
```

## 🔌 Stronger Realtime and OpenAPI Types

The WebSocket package removes several `any` escape hatches and exports a structural `WebSocketRequest` for Bun, Node.js, and compatible runtimes. Client event handlers and payloads now use native WebSocket types. The adapter awaits asynchronous fetch failures so they reach its error boundary consistently.

Swagger now represents realtime routes with the vendor extensions `x-hedystia-websocket` and `x-hedystia-subscription` instead of pretending they are ordinary HTTP verbs.

## 📦 Upgrade

```bash
pnpm update hedystia @hedystia/adapter @hedystia/astro @hedystia/better-auth @hedystia/client @hedystia/db @hedystia/swagger @hedystia/types @hedystia/validations @hedystia/view @hedystia/ws
```

For database applications, install the driver you use separately:

```bash
pnpm add pg                 # PostgreSQL
pnpm add mysql2             # MySQL / MariaDB
pnpm add better-sqlite3     # SQLite
```

## 📋 Summary

Hedystia 2.4 delivers:

1. **Request security** — limits, sanitization, headers, IDs, rate limiting, and timeouts
2. **Dialect-aware data** — migrations, placeholders, indexes, transactions, and generated IDs
3. **Typed inserts** — required fields are inferred and validated correctly
4. **Safer routing** — deterministic precedence and decoded parameters
5. **Async validation** — nested Promise-aware schemas and defaults
6. **Realtime quality** — stronger WebSocket types and OpenAPI extensions

### Full Documentation

- [Framework — Getting Started](/framework/getting-started)
- [Database — Migrations](/db/migrations)
- [Database — PostgreSQL Driver](/db/drivers/postgres)
- [Validations — API Reference](/validations/api-reference)
- [WebSocket — Getting Started](/websocket/start)

---

Thank you to everyone in the Hedystia community for your feedback and support. 🚀
