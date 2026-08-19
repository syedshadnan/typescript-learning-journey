// 🎯 Problem 2 — Order System

const updateOrder = (orderId:number, status: 'pending' | 'shipped' | 'delivered' | 'cancelled') => {
    return `Order ${orderId} is ${status}`
};

console.log(updateOrder(101, 'shipped'));