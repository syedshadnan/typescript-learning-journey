// 🟠 Problem 3 — Optional + Readonly

interface Product {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
    category: 'electronics' | 'clothing' | 'food'
}

const product:Product = {
    id: 1,
    name: 'MacBook Air M5',
    price: 170000,
    category: "electronics"
}

product.name = 'MacBook Air M5 (16/512)';
product.description = 'Powerd by M5 Processor';
// here i can't change the id. Because it was modeled as readonly means it cannot ba changed or muted.
console.log(product);