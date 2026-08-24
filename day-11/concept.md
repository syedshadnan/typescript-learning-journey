> **Day 11 = Nested Objects**
> **Interfaces = after Nested Objects as the catch-up topic.**

So today we will **not study Interfaces yet**.

# 🟢 Day 11 — Nested Objects

## 1. What Are Nested Objects?

So far, we've mostly worked with **flat objects**:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

Every property is directly inside the object.

But real applications rarely have data this simple.

For example, a user may have an address:

```ts
const user = {
  id: 1,
  name: "Ifty",
  address: {
    city: "Feni",
    country: "Bangladesh"
  }
};
```

Here:

```text
user
│
├── id
├── name
└── address
    ├── city
    └── country
```

The `address` object is **nested inside** the `user` object.

---

# 2. Typing a Nested Object

We need to tell TypeScript about the structure at every level.

```ts
type User = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

Now TypeScript knows:

```text
user.id
→ number

user.name
→ string

user.address
→ object

user.address.city
→ string

user.address.country
→ string
```

Example:

```ts
const user: User = {
  id: 1,
  name: "Ifty",
  address: {
    city: "Feni",
    country: "Bangladesh"
  }
};
```

---

# 3. Accessing Nested Properties

You access nested properties using the normal dot notation:

```ts
console.log(user.address.city);
```

TypeScript understands that:

```ts
user.address
```

is an object containing:

```ts
city: string;
country: string;
```

So:

```ts
user.address.city
```

is safely known to be a `string`.

---

# 4. Why Nested Objects Matter

This is where TypeScript starts becoming much more useful for **real application data modeling**.

Consider an e-commerce product.

A flat structure might look like:

```ts
type Product = {
  name: string;
  price: number;
  category: string;
};
```

But real product data might contain:

```text
Product
│
├── id
├── name
├── price
├── category
│   ├── id
│   └── name
│
└── seller
    ├── id
    ├── name
    └── email
```

TypeScript allows us to model that structure accurately.

---

# 5. Nested Objects with Type Aliases

You can define the nested structure directly:

```ts
type Product = {
  id: number;
  name: string;
  price: number;
  seller: {
    id: number;
    name: string;
    email: string;
  };
};
```

Then:

```ts
const product: Product = {
  id: 1,
  name: "MacBook Air",
  price: 160000,
  seller: {
    id: 101,
    name: "Apple Store",
    email: "store@example.com"
  }
};
```

Now TypeScript protects the entire structure.

For example:

```ts
product.seller.name
```

is:

```text
string
```

while:

```ts
product.seller.id
```

is:

```text
number
```

---

# 6. Nested Objects Can Go Deeper

Nested objects don't have to stop at one level.

Example:

```ts
type Company = {
  name: string;
  address: {
    country: string;
    city: string;
    office: {
      building: string;
      floor: number;
    };
  };
};
```

Now:

```ts
company.address.office.floor
```

is valid.

The structure is:

```text
Company
│
├── name
│
└── address
    │
    ├── country
    ├── city
    │
    └── office
        ├── building
        └── floor
```

But there's an important practical point:

**Just because you can nest objects deeply doesn't mean you should.**

Overly deep structures can become difficult to read and maintain.

---

# 7. Nested Objects + Optional Properties

This connects directly to what you learned yesterday.

Suppose the address is optional:

```ts
type User = {
  id: number;
  name: string;
  address?: {
    city: string;
    country: string;
  };
};
```

Now this is potentially unsafe:

```ts
console.log(user.address.city);
```

Why?

Because:

```text
user.address
→ object | undefined
```

So TypeScript cannot guarantee that `.city` exists.

You can narrow it:

```ts
if (user.address !== undefined) {
  console.log(user.address.city);
}
```

This is directly connected to yesterday's lesson:

```text
Optional Property
        ↓
possibly undefined
        ↓
Type Narrowing
        ↓
safe access
```

---

# 8. Optional Chaining

You can also use optional chaining:

```ts
console.log(user.address?.city);
```

If `address` exists:

```text
"Feni"
```

If it doesn't:

```text
undefined
```

This is particularly useful when dealing with API data.

---

# 9. Nested Objects + Functions

You can also pass nested objects into functions.

```ts
type User = {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
};

const displayUserLocation = (user: User) => {
  return `${user.name} lives in ${user.address.city}, ${user.address.country}`;
};
```

The function knows exactly what structure it receives.

This is the same **type contract** idea you learned on Day 9, just with a more complex structure.

---

# 10. Real-World Example — API Data

Imagine an API returns:

```ts
const user = {
  id: 1,
  name: "Ifty",
  contact: {
    email: "example@gmail.com",
    phone: "01700000000"
  },
  address: {
    city: "Feni",
    country: "Bangladesh"
  }
};
```

A type could model this as:

```ts
type User = {
  id: number;
  name: string;
  contact: {
    email: string;
    phone: string;
  };
  address: {
    city: string;
    country: string;
  };
};
```

Now TypeScript understands the entire API-shaped structure.

This is one reason object typing becomes increasingly important as applications become more complex.

---

# 🧠 Important Mental Model

Think of nested objects like **folders**.

```text
user
 ↓
address
 ↓
city
```

Each level has its own type.

So:

```ts
user.address.city
```

means:

```text
user
→ must have address

address
→ must have city

city
→ must be a string
```

TypeScript checks the whole path.

---

# ⚠️ Common Mistake

Don't confuse:

```ts
type User = {
  address: {
    city: string;
  };
};
```

with:

```ts
type User = {
  address: string;
};
```

In the first:

```ts
user.address.city
```

is valid.

In the second:

```ts
user.address.city
```

is invalid because `address` is a string.

---

# 🎯 Today's Learning Target

By the end of Day 11, you should be able to look at something like:

```ts
type Order = {
  id: number;
  customer: {
    name: string;
    contact: {
      email: string;
      phone?: string;
    };
  };
  product: {
    name: string;
    price: number;
  };
};
```

and explain exactly what TypeScript knows about:

```ts
order.customer.name
order.customer.contact.email
order.customer.contact.phone
order.product.price
```

without guessing.

---

## Before We Practice

Don't start coding yet.

First, answer these **5 concept-check questions in your own words**:

### Q1

What is a nested object?

### Q2

In this type:

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

What is the type of:

```ts
user.address
```

and what is the type of:

```ts
user.address.city
```

### Q3

Why is this potentially unsafe?

```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};

console.log(user.address.city);
```

### Q4

What is the difference between:

```ts
user.address.city
```

and:

```ts
user.address?.city
```

### Q5

Explain this structure in your own words:

```ts
type Order = {
  id: number;
  customer: {
    name: string;
    address: {
      city: string;
      country: string;
    };
  };
};
```

**Answer these first.** Then I'll check your understanding and move you to the Day 11 mini-quiz.
