# TypeScript Day 10 — Coding Practice Questions

## 🟢 Problem 1 — User Profile

Create a `UserProfile` type with the following properties:

* `readonly id` → `number`
* `name` → `string`
* `email` → `string`
* `age` → optional `number`
* `role` → `"admin" | "user" | "editor"`
* `isActive` → `boolean`

Then create **one valid `UserProfile` object** using that type.

---

## 🟡 Problem 2 — Product Model

Create a `Product` type with:

* `readonly id` → `number`
* `name` → `string`
* `price` → `number`
* `description` → optional `string`
* `category` → `"electronics" | "clothing" | "food"`
* `stock` → `number`
* `isAvailable` → `boolean`

Then create **two products**:

1. One product **with a description**
2. One product **without a description**

### Function

Create:

```ts
displayProduct(product: Product)
```

The function should return a string containing:

* Product name
* Price
* Category

If the product has a description, include the description as well.

Make sure the output does **not** contain:

```text
Description: undefined
```

---

# 🔴 Final Challenge — User Account System

Create a `UserAccount` type with:

* `readonly id` → `number`
* `userName` → `string`
* `email` → `string`
* `phone` → optional `string`
* `role` → `"admin" | "moderator" | "user"`
* `status` → `"active" | "inactive" | "banned"`
* `balance` → `number`

### Function 1

Create:

```ts
getAccountSummary(account: UserAccount)
```

It should return:

```text
Username: ...
Email: ...
Role: ...
Status: ...
Balance: ...
```

If `phone` exists, include it in the output.

### Function 2

Create:

```ts
updateUsername(account: UserAccount, newUsername: string)
```

The function should:

1. Update the user's username.
2. Return the **updated `UserAccount` object**.
3. The `id` must not be changed.

### Requirements

Your solution should demonstrate:

* Type Alias
* Object typing
* Optional property
* Readonly property
* Literal union
* Type narrowing
* Typed function parameters
* Mutable vs readonly properties

These are the **exact three coding exercises we worked through today**, with the final corrections incorporated into the requirements.
