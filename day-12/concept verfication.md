1. Interface define structure or contract of an object. We can use extend other interfaces and it supports declaration merging.

2. Yes. Because here interface is used to define the structure or contract of product object.

3. we cannot extend the type but we can extend using interface.

4. In this specific code snippet, extends creates an inheritance relationship between two interfaces. It copies all properties from the existing User interface and injects them directly into the new Admin interface, while allowing you to add new properties specific to an admin.

5. Because both interfaces share the exact same name (User) and exist in the same scope, TypeScript automatically combines them into a single type behind the scenes. It's called declaration merging.

Excellent. Your answers show that you understand the **purpose and behavior of interfaces**, not just the syntax.

### Concept Check Review

**Q1 — ✅ Correct**

> Interface defines the structure or contract of an object.

Exactly. And you correctly mentioned the two important features we covered: `extends` and declaration merging.

**Q2 — ✅ Correct**

Yes. `Product` defines the contract, and the object satisfies that contract by providing the required `id` and `name`.

**Q3 — ⚠️ Partially correct**

You said:

> "we cannot extend the type but we can extend using interface."

There's one important correction here.

A **type alias can also be extended**, just not using `interface extends` in the same way.

For example:

```ts
type User = {
  name: string;
};

type Admin = User & {
  permissions: string[];
};
```

So the better distinction is:

```text
interface
→ extends other interfaces with `extends`

type
→ can combine types using intersections (`&`)
```

This distinction will become important later.

**Q4 — ✅ Excellent**

Your explanation of `extends` is accurate.

One small wording improvement: `extends` doesn't literally "copy" properties at runtime. It creates a new type whose required structure includes the properties from `User`.

Think:

```text
User
 ↓ extends
Admin
 ↓
User's structure + Admin's structure
```

**Q5 — ✅ Excellent**

Exactly.

Two declarations with the same interface name are merged into one combined interface.

```ts
interface User {
  id: number;
}

interface User {
  name: string;
}
```

becomes conceptually:

```ts
interface User {
  id: number;
  name: string;
}
```

That's **declaration merging**.

### Your score: **9.5/10**

The only thing to reinforce is:

> **Type aliases can also be composed/extended using intersections (`&`), while interfaces use `extends`.**

You are ready for the **Mini Quiz**.


# 🧪 Day 12 — Mini Quiz

Now let's test whether you can **predict TypeScript's behavior** with interfaces.

### Q1 — Interface Basics

What is the type of `user` here?

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

A. `object`  ✅
B. `User`
C. `any`
D. `string`

Explain your answer.

---

### Q2 — Required Property

What's wrong with this?

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

Don't just say "error."

Explain **what TypeScript expects and what is missing**.

Ans: Here product object required an price property with number value. But It was never declared.

---

### Q3 — Optional + Readonly

Is this valid?

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

Which line causes the error, and why?

Ans: here id was readonly. It cannot be changed or muted. redefining user.id was a wrong approach. again phone as optional property. It can be undefined or string. we can reassign a optional property.
---

### Q4 — `extends`

Consider:

```ts
interface User {
  id: number;
  name: string;
}

interface Admin extends User {
  permissions: string[];
}

const admin: Admin = {
  id: 1,
  name: "Ifty",
  permissions: ["read", "write"]
};
```

Why does `admin` need **all three** properties?

Explain what `extends User` does.

Ans: In this specific code snippet, extends creates an inheritance relationship between two interfaces. It copies all properties from the existing User interface and injects them directly into the new Admin interface, while allowing you to add new properties specific to an admin
---

### Q5 — Declaration Merging

What happens here?

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

Does this compile?

If not, explain **why TypeScript considers `name` required**, even though it wasn't present in the first `Product` declaration.

Ans: Because both interfaces share the exact same name (Product) and exist in the same scope, TypeScript automatically combines them into a single type behind the scenes. It's called declaration merging.
---

Good work. Your understanding is strong, but there are **two important corrections**—especially Q1, because this is a classic TypeScript vs JavaScript distinction.

## Day 12 — Mini Quiz Review

### Q1 — ⚠️ Incorrect

You selected **A. `object`**.

The correct answer is:

**B. `User` ✅**

Because:

```ts
const user: User = {
  id: 1,
  name: "Ifty"
};
```

TypeScript knows the variable `user` has the type **`User`**.

Don't confuse this with JavaScript's runtime behavior:

```ts
typeof user
```

would produce:

```text
"object"
```

So:

```text
TypeScript type → User
JavaScript typeof → "object"
```

This distinction is important.

---

### Q2 — ⚠️ Mostly correct

You said:

> product object required an price property with number value. But It was never declared.

The first part is correct, but the last sentence is not.

`price` **was declared** in the interface:

```ts
interface Product {
  id: number;
  name: string;
  price: number;
}
```

The problem is that the object **doesn't provide it**.

Correct reasoning:

> `Product` requires `id`, `name`, and `price`. The object provides `id` and `name`, but `price` is missing.

---

### Q3 — ✅ Correct

Exactly.

```ts
user.id = 2;
```

causes the error because:

```ts
readonly id: number;
```

means the property cannot be reassigned after the object has been created.

Meanwhile:

```ts
user.name = "Shadnan";       // ✅
user.phone = "0123456789";   // ✅
```

are valid.

And yes, `phone?: string` means the property may be absent, so its effective access type can be:

```text
string | undefined
```

---

### Q4 — ✅ Excellent

Your explanation is correct.

`Admin extends User` means `Admin` must satisfy the structure of `User` **plus** its own properties.

Conceptually:

```text
User
├── id
└── name

Admin extends User
├── id
├── name
└── permissions
```

One small technical refinement: saying "`extends` copies properties" is useful as a mental model, but it doesn't literally copy anything at runtime. It's a **type-level relationship**.

---

### Q5 — ⚠️ Correct explanation, incomplete answer

Your explanation of declaration merging is correct.

But the question first asked:

> Does this compile?

The answer is:

**❌ No.**

TypeScript merges:

```ts
interface Product {
  id: number;
}

interface Product {
  name: string;
}
```

into the equivalent structure:

```ts
interface Product {
  id: number;
  name: string;
}
```

Therefore this is invalid:

```ts
const product: Product = {
  id: 1
};
```

because `name` is required but missing.

---

# Final Assessment

| Area                            |  Score |
| ------------------------------- | -----: |
| Interface fundamentals          | 9.5/10 |
| Required/optional properties    | 9.5/10 |
| Readonly                        |  10/10 |
| `extends`                       |  10/10 |
| Declaration merging             | 9.5/10 |
| TypeScript vs runtime reasoning |   8/10 |

### **Overall: 9.4/10 ⭐**

Your main thing to reinforce today:

```text
TypeScript type
      ≠
JavaScript runtime typeof
```

For example:

```ts
const user: User = {};
```

TypeScript says:

```text
user → User
```

while JavaScript runtime says:

```ts
typeof user
```

→ `"object"`

That's an important distinction as we move toward more advanced TypeScript.

**Next: Interview Questions.**
