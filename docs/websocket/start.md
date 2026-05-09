# WebSocket

`@hedystia/ws` is a universal WebSocket library that works on **Bun**, **Node.js**, and **Deno**. It provides runtime-aware client construction, a portable server with topic-based pub/sub, and runtime detection utilities.

## Installation

```bash
bun add @hedystia/ws
```

## Server

### `WebSocketServer`

Portable WebSocket server that consumes raw HTTP upgrade tuples. Uses the [`ws`](https://github.com/websockets/ws) package internally and works on any runtime.

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
| `close(ws, code?, reason?)` | Called when connection closes |
| `drain(ws)` | Called when the socket becomes writable (backpressure) |
| `ping(ws, data?)` | Called on ping frames |
| `pong(ws, data?)` | Called on pong frames |

### `upgrade(options, data?)`

Accepts `{ rawRequest, socket, head }` from Node's `upgrade` event. Attaches `data` to the socket for handler access.

```ts
wss.upgrade(
  { rawRequest: req, socket, head },
  { data: { userId: "abc123" } }
);
```

### ServerWebSocket API

Each connection wrapper exposes topic-based pub/sub:

| Method | Description |
|--------|-------------|
| `send(message, compress?)` | Send to this socket |
| `close(code?, reason?)` | Close connection |
| `subscribe(topic)` | Subscribe to a topic |
| `unsubscribe(topic)` | Unsubscribe from a topic |
| `publish(topic, message, compress?)` | Publish to all subscribers |
| `isSubscribed(topic)` | Check if subscribed |
| `cork()` | Batch outgoing writes |
| `data` | User-attached state |

```ts
ws.send("hello");
ws.subscribe("updates");
ws.publish("updates", { event: "refresh" });
```

## Client

### `createWebSocket(url, options?)`

Runtime-aware WebSocket constructor. Uses `globalThis.WebSocket` on Bun, Deno, browsers, and Node >= 22; falls back to the `ws` package on older Node.

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
import { WebSocketServer } from "@hedystia/ws/server";
import { createWebSocket, resolveWebSocket } from "@hedystia/ws/client";
import { detectRuntime, isBun } from "@hedystia/ws";
```

## Types

| Type | Description |
|------|-------------|
| `ServerWebSocket<Data>` | Wrapper around a connection |
| `WebSocketHandlers<Data>` | Handler map for server events |
| `WebSocketServerOptions<Data>` | Server constructor options |
| `ClientWebSocketOptions` | Client connection options |
| `UpgradeOptions` | Raw upgrade tuple input |
| `UpgradeRequest` | Type for raw Node request |
| `WSData` | User-attached state shape |
| `WSMessage` | `string \| ArrayBuffer \| Uint8Array` |
| `Runtime` | `"bun" \| "node" \| "deno" \| "browser" \| "unknown"` |
