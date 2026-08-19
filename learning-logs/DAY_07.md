# Day 07 — Literal Types

## Concepts Learned

* Literal Types
* Literal Types with string values
* Literal Types with number values
* Literal Types with boolean values
* Literal Type Unions
* Literal Types vs broad primitive types
* Literal widening
* `let` vs `const` type inference
* Object property type widening
* `as const`
* `as const` and literal type preservation
* `as const` and readonly properties
* `as const` with readonly tuples
* Compile-time readonly vs runtime immutability
* Object typing with literal unions
* Practical finite-state modeling
* Literal types in function parameters
* Literal types for roles, statuses, payment methods, and priorities

## Key Concepts

### Literal Types

A literal type represents one specific value as a type.

```ts
let role: "admin";
```

Only `"admin"` is allowed.

Literal types can also be combined using unions:

```ts
let role: "admin" | "editor" | "user";
```

This restricts the value to a predefined set of exact choices.

### Literal Widening

TypeScript may widen a specific literal into a broader primitive type.

```ts
let status = "active";
// string
```

Because a `let` variable can be reassigned, TypeScript generally widens `"active"` to `string`.

With `const`:

```ts
const status = "active";
// "active"
```

TypeScript preserves the specific literal type.

### Object Property Widening

Even when an object is declared with `const`:

```ts
const user = {
  role: "admin"
};
```

`user.role` is generally inferred as:

```ts
string
```

because the property itself can still be changed:

```ts
user.role = "editor";
```

### `as const`

```ts
const user = {
  role: "admin"
} as const;
```

`as const` preserves literal types and makes the resulting properties readonly.

Therefore:

```ts
user.role
```

has the type:

```ts
"admin"
```

and:

```ts
user.role = "editor";
```

produces a TypeScript error.

Important distinction:

`as const` creates compile-time readonly types. It does not perform runtime object freezing like `Object.freeze()`.

## Practice Completed

### Problem 1 — User Roles

Created a `createUser()` function using:

* `string`
* Literal union for user roles

```ts
const createUser = (
  name: string,
  role: "admin" | "editor" | "user"
) => {
  return `${name} created as ${role}`;
};
```

Result: ✅ Passed

### Problem 2 — Order System

Created `updateOrder()` using a numeric order ID and a literal union for order status.

```ts
const updateOrder = (
  orderId: number,
  status: "pending" | "shipped" | "delivered" | "cancelled"
) => {
  return `Order ${orderId} is ${status}`;
};
```

Result: ✅ Passed

### Problem 3 — Configuration Object

Created a typed configuration object using:

* Object typing
* Literal unions
* Function parameters
* Type inference

```ts
const createButton = (config: {
  text: string,
  variant: "primary" | "secondary" | "danger",
  size: "small" | "medium" | "large"
}) => {
  return `${config.text} | ${config.variant} | ${config.size}`;
};
```

Initially made:

* A spelling mistake in `"secondary"`
* An overly restrictive `"large"` literal for `size`

Both were identified and corrected.

Result: ✅ Passed after correction

### Final Challenge — Order Configuration

Created `createOrder()` combining object typing and multiple literal unions.

```ts
const createOrder = (order: {
  id: number,
  status: "pending" | "processing" | "shipped" | "delivered",
  payment: "cash" | "card" | "bkash",
  priority: "low" | "medium" | "high"
}) => {
  return `${order.id} | ${order.status} | ${order.payment} | ${order.priority}`;
};
```

Result: ✅ Passed

Final Challenge Score: **10/10**

## Mini Quiz Performance

* Q1 — Literal widening: Correct
* Q2 — Literal inference with `const`: Correct
* Q3 — Literal union validation: Correct
* Q4 — `as const` type prediction: Correct
* Q5 — `const` vs `as const`: Mostly correct

### Quiz Score

**4.5/5**

The only issue was wording around the two `const` examples. The implementation and underlying understanding were correct.

## Interview Questions Reviewed

1. What is a literal type?
2. What is the difference between `string` and `"admin" | "user"`?
3. What is literal widening?
4. Why does `let` usually widen literals while `const` preserves them?
5. What is `as const`?
6. How does `as const` affect object properties?
7. What is the difference between `const` and `as const`?
8. Why are literal unions useful in application development?

## Interview Performance

**9.7/10**

### Strengths

* Strong understanding of literal types
* Strong understanding of literal unions
* Correct explanation of literal widening
* Good understanding of `let` vs `const`
* Strong understanding of `as const`
* Correct understanding of object property widening
* Good distinction between compile-time readonly and runtime behavior
* Able to explain concepts in own words
* Successfully applied concepts to realistic application scenarios

### Weak Areas

* Continue reinforcing the distinction between `const` and `as const`
* Be precise when describing `as const` as compile-time readonly rather than runtime immutability
* Continue practicing object typing with multiple literal unions
* Watch for small spelling/typing mistakes in literal values

## Code Review Performance

### Strengths

* Correct parameter typing
* Appropriate use of literal unions
* Avoided `any`
* Used type inference appropriately
* Created readable function signatures
* Successfully modeled finite sets of valid application states

### Minor Mistakes

* `"secendary"` instead of `"secondary"`
* Initially restricted `size` to only `"large"`
* Extra trailing space in the final returned string

These were minor implementation issues and did not indicate conceptual misunderstanding.

## React Relevance

Although React itself has not yet been learned, the TypeScript concepts practiced today will later be useful for React component props.

For example, a component could restrict a value to:

```ts
type ButtonSize = "small" | "medium" | "large";
```

This allows TypeScript to reject invalid values while making reusable components safer.

React integration will be studied later in the roadmap rather than introduced prematurely.

## Common Mistakes

* Confusing `const` with readonly object properties
* Assuming `const` automatically preserves every nested literal
* Describing `as const` as runtime freezing
* Accidentally restricting a literal union too much
* Small spelling errors inside literal unions

## End-of-Day Summary

Today I learned how Literal Types allow TypeScript to represent specific, exact values instead of only broad primitive categories.

I learned how literal unions can restrict application values to predefined choices such as user roles, order statuses, payment methods, and priorities.

I also learned about literal widening and why:

```ts
let role = "admin";
```

usually becomes:

```ts
string
```

while:

```ts
const role = "admin";
```

preserves:

```ts
"admin"
```

I learned that object properties can still be widened even when the object itself is declared with `const`, and I learned how `as const` preserves literal types and creates readonly types.

Most importantly, I practiced using these concepts to model realistic application data instead of learning them only as syntax.

## Confidence Score

**9.5/10**

## Interview Readiness

**9.7/10**

## Final Status

**✅ Day 7 Completed**

### Progress

* ✅ Day 0 — Setup & Environment
* ✅ Day 1 — What TypeScript Is & Why It Exists
* ✅ Day 2 — Primitive Types
* ✅ Day 3 — Arrays, Tuples & Object Types
* ✅ Day 4 — Functions & Parameters
* ✅ Day 5 — Optional & Default Parameters
* ✅ Day 6 — Union Types
* ✅ Day 7 — Literal Types

### Next Focus

**Day 8 — TypeScript Fundamentals Revision & Type Inference**

The next session should consolidate the Phase 1 fundamentals before progressing further into object typing and more structured TypeScript concepts.
