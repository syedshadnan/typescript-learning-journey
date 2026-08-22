## Concept verification

1. To make structure of a object and give contract to the properties. It makes the code readable, reusable and maintainable.

2. Reduce the repetition of code and made the more readable, maintainable and reusable.

3. Id was annotated to string but later assign with string.

4. No. Role only can be 'admin' and 'user'. Because union literal type was assigned.

5. Type Alias is not only used to outline the shape or shortcut of object. It makes the code reuseable, readable and maintainable that the real abstraction of real word application


ভালো হয়েছে। তুমি মূল concept ধরতে পেরেছো। এখন একদম precise করে review করি। 👇

## 🧠 Concept Verification Review

### Q1 — Type Alias-এর purpose

তোমার উত্তর:

> "To make structure of a object and give contract to the properties."

**✅ Correct.**

আরও precise করলে:

> A Type Alias gives a reusable name to a type definition and describes the expected structure/contract of a value.

তুমি **readability, reusability, maintainability**—এই তিনটাও ঠিক ধরেছো।

**Score: 1/1**

---

### Q2 — কেন Type Alias ব্যবহার করব?

তোমার উত্তর:

> "Reduce the repetition of code and made the more readable, maintainable and reusable."

**✅ Correct.**

মূল benefit-টাই ধরেছো:

```text
Repeated object structure
        ↓
      Type Alias
        ↓
Reusable type
```

একটা ছোট language correction:

> "It reduces code repetition and makes the code more readable, maintainable, and reusable."

**Score: 1/1**

---

### Q3 — এখানে error হবে?

তোমার উত্তর:

> "Id was annotated to string but later assign with string."

এখানে **একটা important mistake হয়েছে।** ⚠️

Code ছিল:

```ts
type Student = {
  id: number;
  name: string;
};

const student: Student = {
  id: "101",
  name: "Ifty"
};
```

তুমি বলেছো `id` string হিসেবে annotated এবং পরে string assigned হয়েছে।

কিন্তু আসলে:

```ts
id: number;
```

এবং আমরা দিচ্ছি:

```ts
id: "101";
```

অর্থাৎ:

```text
Expected → number
Received → string
```

তাই **TypeScript error হবে।**

এটা একটা ছোট mistake, কিন্তু খুব important—কারণ Object Typing-এর core idea হচ্ছে **contract অনুযায়ী data দেওয়া।**

**Score: 0.5/1**

---

### Q4 — Literal Union

তোমার উত্তর:

> "No. Role only can be 'admin' and 'user'. Because union literal type was assigned."

**✅ Correct.**

```ts
type Role = "admin" | "user";
```

মানে:

```text
Role = "admin" OR "user"
```

`"editor"` allowed নয়।

আর তুমি ঠিকই বুঝেছো যে এটা **literal union type**।

**Score: 1/1**

---

### Q5 — Type Alias কি শুধু shortcut?

তোমার উত্তর:

> "Type Alias is not only used to outline the shape or shortcut of object. It makes the code reuseable, readable and maintainable that the real abstraction of real word application"

**🟢 Conceptually correct.**

তুমি important distinction ধরেছো:

```text
Type Alias
≠ শুধু object লেখার shortcut

Type Alias
→ reusable abstraction
→ readable code
→ maintainable code
→ consistent data structure
```

আর real-world application-এ একই `User`, `Product`, `Student`, `Order` structure বিভিন্ন function/component/API layer-এ ব্যবহার করা যায়।

শুধু একটা terminology improvement:

> "real abstraction of real world application"

এর বদলে বললে আরও professional শোনাবে:

> **Type aliases help us model real-world entities as reusable, consistent types.**

**Score: 1/1**

---

# 📊 Concept Verification Score

**4.5 / 5**

খুব ভালো। সবচেয়ে গুরুত্বপূর্ণ বিষয় হলো **Q3-এর ভুলটা conceptual gap-এর চেয়ে reading/attention mistake** বেশি।

