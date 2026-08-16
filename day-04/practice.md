# Day 4 — Functions & Parameters

## 1. Why TypeScript Cares About Functions

In JavaScript, we can write:

```js
function add(a, b) {
    return a + b;
}
```

The problem is that nothing tells us what `a` and `b` should be.

Someone could accidentally do:

```js
add(10, '20');
```

JavaScript won't necessarily stop it.

### TypeScript lets us define the contract of a function:

> "This function below expects two numbers and returns a number."

```ts
function multiply(a: number, b: number): number {
    return a + b;
}
```

Now:

```ts
multiply(10, 20);        // ✅
// multiply(10, '20');  // ❌
```

That's one of the biggest practical benefits of TypeScript.

---

## 2. Parameter Types

The syntax is:

```ts
function functionName(parameter: type) {

}
```

Example:

```ts
function greet(name: string) {
    console.log(`hello${name}`);
}
```

Here `(name: string)` means the parameter must receive a string.

```ts
greet("Ifty");     // ✅
// greet(25);      // ❌
```

### Multiple Parameters

```ts
function calculateTotal(price: number, quantity: number) {
    return price * quantity;
}
```

Both parameters have their own types.

---

## 3. Return Types

This is particularly important.

We can explicitly tell TypeScript what a function must return:

```ts
function test(a: number, b: number): number {
    return a + b;
}
```

The second `number` is the return type.

```text
parameter → what goes IN
return type → what comes OUT
```

### Example

```ts
function getUserName(): string {
    return 'Ifty';
}
```

This is valid.

But:

```ts
// function getUserName(): string {
//     return 25;   ❌ Error.
// }
```

The function promised to return a string, but returned a number.

---

## 4. Do We Always Need to Write Return Types?

No. TypeScript can often infer them.

```ts
function test2(a: number, b: number) {
    return a + b;
}
```

Here TypeScript understands the return type → `number`.

So both can work.

### Practical Rule

For simple function, inference is often perfectly fine.

For important/public APIs or complex functions, explicitly declaring the return type can make the intended contract clearer.

---

## 5. Optional Parameters

Sometimes a function parameter isn't require.

### JavaScript

```js
function greet(name, age) {

}
```

### TypeScript

```ts
function greeting(name: string, age?: number) {
    console.log(name, age);
}
```

This `?` means the parameter is optional.

So both are valid:

```ts
greeting("Ifty");
greeting("Ifty", 25);
```

But:

```ts
// greeting('ifty', '25')   ❌ Error
```

### Important Concept

An optional parameter effectively means the value may be absent.

Conceptually:

```ts
age?: number
```

is related to:

```ts
age: number | undefined
```

So I have to be aware that `age` might not exist.

This is a very important idea that will become useful later when we study type narrowing.

---

## 6. Default Parameters

JavaScript already supports default parameters:

```ts
function greet2(name: string = "Guest") {
    console.log(`Hello ${name}`);
}
```

---

## 7. Optional vs Default Parameter

**Optional** → the argument can be omitted, and the value becomes `undefined`.

**Default** → the argument can be omitted, but the function uses a default parameter set by the developer.

```text
Optional → maybe undefined
Default  → fallback value
```

---

## 8. Parameter Order Matters

This is valid:

```ts
function greet3(name: string, age?: number) {

}
```

But this is problematic:

```ts
// function greet4(age?: number, name: string) {

// }
```

A required parameter generally cannot come after an optional parameter. The optional parameter must come after the required parameter.

---

## 9. Real-World Example

Imagine a user registration function:

```ts
function createUser(
    userName: string,
    age: number,
    isAdmin: boolean
): string {
    return `${userName} - ${age} - ${isAdmin}`;
}
```

Now TypeScript guarantees the function's contract.

This becomes extremely valuable when applications have hundreds of functions.

---

# 🧠 Concept Verification — My Turn

### Q1

In the first function the return type was declared but in the second one TypeScript automatically determines the return type by seeing the parameter type. This is called TypeScript return inference.

### Q2

