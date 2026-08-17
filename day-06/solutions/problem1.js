"use strict";
// Problem 1 — Easy
const formatValue = (value) => {
    if (typeof value === 'string') {
        return value.toUpperCase();
    }
    return value * 2;
};
console.log(formatValue(5));
console.log(formatValue('ifty'));
