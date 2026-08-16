# 🎤 Day 5 — Interview Round

### Q1 — Beginner

**What is the difference between an optional parameter and a default parameter in TypeScript?**

Give a practical example of when you would choose each.

---
Ans: optional parameter can be omitted and default parameter assign the default value if no argument is passed.

optional parameter: simply if the parameter is optional and there's no logical problem in the expression we can use It. For instance, We can Use it in a user registration form. We can make some fields optional like age or marital status etc. But we Have to deal with undefined in these case.

Default parameter: If the function strictly require with or without the users involvement then we can use default parameter. For instance, pizza burg gives a default discount if the customer is newly added in the database or bank charging a default amount of income tax on behalf of government if no tax return is provided.
---

### Q2 — Beginner → Intermediate

Consider:

```ts
function greet(name?: string) {
  console.log(name);
}
```

What is the type of `name` **inside the function**?

Explain why.

---
Ans: Conceptually (name?: string) means (name: string | undefined). Because the optional parameter assign undefined if the value is not passed in the argument.
---

### Q3 — Intermediate

Consider:

```ts
function calculatePrice(
  price: number,
  discount: number = 10
) {
  return price - (price * discount) / 100;
}
```

Why is `discount` allowed to be omitted when calling the function even though we wrote:

```ts
discount: number
```

instead of:

```ts
discount?: number
```

---
Ans: Because the discount parameter has a default value. Making it a optional parameter is illogical because it is required to do the math operation properly in the return expression.
---

### Q4 — Practical

You're building a search function:

```ts
function searchUsers(
  query: string,
  limit: number = 20
) {
  // search users
}
```

A developer calls:

```ts
searchUsers("Ifty");
```

and another calls:

```ts
searchUsers("Ifty", 50);
```

Explain what happens in both cases and **why a default parameter is useful here**.

---
Ans:searchUsers("Ifty") automatically uses 20 because you didn't give it a number, while searchUsers("Ifty", 50) changes that number to 50. This trick is helpful because it saves you from writing extra code to check for missing numbers, and it stops the function from loading too many users at once.
---

### Q5 — Interview Challenge 🔥

Consider:

```ts
function createUser(
  name: string,
  age?: number,
  country: string = "Bangladesh"
) {
  console.log(name, age, country);
}
```

Is this function declaration valid?

If yes, explain why.

Then predict the output of:

```ts
createUser("Ifty");
```

and:

```ts
createUser("Ifty", 25, "Japan");
```

---
Ans: Yes, this is valid. You can put a default value (country = "Bangladesh") after an optional parameter (age?). TypeScript is completely fine with this because both parameters can be left blank when you call the function.

1. Ifty undefined Bangladesh
2. Ifty 25 Japan

---

Very good. Your answers show that you've moved beyond syntax and are thinking about **why a developer would choose one over the other**. Let's review carefully.

## 🎤 Interview Review — Day 5

### Q1 — ✅ 9/10

Your core definition is correct:

> Optional → may be omitted, potentially resulting in `undefined`.

> Default → fallback value is used when the argument is omitted/`undefined`.

Your registration-form example is a good use case for optional parameters.

One refinement: your default-parameter examples are conceptually possible, but I'd use something closer to programming practice:

```ts
function calculateTax(income: number, rate: number = 10) {
  return income * rate / 100;
}
```

Here, `rate` has a sensible application default but can still be overridden.

---

### Q2 — ✅ 10/10

Exactly.

```ts
name?: string
```

means that inside the function, `name` can be:

```ts
string | undefined
```

because the caller is allowed to omit it.

This is an important TypeScript concept. Keep it.

---

### Q3 — ⚠️ 7/10

Your conclusion is right, but the reasoning needs correction.

You said:

> "Making it an optional parameter is illogical because it is required to do the math operation properly."

That's **not the reason**.

The actual reason is:

```ts
discount: number = 10
```

provides a **default value of `10`** when the caller doesn't provide a value.

So:

```ts
calculatePrice(100);
```

effectively behaves as though:

```ts
discount = 10;
```

was supplied.

The function therefore **does have a discount value** to perform the calculation.

Compare:

```ts
discount?: number
```

Now the function could receive:

```ts
number | undefined
```

and you'd potentially need to handle that.

### The key idea:

**Default parameter = optional from the caller's perspective + fallback value inside the function.**

---

### Q4 — ✅ 9/10

Excellent.

```ts
searchUsers("Ifty");
```

→ `limit` becomes `20`.

```ts
searchUsers("Ifty", 50);
```

→ `limit` becomes `50`.

And your point about preventing excessive results is a realistic reason for having a default limit.

One subtle distinction:

> The default parameter doesn't itself prevent the function from loading too many users.

It establishes a sensible default **limit**. The function's implementation must actually enforce that limit.

---

### Q5 — ✅ 9/10

Correct declaration:

```ts
function createUser(
  name: string,
  age?: number,
  country: string = "Bangladesh"
) {}
```

is valid.

And your outputs are correct:

```text
Ifty undefined Bangladesh
Ifty 25 Japan
```

One wording correction:

You said:

> "both parameters can be left blank"

Not quite.

`name` **cannot** be omitted:

```ts
createUser(); // ❌
```

But `age` and `country` can effectively be omitted:

```ts
createUser("Ifty"); // ✅
```

because:

* `age` is optional
* `country` has a default value

---

# 🏆 Interview Score: 8.8/10

Your strongest skill today is understanding the relationship:

```text
Optional parameter
       ↓
string | undefined
       ↓
developer may need to handle undefined
```

and:

```text
Default parameter
       ↓
argument may be omitted
       ↓
fallback value is supplied
       ↓
predictable function behavior
```

### One misconception to eliminate

Don't think:

> "Default parameters are used because the parameter is mathematically required."

Think:

> **"Default parameters are used when the function has a sensible fallback behavior."**

That's a much more useful software-engineering way of thinking.
---