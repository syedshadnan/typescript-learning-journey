1. Because interface has some extra features like we can use extend and it marge the same declaration automatically.

2. Here Admin was inherited the structure of User by extend. and it got another requirement permissions.

3. here id is readonly means it cannot be mutated or changed; name is required and mutable; description is optional property means it can be undefined or string.

4. When both interfaces share the exact same name and exist in the same scope, TypeScript automatically combines them into a single type behind the scenes. It's called declaration merging.

5. It's false. Both interface and type aliases can describe the object structure. They are not completely different.

Very good. Your answers are concise and technically sound. Let's review them carefully.

### Q1 — ✅ Correct

You identified the two important differences we covered:

* `interface` supports `extends`
* Interfaces support **declaration merging**

That's exactly what you needed to mention.

One refinement: don't say interfaces are always "better." Both `type` and `interface` are useful; the choice depends on what you're modeling.

### Q2 — ✅ Correct

Exactly.

```ts
interface Admin extends User {
  permissions: string[];
}
```

means `Admin` has:

```text
name: string
permissions: string[]
```

You correctly understood that `Admin` inherits the structure of `User` and adds its own requirement.

### Q3 — ✅ Correct

Perfect distinction:

```text
readonly id
→ required + cannot be reassigned

name
→ required + mutable

description?
→ optional
→ string | undefined when accessed
```

### Q4 — ✅ Correct

Your explanation of declaration merging is accurate.

The important result is:

```ts
interface User {
  id: number;
  name: string;
}
```

after TypeScript merges the two declarations.

### Q5 — ✅ Correct

Exactly.

The statement is **false**.

A better statement would be:

> **Both interfaces and type aliases can describe object structures, but they have different capabilities and syntax.**

For example:

```ts
interface User {
  name: string;
}
```

and:

```ts
type User = {
  name: string;
};
```

can describe essentially the same object shape.

---

## 🎤 Interview Assessment

| Skill                       |      Score |
| --------------------------- | ---------: |
| Interface fundamentals      |      10/10 |
| `extends`                   |      10/10 |
| Optional & readonly         |      10/10 |
| Declaration merging         |      10/10 |
| Interface vs type reasoning |     9.5/10 |
| **Overall**                 | **9.9/10** |

### One thing I want you to remember

Don't memorize:

> `interface = object`, `type = everything else`

Instead remember:

```text
Both can model objects.

interface
→ extends
→ declaration merging

type
→ intersections (&)
→ unions (|)
→ tuples
→ primitives
→ and more
```

You have a strong understanding of today's topic.

**Next step: Practice Problems.**
