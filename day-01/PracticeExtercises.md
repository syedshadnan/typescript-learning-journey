# Day 1 Practice Exercises

Try these without running the code.

### Problem 1

Will this produce an error?

```ts
let city: string = "Dhaka";

city = "Noakhali";
```

Why?

---

### Problem 2

Will this produce an error?

```ts
let age: number = 25;

age = "25";
```

Why?

---

### Problem 3

Will this produce an error?

```ts
let isStudent: boolean = true;

isStudent = false;
```

Why?

---

### Problem 4

Will this produce an error?

```ts
let price = 100;

price = 200;
```

Why?

(Hint: No type annotation is written.)

---

### Problem 5 ⭐

Explain in your own words:

```text
TypeScript = JavaScript + Type System
```

What does that sentence actually mean?

Answer these 5 practice questions. If you get at least 4 correct with proper reasoning, we'll mark **Day 1 Complete**, update the learning log, and start **Day 2 — Primitive Types & Type Inference**.


Very good. You got **4.5/5**.
Let's review carefully.
---

# Problem 1

```ts
let city: string = "Dhaka";

city = "Noakhali";
```

Your Answer: No Error ✅

Reasoning: Correct ✅

Because `"Noakhali"` is also a string.

---

# Problem 2

```ts
let age: number = 25;

age = "25";
```

Your Answer: Error ✅

Reasoning: Correct ✅

A variable typed as `number` cannot later hold a `string`.

---

# Problem 3

```ts
let isStudent: boolean = true;

isStudent = false;
```

Your Answer: No Error ✅

Reasoning: Correct ✅

Both values are boolean.

---

# Problem 4

```ts
let price = 100;

price = 200;
```

Your Answer:

> No. Because TypeScript allow any type.

❌ Reason is incorrect.

The answer is still **No Error**, but for a different reason.

Remember:

```ts
let price = 100;
```

TypeScript automatically infers:

```ts
let price: number = 100;
```

This feature is called **Type Inference**.

So:

```ts
price = 200;
```

works because `200` is also a number.

But this would fail:

```ts
price = "hello";
```

because TypeScript already inferred `price` as a number.

This is actually tomorrow's topic. 😄

---

# Problem 5

Your Answer:

> TypeScript is a variant of JavaScript with the facility of static typing.

✅ Good answer.

Even better:

> TypeScript contains all JavaScript features and adds a type system that helps detect errors before code execution.

---

# Day 1 Assessment

### Concepts Learned

✅ What TypeScript is

✅ Why TypeScript exists

✅ Static vs Dynamic Typing

✅ TypeScript Compilation Process

✅ Benefits of TypeScript

✅ React Relevance

✅ Basic Type Safety

---

### Strengths

* Quickly understood the purpose of TypeScript.
* Correctly identified type mismatch errors.
* Understood compilation from TS → JS.
* Good foundational understanding.

### Weak Area

* Type Inference (you assumed untyped variables can hold any type).

We'll fix that tomorrow.

---

# Day 1 Status

✅ Day 1 Completed

Current Progress:

```text
Day 0 — Setup ✅
Day 1 — What TypeScript Is & Why It Exists ✅
Day 2 — Primitive Types & Type Inference ⏳
```

### End-of-Day Interview Question

If an interviewer asks:

> "Why should a company use TypeScript instead of plain JavaScript?"

Try answering in **3–4 sentences**. This is a very common beginner interview question.

Answer that question, and then we'll officially close Day 1.

>> Because TypeScript helps to write clean, maintainable code. It helps developer write static code. >>
