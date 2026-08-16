# TypeScript Day 5 — Complete Revision & Review

## Topic

**Optional Parameters & Default Parameters**

Day 5 focused on making TypeScript functions more flexible while keeping their behavior predictable.

---

# 1. Optional Parameters

An optional parameter is a function parameter that the caller does not have to provide.

Syntax:

```ts
function greet(name?: string) {
  // ...
}
```

The `?` makes the parameter optional.

For example:

```ts
function greet(name?: string) {
  console.log(name);
}

greet("Ifty");
greet();
```

Both calls are valid.

When the argument is omitted:

```ts
greet();
```

`name` becomes:

```ts
undefined
```

Conceptually:

```ts
name?: string
```

can be understood as:

```ts
name: string | undefined
```

This means the developer may need to handle the possibility of `undefined`.

---

# 2. Default Parameters

A default parameter provides a fallback value when the caller does not provide an argument.

Syntax:

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}
```

Now:

```ts
greet();
```

produces:

```text
Hello Guest
```

while:

```ts
greet("Ifty");
```

produces:

```text
Hello Ifty
```

The important idea:

> A default parameter allows the caller to omit the argument while providing the function with a fallback value.

---

# 3. Optional vs Default Parameters

## Optional parameter

```ts
function greet(name?: string) {
  // ...
}
```

If omitted:

```ts
name === undefined
```

Conceptually:

```ts
string | undefined
```

The developer may need to handle the missing value.

---

## Default parameter

```ts
function greet(name: string = "Guest") {
  // ...
}
```

If omitted:

```ts
name === "Guest"
```

The function receives a predictable fallback value.

---

## Quick Comparison

| Feature                        | Optional               | Default                   |
| ------------------------------ | ---------------------- | ------------------------- |
| Syntax                         | `name?: string`        | `name: string = "Guest"`  |
| Can omit argument?             | Yes                    | Yes                       |
| Value when omitted             | `undefined`            | Default value             |
| May need `undefined` handling? | Yes                    | Usually no                |
| Main purpose                   | Make argument optional | Provide fallback behavior |

### Mental model

```text
Optional
→ may be omitted
→ may become undefined
→ developer handles undefined when necessary
```

```text
Default
→ may be omitted
→ fallback value is supplied
→ predictable behavior
```

---

# 4. Why Use Optional Parameters?

Use an optional parameter when the value genuinely may or may not exist.

Example:

```ts
function createUser(
  name: string,
  age?: number
) {
  // ...
}
```

A user-registration system might allow a user to provide their age but not require it.

Calling:

```ts
createUser("Ifty");
```

is valid.

Inside the function:

```ts
age
```

may be:

```ts
number | undefined
```

The function must decide what to do with the missing value.

---

# 5. Why Use Default Parameters?

Use a default parameter when there is a sensible fallback behavior.

Example:

```ts
function calculatePrice(
  price: number,
  tax: number = 15
) {
  return price + (price * tax) / 100;
}
```

Calling:

```ts
calculatePrice(100);
```

uses:

```ts
tax = 15
```

Calling:

```ts
calculatePrice(100, 20);
```

overrides the default:

```ts
tax = 20
```

This avoids unnecessary fallback logic inside the function.

---

# 6. Parameter Ordering

A required parameter should not come after an optional parameter.

For example:

```ts
function test(name?: string, age: number) {}
```

is invalid because `age` is required while `name` is optional.

A better arrangement is:

```ts
function test(age: number, name?: string) {}
```

Now:

```ts
test(25);
test(25, "Ifty");
```

both make sense.

---

# 7. Important Exception: Default Parameters

A parameter with a default value is considered optional from the caller's perspective.

Therefore this is valid:

```ts
function createUser(
  name?: string,
  age: number = 18
) {
  // ...
}
```

Both parameters can effectively be omitted:

```ts
createUser();
```

and:

```ts
createUser("Ifty");
```

The key distinction is:

```ts
name?: string
```

means:

> The parameter may be omitted and becomes `undefined`.

Whereas:

```ts
age: number = 18
```

means:

> The parameter may be omitted and `18` is used as the fallback.

---

# 8. Explicit `undefined` with Default Parameters

A useful detail:

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}
```

This:

```ts
greet(undefined);
```

uses the default value.

Output:

```text
Hello Guest
```

So the default value is used when the argument is omitted or when `undefined` is passed.

---

# 9. Truthiness vs `undefined`

This was the main subtle issue encountered during Day 5.

Consider:

```ts
function createProfile(
  name: string,
  age?: number
) {
  if (age) {
    return `${name} is ${age} years old`;
  }

  return `${name} has no age`;
}
```

