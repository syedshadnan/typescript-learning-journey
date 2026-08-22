# 🎯 TypeScript Number Guessing Game

A simple number guessing game built with **TypeScript** as my first mini-project during my TypeScript learning journey.

This project was created to practice combining the TypeScript fundamentals I learned during Days 1–8 into a small working application.

---

## 🎮 How the Game Works

The program randomly generates a secret number between **1 and 100**.

A predefined list of guesses is then processed one by one:

```ts
const guesses = [50, 30, 5];
````

Each guess is compared with the secret number.

* If the guess is higher → `Too High`
* If the guess is lower → `Too Low`
* If the guess is correct → `Correct`

The program also keeps track of the number of attempts.

If the correct number is guessed, the program displays the number of attempts and stops the loop.

---

## 💻 Example

Suppose the generated secret number is:

```text
42
```

And the guesses are:

```ts
const guesses = [50, 30, 42];
```

The output will be:

```text
Too High
Attempt: 1

Too Low
Attempt: 2

Correct
Attempt: 3

You Won in 3 attempts!
```

> The actual secret number and output will vary because the secret number is randomly generated each time.

---

## 🧠 Concepts Practiced

This project combines several concepts learned during the first phase of my TypeScript journey:

* Variables
* Type annotations
* Type inference
* Functions
* Function parameters
* Conditional statements
* `if / else if / else`
* Comparison operators
* `Math.random()`
* `Math.floor()`
* Increment operator (`++`)
* Arrays
* `for...of` loops
* `break`
* Template literals
* Basic state management
* Function return values

---

## 🔍 How the Code Works

### 1. Generate a Secret Number

```ts
const secretNumber = Math.floor(Math.random() * 100) + 1;
```

This generates a random integer between **1 and 100**.

The calculation works like this:

```text
Math.random()
     ↓
0 ≤ value < 1

× 100
     ↓
0 ≤ value < 100

Math.floor()
     ↓
0–99

+ 1
     ↓
1–100
```

---

### 2. Track Attempts

The game starts with zero attempts:

```ts
let attempts = 0;
```

Every time the `checkGuess()` function is called, the attempt counter increases:

```ts
attempts++;
```

So:

```text
First guess  → attempts = 1
Second guess → attempts = 2
Third guess  → attempts = 3
```

---

### 3. Check the Guess

The `checkGuess()` function compares the player's guess with the secret number.

```ts
const checkGuess = (guess: number) => {
  attempts++;

  if (guess > secretNumber) {
    return `Too High
Attempt: ${attempts}`;
  } else if (guess < secretNumber) {
    return `Too Low
Attempt: ${attempts}`;
  }

  return `Correct
Attempt: ${attempts}`;
};
```

The `guess` parameter is explicitly typed as a `number`.

The function handles three possible situations:

```text
guess > secretNumber
→ Too High

guess < secretNumber
→ Too Low

guess === secretNumber
→ Correct
```

---

### 4. Process Multiple Guesses

The current version uses a predefined array:

```ts
const guesses = [50, 30, 5];
```

The guesses are processed using a `for...of` loop:

```ts
for (const guess of guesses) {
  const result = checkGuess(guess);

  console.log(result);

  if (guess === secretNumber) {
    console.log(`You Won in ${attempts} attempts!`);
    break;
  }
}
```

If the correct number is guessed, `break` stops the loop.

---

## 📁 Project Structure

```text
Number Guessing Game/
│
├── src/
│   └── index.ts
│
├── dist/
│
├── tsconfig.json
└── README.md
```

---

## 🚀 Running the Project

### 1. Compile the TypeScript

From the project directory, run:

```bash
tsc
```

This compiles the TypeScript source code according to the project's `tsconfig.json`.

### 2. Run the compiled JavaScript

After compilation, run the generated JavaScript file from the `dist` directory.

For example:

```bash
node dist/index.js
```

> The exact generated path depends on the `rootDir` and `outDir` settings in `tsconfig.json`.

---

## 📌 Current Version

This is the **core logic version** of the project.

The current version does **not** take interactive input from a user.

Instead, guesses are currently predefined:

```ts
const guesses = [50, 30, 5];
```

The main purpose of this version is to practice combining multiple TypeScript and JavaScript fundamentals into a working program.

---

## 🎯 Learning Goal

This is my **first TypeScript mini-project** after learning TypeScript through:

```text
Concepts
   ↓
Syntax Practice
   ↓
Problem Solving
   ↓
Mini Project
```

The goal was not to build a complex game.

The goal was to take concepts that I had previously practiced separately and combine them into one small application.

---

## 🔗 Concepts Combined

The project brings together:

```text
Variables
    ↓
Type Annotations
    ↓
Functions
    ↓
Parameters
    ↓
Conditional Logic
    ↓
Arrays
    ↓
Loops
    ↓
State / Attempts
    ↓
Game Logic
```

---

## 🔮 Future Improvements

As I continue learning TypeScript, I can improve this project by adding:

* Interactive user input
* Replay functionality
* Maximum attempt limits
* Difficulty levels
* Input validation
* Better error handling
* More structured game state
* Improved project architecture
* A proper user interface

---

## 📚 Part of My TypeScript Learning Journey

This project is part of my **TypeScript Learning Journey 🚀**.

My overall learning path:

```text
JavaScript
    ↓
TypeScript
    ↓
React + TypeScript
    ↓
Full-Stack TypeScript Development
    ↓
Production-Ready Software Engineer
```

---

## 📈 Project Progress

### Version 1 — Core Logic

* [x] Generate random secret number
* [x] Restrict number to 1–100
* [x] Create typed guess parameter
* [x] Compare guess with secret number
* [x] Display Too High / Too Low / Correct
* [x] Track attempts
* [x] Process multiple guesses
* [x] Stop the loop when the correct number is guessed

### Future Versions

* [ ] Interactive user input
* [ ] Replay system
* [ ] Attempt limit
* [ ] Difficulty levels
* [ ] Input validation
* [ ] Improved game state
* [ ] User interface

---

## 📊 Current Status

**Project:** TypeScript Number Guessing Game

**Version:** 1.0 — Core Logic

**Status:** ✅ Completed

**Learning Phase:** Phase 1 — TypeScript Fundamentals

**Purpose:** First TypeScript Mini-Project

---

## 🚀 Part of the Journey

This project is a small milestone in my journey toward becoming a **production-ready software engineer**.

One concept at a time.
One problem at a time.
One project at a time. 🚀

```
```
