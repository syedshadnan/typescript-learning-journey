"use strict";
// 🎯 Problem 3 — Configuration Object
const createButton = (config) => {
    return `${config.text} | ${config.variant} | ${config.size}`;
};
console.log(createButton({
    text: "Delete",
    variant: "danger",
    size: "large"
}));
