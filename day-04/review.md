Absolutely. This is the **overall Day 4 review file**—more comprehensive than the learning log, so you can use it later for revision/interview preparation.

# TypeScript Day 04 — Functions & Parameters

---

# 1. Functions in TypeScript

TypeScript allows us to add type information to JavaScript functions.

The main purpose is to define a clear **function contract**:

* What values can go into the function?
* Which parameters are required?
* Which parameters are optional?
* What type of value comes out?

Example:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

The function contract says:

```text
Input:
a → number
b → number

Output:
number
```

This makes the function easier to understand, maintain, and use safely.

---

# 2. Parameter Type Annotations

We can explicitly specify the type of each parameter.

```ts
function greet(name: string) {
  console.log(`Hello ${name}`);
}
```

Here:

```ts
name: string
```

means the function expects a string.

Valid:

```ts
greet("Ifty");
```

Invalid:

```ts
greet(25);
```

TypeScript can detect the incorrect argument during type checking.

---

# 3. Multiple Parameter Types

Each parameter can have a different type.

```ts
function createProfile(
  username: string,
  age: number,
  isStudent: boolean
): string {
  if (isStudent) {
    return `${username} is ${age} years old and is a student.`;
  }

  return `${username} is ${age} years old and is not a student.`;
}
```

The function accepts:

```text
username → string
age      → number
isStudent → boolean
```

and returns:

```text
string
```

---

# 4. Return Type Annotation

We can explicitly declare what a function must return.

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

The `: number` after the parameter list is the return type.

If the function promises to return a number but returns a string:

```ts
function add(a: number, b: number): number {
  return "hello";
}
```

TypeScript reports an error.

---

# 5. Return Type Inference

We don't always need to explicitly declare the return type.

TypeScript can often determine it from the return expression.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript understands that the return type is:

```ts
number
```

because:

```ts
a + b
```

produces a number when `a` and `b` are numbers.

### Important

Do not think:

> "The parameters are numbers, therefore TypeScript automatically makes the return type number."

More precisely:

> TypeScript uses the available type information to analyze the return expression and infer its type.

---

# 6. Optional Parameters

A parameter can be made optional using `?`.

```ts
function greet(name?: string) {
  console.log(name);
}
```

Now both are valid:

```ts
greet();
greet("Ifty");
```

The important concept is:

```ts
name?: string
```

can be thought of as:

```ts
name: string | undefined
```

Therefore, when the argument is omitted:

```ts
greet();
```

the parameter's value is:

```ts
undefined
```

---

# 7. Optional Does Not Mean `any`

This is an important distinction.

```ts
function greet(name?: string) {
}
```

does **not** mean:

```text
name can be anything
```

It means:

```text
name can be a string
OR
name can be undefined
```

Therefore:

```ts
greet("Ifty"); // ✅
greet();       // ✅
greet(25);     // ❌
```

---

# 8. Handling Optional Parameters

When a parameter may be `undefined`, the function may need to handle that possibility.

Example:

```ts
const greetUser = (name: string, title?: string) => {
  if (title) {
    return `Hello ${title} ${name}`;
  }

  return `Hello ${name}`;
};
```

Here:

```ts
title
```

might be:

```ts
string
```

or:

```ts
undefined
```

The conditional handles both cases.

Example:

```ts
greetUser("Ifty");
```

Output:

```text
Hello Ifty
```

And:

```ts
greetUser("Ifty", "Developer");
```

Output:

```text
Hello Developer Ifty
```

---

# 9. Default Parameters

A default parameter provides a fallback value when an argument is omitted.

```ts
function welcome(name: string = "Guest") {
  console.log(`Welcome ${name}`);
}
```

Calling:

```ts
welcome();
```

produces:

```text
Welcome Guest
```

Calling:

```ts
welcome("Ifty");
```

produces:

```text
Welcome Ifty
```

Default parameters are already a JavaScript feature, so TypeScript supports them naturally.

---

# 10. Optional vs Default Parameters

