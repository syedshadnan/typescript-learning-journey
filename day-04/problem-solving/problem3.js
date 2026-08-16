"use strict";
// Problem 3 — Default Parameter
const calculateDiscount = (price, discount = 0) => {
    return price - (price / 100 * discount);
};
console.log(calculateDiscount(500));
console.log(calculateDiscount(500, 20));
