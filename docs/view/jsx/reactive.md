---
title: Reactive JSX Patterns
description: Reactive JSX patterns in Hedystia View.
---

# Reactive JSX Patterns

Reactivity in @hedystia/view comes from wrapping expressions in functions. The JSX runtime detects function children and function props, creating effects that update only the specific DOM nodes that need to change.

## Static vs Reactive

The critical distinction:

<div v-pre>

```tsx
import { sig, val } from "@hedystia/view";

const count = sig(0);
const [c] = sig(0);

// ❌ STATIC — captures the value once, never updates
<span>{val(count)}</span>
<span>{c()}</span>

// ✅ REACTIVE — creates an effect, updates when count changes
<span>{() => val(count)}</span>
<span>{c}</span>
```

</div>

The first examples read the signal at component creation time and insert that value as a static text node. The reactive examples pass the signal accessor (or a function wrapping the read) — the JSX runtime creates an effect that re-runs the function and updates the text node whenever the signal changes.

## Reactive Text

Use a signal accessor or a function child to create reactive text content:

<div v-pre>

```tsx
import { sig, mount } from "@hedystia/view";

function Greeting() {
  const [name, setName] = sig("world");

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <input
        value={name}
        onInput={(e) => setName((e.target as HTMLInputElement).value)}
      />
    </div>
  );
}

mount(Greeting, document.getElementById("root")!);
```

</div>

## Reactive Style

Pass a function to `style` to make it reactive:

<div v-pre>

```tsx
import { sig, mount } from "@hedystia/view";

function ToggleColor() {
  const [active, setActive] = sig(false);

  return (
    <div
      style={() => ({
        color: active() ? "green" : "gray",
        fontWeight: active() ? "bold" : "normal",
      })}
      onClick={() => setActive(!active())}
    >
      {() => active() ? "Active" : "Inactive"}
    </div>
  );
}

mount(ToggleColor, document.getElementById("root")!);
```

</div>

## Reactive Props

Any non-event prop that receives a function becomes reactive:

<div v-pre>

```tsx
import { sig, mount } from "@hedystia/view";

function DynamicInput() {
  const [text, setText] = sig("");

  return (
    <div>
      <input
        value={text}
        onInput={(e) => setText((e.target as HTMLInputElement).value)}
      />
      <p class={() => text().length > 10 ? "long" : "short"}>
        {() => text().length} characters
      </p>
    </div>
  );
}

mount(DynamicInput, document.getElementById("root")!);
```

</div>

## Reactive List

Return an array from a function child to render a reactive list:

<div v-pre>

```tsx
import { sig, val, set, mount } from "@hedystia/view";

function TodoList() {
  const [items, setItems] = sig(["Buy milk", "Walk dog"]);

  const addItem = () => {
    setItems((curr) => [...curr, `Item ${curr.length + 1}`]);
  };

  return (
    <div>
      <ul>
        {() => items().map((item) => <li>{item}</li>)}
      </ul>
      <button onClick={addItem}>Add</button>
    </div>
  );
}

mount(TodoList, document.getElementById("root")!);
```

</div>

For keyed, efficient list rendering, use the [`For`](/view/flow/for) component instead.

## Reactive Conditional

Return different elements from a function child for conditional rendering:

<div v-pre>

```tsx
import { sig, mount } from "@hedystia/view";

function Toggle() {
  const [show, setShow] = sig(true);

  return (
    <div>
      <button onClick={() => setShow(!show())}>Toggle</button>
      {() => show()
        ? <p>Content is visible</p>
        : <p style={{ color: "gray" }}>Content is hidden</p>
      }
    </div>
  );
}

mount(Toggle, document.getElementById("root")!);
```

</div>

For cleaner conditional rendering, use the [`Show`](/view/flow/show) component.

## Summary

| Pattern | Syntax | Creates Effect? |
|---------|--------|----------------|
| Static text | `{val(count)}` or `{c()}` | No — read once |
| Reactive text | `{() => val(count)}` or `{c}` | Yes |
| Static style | `style={ { color: "red" }}` | No |
| Reactive style | `style={() => ({ color: c() })}` | Yes |
| Static prop | `value={val(text)}` | No — set once |
| Reactive prop | `value={text}` | Yes |
| Reactive list | `{() => items().map(...)}` | Yes |
| Reactive cond | `{() => show() ? <A /> : <B />}` | Yes |
