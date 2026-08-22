# TypeScript Day 9 --- Review

## Topic

**Type Aliases & Object Typing**

------------------------------------------------------------------------

# 1. What Is a Type Alias?

A Type Alias gives a reusable name to a type definition.

``` ts
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
};
```

A Type Alias defines a reusable **type contract**.

It does not create a runtime object.

------------------------------------------------------------------------

# 2. Why Use Type Aliases?

Type Aliases help with:

-   Reusability
-   Reducing code duplication
-   Readability
-   Maintainability
-   Consistent data structures
-   Clear data contracts

Without a Type Alias, the same object structure may need to be repeated
in multiple functions.

``` ts
const createUser = (user: {
  name: string;
  age: number;
}) => {};

const updateUser = (user: {
  name: string;
  age: number;
}) => {};
```

With a Type Alias:

``` ts
type User = {
  name: string;
  age: number;
};

const createUser = (user: User) => {};
const updateUser = (user: User) => {};
```

The second approach provides a reusable contract.

------------------------------------------------------------------------

# 3. Type Alias vs Actual Object

A Type Alias:

``` ts
type User = {
  name: string;
};
```

defines a type contract.

An actual object:

``` ts
const user: User = {
  name: "Ifty"
};
```

creates a runtime object that follows that contract.

Mental model:

``` text
Type Alias
    ↓
Defines the contract

Object
    ↓
Follows the contract
```

Type aliases exist at compile time and are erased when TypeScript is
compiled to JavaScript.

------------------------------------------------------------------------

# 4. Type Alias + Literal Unions

Type Aliases can be combined with literal unions.

``` ts
type Role = "admin" | "editor" | "user";
```

Only these values are allowed:

``` ts
let role: Role = "admin";

role = "user";   // valid
role = "editor"; // valid
```

But:

``` ts
role = "guest"; // TypeScript error
```

This is useful for modeling finite valid states such as:

-   User roles
-   Order statuses
-   Payment methods
-   Priorities
-   UI variants

------------------------------------------------------------------------

# 5. Important Distinction: `let` vs Type

A key correction from today's quiz/interview:

``` ts
let status: "pending" | "approved" = "pending";

status = "approved"; // valid
status = "completed"; // error
```

Why?

``` text
let
→ reassignment is allowed

Type
→ determines which values are allowed
```

`let` does not mean that any value can be assigned.

The declared type still restricts the possible values.

------------------------------------------------------------------------

# 6. Type Alias + Function Parameters

A Type Alias can be used directly as a function parameter type.

``` ts
type User = {
  id: number;
  name: string;
  email: string;
};

const displayUserInfo = (user: User) => {
  return `ID: ${user.id} | Name: ${user.name}`;
};
```

This means the function expects an object that follows the `User`
contract.

------------------------------------------------------------------------

# 7. Type Inference Connection

The return type of a function does not always need to be explicitly
written.

``` ts
const displayUserInfo = (user: User) => {
  return `ID: ${user.id} | Name: ${user.name}`;
};
```

TypeScript can infer:

``` text
(user: User) => string
```

because the function returns a string.

This connects today's topic directly with the Type Inference concepts
revised on Day 8.

------------------------------------------------------------------------

# 8. Practical Example --- User

``` ts
type User = {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
};

const displayUserInfo = (user: User) => {
  return `ID: ${user.id} | Name: ${user.name} | Email: ${user.email} | Role: ${user.role} | Activity: ${user.isActive}`;
};

const userInfo: User = {
  id: 1,
  name: "Syed Shadnan Mozammel",
  email: "syedshadnanmozammel@gmail.com",
  role: "admin",
  isActive: true
};

console.log(displayUserInfo(userInfo));
```

### Result

The Type Alias defines the structure, the object follows that structure,
and the function accepts the typed object.

------------------------------------------------------------------------

# 9. Practical Example --- Product

``` ts
type Product = {
  id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
};

const createProduct = (product: Product) => {
  return `${product.name} costs ${product.price}`;
};

const productInfo: Product = {
  id: 1,
  name: "Laptop",
  price: 50000,
  category: "electronics"
};

console.log(createProduct(productInfo));
```

### Result

The `Product` type is reused as the function parameter contract and the
object type.

------------------------------------------------------------------------

# 10. Final Challenge --- Order

``` ts
type Order = {
  id: number;
  customer: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  payment: "cash" | "card" | "bkash";
  total: number;
};

const createOrder = (order: Order) => {
  return `Order #${order.id} | Customer: ${order.customer} | Status: ${order.status} | Payment: ${order.payment} | Total: ${order.total}`;
};

