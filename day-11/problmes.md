# Day 11 — Nested Objects: Today's Problems

## 🟢 Problem 1 — User Profile

Create a `UserProfile` type:

* `id` → `number`
* `name` → `string`
* `address` → object

  * `city` → `string`
  * `country` → `string`

Create a user object and a function:

```ts
displayLocation(user: UserProfile)
```

It should return:

```text
Ifty lives in Feni, Bangladesh
```

---

## 🟡 Problem 2 — Student Contact

Create a `Student` type:

* `id` → `number`
* `name` → `string`
* `contact` → object

  * `email` → `string`
  * `phone` → optional `string`
* `address` → object

  * `city` → `string`
  * `country` → `string`

Create **two students**:

1. One with a phone number
2. One without a phone number

Create:

```ts
getStudentContact(student: Student)
```

The function should return:

* Name
* Email
* City
* Phone only if it exists

Do not output:

```text
Phone: undefined
```

---

## 🔴 Final Challenge — E-commerce Order

Create an `Order` type:

* `readonly id` → `number`
* `customer` → object

  * `name` → `string`
  * `email` → `string`
* `shippingAddress` → object

  * `city` → `string`
  * `country` → `string`
  * `postalCode` → `string`
* `product` → object

  * `name` → `string`
  * `price` → `number`
  * `quantity` → `number`

Create one valid order.

Then create:

```ts
getOrderSummary(order: Order)
```

It should return:

```text
Order ID: 101
Customer: Ifty
Email: ifty@example.com
Product: MacBook Air
Price: 160000
Quantity: 1
Shipping: Feni, Bangladesh
Postal Code: 3900
```

### Requirements

Your solution must demonstrate:

* Type Alias
* Nested Objects
* Multiple levels of nesting
* `readonly`
* Function parameter typing
* Nested property access
* Type-safe data modeling

**These are today's 3 coding problems.**
