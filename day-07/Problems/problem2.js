"use strict";
// 🎯 Problem 2 — Order System
const updateOrder = (orderId, status) => {
    return `Order ${orderId} is ${status}`;
};
console.log(updateOrder(101, 'shipped'));
