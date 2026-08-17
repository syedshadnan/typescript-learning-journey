"use strict";
// 🔥 Problem 2 — Easy+
const getLength = (value) => {
    if (typeof value === 'string') {
        return value.length;
    }
    return value * 2;
};
console.log(getLength(54));
console.log(getLength('ifty'));
