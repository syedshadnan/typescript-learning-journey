// 🏆 Day 7 Final Challenge

const createOrder = (order: {
    id: number,
    status: 'pending' | 'processing' | 'shipped' | 'delivered',
    payment: 'cash' | 'card' | 'bkash',
    priority: 'low' | 'medium' | 'high'
}) => {
    return `${order.id} | ${order.status} | ${order.payment} | ${order.priority} ` 
}

console.log(createOrder({
  id: 101,
  status: "shipped",
  payment: "card",
  priority: "high"
}))