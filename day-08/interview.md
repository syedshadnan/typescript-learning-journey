Very good. তুমি এখন **syntax না, reasoning দিয়ে answer** করতে পারছো। তবে আজ আমি ইচ্ছা করেই কয়েকটা জায়গায় তোমাকে challenge করব, কারণ interview-level precision এখান থেকেই তৈরি হয়।

# 🎤 Day 8 Interview Review

## 1. What is Type Inference?

তোমার answer:

> TypeScript implicitly determine the type of value by analyzing the initial value.

✅ **Correct.**

আরও polished version:

> Type inference is TypeScript's ability to automatically determine a value's type from the available information, such as its initial value or context.

তোমার মূল ধারণা ঠিক।

**Score: 1/1**

---

## 2. Why `let age = 25` → `number`, but `const age = 25` → `25`?

তোমার answer:

> because let allows to reassign a value and Variables declared with const cannot be reassigned.

✅ Correct, but **incomplete**.

তুমি কারণের first half ধরেছো। আসল chain:

```text
let
↓
can be reassigned
↓
TypeScript widens the literal
↓
25 → number
```

অন্যদিকে:

```text
const
↓
cannot be reassigned
↓
TypeScript can preserve the exact literal
↓
25 → 25
```

So the important concept is **literal widening**.

**Score: 0.8/1**

---

## 3. Normal object vs `as const`

তোমার answer:

> first user's property is mutable and 2nd user's property is readonly.

✅ Correct.

কিন্তু তুমি বলেছো:

> this is call type assertion.

⚠️ এখানে terminology একটু refine করতে হবে।

`as const` technically a **const assertion**।

এটা সাধারণ `type assertion` হিসেবে শুধু মনে রাখলে পরে confusion হতে পারে।

আর `as const` দুটি গুরুত্বপূর্ণ effect দেয়:

```text
literal type preservation
+
readonly properties
```

So:

```ts
const user = {
  role: "admin"
} as const;
```

এখানে:

```text
user.role → "admin"
```

এবং property readonly।

**Score: 0.8/1**

---

# 4. Does `const` make an object immutable?

তোমার answer:

> no. using just const don't make the whole object immutable.

🔥 **Exactly.**

```ts
const user = {
  role: "admin"
};

user.role = "editor"; // ✅
```

কিন্তু:

```ts
user = {}; // ❌
```

তাই:

```text
const
→ variable binding cannot be reassigned

as const
→ readonly type + literal preservation
```

তোমার explanation এখানে strong ছিল।

**Score: 1/1**

---

# 5. React Button — Why literal union?

তোমার answer:

> The union type catches typos early and gives you autocomplete for exact design system colors. It stops layout bugs by blocking random text strings.

🔥 **Strong practical answer.**

তবে একটা correction:

`variant` এখানে **design system colors** না—এটা button **variants** হিসেবে `primary`, `secondary`, `danger` represent করছে।

আর সবচেয়ে important benefit:

```ts
variant: string;
```

মানে:

```ts
<Button variant="primary" />
<Button variant="danger" />
<Button variant="banana" />
<Button variant="whatever" />
```

সব compile হতে পারে।

কিন্তু:

```ts
variant: "primary" | "secondary" | "danger";
```

মানে শুধু predefined valid states allowed।

এতে:

* Typos ধরা পড়ে
* IDE autocomplete দেয়
* Invalid component configuration prevent হয়
* Refactoring safer হয়
* Component API predictable হয়

এটা React-এর জন্য খুব useful pattern। তোমার mentor instructions-ও TypeScript concepts-এর React relevance highlight করতে বলে। 

**Score: 0.95/1**

---

# 🏆 Interview Score: 4.55/5 → 9.1/10

এটা strong performance।

### তোমার strongest areas

* Type inference বুঝেছো
* Literal widening বুঝেছো
* `const` vs `let` বুঝেছো
* `const` object ≠ immutable object বুঝেছো
* `as const`-এর practical purpose বুঝেছো
* Literal unions-এর real-world benefit বুঝেছো

### এখন যে precisionগুলো ঠিক করতে হবে

**1. Literal value vs type**

Don't say:

> `age` এর type `25`

when:

```ts
let age = 25;
```

Say:

> `age` is inferred as `number`.

---

**2. `as const` terminology**

Prefer:

> **const assertion**

rather than simply calling it a type assertion.

---

**3. Literal union-এর purpose**

Don't reduce it to "typo prevention."

Think:

```text
finite valid states
        ↓
type-safe API
        ↓
better autocomplete
        ↓
fewer invalid states
        ↓
safer refactoring
```

---