This distinction is very important.

### Optional parameter

```ts
function greet(name?: string) {
}
```

Conceptually:

```ts
name: string | undefined
```

If omitted:

```ts
name === undefined
```

### Default parameter

```ts
function greet(name: string = "Guest") {
}
```

If omitted:

```ts
name === "Guest"
```

### Mental model

```text
Optional parameter
→ "The value may not exist."

Default parameter
→ "If the value isn't provided, use this fallback."
```

---

# 11. Default Parameter Type Inference

We don't always need to explicitly type a default parameter.

```ts
const calculateDiscount = (
  price: number,
  discount = 0
): number => {
  return price - (price * discount / 100);
};
```

TypeScript can infer:

```ts
discount → number
```

because the default value is:

```ts
0
```

We could also write:

```ts
discount: number = 0
```

but the explicit type is unnecessary in this case.

---

# 12. Real-World Function Contract

Consider:

```ts
function calculatePrice(
  price: number,
  quantity: number
): number {
  return price * quantity;
}
```

A developer immediately understands:

```text
price    → number
quantity → number
return   → number
```

This is why function typing is valuable in larger projects.

The function signature becomes a clear contract between the function and the developers using it.

Benefits include:

* Better readability
* Better IDE support
* Better autocomplete
* Easier refactoring
* Improved maintainability
* Earlier error detection

---

# 13. Compile-Time vs Runtime

This was one of the most important concepts from Day 4.

Consider:

```ts
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(5);
```

The function requires two arguments.

Therefore TypeScript reports a type-checking error:

```text
Expected 2 arguments, but got 1.
```

This is a **TypeScript type-checking/compile-time issue**.

However, if equivalent JavaScript is actually executed:

```js
function multiply(a, b) {
  return a * b;
}

multiply(5);
```

then:

```text
b → undefined
```

and:

```text
5 * undefined
```

produces:

```text
NaN
```

### Important distinction

```text
TypeScript
→ detects the invalid function call

JavaScript runtime
→ may execute it and produce NaN
```

Do not automatically describe a TypeScript type error as a runtime error.

---

# 14. Optional Parameters and Arithmetic

Consider:

```ts
function calculateTax(
  price: number,
  rate?: number
): number {
  return price * rate;
}
```

The problem is:

```ts
rate?: number
```

means:

```ts
rate: number | undefined
```

Therefore `rate` might not be available for the arithmetic operation.

Possible solutions depend on the application's requirements.

### Solution 1 — Make it required

```ts
function calculateTax(
  price: number,
  rate: number
): number {
  return price * rate;
}
```

Use this when the function logically requires a tax rate.

### Solution 2 — Give it a default

```ts
function calculateTax(
  price: number,
  rate: number = 0
): number {
  return price * rate;
}
```

Use this when a sensible default exists.

### Solution 3 — Handle the missing value

```ts
function calculateTax(
  price: number,
  rate?: number
): number {
  if (rate !== undefined) {
    return price * rate;
  }

  return 0;
}
```

The correct solution depends on the business requirement.

---

# 15. Function Return Inference and Parameter Information

Consider:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript knows:

```text
a → number
b → number
```

Therefore it can analyze:

```ts
a + b
```

and infer:

```text
return → number
```

But consider:

```ts
function greet(name) {
  return `Hello ${name}`;
}
```

The parameter has no type information.

With strict TypeScript settings, an unannotated parameter can produce an implicit `any` error.

A better version is:

```ts
function greet(name: string) {
  return `Hello ${name}`;
}
```

Now TypeScript has enough information to safely analyze the function.

### Core principle

> TypeScript's ability to infer types depends on the type information available to it.

---

# 16. Arrow Functions with TypeScript

TypeScript works naturally with JavaScript arrow functions.

Example:

```ts
const calculateArea = (
  length: number,
  width: number
): number => {
  return length * width;
};
```

Usage:

```ts
console.log(calculateArea(10, 5));
```

Output:

```text
50
```

