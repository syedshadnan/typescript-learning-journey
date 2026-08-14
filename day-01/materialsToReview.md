# TypeScript Day 1 — Complete Review Notes

---

# Concept Verification Questions & Answers

## Q1. Why was TypeScript created?

TypeScript was created to add static type checking to JavaScript so developers can catch errors during development instead of finding them at runtime.

It also improves:

- Code quality
- Autocomplete
- Refactoring
- Maintainability
- Scalability

---

## Q2. What problem does TypeScript solve that JavaScript doesn't?

TypeScript helps detect type-related errors before the code runs.

Example:

```ts
function calculateTax(price: number) {
  return price * 0.15;
}

calculateTax("100");
```

TypeScript immediately shows an error because a string is passed instead of a number.

This helps prevent bugs in large applications.

---

## Q3. What is the difference between static typing and dynamic typing?

### Dynamic Typing (JavaScript)

```js
let value = 10;

value = "hello";
value = true;
```

JavaScript allows changing the type of a variable during execution.

### Static Typing (TypeScript)

```ts
let value: number = 10;

value = "hello";
```

TypeScript shows an error before execution.

### Summary

Static typing checks types before the code runs.

Dynamic typing checks types while the code runs.

---

## Q4. Can browsers run TypeScript directly?

No.

Browsers can only run JavaScript.

TypeScript must first be compiled into JavaScript using the TypeScript compiler (`tsc`).

---

## Q5. What happens to type annotations after compilation?

Type annotations are removed during compilation.

Example:

### TypeScript

```ts
let username: string = "Ifty";
```

### Compiled JavaScript

```js
let username = "Ifty";
```

The browser never sees TypeScript types.

---

# Mini Quiz Answers

## MCQ 1

TypeScript is:

A. A database

B. A framework

C. JavaScript with a type system ✅

D. A browser

---

## MCQ 2

Which language actually runs in browsers?

A. TypeScript

B. JavaScript ✅

C. Java

D. C#

---

## Output Prediction

```ts
let age: number = 25;

age = 30;
```

Answer: No Error ✅

Reason:

Both values are numbers.

---

## Error Detection

```ts
let name: string = "Ifty";

name = 100;
```

Answer: Error ✅

Reason:

A string variable cannot be assigned a number value.

---

# Beginner Interview Questions & Answers

## 1. What is TypeScript?

TypeScript is a programming language created by Microsoft that adds a type system to JavaScript to help developers catch errors before code execution.

---

## 2. Why do developers use TypeScript?

Developers use TypeScript to:

- Catch bugs early
- Improve code quality
- Get better IDE support
- Make code easier to maintain
- Build scalable applications

---

## 3. What is static typing?

Static typing means types are checked before the code runs.

This helps detect errors during development.

---

## 4. How does TypeScript differ from JavaScript?

JavaScript is dynamically typed.

TypeScript adds static typing on top of JavaScript and helps catch errors before execution.

---

## 5. What is the TypeScript compiler?

The TypeScript compiler (`tsc`) converts TypeScript code into JavaScript code.

It also performs type checking before generating JavaScript.

---

## 6. Does TypeScript run in the browser?

No.

TypeScript must be compiled into JavaScript first.

Only JavaScript runs in browsers.

---

# Practice Problems Review

## Problem 1

```ts
let city: string = "Dhaka";

city = "Noakhali";
```

Answer: No Error ✅

Reason:

Both values are strings.

---

## Problem 2

```ts
let age: number = 25;

age = "25";
```

Answer: Error ✅

Reason:

A number variable cannot store a string value.

---

## Problem 3

```ts
let isStudent: boolean = true;

isStudent = false;
```

Answer: No Error ✅

Reason:

Both values are booleans.

---

## Problem 4

```ts
let price = 100;

price = 200;
```

Answer: No Error ✅

Reason:

TypeScript automatically infers that `price` is a number.

```ts
let price = 100;
```

is treated like:

```ts
let price: number = 100;
```

Therefore:

```ts
price = 200;
```

is valid.

But:

```ts
price = "hello";
```

would produce an error.

This feature is called **Type Inference**.

---

## Problem 5

Explain:

```text
TypeScript = JavaScript + Type System
```

Answer:

TypeScript contains all JavaScript features and adds a type system that helps detect errors before code execution.

It helps developers write more reliable, maintainable, and scalable applications.

---

# Common Interview Question

## Why should a company use TypeScript instead of plain JavaScript?

TypeScript contains all JavaScript features and adds a type system that helps detect errors before code execution.

It helps developers write more reliable, maintainable, and scalable code.

In large applications, TypeScript improves code quality, developer productivity, and long-term maintainability.

---

# Day 1 Key Takeaways

- TypeScript is JavaScript with a type system.
- TypeScript helps catch errors before runtime.
- Browsers cannot run TypeScript directly.
- TypeScript is compiled into JavaScript.
- Type annotations disappear after compilation.
- Static typing improves maintainability and scalability.
- TypeScript is heavily used in React, Node.js, and large-scale applications.
- Type Inference allows TypeScript to automatically determine types.