This `?` means the name parameter is optional. TypeScript won't give error for not passing the argument. Conceptually this means:

```ts
(name: string | undefined)
```

We should be aware that name might be undefined.

### Q3

First one is optional parameter means the parameter is optional. Second one is default parameter. In default parameter a default set value will be show if the argument is not passed. Default parameter is the inbuilt feature of JS that's why TS will also have this.

### Q4

In this function both parameter type was declared as number and also return type is number.

1st call `(5, 10)` is valid. The output will be: `50`

2nd call `(5, "10")` is invalid. Because 10 is written as string that mismatches with the 2nd parameter type number.

3rd: TypeScript will show runtime error: `NaN`. Because number * undefined is NaN.

### Q5

This is useful for big projects, public API. In this form the code looks clean readable and maintainable. If another developer sees the code he or she can easily understand by seeing the function contract.

---

# Review

Good work. Your **core understanding is strong**, but there are two important corrections. Let's review each one carefully.


## Q1 — Return type vs inference ✅

Your answer is correct.

```ts
function add(a: number, b: number): number
```

Here we explicitly declare the return type.

```ts
function add(a: number, b: number)
```

Here TypeScript can infer that the return value is `number` from:

```ts
return a + b;
```

One small correction: **return type inference is the better term**, rather than "TypeScript return inference."

**Score: 1/1**

---

## Q2 — Optional parameter ⚠️ Almost correct

You correctly identified:

```ts
name?: string
```

as an optional parameter.

But you made one important terminology mistake:

> `name?: string` conceptually means `name: string | undefined`

That's correct.

However, you wrote:

> "we should be aware that name might be undefined."

Also correct.

The important distinction is that **optional does not mean the parameter can be any type**.

This is valid:

```ts
greet();
greet("Ifty");
```

But this is still invalid:

```ts
greet(25); // ❌
```

Because the type is essentially:

```ts
string | undefined
```

not:

```ts
any
```

**Score: 0.9/1**

---

## Q3 — Optional vs Default ✅

Correct.

### Optional

```ts
function greet(name?: string)
```

The parameter may be omitted.

If omitted:

```ts
name === undefined
```

### Default

```ts
function greet(name: string = "Guest")
```

If omitted:

```ts
name === "Guest"
```

And yes, default parameters are a **JavaScript feature**, so TypeScript supports them naturally.

One subtle point:

```ts
greet(undefined);
```

also uses the default value.

**Score: 1/1**

---

# Q4 — Important correction ❌

You correctly identified the types and the first two calls.

```ts
multiply(5, 10);     // ✅ 50
multiply(5, "10");   // ❌
```

But your third answer is the main mistake:

```ts
multiply(5);
```

You said:

> "TypeScript will show runtime error: NaN."

That's **not what happens**.

The function is declared as:

```ts
function multiply(a: number, b: number): number {
  return a * b;
}
```

Both parameters are **required**.

Therefore TypeScript catches this **before runtime**:

```ts
multiply(5);
// ❌ Expected 2 arguments, but got 1.
```

So the important lesson is:

> **Don't confuse a TypeScript compile-time error with a JavaScript runtime result.**

If you somehow bypassed TypeScript's checking and JavaScript actually executed something equivalent to:

```js
multiply(5);
```

then `b` would be `undefined`, and:

```js
5 * undefined
```

would indeed produce:

```text
NaN
```

But **that isn't the normal TypeScript behavior**.

This distinction is extremely important for your TypeScript fundamentals.

**Score: 0.7/1**

---

# Q5 — Strong answer ✅

This was actually your best answer.

You understood that the function signature acts as a **contract** for other developers.

```ts
function calculatePrice(
  price: number,
  quantity: number
): number
```

A developer reading this immediately knows:

```text
Input:
price    → number
quantity → number

Output:
number
```

That's more than just "catching errors."

It improves:

* readability
* maintainability
* collaboration
* IDE/autocomplete support
* refactoring confidence

And yes, this becomes particularly valuable in **large projects and public APIs**.