A concise version is also possible:

```ts
const calculateArea = (
  length: number,
  width: number
): number => length * width;
```

Both are valid.

---

# 17. Day 4 Practice Completed

### Problem 1 — Calculate Area

```ts
const calculateArea = (
  length: number,
  width: number
): number => {
  return length * width;
};
```

Result:

```text
10 × 5 = 50
```

---

### Problem 2 — Optional Parameter

```ts
const greetUser = (name: string, title?: string) => {
  if (title) {
    return `Hello ${title} ${name}`;
  }

  return `Hello ${name}`;
};
```

Successfully demonstrated optional parameter handling.

---

### Problem 3 — Default Parameter

```ts
const calculateDiscount = (
  price: number,
  discount = 0
): number => {
  return price - (price * discount / 100);
};
```

Successfully demonstrated:

* Default parameters
* Type inference
* Return type annotation
* Arithmetic with typed values

---

### Problem 4 — Real-world Function

```ts
const createProfile = (
  username: string,
  age: number,
  isStudent: boolean
): string => {
  if (isStudent) {
    return `${username} is ${age} years old and is a student.`;
  }

  return `${username} is ${age} years old and is not a student.`;
};
```

Successfully demonstrated multiple parameter types and conditional logic.

---

# 18. Common Mistakes from Day 4

### Mistake 1

Confusing a TypeScript type-checking error with a runtime error.

### Mistake 2

Thinking:

```ts
age?: number
```

means only `number`.

Correct mental model:

```ts
number | undefined
```

### Mistake 3

Thinking return type inference happens merely because parameter types are known.

More precisely, TypeScript analyzes the return expression using the type information available.

### Mistake 4

Confusing an optional parameter with a function that returns `undefined`.

An omitted argument may make a parameter `undefined`, but the function itself can still return a string, number, object, etc.

---

# 19. Interview Questions Reviewed

### Beginner

1. What is a function parameter type?
2. What is a return type?
3. What is return type inference?
4. What is an optional parameter?
5. What is a default parameter?

### Practical

6. Why might an optional parameter cause a type error during arithmetic?
7. How can you fix an optional numeric parameter?
8. What is the difference between compile-time and runtime errors?
9. Why are function signatures useful in large applications?

### Deeper

10. Why can TypeScript infer the return type of some functions?
11. Why does TypeScript complain about some unannotated parameters?
12. How should you decide between a required, optional, and default parameter?

---

# 20. Interview Performance

**Score: 6.5 / 7**

Approximate readiness for today's topic:

**9.3/10**

Strong areas:

* Parameter typing
* Return types
* Optional parameters
* Default parameters
* Function contracts
* Practical function design

Needs continued revision:

* Compile-time vs runtime distinction
* `undefined` handling
* Precise explanation of type inference

---

# 21. Day 4 Final Takeaways

Remember these core rules:

```text
parameter: type
→ parameter must receive that type
```

```text
parameter?: type
→ parameter may be omitted
→ conceptually type | undefined
```

```text
parameter: type = defaultValue
→ parameter has a fallback value
```

```text
function fn(...): returnType
→ explicit return type
```

```text
function fn(...) {
    return expression;
}
→ TypeScript can often infer the return type
```

And the most important mental model:

```text
Function
│
├── Parameters
│     └── What can come IN?
│
├── Optional/default rules
│     └── What happens if something is missing?
│
└── Return value
      └── What comes OUT?
```

---

# Day 4 Status

**Phase:** Phase 1 — TypeScript Fundamentals
**Day:** 4
**Topic:** Functions & Parameters
**Practice:** Completed
**Quiz:** Completed
**Interview:** Completed
**Confidence:** 9/10
**Overall understanding:** Strong

### Next Topic

**Day 5 — Union Types**

Focus:

* What union types are
* Why they exist
* Syntax using `|`
* Multiple possible types
* Union types with variables
* Union types with function parameters
* Practical API/data examples
* React relevance
* Type narrowing introduction
