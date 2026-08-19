"use strict";
// 🏆 Day 7 Final Challenge
const createOrder = (order) => {
    return `${order.id} | ${order.status} | ${order.payment} | ${order.priority} `;
};
console.log(createOrder({
    id: 101,
    status: "shipped",
    payment: "card",
    priority: "high"
}));