**Score: 1/1**

---

# 📊 Concept Verification Result

| Question  |     Score |
| --------- | --------: |
| Q1        |       1/1 |
| Q2        |     0.9/1 |
| Q3        |       1/1 |
| Q4        |     0.7/1 |
| Q5        |       1/1 |
| **Total** | **4.6/5** |

### 🎯 Understanding: **9.2/10**

Your main weakness today isn't syntax. It's distinguishing:

> **TypeScript compile-time checking vs JavaScript runtime behavior**

That's worth fixing now because this distinction becomes even more important when we reach `any`, `unknown`, type assertions, and advanced types.

Your previous Day 2–3 logs also show strong fundamentals and confidence around type inference and basic type safety.  

---

# 🧠 One Rule to Remember

When you see:

```ts
function multiply(a: number, b: number)
```

Think:

> **"This function requires TWO numbers."**

So:

```ts
multiply(5, 10);      // ✅
multiply(5, "10");    // ❌ Type error
multiply(5);          // ❌ Missing argument
multiply(5, 10, 20);  // ❌ Too many arguments
```

Unless the function explicitly makes a parameter optional:

```ts
function multiply(a: number, b?: number)
```

---

## Now — Day 4 Mini Quiz 🧪

Don't answer by guessing. **Predict what TypeScript will do.**

### 1. Output / Error

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}

const result = greet("Ifty");

console.log(result);
```

What is the output?

---

### 2. Error Detection

```ts
function square(num: number): number {
  return num * num;
}

const result = square("5");
```

What exactly is wrong?

---

### 3. Type Analysis

What type does TypeScript infer for `result`?

```ts
function subtract(a: number, b: number) {
  return a - b;
}

const result = subtract(10, 4);
```

---

### 4. Optional Parameter

What happens here?

```ts
function introduce(name: string, age?: number) {
  console.log(name, age);
}

introduce("Ifty");
```

What are the values of `name` and `age`?

---

### 5. Default Parameter

What will this print?

```ts
function welcome(name: string = "Guest") {
  console.log(`Welcome ${name}`);
}

