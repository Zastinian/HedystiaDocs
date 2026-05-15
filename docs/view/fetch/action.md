---
title: action — Mutations
description: Reactive mutation actions with action().
---

# action — Mutations

`action` creates a reactive mutation wrapper for async operations like form submissions, API writes, or any side-effectful async call.

## `action<T, A>(fn)`

```tsx
import { action } from "@hedystia/view";

const saveUser = action(async (data: { name: string; email: string }) => {
  const res = await fetch("/api/users", {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "Content-Type": "application/json" },
  });
  return res.json();
});
```

### Action Properties

| Property | Type | Description |
|----------|------|-------------|
| `run(args)` | `(args: A) => Promise<T>` | Execute the action |
| `loading` | `Accessor<boolean>` | Whether the action is in progress |
| `error` | `Accessor<Error \| undefined>` | The error, if the action failed |
| `data` | `Accessor<T \| undefined>` | The result of the last successful run |

## JSX Example

```tsx
import { sig, action, mount } from "@hedystia/view";

interface SaveResult {
  id: number;
  saved: boolean;
}

function SaveForm() {
  const [name, setName] = sig("");
  const [email, setEmail] = sig("");

  const save = action(async (data: { name: string; email: string }): Promise<SaveResult> => {
    const res = await fetch("/api/users", {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    });
    return res.json();
  });

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    save.run({ name: name(), email: email() });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
        placeholder="Name"
      />
      <input
        value={email}
        onInput={(e) => setEmail((e.target as HTMLInputElement).value)}
        placeholder="Email"
      />
      <button disabled={save.loading}>
        {() => save.loading() ? "Saving..." : "Save"}
      </button>

      {() => save.error()
        ? <p style={{ color: "red" }}>Error: {save.error()!.message}</p>
        : null
      }
      {() => save.data()
        ? <p style={{ color: "green" }}>Saved successfully!</p>
        : null
      }
    </form>
  );
}
```

mount(SaveForm, document.getElementById("root")!);
```
