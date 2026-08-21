# TypeScript Day 08 --- Review Notes

## 1. Type Inference

TypeScript can automatically determine a value's type by analyzing the
available information, such as its initial value.

``` ts
let age = 25;
// age → number
```

Explicit typing:

``` ts
let age: number = 25;
```

Inferred typing:

``` ts
let age = 25;
```

Both result in `age` being treated as a `number`.

### Key Idea

> Type inference means TypeScript determines types automatically instead
> of requiring explicit annotations everywhere.

------------------------------------------------------------------------

## 2. Explicit Typing vs Type Inference

### Explicit

``` ts
const name: string = "Ifty";
```

### Inferred

``` ts
const name = "Ifty";
```

When the type is obvious from the value, explicit annotation is often
unnecessary.

------------------------------------------------------------------------

## 3. Literal Widening

TypeScript can widen a literal value into a broader primitive type.

``` ts
let status = "active";
// string
```

Because `let` variables can be reassigned, TypeScript generally widens
the literal.

With `const`:

``` ts
const status = "active";
// "active"
```

The exact literal type can be preserved.

### Number Example

``` ts
let age = 25;
// number

const age = 25;
// 25
```

### Important Distinction

Do not confuse the value with the inferred type.

``` ts
let age = 25;
```

The value is `25`, but the inferred type is:

``` ts
number
```

------------------------------------------------------------------------

## 4. Object Type Inference

TypeScript can infer the type of each property in an object.

``` ts
const product = {
  name: "Laptop",
  price: 50000,
  available: true
};
```

Approximately:

``` ts
{
  name: string;
  price: number;
  available: boolean;
}
```

Therefore:

``` ts
product.name      // string
product.price     // number
product.available // boolean
```

------------------------------------------------------------------------

## 5. `const` Does Not Make an Object Immutable

This is an important distinction.

``` ts
const user = {
  role: "admin"
};

user.role = "editor"; // valid
```

`const` prevents reassignment of the variable:

``` ts
user = {}; // error
```

But it does not automatically make the object's properties readonly.

### Mental Model

``` text
const
→ variable binding cannot be reassigned

const object
→ properties can still be mutable
```

------------------------------------------------------------------------

## 6. `as const`

`as const` preserves literal types and makes the resulting properties
readonly at the TypeScript type level.

``` ts
const user = {
  role: "admin"
} as const;
```

Now:

``` ts
user.role
// "admin"
```

And:

``` ts
user.role = "editor";
// TypeScript error
```

### Important Terminology

`as const` is a **const assertion**.

It should not be thought of simply as ordinary runtime immutability.

### Runtime vs Compile Time

`as const` provides compile-time readonly behavior.

It does not perform runtime object freezing like:

``` ts
Object.freeze()
```

------------------------------------------------------------------------

## 7. Union Types Revision

A union type allows a value to have one of several specified types.

``` ts
let value: string | number;
```

The `|` means OR.

Valid:

``` ts
value = "hello";
value = 100;
```

Invalid:

``` ts
value = true;
```

------------------------------------------------------------------------

## 8. Type Narrowing

TypeScript can narrow a union type based on control flow.

``` ts
let value: string | number = "hello";

if (typeof value === "string") {
  console.log(value.toUpperCase());
} else {
  console.log(value.toFixed(2));
}
```

Inside the first branch:

``` text
value → string
```

Inside the `else` branch:

``` text
value → number
```

### Why?

Initially:

``` text
string | number
```

The condition checks whether the value is a string.

If true:

``` text
string
```

If false, the remaining possibility is:

``` text
number
```

This is called **type narrowing**.

------------------------------------------------------------------------

## 9. Literal Unions

Literal unions restrict a value to a finite set of exact values.

``` ts
type Role = "admin" | "editor" | "user";
```

Valid:

``` ts
const role: Role = "admin";
const role2: Role = "editor";
```

Invalid:

``` ts
const role: Role = "manager";
// TypeScript error
```

Literal unions are useful for:

-   User roles
-   Order statuses
-   Payment methods
-   Priority levels
-   Component variants
-   Finite application states

------------------------------------------------------------------------

## 10. React Relevance

Literal unions are useful when defining restricted React component
props.

``` ts
type ButtonProps = {
  variant: "primary" | "secondary" | "danger";
};
```

This provides:

