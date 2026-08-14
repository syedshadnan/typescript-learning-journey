# Day 2 — Primitive Types & Type Inference

Yesterday you learned **why TypeScript exists**.

Today we'll learn the first real building blocks of TypeScript:

1. Primitive Types
2. Type Inference
3. Explicit vs Implicit Types
4. Best Practices

---

# Step 1 — Concept Lesson

## What Are Primitive Types?

Primitive types are the most basic data types in TypeScript.

The main ones you'll use daily are:

```ts
number
string
boolean
null
undefined
```

---

# 1. number

Used for all numeric values.

```ts
let age: number = 25;

let price: number = 99.99;

let score: number = -10;
```

TypeScript doesn't separate:

```text
int
float
double
```

Like some languages do.

Everything is:

```ts
number
```

---

# 2. string

Used for text values.

```ts
let firstName: string = "Ifty";

let city: string = "Noakhali";
```

---

## Template Strings

```ts
let name: string = "Ifty";

let message: string = `Hello ${name}`;
```

Very common in React and Node.js.

---

# 3. boolean

Only:

```ts
true
false
```

Example:

```ts
let isLoggedIn: boolean = true;

let hasPermission: boolean = false;
```

---

# 4. null

Represents:

```text
Intentional absence of a value
```

Example:

```ts
let selectedUser: null = null;
```

Real-world example:

```ts
let currentUser = null;
```

No user logged in yet.

---

# 5. undefined

Represents:

```text
A value that hasn't been assigned
```

Example:

```ts
let username: undefined = undefined;
```

---

## Difference Between null and undefined

### null

You intentionally set it.

```ts
let currentUser = null;
```

Meaning:

```text
No user exists right now.
```

---

### undefined

The value hasn't been assigned.

```ts
let age;
```

Current value:

```ts
undefined
```

Meaning:

```text
Nothing has been assigned yet.
```

---

# Type Inference

This is one of TypeScript's most powerful features.

You saw it yesterday.

Example:

```ts
let age = 25;
```

You didn't write:

```ts
let age: number = 25;
```

Yet TypeScript automatically understands:

```ts
age → number
```

This automatic type detection is called:

# Type Inference

---

## Example 1

```ts
let name = "Ifty";
```

TypeScript infers:

```ts
let name: string;
```

---

## Example 2

```ts
let isAdmin = true;
```

TypeScript infers:

```ts
let isAdmin: boolean;
```

---

## Example 3

```ts
let score = 100;
```

TypeScript infers:

```ts
let score: number;
```

---

# Explicit vs Implicit Types

## Explicit Type

You write the type.

```ts
let age: number = 25;
```

---

## Implicit Type

TypeScript figures it out.

```ts
let age = 25;
```

---

Both are valid.

---

# Which One Should We Use?

### Good

```ts
let age = 25;
```

TypeScript already knows.

No need to repeat yourself.

---

### Also Good

```ts
let age: number = 25;
```

But sometimes unnecessary.

---

### Very Useful

When the value is unclear:

```ts
let userName: string;
```

Now TypeScript knows what will be stored later.

---

# Real React Example

```tsx
const title = "Dashboard";
```

TypeScript automatically infers:

```ts
string
```

React developers use inference constantly.

You don't need to annotate every variable.

---

# Common Beginner Mistakes

### Mistake 1

Thinking:

```ts
let age;
```

means number.

❌ Wrong

TypeScript doesn't know.

---

### Mistake 2

Writing types everywhere.

```ts
let name: string = "Ifty";
```

Not wrong.

Just often unnecessary.

---

### Mistake 3

Confusing:

```ts
null
```

with

```ts
undefined
```

They mean different things.

---

# Step 2 — Concept Verification

Answer in your own words.

### Q1

What is a primitive type?

---

### Q2

What is the difference between:

```ts
null
```

and

```ts
undefined
```

?

---

### Q3

What is Type Inference?

---

### Q4

What is the difference between:

```ts
let age: number = 25;
```

and

```ts
let age = 25;
```

?

---

### Q5

Which primitive type would you use for:

* User age
* User name
* Login status
* No selected user yet

---

# Step 3 — Mini Quiz (Don't Answer Yet)

### MCQ 1

Which primitive type stores text?

A. number

B. string

C. boolean

D. null

---

### MCQ 2

Which value represents an intentionally empty value?

A. undefined

B. null

C. false

D. 0

---

### Output Prediction

```ts
let age = 25;

age = 30;
```

Error or No Error?

---

### Error Detection

```ts
let city = "Dhaka";

city = 100;
```

Error or No Error?

Why?

---

# Step 4 — Beginner Interview Questions

1. What are primitive types in TypeScript?
2. What is Type Inference?
3. What is the difference between explicit and implicit typing?
4. What is the difference between null and undefined?
5. Why is Type Inference useful?

---

Step 2 Review
Q1. What is a primitive type?

Your answer: ✅

Very good.

For interview purposes:

Primitive types are the basic built-in data types that represent single values. Common primitive types in TypeScript are string, number, boolean, null, and undefined.

Q2. null vs undefined

Your answer:

null means the value is undefined intentionally

⚠️ Small correction.

Better:

null means the value is intentionally empty.

undefined means a value has not been assigned yet.

Example:

let currentUser = null;      // intentionally empty

let age;                     // undefined
Q3. What is Type Inference?

Your answer: ✅

Good.

Interview version:

Type Inference is TypeScript's ability to automatically determine a variable's type based on its initial value.

Q4. Explicit vs Implicit Types

Your answer: ✅

Correct.

Q5. Which type would you use?
User age

number ✅

User name

string ✅

Login status

boolean ✅

No selected user yet

You answered:

undefined

⚠️ This is the only one I'd challenge.

Think about a real application:

let selectedUser = null;

This usually means:

"There is currently no selected user."

So the better answer is:

null

because the empty state is intentional.

Mini Quiz Review
MCQ 1

string ✅

MCQ 2

null ✅

Output Prediction
let age = 25;

age = 30;

No Error ✅

Reason correct.

Error Detection
let city = "Dhaka";

city = 100;

Error ✅

Reason correct.

TypeScript inferred:

let city: string = "Dhaka";
Interview Questions Review
1. What are primitive types?

✅ Correct

2. What is Type Inference?

✅ Correct

3. Explicit vs Implicit Typing

✅ Correct

Tiny typo:

You wrote:

in explicit typing typescript automatically detect

Should be:

in implicit typing TypeScript automatically detects

4. null vs undefined

✅ Correct

5. Why is Type Inference useful?

✅ Good answer.

One improvement:

Type Inference reduces unnecessary type annotations while still maintaining type safety.

Score

Concept Understanding: 9/10

Interview Readiness: 8.5/10

The only concept I'd like you to remember better is:

null      = intentionally empty

undefined = not assigned yet

This distinction becomes important later when working with APIs, React state, and databases.