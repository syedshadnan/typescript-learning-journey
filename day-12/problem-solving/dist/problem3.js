"use strict";
// 🟠 Problem 3 — Optional + Readonly
Object.defineProperty(exports, "__esModule", { value: true });
const product = {
    id: 1,
    name: 'MacBook Air M5',
    price: 170000,
    category: "electronics"
};
product.name = 'MacBook Air M5 (16/512)';
product.description = 'Powerd by M5 Processor';
// here i can't change the id. Because it was modeled as readonly means it cannot ba changed or muted.
console.log(product);
//# sourceMappingURL=problem3.js.map