-   Early typo detection
-   Better autocomplete
-   Restricted valid values
-   More predictable component APIs
-   Safer refactoring

Compared with:

``` ts
type ButtonProps = {
  variant: string;
};
```

the literal union prevents arbitrary values such as:

``` ts
variant: "banana";
```

------------------------------------------------------------------------

# Day 08 Interview Review

## Question 1

### What is Type Inference?

Type inference is TypeScript's ability to automatically determine a
value's type from available information, such as its initial value or
context.

------------------------------------------------------------------------

## Question 2

### Why does `let age = 25` become `number`, while `const age = 25` can become `25`?

`let` variables can be reassigned, so TypeScript generally widens the
literal `25` to `number`.

`const` variables cannot be reassigned, so TypeScript can preserve the
exact literal type `25`.

------------------------------------------------------------------------

## Question 3

### What is the difference between a normal object and an object using `as const`?

Normal object:

``` ts
const user = {
  role: "admin"
};
```

The property can be changed:

``` ts
user.role = "editor";
```

With `as const`:

``` ts
const user = {
  role: "admin"
} as const;
```

The literal `"admin"` is preserved and the property becomes readonly at
the type level.

------------------------------------------------------------------------

## Question 4

### Does `const` make an object immutable?

No.

`const` prevents reassignment of the variable binding, but object
properties can still be mutated.

`as const` provides readonly behavior at the TypeScript type level.

------------------------------------------------------------------------

## Question 5

### Why use a literal union instead of `string` for React props?

A literal union restricts the component to known valid values.

``` ts
type ButtonProps = {
  variant: "primary" | "secondary" | "danger";
};
```

This improves autocomplete, catches invalid values early, and makes the
component API more predictable.

------------------------------------------------------------------------

# Quiz Performance

## Concept Verification

**5.8/6**

Strong understanding of:

-   Type inference
-   Literal widening
-   `let` vs `const`
-   Union types
-   Object inference
-   `const` object mutation
-   `as const`
-   Type narrowing

Main correction:

``` ts
let age = 25;
```

has inferred type `number`, not `25`.

------------------------------------------------------------------------

## Mini Quiz

**7.5/8**

Main correction:

Distinguish between a literal value and an inferred type.

------------------------------------------------------------------------

## Interview

**9.1/10**

Strong practical understanding.

Areas to keep improving:

-   Precise explanation of literal widening
-   `as const` terminology
-   Distinguishing literal values from inferred types
-   Explaining literal unions as finite valid states

------------------------------------------------------------------------

# Coding Practice

## User Profile

Created a reusable profile type:

``` ts
type Profile = {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
  status: "active" | "inactive";
};

const createUserProfile = (profile: Profile) => {
  return `${profile.name} | ${profile.age} | ${profile.role} | ${profile.status}`;
};
```

Result:

**Passed**

------------------------------------------------------------------------

## Final Challenge

Created a type-safe status formatter without using `any`:

``` ts
type Status = {
  status: "active" | "inactive" | "banned";
};

const formatUserStatus = (status: Status) => {
  return `user is ${status.status}`;
};

console.log(
  formatUserStatus({
    status: "active"
  })
);
```

Output:

``` text
user is active
```

### Debugging Lesson

The first version used:

``` ts
return `user is ${status}`;
```

This interpolated the entire object.

The corrected version accesses the actual property:

``` ts
status.status
```

Therefore:

``` text
status
→ object

status.status
→ "active"
```

------------------------------------------------------------------------

# Day 08 Key Takeaways

1.  TypeScript can infer types automatically.
2.  Explicit annotations are not always necessary.
3.  `let` usually widens literals.
4.  `const` can preserve literal types.
5.  Object properties can still be mutable under `const`.
6.  `as const` preserves literals and creates readonly types at compile
    time.
7.  Union types restrict values to known possibilities.
8.  Type narrowing reduces a union to a specific type based on logic.
9.  Literal unions are useful for finite valid states.
10. TypeScript's type system can make React component APIs safer.

------------------------------------------------------------------------

# Day 08 Status

**Completed**

Confidence Score: **9.5/10**

Interview Readiness: **9.1/10**

Next Focus:

**Day 09 --- Object Typing**

Topics to begin:

-   Type aliases
-   Structured object models
-   Reusable object types
-   Deeper object typing
-   Preparing for interfaces
