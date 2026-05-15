---
title: Signals
description: Core reactive signals API — sig, val, set, update, peek.
---

# Signals

Signals are the foundation of reactivity in `@hedystia/view`. They hold mutable state with automatic dependency tracking. Components run once — use signal accessors or `() => val(signal)` in JSX to create reactive bindings.

## `sig<T>(value, options?)`

Create a reactive signal with an initial value. Signals are **functions** (accessors) that return their current value when called.

```tsx
import { sig } from "@hedystia/view";

const count = sig(0);
console.log(count()); // 0
```

### Destructuring (Recommended)

Signals can be destructured into a `[getter, setter]` tuple for a cleaner API:

```tsx
const [count, setCount] = sig(0);

// Read
count();

// Write
setCount(5);

// Update
setCount((prev) => prev + 1);
```

## `val<T>(signal)`

Read the value of a signal, accessor, or static value. `val()` is a **universal unwrapper**:

1. If passed a **Signal** or **Computed**, it returns the value and registers a dependency.
2. If passed a **Function** (Accessor), it calls it and returns the result (also tracking if the function reads signals).
3. If passed any **Other Value**, it returns it as-is.

```tsx
import { sig, val } from "@hedystia/view";

const [count] = sig(0);

val(count);     // 0 (tracked)
val(() => 10);  // 10
val("hello");   // "hello"
```

In JSX, passing a signal or accessor directly is enough to create a reactive binding: `<span>{count}</span>`.

## `set<T>(signal, value)`

Write a new value to a signal, notifying all dependents. You can pass the signal object or the destructured setter.

```tsx
import { sig, set } from "@hedystia/view";

const count = sig(0);
set(count, 1);

// Or with destructuring:
const [c, setC] = sig(0);
setC(2);
```

## `update<T>(signal, fn)`

Update a signal using a function of the previous value.

```tsx
import { sig, val, update } from "@hedystia/view";

const count = sig(0);

function Counter() {
  return (
    <button onClick={() => update(count, (prev) => prev + 1)}>
      Count: {() => val(count)}
    </button>
  );
}
```

## `peek<T>(signal)`

Read a signal's value **without** registering a dependency. Useful when you need the current value inside an effect but don't want that read to trigger re-runs.

```tsx
import { sig, val, peek } from "@hedystia/view";
import { on } from "@hedystia/view";

const count = sig(0);
const multiplier = sig(2);

// Only re-runs when `count` changes, not when `multiplier` changes
on(
  () => val(count),
  (c) => console.log(c * peek(multiplier)),
);
```

## Signal Options

Pass an options object to customize equality checking:

```tsx
import { sig } from "@hedystia/view";

// Always notify, even if value is the same
const force = sig(0, { equals: false });

// Custom comparator
const obj = sig({ x: 0, y: 0 }, {
  equals: (prev, next) => prev.x === next.x && prev.y === next.y,
});
```

By default, signals use `===` reference equality. Setting `equals: false` means every `set` call triggers dependents. A custom function receives `(prev, next)` and should return `true` if the values are considered equal (skip update).
