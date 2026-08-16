"use strict";
// 🚀 Problem 3 — Intermediate
const createProfile = (name, age, country = "Bangladesh") => {
    if (age) {
        return `${name} is ${age} years old from ${country}`;
    }
    return `${name} is from ${country}`;
};
console.log(createProfile("Ifty", 25));
