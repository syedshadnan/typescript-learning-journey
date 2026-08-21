## Concept Verification Review

### Q1 — Type Inference

তোমার answer:

> TypeScript identify the value type of age by seeing the initial type of the value.

✅ **Correct.**

আরও precise করে বললে:

> TypeScript analyzes the initial value and infers the variable's type automatically.

```ts
let age = 25;
```

→ `age` is inferred as `number`.

**Score: 1/1**

---

### Q2 — `let` vs `const`

তোমার answer:

```ts
let role = "admin";  // string
const role = "admin"; // "admin"
```

✅ **Correct.**

এখানে তুমি Day 7-এর literal widening ঠিকভাবে মনে রেখেছো।

```ts
let role = "admin";
// string
```

কারণ `let` reassigned হতে পারে।

```ts
const role = "admin";
// "admin"
```

কারণ `const` reassigned হতে পারে না।

**Score: 1/1**

---

### Q3 — Union Type

তোমার answer:

> Yes valid. কারণ এখানে union type-এর দ্বারা multiple possible type set করা হয়েছে।

✅ Correct.

```ts
let userId: number | string = 101;

userId = "user_101";
```

এখানে declared contract:

```text
number OR string
```

তাই দুটোই valid।

একটা important distinction:

```ts
let userId = 101;
userId = "user_101"; // ❌
```

কিন্তু:

```ts
let userId: number | string = 101;
userId = "user_101"; // ✅
```

কারণ দ্বিতীয়টায় তুমি **explicitly** union declare করেছো।

**Score: 1/1**

---

### Q4 — Explicit Type দরকার?

তোমার answer:

> দরকার নেই। TypeScript implicitly বুঝে নিতে পারবে যে name-এর type string হবে। কিন্তু যদি value না করে তাহলে বুঝতে পারবে না।

প্রথম অংশ ✅

```ts
const name = "Ifty";
```

TypeScript বুঝবে:

```text
name → "Ifty"
```

এখানে একটা ছোট correction:

তুমি বলেছো:

> "যদি value না করে তাহলে বুঝতে পারবে না"

এটা পুরোপুরি precise না।

যদি initial value না থাকে, TypeScript-এর inference behavior context-এর উপর নির্ভর করে। তাই "value না থাকলে TypeScript বুঝতে পারবে না"—এভাবে generalize করা উচিত না।

আজকের level-এ মূল principle:

> **যখন TypeScript-এর কাছে যথেষ্ট information আছে, তখন explicit annotation সবসময় দরকার হয় না।**

**Score: 0.8/1**

---

### Q5 — Object Inference

তোমার answer:

> string, number, boolean

✅ Correct.

```ts
const product = {
  name: "Laptop",
  price: 50000,
  available: true
};
```

TypeScript infer করবে roughly:

```ts
{
  name: string;
  price: number;
  available: boolean;
}
```

তবে একটা important detail:

এটা শুধু:

```text
string, number, boolean
```

না—**প্রতিটি property-এর আলাদা inferred type আছে।**

```text
product.name      → string
product.price     → number
product.available → boolean
```

**Score: 1/1**

---

### Q6 — `const` Object Mutation

তোমার answer:

> yes valid. cause const use korle o object er property gula mutable.

🔥 **Correct.**

এটা Day 7-এর অন্যতম গুরুত্বপূর্ণ point ছিল।

```ts
const user = {
  role: "admin"
};

user.role = "editor";
```

✅ Valid

কারণ `const` মূলত variable binding/reassignment আটকায়:

```ts
user = {}; // ❌
```

কিন্তু property mutation আটকায় না:

```ts
user.role = "editor"; // ✅
```

আর:

```ts
const user = {
  role: "admin"
} as const;
```

তাহলে:

```ts
user.role = "editor"; // ❌
```

**Score: 1/1**

---

# 🎯 Result

**5.8/6 → ~9.7/10**

তোমার conceptual understanding strong.

বিশেষ করে তুমি তিনটা জিনিস correctly connect করতে পারছো:

```text
Inference
   ↓
Literal Widening
   ↓
const / let
```

এবং:

```text
const object
   ↓
property mutation still possible
   ↓
as const
   ↓
readonly + literal preservation
```

### One thing I want you to improve

তুমি concept বোঝো, কিন্তু মাঝে মাঝে explanation একটু **too broad** হয়ে যায়।

যেমন:

> "যদি value না থাকে তাহলে TypeScript বুঝতে পারবে না"

এর বদলে precise language ব্যবহার করবে:

> "TypeScript needs enough information from the code or context to infer a type."

এই precisionটা interview এবং production-level TypeScript-এর জন্য গুরুত্বপূর্ণ।

---

# 🧪 Now: Mini Quiz

এবার আমি **answers দেব না**। তোমাকে reasoning করতে হবে।

### Q1 — Type Prediction

What is the inferred type?

```ts
let score = 100;
```

A. `any`
B. `number`  ✅
C. `100`
D. `number | string`

---

### Q2 — Literal Widening

What is the inferred type of `status`?

```ts
let status = "active";
```

A. `"active"`
B. `string`   ✅
C. `string | "active"`
D. `any`

---

### Q3 — `const`

What is the inferred type?

```ts
const status = "active";
```

A. `string`
B. `"active"`  ✅
C. `any`
D. `string | "active"`

---

### Q4 — Error Detection

Will this compile?

```ts
let age = 25;

age = "25";
```

Explain **why**.

Ans: NO. the infered type of age was number but later reassign it with a string.

---

### Q5 — Union

Will this compile?

```ts
let value: string | number = 10;

value = "hello";
```

Explain the reasoning.

Ans: yes. the value can accept string or number and it declared with let. that's why reassigning with number or string is possible.

---

### Q6 — Object

What happens here?

```ts
const user = {
  name: "Ifty",
  age: 25
};

user.age = "25";
```

Does it compile? Why?

and: no. because the infered type of age was number but reassigned with a string.

---

### Q7 — `as const`

What is the type of `role`?

```ts
const user = {
  role: "admin"
} as const;

const role = user.role;
```

A. `string`
B. `"admin"`   ✅
C. `readonly string`
D. `any`

---

### Q8 — Challenge 🔥

What happens here?

```ts
let value: string | number = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
} else {
  console.log(value.toFixed(2));
}
```

Inside the first block, what is the type of `value`?

Inside the `else` block, what is the type?

And **why can TypeScript know that?**


Ans: Inside the first block the  type of vlaue is string and inside the else block the type of value is number.

Because the value has union types. it was annotated with string or number. in the first block the condition checks if the value is string. if string then it will console.log the uppercase version of value. in the else block only one condition is remaind. which is number. that's how typescript knows the type.
---