welcome();
welcome("Ifty");
```

---

### 6. 🔥 Challenge

What's wrong with this function?

```ts
function calculateDiscount(
  price: number,
  discount?: number
): number {
  return price - (price * discount / 100);
}
```

The function **compiles**, but can its logic produce an undesirable result?

If yes, explain **why** and how you would reason about fixing it.

This one tests whether you've really understood the `undefined` issue from Q2.


# Day 4 — Mini Quiz 🧪

## 1. Output: `Hello Ifty`

### Answer

`Hello Ifty`

### Explanation

Here the function is taking one parameter `name` as a string and the type is annotated as string. The function's return type is also string.

Then the function is returning in template string `Hello + name`. Then the return is stored in the `result` variable. Then the result is called.

Everything is valid in this function. Even without the return type, TypeScript implicitly understands the return type.

---

## 2. Error Detection

In this function, the parameter type and return type are number, but while passing the argument the value is string.

TypeScript will instantly show an error before runtime.

---

## 3. Return Type Analysis

`number`

TypeScript automatically infers the return type as number by seeing the parameter type.

---

## 4. Optional Parameter

Here the type of `name` is string and `age` is number.

But the `age` is optional here, which means it can be omitted.

---

## 5. Default Parameter

### Output

```text
Welcome Guest
Welcome Ifty
```

### Explanation

Because the value of the `name` parameter is declared as `Guest` if the argument is not passed.

---

## 6. Optional Parameter & Arithmetic

Here the `discount` is optional. But while returning, the discount looks like a required parameter to do proper arithmetic operation.

TypeScript will instantly show that discount is `undefined`.

The output will be `NaN`.

In order to make it logical, the discount type should be a required number.

While compiling the TypeScript will show:

```text
1 error
```

---

# Review

Excellent attempt. You're getting the **function contract idea**, but Q4 and especially Q6 reveal an important TypeScript detail we should lock down before moving forward.


## 🧪 Mini Quiz Review

### 1. `greet()` ✅

Correct.

```ts
function greet(name: string): string {
  return `Hello ${name}`;
}
```

Output:

```text
Hello Ifty
```

And your observation about inference is correct: if we removed `: string`, TypeScript could infer the return type from the returned expression.

**Score: 1/1**

---

### 2. `square("5")` ✅

Correct.

```ts
square("5");
```

violates:

```ts
num: number
```

So TypeScript reports the problem during type checking rather than waiting for normal runtime execution.

**Score: 1/1**

---

### 3. `subtract()` ⚠️ Correct answer, slightly wrong reasoning

Your answer:

> `number`

✅ Correct.

But this part:

> "TypeScript automatically infers the return type as number by seeing the parameter type."

That's not quite precise.

TypeScript doesn't infer the return type **simply because the parameters are numbers**.

It looks at the **return expression**:

```ts
return a - b;
```

Since `a` and `b` are numbers, `a - b` produces a number.

Therefore:

```ts
function subtract(a: number, b: number) {
  return a - b;
}
```

is inferred as:

```ts
function subtract(a: number, b: number): number
```

This distinction matters.

**Score: 0.9/1**

---

### 4. Optional parameter ⚠️

You correctly understood that `age` is optional.

But you said:

> "the type of age is number"

That's incomplete.

With:

```ts
age?: number
```

you should mentally think:

```ts
age: number | undefined
```

So:

```ts
introduce("Ifty");
```

results in:

```text
name → "Ifty"
age  → undefined
```

Not `number`.

This is exactly the weak point we identified in your concept verification.

**Score: 0.7/1**

---

### 5. Default parameter ✅

Perfect.

```ts
welcome();
```

prints:

```text
Welcome Guest
```

and:

```ts
welcome("Ifty");
```

prints:

```text
Welcome Ifty
```

You correctly understand the difference between **optional** and **default** parameters.

**Score: 1/1**

---

# 6. 🔥 Discount Challenge — Important Correction

Your reasoning is **partially right**, but there's one major issue.

You said:

> "the output will be NaN."

Normally, with TypeScript's strict null checking, **you don't get to runtime**.

Consider:

```ts
function calculateDiscount(
  price: number,
  discount?: number
): number {
  return price - (price * discount / 100);
}
```

Because:

```ts
discount?: number
```

means:

```ts
discount: number | undefined
```

TypeScript sees:

```ts
price * discount
```

and says:

> "Wait. `discount` might be `undefined`."

So TypeScript should flag the arithmetic expression as a type error under `strictNullChecks`.

Your conclusion:

> "discount should be a required number"

would indeed be **one possible fix**:

```ts
function calculateDiscount(
  price: number,
  discount: number
): number {
  return price - (price * discount / 100);
}
```

But there's another better design question:

### What if discount is genuinely optional?

Then you could provide a default:

```ts
function calculateDiscount(
  price: number,
  discount: number = 0
): number {
  return price - (price * discount / 100);
}
```

Now:

```ts
calculateDiscount(1000);
```

means:

```text
1000 - 0% = 1000
```

That's a **real-world design decision**:

> Should the parameter be required, or should the function have sensible fallback behavior?

That's more important than simply memorizing syntax.

**Score: 0.7/1**

---

# 📊 Day 4 Quiz Score

| Question  |       Score |
| --------- | ----------: |
| Q1        |         1.0 |
| Q2        |         1.0 |
| Q3        |         0.9 |
| Q4        |         0.7 |
| Q5        |         1.0 |
| Q6        |         0.7 |
| **Total** | **5.3 / 6** |

### 🎯 Understanding: **8.8/10**

That's good enough to continue, but I **don't want to gloss over the `undefined` issue**.

Your previous Day 2 log already identified `null` vs `undefined` as an area worth continued practice, and today's quiz exposed the same concept through optional parameters. 

---

# 🧠 The 3 Rules I Want You to Remember

### Rule 1 — Optional parameter

```ts
age?: number
```

Think:

```ts
number | undefined
```

---

### Rule 2 — Return inference

Don't think:

> "Parameters are numbers, therefore return is number."

Think:

> "TypeScript examines the expression being returned and infers its type."

Example:

```ts
function add(a: number, b: number) {
  return a + b;
}
```

→ `number`

---

### Rule 3 — TypeScript error ≠ runtime error

This is the biggest lesson from today's session.

```ts
function multiply(a: number, b: number) {
  return a * b;
}

