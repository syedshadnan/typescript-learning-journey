# 💻 Day 12 — Practice Problems

Today you'll apply Interfaces to the same kind of real-world object modeling you've already been doing.

## 🟢 Problem 1 — User Profile

Create an interface called `UserProfile` with:

```text
id        → number
name      → string
email     → string
role      → "admin" | "user"
isActive  → boolean
```

Then create a `UserProfile` object.

Finally, write a function:

```ts
const getUserSummary = (user: UserProfile) => {
  // return a summary
};
```

The function should return the user's **name, email, role, and active status**.

---

## 🟡 Problem 2 — Admin Extension

Create:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

Then create an `Admin` interface that **extends `User`** and adds:

```text
permissions → string[]
```

Create an admin object and make sure TypeScript requires **all four properties**.

Then write:

```ts
const getAdminPermissions = (admin: Admin) => {
  // return permissions
};
```

---

## 🟠 Problem 3 — Optional + Readonly

Create an interface called `Product`:

```text
readonly id → number
name          → string
price         → number
description?  → string
category      → "electronics" | "clothing" | "food"
```

Then create a product object.

After that, try:

```ts
product.name = "New Product";
product.description = "Updated description";
product.id = 10;
```

**Your goal:** understand which assignments TypeScript accepts and which one it rejects.

---

## 🔴 Problem 4 — Declaration Merging

Create two declarations with the same interface name:

```ts
interface Customer {
  id: number;
  name: string;
}
```

and another:

```ts
interface Customer {
  email: string;
  phone?: string;
}
```

Then create a `Customer` object.

It must contain:

```text
id
name
email
```

but `phone` should be optional.

---

## 🔥 Final Challenge — E-commerce System

Build a small e-commerce model using interfaces.

Create:

```text
Product
Customer
Order
```

### `Product`

```text
readonly id → number
name        → string
price       → number
category    → "electronics" | "clothing" | "food"
stock       → number
```

### `Customer`

```text
id       → number
name     → string
email    → string
phone?   → string
```

### `Order`

`Order` should contain:

```text
readonly id
customer
product
quantity
status
```

where:

```text
customer → Customer
product  → Product
status   → "pending" | "shipped" | "delivered"
```

Then create:

```ts
const getOrderSummary = (order: Order) => {
  // return a readable order summary
};
```

Your summary should include the **order ID, customer name, product name, quantity, and status**.

### 🎯 What I'm looking for

Don't just make the code compile.

Use today's concepts intentionally:

```text
interface
   ↓
object contracts

extends
   ↓
reusable structures

?
   ↓
optional data

readonly
   ↓
protected properties

literal unions
   ↓
restricted values
```

Start with **Problem 1** and send me your code.
