# Day 12 — Learning Log

````md
# 📚 Day 12 — Interfaces

## 📅 Date

September 2026

## 🎯 Today's Goal

Learn how TypeScript interfaces define reusable object contracts and understand how they work with inheritance, optional properties, readonly properties, and declaration merging.

---

## 🧠 Concepts Learned

### 1. What is an Interface?

An interface defines the structure or contract of an object.

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
````

An object typed with `User` must satisfy that structure.

---

### 2. Interface vs Type Alias

Both interfaces and type aliases can describe object structures.

```ts
type User = {
  name: string;
};
```

```ts
interface User {
  name: string;
}
```

Important differences:

```text
interface
→ extends
→ declaration merging

type
→ unions
→ intersections
→ tuples
→ primitives
→ object structures
```

A type alias can also be composed using an intersection:

```ts
type Admin = User & {
  permissions: string[];
};
```

---

### 3. Optional Properties

Interfaces support optional properties using `?`.

```ts
interface User {
  name: string;
  phone?: string;
}
```

The property may be absent.

When accessed, an optional property can be:

```text
string | undefined
```

---

### 4. Readonly Properties

Interfaces can define properties as `readonly`.

```ts
interface User {
  readonly id: number;
  name: string;
}
```

```ts
user.name = "Shadnan"; // ✅
user.id = 2;           // ❌
```

`readonly` prevents reassignment after initialization.

---

### 5. Extending Interfaces

An interface can extend another interface.

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

`Admin` must contain:

```text
id → number
name → string
permissions → string[]
```

`extends` creates a type-level relationship between the interfaces.

---

### 6. Declaration Merging

TypeScript allows multiple interface declarations with the same name to merge.

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

TypeScript treats them as:

```ts
interface User {
  id: number;
  name: string;
}
```

This is called **Declaration Merging**.

---

### 7. Nested Interfaces

Interfaces can be used inside other interfaces.

```ts
interface Product {
  readonly id: number;
  name: string;
}

interface Customer {
  id: number;
  name: string;
}

interface Order {
  readonly id: number;
  customer: Customer;
  product: Product;
  quantity: number;
}
```

This allows complex data to be modeled using reusable structures.

---

## 🧪 Concept Verification

### Q1 — What is an interface?

**My Answer:**

An interface defines the structure or contract of an object. We can use `extends` with other interfaces and it supports declaration merging.

**Result:** ✅ Correct

---

### Q2 — Can an interface define the structure of an object?

**My Answer:**

Yes. Interface is used to define the structure or contract of a product object.

**Result:** ✅ Correct

---

### Q3 — Can only interfaces be extended?

**My Initial Answer:**

We cannot extend the type but we can extend using interface.

**Correction:**

A type alias can also be composed using an intersection.

```ts
type Admin = User & {
  permissions: string[];
};
```

So:

```text
interface → extends
type → intersection (&)
```

**Result:** ⚠️ Corrected

---

### Q4 — What does `extends` do?

**My Answer:**

`extends` creates an inheritance relationship between two interfaces. The new interface gets the structure of the existing interface and can add new properties.

**Result:** ✅ Correct

---

### Q5 — What is declaration merging?

**My Answer:**

When two interfaces have the same name and exist in the same scope, TypeScript automatically combines them into a single type. This is called declaration merging.

**Result:** ✅ Correct

---

# 🧩 Mini Quiz

## Q1 — Interface Basics

```ts
interface User {
  id: number;
  name: string;
}

const user: User = {
  id: 1,
  name: "Ifty"
};
```

What is the TypeScript type of `user`?

A. `object`
B. `User`
C. `any`
D. `string`

### My Answer

A. `object`

### Correct Answer

**B. `User`**

Important distinction:

```text
TypeScript static type:
user → User

JavaScript runtime:
typeof user → "object"
```

**Lesson:** Don't confuse a TypeScript type with JavaScript's runtime `typeof`.

---

## Q2 — Required Property

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}

