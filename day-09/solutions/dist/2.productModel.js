"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createProduct = (product) => {
    return `${product.name} costs ${product.price}`;
};
const productInfo = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    category: 'electronics'
};
console.log(createProduct(productInfo));
//# sourceMappingURL=2.productModel.js.map