# Interview Questions — Answers & Explanations

## 1. What is an array in TypeScript?

### Answer

An array is a collection of values of the same type.

### Example

```ts
const numbers: number[] = [1, 2, 3];
```

This array can only contain numbers.

### Why use it?

TypeScript prevents accidentally inserting the wrong type.

```ts
numbers.push(4);      // ✅
numbers.push("4");    // ❌
```

This helps catch bugs before the program runs.

---

## 2. What is type inference?

### Answer

Type inference is TypeScript's ability to automatically determine a type without explicit annotations.

### Example

```ts
const age = 25;
```

TypeScript automatically infers:

```ts
number
```

Another example:

```ts
const names = ["Ifty", "Hasin"];
```

TypeScript infers:

```ts
string[]
```

### Why is it useful?

It reduces unnecessary type annotations while still maintaining type safety.

---

## 3. What is a tuple?

### Answer

A tuple is a fixed-length array where both the position and type of values are predefined.

### Example

```ts
const user: [number, string] = [1, "Ifty"];
```

Meaning:

```ts
[id, name]
```

* First value must be a number.
* Second value must be a string.

### Why use it?

When each position has a specific meaning.

Example:

```ts
const response: [number, string] = [200, "Success"];
```

---

## 4. How is a tuple different from an array?

### Array

```ts
const data = [1, "Ifty"];
```

TypeScript infers:

```ts
(string | number)[]
```

Meaning any element can be either a string or number.

---

### Tuple

```ts
const data: [number, string] = [1, "Ifty"];
```

Meaning:

* First position = number
* Second position = string

Order matters.

---

### Summary

| Array                           | Tuple            |
| ------------------------------- | ---------------- |
| Same type collection            | Fixed structure  |
| Flexible length                 | Fixed length     |
| Position usually doesn't matter | Position matters |

---

## 5. Why are object types useful?

### Answer

Object types define the structure of an object.

### Example

```ts
const student: {
  name: string;
  age: number;
} = {
  name: "Ifty",
  age: 25
};
```

### Benefits

* Prevents missing properties
* Prevents wrong property types
* Makes code easier to understand
* Improves IDE autocomplete

### Example Error

```ts
age: "25"
```

TypeScript immediately reports an error because it expects a number.

---

## 6. When should you use tuples?

### Answer

Use tuples when:

* The number of values is fixed.
* Each position has a specific meaning.
* Order matters.

### Example

```ts
const coordinates: [number, number] = [23.5, 90.4];
```

First value = latitude

Second value = longitude

---

Another example:

```ts
const response: [number, string] = [
  200,
  "Success"
];
```

---

## 7. How does TypeScript improve API data handling?

### Answer

TypeScript ensures that API data follows the expected structure.

### Example

Suppose an API should return:

```ts
{
  id: 1,
  name: "Ifty",
  email: "ifty@gmail.com"
}
```

We can define:

```ts
type User = {
  id: number;
  name: string;
  email: string;
};
```

Now TypeScript can warn us if:

```ts
{
  id: "1",
  name: "Ifty"
}
```

is returned.

### Benefits

* Fewer runtime errors
* Better autocomplete
* Safer code
* Easier maintenance

---

## 8. What happens when object properties have incorrect types?

### Answer

TypeScript shows a compile-time error.

### Example

```ts
const user: {
  name: string;
  age: number;
} = {
  name: "Ifty",
  age: "25"
};
```

Error:

```ts
Type 'string' is not assignable to type 'number'
```

### Why is this useful?

The bug is caught before the code runs.

Without TypeScript, this mistake might cause problems later in the application.

---

# Day 03 Most Important Exam/Interview Point

Many beginners think:

```ts
const data = [1, "Ifty"];
```

is a tuple.

It is NOT.

TypeScript infers:

```ts
(string | number)[]
```

To create a tuple, you must explicitly write:

```ts
const data: [number, string] = [1, "Ifty"];
```

This was your biggest learning point from Day 03 and is very likely to appear in interviews. 🚀
