---
title: effect — Reactive Eager Effects
description: Run side effects eagerly when dependencies change with effect().
---

# effect — Reactive Eager Effects

`effect` creates a reactive side effect that runs immediately and then re-runs whenever its dependencies change. Unlike `memo`, which is lazy, `effect` is eager and intended for operations that affect the outside world (like DOM mutations).

## `effect(fn)`

```tsx
import { effect, sig, val } from "@hedystia/view";

const count = sig(0);

effect(() => {
  console.log("Count is now:", val(count));
});
```

### Parameters

| Parameter | Description |
|-----------|-------------|
| `fn` | The function to execute. Signal reads inside are tracked as dependencies. |

## Comparison with `on`

- **`effect`**: Tracks all dependencies automatically. Runs immediately.
- **`on`**: Explicit dependency tracking. Executes the callback untracked.

## Use Cases

- Manually updating DOM elements not managed by JSX
- Logging and debugging
- Eager side effects that don't need previous values

## Full Example

```tsx
import { sig, effect, mount } from "@hedystia/view";

function App() {
  const [count, setCount] = sig(0);

  // Eager effect tracking count
  effect(() => {
    document.title = `Count: ${count()}`;
  });

  return (
    <div>
      <button onClick={() => setCount(c => c + 1)}>
        Update Title
      </button>
    </div>
  );
}

mount(App, document.getElementById("root")!);
```
