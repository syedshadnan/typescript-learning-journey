# 🧪 Day 5 — Mini Quiz

Now let's test whether you can **predict TypeScript behavior**, rather than just explain it.

Don't look up the answers. 😈

### Q1 — Output Prediction

```ts
function greet(name?: string) {
  if (name) {
    return `Hello ${name}`;
  }

  return "Hello Guest";
}

console.log(greet());
console.log(greet("Ifty"));
```

What is the output?

---
Ans:
Hello Guest
Hello Ifty
---

### Q2 — Output Prediction

```ts
function calculate(
  price: number,
  discount: number = 10
) {
  return price - (price * discount) / 100;
}

console.log(calculate(100));
console.log(calculate(100, 20));
```

What are the two outputs?

---
Ans:
90
80
---

### Q3 — Error Detection

Is this valid?

```ts
function createUser(
  name: string,
  age?: number,
  city?: string
) {
  // ...
}
```

If valid, explain why.

---
Ans: Validity or invalidity depends on how the code handles optional parameter.

without handling these optional parameter the output will shoe undefined if value is not assigned in the argument. A condition must use inside the function in order to avoid the undefine.
---

### Q4 — Error Detection

What about this?

```ts
function createUser(
  name?: string,
  age: number = 18
) {
  // ...
}
```

Valid or invalid? **Why?**

---
Ans: Invalid. Because the optional parameter should not come before the required parameter.
---

### Q5 — Think Carefully

What happens here?

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}

console.log(greet(undefined));
```

Will it:
A. Produce a TypeScript error
B. Print Hello undefined
C. Print Hello Guest
D. Produce a runtime error

Give your answer and explain why.

---
Ans: C. Hello Guest
passing a undefined explicitly triggers the default fallback. The function replace undefined with the default value Guest.
---

Great work. **Q1, Q2, and Q5 are exactly right.** Q3 and Q4 need an important correction—and Q4 is a subtle TypeScript rule worth understanding.

## 📊 Score: 3.5/5

### Q1 — ✅ Correct

```text
Hello Guest
Hello Ifty
```

Perfect.

### Q2 — ✅ Correct

```text
90
80
```

Correct.

---

### Q3 — ⚠️ Partially correct

The function itself is **valid**:

```ts
function createUser(
  name: string,
  age?: number,
  city?: string
) {
  // ...
}
```

Your concern about `undefined` is valid, but it doesn't determine whether the **function declaration is valid**.

For example:

```ts
createUser("Ifty");
```

is completely valid.

Inside the function:

```ts
age // number | undefined
city // string | undefined
```

So if you actually need those values, your function logic may need to handle the possibility of `undefined`.

**Important distinction:**

> Optional parameter → may be `undefined`
> Handling `undefined` → a separate concern inside the function.

---

### Q4 — ❌ This one is the tricky one

You answered **invalid**, but TypeScript actually allows this:

```ts
function createUser(
  name?: string,
  age: number = 18
) {
  // ...
}
```

Why?

Because a parameter with a default value is itself considered **optional** from the caller's perspective.

So both parameters can be omitted:

```ts
createUser();
```

Or:

```ts
createUser("Ifty");
```

Or:

```ts
createUser("Ifty", 25);
```

The important rule is:

```ts
name?: string       // optional
age: number = 18    // default → effectively optional
```

So there's no required parameter following an optional one.

### 🔥 Remember this distinction

```ts
name?: string
```

means:

> "The caller may omit this, and if omitted, the value is `undefined`."

Whereas:

```ts
age: number = 18
```

means:

> "The caller may omit this, and if omitted, use `18`."

---

### Q5 — ✅ Correct

**C. `Hello Guest`**

Exactly.

```ts
greet(undefined);
```

uses the default value:

```ts
name = "Guest"
```

So:

```text
Hello Guest
```

---

# 🧠 One Important Rule to Lock In

Don't memorize:

> "An optional parameter can never come before another parameter."

Instead, think:

> **A required parameter cannot come after a parameter that makes that position optional.**

Default parameters are treated as optional for this purpose.

---

## 🎯 Your current understanding

I'd rate your understanding of today's concept at **~8.5/10**.

Your strongest point is that you're reasoning about:

```ts
string | undefined
```

rather than merely memorizing `?`.

The main thing to improve is distinguishing **TypeScript declaration validity** from **what the function does with an undefined value**.

Now we're ready for the next stage:
