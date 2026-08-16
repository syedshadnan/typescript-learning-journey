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
Ans: Optional parameter can be omitted and default parameter assign a fallback value when noting passed in the argument.

Conceptually this means name?:string means name: string | undefined. Developer has to deal with this situation.
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
Ans: undefined
Because conceptually name?:string means name: string | undefined
---

### Q3

Is this valid TypeScript?

```ts
function test(name?: string, age: number) {}
```

Why or why not?

---
Ans: No. Because a required parameter should come before the optional parameter.
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
Ans:
console.log(greet()); ==> Hello Guest
console.log(greet("Ifty")) ==> Hello Ifty
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
Ans: A default parameter automatically assign a fallback a default value when no argument is passed. this makes the code cleaner, prevents undefined, avoids manual type checks inside the function body, and ensure predictable behaviour without requiring extra fallback logic every time the function is called.
---


Excellent. **5/5 conceptually correct.** 🔥

Your answers show you understand the *reasoning*, not just the syntax. This is exactly what we're looking for.

### Review

**Q1 — ✅ Correct**

Your point that:

> `name?: string` is conceptually `string | undefined`

is important. The key difference is that an optional parameter may produce `undefined`, whereas a default parameter gives the function a fallback value when the argument is omitted.

**Q2 — ✅ Correct**

```ts
greet(); // undefined
```

Exactly.

**Q3 — ✅ Correct**

Your reasoning is right:

```ts
function test(name?: string, age: number) {}
```

❌ Invalid because a required parameter comes after an optional parameter.

A cleaner design would be:

```ts
function test(age: number, name?: string) {}
```

**Q4 — ✅ Correct**

```text
Hello Guest
Hello Ifty
```

**Q5 — ✅ Strong answer**

You correctly identified the main practical advantage: predictable behavior without forcing the function body to manually handle `undefined`.

One small refinement: a default parameter doesn't literally mean `limit` can never be `undefined` in every possible call scenario; it means **when the argument is omitted (or explicitly `undefined`)**, the default is used.

---
