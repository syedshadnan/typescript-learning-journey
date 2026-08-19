# 🧪 Mini Quiz — Day 7

Now let's test whether you can apply the concept without my guidance.

### Q1 — MCQ

What is the inferred type?

```ts
let status = "active";
```

**A.** `"active"`
**B.** `string` ✅
**C.** `any`
**D.** `unknown`

---

### Q2 — MCQ

What is the inferred type?

```ts
const status = "active";
```

**A.** `"active"` ✅
**B.** `string`
**C.** `any`
**D.** `unknown`

---

### Q3 — Error Detection

Will this produce a TypeScript error?

```ts
let role: "admin" | "user";

role = "editor";
```

Explain why.

Ans: the role variable is contracted specifically with 2 string 'admin' and 'user'. It won't accept other string.

---

### Q4 — Output/Type Prediction

What happens here?

```ts
const user = {
  role: "admin"
} as const;

console.log(user.role);
```

And what is the type of `user.role`?

Ans: 'admin'
---

### Q5 — Challenge

Consider:

```ts
const user = {
  role: "admin"
};

user.role = "editor";
```

Is this valid?


Then compare it with:

```ts
const user = {
  role: "admin"
} as const;

user.role = "editor";
```

What changes between the two?

Ans: the first example is valid. in the example typescript trows a compilation error on the line user.role = 'editor' because as const made the value strict read only.


Excellent work. 🔥 **You got the core of Day 7.**

### 🧪 Quiz Result: **4.5/5**

Let's review carefully, especially **Q5**, because there is one important distinction to fix.

---

### Q1 — `let` literal widening ✅

```ts
let status = "active";
```

Your answer: `string`

**Correct.**

Because `let` can be reassigned:

```ts
status = "inactive"; // ✅
```

So TypeScript widens `"active"` → `string`.

---

### Q2 — `const` literal preservation ✅

```ts
const status = "active";
```

Your answer: `"active"`

**Correct.**

Because the variable itself cannot be reassigned, TypeScript preserves the literal type.

---

### Q3 — Literal union ✅

```ts
let role: "admin" | "user";

role = "editor";
```

Your explanation is correct.

The contract says:

```text
role must be exactly:
"admin" OR "user"
```

Therefore:

```ts
role = "editor"; // ❌
```

This is a **compile-time TypeScript error**.

---

### Q4 — `as const` ✅

```ts
const user = {
  role: "admin"
} as const;

console.log(user.role);
```

Output:

```text
admin
```

And:

```ts
user.role
```

has the type:

```ts
"admin"
```

Correct.

---

# ⚠️ Q5 — Almost perfect, but there's a contradiction

You wrote:

> "the first example is valid. in the example typescript throws a compilation error..."

Your **conclusion is correct**, but the wording mixes the two examples.

### First example

```ts
const user = {
  role: "admin"
};

user.role = "editor";
```

This is **valid**. ✅

Why?

Even though `user` is `const`, the **property isn't readonly**.

TypeScript infers:

```ts
user.role: string
```

So:

```ts
user.role = "editor";
```

is allowed.

---

### Second example

```ts
const user = {
  role: "admin"
} as const;

user.role = "editor";
```

This produces an error. ❌

Because `as const` makes the property readonly:

```ts
user.role: "admin" // readonly
```

Therefore:

```ts
user.role = "editor";
```

is not allowed.

---

## 🧠 The distinction you MUST remember

There are actually **two separate ideas** here:

### `const`

```ts
const user = {
  role: "admin"
};
```

Means:

> The variable `user` cannot point to a different object.

But the object's properties can change.

```ts
user.role = "editor"; // ✅
```

### `as const`

```ts
const user = {
  role: "admin"
} as const;
```

Means:

> Preserve literal values and make the resulting properties readonly.

```ts
user.role = "editor"; // ❌
```

### Mental model

```text
const
→ variable binding is readonly

as const
→ literal types are preserved
→ properties/elements become readonly
```

This distinction is **very important for professional TypeScript**, so I'm glad we caught it now.

---
