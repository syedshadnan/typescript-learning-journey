# 🚀 TypeScript Day 5 — Optional & Default Parameters

We're continuing from **Day 4: Functions & Parameters**. Your roadmap places **optional and default parameters** under TypeScript fundamentals. 

Today we'll go a little deeper into functions rather than just memorizing syntax.

---

## 1. First: What is a parameter?

You already know this:

```ts
function greet(name: string): string {
  return `Hello, ${name}`;
}
```

Here:

* `name` → parameter
* `string` → parameter type
* `string` after `)` → return type

Calling:

```ts
greet("Ifty");
```

works.

But what happens if the function doesn't always need a name?

```ts
greet();
```

TypeScript will complain because `name` is **required**.

That's where **optional parameters** come in.

---

# 2. Optional Parameters

Syntax:

```ts
parameter?: type
```

Example:

```ts
function greet(name?: string): string {
  return `Hello, ${name}`;
}
```

Now both are allowed:

```ts
greet("Ifty");
greet();
```

The important idea:

> `?` means the argument may or may not be provided.

---

## But there's a catch 👀

Look at this:

```ts
function greet(name?: string): string {
  return `Hello, ${name}`;
}
```

If we call:

```ts
greet();
```

What is `name`?

It is:

```ts
undefined
```

So the result would be:

```text
Hello, undefined
```

That's probably not what we want.

We can handle it:

```ts
function greet(name?: string): string {
  if (name) {
    return `Hello, ${name}`;
  }

  return "Hello, Guest";
}
```

Now:

```ts
greet("Ifty"); // Hello, Ifty
greet();       // Hello, Guest
```

### Real-world example

Imagine an API function:

```ts
function createUser(name: string, age?: number) {
  // ...
}
```

Maybe age isn't mandatory when creating a user.

---

# 3. Default Parameters

Sometimes we don't just want a parameter to be optional.

We want to provide a **default value**.

Syntax:

```ts
parameter: type = defaultValue
```

Example:

```ts
function greet(name: string = "Guest"): string {
  return `Hello, ${name}`;
}
```

Now:

```ts
greet("Ifty");
```

returns:

```text
Hello, Ifty
```

while:

```ts
greet();
```

returns:

```text
Hello, Guest
```

The difference is important.

### Optional parameter

```ts
function greet(name?: string) {}
```

If omitted:

```ts
name === undefined
```

### Default parameter

```ts
function greet(name: string = "Guest") {}
```

If omitted:

```ts
name === "Guest"
```

---

# 4. Optional vs Default — Think About the Intent

Don't choose `?` simply because you can.

Ask:

> "What should happen if the caller doesn't provide this value?"

### If there is no value:

```ts
function printAge(age?: number) {}
```

Use optional.

### If there should be a fallback:

```ts
function printAge(age: number = 18) {}
```

Use default.

That's the real distinction.

---

# 5. Multiple Parameters

Here's an important rule.

A required parameter generally shouldn't come **after** an optional parameter.

❌ Don't do:

```ts
function user(name?: string, age: number) {}
```

Because how would this call work?

```ts
user(25);
```

Should `25` be the name or age?

Instead:

```ts
function user(age: number, name?: string) {}
```

Now:

```ts
user(25);
user(25, "Ifty");
```

makes sense.

---

# 6. Default Parameters and Required Parameters

Consider:

```ts
function calculatePrice(
  price: number,
  tax: number = 0.15
): number {
  return price + price * tax;
}
```

Now:

```ts
calculatePrice(100);
```

uses:

```ts
tax = 0.15
```

But:

```ts
calculatePrice(100, 0.20);
```

uses:

```ts
tax = 0.20
```

This is extremely common in real applications.

---

# 7. React Connection ⚛️

This matters in React too.

Imagine a component configuration:

```ts
type ButtonConfig = {
  text: string;
  size?: "small" | "medium" | "large";
};
```

You might want:

```ts
const button: ButtonConfig = {
  text: "Submit"
};
```

and treat missing `size` as `"medium"` inside your component.

The idea is:

**TypeScript tells us what can be omitted; our code decides what to do when it's omitted.**

That's an important distinction.

---

# 🧠 Concept Verification

Don't look anything up. Answer these in your own words.

### Q1

What's the difference between:

```ts
name?: string
```

and:

```ts
name: string = "Guest"
```

---

### Q2

What will `name` contain when this function is called without an argument?

```ts
function greet(name?: string) {
  console.log(name);
}

greet();
```

---

### Q3

Is this valid TypeScript?

```ts
function test(name?: string, age: number) {}
```

Why or why not?

---

### Q4

What will this output?

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Ifty"));
```

---

### Q5 — Think like a developer

You're building a function:

```ts
function searchProducts(
  query: string,
  limit: number = 10
) {}
```

Why might a **default parameter** be better than making `limit` optional?

---

**Your turn. Answer Q1–Q5 first.**
I'll review your reasoning before we move to the quiz.