const orderInfo: Order = {
  id: 101,
  customer: "Ifty",
  status: "processing",
  payment: "bkash",
  total: 1500
};

console.log(createOrder(orderInfo));
```

### Expected Output

``` text
Order #101 | Customer: Ifty | Status: processing | Payment: bkash | Total: 1500
```

### Result

**10/10 --- Passed**

------------------------------------------------------------------------

# 11. Common Mistakes

## Mistake 1 --- Confusing `let` with unrestricted assignment

Incorrect reasoning:

> `let` can be reassigned, so any value can be assigned.

Correct reasoning:

> `let` allows reassignment, but the variable's type determines which
> values are allowed.

------------------------------------------------------------------------

## Mistake 2 --- Confusing a Type Alias with an object

``` ts
type User = {
  name: string;
};
```

does not create an object.

It creates a compile-time type definition.

------------------------------------------------------------------------

## Mistake 3 --- Repeating object structures unnecessarily

Instead of repeatedly writing:

``` ts
{
  id: number;
  name: string;
}
```

create a reusable Type Alias:

``` ts
type User = {
  id: number;
  name: string;
};
```

------------------------------------------------------------------------

# 12. Interview Questions & Answers

## Q1. What is a Type Alias?

A Type Alias gives a reusable name to a type definition, allowing us to
model and enforce consistent data structures across different parts of
an application.

## Q2. Why use Type Aliases?

They improve:

-   Reusability
-   Readability
-   Maintainability
-   Consistency
-   Code duplication reduction

## Q3. Does a Type Alias create a runtime object?

No.

Type aliases exist at compile time and are erased when TypeScript is
compiled into JavaScript.

## Q4. What is the difference between a Type Alias and an object?

A Type Alias defines the expected structure. An object is an actual
runtime value that can follow that structure.

## Q5. Why is `"completed"` invalid here?

``` ts
type Status = "pending" | "approved";

let status: Status = "pending";

status = "completed";
```

Because `"completed"` is not one of the allowed members of the `Status`
union.

------------------------------------------------------------------------

# 13. Quiz Performance

**Score: 5/6**

### Correct

-   Object type inference
-   Type contract violations
-   Reusable Type Alias
-   Literal union validation
-   Mutable object properties
-   Typed arrays

### Main Weakness

The main mistake was confusing `let` reassignment with the allowed
values of a declared type.

------------------------------------------------------------------------

# 14. Interview Performance

**9.5/10**

### Strengths

-   Strong understanding of Type Alias
-   Good explanation of reusability
-   Good understanding of object contracts
-   Strong practical reasoning
-   Correct understanding of compile-time type erasure
-   Good application of literal unions
-   Successfully connected Type Alias with functions and data modeling

### Weak Area

Continue reinforcing:

``` text
let / const
→ variable behavior

Type
→ allowed values
```

------------------------------------------------------------------------

# 15. Code Review

### Strengths

-   Correct Type Alias syntax
-   Correct object typing
-   Correct literal unions
-   Correct function parameter typing
-   Appropriate use of type inference
-   Avoided `any`
-   Good naming conventions
-   Successfully modeled User, Product, and Order

### Minor Improvements

-   Maintain consistent semicolon usage.
-   Prefer natural output wording such as `costs` instead of `cost`.
-   Continue using camelCase for variables such as `userInfo`.

------------------------------------------------------------------------

# 16. React Relevance

Type Aliases will later be useful for React component props.

Example:

``` ts
type UserProps = {
  name: string;
  age: number;
};
```

This same data-contract principle will later be used to type component
props, state-related data, and other application structures.

------------------------------------------------------------------------

# 17. Day 9 Summary

Today I learned how Type Aliases allow me to give reusable names to type
definitions and use them as consistent contracts throughout an
application.

I practiced modeling:

``` text
User
Product
Order
```

I also learned how Type Aliases can be combined with literal unions and
function parameters to create reusable and type-safe application logic.

The most important correction today was:

> `let` allows reassignment, but the variable's type still determines
> which values can be assigned.

I successfully applied Type Aliases independently in three practical
problems.

------------------------------------------------------------------------

# 18. Final Assessment

  Area                           Score
  ----------------------- ------------
  Concept Understanding         9.5/10
  Coding                         10/10
  Interview                     9.5/10
  Practical Reasoning           9.5/10
  Overall                   **9.6/10**

## Status

**Day 9 --- Completed**

## Next Focus

**Day 10 --- Optional Properties & Readonly Properties**

This continues Phase 2 --- Object Typing.
