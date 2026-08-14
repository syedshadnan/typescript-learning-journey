Step 5 — Practice Problems
Problem 1

Will this produce an error?

let score = 100;

score = 500;

Why?

Problem 2

Will this produce an error?

let score = 100;

score = "500";

Why?

Problem 3

What type does TypeScript infer?

let isPremium = true;
Problem 4

What type does TypeScript infer?

let username = "Ifty";
Problem 5 ⭐

Explain the difference:

let user = null;

and

let user;

in your own words.

Answer these 5 practice problems. If you get them right, Day 2 will be complete and we'll prepare DAY_02.md. 🚀



Excellent. You got all 5 correct. ✅

---

# Practice Review

## Problem 1

```ts
let score = 100;

score = 500;
```

Your Answer: No Error ✅

Reason: Correct.

TypeScript infers:

```ts
let score: number = 100;
```

and `500` is also a number.

---

## Problem 2

```ts
let score = 100;

score = "500";
```

Your Answer: Error ✅

Reason: Correct.

TypeScript inferred:

```ts
let score: number
```

so assigning a string is not allowed.

---

## Problem 3

```ts
let isPremium = true;
```

Your Answer: boolean ✅

---

## Problem 4

```ts
let username = "Ifty";
```

Your Answer: string ✅

---

## Problem 5

```ts
let user = null;
```

vs

```ts
let user;
```

Your Answer: ✅

Perfect explanation.

### `null`

```ts
let user = null;
```

Means:

> We intentionally know there is no user right now.

### `undefined`

```ts
let user;
```

Means:

> No value has been assigned yet.

This distinction becomes very important in React state and API responses.

---

