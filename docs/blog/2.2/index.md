# Hedystia 2.2 - Ecosystem Integrations

**Astro Integration for @hedystia/view + Better Auth Adapter for @hedystia/db**

Hedystia 2.2 extends the ecosystem with two new integration packages that connect Hedystia's reactive UI engine and database ORM to popular developer tools.

## 🧩 @hedystia/astro — View Components in Astro

Use `@hedystia/view` components inside Astro pages with full SSR and client hydration support.

```bash
bun add @hedystia/astro @hedystia/view
```

### Setup

Add the integration to your `astro.config.mjs`:

```js
import { defineConfig } from "astro/config";
import hedystiaView from "@hedystia/astro";

export default defineConfig({
  integrations: [hedystiaView()],
});
```

### Usage

Create reactive View components and use them with Astro client directives:

```tsx
// src/components/Counter.tsx
import { sig, val, set } from "@hedystia/view";

export default function Counter() {
  const count = sig(0);
  return (
    <div>
      <h1>Counter: {() => val(count)}</h1>
      <button onClick={() => set(count, val(count) + 1)}>+</button>
    </div>
  );
}
```

```astro
---
import Counter from "../components/Counter";
---
<html>
  <body>
    <Counter client:load />
  </body>
</html>
```

### Client Directives

| Directive | Description |
|-----------|-------------|
| `client:load` | Hydrate on page load |
| `client:idle` | Hydrate when browser is idle |
| `client:visible` | Hydrate when element enters viewport |
| `client:only="@hedystia/astro"` | Client-only rendering (no SSR) |

### SSR

Components render to static HTML automatically via `renderToString` from `@hedystia/view`.

### API

| Export | Description |
|--------|-------------|
| `default` | Astro integration function |
| `getContainerRenderer` | Container renderer for Astro Container API |

## 🔐 @hedystia/better-auth — Database Adapter for Better Auth

Use `@hedystia/db` as the database layer for [Better Auth](https://www.better-auth.com/).

```bash
bun add @hedystia/better-auth @hedystia/db better-auth
```

### Quick Start

1. **Generate schemas and migrations**

```bash
bunx auth generate
```

Creates `hedystia-db/schemas/` and `hedystia-db/migrations/`.

2. **Set up your database**

```typescript
import { database } from "@hedystia/db";
import * as schemas from "./hedystia-db/schemas";
import * as migrations from "./hedystia-db/migrations";

const db = database({
  schemas,
  migrations,
  database: "sqlite",
  connection: { filename: "./auth.db" },
  syncSchemas: true,
  runMigrations: true,
});

await db.initialize();
```

3. **Configure Better Auth**

```typescript
import { betterAuth } from "better-auth";
import { hedystiaAdapter } from "@hedystia/better-auth";

export const auth = betterAuth({
  database: hedystiaAdapter(db),
  plugins: [organization(), twoFactor()],
});
```

### Custom Output Directories

```typescript
import { hedystiaAdapter } from "@hedystia/better-auth";

export const auth = betterAuth({
  database: hedystiaAdapter(db, {
    outputDir: "./src/database",
    schemasDir: "./db/schemas",
    migrationsDir: "./db/migrations",
  }),
});
```

### Features

- Multi-database support — SQLite, MySQL, PostgreSQL, File, S3
- Full CRUD for auth entities (users, sessions, accounts, etc.)
- Auto-generated schemas and migrations from Better Auth
- Zero-config migration system via `@hedystia/db`

## 📦 Summary

Hedystia 2.2 expands the ecosystem with two integration points:

1. **@hedystia/astro** — Drop-in Astro integration for reactive View components with SSR and client hydration
2. **@hedystia/better-auth** — First-class Better Auth adapter using `@hedystia/db` as the persistence layer

### Install

```bash
# Astro integration
bun add @hedystia/astro @hedystia/view

# Better Auth adapter
bun add @hedystia/better-auth @hedystia/db better-auth
```

### Full Documentation

- [View — Getting Started](/view/start)
- [Database — Getting Started](/db/start)
- [Database — Drivers](/db/drivers/sqlite)

---

Thank you to everyone in the Hedystia community for your feedback and support.
