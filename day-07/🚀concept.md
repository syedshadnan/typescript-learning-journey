# 🚀 TypeScript Day 7 — Literal Types

Let's start.

You finished **Day 6 — Union Types** with a strong understanding of `|`, `any` vs unions, and basic narrowing. Your project README says the next topic is **Literal Types**, so that's today's focus. 

## 1. What is a Literal Type?

So far, you've written:

```ts
let status: string = "active";
```

This means `status` can contain **any string**:

```ts
status = "active";
status = "inactive";
status = "hello";
status = "anything";
```

But what if your application only allows a **specific set of values**?

For example, an order can only have:

```text
"pending"
"shipped"
"delivered"
```

We can tell TypeScript that directly:

```ts
let status: "pending" | "shipped" | "delivered";

status = "pending";   // ✅
status = "shipped";   // ✅
status = "delivered"; // ✅

status = "cancelled"; // ❌
```

This is a **literal type**.

---

# 2. The Core Idea

A normal type says:

> "Any value of this type is allowed."

```ts
let color: string;
```

A literal type says:

> "Only this exact value is allowed."

```ts
let color: "red";
```

Now:

```ts
color = "red";   // ✅
color = "blue";  // ❌
```

And when combined with unions:

```ts
let color: "red" | "blue" | "green";
```

you get a **restricted set of exact values**.

### Mental model

```text
string
↓
any string

"red" | "blue" | "green"
↓
only these exact strings
```

That's the important distinction.

---

# 3. Why Does This Matter?

Imagine you're building an e-commerce application.

You might have:

```ts
let orderStatus: string;
```

Technically, this allows:

```ts
orderStatus = "pending";
orderStatus = "shipped";
orderStatus = "delivered";
orderStatus = "banana";
orderStatus = "somethingWrong";
```

TypeScript can't stop you because all of those are strings.

But this:

```ts
let orderStatus: "pending" | "shipped" | "delivered";
```

creates a much stronger contract.

Now invalid states are rejected **during development**.

This is one of the practical benefits of TypeScript: instead of merely saying *"this must be a string,"* you can say *"this must be one of these specific valid strings."*

---

# 4. Literal Types + Function Parameters

This becomes especially useful with functions.

Instead of:

```ts
function changeStatus(status: string) {
  // ...
}
```

you can write:

```ts
function changeStatus(
  status: "pending" | "shipped" | "delivered"
) {
  console.log(`Order is ${status}`);
}
```

Now:

```ts
changeStatus("pending");   // ✅
changeStatus("shipped");   // ✅
changeStatus("delivered"); // ✅

changeStatus("banana");    // ❌
```

The function's parameter itself becomes a **contract**.

---

# 5. Literal Types with Numbers

Literal types aren't limited to strings.

You can use numbers too:

```ts
let dice: 1 | 2 | 3 | 4 | 5 | 6;

dice = 3; // ✅
dice = 6; // ✅
dice = 7; // ❌
```

You can also use booleans:

```ts
let isAvailable: true;

isAvailable = true;  // ✅
isAvailable = false; // ❌
```

Although boolean literal types are less commonly used directly than string literal unions.

---

# 6. Real-World Example — User Role

Suppose you're building a MERN application.

You have three user roles:

```ts
type Role = "admin" | "editor" | "user";
```

Then:

```ts
let userRole: Role;

userRole = "admin";  // ✅
userRole = "editor"; // ✅
userRole = "user";   // ✅

userRole = "guest";  // ❌
```

This is much safer than:

```ts
let userRole: string;
```

because `"guest"` isn't a valid role according to your application's rules.

And notice something important:

**Literal types are already giving us a preview of type aliases.**

We'll use this heavily when we get into object typing.

---

# 7. Literal Types + React

This is particularly useful in React component props.

Imagine a button component:

```ts
type ButtonProps = {
  size: "small" | "medium" | "large";
};
```

Then:

```tsx
<Button size="small" />
<Button size="medium" />
<Button size="large" />
```

All valid.

But:

```tsx
<Button size="huge" />
```

TypeScript rejects it.

This is extremely useful for reusable React components because you're defining exactly which values a component accepts.

---

# 🧠 One Important Distinction

Compare these:

```ts
let role: string = "admin";
```

and:

```ts
let role: "admin" | "user" = "admin";
```

The first says:

> `role` is a string.

The second says:

> `role` is specifically `"admin"` or `"user"`.

So:

```ts
role = "something";
```

### First version:

✅ Allowed.

### Second version:

❌ Rejected.

That's the power of literal types.

---

# ⚠️ Common Mistake

Don't think:

```ts
"admin" | "user"
```

means two values must exist simultaneously.

It means:

```text
admin OR user
```

Just like yesterday's union types.

The difference is that instead of broad types:

```ts
string | number
```

we're using **specific literal values**:

```ts
"admin" | "user"
```

---

# 🎯 Your First Concept Check

Don't look for the answer online. Reason it out.

### Question 1

What is the difference between:

```ts
let status: string;
```

and:

```ts
let status: "pending" | "shipped" | "delivered";
```

Explain it in your own words.

### Question 2

Which assignments are valid?

```ts
let role: "admin" | "user";

role = "admin";
role = "user";
role = "editor";
role = "ADMIN";
```

Tell me which ones are valid **and why**.

### Question 3

Why would this be better than simply using `string`?

```ts
function setRole(role: "admin" | "user") {
  // ...
}
```

Answer these three first. Then I'll verify your understanding and we'll move into **literal types + type aliases, `as const`, practical exercises, quiz, and interview questions**.
