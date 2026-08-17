## My Answers:

1. By using union type we can specify the types of value. Union type allow us to annotate multiple types for a legitimate value.

This is Better than using (any) Because it allow us to declare possible multiple types for value unlike (any) which allows almost every type for the value. Specifically it removes the protection of typescript.

2. let value: string | number; ==> string and number is allowed here.
value = "Ifty"; ==> valid
value = 25; ==> valid
value = true; ==> Invalid

3. NO. It means the value can be string or number. At any particular moment, the value has one actual runtime type.

4. The function is valid. the parameter of this function has a union type. it allows both string or number.

printValue("hello"); ==> valid
printValue(100); ==> valid
printValue(true); ==> invalid Because the function contract says that only number and string is allowed type.

5. I would choose union type. Because it allows us to specify which types are valid for the value. It gives us more control over our code. 

using (any) means we are losing the protection of typescript. It is simply telling typescript that don't check type of this value ans allow all. this can create problem in development.


Excellent. 🔥 **All 5 answers are correct.** Your understanding of unions is solid, especially your distinction between `union` and `any`.

## 🧠 Concept Verification Review

### Q1 — ✅ 10/10

You correctly identified the core purpose:

> "specify the types of value"

Exactly.

And your `any` comparison is strong:

```ts
let userId: number | string;
```

means:

> "Only `number` or `string` is allowed."

Whereas:

```ts
let userId: any;
```

essentially tells TypeScript to stop protecting you from type-related mistakes.

**Important mental model:**

```text
Union → restrict to known possibilities
any   → remove most type checking
```

---

### Q2 — ✅ 10/10

Perfect:

```ts
let value: string | number;

value = "Ifty"; // ✅
value = 25;     // ✅
value = true;   // ❌
```

You correctly understand that the union defines the **set of allowed types**.

---

### Q3 — ✅ 10/10

This is one of the most important points today:

> "At any particular moment, the value has one actual runtime type."

Exactly.

```ts
let value: string | number = 25;
```

At runtime, `value` is a **number**.

If later:

```ts
value = "Ifty";
```

then it is a **string**.

The union describes the **possible types**, not simultaneous types.

---

### Q4 — ✅ 10/10

Correct.

The function declaration is valid:

```ts
function printValue(value: string | number) {
  console.log(value);
}
```

And:

```ts
printValue("hello"); // ✅
printValue(100);     // ✅
printValue(true);    // ❌
```

Your explanation about the **function contract** is particularly good.

That's exactly how you should start thinking about TypeScript:

> The function signature tells other developers what values the function accepts.

---

### Q5 — ✅ 10/10

Correct choice: **Union type.**

Your reasoning is exactly what we want:

```ts
id: string | number
```

communicates the API's actual contract.

Using:

```ts
id: any
```

throws away useful information.

One refinement:

`any` doesn't literally mean "allow all" in every TypeScript context; more precisely, it **disables normal type checking for that value and allows it to interact with values of other types with very few restrictions**.

That's why `any` can spread uncertainty through a codebase.

---

# 🏆 Concept Verification Score: 10/10

You're ready for the quiz.

But there's one important thing I want you to notice before we continue:

### Union types aren't just about variables.

They become **much more powerful when combined with narrowing**.

For example:

```ts
function process(value: string | number) {
  if (typeof value === "string") {
    // TypeScript knows value is string here
    return value.toUpperCase();
  }

  // TypeScript knows value is number here
  return value * 2;
}
```

We'll test whether you understand this in the quiz.

---