multiply(5);
```

TypeScript:

```text
❌ Missing argument
```

That's a **type-checking/compile-time problem**.

If invalid JavaScript somehow executes anyway, then you might get:

```text
NaN
```

But don't describe the TypeScript error itself as a runtime error.

---

## 🧩 Final Concept Check — No New Topic Yet

Before I give you the **Day 4 practice problems**, answer these three:

**1.** What is the conceptual type of:

```ts
function greet(name?: string)
```

**2.** Why does this work?

```ts
function add(a: number, b: number) {
  return a + b;
}
```

even though we didn't explicitly write `: number`?

**3.** For this function:

```ts
function calculateDiscount(
  price: number,
  discount?: number
): number {
  // ...
}
```

Give me **two different valid designs** for handling the optional discount.

Once you nail these, we'll move to **Day 4 Practice Problems → Code Review → Interview Questions → End-of-Day Review**.


/*
🧩 Final Concept Check — No New Topic Yet
1. name: string | undefined
2. because of return infers. ts checks the return expression and identify it's type
3. we can use default parameter or remove the this ? option.
*/
Exactly. **All 3 are correct.** ✅

### 1. Optional parameter — ✅

```ts
name?: string
```

Mentally:

```ts
name: string | undefined
```

So you understand the important part: **optional doesn't mean `any`; it means the value may be missing.**

### 2. Return type inference — ✅

Correct. TypeScript examines the **return expression** and determines its type.

```ts
function add(a: number, b: number) {
  return a + b;
}
```

→ inferred return type: `number`.

### 3. Handling optional discount — ✅

Both are valid designs:

**Make it required:**

```ts
function calculateDiscount(price: number, discount: number): number
```

**Give it a default:**

```ts
function calculateDiscount(
  price: number,
  discount: number = 0
): number
```

The second design is especially useful when "no discount" is a meaningful default.

---

# 🎯 Concept Verification: 3/3

You've now demonstrated that you understand:

* Parameter type annotations
* Return types
* Return type inference
* Optional parameters
* `undefined` with optional parameters
* Default parameters
* Compile-time vs runtime errors
* Function contracts

So **we can move to practice.**

## 💻 Day 4 Practice — Round 1

Try these **without looking for solutions**.

### Problem 1 — Basic Function

Create a function called `calculateArea` that:

* accepts `length` and `width`
* both must be numbers
* returns the rectangle's area
* explicitly declares the return type

Example:

```text
calculateArea(10, 5) → 50
```

---

### Problem 2 — Optional Parameter

Create:

```ts
function greetUser(name: string, title?: string)
```

Expected behavior:

```text
greetUser("Ifty")
→ Hello Ifty

greetUser("Ifty", "Developer")
→ Hello Developer Ifty
```

**Hint:** You'll need to handle the possibility that `title` is `undefined`.

---

### Problem 3 — Default Parameter

Create a function:

```text
calculateDiscount(price, discount)
```

where:

* `price` is required
* `discount` defaults to `0`
* both are numbers
* return type is `number`

Expected:

```text
calculateDiscount(1000)
→ 1000

calculateDiscount(1000, 20)
→ 800
```

---

### 🔥 Problem 4 — Real-world Function

Create:

```text
createProfile(username, age, isStudent)
```

Requirements:

* `username` → string
* `age` → number
* `isStudent` → boolean
* return type → string

Example:

```text
createProfile("Ifty", 25, true)
```

should return something like:

```text
Ifty is 25 years old and is a student.
```

**Don't worry about making the wording exactly identical.**

---
the solutions is in the problem-solving folder
