1. In first one status type is string. It will accept any string and in the second one will only accept specified string. It gives more control and create much stronger contact.

2. role = "admin"; and role = "user"; is valid. Because the role variable is declared with specific strings.

3. this is better because it gives much stronger contact and safer development environment.

Excellent. **3/3 correct.** 🔥

Your explanations show that you understand the *reason* behind literal types, not just the syntax.

### Review

**1. Correct ✅**

Exactly. You identified the key difference:

```ts
string
```

→ any string

```ts
"pending" | "shipped" | "delivered"
```

→ only the explicitly allowed values.

Your phrase **"stronger contract"** is especially important. That's exactly how you should start thinking about TypeScript.

**2. Correct ✅**

```ts
role = "admin";  // ✅
role = "user";   // ✅
role = "editor"; // ❌
role = "ADMIN";  // ❌
```

Because TypeScript compares the **exact literal value**. `"admin"` and `"ADMIN"` are different values.

**3. Correct ✅**

The important idea is:

> Literal types prevent invalid values before they enter the function.

So this:

```ts
function setRole(role: "admin" | "user") {}
```

doesn't merely document what the function expects—it makes TypeScript **enforce the rule**.

---

## 🧠 One refinement

You said:

> "safer development environment"

That's true, but in an interview I'd make it more precise:

> **Literal types restrict values to a predefined set, allowing TypeScript to catch invalid states and incorrect arguments at compile time.**

That's a stronger technical answer.

---