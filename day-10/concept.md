# 🚀 TypeScript Day 10 — Optional Properties & Readonly Properties

আজ থেকে আমরা **Phase 2 — Object Typing**-এ ঢুকে আরও structured data modeling শিখব।

তোমার Day 9-এ **Type Aliases + Object Typing** successfully complete হয়েছে, এবং roadmap অনুযায়ী পরের focus হলো **Optional Properties + Readonly Properties**।  

আজকের লক্ষ্য শুধু syntax শেখা না—**কোন property required হবে, কোনটা optional হবে, আর কোনটা পরিবর্তন করা যাবে না—এগুলো দিয়ে real-world object model design করা।**

---

# 1. Optional Properties

ধরো আমরা একটা user model বানালাম:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

এখানে তিনটিই **required**।

তাই এটা valid:

```ts
const user: User = {
  id: 1,
  name: "Ifty",
  email: "ifty@example.com"
};
```

কিন্তু:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};
```

❌ Error হবে।

কারণ `email` required।

---

## তাহলে optional property কী?

`?` ব্যবহার করি:

```ts
type User = {
  id: number;
  name: string;
  email?: string;
};
```

এখন `email` দেওয়া **optional**।

দুটিই valid:

```ts
const user1: User = {
  id: 1,
  name: "Ifty",
  email: "ifty@example.com"
};
```

```ts
const user2: User = {
  id: 2,
  name: "Rahim"
};
```

### Mental Model

```text
property
→ অবশ্যই থাকতে হবে

property?
→ থাকতে পারে, নাও থাকতে পারে
```

---

# 2. Real-world Example

ধরো একটা e-commerce application:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  description?: string;
};
```

সব product-এর:

* `id` থাকবে
* `name` থাকবে
* `price` থাকবে

কিন্তু সব product-এর description নাও থাকতে পারে।

তাই:

```ts
const product: Product = {
  id: 101,
  name: "Keyboard",
  price: 1500
};
```

valid।

---

# 3. Important: Optional Property এবং `undefined`

এখানে একটা subtle point আছে।

```ts
type User = {
  name: string;
  age?: number;
};
```

`age` না থাকলে:

```ts
user.age
```

এর type effectively:

```ts
number | undefined
```

কারণ TypeScript জানে:

> "age থাকলে number হবে, কিন্তু property-টাই না-ও থাকতে পারে।"

তাই এমন code লিখলে:

```ts
const user: User = {
  name: "Ifty"
};

console.log(user.age);
```

তুমি পাবে:

```text
undefined
```

---

# 4. Optional Property ব্যবহার করার সময় সতর্কতা

ধরো:

```ts
type User = {
  name: string;
  age?: number;
};
```

এখন:

```ts
const user: User = {
  name: "Ifty"
};
```

এখানে সরাসরি:

```ts
user.age.toFixed();
```

❌ সমস্যা হবে।

কারণ `age` হতে পারে:

```text
number
OR
undefined
```

তাই আগে check করতে হবে:

```ts
if (user.age !== undefined) {
  console.log(user.age.toFixed());
}
```

এখানে TypeScript বুঝতে পারে:

```text
age !== undefined
        ↓
age → number
```

এটাই আগের **type narrowing** concept-এর সাথে connected। 

---

# 5. Readonly Properties

এবার দ্বিতীয় concept।

ধরো:

```ts
type User = {
  id: number;
  name: string;
};
```

এখন:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};

user.name = "Rahim";
```

এটা valid।

কারণ `const` এখানে object reference-কে reassignment থেকে আটকাচ্ছে; object-এর properties automatically readonly করে না। এটা আমরা Day 7-এ `as const` দিয়ে দেখেছিলাম। 

---

## `readonly`

যদি চাই `id` পরিবর্তন করা না যায়:

```ts
type User = {
  readonly id: number;
  name: string;
};
```

এখন:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};
```

এটা valid।

কিন্তু:

```ts
user.name = "Rahim";
```

✅ valid

আর:

```ts
user.id = 2;
```

❌ TypeScript error

কারণ `id` হলো `readonly`.

---

# 6. Why would we need readonly?

