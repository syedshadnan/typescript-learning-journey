Absolutely, Ifty. **Day 8 শুরু করি.** 🚀

আমি তোমার current project sources review করেছি—বিশেষ করে mentor instructions, Day 0–7 logs, README এবং roadmap। তোমার current position হলো:

> ✅ Day 0–7 complete
> 🎯 **Day 8 — TypeScript Fundamentals Revision & Type Inference**

তোমার Day 7 log-ও বলছে আজকের session-এ fundamentals consolidate করে Type Inference-এ focus করার কথা।  

---

# 🟦 Day 8 — TypeScript Fundamentals Revision & Type Inference

আজ নতুন অনেক syntax শেখানোর দিন না। আজকের উদ্দেশ্য হলো **এখন পর্যন্ত শেখা TypeScript-এর mental model শক্ত করা**।

কারণ তুমি এখন পর্যন্ত শিখেছ:

```text
Primitive Types
      ↓
Arrays / Tuples / Objects
      ↓
Functions
      ↓
Optional / Default Parameters
      ↓
Union Types
      ↓
Literal Types
      ↓
Type Inference
```

Roadmap অনুযায়ী Phase 1-এর remaining core topic হলো **Type Inference**। 

---

## 1. Type Inference কী?

TypeScript অনেক সময় তোমাকে explicitly type লিখতে বাধ্য করে না।

যেমন:

```ts
let age = 25;
```

তুমি লেখোনি:

```ts
let age: number = 25;
```

কিন্তু TypeScript বুঝে ফেলে:

```text
age → number
```

এটাই **Type Inference**।

সহজ ভাষায়:

> TypeScript তোমার code দেখে নিজে থেকে কোনো value-এর সম্ভাব্য type নির্ধারণ করে।

---

# 2. Basic Type Inference

```ts
let name = "Ifty";
let age = 25;
let isStudent = true;
```

TypeScript ধরে:

```text
name       → string
age        → number
isStudent  → boolean
```

তাই:

```ts
name = 100;
```

❌ Error

কারণ `name`-এর inferred type হলো `string`।

---

# 3. Explicit Typing বনাম Inference

দুইটিই valid:

### Explicit

```ts
let age: number = 25;
```

### Inferred

```ts
let age = 25;
```

দুটোর result:

```text
age → number
```

কিন্তু প্রশ্ন হলো:

**তাহলে সব জায়গায় type annotation লিখব না কেন?**

এখানেই important judgment দরকার।

---

# 4. কখন Type Inference ব্যবহার করা ভালো?

যখন type obvious:

```ts
const username = "Ifty";
const age = 25;
const isLoggedIn = true;
```

এখানে:

```ts
const username: string = "Ifty";
```

লেখা সাধারণত unnecessary।

কারণ TypeScript নিজেই বুঝতে পারে।

### Better:

```ts
const username = "Ifty";
```

---

# 5. Function Return Type Inference

তুমি Day 4-এ এটাও দেখেছ।

```ts
function add(a: number, b: number) {
  return a + b;
}
```

আমরা return type লিখিনি।

TypeScript বুঝতে পারে:

```text
return → number
```

অর্থাৎ internally:

```ts
function add(a: number, b: number): number
```

এর মতো।

এটা তোমার previous Day 4 learning-এর সঙ্গে directly connected। 

---

# 6. কিন্তু একটা গুরুত্বপূর্ণ ব্যাপার

Type inference **magic না**।

TypeScript যতটুকু information পায়, ততটুকুর ভিত্তিতেই inference করে।

উদাহরণ:

```ts
let value;
```

এখানে TypeScript-এর কাছে শুরুতে খুব কম information আছে।

তাই এটা:

```ts
let value;
```

এর মতো obvious:

```ts
let value = 25;
```

না।

এখানে তোমাকে inference-এর behavior বুঝতে হবে, শুধু "TypeScript automatically knows everything" ধরে নিলে ভুল হবে।

---

# 7. Inference + Union Types

এখন Day 6-এর concept-এর সঙ্গে connect করি।

```ts
let userId = 101;
```

এখানে:

```text
userId → number
```

পরে:

```ts
userId = "user_101";
```

❌ সাধারণভাবে allowed হবে না।

