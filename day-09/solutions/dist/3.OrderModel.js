"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const createOrder = (order) => {
    return `Order #${order.id} | Customer: ${order.customer} | Status: ${order.status} | Payment: ${order.payment} | Total: ${order.total}`;
};
const orderInfo = {
    id: 101,
    customer: 'Ifty',
    status: 'processing',
    payment: 'bkash',
    total: 1500
};
console.log(createOrder(orderInfo));
//# sourceMappingURL=3.OrderModel.js.map