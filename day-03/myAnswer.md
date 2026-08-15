# Code Review

## Concept Verification

### Q1 ✅ Correct

Your explanation is right.

A `number[]` can only contain numbers.

```ts
const numbers: number[] = [1, 2, 3];
numbers.push("4"); // ❌
```

TypeScript blocks this because `"4"` is a string.

---

### Q2 ⚠️ Partially Correct

You wrote:

> In the 1st one TypeScript infers the type as tuple of number and string

Not quite.

```ts
const data = [1, "Ifty"];
```

TypeScript actually infers:

```ts
(string | number)[]
```

Meaning:

> An array where each element can be either a string or a number.

So this is allowed:

```ts
data.push(100);
data.push("Hello");
```

But with a tuple:

```ts
const data: [number, string] = [1, "Ifty"];
```

TypeScript enforces:

* Exactly 2 items
* First must be number
* Second must be string

This difference is very important.

---

### Q3 ✅ Correct

Perfect.

```ts
age: "25"
```

is string.

Expected:

```ts
age: 25
```

which is number.

---

# Mini Quiz

### MCQ 1

Your answer:

```ts
string[]
```

✅ Correct

---

### MCQ 2

Your answer:

```ts
[number, string]
```

✅ Correct

---

### Output Prediction

You wrote:

```ts
[10,20,30]
```

✅ Correct

---

# Interview Questions

## 1. Arrays vs Tuples

✅ Good answer

Could be improved:

> Arrays hold values of the same type and can grow or shrink. Tuples have a fixed structure where position and type matter.

---

## 2. Why Object Types?

✅ Correct

You mentioned:

* Prevent bugs
* Improve readability

Exactly right.

---

## 3. Type Inference

✅ Correct

---

## 4. When Would You Choose a Tuple?

✅ Correct

Example:

```ts
const response: [number, string] = [200, "Success"];
```

Position matters.

---

## 5. API Question

❌ Not correct, but that's okay.

You said:

> It maintains order using tuple.

Actually API data is usually represented as **objects**, not tuples.

Example:

```ts
{
  id: 1,
  name: "Ifty",
  email: "ifty@gmail.com"
}
```

TypeScript helps because:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

Now TypeScript can catch mistakes if the API returns unexpected data.

We'll revisit APIs later.

---

# Practice Problems Review

## Problem 1

```ts
const languages: string[] = [
  "C",
  "C++",
  "Java",
  "JavaScript"
];
```

⚠️ Requirement was 5 languages.

You provided 4.

Maybe add:

```ts
"TypeScript"
```

Otherwise correct.

---

## Problem 2

```ts
const profile: [number,string] = [1, 'Ifty'];
```

✅ Syntax correct

⚠️ The exercise requested:

```ts
[101, "Ifty"]
```

Only the value differs.

---

## Problem 3

```ts
const student = {
  name,
  age,
  department
}
```

✅ Excellent

Type annotation is correct.

Object structure is clean.

---

## Problem 4

```ts
numbers.push(1,2,3);
```

✅ Correct

Interesting note:

Many beginners think `push()` accepts only one value.

It can accept multiple.

---

# Day 3 Score

| Area             | Score |
| ---------------- | ----: |
| Arrays           | 10/10 |
| Object Types     | 10/10 |
| Tuples           |  8/10 |
| Type Inference   |  7/10 |
| Practical Coding |  9/10 |

### Overall: 8.8/10

---

# End-of-Day Review

### Concepts Learned

* Array types
* Array type inference
* Tuples
* Object types
* Type safety for collections

### Strengths

* Good understanding of type annotations
* Strong object typing
* Clean syntax
* Clear explanations

### Weak Areas

* Difference between tuple and inferred array
* Real-world API typing

### Common Mistake Today

You assumed:

```ts
[1, "Ifty"]
```

automatically becomes a tuple.

TypeScript usually infers:

```ts
(string | number)[]
```

instead.

Remember that distinction.

### Interview Readiness

🟢 Good for beginner questions.

---

### Git Commit

```bash
git add .
git commit -m "Day 3: Arrays, tuples and object types"
git push
```

You're ready for **Day 4: Functions, Parameter Types, Return Types, Optional Parameters & Default Parameters**. This is one of the most important TypeScript topics because React components and backend APIs are essentially functions everywhere.
