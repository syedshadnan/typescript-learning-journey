# Day 05 — Optional & Default Parameters

## Concepts Learned

* Optional parameters
* Default parameters
* Difference between optional and default parameters
* `undefined` with optional parameters
* Default values when arguments are omitted
* Parameter ordering rules
* Default parameters after optional parameters
* Truthiness checks vs explicit `undefined` checks
* Type inference for function return values

### Key Concepts

#### Optional Parameters

```ts
function greet(name?: string) {
  // name is conceptually string | undefined
}
```

An optional parameter may be omitted by the caller. If omitted, its value is `undefined`.

#### Default Parameters

```ts
function greet(name: string = "Guest") {
  return `Hello ${name}`;
}
```

If the argument is omitted, the default value is used.

```ts
greet();       // Hello Guest
greet("Ifty"); // Hello Ifty
```

#### Optional vs Default

```text
Optional parameter
→ may be omitted
→ can be undefined
→ developer may need to handle undefined

Default parameter
→ may be omitted
→ fallback value is supplied
→ gives predictable behavior
```

## Practice Completed

### Problem 1 — Optional Parameter

Created `greetUser()` using an optional parameter.

```ts
const greetUser = (name?: string) => {
  if (name) {
    return `Hello ${name}`;
  }

  return "Hello Guest";
};
```

### Problem 2 — Default Parameter

Created `calculateTotal()` using a default tax value.

```ts
const calculateTotal = (price: number, tax: number = 15) => {
  return price + (price * tax) / 100;
};
```

### Problem 3 — Optional + Default Parameters

Created `createProfile()` using:

* Required `name`
* Optional `age`
* Default `country`

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

### Problem 4 — Challenge

Created `searchProducts()` combining required, default, and optional parameters.

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

## Common Mistakes

* Initially assumed that a default parameter after an optional parameter was invalid.
* Confused function declaration validity with whether `undefined` is handled inside the function.
* Used truthiness checks such as:

```ts
if (age)
```

instead of explicitly checking:

```ts
if (age !== undefined)
```

### Important Lesson

```ts
if (age)
```

checks whether the value is truthy.

```ts
if (age !== undefined)
```

specifically checks whether the value exists rather than being `undefined`.

The second approach is safer when `0` could be a meaningful value.

## Interview Questions

Reviewed:

1. Difference between optional and default parameters.
2. Why optional parameters can conceptually be `string | undefined`.
3. Why default parameters can be omitted.
4. Why default parameters are useful for predictable behavior.
5. Whether optional and default parameters can appear together.
6. How TypeScript treats default parameters from the caller's perspective.

## Quiz Performance

* Q1 — Correct
* Q2 — Correct
* Q3 — Partially correct
* Q4 — Incorrect initially
* Q5 — Correct

### Quiz Score

**3.5/5**

The main correction was understanding that:

```ts
function createUser(
  name?: string,
  age: number = 18
) {}
```

is valid because a parameter with a default value is optional from the caller's perspective.

## Interview Performance

**8.8/10**

### Strengths

* Strong understanding of `undefined`
* Good distinction between optional and default parameters
* Good practical reasoning
* Correct understanding of default fallback behavior
* Good ability to apply concepts to real-world functions

### Weak Area

Continue distinguishing:

```ts
if (value)
```

from:

```ts
if (value !== undefined)
```

Also remember that a default parameter is not "required but automatically filled"; it is a parameter that has a fallback value when omitted.

## Confidence Score

**9/10**

## React Relevance

Optional and default values are common when designing reusable React components and configuration objects.

For example, a component may allow an optional configuration while providing sensible defaults internally.

The broader principle is:

> TypeScript defines what callers are allowed to provide; application logic defines what happens when something is omitted.

## End-of-Day Summary

Today I learned how to make function parameters more flexible using optional and default parameters.

I learned that optional parameters can result in `undefined`, while default parameters provide a fallback value.

I also practiced combining required, optional, and default parameters in realistic functions.

The biggest lesson was understanding the difference between checking truthiness and explicitly checking for `undefined`.

## Next Focus

**Day 6 — Continue TypeScript Fundamentals**

Next, continue with the next topic in the TypeScript Fundamentals roadmap after functions and parameters. The roadmap's Phase 1 includes union types and type inference alongside the current fundamentals.
