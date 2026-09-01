# 🧪 Day 12 — Interfaces: Complete Review
## 1. Day 12 Overview
Day 12 was a catch-up topic in Phase 2 — Object Typing.
### Main Goal
Understand interfaces as reusable object contracts and connect them with:
- Optional Properties
- Readonly Properties
- Literal Unions
- Nested Objects
- Type-safe Functions
## 2. Concept Lesson
### What is an Interface?
An interface defines the structure or contract of an object.
```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```
A `User` object must satisfy that structure:
```ts
const user: User = {
  id: 1,
  name: "Ifty",
  email: "ifty@example.com"
};
```
### Interface vs Type Alias
Both can describe object structures.
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
→ intersections (&)
→ unions (|)
→ tuples
→ primitives
→ and more
```
A type alias can also be composed:
```ts
type Admin = User & {
  permissions: string[];
};
```
An interface can use:
```ts
interface Admin extends User {
  permissions: string[];
}
```
### Optional Properties
```ts
interface Product {
  id: number;
  name: string;
  description?: string;
}
```
An optional property may be absent and can be `string | undefined` when accessed.
### Readonly Properties
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
`readonly id` is required and cannot be reassigned; `name` is required and mutable.
### Extending Interfaces
```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```
`Admin` must satisfy `User` and also contain `permissions`.
```text
User
├── id
└── name

Admin extends User
├── id
├── name
└── permissions
```
`extends` creates a type-level relationship; it does not literally copy properties into JavaScript objects at runtime.
### Multiple Interface Extension
```ts
interface Person {
  name: string;
}

interface Contact {
  email: string;
}

interface User extends Person, Contact {
  id: number;
}
```
`User` must satisfy all three structures.
### Declaration Merging
```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```
TypeScript effectively understands:
```ts
interface User {
  id: number;
  name: string;
}
```
This is called declaration merging.
### Nested Interfaces
Interfaces can be used inside other interfaces:
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
This creates reusable and structured data models.
## 3. Concept Check — Questions & Answers
### Q1. What is an interface?
**Your answer:** Interface defines the structure or contract of an object. We can use extend other interfaces and it supports declaration merging.
**Review:** Correct. An interface defines an object's structure/contract and can extend other interfaces and support declaration merging.
### Q2. Is this valid?
```ts
interface Product {
  id: number;
  name: string;
}

const product: Product = {
  id: 1,
  name: "Laptop"
};
```
**Your answer:** Yes. Because interface is used to define the structure or contract of the product object.
**Review:** Correct. The object satisfies the required structure.
### Q3. Difference between `type` and `interface`
**Your initial answer:** We cannot extend the type but we can extend using interface.
**Correction:** A type alias can also be composed using an intersection:
```ts
type Admin = User & {
  permissions: string[];
};
```
An interface uses:
```ts
interface Admin extends User {
  permissions: string[];
}
```
### Q4. What does `extends` do?
**Your answer:** `extends` creates an inheritance relationship between two interfaces. It brings the User structure into Admin while allowing Admin to add its own properties.
**Review:** Correct as a mental model. Technically, it creates a type-level relationship rather than runtime property copying.
### Q5. What happens with same-name interfaces?
**Your answer:** TypeScript combines them into a single type. This is declaration merging.
**Review:** Correct.
## 4. Mini Quiz — Questions & Answers
### Q1 — Interface Basics
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
**Your answer:** A. `object`
**Correct answer:** B. `User`
Important distinction:
```text
TypeScript type → User
JavaScript runtime typeof → "object"
```
`typeof user` produces `"object"`, but TypeScript knows `user` as `User`.
### Q2 — Required Property
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
**Your answer:** The product object requires a price property with a number value, but it was never declared.
**Correction:** `price` was declared in the interface. The problem is that it is missing from the object.
Correct reasoning: `Product` requires `id`, `name`, and `price`; the object provides only `id` and `name`.
### Q3 — Optional + Readonly
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
**Your answer:** `id` is readonly and cannot be changed; `phone` is optional and can be undefined or string, and can be reassigned.
**Review:** Correct.
```ts
user.name = "Shadnan";       // ✅
user.phone = "0123456789";   // ✅
user.id = 2;                 // ❌
```
### Q4 — `extends`
**Your answer:** `extends` creates an inheritance relationship. Admin gets the User structure and adds `permissions`.
**Review:** Correct. Admin requires `id`, `name`, and `permissions`.
### Q5 — Declaration Merging
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
**Your answer:** The two declarations merge.
**Correct complete answer:** No, it does not compile. After merging, `name` is required:
```ts
interface Product {
  id: number;
  name: string;
}
```
The object is missing `name`.
## 5. Interview Questions — Questions & Answers
### Q1 — Why choose an interface instead of a type alias?
**Your answer:** Interface has extra features like `extends` and automatic declaration merging.
**Review:** Correct. Do not assume interfaces are always better; both have useful roles.
### Q2 — What properties does `Admin` have?
```ts
interface User {
  name: string;
}

