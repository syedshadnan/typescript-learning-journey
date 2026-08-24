# 🧠 Day 11 Review — Nested Objects

## 1. Today's Learning Topic

### Nested Objects

A nested object is an object placed inside another object as a property. It is useful for organizing complex data and modeling real-world structures.

Example:

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

The structure is:

```text
User
├── id → number
├── name → string
└── address → object
    ├── city → string
    └── country → string
```

### Accessing Nested Properties

```ts
user.address.city
```

TypeScript follows the type structure:

```text
user → User
address → nested object
city → string
```

### Optional Nested Objects

```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};
```

Here:

```text
user.address → object | undefined
```

Therefore:

```ts
user.address.city
```

is unsafe because `address` might be `undefined`.

Safe access:

```ts
user.address?.city
```

Optional chaining returns `undefined` when `address` is missing.

### Important Distinction

```text
Optional property
→ property exists in the type
→ value may be undefined

Missing property
→ property does not exist in the type
```

For example:

```ts
address?: {
  city: string;
};
```

means `address` may be undefined.

But:

```ts
user.address.country
```

is invalid if `country` was never defined inside the `address` type.

### Nested Objects + Functions

Nested objects can be used directly in typed function parameters:

```ts
const displayUserLocation = (user: User) => {
  return `${user.name} lives in ${user.address.city}, ${user.address.country}`;
};
```

### Real-World Data Modeling

Nested objects are useful for API responses, user profiles, orders, products, addresses, contact information, and other structured data.

---

## 2. Concept Check

### Q1. What is a nested object?

**Answer:** A nested object is an object that exists as a property inside another object. It is used to organize complex data cleanly and mirror real-world structures, such as putting an address inside a user profile.

### Q2. What are the types of `user.address` and `user.address.city`?

Given:

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

**Answer:**

```text
user.address → anonymous object type
user.address.city → string
```

### Q3. Why is direct access unsafe when `address` is optional?

Given:

```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};
```

**Answer:** Because `address` can be `undefined`. TypeScript therefore requires safe access before accessing `city`.

### Q4. Difference between direct access and optional chaining

```ts
user.address.city
```

directly accesses `city` through `address` and assumes `address` exists.

```ts
user.address?.city
```

uses optional chaining. If `address` is undefined, the expression returns `undefined` instead of throwing a runtime error.

### Q5. Explain a multi-level nested object

Given:

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

**Answer:** `Order` contains an `id` number and a nested `customer` object. The `customer` object contains `name` and another nested `address` object. The `address` object contains `city` and `country`, both strings.

---

## 3. Mini Quiz

### Q1 — Type Analysis

What is the type of `user.address.country`?

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

**Answer:** `string`.

**Reason:** `country` is explicitly defined as `string`.

### Q2 — Error Prediction

Why is this invalid?

```ts
type User = {
  name: string;
  address: {
    city: string;
  };
};

console.log(user.address.country);
```

**Answer:** `country` does not exist in the defined `address` type. Optional chaining would not solve this because the problem is not that `address` might be undefined; the problem is that `country` is not part of the type.

### Q3 — Optional Nested Object

What does this print?

```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = {
  name: "Ifty"
};

console.log(user.address?.city);
```

**Answer:** `undefined`.

**Reason:** `address` is optional and is not present in the actual object. Optional chaining safely returns `undefined`.

### Q4 — Safe Access

Which is safe?

```ts
type User = {
  name: string;
  address?: {
    city: string;
  };
};

const user: User = {
  name: "Ifty"
};
```

**Answer:**

```ts
console.log(user.address?.city);
```

**Reason:** `address` may be undefined, so optional chaining safely handles the missing address. Direct access is unsafe, and `city` is not a direct property of `user`.

### Q5 — Nested Data Modeling

The correct `Student` type is:

```ts
type Student = {
  id: number;
  name: string;
  contact: {
    email: string;
    phone?: string;
  };
  address: {
    city: string;
    country: string;
  };
};
```

**Reason:** It correctly models the nested `contact` and `address` objects and makes only `phone` optional.

**Quiz Result:** 9.5/10

---

## 4. Practice Problems

### 🟢 Problem 1 — User Profile

**Question:** Create a `UserProfile` type with:

```text
id → number
name → string
address → object
    city → string
    country → string
```

Create a user object and:

```ts
displayLocation(user: UserProfile)
```

Return:

```text
Ifty lives in Feni, Bangladesh
```

**Submitted solution:**

```ts
type UserProfile = {
    id: number;
    name: string;
    address: {
        city: string;
        country: string;
    }
}

const displayLocation = (user: UserProfile) => {
    return `${user.name} lives in ${user.address.city}, ${user.address.country}`
}

const userInfo = {
    id: 41,
    name: 'Ifty',
    address: {
        city: 'Feni',
        country: 'Bangladesh'
    }
}

console.log(displayLocation(userInfo));
```

**Review:** Correct. The nested structure, function parameter type, nested property access, and type inference were all handled correctly.

**Score:** 10/10

### 🟡 Problem 2 — Student Contact

**Question:** Create a `Student` type with nested `contact` and `address` objects. `phone` should be optional. Create two students, one with a phone and one without, then create `getStudentContact(student: Student)` that includes the phone only when it exists.

**Submitted solution:**

```ts
type Student = {
    id: number;
    name: string;
    contact: {
        email: string;
        phone?: string;
    }
    address: {
        city: string;
        country: string;
    }
}

const getStudentContact = (student: Student) => {
    if (typeof student.contact.phone !== 'undefined'){
        return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city} | Phone: ${student.contact.phone}`
    }
    return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city}`
}
```

