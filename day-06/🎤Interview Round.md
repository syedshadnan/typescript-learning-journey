# 🎤 Day 6 — Interview Round

Now let's test whether you can explain unions like a developer in an interview.

### Q1 — Beginner

**What is a union type in TypeScript, and why would you use one?**

Give a real-world example.

---
Ans: Union type is a feature of typescript that allows a variable, function parameter, or return value to hold one of several specified types.

For example: if a event registration function want to allow both string or number as id then union type might be the solution.
---

### Q2 — Beginner → Intermediate

What is the difference between:

```ts
let value: string | number;
```

and:

```ts
let value: any;
```

Why is the first generally safer?

---
Ans: union type will allow only string or number in contrast any type remove the typescript type checking protection. tha't why union type is more safer than any.
---

### Q3 — Intermediate

Consider:

```ts
function formatId(id: string | number) {
  if (typeof id === "number") {
    return `ID-${id}`;
  }

  return id.toUpperCase();
}
```

Explain why TypeScript allows:

```ts
id.toUpperCase();
```

in the second part even though `id` was originally declared as:

```ts
string | number
```

---
Ans: The if statement filters out all numbers and returns early. TypeScript knows only a string is left, so it allows string methods.
---

### Q4 — Practical

You're receiving data from an API:

```ts
type User = {
  id: string | number;
  name: string;
};
```

Why might `id: string | number` be better than:

```ts
id: any;
```

in a real production application?

Think about **maintenance, IDE support, refactoring, and bugs**.

---
Ans: Using id: string | number tells TypeScript exactly what to expect, whereas any turns off all type checking. This prevents bugs from invalid data, keeps autocomplete working in your IDE, and warns you instantly if refactoring breaks your code.
---

### Q5 — 🔥 Interview Challenge

Suppose you write:

```ts
function processValue(value: string | number) {
  return value.length;
}
```

Will TypeScript accept this?

If not, **why not?**

Then explain what you would need to do before accessing `.length`.

Don't write the solution yet—**explain the reasoning first.**

---
Ans:No, TypeScript will not accept this because the .length property only exists on a string, not on a number. Since value can be either type, TypeScript blocks the code to prevent a runtime error when a number is passed. Before accessing .length, you must use a type guard (like typeof value === "string") to prove to the compiler that the value is strictly a string at that exact moment
---

## 🎤 Day 6 — Interview Review

**Excellent. 5/5.** 🔥

Your answers are getting more precise, especially your explanation of narrowing in Q3 and Q5.

### Q1 — ✅ 9.5/10

Correct definition:

> A union allows a variable, parameter, or return value to have one of several specified types.

Your event-registration ID example is practical and appropriate.

A slightly sharper interview phrasing would be:

> A union type allows a value to be one of several specified types while still restricting it to those known possibilities.

---

### Q2 — ✅ 10/10

Exactly:

```ts
string | number
```

restricts the value to known types.

```ts
any
```

removes much of TypeScript's type-checking protection.

Your reasoning is correct.

---

### Q3 — ✅ 10/10

Excellent explanation:

> "The if statement filters out all numbers and returns early."

That's precisely what happens.

Initially:

```ts
id: string | number
```

After:

```ts
if (typeof id === "number") {
  return ...
}
```

and because that branch returns, execution reaching the next statement means:

```ts
id: string
```

So:

```ts
id.toUpperCase()
```

is safe.

This is **type narrowing through control flow**.

---

### Q4 — ✅ 10/10

Strong production-oriented answer.

You correctly mentioned:

* Type safety
* IDE/autocomplete support
* Refactoring
* Early warnings
* Preventing invalid values

That's exactly why a production codebase benefits from:

```ts
id: string | number
```

instead of:

```ts
id: any
```

---

### Q5 — ✅ 10/10

Perfect.

```ts
function processValue(value: string | number) {
  return value.length;
}
```

❌ TypeScript rejects this because `.length` isn't available on `number`.

At that point TypeScript only knows:

```text
string | number
```

It doesn't know which one it is.

You correctly identified the solution concept:

> Use a type guard such as `typeof value === "string"` to narrow the union.

---

# 🏆 Interview Score: 9.9/10

| Area                 | Result |
| -------------------- | ------ |
| Union definition     | ✅      |
| Union vs `any`       | ✅      |
| Type narrowing       | ✅      |
| Production reasoning | ✅      |
| Type guards          | ✅      |

### Your biggest improvement today

You're no longer just saying:

> "TypeScript knows the type."

You're explaining **why TypeScript knows the type** based on control flow.

That's a significant step toward understanding the TypeScript type system.

---