interface Admin extends User {
  permissions: string[];
}
```
**Your answer:** Admin inherits User's structure and gets the additional `permissions` requirement.
**Review:** Correct.
### Q3 — Explain `readonly`, mutable, and optional properties.
**Your answer:** `id` is readonly and cannot be changed; `name` is required and mutable; `description` is optional and can be undefined or string.
**Review:** Excellent.
```text
readonly id → required + cannot be reassigned
name → required + mutable
description? → optional + string | undefined when accessed
```
### Q4 — What is declaration merging?
**Your answer:** Same-name interface declarations in the same scope are automatically combined into one type.
**Review:** Correct.
### Q5 — Are interfaces completely different from type aliases?
**Your answer:** False. Both can describe object structures.
**Review:** Correct. Better statement: Both can describe object structures, but they have different capabilities and syntax.
## 6. Practice Problems — Completed
### Problem 1 — User Profile
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
Practiced interface, object contract, literal union, and typed function parameters.
**Score: 10/10**
### Problem 2 — Admin Extension
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
Practiced `extends`, reusable structures, interface inheritance, and typed functions.
**Score: 9.5/10**
### Problem 3 — Optional + Readonly
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
Practiced interface, readonly, optional property, literal union, and mutable properties.
**Score: 10/10**
### Problem 4 — Declaration Merging
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
The two declarations merge into one structure containing `id`, `name`, `email`, and optional `phone`.
**Score: 10/10**
## 7. Final Challenge — E-commerce System
### Solution
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
**Score: 10/10**
## 8. Important Corrections from Today
### TypeScript Type vs Runtime `typeof`
```text
TypeScript:
user → User

JavaScript runtime:
typeof user → "object"
```
### Missing vs Undeclared Property
If `price: number` exists in the interface but the object doesn't contain `price`, the property is declared in the type but missing from the object.
### `extends` and Runtime
`extends` is a type-level relationship; it does not literally copy runtime properties.
### Type Alias Composition
Type aliases can also be composed using intersections:
```ts
type Admin = User & {
  permissions: string[];
};
```
## 9. Revision Cheat Sheet
### Interface
Reusable object contract.
### Optional Property
```ts
phone?: string;
```
May be absent; when accessed can be `string | undefined`.
### Readonly
```ts
readonly id: number;
```
Cannot be reassigned after initialization.
### Extends
```ts
interface Admin extends User {}
```
Builds an interface from an existing interface.
### Declaration Merging
Multiple same-name interface declarations combine.
### Nested Interface
One interface can use another interface as a property type.
## 10. Key Mental Model
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
## 11. Final Assessment
| Area | Score |
|---|---:|
| Concept Understanding | 9.5/10 |
| Coding | 10/10 |
| Interview | 9.9/10 |
| Practical Reasoning | 9.8/10 |
| **Overall** | **9.8/10** |
## 12. Completion Checklist
- [x] Concept Lesson
- [x] Concept Verification
- [x] Mini Quiz
- [x] Interview Questions
- [x] Practice Problem 1
- [x] Practice Problem 2
- [x] Practice Problem 3
- [x] Practice Problem 4
- [x] Final E-commerce Challenge
- [x] Full Review
## 13. Final Takeaway
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
**Day 12 — Interfaces: COMPLETED ✅**
