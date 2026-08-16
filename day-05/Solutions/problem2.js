"use strict";
// Problem 2 — Easy+
const calculateTotal = (price, tax = 15) => {
    return price + (price / 100) * tax;
};
console.log(calculateTotal(100));
