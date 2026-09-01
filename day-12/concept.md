# Day 12 — Interfaces

Today is a **catch-up day**. Your source explicitly places **Interfaces inside Phase 2 — Object Typing**, alongside Type Aliases, Readonly, Optional Properties, and Nested Objects. 

You've already learned Type Aliases and object modeling, so today we'll build on that rather than treating Interfaces as an isolated syntax feature.

## 1. What is an Interface?

An **interface defines the structure/contract of an object**.

Example:

```ts
interface User {
  id: number;
  name: string;
  email: string;
}
```

This means a `User` object must have:

```text
id    → number
name  → string
email → string
```

Then:

```ts
const user: User = {
  id: 1,
  name: "Ifty",
  email: "ifty@example.com"
};
```

Think of it as:

```text
interface
   ↓
object structure / contract
   ↓
object must follow that structure
```

This is very similar to what you already did with:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

So the important question is:

**Why do we need `interface` if `type` can already describe an object?**

That's what we're going to understand today.

---

## 2. Interface vs Type Alias — First Look

You already know:

```ts
type User = {
  id: number;
  name: string;
};
```

An equivalent interface is:

```ts
interface User {
  id: number;
  name: string;
}
```

Both can be used like this:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};
```

So don't make the beginner mistake of thinking:

> "`interface` is for objects and `type` is not."

That's false.

**Both can describe object shapes.**

The difference becomes more interesting when we study features such as **extension and declaration merging**.

---

## 3. Interface Syntax

Basic structure:

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

Optional properties work exactly in the familiar way:

```ts
interface Product {
  id: number;
  name: string;
  description?: string;
}
```

So:

```ts
const product: Product = {
  id: 1,
  name: "Keyboard"
};
```

is valid.

And:

```ts
product.description
```

can be:

```text
string | undefined
```

This connects directly to your Day 10 knowledge.

---

## 4. Readonly with Interfaces

You can also use `readonly`:

```ts
interface User {
  readonly id: number;
  name: string;
}
```

Then:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};

user.name = "Ifty Mozammel"; // ✅

user.id = 2; // ❌
```

Again, this connects directly to Day 10.

The interface isn't introducing a completely new concept here.

It's giving you **another way to define the object contract**.

---

## 5. Nested Objects with Interfaces

You can also model the nested structures you learned yesterday:

```ts
interface User {
  id: number;
  name: string;
  address: {
    city: string;
    country: string;
  };
}
```

Then:

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

And:

```ts
user.address.city
```

is:

```text
string
```

So Interfaces build directly on your previous object-typing knowledge.

---

# 6. Extending Interfaces

This is one of the important reasons interfaces are useful.

Suppose:

```ts
interface User {
  id: number;
  name: string;
}
```

You can create another interface that extends it:

```ts
interface Admin extends User {
  permissions: string[];
}
```

Now `Admin` contains:

```text
id
name
permissions
```

So:

```ts
const admin: Admin = {
  id: 1,
  name: "Ifty",
  permissions: ["read", "write", "delete"]
};
```

Mental model:

```text
User
 ├── id
 └── name

      ↓ extends

Admin
 ├── id
 ├── name
 └── permissions
```

This is called **interface inheritance/extension**.

---

# 7. Multiple Interfaces

An interface can extend multiple interfaces:

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

Therefore:

```ts
const user: User = {
  id: 1,
  name: "Ifty",
  email: "ifty@example.com"
};
```

The resulting contract combines all three structures.

---

# 8. Declaration Merging

This is another important interface feature.

You can declare the same interface more than once:

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

TypeScript merges them.

So `User` becomes effectively:

```ts
interface User {
  id: number;
  name: string;
}
```

Therefore:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};
```

This is called **declaration merging**.

This is one reason interfaces are particularly useful in some TypeScript/library ecosystems.

---

# 9. Important Mental Model

Don't memorize:

```text
type = objects
interface = objects
```

Instead:

```text
type
→ can describe many kinds of types

interface
→ primarily describes object contracts
→ can extend other interfaces
→ supports declaration merging
```

And because you've already learned Type Aliases:

```text
Type Alias
→ reusable type definition

Interface
→ reusable object contract
```

There is overlap, but they are **not identical features**.

---

# Concept Check 🧠

Answer these in your own words before we move to the quiz.

### Q1

What is an interface in TypeScript?

### Q2

Is this valid?

```ts
interface Product {
  id: number;
  name: string;
}
```

```ts
const product: Product = {
  id: 1,
  name: "Laptop"
};
```

Why?

### Q3

What's the difference between these two at a basic level?

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

### Q4

What does `extends` do here?

```ts
interface Admin extends User {
  permissions: string[];
}
```

### Q5

What happens here?

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

Don't rush into the quiz yet. **Answer these five first.**