const product: Product = {
  id: 1,
  name: "Laptop"
};
```

### My Answer

The product object requires a price property with a number value, but it was never declared.

### Correction

`price` was declared in the interface.

The actual problem is that `price` is **missing from the object**.

The interface requires:

```text
id → number
name → string
price → number
```

But the object only provides `id` and `name`.

---

## Q3 — Optional + Readonly

```ts
interface User {
  readonly id: number;
  name: string;
  phone?: string;
}

const user: User = {
  id: 1,
  name: "Ifty"
};

user.name = "Shadnan";
user.phone = "0123456789";
user.id = 2;
```

### My Answer

`id` is readonly and cannot be changed. `phone` is optional and can be `undefined` or `string`, and it can still be reassigned.

### Correct Behavior

```ts
user.name = "Shadnan";       // ✅
user.phone = "0123456789";   // ✅
user.id = 2;                 // ❌
```

---

## Q4 — `extends`

`Admin` extends `User`, so it receives the required structure of `User` and adds its own `permissions` property.

Therefore:

```text
Admin
├── id
├── name
└── permissions
```

### Result

✅ Correct

---

## Q5 — Declaration Merging

```ts
interface Product {
  id: number;
}

interface Product {
  name: string;
}

const product: Product = {
  id: 1
};
```

### Answer

❌ This does not compile.

The two declarations merge:

```ts
interface Product {
  id: number;
  name: string;
}
```

Therefore `name` is required, but the object does not provide it.

---

# 💼 Interview Questions

## Q1 — Why use an interface instead of a type alias?

### My Answer

Because interface has extra features such as `extends` and automatic declaration merging.

### Result

✅ Correct

---

## Q2 — What properties does `Admin` have?

```ts
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```

### My Answer

Admin inherits the structure of User using `extends` and gets the additional `permissions` requirement.

### Result

✅ Correct

---

## Q3 — Explain these properties

```ts
interface Product {
  readonly id: number;
  name: string;
  description?: string;
}
```

### My Answer

`id` is readonly and cannot be changed. `name` is required and mutable. `description` is optional and can be `undefined` or `string`.

### Result

✅ Excellent

---

## Q4 — What is declaration merging?

### My Answer

When multiple interfaces have the same name and exist in the same scope, TypeScript automatically combines them into one type.

### Result

✅ Correct

---

## Q5 — Are interfaces completely different from type aliases?

### My Answer

False. Both interfaces and type aliases can describe object structures.

### Result

✅ Correct

---

# 💻 Practice Problems

## 🟢 Problem 1 — User Profile

```ts
interface UserProfile {
  id: number;
  name: string;
  email: string;
  role: "admin" | "user";
  isActive: boolean;
}

const getUserSummary = (user: UserProfile) => {
  return `Name: ${user.name} | email: ${user.email} | Role: ${user.role} | Active Status: ${user.isActive}`;
};

const user: UserProfile = {
  id: 1,
  name: "Ifty",
  email: "syedshadnanmozammel@gmail.com",
  role: "admin",
  isActive: true
};
```

### Concepts Practiced

* Interface
* Object contracts
* Literal unions
* Typed function parameters

### Result

✅ Completed

---

## 🟡 Problem 2 — Admin Extension

```ts
interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
  permissions: string[];
}

const getAdminPermissions = (admin: Admin) => {
  return admin.permissions;
};

const admin: Admin = {
  id: 1,
  name: "Syed Shadnan Mozammel",
  email: "syedshadnanmozammel@gmail.com",
  permissions: ["edit", "remove", "add"]
};
```

### Concepts Practiced

* `extends`
* Interface inheritance
* Reusable structures
* Typed functions

### Result

✅ Completed

---

## 🟠 Problem 3 — Optional + Readonly

```ts
interface Product {
  readonly id: number;
  name: string;
  price: number;
  description?: string;
  category: "electronics" | "clothing" | "food";
}

const product: Product = {
  id: 1,
  name: "MacBook Air M5",
  price: 170000,
  category: "electronics"
};

product.name = "MacBook Air M5 (16/512)";
product.description = "Powered by M5 Processor";

// product.id = 2; // ❌ readonly
```

### Concepts Practiced

* `readonly`
* Optional properties
* Literal unions
* Mutable properties

### Result

✅ Completed

---

## 🔴 Problem 4 — Declaration Merging

```ts
interface Customer {
  id: number;
  name: string;
}

