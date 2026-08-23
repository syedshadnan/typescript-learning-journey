1. An optional property in TypeScript is a property that a user can choose to leave out of an object. It is useful in data modeling.

2. first id is required and mutable. second id is readonly and required. It means it cannot be changed.

3. Because User id created from the database. It should be unique. user should have the ability to change name when needed.

4. TypeScript complains because age is optional (number | undefined), meaning calling .toFixed() directly could cause a runtime error if age is undefined. It can be solved using  optional chaining or if condition.

5. My Data Modeling:
Type AccountStructure = {
    readonly id: number;
    name: string;
    balance: number;
    phone?: number;
    accountType: 'saving' | 'current'
    isActive: boolean;
}

Very good. **Interview round: 4.7/5**. Your reasoning is solid; only a few precision improvements.

### 1. Optional Property — ✅

Good definition:

> A property that can be left out of an object.

And your use case—**data modeling**—is exactly right.

One extra mental model:

```ts
phone?: string;
```

means:

```text
Property may be absent
        ↓
when accessed → string | undefined
```

---

### 2. `readonly` — ✅

Correct.

```ts
id: number;
```

→ required + mutable

```ts
readonly id: number;
```

→ required + cannot be reassigned

---

### 3. User ID vs Name — ✅

Excellent real-world reasoning.

```text
id
→ database identity
→ should remain stable

name
→ user information
→ may legitimately change
```

That's exactly the kind of reasoning I want you to develop rather than simply memorizing `readonly`.

---

### 4. Optional `age` — ✅

Correct.

You identified:

```ts
age?: number
```

as potentially:

```ts
number | undefined
```

and correctly recognized that narrowing is necessary.

You mentioned optional chaining. That's worth refining:

```ts
user.age?.toFixed(2);
```

is safe, but it produces `undefined` when age is absent.

Whereas:

```ts
if (user.age !== undefined) {
  console.log(user.age.toFixed(2));
}
```

lets you explicitly control what happens when age is missing.

So they're both valid, but they solve slightly different needs.

---

### 5. Bank Account — ⚠️ Almost perfect

Your model:

```ts
type AccountStructure = {
  readonly id: number;
  name: string;
  balance: number;
  phone?: number;
  accountType: 'saving' | 'current'
  isActive: boolean;
}
```

Structurally, **excellent**. You correctly used:

* `readonly` → ID
* normal properties → name/balance/status
* optional property → phone
* literal union → account type

Two improvements:

#### A. `phone`

A phone number is generally better modeled as a `string`, not a `number`.

Why?

Phone numbers aren't quantities we calculate with, and they can contain:

```text
+880...
leading zeros
country codes
```

So:

```ts
phone?: string;
```

is more appropriate.

#### B. `"saving"` vs `"savings"`

Your requirement was `"savings"` or `"current"`, so the literal should exactly match:

```ts
accountType: "savings" | "current";
```

This is a small modeling/detail issue, not a conceptual mistake.

### Better version

```ts
type AccountStructure = {
  readonly id: number;
  name: string;
  balance: number;
  phone?: string;
  accountType: "savings" | "current";
  isActive: boolean;
};
```

**Interview score: 4.7/5**

---

