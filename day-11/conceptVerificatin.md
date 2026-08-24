1. A nested object is simply an object that exists as a property inside another object. 

2. user.address ==>  anonymous object type;
user.address.city ==> string

3. it can be undefined 

4. user.address.city ==> directly checking city inside the address property; 
user.address?.city ==> using optional chaining; if the city is not declared then output will be undefined instead of crushing.

5. It;s a nested object typing; here inside the Order typing id is number; inside the customer property there's another object which property is name: string and address; inside the address property there's another object which property is city: string and country: string;

Excellent. **Concept verification passed.** You understand the core idea of nested objects. A few small precision corrections:

### Q1 — ✅ Correct

Your definition is exactly right:

> A nested object is an object that exists as a property inside another object.

### Q2 — ✅ Correct

```ts
user.address
```

→ an **anonymous object type** containing `city` and `country`.

```ts
user.address.city
```

→ `string`

### Q3 — ✅ Correct

Because:

```ts
address?: {...}
```

means:

```text
address → object | undefined
```

So directly accessing:

```ts
user.address.city
```

is unsafe.

### Q4 — ⚠️ Almost correct

Your main idea is right, but there's one important distinction.

```ts
user.address.city
```

means:

> Access `city` directly, assuming `address` exists.

Whereas:

```ts
user.address?.city
```

means:

> If `address` exists, access `city`; otherwise return `undefined`.

The `?.` is checking the **`address`**, not whether `city` was declared.

For example:

```ts
user.address?.city
```

If `address` is `undefined`:

```text
→ undefined
```

But if `address` exists and `city` is missing, that's a different issue.

### Q5 — ✅ Strong answer

You correctly traced the structure level by level:

```text
Order
│
├── id → number
│
└── customer → object
    │
    ├── name → string
    │
    └── address → object
        ├── city → string
        └── country → string
```

That's exactly the mental model I want you to develop.

---

# 🧪 Day 11 — Mini Quiz

Now let's test whether you can **predict TypeScript's behavior**, not just define nested objects.

### Q1 — Type Analysis

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};

const user: User = {
  name: "Ifty",
  address: {
    city: "Feni",
    country: "Bangladesh"
  }
};
```

What is the type of:

```ts
user.address.country
```

A. `object`
B. `string` ✅
C. `string | undefined`
D. `any`

---

### Q2 — Error Prediction

What's wrong with this?

```ts
type User = {
  name: string;
  address: {
    city: string;
  };
};

const user: User = {
  name: "Ifty",
  address: {
    city: "Feni"
  }
};

console.log(user.address.country);
```

Don't just say "error." Explain **why TypeScript rejects it**.

Ans: Because user.address.country is not exist. we can handle it using optional chaining.
---

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

And explain why.

Ans: is will print undefined. Because at first address was a optional property then it was console.log using optional chaining. so instead of crushing the output will be undefined cause address is not exist in the actual object.

---

### Q4 — Safe Access

Which one is safe?

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

A.

```ts
console.log(user.address.city);
```

B.

```ts
console.log(user.address?.city); ✅
```

C.

```ts
console.log(user.city);
```

Choose the correct answer **and explain why the others aren't valid**.

---

### Q5 — Nested Data Modeling

Create a type called `Student` with:

```text
id → number
name → string
contact → object
    email → string
    phone → optional string
address → object
    city → string
    country → string
```

**Don't create the object yet. Just write the type.**

Take your time and answer all five.

Ans:
type Student = {
    id: number;
    name: string;
    contact: {
        email: string; 
        phone?: string
    }
    address: {
        city: string;
        country: string;
    }
}


Very good. **Day 11 Mini Quiz: passed.** Your understanding is strong, but Q2 has one important conceptual mistake.

### Q1 — ✅ Correct

`user.address.country` is:

**B. `string`**

Because `country` is explicitly defined as:

```ts
country: string;
```

---

### Q2 — ⚠️ Needs correction

Your answer:

> Because `user.address.country` is not exist. we can handle it using optional chaining.

The first part is correct, but **optional chaining is not the solution here**.

The problem is that your type says:

```ts
address: {
  city: string;
};
```

So TypeScript knows that `address` has **only** a `city` property.

Therefore:

```ts
user.address.country
```

is invalid because `country` doesn't exist in the defined type.

Optional chaining:

```ts
user.address?.country
```

would **still be invalid**.

Why? Because `address` itself is required. The problem isn't that `address` might be `undefined`; the problem is that **`country` isn't part of the `address` type at all**.

To make it valid, you would need:

```ts
type User = {
  name: string;
  address: {
    city: string;
    country: string;
  };
};
```

This distinction is important:

```text
Property doesn't exist
        ≠
Property might be undefined
```

---

### Q3 — ✅ Correct

It prints:

```text
undefined
```

Because:

```ts
address?: {
  city: string;
};
```

means:

```text
address → object | undefined
```

And:

```ts
user.address?.city
```

safely checks whether `address` exists.

---

### Q4 — ✅ Correct

**B** is correct:

```ts
console.log(user.address?.city);
```

A is unsafe because `address` is optional:

```ts
user.address
→ object | undefined
```

C is invalid because `city` isn't a direct property of `user`. It's inside `address`.

---

### Q5 — ✅ Correct

Your type is correctly modeled:

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

You correctly combined:

* Nested objects
* Optional nested properties
* Primitive types

---

# 📊 Day 11 Mini Quiz Result

| Question | Result                |
| -------- | --------------------- |
| Q1       | ✅                     |
| Q2       | ⚠️ Concept correction |
| Q3       | ✅                     |
| Q4       | ✅                     |
| Q5       | ✅                     |

**Score: 9.5/10**

Your main thing to reinforce today is:

```text
Missing property
→ Property does not exist in the type

Optional property
→ Property exists in the type
→ but its value may be undefined
```

That's an important distinction, especially when you start working with API response types.

## 🎯 Next: Day 11 Practice

Now you're ready for the coding problems. We'll start with a simple nested object and gradually move toward **multiple levels + optional nested properties**, then finish with a real-world data-modeling challenge.