Real-world application-এ কিছু data creation-এর পর পরিবর্তন করা উচিত না।

যেমন:

```ts
type User = {
  readonly id: number;
  name: string;
  email: string;
};
```

`id` database থেকে generate হয়েছে।

User-এর:

```text
name → পরিবর্তন হতে পারে
email → পরিবর্তন হতে পারে
id → পরিবর্তন হওয়া উচিত নয়
```

তাই:

```ts
readonly id
```

খুব logical।

---

# 7. Optional + Readonly একসাথে

দুটো একসাথেও ব্যবহার করা যায়:

```ts
type User = {
  readonly id: number;
  name: string;
  email?: string;
};
```

এখানে:

```text
id
→ required
→ readonly

name
→ required
→ mutable

email
→ optional
→ mutable
```

এই ধরনের modeling-ই TypeScript-এর আসল power।

---

# 8. `readonly` ≠ Runtime Immutability

এটা খুব important।

```ts
type User = {
  readonly id: number;
};
```

`readonly` TypeScript-এর **compile-time restriction**।

এটা JavaScript runtime-এ object-কে automatically freeze করে না।

অর্থাৎ:

```text
readonly
→ TypeScript type-system protection

Object.freeze()
→ JavaScript runtime mechanism
```

এই distinction তোমার Day 7-এর `as const` concept-এর continuation। 

---

# 9. Optional vs Readonly

এটা মাথায় রাখো:

| Feature                  | Meaning                      |
| ------------------------ | ---------------------------- |
| `name: string`           | Required + change করা যায়    |
| `name?: string`          | Optional + change করা যায়    |
| `readonly name: string`  | Required + change করা যায় না |
| `readonly name?: string` | Optional + change করা যায় না |

শেষেরটাও valid:

```ts
type User = {
  readonly id?: number;
};
```

---

# 10. Real-world API Example

ধরো backend থেকে user data আসে:

```ts
type User = {
  readonly id: number;
  name: string;
  email: string;
  phone?: string;
  bio?: string;
};
```

এটা অনেক realistic model:

```text
id
→ database identity
→ required
→ readonly

name
→ required
→ editable

email
→ required
→ editable

phone
→ optional

bio
→ optional
```

এই ধরনের modeling পরবর্তীতে React + TypeScript এবং backend API typing-এ অনেক কাজে লাগবে।

---

# 🧠 Day 10 Core Mental Model

আজকের পুরো lesson-টা এক লাইনে:

```text
TypeScript object typing
        ↓
What must exist?
        ↓
What may be missing?
        ↓
What may change?
        ↓
What must never change?
```

তারপর আমরা লিখি:

```ts
type User = {
  readonly id: number;
  name: string;
  phone?: string;
};
```

এটাই **data modeling**।

---

# 🎯 Concept Verification — এখন তোমার পালা

আমি এখনো answer দিচ্ছি না। নিজের ভাষায় answer দাও।

### Q1

এই দুইটার মধ্যে মূল পার্থক্য কী?

```ts
type User = {
  age: number;
};
```

vs

```ts
type User = {
  age?: number;
};
```

---

### Q2

এই code-এ error কেন?

```ts
type User = {
  age?: number;
};

const user: User = {
  name: "Ifty"
};

console.log(user.age.toFixed());
```

---

### Q3

এখানে কোন property change করা যাবে এবং কোনটা যাবে না?

```ts
type Product = {
  readonly id: number;
  name: string;
  description?: string;
};
```

---

### Q4 — একটু tricky

এটা কি valid?

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};

user.id = 2;
```

যদি `User` হয়:

```ts
type User = {
  readonly id: number;
  name: string;
};
```

**কেন?**

---

### Q5 — Real-world reasoning

একটা e-commerce `Product` model-এ কোন কোন property তুমি `readonly`, কোনগুলো optional, আর কোনগুলো normal রাখবে?

নিজের design দাও।
**Syntax perfect হওয়া জরুরি না—তোমার reasoningটাই বেশি important।**

তোমার Q1–Q5 answer দেখে আমি আগে concept understanding verify করব। তারপর **Day 10 Mini Quiz → Interview Round → Coding Practice → Final Challenge**-এ যাব।
