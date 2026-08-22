type Order = {
  id: number;
  customer: string;
  status: "pending" | "processing" | "shipped" | "delivered";
  payment: "cash" | "card" | "bkash";
  total: number;
};

const createOrder = (order: Order) => {
    return `Order #${order.id} | Customer: ${order.customer} | Status: ${order.status} | Payment: ${order.payment} | Total: ${order.total}`
};

const orderInfo:Order = {
    id: 101,
    customer: 'Ifty',
    status: 'processing',
    payment: 'bkash',
    total: 1500
}

console.log(createOrder(orderInfo));