কারণ TypeScript প্রথম assignment দেখে `userId`-কে number হিসেবে infer করেছে।

যদি তোমার intention হয় দুইটাই allow করা:

```ts
let userId: number | string = 101;
```

তাহলে explicit union type দরকার।

এটা একটা গুরুত্বপূর্ণ distinction:

> **Inference তোমার intention guess করে না; code-এর available information থেকে type নির্ধারণ করে।**

---

# 8. Inference + Literal Types

এখন Day 7-এর সঙ্গে connect করি।

```ts
let status = "active";
```

সাধারণত:

```text
status → string
```

কিন্তু:

```ts
const status = "active";
```

এখানে:

```text
status → "active"
```

হতে পারে।

কেন?

কারণ `const` variable reassigned হবে না বলে TypeScript specific literal ধরে রাখতে পারে।

Day 7-এ তুমি এটাকে **literal widening** হিসেবে শিখেছ। 

---

# 9. Object Inference

এটা খুব important।

```ts
const user = {
  name: "Ifty",
  age: 25,
  isStudent: true
};
```

TypeScript infer করবে roughly:

```ts
{
  name: string;
  age: number;
  isStudent: boolean;
}
```

তাই:

```ts
user.age = "25";
```

❌ Error

কিন্তু:

```ts
user.age = 26;
```

✅ Valid

---

# 10. `const` মানেই পুরো object readonly নয়

এটা তোমার Day 7-এর একটা important weak point ছিল।

```ts
const user = {
  role: "admin"
};
```

এখানে:

```ts
user.role = "editor";
```

সাধারণভাবে valid।

কারণ:

```text
const
↓
variable reference reassignment বন্ধ করে
```

কিন্তু object-এর property mutation বন্ধ করে না।

---

### `as const`

```ts
const user = {
  role: "admin"
} as const;
```

এখন:

```ts
user.role = "editor";
```

❌ TypeScript error

কারণ `as const` literal preservation + readonly behavior দেয়।

কিন্তু আবার মনে রেখো:

> `as const` runtime object freeze করে না।

এটা **compile-time type behavior**।

---

# 🧠 এখন তোমার জন্য সবচেয়ে গুরুত্বপূর্ণ Mental Model

এখন পর্যন্ত TypeScript-কে এভাবে ভাবো:

```text
JavaScript value
       ↓
TypeScript analyzes it
       ↓
Inference / Explicit Type
       ↓
Type Checking
       ↓
JavaScript
       ↓
Runtime
```

আর:

```text
Union
→ possible types

Literal
→ exact allowed values

Inference
→ TypeScript determines type from context/code

Narrowing
→ TypeScript reduces possible types based on logic
```

এই চারটা concept একসাথে বুঝতে পারা খুব গুরুত্বপূর্ণ।

---

# 🔥 Concept Verification

এখন আমি **উত্তর দেব না**। তুমি নিজের ভাষায় answer করবে।

### Q1

`let age = 25`-এ TypeScript কীভাবে বুঝল `age` একটি number?

### Q2

এখানে difference কী?

```ts
let role = "admin";
```

vs

```ts
const role = "admin";
```

### Q3

এটা কি valid?

```ts
let userId: number | string = 101;

userId = "user_101";
```

কেন?

### Q4

এখানে explicit type দেওয়া কি দরকার?

```ts
const name: string = "Ifty";
```

নাকি:

```ts
const name = "Ifty";
```

যথেষ্ট?

**কেন?**

### Q5

এটার inferred type কী?

```ts
const product = {
  name: "Laptop",
  price: 50000,
  available: true
};
```

### Q6

এটা কি valid?

```ts
const user = {
  role: "admin"
};

user.role = "editor";
```

কেন?

---

## 🎯 Day 8-এর প্রথম কাজ

উপরের **৬টা প্রশ্নের answer নিজের ভাষায় দাও**।

আমি তোমার উত্তরগুলো review করে **যেখানে reasoning gap আছে সেখানে challenge করব**। তারপর আমরা যাব:

**Mini Quiz → Interview Round → Coding Practice → Day 8 Final Challenge**

আজকের লক্ষ্য শুধু syntax জানা না—**TypeScript কেন ওই type infer করছে সেটা explain করতে পারা।**
