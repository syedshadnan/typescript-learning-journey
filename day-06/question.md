# 🚀 Next: Day 6 Practice

Now we'll apply union types in code.

We'll go **easy → intermediate → real-world → challenge**, and I won't give you the solution upfront.

### Problem 1 — Easy

Create a function:

```ts
formatValue(value)
```

Requirements:

* `value` can be `string` or `number`
* If it's a string, return it in uppercase
* If it's a number, return the number multiplied by `2`

Expected examples:

```ts
formatValue("ifty");
// "IFTY"

formatValue(10);
// 20
```

### Constraint

Use a union type:

```ts
string | number
```

and use `typeof` to narrow the type.

**Write Problem 1 only and send me your code.**