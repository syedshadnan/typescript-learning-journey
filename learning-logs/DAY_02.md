# Day 2 — Primitive Types & Type Inference

## Concepts Learned

### Primitive Types

- number
- string
- boolean
- null
- undefined

### Type Inference

TypeScript can automatically determine a variable's type based on its initial value.

Example:

```ts
let age = 25;
```

TypeScript infers:

```ts
let age: number;
```

### Explicit Typing

```ts
let age: number = 25;
```

### Implicit Typing

```ts
let age = 25;
```

### null vs undefined

#### null

Represents an intentionally empty value.

```ts
let currentUser = null;
```

#### undefined

Represents a value that has not been assigned yet.

```ts
let age;
```

---

## Practice Completed

- Primitive type identification
- Type inference exercises
- Explicit vs implicit typing
- null vs undefined comparison
- Type prediction exercises

---

## Common Mistakes

- Confusing null with undefined
- Assuming variables without type annotations can hold any type
- Writing unnecessary type annotations everywhere

---

## Strengths

- Good understanding of primitive types
- Strong grasp of type inference
- Correctly identifies inferred types
- Understands type safety basics

---

## Weak Areas

- Continue practicing null vs undefined distinctions

---

## Interview Questions Reviewed

1. What are primitive types?
2. What is Type Inference?
3. What is the difference between explicit and implicit typing?
4. What is the difference between null and undefined?
5. Why is Type Inference useful?

---

## Confidence Score

9/10

---

## Next Focus

### Day 3 — Arrays & Tuples

Topics:

- Typed Arrays
- Array Type Syntax
- Readonly Arrays
- Tuples
- Real-world examples in React