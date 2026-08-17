# 🧪 Day 6 — Mini Quiz

Don't look up the answers. 😈

### Q1 — MCQ

What does this mean?

```ts
let value: string | number;
```

**A.** `value` must contain both a string and a number
**B.** `value` can contain either a string or a number
**C.** `value` can contain any JavaScript type
**D.** `value` must always be a string

---
Ans: B. value can contain either a string or a number
---

### Q2 — Error Detection

Which assignments are valid?

```ts
let id: number | string;

id = 101;
id = "user_101";
id = true;
id = null;
```

Identify **every valid and invalid assignment** and explain why.

---
Ans: 
id = 101; ==> valid. Because the value of id contracts number or string.
id = "user_101"; ==> valid. Because the id contracts string in union types.
id = true; ==> false. Because the value contracts with number ans string not boolean.
id = null; ==> null is not in the contract of the type of id.
---

### Q3 — Output Prediction

What will this print?

```ts
function describe(value: string | number) {
  if (typeof value === "string") {
    return `String: ${value}`;
  }

  return `Number: ${value}`;
}

console.log(describe("Ifty"));
console.log(describe(25));
```
---
Ans: It is a basic example of type narrowing. don't know deep about type narrowing.
String: Ifty
Number: 25
---

### Q4 — Type Analysis 🔥

Look at this:

```ts
function process(value: string | number) {
  if (typeof value === "number") {
    return value * 2;
  }

  return value.toUpperCase();
}
```

Inside the `if` block, what type does TypeScript know `value` is?

What type does TypeScript know it is in the `return` statement after the `if`?

Explain **how TypeScript knows**.

---
Ans: Inside the if block typescript know the value is number. if it is number then it will immediately return it after multiply with 2. then the function stops

if 1st if statement became false then it ts understand that is will be string and return it after making is upperCase.
---

### Q5 — `any` vs Union

Which is safer and why?

```ts
function getUserId(): any {
  return "user_123";
}
```

versus:

```ts
function getUserId(): string | number {
  return "user_123";
}
```

Don't just say "union is safer." Explain **what protection TypeScript gives you in the second version that it doesn't give you with `any`**.


---
Ans:Here union allows us to specify the types of return. It gives us more control and readability. 

On the other hand, any type can allow almost every type. It is basically telling the typeScript that don't check my value and accept all. By using any the code lose the typescript type checking protection.
---

Excellent. **Your Day 6 quiz understanding is strong.** 🔥 You got the core union-type behavior right across all five questions.

## 🧪 Mini Quiz Review

### Q1 — ✅ Correct

**B.** `value` can contain either a string or a number.

Exactly.

```ts
let value: string | number;
```

means the allowed types are `string` **or** `number`.

---

### Q2 — ✅ Correct

All four correctly identified:

```ts
id = 101;         // ✅ valid
id = "user_101";  // ✅ valid
id = true;        // ❌ invalid
id = null;        // ❌ invalid
```

Your explanation that the variable's "contract" is `number | string` is good.

One small terminology refinement: instead of saying the value "contracts," say:

> **The variable's type contract allows `number` or `string`.**

---

### Q3 — ✅ Correct

```text
String: Ifty
Number: 25
```

And you're right that this is a basic example of **type narrowing**.

You don't need to know the deeper theory yet. You've correctly observed the mechanism:

```ts
if (typeof value === "string")
```

allows TypeScript to determine which member of the union you're dealing with.

---

### Q4 — ✅ Correct — and good reasoning

Inside:

```ts
if (typeof value === "number") {
```

TypeScript knows:

```ts
value: number
```

Therefore:

```ts
value * 2
```

is valid.

Then the function immediately returns.

If the condition is false, TypeScript can conclude that `value` is the remaining member of the union:

```ts
value: string
```

Therefore:

```ts
value.toUpperCase()
```

is valid.

### The important idea

You described this correctly:

```text
number | string
      ↓
typeof === "number"
      ↓
number
```

If that condition is false:

```text
number | string
      ↓
not number
      ↓
string
```

That's **type narrowing**.

---

### Q5 — ✅ Correct

Your answer captures the main difference.

With:

```ts
function getUserId(): string | number
```

TypeScript knows that the function's result can **only** be a `string` or `number`.

With:

```ts
function getUserId(): any
```

TypeScript largely stops protecting you from type mistakes involving that result.

For example:

```ts
const id = getUserId();

id.toUpperCase();
```

With `any`, TypeScript won't complain even though the actual result could be a number.

With:

```ts
string | number
```

TypeScript will require you to deal with the possibility that the value is a number before using a string-only method.

**That's the important protection you're getting from the union.**

---

# 🏆 Score: 5/5

| Question                       | Result |
| ------------------------------ | ------ |
| Q1 — Union meaning             | ✅      |
| Q2 — Valid/invalid assignments | ✅      |
| Q3 — Output + narrowing        | ✅      |
| Q4 — Type analysis             | ✅      |
| Q5 — `any` vs union            | ✅      |

### Current Day 6 understanding: **9.5/10**

Your strongest point is that you're already thinking in terms of **type contracts and possible states**, which is exactly the right mindset for TypeScript.

Your only terminology gap is **type narrowing**. That's fine—we're going to build that gradually.

---