This checks **truthiness**.

It does not specifically check whether `age` is `undefined`.

For example:

```ts
createProfile("Ifty", 0);
```

`0` is falsy, so the `if` block won't execute.

If the requirement is specifically to check whether the optional value exists, use:

```ts
if (age !== undefined) {
  // ...
}
```

### Difference

```ts
if (age)
```

means:

> Is `age` truthy?

while:

```ts
if (age !== undefined)
```

means:

> Is `age` specifically not `undefined`?

This distinction becomes increasingly important as we learn type narrowing.

---

# 10. React Connection

Optional and default values are common in reusable React components and configuration.

For example:

```ts
type ButtonConfig = {
  text: string;
  size?: "small" | "medium" | "large";
};
```

A caller could provide:

```ts
const button: ButtonConfig = {
  text: "Submit"
};
```

The `size` property is optional.

The component can then provide sensible fallback behavior internally.

The broader principle is:

> TypeScript defines what callers are allowed to provide; application logic defines what happens when something is omitted.

---

# 🧠 CONCEPT VERIFICATION — QUESTIONS & ANSWERS

## Q1. What's the difference between an optional parameter and a default parameter?

### Answer

An optional parameter can be omitted and may become `undefined`.

```ts
name?: string
```

Conceptually:

```ts
string | undefined
```

A default parameter can also be omitted, but the function receives a fallback value.

```ts
name: string = "Guest"
```

Example:

```ts
function greet(name?: string) {
  // name may be undefined
}
```

versus:

```ts
function greet(name: string = "Guest") {
  // name receives "Guest" if omitted
}
```

---

## Q2. What will `name` contain here?

```ts
function greet(name?: string) {
  console.log(name);
}

greet();
```

### Answer

```text
undefined
```

Because:

```ts
name?: string
```

allows the argument to be omitted.

Conceptually:

```ts
string | undefined
```

---

## Q3. Is this valid?

```ts
function test(name?: string, age: number) {}
```

### Answer

No.

A required parameter cannot follow an optional parameter.

`name` is optional, but `age` is required.

A valid version would be:

```ts
function test(age: number, name?: string) {}
```

---

## Q4. What is the output?

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}

console.log(greet());
console.log(greet("Ifty"));
```

### Answer

```text
Hello Guest
Hello Ifty
```

The first call uses the default.

The second call overrides the default.

---

## Q5. Why might a default parameter be better for `limit`?

Given:

```ts
function searchProducts(
  query: string,
  limit: number = 10
) {}
```

### Answer

A default parameter provides a sensible fallback automatically.

If:

```ts
searchProducts("laptop");
```

is called, `limit` becomes `10`.

This avoids manually checking for a missing value inside the function and creates predictable behavior.

---

# 🧪 MINI QUIZ — QUESTIONS & ANSWERS

## Q1. Output Prediction

```ts
function greet(name?: string) {
  if (name) {
    return `Hello ${name}`;
  }

  return "Hello Guest";
}

console.log(greet());
console.log(greet("Ifty"));
```

### Answer

```text
Hello Guest
Hello Ifty
```

When no name is supplied, `name` is `undefined`, so the `if` condition is false.

When `"Ifty"` is supplied, the condition is true.

---

## Q2. Output Prediction

```ts
function calculate(
  price: number,
  discount: number = 10
) {
  return price - (price * discount) / 100;
}

console.log(calculate(100));
console.log(calculate(100, 20));
```

### Answer

First:

```ts
calculate(100)
```

uses the default discount:

```ts
10%
```

Result:

```text
90
```

Second:

```ts
calculate(100, 20)
```

uses:

```ts
20%
```

Result:

```text
80
```

Final output:

```text
90
80
```

---

## Q3. Error Detection

```ts
function createUser(
  name: string,
  age?: number,
  city?: string
) {
  // ...
}
```

### Answer

This is valid TypeScript.

`name` is required.

`age` and `city` are optional.

Valid calls include:

```ts
createUser("Ifty");
```

```ts
createUser("Ifty", 25);
```

```ts
createUser("Ifty", 25, "Dhaka");
```

Inside the function:

```ts
age
```

can be:

```ts
number | undefined
```

and:

```ts
city
```

can be:

```ts
string | undefined
```

Whether the function needs to handle those values is a separate issue from whether the declaration itself is valid.

---

## Q4. Error Detection

```ts
function createUser(
  name?: string,
  age: number = 18
) {
  // ...
}
```

### Answer

This is **valid**.

Why?

Because `age` has a default value and is therefore optional from the caller's perspective.

Valid:

```ts
createUser();
```

Valid:

```ts
createUser("Ifty");
```

Valid:

```ts
createUser("Ifty", 25);
```

---

## Q5. What happens here?

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}

console.log(greet(undefined));
```

