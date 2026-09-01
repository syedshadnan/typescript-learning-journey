interface Product {
    readonly id: number;
    name: string;
    price: number;
    category: "electronics" | "clothing" | "food";
    stock: number;
}

interface Customer {
    id: number;
    name: string;
    email: string;
    phone?: string;
}

interface Order {
    readonly id: number;
    customer: Customer;
    product: Product;
    quantity: number;
    status: "pending" | "shipped" | "delivered";
}

const getOrderSummary = (order: Order) => {
  return `Customer Name: ${order.customer.name} | Product Name: ${order.product.name} | Quantity: ${order.quantity} | Current Status: ${order.status}`
};

const product: Product = {
    id: 1,
    name: 'samsung a54',
    price: 25000,
    category: "electronics",
    stock: 10,
};

const customer: Customer = {
    id: 1,
    name: 'Shadnan',
    email: 'syedshadnanamozammel@gmail.com',
};

const order: Order = {
    id: 1,
    customer,
    product,
    quantity: 1,
    status: "shipped",
};

console.log(getOrderSummary(order));