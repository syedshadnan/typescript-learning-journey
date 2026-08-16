"use strict";
// Problem 2 — Optional Parameter
const greetUser = (name, title) => {
    if (title) {
        return `Hello ${title} ${name}`;
    }
    else {
        return `Hello ${name}`;
    }
};
console.log(greetUser('Ifty'));
console.log(greetUser('Ifty', 'Developer'));
