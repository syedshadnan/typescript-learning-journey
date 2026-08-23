// 🔥 Problem 2 — Product Model
type Product = {
    readonly id: number;
    name: string;
    price: number;
    description?: string;
    category: 'electronics' | 'clothing' | 'food';
    stock: number;
    isAvailable: boolean;
}

const displayProduct = (product: Product) => {
    if (typeof product.description !== 'undefined') {
        return `Product name: ${product.name} | Price: ${product.price} | Description: ${product.description} | Category: ${product.category} | Stock: ${product.stock} | IsAvailable: ${product.isAvailable}`;
    }
    return `Product name: ${product.name} | Price: ${product.price} | Category: ${product.category} | Stock: ${product.stock} | IsAvailable: ${product.isAvailable}`;
}

const product1:Product = {
    id: 1,
    name: 'MacBook Air M5',
    price: 160000,
    description: 'Powered by M5 Processor',
    category: 'electronics',
    stock: 30,
    isAvailable: true

}

const product2:Product = {
    id: 2,
    name: 'MackBook Air M6',
    price: 160000,
    category: 'electronics',
    stock: 0,
    isAvailable: false
}

console.log(displayProduct(product1));
console.log(displayProduct(product2));