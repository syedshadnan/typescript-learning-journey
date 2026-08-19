# 🎤 Day 7 — Interview Round

Now let's see whether you can explain today's topic like a developer in an interview.

### Beginner

**Q1.** What is a literal type in TypeScript?

And: Literal types are the specific, exact value the acts as a type in typescript.

**Q2.** What is the difference between:

```ts
string
```

and:

```ts
"admin" | "user"
```
Ans: first one is generic type. It can accept any string value. the second one is literal type. It restrict a variable to a strict set of choices.

### Intermediate

**Q3.** What is literal widening?

Ans: Literal widening is the process where typescript automatically converts a strict, specific literal type into a broader, generic type.

**Q4.** Why does this:

```ts
let role = "admin";
```

usually infer `string`, while:

```ts
const role = "admin";
```

infers `"admin"`?

and: let signals that the value can change, so TypeScript widens the type to string to allow future reassignments. const guarantees the value can never change, so TypeScript safely keeps it locked as the strict literal type "admin".

### Practical

**Q5.** What is `as const`? Give me **two things** it does.

Ans: as const is a feature called a const assertion that treats an entire expression as deeply read only and immutable. with as const types are kept as strict literals ('admin', 10), object properties become readonly and array become immutable, fixed-size tuples.

**Q6.** What's the difference between:

```ts
const user = {
  role: "admin"
};
```

and:

```ts
const user = {
  role: "admin"
} as const;
```

and: without as const typescript widens the property type to a general category. user.role is inferred as string. with as cont typescript locks the property to its exact literal value. user.role is inferred as the strict literal 'admin'

Excellent. **This was a very strong interview round — 9.7/10.** 🔥

You clearly understand the concepts rather than just remembering syntax.

### Q1 — Literal Type ✅

Your definition:

> "specific, exact value that acts as a type"

That's correct.

A slightly more interview-ready version would be:

> **A literal type is a type that represents one specific value, such as `"admin"`, `10`, or `true`.**

---

### Q2 — `string` vs `"admin" | "user"` ✅

Perfect.

```ts
string
```

→ any string.

```ts
"admin" | "user"
```

→ only those two exact values.

Your phrase **"strict set of choices"** is a very good way to explain it.

---

### Q3 — Literal Widening ✅

Correct.

You understood the transition:

```text
"admin"
   ↓ widening
string
```

The important point is that TypeScript can replace a specific literal type with its broader primitive type when the context allows reassignment.

---

### Q4 — `let` vs `const` ✅

Excellent reasoning.

```ts
let role = "admin";
```

→ `string`

because reassignment is possible.

```ts
const role = "admin";
```

→ `"admin"`

because the binding cannot be reassigned.

One tiny technical refinement: `const` doesn't mean TypeScript "locks" the value in every context—especially with objects. We already saw:

```ts
const user = {
  role: "admin"
};

user.role = "editor"; // ✅
```

The **binding** is constant, not necessarily the object's properties.

---

### Q5 — `as const` ✅

Very strong answer.

You identified the important effects:

1. **Preserves literal types**
2. **Makes object properties readonly**
3. **Turns arrays into readonly tuples**

For example:

```ts
const config = {
  role: "admin",
  version: 1
} as const;
```

Conceptually:

```ts
{
  readonly role: "admin";
  readonly version: 1;
}
```

And:

```ts
const roles = ["admin", "user"] as const;
```

becomes a readonly tuple:

```ts
readonly ["admin", "user"]
```

### One correction

You called it **"deeply immutable."**

For TypeScript terminology, I'd avoid saying `as const` makes something *runtime immutable*. It creates **readonly types at compile time**; it does not perform a JavaScript runtime freeze.

That's an important professional distinction.

---

### Q6 — Object with vs without `as const` ✅

Correct.

Without:

```ts
const user = {
  role: "admin"
};
```

TypeScript generally infers:

```ts
user.role: string
```

With:

```ts
const user = {
  role: "admin"
} as const;
```

it infers:

```ts
user.role: "admin"
```

and the property becomes readonly.

---

# 🏆 Day 7 Interview Result

**9.7/10**

### Strong areas

* Literal types ✅
* Literal unions ✅
* Literal widening ✅
* `let` vs `const` inference ✅
* `as const` ✅
* Object property widening ✅
* Compile-time vs runtime distinction ✅

### One thing to keep sharpening

Remember this three-level distinction:

```text
const
↓
variable binding cannot be reassigned

as const
↓
literal types preserved
+ readonly properties/elements

Object.freeze()
↓
runtime freezing mechanism
```

Don't merge those three concepts.

---