interface Customer {
  email: string;
  phone?: string;
}

const customer: Customer = {
  id: 1,
  name: "Ifty",
  email: "example@gmail.com"
};
```

### Concepts Practiced

* Declaration merging
* Optional properties
* Interface contracts

### Result

✅ Completed

---

# 🚀 Final Challenge — E-commerce System

```ts
interface Product {
  readonly id: number;
  name: string;
  price: number;
  category: "electronics" | "clothing" | "food";
  stock: number;
}

interface Customer {
  id: number;
  name: string;
  email: string;
  phone?: string;
}

interface Order {
  readonly id: number;
  customer: Customer;
  product: Product;
  quantity: number;
  status: "pending" | "shipped" | "delivered";
}

const getOrderSummary = (order: Order) => {
  return `Customer Name: ${order.customer.name} | Product Name: ${order.product.name} | Quantity: ${order.quantity} | Current Status: ${order.status}`;
};

const product: Product = {
  id: 1,
  name: "samsung a54",
  price: 25000,
  category: "electronics",
  stock: 10
};

const customer: Customer = {
  id: 1,
  name: "Shadnan",
  email: "syedshadnanamozammel@gmail.com"
};

const order: Order = {
  id: 1,
  customer,
  product,
  quantity: 1,
  status: "shipped"
};
```

### Concepts Combined

```text
interface
↓
Object Contracts
↓
Reusable Interfaces
↓
Nested Interfaces
↓
Optional Properties
↓
Readonly Properties
↓
Literal Unions
↓
Type-safe Functions
```

### Result

✅ Completed

---

# 🧠 Important Corrections

## 1. TypeScript Type vs Runtime `typeof`

```text
TypeScript:
user → User

JavaScript:
typeof user → "object"
```

---

## 2. Missing vs Undeclared Property

If the interface contains:

```ts
price: number;
```

but the object doesn't contain `price`, then `price` is:

```text
declared in the type
but missing from the object
```

---

## 3. `extends` Is Type-Level

`extends` creates a relationship between interfaces. It should not be thought of as literally copying properties into a JavaScript object at runtime.

---

## 4. Type Aliases Can Also Be Composed

Do not say:

```text
type cannot be extended
```

Instead remember:

```text
interface → extends
type → intersection (&)
```

---

# 📌 Revision Cheat Sheet

### Interface

Reusable object contract.

```ts
interface User {
  id: number;
  name: string;
}
```

### Optional Property

```ts
phone?: string;
```

May be absent.

### Readonly Property

```ts
readonly id: number;
```

Cannot be reassigned after initialization.

### Extends

```ts
interface Admin extends User {
  permissions: string[];
}
```

Builds a new interface from an existing interface.

### Declaration Merging

Multiple same-name interface declarations are combined.

### Nested Interfaces

An interface can use another interface as a property type.

---

# 📊 Day 12 Assessment

| Area                  |      Score |
| --------------------- | ---------: |
| Concept Understanding |     9.5/10 |
| Coding                |      10/10 |
| Interview             |     9.9/10 |
| Practical Reasoning   |     9.8/10 |
| **Overall**           | **9.8/10** |

---

# ✅ Completion Checklist

* [x] Concept Lesson
* [x] Concept Verification
* [x] Mini Quiz
* [x] Interview Questions
* [x] Practice Problem 1
* [x] Practice Problem 2
* [x] Practice Problem 3
* [x] Practice Problem 4
* [x] Final E-commerce Challenge
* [x] Full Review

---

# 🎯 Final Takeaway

```text
interface
→ reusable object contract

extends
→ build on an existing interface

?
→ optional property

readonly
→ cannot be reassigned

declaration merging
→ same interface declarations combine

nested interfaces
→ reusable structured data models
```

Most important distinction:

```text
TypeScript static type
        ≠
JavaScript runtime typeof
```

## Day 12 Status

**✅ COMPLETED**

Next:

**Day 13 — Continue Phase 2 according to the roadmap.**

```
```
