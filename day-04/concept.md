# 🚀 TypeScript Learning Journey — Day 4

You completed **Day 0–3**, and your current next focus is exactly **Functions & Parameters**. Your Day 3 log specifically lists parameter types, return types, optional parameters, and default parameters as today's focus. 

Your roadmap places these inside **Phase 1 — TypeScript Fundamentals**, so we're still building the core type-system foundation before moving into interfaces, advanced types, or generics. 

---

# Day 4 — Functions & Parameters

## 1. Why TypeScript cares about functions

In JavaScript, we can write:

```js
function add(a, b) {
  return a + b;
}
```

The problem is that nothing tells us what `a` and `b` should be.

Someone could accidentally do:

```js
add(10, "20");
```

JavaScript won't necessarily stop you.

TypeScript lets us define the **contract** of a function:

> "This function expects two numbers and returns a number."

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

Now:

```ts
add(10, 20);      // ✅
add(10, "20");    // ❌
```

That's one of the biggest practical benefits of TypeScript.

---

# 2. Parameter Types

The syntax is:

```ts
function functionName(parameter: type) {
}
```

Example:

```ts
function greet(name: string) {
  console.log(`Hello ${name}`);
}
```

Here:

```ts
name: string
```

means the parameter must receive a string.

```ts
greet("Ifty"); // ✅
greet(25);    // ❌
```

Multiple parameters:

```ts
function calculateTotal(price: number, quantity: number) {
  return price * quantity;
}
```

Both parameters have their own types.

---

# 3. Return Types

This is particularly important.

We can explicitly tell TypeScript what a function **must return**:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

The second `number` is the **return type**.

Think of it as:

```text
parameter → what goes IN
return type → what comes OUT
```

### Example

```ts
function getUsername(): string {
  return "Ifty";
}
```

This is valid.

But:

```ts
function getUsername(): string {
  return 25;
}
```

❌ Error.

The function promised to return a `string`, but returned a `number`.

---

# 4. Do we always need to write return types?

**No.**

TypeScript can often infer them.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

TypeScript understands:

```ts
// return type → number
```

This is called **return type inference**.

So both can work:

```ts
function add(a: number, b: number): number {
  return a + b;
}
```

and:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

### Practical rule

For simple functions, inference is often perfectly fine.

For important/public APIs or complex functions, explicitly declaring the return type can make the intended contract clearer.

---

# 5. Optional Parameters

Sometimes a function parameter isn't required.

JavaScript:

```js
function greet(name, age) {
}
```

TypeScript:

```ts
function greet(name: string, age?: number) {
  console.log(name, age);
}
```

The `?` means:

> This parameter is optional.

So both are valid:

```ts
greet("Ifty");
greet("Ifty", 25);
```

But:

```ts
greet("Ifty", "25");
```

❌ Error.

---

## Important concept

An optional parameter effectively means the value may be absent.

Conceptually:

```ts
age?: number
```

is related to:

```ts
age: number | undefined
```

So you have to be aware that `age` might not exist.

Example:

```ts
function greet(name: string, age?: number) {
  if (age !== undefined) {
    console.log(`${name} is ${age} years old`);
  }
}
```

This is a very important idea that will become useful later when we study **type narrowing**.

---

# 6. Default Parameters

JavaScript already supports default parameters:

```ts
function greet(name: string = "Guest") {
  console.log(`Hello ${name}`);
}
```

Now:

```ts
greet("Ifty");
```

Output:

```text
Hello Ifty
```

And:

```ts
greet();
```

Output:

```text
Hello Guest
```

The parameter has a default value.

---

# 7. Optional vs Default Parameter

This distinction is important.

### Optional

```ts
function greet(name?: string) {
}
```

The argument can be omitted, and the value becomes `undefined`.

### Default

```ts
function greet(name: string = "Guest") {
}
```

The argument can be omitted, but the function uses `"Guest"`.

So:

```text
Optional → maybe undefined
Default  → fallback value
```

---

# 8. Parameter Order Matters

Here's something beginners often get wrong.

This is valid:

```ts
function greet(name: string, age?: number) {
}
```

But this is problematic:

```ts
function greet(age?: number, name: string) {
}
```

A required parameter generally cannot come after an optional parameter.

Instead:

```ts
function greet(age: number, name?: string) {
}
```

works.

---

# 9. Real-World Example

Imagine a user registration function:

```ts
function createUser(
  username: string,
  age: number,
  isAdmin: boolean
): string {
  return `${username} - ${age} - ${isAdmin}`;
}
```

Now TypeScript guarantees the function's contract:

```ts
createUser("Ifty", 25, false);
```

But:

```ts
createUser("Ifty", "25", false);
```

❌

And:

```ts
createUser("Ifty", 25, "false");
```

❌

This becomes extremely valuable when applications have hundreds of functions.

---

# ⚛️ React Connection

Suppose later you create a React component:

```tsx
function UserCard(name: string, age: number) {
  // ...
}
```

The same function typing principles are used when typing React props:

```tsx
interface UserCardProps {
  name: string;
  age: number;
}
```

Then:

```tsx
function UserCard({ name, age }: UserCardProps) {
  return <h2>{name} - {age}</h2>;
}
```

So today's function concepts are directly preparing you for **React + TypeScript**.

Your project goal is ultimately JavaScript → TypeScript → React + TypeScript → Full-Stack TypeScript, so we're deliberately building this foundation before moving upward. 

---

# 🧠 Concept Verification — Your Turn

Don't look for the answers yet.

### Q1

What is the difference between:

```ts
function add(a: number, b: number): number
```

and:

```ts
function add(a: number, b: number)
```

---

### Q2

What does this mean?

```ts
function greet(name?: string)
```

Why might we need to check for `undefined` inside the function?

---

### Q3

What's the difference between:

```ts
function greet(name?: string)
```

and:

```ts
function greet(name: string = "Guest")
```

---

### Q4

Predict whether each is valid:

```ts
function multiply(a: number, b: number): number {
  return a * b;
}

multiply(5, 10);
```

```ts
multiply(5, "10");
```

```ts
multiply(5);
```

---

### Q5 — Think like a developer

Why is this potentially useful?

```ts
function calculatePrice(
  price: number,
  quantity: number
): number {
  return price * quantity;
}
```

Don't just say **"because TypeScript catches errors."**

Think about what this function's **contract** guarantees to another developer using it.

---

**Answer Q1–Q5 in your own words first.** Then I'll review your reasoning before we move to the Day 4 mini-quiz.
