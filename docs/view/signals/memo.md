---
title: Memo
description: Computed/derived signals with memo.
---

# Memo

`memo` creates a derived reactive signal that recomputes lazily when its dependencies change. It only recalculates when read after a dependency has been updated.

## `memo<T>(fn)`

```tsx
import { sig, memo } from "@hedystia/view";

const [count, setCount] = sig(2);
const doubled = memo(() => count() * 2);
const quadrupled = memo(() => doubled() * 2);
```

## Lazy Evaluation

Memos are **lazy** — they don't recompute immediately when a dependency changes. Instead, they mark themselves as stale and only recompute the next time their value is read (via the memo accessor or `val`).

```tsx
import { sig, memo } from "@hedystia/view";

const [count, setCount] = sig(0);
const expensive = memo(() => {
  console.log("recomputing"); // only runs when read
  return count() * 100;
});

setCount(5); // does NOT trigger recompute yet
expensive(); // NOW recomputes → 500
```

## Chaining Memos

Memos can depend on other memos, forming a chain of derived values:

```tsx
import { sig, memo } from "@hedystia/view";

const [price, setPrice] = sig(100);
const [taxRate, setTaxRate] = sig(0.2);

const tax = memo(() => price() * taxRate());
const total = memo(() => price() + tax());
```

## JSX Example

Components run once — memos integrate naturally with reactive JSX:

```tsx
import { sig, memo, mount } from "@hedystia/view";

function Calculator() {
  const [count, setCount] = sig(1);
  const doubled = memo(() => count() * 2);
  const quadrupled = memo(() => doubled() * 2);

  return (
    <div>
      <button onClick={() => setCount((c) => c + 1)}>
        Increment
      </button>
      <p>Count: {count}</p>
      <p>Doubled: {doubled}</p>
      <p>Quadrupled: {quadrupled}</p>
    </div>
  );
}

mount(Calculator, document.getElementById("root")!);
```

## Reading a Memo

`memo` returns a `Computed<T>` which is a function accessor, just like a signal getter:

```tsx
const derived = memo(() => count() + 1);
console.log(derived()); // reads the derived value
```