### Answer

**C. `Hello Guest`**

Passing `undefined` causes the default value to be used.

Therefore:

```ts
name === "Guest"
```

and the output is:

```text
Hello Guest
```

---

# 🎤 INTERVIEW QUESTIONS — QUESTIONS & ANSWERS

## Q1. What is the difference between an optional parameter and a default parameter?

### Answer

An optional parameter can be omitted and may become `undefined`.

```ts
name?: string
```

A default parameter can also be omitted but provides a fallback value.

```ts
name: string = "Guest"
```

Use an optional parameter when the value genuinely may not exist.

Use a default parameter when there is a sensible fallback behavior.

---

## Q2. What is the type of `name` inside this function?

```ts
function greet(name?: string) {
  console.log(name);
}
```

### Answer

Conceptually:

```ts
string | undefined
```

The parameter is optional, so the caller can omit it.

If omitted, its runtime value is `undefined`.

---

## Q3. Why can this parameter be omitted?

```ts
function calculatePrice(
  price: number,
  discount: number = 10
) {
  return price - (price * discount) / 100;
}
```

### Answer

Because `discount` has a default value.

If the caller doesn't provide it:

```ts
calculatePrice(100);
```

TypeScript allows the call and the function uses:

```ts
discount = 10
```

A default parameter is optional from the caller's perspective.

---

## Q4. Why is a default parameter useful in a search function?

```ts
function searchUsers(
  query: string,
  limit: number = 20
) {}
```

### Answer

Calling:

```ts
searchUsers("Ifty");
```

uses:

```ts
limit = 20
```

Calling:

```ts
searchUsers("Ifty", 50);
```

overrides the default:

```ts
limit = 50
```

This provides predictable behavior and avoids additional fallback logic.

---

## Q5. Is this valid?

```ts
function createUser(
  name: string,
  age?: number,
  country: string = "Bangladesh"
) {
  console.log(name, age, country);
}
```

### Answer

Yes.

`name` is required.

`age` is optional.

`country` has a default value and is therefore optional from the caller's perspective.

Therefore:

```ts
createUser("Ifty");
```

outputs:

```text
Ifty undefined Bangladesh
```

And:

```ts
createUser("Ifty", 25, "Japan");
```

outputs:

```text
Ifty 25 Japan
```

---

# 💻 PRACTICE PROBLEMS — SOLUTIONS

## Problem 1 — Optional Parameter

### Requirement

Create `greetUser()` that:

* Accepts an optional `name`
* Returns `"Hello, Guest"` when no name is provided
* Returns `"Hello, Ifty"` when `"Ifty"` is provided
* Uses an optional parameter, not a default parameter

### Solution

```ts
const greetUser = (name?: string) => {
  if (name) {
    return `Hello ${name}`;
  }

  return "Hello Guest";
};
```

Example:

```ts
console.log(greetUser());
console.log(greetUser("Ifty"));
```

Output:

```text
Hello Guest
Hello Ifty
```

A more precise existence check could be:

```ts
const greetUser = (name?: string) => {
  if (name !== undefined) {
    return `Hello ${name}`;
  }

  return "Hello Guest";
};
```

---

# Problem 2 — Default Parameter

### Requirement

Create:

```ts
calculateTotal(price, tax)
```

with:

* Required `price: number`
* Default `tax: number = 15`
* Return final price after tax

### Solution

```ts
const calculateTotal = (
  price: number,
  tax: number = 15
) => {
  return price + (price * tax) / 100;
};
```

Examples:

```ts
calculateTotal(100);
```

Output:

```text
115
```

And:

```ts
calculateTotal(100, 20);
```

Output:

```text
120
```

---

# Problem 3 — Optional + Default

### Requirement

Create:

```ts
createProfile(name, age, country)
```

with:

* `name` → required `string`
* `age` → optional `number`
* `country` → default `"Bangladesh"`

### Solution

```ts
const createProfile = (
  name: string,
  age?: number,
  country: string = "Bangladesh"
) => {
  if (age !== undefined) {
    return `${name} is ${age} years old from ${country}`;
  }

  return `${name} is from ${country}`;
};
```

Examples:

```ts
createProfile("Ifty");
```

Result:

```text
Ifty is from Bangladesh
```

```ts
createProfile("Ifty", 25);
```

Result:

```text
Ifty is 25 years old from Bangladesh
```

