"use strict";
// 🔥 Problem 4 — Challenge
const searchProducts = (query, limit = 10, category) => {
    if (category !== undefined) {
        return `$ Searching for ${query} | limit: ${limit} | Category: ${category}`;
    }
    return `$ Searching for ${query} | limit: ${limit} |Category: all`;
};
console.log(searchProducts("laptop"));
console.log(searchProducts("laptop", 50, "electronics"));
