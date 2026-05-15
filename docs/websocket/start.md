# WebSocket

`@hedystia/ws` is a universal WebSocket library that works on **Bun**, **Node.js**,
and **Deno**. It provides a standalone server with runtime auto-detection, a
portable low-level `WebSocketServer`, a runtime-aware client, and topic-based
pub/sub — all with zero third-party dependencies.

## Installation

```bash
bun add @hedystia/ws
```

## Server

### `serve()` — standalone (recommended)

Auto-detects the runtime and starts a full HTTP+WebSocket server:

- **Bun:** delegates to `Bun.serve()` with native WebSocket support.
- **Node / Deno:** creates a `node:http` server with the built-in upgrade handler.

```ts
import { serve } from "@hedystia/ws";

const server = await serve({
  open: (ws) => {
    ws.subscribe("room:general");
    ws.send("welcome");
  },
  message: (ws, msg) => {
    ws.publish("room:general", msg);
  },
  close: (ws, code, reason) => {
    console.log("client left", ws.data);
  },
});

console.log(`Listening on ${server.url}`); // e.g. http://0.0.0.0:57321

// Broadcast from anywhere
server.publish("room:general", "server message");

// Graceful shutdown
await server.stop(true);
```

Pass `port` / `hostname` / `resolveData` via the second argument:

```ts
const server = await serve(handlers, {
  port: 8080,
  hostname: "127.0.0.1",
  resolveData: (req) => ({
    userId: new URL(req.url, "http://localhost").searchParams.get("token"),
  }),
});
```

### `WebSocketServer` — low-level

Does **not** open a port. Plug it into any HTTP runtime that exposes raw
upgrade tuples (`req`, `socket`, `head`).

```ts
import { createServer } from "node:http";
import { WebSocketServer } from "@hedystia/ws/server";

const wss = new WebSocketServer({
  open: (ws) => {
    ws.subscribe("room:general");
    ws.send("welcome");
  },
  message: (ws, msg) => {
    ws.publish("room:general", msg);
  },
  close: (ws, code, reason) => {
    console.log("client left", ws.data);
  },
});

const http = createServer((_req, res) => res.end("ok"));
http.on("upgrade", (req, socket, head) => {
  wss.upgrade({ rawRequest: req, socket, head }, { data: { user: "anon" } });
});
http.listen(3000);
```

### Handlers

| Handler | Description |
|---------|-------------|
| `open(ws)` | Called when a new connection opens |
| `message(ws, msg)` | Called when a message arrives |
| `close(ws, code, reason)` | Called when connection closes |
| `error(ws, error)` | Called on transport errors |
| `drain(ws)` | Called when back-pressure is relieved (Bun only) |

### `upgrade(req, options?)`

Accepts `{ rawRequest, socket, head }` from Node's `upgrade` event. Attaches
`data` to the socket for handler access.

```ts
wss.upgrade(
  { rawRequest: req, socket, head },
  { data: { userId: "abc123" } },
);
```

### Options

| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `maxPayload` | `number` | 100 MiB | Maximum allowed frame payload |
| `resolveData` | `(req) => Record<string, any>` | — | Per-connection data factory (used by `serve()`) |

### ServerWebSocket API

Each connection wrapper exposes topic-based pub/sub:

| Method | Description |
|--------|-------------|
| `send(message, compress?)` | Send to this socket |
| `close(code?, reason?)` | Close connection |
| `subscribe(topic)` | Subscribe to a topic |
| `unsubscribe(topic)` | Unsubscribe from a topic |
| `publish(topic, message, compress?)` | Publish to all subscribers (excludes self) |
| `isSubscribed(topic)` | Check if subscribed |
| `cork(cb)` | Batch outgoing writes |
| `data` | User-attached state |

```ts
ws.send("hello");
ws.subscribe("updates");
ws.publish("updates", { event: "refresh" });
```

## Client

### `createWebSocket(url, options?)`

Runtime-aware WebSocket constructor. Uses `globalThis.WebSocket` on Bun, Deno,
browsers, and Node >= 22.

```ts
import { createWebSocket } from "@hedystia/ws/client";

const ws = createWebSocket("ws://localhost:3000", {
  protocols: "v1",
  headers: { authorization: "Bearer token" },
});

ws.onopen = () => ws.send("hi");
ws.onmessage = (event) => console.log(event.data);
```

### `resolveWebSocket()`

Returns the best `WebSocket` constructor for the current runtime.

```ts
import { resolveWebSocket } from "@hedystia/ws/client";
const WS = resolveWebSocket();
const socket = new WS("ws://localhost:3000");
```

### `WebSocketClient`

Lightweight wrapper with property-based event handlers:

```ts
import { WebSocketClient } from "@hedystia/ws/client";

const client = new WebSocketClient("ws://localhost:3000");
client.onopen = () => client.send("hello");
client.onmessage = (event) => console.log(event.data);
client.onclose = () => console.log("closed");
client.onerror = (err) => console.error(err);
```

## Runtime Detection

```ts
import { detectRuntime, isBun, isNode, isDeno, isBrowser } from "@hedystia/ws";

detectRuntime(); // "bun" | "node" | "deno" | "browser" | "unknown"
isBun();         // true | false
isNode();        // true | false
isDeno();        // true | false
isBrowser();     // true | false
```

## Subpath Exports

```ts
import { WebSocketServer, serve, type ServeInfo } from "@hedystia/ws/server";
import { createWebSocket, resolveWebSocket, WebSocketClient } from "@hedystia/ws/client";
import { detectRuntime, isBun } from "@hedystia/ws";
```

## Types

| Type | Description |
|------|-------------|
| `ServerWebSocket<Data>` | Wrapper around a connection |
| `WebSocketHandlers<Data>` | Handler map for server events |
| `WebSocketServerOptions` | Server constructor options |
| `ServeInfo` | Return type of `serve()` |
| `ClientWebSocketOptions` | Client connection options |
| `UpgradeRequest` | Raw upgrade tuple type |
| `UpgradeOptions<Data>` | Upgrade call options |
| `WSData` | User-attached state shape |
| `WSMessage` | `string \| ArrayBuffer \| Uint8Array` |
| `Runtime` | `"bun" \| "node" \| "deno" \| "browser" \| "unknown"` |
