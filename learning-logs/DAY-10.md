# Day 10 — Optional & Readonly Properties

## Concepts Learned

* Optional properties
* `?` syntax for optional properties
* Optional properties and `undefined`
* Accessing optional properties safely
* Type narrowing with `typeof`
* Readonly properties
* `readonly` and property reassignment
* Difference between `const` and `readonly`
* Compile-time readonly vs runtime immutability
* Combining `readonly` and optional properties
* Using object typing for real-world data modeling
* Applying optional and readonly properties with literal unions
* Practical data modeling with `User`, `Product`, and `UserAccount`

---

## Key Concepts

### Optional Properties

An optional property may be omitted from an object.

```ts
type User = {
  name: string;
  age?: number;
};
```

Here:

```text
name
→ required

age
→ optional
```

When an optional property is accessed, its value can be:

```ts
number | undefined
```

---

### Optional Properties + Type Narrowing

Because an optional property can be `undefined`, it may need to be narrowed before using type-specific methods.

Example:

```ts
if (user.age !== undefined) {
  console.log(user.age.toFixed(2));
}
```

Another approach is optional chaining:

```ts
user.age?.toFixed(2);
```

The important idea is:

```text
optional property
→ possibly undefined
→ narrow/check before unsafe usage
```

---

### Readonly Properties

`readonly` prevents a property from being reassigned through its TypeScript type.

```ts
type User = {
  readonly id: number;
  name: string;
};
```

Therefore:

```ts
user.name = "Rahim"; // valid
```

but:

```ts
user.id = 2; // TypeScript error
```

---

### `const` vs `readonly`

`const` prevents reassignment of the variable itself.

It does **not** automatically make object properties readonly.

```ts
const user = {
  id: 1,
  name: "Ifty"
};

user.name = "Rahim"; // valid
```

`readonly` specifically applies to the property:

```ts
type User = {
  readonly id: number;
};
```

---

### Compile-Time Readonly

`readonly` is a TypeScript type-system restriction.

It does not mean the object is automatically frozen at runtime.

```text
readonly
→ compile-time protection

Object.freeze()
→ runtime JavaScript mechanism
```

---

## Concept Verification

### Score: **4/5**

Successfully demonstrated understanding of:

* Required vs optional properties
* Optional properties as potentially `undefined`
* Readonly properties
* Mutable vs readonly properties
* Real-world readonly use cases
* Optional property narrowing
* Practical object modeling

### Corrections

#### Optional property

Initially explained that `toFixed()` would make `age` a string.

Correction:

`toFixed()` returns a string, but the actual problem is that `age` might be `undefined`.

#### Readonly

Initially reversed the conclusion on a readonly assignment.

Correct understanding:

```ts
user.id = 2;
```

is invalid when `id` is declared as:

```ts
readonly id: number;
```

---

## Mini Quiz Performance

### Score: **5/5**

Successfully answered:

1. Optional property type analysis
2. Readonly property assignment
3. Output prediction with optional properties
4. Mutable vs readonly properties
5. Type safety when calling methods on potentially undefined values

### Strongest Point

Correctly explained that:

```ts
age?: number
```

means the accessed value can be:

```ts
number | undefined
```

and therefore:

```ts
user.age.toFixed(2);
```

is unsafe without narrowing.

---

## Interview Performance

### Score: **4.7/5**

Successfully explained:

* What optional properties are
* When optional properties are useful
* Difference between normal and readonly properties
* Why database IDs are good candidates for `readonly`
* Why usernames can remain mutable
* Why optional properties require safe handling

### Weak Area

Continue improving precision when explaining:

* Optional chaining vs explicit `undefined` checks
* Compile-time TypeScript errors vs runtime JavaScript errors
* `readonly` vs `const`

---

# Practice Completed

## Problem 1 — User Profile

Created:

```ts
type UserProfile = {
  readonly id: number;
  name: string;
  email: string;
  age?: number;
  role: "admin" | "user" | "editor";
  isActive: boolean;
};
```

Created a valid `UserProfile` object.

**Result: ✅ Passed**

**Score: 10/10**

---

## Problem 2 — Product Model

Created a `Product` type containing:

```text
readonly id
name
price
optional description
category literal union
stock
isAvailable
```

Created two products:

* One with a description
* One without a description

Created `displayProduct()` and safely handled the optional description:

```ts
if (typeof product.description !== "undefined") {
  // description is string here
}
```

Also tested both products.

**Result: ✅ Passed**

**Score: 10/10**

---

## Final Challenge — User Account System

Created:

```ts
type UserAccount = {
  readonly id: number;
  userName: string;
  email: string;
  phone?: string;
  role: "admin" | "moderator" | "user";
  status: "active" | "inactive" | "banned";
  balance: number;
};
```

Implemented:

### `getAccountSummary()`

* Handles optional phone
* Uses type narrowing
* Returns formatted account information

### `updateUsername()`

* Accepts a `UserAccount`
* Updates the mutable `userName`
* Returns the updated account
* Leaves readonly `id` unchanged

Final corrected version:

```ts
const updateUsername = (
  account: UserAccount,
  newUsername: string
) => {
  account.userName = newUsername;
  return account;
};
```

**Result: ✅ Passed**

**Final Challenge Score: 10/10**

---

# Common Mistakes

* Initially misunderstood the reason `toFixed()` was unsafe on an optional number
* Initially reversed the conclusion about assigning to a readonly property
* First version of `updateUsername()` returned a formatted string instead of the updated `UserAccount`
* Minor data-modeling consideration: phone numbers are generally better represented as strings than numbers

---

# Strengths

* Strong understanding of optional properties
* Strong understanding of readonly properties
* Good use of `typeof` for narrowing
* Good use of literal unions
* Strong object modeling
* Avoided unnecessary `any`
* Correctly modeled realistic application data
* Successfully combined multiple TypeScript features in one model
* Corrected mistakes through reasoning rather than simply copying a solution

---

# React Relevance

Today's concepts will later be useful when typing React component props.

For example:

```ts
type ButtonProps = {
  readonly id: number;
  text: string;
  size?: "small" | "medium" | "large";
};
```

This allows a component to have:

* Required values
* Optional configuration
* Restricted valid values
* Stable readonly data

React integration will come later in the roadmap.

---

# Confidence Score

**9.5/10**

# Interview Readiness

**9.5/10**

# Overall Day 10 Assessment

**9.6/10**

---

# End-of-Day Summary

Today I learned how to use **Optional Properties** and **Readonly Properties** to create more precise and realistic TypeScript object models.

I learned that optional properties may be absent and can therefore produce `undefined` when accessed. I practiced safely handling them using type narrowing.

I also learned that `readonly` prevents property reassignment at the TypeScript type level, while `const` does not automatically make object properties readonly.

I applied these concepts to realistic `UserProfile`, `Product`, and `UserAccount` models and successfully completed the final challenge.

The most important lesson today was:

> TypeScript object modeling is not only about defining data types—it is about defining the rules of the data: what must exist, what may be missing, what can change, and what must remain stable.

---

# Final Status

**✅ Day 10 Completed**

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
* ✅ Day 9 — Type Aliases & Object Typing
* ✅ **Day 10 — Optional & Readonly Properties**

### Next Focus

**Day 11 — Nested Objects**

This will continue Phase 2 — Object Typing and move from flat object models toward more realistic nested data structures. 
