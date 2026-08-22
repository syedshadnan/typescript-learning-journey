চলো, **Day 9 শুরু করি.** 🚀

আমি আজকের session শুরু করার আগে updated project sources review করেছি। তোমার Day 8 **Phase 1 complete** করেছে, এবং roadmap অনুযায়ী এখন **Phase 2 — Object Typing** শুরু হচ্ছে। Day 8-এর exact next focus-ও ছিল **Type Aliases → Structured Object Models → Deeper Object Typing → Interfaces-এর preparation**।  

# 🟦 Day 9 — Object Typing: Type Aliases

### আজকের লক্ষ্য

আজ আমরা শিখব:

1. **Type Alias কী**
2. কেন Type Alias দরকার
3. Object-এর জন্য reusable type তৈরি করা
4. Type Alias কীভাবে code duplication কমায়
5. Literal unions + Type Alias
6. Type Alias দিয়ে function parameter typing
7. Real-world data modeling
8. শেষে **Concept Verification → Quiz → Interview → Practice**

আজ **Interfaces-এ যাব না**। আগে Type Alias ভালোভাবে বুঝব, কারণ roadmap-এ Object Typing-এর প্রথম building block হিসেবে এটিই দেওয়া আছে। 

---

# 1. আগে একটা সমস্যা দেখি

ধরো আমাদের application-এ user আছে।

আমরা একটা function লিখলাম:

```ts
const createUser = (user: {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
}) => {
  return user;
};
```

এখন আরেকটা function:

```ts
const updateUser = (user: {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
}) => {
  return user;
};
```

দেখো, একই object structure **দুই জায়গায় repeat** করছি।

আর project বড় হলে?

```text
createUser()
updateUser()
deleteUser()
getUser()
sendUserData()
```

অনেক জায়গায় একই structure লিখতে হবে।

এটা maintain করা inconvenient।

এখানেই **Type Alias** useful.

---

# 2. Type Alias কী?

Type Alias হলো কোনো type-এর জন্য **নিজের একটি reusable নাম তৈরি করা**।

Syntax:

```ts
type User = {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
};
```

এখন `User` নিজেই একটা type।

তাই:

```ts
const createUser = (user: User) => {
  return user;
};
```

এবং:

```ts
const updateUser = (user: User) => {
  return user;
};
```

এখন structure repeat করতে হচ্ছে না।

### Mental Model

```text
type User = {...}
       ↓
Reusable type definition
       ↓
Use User anywhere
```

---

# 3. Type Alias কেন দরকার?

মূলত **reusability + readability + maintainability**।

Compare করো:

### Without Type Alias

```ts
const createUser = (user: {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
}) => {};
```

### With Type Alias

```ts
type User = {
  name: string;
  age: number;
  role: "admin" | "editor" | "user";
};

const createUser = (user: User) => {};
```

দ্বিতীয়টা অনেক easier to understand।

Function signature দেখেই বোঝা যাচ্ছে:

```ts
user: User
```

মানে function একটা `User` object expect করছে।

---

# 4. Type Alias শুধু object-এর জন্য না

আজ আমরা object-এর ওপর focus করছি, কিন্তু মনে রাখবে `type` শুধু object type-এর জন্য ব্যবহার হয় না।

যেমন:

```ts
type UserId = string | number;
```

এখন:

```ts
let id: UserId;

id = 101;
id = "user-101";
```

দুটোই valid।

---

# 5. Literal Union + Type Alias

Day 7-এ আমরা literal unions শিখেছি।

আজ সেটাকে reusable করছি।

Instead of:

```ts
const createUser = (
  name: string,
  role: "admin" | "editor" | "user"
) => {};
```

আমরা করতে পারি:

```ts
type Role = "admin" | "editor" | "user";

const createUser = (
  name: string,
  role: Role
) => {};
```

এখন `Role` একটা reusable type।

আরও interesting ব্যাপার:

```ts
type Role = "admin" | "editor" | "user";
type Status = "active" | "inactive";
```

তারপর:

```ts
type User = {
  name: string;
  age: number;
  role: Role;
  status: Status;
};
```

এটা real-world data modeling-এর দিকে আমাদের নিয়ে যাচ্ছে।

---

# 6. Real-world Example

ধরো আমরা একটা student management application বানাচ্ছি।

আমাদের student-এর:

* name
* age
* department
* student ID
* active status

আছে।

আমরা লিখতে পারি:

```ts
type Student = {
  id: number;
  name: string;
  age: number;
  department: string;
  isActive: boolean;
};
```

