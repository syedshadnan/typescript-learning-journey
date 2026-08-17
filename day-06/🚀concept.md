# 🚀 TypeScript Day 6 — Union Types

We're officially starting **Day 6**. Your updated project sources confirm that the next focus after Day 5 is **Union Types**, and the broader Phase 1 goal is to understand how TypeScript handles values that can have multiple possible types.

Today we'll focus on **understanding the problem first**, then syntax.

---

# 1. What is a Union Type?

Sometimes a value legitimately needs to accept **more than one type**.

For example, imagine a user ID in an application.

Some systems use numeric IDs:

```ts
let userId = 101;
```

But another API might return IDs as strings:

```ts
let userId = "user_101";
```

In JavaScript, this isn't a problem because variables are dynamically typed.

In TypeScript, we can explicitly say:

> "This value can be either a number OR a string."

That's a **Union Type**.

We use the `|` symbol:

```ts
let userId: number | string;
```

Now both are valid:

```ts
userId = 101;
userId = "user_101";
```

But this isn't:

```ts
userId = true; // ❌
```

because `boolean` isn't part of the union.

---

# 2. Why Do Union Types Exist?

This is the important part.

Union types aren't there just to make TypeScript more permissive.

They allow us to describe **real-world data that genuinely has multiple possible forms**.

Consider an API response:

```ts
type ProductId = number | string;
```

A backend might return:

```ts
101
```

while another system returns:

```ts
"prod_101"
```

Instead of using:

```ts
any
```

we can describe exactly what is allowed:

```ts
number | string
```

That's still **type-safe**.

---

# 3. Union Types with Functions

This becomes more useful when working with functions.

```ts
function printId(id: number | string) {
  console.log(id);
}
```

Both are valid:

```ts
printId(101);
printId("user_101");
```

But:

```ts
printId(true);
```

❌ TypeScript error.

The function contract says:

```text
id must be number OR string
```

---

# 4. Union Does NOT Mean "Both"

This is a common misunderstanding.

```ts
let value: string | number;
```

does **not** mean:

> value must be a string AND a number.

It means:

> value can be a string OR a number.

At any particular moment, the value has one actual runtime type.

For example:

```ts
let value: string | number = 100;
```

At this moment:

```text
value → number
```

Later:

```ts
value = "hello";
```

Now:

```text
value → string
```

---

# 5. Union Types vs `any`

This distinction is extremely important.

### `any`

```ts
let value: any;

value = 10;
value = "hello";
value = true;
value = [];
```

Almost anything is allowed.

You've essentially told TypeScript:

> "Don't check this value."

### Union

```ts
let value: string | number;

value = 10;       // ✅
value = "hello";  // ✅
value = true;     // ❌
```

You've told TypeScript:

> "Only these specific types are allowed."

So:

```text
any
→ removes much of TypeScript's protection

union
→ restricts the value to known possibilities
```

This is why unions are much safer when you know the possible types.

---

# 6. Union Types in Objects

You can also use unions inside object types.

For example:

```ts
type User = {
  id: number | string;
  name: string;
};
```

Now:

```ts
const user1: User = {
  id: 101,
  name: "Ifty"
};
```

and:

```ts
const user2: User = {
  id: "user_101",
  name: "Ifty"
};
```

are both valid.

But:

```ts
const user3: User = {
  id: true,
  name: "Ifty"
};
```

is invalid.

---

# 7. Union Types and Operations ⚠️

Here's where things get interesting.

Consider:

```ts
function double(value: number | string) {
  return value * 2;
}
```

You might think:

```text
number → multiply by 2
string → maybe repeat twice
```

But TypeScript doesn't simply assume what you mean.

Why?

Because:

```ts
value
```

could be either:

```text
number
```

or:

```text
string
```

You need to determine which type you actually have before performing operations that require a specific type.

This leads us toward an important concept:

> **Type Narrowing**

We'll study that more deeply later, but today you should understand the problem.

---

# 8. Basic Narrowing with `typeof`

For example:

```ts
function double(value: number | string) {
  if (typeof value === "number") {
    return value * 2;
  }

  return value.repeat(2);
}
```

Now TypeScript understands:

Inside:

```ts
if (typeof value === "number")
```

`value` is a:

```ts
number
```

Otherwise, it is:

```ts
string
```

This process of reducing a union from multiple possible types to a more specific type is called **type narrowing**.

For today:

**Union = possible types**

**Narrowing = determining which possibility we're dealing with**

We'll return to this repeatedly as your TypeScript knowledge becomes more advanced.

---

# 9. Union Types in React ⚛️

Union types are extremely useful in React.

For example, a component might accept different sizes:

```ts
type ButtonProps = {
  size: "small" | "medium" | "large";
};
```

Now:

```tsx
<Button size="small" />
<Button size="medium" />
<Button size="large" />
```

are valid.

But:

```tsx
<Button size="huge" />
```

❌ is rejected by TypeScript.

This is particularly powerful because we're not just saying:

```ts
size: string
```

We're saying:

> `size` can only be one of these specific values.

That brings us toward **literal types**, another part of your TypeScript fundamentals roadmap. 

---

# 🧠 Concept Verification

Don't look anything up. Explain these in your own words.

### Q1

What problem does a union type solve?

Why might this be better than using `any`?

```ts
let userId: number | string;
```

---

### Q2

What values are allowed here?

```ts
let value: string | number;
```

Would these be valid?

```ts
value = "Ifty";
value = 25;
value = true;
```

Explain each one.

---

### Q3

Does this mean the variable must contain **both** a string and a number?

```ts
let value: string | number;
```

Explain what `|` actually means.

---

### Q4

Is this function valid?

```ts
function printValue(value: string | number) {
  console.log(value);
}

printValue("hello");
printValue(100);
printValue(true);
```

Which call causes an error and why?

---

### Q5 — Think Like a Developer 🔥

Compare:

```ts
let id: any;
```

with:

```ts
let id: string | number;
```

If you know that an API will return an ID **only as either a string or a number**, which one would you choose?

**Why?**

---
