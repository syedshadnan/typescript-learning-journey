## 🔥 এখন Coding Practice

এখন আমরা actual code লিখব। আমি সরাসরি solution দেব না।

### Problem 1 — User Model

একটা `User` Type Alias তৈরি করো যার properties হবে:

* `id` → number
* `name` → string
* `email` → string
* `role` → `"admin" | "user"`
* `isActive` → boolean

তারপর একটা valid `user` object তৈরি করো।

---

### Problem 2 — Product Model

একটা `Product` Type Alias তৈরি করো:

* `id` → number
* `name` → string
* `price` → number
* `category` → `"electronics" | "clothing" | "food"`

তারপর একটা `createProduct()` function বানাও যেটা `Product` accept করবে এবং product-এর name ও price return করবে।

---

### 🔥 Challenge — Order Model

একটা `Order` Type Alias তৈরি করো:

```text
id       → number
customer → string
status   → "pending" | "processing" | "shipped" | "delivered"
payment  → "cash" | "card" | "bkash"
total    → number
```

তারপর:

```ts
createOrder(order: Order)
```

function বানাবে।

Function-এর কাজ:

```text
Order #101
Customer: Ifty
Status: processing
Payment: bkash
Total: 1500
```

এরকম একটা formatted string return করা।