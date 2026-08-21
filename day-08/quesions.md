# 💻 Day 8 — Coding Practice

এখন concept verification এবং interview round complete।

তাই mentor workflow অনুযায়ী এখন **practice stage**-এ যাওয়া যাবে। 

আজ আমরা একটা ছোট **User Configuration System** বানাবো।

## Problem 1 — Basic Inference

এই code লিখো:

```ts
const username = "Ifty";
const age = 25;
const isStudent = true;
```

তারপর comment করে inferred types লিখবে:

```ts
// username → ?
// age → ?
// isStudent → ?
```

---

## Problem 2 — User Role

একটা function বানাও:

```text
createUser(name, role)
```

যেখানে:

* `name` → string
* `role` → `"admin" | "editor" | "user"`

Example:

```ts
createUser("Ifty", "admin");
createUser("Sohag", "editor");
```

কিন্তু:

```ts
createUser("Ifty", "manager");
```

❌ হওয়া উচিত না।

---

## Problem 3 — User Configuration 🔥

একটা object-based function বানাও:

```text
createUserProfile(profile)
```

Profile-এর মধ্যে থাকবে:

```text
name
age
role
status
```

Rules:

```text
name   → string
age    → number
role   → "admin" | "editor" | "user"
status → "active" | "inactive"
```

Example:

```ts
createUserProfile({
  name: "Ifty",
  age: 25,
  role: "admin",
  status: "active"
});
```

Invalid:

```ts
createUserProfile({
  name: "Ifty",
  age: 25,
  role: "manager",
  status: "active"
});
```

---

## 🔥 Final Challenge — Don't Use `any`

Create:

```ts
formatUserStatus(...)
```

It should accept:

```text
"active"
"inactive"
"banned"
```

and return:

```text
"User is active"
"User is inactive"
"User is banned"
```

Use a **literal union**.

Then test all three values.

### Rule

আজকের challenge-এ:

* ❌ `any` ব্যবহার করবে না
* ❌ unnecessary explicit types দেবে না
* ✅ inference যেখানে যথেষ্ট সেখানে inference ব্যবহার করবে
* ✅ literal unions যেখানে finite choices আছে সেখানে ব্যবহার করবে

**আগে নিজে code লিখবে।** Full solution এখন দেব না। Code পাঠালে আমি তোমার TypeScript code professional code-review style-এ review করব।
