"use strict";
// Problem 1 — Easy
const greetUser = (name) => {
    if (name) {
        return `Hello ${name}`;
    }
    return `Hello Guest`;
};
console.log(greetUser());
console.log(greetUser("Ifty"));
