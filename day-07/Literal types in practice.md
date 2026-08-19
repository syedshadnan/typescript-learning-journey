# Next: Literal Types in Practice

Now let's go one step deeper.

Consider:

```ts
let status = "pending";
```

What do you think TypeScript considers the type of `status` here?

**A)** `"pending"`

**B)** `string`

**C)** `any`

**D)** `unknown`

Ans: B.String

And here's the more interesting one:

```ts
const status = "pending";
```

What do you think the type is now?

**A)** `"pending"`

**B)** `string`

**C)** `any`

**D)** `unknown`

Give me your answers **and explain why**. This will lead us directly into an important TypeScript concept: **literal widening**.

Ans: "pending"


Exactly. **2/2 correct.** 🔥

### 1. `let`

```ts
let status = "pending";
```

You answered **`string`** ✅

TypeScript generally widens the inferred type:

```text
"pending" → string
```

because a `let` variable can later be reassigned:

```ts
status = "shipped"; // ✅
status = "anything"; // ✅
```

---

### 2. `const`

```ts
const status = "pending";
```

You answered **`"pending"`** ✅

Here TypeScript keeps the specific literal type:

```text
"pending"
```

because a `const` variable cannot be reassigned.

```ts
status = "shipped"; // ❌
```

So the mental model is:

```text
let
"pending" → string

const
"pending" → "pending"
```

This behavior is called **literal widening**.

### Important nuance

`const` doesn't *always* mean TypeScript will preserve every nested literal. For example, object properties behave differently:

```ts
const user = {
  role: "admin"
};
```

Here `user.role` is generally inferred as `string`, not `"admin"`.

We'll come back to **`as const`** later.

---

## 🎯 Your next challenge

Predict the types **without running the code**:

```ts
let a = "admin"; ==> string

const b = "admin"; ==> 'admin'

let c = 10; ==> number

const d = 10; ==> 10

let e = true; ==> boolean

const f = true; ==> true
```

Tell me the inferred type of **a, b, c, d, e, and f**.

Then we'll tackle **literal widening → `as const` → practical React usage**.

Perfect. **6/6 correct.** 🔥

You have the pattern exactly right:

| Declaration         | Inferred type |
| ------------------- | ------------- |
| `let a = "admin"`   | `string` ✅    |
| `const b = "admin"` | `"admin"` ✅   |
| `let c = 10`        | `number` ✅    |
| `const d = 10`      | `10` ✅        |
| `let e = true`      | `boolean` ✅   |
| `const f = true`    | `true` ✅      |

### 🧠 The rule

For primitive values:

```text
let
↓
TypeScript usually widens the literal
↓
"admin" → string
10 → number
true → boolean
```

Whereas:

```text
const
↓
TypeScript can preserve the exact literal
↓
"admin" → "admin"
10 → 10
true → true
```

This matters because literal types are about **specific values**, not merely broad categories.

---

## Now let's connect this to something practical

Imagine:

```ts
const user = {
  role: "admin"
};
```

You might expect:

```ts
user.role
```

to be:

```ts
"admin"
```

But TypeScript generally infers the property as:

```ts
string
```

Why?

Because although `user` is `const`, the **object property can still be changed**:

```ts
user.role = "editor";
```

So TypeScript keeps the property flexible.

### But what if we want to tell TypeScript:

> "Treat the values inside this object as exact literals and don't allow them to change."

That's where **`as const`** comes in:

```ts
const user = {
  role: "admin"
} as const;
```

Now:

```ts
user.role
```

is:

```ts
"admin"
```

and:

```ts
user.role = "editor";
```

is rejected. ❌

This is a very useful pattern in real TypeScript code.

---

### 🎯 Your next task

What do you think TypeScript infers for each?

```ts
const user1 = {
  role: "admin"
};

const user2 = {
  role: "admin"
} as const;
```

Tell me:

1. Type of `user1.role`
2. Type of `user2.role`
3. Why are they different?

Then we'll move into the **mini quiz** for today's Literal Types lesson.

Ans:
Type of user1.role  => string
Type of user2.role ==> "admin"
Why are they different?

user1: typescript assume that i might change the property value to another string later, so ti widens the type form to literal 'admin' to the broader primitive type string.

user2: this tells typescript treat the object as strict, read only literal. if freezes the value so it cannot change, preserve the exact literal type 'admin' instead of widening it to string.

Exactly. **2/2 + excellent reasoning.** 🔥

Your explanation is technically strong.

### 1. `user1.role` → `string` ✅

```ts
const user1 = {
  role: "admin"
};
```

You correctly identified that the **object property remains mutable**, so TypeScript widens:

```text
"admin" → string
```

Therefore:

```ts
user1.role = "editor"; // ✅
```

---

### 2. `user2.role` → `"admin"` ✅

```ts
const user2 = {
  role: "admin"
} as const;
```

Correct. `as const` tells TypeScript to preserve literal values and make the resulting properties `readonly`.

So:

```ts
user2.role = "editor"; // ❌
```

And the type remains:

```ts
"admin"
```

### One small terminology refinement

You said:

> "`as const` freezes the value"

Conceptually that's understandable, but technically **`as const` does not freeze the JavaScript object at runtime**.

It creates **readonly, literal types at compile time**.

So a better interview phrasing would be:

> "`as const` tells TypeScript to infer the expression as readonly and preserve its literal types."

That's an important distinction between **TypeScript's type system** and **JavaScript runtime behavior**.

---