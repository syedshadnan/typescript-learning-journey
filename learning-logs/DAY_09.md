# Day 09 — Type Aliases & Object Typing

## Concepts Learned

* Type Aliases
* Reusable type definitions
* Object type contracts
* Type Alias with object structures
* Type Alias with literal unions
* Type Alias in function parameters
* Type Alias for reusable data modeling
* Type inference with typed functions
* Difference between a type definition and an actual object
* Type aliases exist at compile time and are erased during compilation
* `let` reassignment vs type restrictions
* Practical data modeling with `User`, `Product`, and `Order`

## Key Concepts

### Type Alias

A Type Alias gives a reusable name to a type definition.

```ts
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
};
```

The alias defines the **contract**, while an actual object can follow that contract:

```ts
const userInfo: User = {
  id: 1,
  name: "Ifty",
  email: "example@gmail.com",
  role: "admin",
  isActive: true
};
```

### Type Alias + Functions

A Type Alias can be reused as a function parameter type:

```ts
const displayUserInfo = (user: User) => {
  return `ID: ${user.id} | Name: ${user.name}`;
};
```

This makes the function accept only objects that follow the `User` contract.

### Type Alias + Literal Unions

```ts
type Status = "pending" | "approved" | "rejected";
```

Only the specified literal values are allowed.

This allows applications to model finite valid states.

### Type Alias vs Actual Object

```ts
type User = {
  name: string;
};
```

defines a type contract.

```ts
const user: User = {
  name: "Ifty"
};
```

creates an actual runtime object that follows that contract.

Type aliases themselves do not create runtime objects.

---

## Practice Completed

### Problem 1 — User Model

Created a reusable `User` type:

```ts
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
};
```

Created a typed `displayUserInfo()` function and a valid `User` object.

**Result: ✅ Passed**

---

### Problem 2 — Product Model

Created:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
};
```

Created `createProduct()` using `Product` as the parameter type.

**Result: ✅ Passed**

---

### Final Challenge — Order Model

Created:

```ts
type Order = {
  id: number;
  customer: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  payment: "cash" | "card" | "bkash";
  total: number;
};
```

Created `createOrder(order: Order)` and successfully generated the required formatted output.

**Result: ✅ Passed**

**Final Challenge Score: 10/10**

---

## Mini Quiz Performance

### Score: **5/6**

### Correct

* Object type inference
* Type contract violations
* Reusable Type Alias
* Literal union validation
* Mutable object properties
* Array of typed objects

### Mistake

Initially reasoned that this was valid because `let` allows reassignment:

```ts
let status: "pending" | "approved" = "pending";

status = "completed";
```

Correction:

`let` allows reassignment, but the declared type still restricts which values can be assigned.

```text
let
→ reassignment allowed

Type
→ determines which values are allowed
```

---

## Interview Performance

### Score: **9.5/10**

Successfully explained:

* What Type Alias is
* Why Type Aliases improve reusability
* How they reduce duplication
* How they improve readability and maintainability
* Difference between a type definition and an actual object
* Why Type Aliases do not exist at runtime
* Practical advantages of using Type Aliases for application data

### Weak Area

Continue reinforcing the distinction between:

```text
Variable behavior
→ let / const

Type restriction
→ number / string / literal union
```

---

## Code Review Performance

### Strengths

* Correct Type Alias syntax
* Strong object typing
* Correct literal unions
* Correct function parameter typing
* Appropriate use of type inference
* Avoided `any`
* Good naming conventions
* Successfully modeled realistic `User`, `Product`, and `Order` data

### Minor Improvements

* Maintain consistent semicolon usage.
* Prefer natural output wording such as `costs` instead of `cost`.
* Continue using camelCase for variable names such as `userInfo`.

---

## React Relevance

Type Aliases will later be useful for defining React component props.

For example:

```ts
type UserProps = {
  name: string;
  age: number;
};
```

The same principle used today for `User`, `Product`, and `Order` can later be applied to component data contracts.

---

## Common Mistakes

* Confusing `let` reassignment with unrestricted value assignment
* Initially mixing up type definitions and runtime objects
* Small wording/style issues in returned strings

---

## Strengths

* Strong understanding of reusable type contracts
* Strong practical object modeling
* Good understanding of literal unions
* Able to apply Type Aliases independently
* Good connection between Type Alias and type inference
* Successfully transferred the concept across multiple real-world models

---

## Confidence Score

**9.5/10**

## Interview Readiness

**9.5/10**

## Overall Day 9 Assessment

**9.6/10**

---

## End-of-Day Summary

Today I learned how **Type Aliases** allow me to give reusable names to type definitions and use them as consistent contracts throughout an application.

I practiced modeling real-world data using:

```text
User
Product
Order
```

I also learned how Type Aliases can be combined with literal unions and function parameters to create reusable and type-safe application logic.

The most important correction today was understanding that:

> `let` allows reassignment, but the variable's type still determines which values can be assigned.

I successfully applied Type Aliases independently in three different practical problems.

---

## Final Status

**✅ Day 9 Completed**

### Progress

* ✅ Day 0 — Setup & Environment
* ✅ Day 1 — What TypeScript Is & Why It Exists
* ✅ Day 2 — Primitive Types
* ✅ Day 3 — Arrays, Tuples & Object Types
* ✅ Day 4 — Functions & Parameters
* ✅ Day 5 — Optional & Default Parameters
* ✅ Day 6 — Union Types
* ✅ Day 7 — Literal Types
* ✅ Day 8 — Fundamentals Revision & Type Inference
* ✅ **Day 9 — Type Aliases & Object Typing**

### Next Focus

**Day 10 — Optional Properties & Readonly Properties**

This continues Phase 2 — Object Typing, followed by nested objects and eventually Interfaces. 
