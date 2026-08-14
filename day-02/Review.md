# TypeScript Day 2 — Complete Review Notes

---

# Concept Verification Questions & Answers

## Q1. What is a primitive type?

Primitive types are the basic built-in data types that represent single values.

Common primitive types in TypeScript:

- string
- number
- boolean
- null
- undefined

These are the most fundamental data types used in TypeScript.

---

## Q2. What is the difference between null and undefined?

### null

Represents an intentionally empty value.

```ts
let currentUser = null;
```

Meaning:

> We intentionally know there is no user right now.

---

### undefined

Represents a value that has not been assigned yet.

```ts
let age;
```

Meaning:

> No value has been assigned yet.

---

### Summary

```text
null      = intentionally empty

undefined = not assigned yet
```

---

## Q3. What is Type Inference?

Type Inference is TypeScript's ability to automatically determine a variable's type based on its initial value.

Example:

```ts
let age = 25;
```

TypeScript automatically infers:

```ts
let age: number;
```

No explicit type annotation is needed.

---

## Q4. What is the difference between:

```ts
let age: number = 25;
```

and

```ts
let age = 25;
```

?

### Explicit Typing

```ts
let age: number = 25;
```

The type is written manually.

---

### Implicit Typing

```ts
let age = 25;
```

TypeScript automatically determines the type.

---

### Summary

Both produce the same result.

The difference is:

- Explicit typing → Developer writes the type.
- Implicit typing → TypeScript infers the type.

---

## Q5. Which primitive type would you use for:

### User age

```ts
number
```

---

### User name

```ts
string
```

---

### Login status

```ts
boolean
```

---

### No selected user yet

```ts
null
```

Because the empty state is intentional.

---

# Mini Quiz Answers

## MCQ 1

Which primitive type stores text?

A. number

B. string ✅

C. boolean

D. null

---

## MCQ 2

Which value represents an intentionally empty value?

A. undefined

B. null ✅

C. false

D. 0

---

## Output Prediction

```ts
let age = 25;

age = 30;
```

Answer:

```text
No Error
```

Reason:

TypeScript infers:

```ts
let age: number;
```

Both values are numbers.

---

## Error Detection

```ts
let city = "Dhaka";

city = 100;
```

Answer:

```text
Error
```

Reason:

TypeScript infers:

```ts
let city: string;
```

A string variable cannot later store a number.

---

# Beginner Interview Questions & Answers

## 1. What are primitive types in TypeScript?

Primitive types are the basic built-in data types that represent single values.

Examples:

- string
- number
- boolean
- null
- undefined

---

## 2. What is Type Inference?

Type Inference is TypeScript's ability to automatically determine a variable's type from its initial value.

Example:

```ts
let name = "Ifty";
```

TypeScript automatically infers:

```ts
string
```

---

## 3. What is the difference between explicit and implicit typing?

### Explicit Typing

```ts
let age: number = 25;
```

Type is written manually.

---

### Implicit Typing

```ts
let age = 25;
```

TypeScript determines the type automatically.

---

## 4. What is the difference between null and undefined?

### null

Represents an intentionally empty value.

```ts
let user = null;
```

---

### undefined

Represents a value that has not been assigned yet.

```ts
let user;
```

---

## 5. Why is Type Inference useful?

Type Inference reduces unnecessary type annotations while maintaining type safety.

Benefits:

- Less code
- Better readability
- Faster development
- Maintains type safety

---

# Practice Problems & Answers

## Problem 1

```ts
let score = 100;

score = 500;
```

Answer:

```text
No Error
```

Reason:

TypeScript infers:

```ts
let score: number;
```

500 is also a number.

---

## Problem 2

```ts
let score = 100;

score = "500";
```

Answer:

```text
Error
```

Reason:

TypeScript inferred the variable as:

```ts
number
```

A string cannot be assigned to a number variable.

---

## Problem 3

What type does TypeScript infer?

```ts
let isPremium = true;
```

Answer:

```ts
boolean
```

---

## Problem 4

What type does TypeScript infer?

```ts
let username = "Ifty";
```

Answer:

```ts
string
```

---

## Problem 5

Explain the difference:

```ts
let user = null;
```

and

```ts
let user;
```

### First Example

```ts
let user = null;
```

Meaning:

> We intentionally know there is currently no user.

---

### Second Example

```ts
let user;
```

Meaning:

> No value has been assigned yet.

---

### Summary

```text
null      = intentionally empty

undefined = not assigned yet
```

---

# Common Interview Question

## Why is Type Inference considered one of TypeScript's most useful features?

Type Inference allows TypeScript to automatically determine types from values.

This reduces unnecessary type annotations, keeps code cleaner, improves readability, and still provides strong type safety.

---

# Day 2 Key Takeaways

- Primitive types are the foundation of TypeScript.
- TypeScript supports:
  - string
  - number
  - boolean
  - null
  - undefined
- Type Inference automatically determines types.
- Explicit typing is not always necessary.
- null and undefined are different concepts.
- Type safety helps prevent bugs before execution.
- Type Inference is heavily used in React and modern TypeScript projects.