```ts
createProfile("Ifty", 25, "Japan");
```

Result:

```text
Ifty is 25 years old from Japan
```

### Important detail

Checking:

```ts
age !== undefined
```

is more precise than:

```ts
if (age)
```

because `0` is falsy.

---

# Problem 4 — Challenge

### Requirement

Create:

```ts
searchProducts(query, limit, category)
```

with:

* `query` → required `string`
* `limit` → default `10`
* `category` → optional `string`

### Solution

```ts
const searchProducts = (
  query: string,
  limit: number = 10,
  category?: string
) => {
  if (category !== undefined) {
    return `Searching for ${query} | limit: ${limit} | Category: ${category}`;
  }

  return `Searching for ${query} | limit: ${limit} | Category: all`;
};
```

Examples:

```ts
searchProducts("laptop");
```

Result:

```text
Searching for laptop | limit: 10 | Category: all
```

And:

```ts
searchProducts("laptop", 50, "electronics");
```

Result:

```text
Searching for laptop | limit: 50 | Category: electronics
```

---

# 🔥 DAY 5 COMMON MISTAKES

## Mistake 1 — Thinking default parameters are required

Wrong mental model:

```text
discount is required, but TypeScript fills it automatically
```

Better mental model:

```text
discount is optional to the caller
+
10 is the fallback value
```

---

## Mistake 2 — Thinking optional parameters automatically handle `undefined`

This:

```ts
age?: number
```

doesn't automatically solve the missing-value problem.

It means:

```ts
age: number | undefined
```

Your function may still need to handle `undefined`.

---

## Mistake 3 — Confusing truthiness with existence

Avoid blindly using:

```ts
if (age)
```

when you specifically care about whether the value is `undefined`.

Prefer:

```ts
if (age !== undefined)
```

when `0` is potentially meaningful.

---

## Mistake 4 — Thinking this is invalid

```ts
function test(
  name?: string,
  age: number = 18
) {}
```

It is valid.

The default parameter is optional from the caller's perspective.

---

## Mistake 5 — Thinking optional parameters cannot be followed by anything

The actual problem is a **required** parameter after an optional one.

Invalid:

```ts
function test(name?: string, age: number) {}
```

Valid:

```ts
function test(
  name?: string,
  age: number = 18
) {}
```

---

# 🧠 DAY 5 QUICK REVISION

If you remember only these points, remember these:

### 1.

```ts
name?: string
```

→ optional
→ may be `undefined`

### 2.

```ts
name: string = "Guest"
```

→ default
→ fallback value

### 3.

```ts
name?: string
```

is conceptually:

```ts
string | undefined
```

### 4.

A required parameter shouldn't follow an optional parameter.

### 5.

A default parameter is optional from the caller's perspective.

### 6.

```ts
greet(undefined)
```

can trigger a default parameter's fallback.

### 7.

Use:

```ts
value !== undefined
```

when you specifically want to check whether a value is missing.

### 8.

Use optional parameters when a value genuinely may not exist.

### 9.

Use default parameters when there is a sensible fallback.

### 10.

The goal is not to memorize syntax. Understand **what happens when the caller omits an argument**.

---

# 🎯 DAY 5 FINAL SELF-TEST

Before moving to Day 6, you should be able to answer these without looking:

1. What does `?` mean on a function parameter?
2. Why can an optional parameter be `undefined`?
3. What's the difference between `age?: number` and `age: number = 18`?
4. Can a default parameter be omitted?
5. Can you put a required parameter after an optional parameter?
6. Can a default parameter come after an optional parameter?
7. What happens when `undefined` is explicitly passed to a default parameter?
8. What's the difference between `if (age)` and `if (age !== undefined)`?
9. When would you choose an optional parameter over a default parameter?
10. How are optional/default parameters useful when building reusable React components?

If you can explain all ten in your own words and write the four practice functions again without looking, **Day 5 is solid.**

---

# 📊 DAY 5 PERFORMANCE

**Concept verification:** 5/5
**Mini quiz:** 3.5/5
**Interview:** 8.8/10
**Coding practice:** 4/4
**Overall confidence:** ~9/10

### Main strength

Understanding:

```ts
optional → string | undefined
```

### Main revision point

Remember:

```ts
if (value)
```

is a truthiness check, while:

```ts
if (value !== undefined)
```

is an explicit existence check.

### Day 5 Status

✅ Concept learned
✅ Concept verified
✅ Quiz completed
✅ Interview completed
✅ Practice completed
✅ Code reviewed
⏭️ Ready for the next TypeScript Fundamentals topic