**Review:** Correct. The optional nested property was narrowed using `typeof`, and the output avoids `Phone: undefined`.

**Score:** 10/10

### 🔴 Final Challenge — E-commerce Order

**Question:** Create an `Order` type with:

```text
readonly id → number
customer → object
    name → string
    email → string
shippingAddress → object
    city → string
    country → string
    postalCode → string
product → object
    name → string
    price → number
    quantity → number
```

Then create `getOrderSummary(order: Order)`.

**Submitted solution:**

```ts
type Order = {
    readonly id: number;
    customer: {
        name: string;
        email: string;
    },
    shippingAddress: {
        city: string;
        country?: string;
        postalCode: string;
    },
    product: {
        name: string;
        price: number;
        quantity: number;
    }
}
```

**Review:** Functionally correct, but the challenge originally required `country: string`, while the submitted solution changed it to `country?: string`. That was a requirement deviation, not a TypeScript error. The template literal also contained indentation spaces that become part of the output.

**Score:** 9.5/10

### Coding Result

```text
Problem 1 → 10/10
Problem 2 → 10/10
Final Challenge → 9.5/10
Overall Coding → 9.8/10
```

---

## 5. Interview Questions & Answers

### Q1. What is a nested object in TypeScript, and why would we use one?

**Answer:** A nested object is an object placed inside another object to group related data together. It helps organize complex data cleanly and mirror real-world structures, such as putting an address inside a user profile.

**Score:** 10/10

### Q2. What is the type of `user.address.city`?

**Answer:** `string`. TypeScript follows the type structure from `User` to `address` and then to `city`, where `city` is defined as `string`.

**Score:** 10/10

### Q3. What does an optional nested object mean?

**Answer:** An optional nested object means the property may be missing. TypeScript knows that `user.address` can be either the defined object or `undefined`, so it must be safely checked before accessing its properties.

**Score:** 10/10

### Q4. Why does direct access cause an error when `address` is optional?

**Answer:** Because `user.address` might be undefined, and reading `city` from undefined is unsafe. Optional chaining can safely access it.

**Score:** 10/10

### Q5. Difference between `user.address.city` and `user.address?.city`

**Answer:** `user.address.city` directly accesses `city` and assumes `address` exists. `user.address?.city` checks whether `address` exists first and returns undefined if it does not.

**Score:** 9.5/10

### Q6. Difference between an optional property and a missing property

**Answer:** An optional property exists in the type but may be undefined. A missing property is not defined in the type at all. For example, `address?` means the address may be missing, while `user.address.country` is invalid if `country` was never defined inside the address type.

**Score:** 10/10

### Q7. Why use nested objects for API responses?

**Answer:** Nested objects group related data logically, reduce unnecessary repetition, and represent complex data structures and relationships more cleanly than one large flat object.

**Correction:** Nested objects are not specifically required because of one-to-many relationships; they are generally useful for representing related structured data.

**Score:** 9/10

### Q8. What does TypeScript know about `order.customer.address.city`?

**Answer:** TypeScript verifies every step: `order` is an `Order`, `customer` is a required object, `address` is a required object inside `customer`, and `city` is a required string inside `address`. Therefore `order.customer.address.city` is known to be a `string`, so string methods such as `.toUpperCase()` can be used safely.

**Score:** 10/10

### Bonus — `readonly` vs mutable property

**Answer:** `readonly id: number` is required and cannot be reassigned after initialization. `id: number` is required but can be reassigned.

**Score:** 10/10

### Interview Result

```text
Conceptual Understanding → 9.8/10
Type Reasoning → 10/10
Error Analysis → 9.8/10
Practical Understanding → 9.5/10
Communication → 9.5/10
Overall Interview → 9.7/10
```

---

## 6. Important Corrections from Today

### Correction 1 — Optional Chaining

Optional chaining checks the value before the `?.`, not whether the final property exists in the type.

```ts
user.address?.city
```

means:

```text
If address exists → access city
If address is undefined → return undefined
```

It does not make a nonexistent property valid.

### Correction 2 — Missing Property vs Optional Property

```text
address?: object
→ address may be undefined

address.country
→ invalid if country is not defined in the address type
```

### Correction 3 — Follow Problem Requirements

In the final challenge, `country` was required:

```ts
country: string;
```

The submitted solution changed it to:

```ts
country?: string;
```

That is valid TypeScript but changes the problem's data model.

### Correction 4 — Template Literal Formatting

Indentation inside a template literal becomes part of the output. Keep the template literal formatting clean if the output needs to be clean.

---

## 7. Day 11 Key Takeaways

```text
Nested Object
→ object inside another object

Nested Property Access
→ object.property.property

Optional Nested Object
→ object | undefined

Optional Chaining
→ safely access through a possibly undefined value

Missing Property
→ not defined in the type

Readonly Property
→ cannot be reassigned

Type Narrowing
→ reduce possible types before unsafe access
```

### Most Important Mental Model

```text
Property exists and is required
→ country: string

Property exists but may be undefined
→ country?: string

Property does not exist in the type
→ user.address.country ❌
```

---

## 8. Day 11 Final Assessment

**Concept Understanding — 9.8/10**

**Coding — 9.8/10**

**Interview — 9.7/10**

**Practical Reasoning — 9.7/10**

**Overall — 9.8/10**

---

## 9. Day 11 Status

✅ Concept lesson completed

✅ Concept check completed

✅ Mini quiz completed

✅ Practice problems completed

✅ Interview completed

🎯 Next topic: Day 12 — Interfaces
