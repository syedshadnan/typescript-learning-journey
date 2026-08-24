1. A nested object in TypeScript is an object placed inside another object to group related data together. We use it to organize complex data cleanly and mirror real-world structures, like putting an address inside a user profile.

2. string. The type of user.address.city is string.TypeScript determines this by chaining down the type tree: it looks up the User object, finds the nested address object, and checks the property type assigned to city.

3. This means the address property is optional, so a user can exist without any address data.TypeScript knows that user.address is either the defined object ({ city: string }) or undefined, forcing you to safely check for its existence before accessing city.

4. This causes an error because user.address might be undefined, and you cannot read a property (city) of something that does not exist.To safely access it, use optional chaining (?.), which safely stops and returns undefined instead of crashing if the address is missing

5. Directly checking the city property inside the address, assuming that city must be there.
2nd one is optional chaining. It assuming that city can be exist or not. if not the output will be undefine instead of crushing.

6. The first situation (address?) means the entire address object might be missing, but if it exists, it only requires a city.The second situation (.country) causes an error because country was never defined in the type structure, meaning it can never exist on that object.

7. An API response uses nested objects to group related data logically and prevent repeating information, especially when handling one-to-many relationships like a user having multiple phone numbers. It keeps the data clean and structured, whereas one large flat object becomes messy, redundant, and harder to scale over time.

8. TypeScript verifies each step of the path down the type tree:order: Confirmed as a valid object containing an id and a required customer property.customer: Guaranteed to exist (never null or undefined) and must contain a required address object.address: Guaranteed to exist as an object holding exactly two required fields: city and country.city: Known definitively to be a string, allowing you to safely use string methods like .toUpperCase() without any extra runtime checks.

<!-- 🔥 Bonus -->
first one is required and readonly means it cannot be mutated and second one is required my mutated.


Strong interview performance. **You clearly understand nested objects rather than just memorizing the syntax.**

### 🎤 Day 11 Interview Evaluation

**Q1 — 10/10 ✅**
Good definition and the real-world example was appropriate.

**Q2 — 10/10 ✅**
Excellent explanation of how TypeScript follows the nested structure:

`User → address → city → string`

**Q3 — 10/10 ✅**
Correct. You correctly identified:

```ts
address?: {
  city: string;
}
```

as:

```text
object | undefined
```

**Q4 — 10/10 ✅**
Correct reasoning. The important point is that `address` might be `undefined`, so accessing `.city` directly is unsafe.

**Q5 — 9.5/10 ⚠️**
Your idea is mostly right, but one wording needs correction.

`user.address?.city` does **not** mean that `city` itself may or may not exist.

It means:

> Access `city` **only if `address` exists**.

If `address` is undefined → result is `undefined`.

If `address` exists → TypeScript accesses `city`.

**Q6 — 10/10 ✅**
Very good distinction:

```text
address?
→ address may be undefined

address.country
→ country isn't part of the type
```

Those are two completely different problems.

**Q7 — 9/10 ⚠️**

Your main reasoning is good: nested structures organize related data and make complex data easier to model.

One correction: **one-to-many relationships aren't inherently the reason for nested objects.** A nested object can represent a single related object too, such as:

```ts
user.address
```

The stronger general reason is **representing the structure of the data and relationships between related properties**.

**Q8 — 10/10 ✅**

Excellent. You traced the entire type chain correctly:

```text
order
 ↓
customer
 ↓
address
 ↓
city
 ↓
string
```

And your `.toUpperCase()` example shows that you understand the practical consequence of TypeScript knowing the final type.

**Bonus — 10/10 ✅**

Correct:

```text
readonly id: number
→ required
→ cannot be reassigned

id: number
→ required
→ can be reassigned
```

### 📊 Final Interview Score

| Area                     |      Score |
| ------------------------ | ---------: |
| Conceptual Understanding |     9.8/10 |
| Type Reasoning           |      10/10 |
| Error Analysis           |     9.8/10 |
| Practical Understanding  |     9.5/10 |
| Communication            |     9.5/10 |
| **Overall**              | **9.7/10** |

### 🔥 Your biggest improvement today

You're now able to distinguish:

```text
Optional
→ might be undefined

Missing from the type
→ property doesn't exist in the type

Nested
→ object inside another object

Optional chaining
→ safely access through a possibly undefined value
```

That's a solid foundation for the next part of Phase 2.

**Day 11 Interview: 9.7/10 — Passed.**
