# TypeScript Learning Journey — Day 3

According to your roadmap, we're still in **Phase 1: TypeScript Fundamentals**. 

### Day 3 Topic: Arrays, Tuples & Object Types

These are extremely important because almost every React and MERN application deals with:

* Lists of users
* Products
* Orders
* API responses
* Configuration objects

---

# Part 1 — Arrays in TypeScript

## JavaScript

```js
const numbers = [1, 2, 3];
```

JavaScript doesn't care if you later do:

```js
numbers.push("hello");
```

Potential bugs can happen.

---

## TypeScript

```ts
const numbers: number[] = [1, 2, 3];
```

Now:

```ts
numbers.push(4); // ✅
```

But:

```ts
numbers.push("hello"); // ❌ Error
```

TypeScript protects your data.

---

## Another Example

```ts
const names: string[] = ["Ifty", "Hasin", "Sakib"];
```

---

## Array of Booleans

```ts
const statuses: boolean[] = [true, false, true];
```

---

# Why It Matters in React

Imagine:

```ts
const users: string[] = [
  "Alice",
  "Bob",
  "Charlie"
];
```

Rendering:

```tsx
users.map(user => (
  <p>{user}</p>
));
```

TypeScript knows every item is a string.

---

# Part 2 — Array Type Inference

TypeScript often figures out types automatically.

```ts
const numbers = [1, 2, 3];
```

TypeScript infers:

```ts
number[]
```

You don't always need to write types manually.

---

# Part 3 — Tuples

A tuple is a fixed-length array.

Normal array:

```ts
const data = [1, "Ifty"];
```

TypeScript sees:

```ts
(string | number)[]
```

Meaning any position can contain either.

---

## Tuple Example

```ts
const user: [number, string] = [1, "Ifty"];
```

Meaning:

```ts
[
  id,
  name
]
```

Valid:

```ts
const user: [number, string] = [1, "Ifty"];
```

Invalid:

```ts
const user: [number, string] = ["Ifty", 1];
```

❌ Wrong order.

---

# Real-World Example

API response:

```ts
const response: [number, string] = [
  200,
  "Success"
];
```

Position matters.

---

# Part 4 — Object Types

Objects are everywhere.

Example:

```ts
const user = {
  name: "Ifty",
  age: 25
};
```

TypeScript version:

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Ifty",
  age: 25
};
```

---

## Error Example

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Ifty"
};
```

❌ age missing.

---

## Another Error

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Ifty",
  age: "25"
};
```

❌ string instead of number.

---

# React Connection

A user object:

```ts
const user = {
  id: 1,
  name: "Ifty",
  email: "ifty@gmail.com"
};
```

Later you'll use object types for:

* React props
* API responses
* State management
* Database models

Almost every React app depends heavily on object typing.

---

# Common Mistakes

### Mistake 1

```ts
const names = [];
```

TypeScript may infer too broadly.

Prefer:

```ts
const names: string[] = [];
```

---

### Mistake 2

Wrong tuple order:

```ts
const user: [number, string] = [
  "Ifty",
  1
];
```

❌

---

### Mistake 3

Wrong object property types.

```ts
age: "25"
```

Instead:

```ts
age: 25
```

---

# Concept Verification

Answer without looking above:

### Q1

Why is this invalid?

```ts
const numbers: number[] = [1, 2, 3];
numbers.push("4");
```

---

### Q2

What is the difference between:

```ts
const data = [1, "Ifty"];
```

and

```ts
const data: [number, string] = [1, "Ifty"];
```

---

### Q3

Will this work?

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Ifty",
  age: "25"
};
```

Why?

---

# Mini Quiz (Don't check answers yet)

### MCQ 1

Which type represents an array of strings?

A)

```ts
string
```

B)

```ts
string[]
```

C)

```ts
[string]
```

D)

```ts
array<string>
```

---

### MCQ 2

Which is a tuple?

A)

```ts
number[]
```

B)

```ts
[number, string]
```

C)

```ts
string[]
```

D)

```ts
boolean[]
```

---

### Output Prediction

```ts
const scores: number[] = [10, 20];

scores.push(30);

console.log(scores);
```

Output?

---

# Interview Questions

### Beginner

1. What is the difference between arrays and tuples?
2. Why are object types useful?
3. What is type inference?

### Intermediate

4. When would you choose a tuple instead of an object?
5. How does TypeScript help when working with API data?

---

# Practice Problems

### Problem 1

Create a string array containing 5 programming languages.

---

### Problem 2

Create a tuple representing:

```text
[id, name]
```

Use:

```text
101
"Ifty"
```

---

### Problem 3

Create an object representing a student:

```text
name
age
department
```

with proper TypeScript types.

---

### Problem 4

Create an array of numbers and add three values using `push()`.

---

Reply with your answers to:

* Concept Verification (Q1–Q3)
* Mini Quiz
* Practice Problems (1–4)

Then I'll review your code like a real code review and we'll continue to Day 4.