এখন:

```ts
const student: Student = {
  id: 101,
  name: "Ifty",
  age: 25,
  department: "Political Science",
  isActive: true
};
```

TypeScript এখন ensure করবে যে `student` object অবশ্যই `Student` structure follow করবে।

---

# 7. ভুল data দিলে কী হবে?

```ts
const student: Student = {
  id: "101",
  name: "Ifty",
  age: 25,
  department: "Political Science",
  isActive: true
};
```

এখানে:

```ts
id: "101"
```

একটা string।

কিন্তু `Student` বলছে:

```ts
id: number;
```

তাই TypeScript error দেবে।

এটাই object typing-এর মূল value:

> **আমরা শুধু object-এর shape define করছি না; আমরা সেই shape-এর contract-ও define করছি।**

---

# 8. Type Alias + Function

Type Alias সবচেয়ে useful হয় যখন একই data বিভিন্ন function-এ ব্যবহার করতে হয়।

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};
```

তারপর:

```ts
const createProduct = (product: Product) => {
  return product;
};

const updateProduct = (product: Product) => {
  return product;
};

const displayProduct = (product: Product) => {
  return `${product.name} - ${product.price}`;
};
```

একটা type definition:

```ts
Product
```

অনেক জায়গায় reusable।

---

# 9. React-এ কেন গুরুত্বপূর্ণ?

তুমি এখনো React শুরু করোনি, কিন্তু এখান থেকেই future connection তৈরি হচ্ছে।

React component-এর props-কে আমরা later এভাবে type করতে পারব:

```ts
type UserProps = {
  name: string;
  age: number;
};
```

তারপর component:

```ts
function UserCard(props: UserProps) {
  return <h2>{props.name}</h2>;
}
```

অর্থাৎ আজকের **Type Alias + Object Typing** পরে React-এর **Props Typing**-এ সরাসরি কাজে লাগবে।

Mentor instructions-ও current TypeScript concepts-এর React relevance highlight করতে বলেছে। 

---

# 🧠 আজকের সবচেয়ে গুরুত্বপূর্ণ mental model

এটা মনে রাখো:

```text
Object
   ↓
has a shape

Type Alias
   ↓
gives that shape a reusable name

Example:

type User = {
   name: string;
   age: number;
};
```

তারপর:

```text
User
 ↓
createUser()
updateUser()
deleteUser()
UserCard
API data
```

একই structure বিভিন্ন জায়গায় ব্যবহার করা যায়।

---

# ⚠️ Common Mistakes

### Mistake 1 — `type` আর variable এক মনে করা

```ts
type User = {
  name: string;
};
```

এখানে `User` কোনো runtime object না।

এটা **TypeScript type-level definition**।

---

### Mistake 2 — Type Alias object তৈরি করে

না।

```ts
type User = {
  name: string;
};
```

এটা object তৈরি করছে না।

এটা শুধু বলে:

> যদি কোনো value `User` type-এর হয়, তাহলে তার এই structure থাকতে হবে।

---

### Mistake 3 — Type Alias মানেই readonly

না।

```ts
type User = {
  name: string;
};
```

এরপর:

```ts
const user: User = {
  name: "Ifty"
};

user.name = "Alex";
```

এটা valid।

Readonly আমরা পরে আলাদাভাবে শিখব—Phase 2-এর roadmap-এ সেটা আছে। 

---

# 🧪 Step 2 — Concept Verification

এখন আমি **answer দেব না**। আগে তুমি নিজের ভাষায় answer দাও।

### Q1

এই code-এর উদ্দেশ্য কী?

```ts
type User = {
  name: string;
  age: number;
};
```

---

### Q2

এখানে Type Alias ব্যবহার করার সুবিধা কী?

```ts
type Product = {
  id: number;
  name: string;
  price: number;
};

const createProduct = (product: Product) => {};
const updateProduct = (product: Product) => {};
```

---

### Q3

এই code-এ error হবে কি?

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

**হলে কেন?**

---

### Q4

এটা কি valid?

```ts
type Role = "admin" | "user";

const role: Role = "editor";
```

কেন?

---

### Q5 — সবচেয়ে গুরুত্বপূর্ণ

নিজের ভাষায় explain করো:

> **Type Alias কেন শুধু object-এর shape লেখার shortcut না, বরং real application-এ useful abstraction?**

৫টা answer একসাথে দাও।

তারপর আমি তোমার উত্তর **review করব**, যেখানে ভুল থাকলে আগে hint দেব—তারপরই **Mini Quiz**-এ যাব।
