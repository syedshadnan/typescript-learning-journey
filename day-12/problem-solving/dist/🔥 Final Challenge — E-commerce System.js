"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const getOrderSummary = (order) => {
    return `Customer Name: ${order.customer.name} | Product Name: ${order.product.name} | Quantity: ${order.quantity} | Current Status: ${order.status}`;
};
const product = {
    id: 1,
    name: 'samsung a54',
    price: 25000,
    category: "electronics",
    stock: 10,
};
const customer = {
    id: 1,
    name: 'Shadnan',
    email: 'syedshadnanamozammel@gmail.com',
};
const order = {
    id: 1,
    customer,
    product,
    quantity: 1,
    status: "shipped",
};
console.log(getOrderSummary(order));
//# sourceMappingURL=%F0%9F%94%A5%20Final%20Challenge%20%E2%80%94%20E-commerce%20System.js.map