তবে আমি এটাকে ignore করব না—কারণ production code-এ:

```ts
id: number
```

আর

```ts
id: "101"
```

এর distinction খুব গুরুত্বপূর্ণ।

---

# 🔥 One-Minute Reinforcement

এই তিনটা জিনিস আলাদা করে মনে রাখো:

```ts
type User = {
  id: number;
};
```

এটা **type contract**।

```ts
const user: User = {
  id: 101
};
```

এটা সেই contract follow করা **actual value/object**।

আর:

```ts
id: "101"
```

দিলে contract ভাঙবে।

### Mental model:

```text
Type Alias
    ↓
Defines the contract

Object
    ↓
Must follow the contract
```

এটা আজকের সবচেয়ে important idea।

---

## 🧪 Step 3 — Mini Quiz
1. C. { name: string; age: number; active: boolean }

2. price was contracted with number but assigned with string

3. eta error hobe na, cause let reassign kora jay

4. C. Reusable type contract তৈরি করে

5. hobe na. cause object er moddher property mutable. jodi as const use kore tahole readonly kora jabe.

6. eta ekta array of object chilo; tahole type declare korar somoy Product[] evabe korle hoto.

দারুণ। এবার answer review করি—এখানে তোমার **একটা গুরুত্বপূর্ণ correction** আছে।

### Q1

**C — Correct ✅**

Object literal-এর inferred type হবে:

```ts
{
  name: string;
  age: number;
  active: boolean;
}
```

**1/1**

### Q2

**Correct ✅**

`price` contract অনুযায়ী `number`, কিন্তু দেওয়া হয়েছে `string`:

```ts
price: number;
price: "50000"; // ❌
```

**1/1**

### Q3

এখানে তোমার answer **ভুল ❌**

তুমি বলেছো:

> `let` reassign করা যায়, তাই error হবে না।

`let` reassign করা যায়—এটা ঠিক। কিন্তু `let` **যেকোনো value accept করে না**।

```ts
type Status = "pending" | "approved" | "rejected";

let status: Status = "pending";

status = "completed"; // ❌
```

কারণ `status`-এর type হলো:

```text
"pending" | "approved" | "rejected"
```

`"completed"` এই union-এর মধ্যে নেই।

**Important distinction:**

```text
let
→ variable reassignment allowed

Type
→ কোন values assign করা যাবে তা নির্ধারণ করে
```

**0/1**

---

### Q4

**C — Correct ✅**

Type Alias-এর অন্যতম প্রধান benefit হলো **reusable type contract** তৈরি করা।

**1/1**

---

### Q5

**Correct ✅**

```ts
user.role = "user";
```

valid, কারণ `role`-এর type:

```ts
"admin" | "user"
```

এবং `"user"` সেই union-এর member।

`as const` দিলে property readonly হয়ে যেত।

**1/1**

---

### Q6

**Correct ✅**

তুমি ঠিক ধরেছো—এটা `Product` object নয়, বরং **Product objects-এর array**।

তাই:

```ts
const products: Product[] = [
  {
    id: 1,
    name: "Laptop"
  },
  {
    id: 2,
    name: "Phone"
  }
];
```

এটাই সঠিক।

**1/1**

---

# 📊 Quiz Score: **5/6**

খুব ভালো। কিন্তু Q3-এর mistake-টা **আজকের জন্য important**।

তুমি এখানে `let` আর **type restriction**-কে একসাথে ধরে ফেলেছিলে।

এই mental model-টা মনে রাখো:

```text
let
↓
Can the variable be reassigned?

Type
↓
What values can be assigned?

Both rules apply simultaneously.
```

উদাহরণ:

```ts
let status: "active" | "inactive" = "active";

status = "inactive"; // ✅
status = "banned";   // ❌
```

`let` থাকার কারণে reassignment allowed, কিন্তু **যেকোনো value allowed নয়**।

---




