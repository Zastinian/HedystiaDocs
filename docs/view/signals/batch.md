---
title: Batch & Untrack
description: Batching signal updates and untracking dependencies.
---

# Batch & Untrack

## `batch(fn)`

Batch multiple signal updates into a single reactive cycle. Without batching, each `set` call immediately notifies dependents. Inside a `batch`, all notifications are deferred until the batch completes.

```tsx
import { sig, batch } from "@hedystia/view";

const [firstName, setFirstName] = sig("Alice");
const [lastName, setLastName] = sig("Smith");

// Without batch: effects run twice (once per update)
// With batch: effects run once after both updates
batch(() => {
  setFirstName("Bob");
  setLastName("Jones");
});
```

### When to Use

- Updating multiple related signals at once
- Avoiding intermediate renders during complex state transitions
- Performance-critical update paths

## `untrack<T>(fn)`

Execute a function without tracking any signal reads as dependencies. Reads inside `untrack` won't cause the surrounding effect or memo to re-run when those signals change.

```tsx
import { sig, untrack, on } from "@hedystia/view";

const [count, setCount] = sig(0);
const [label] = sig("Count");

// Only re-runs when `count` changes, NOT when `label` changes
on(
  count,
  (c) => {
    const currentLabel = untrack(label);
    console.log(`${currentLabel}: ${c}`);
  },
);
```

## JSX Example

```tsx
import { sig, batch, mount } from "@hedystia/view";

function ProfileForm() {
  const [name, setName] = sig("Alice");
  const [email, setEmail] = sig("alice@example.com");
  const [status, setStatus] = sig("saved");

  const handleReset = () => {
    batch(() => {
      setName("");
      setEmail("");
      setStatus("cleared");
    });
  };

  return (
    <div>
      <input
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
      />
      <input
        value={email}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
      />
      <p>Status: {status}</p>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
}
```

mount(ProfileForm, document.getElementById("root")!);
```
