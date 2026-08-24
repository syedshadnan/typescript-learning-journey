type Order = {
  readonly id: number;
  customer: {
    name: string;
    email: string;
  };
  shippingAddress: {
    city: string;
    country?: string;
    postalCode: string;
  };
  product: {
    name: string;
    price: number;
    quantity: number;
  };
};

const getOrderSummary = (order: Order) => {
  if (typeof order.shippingAddress.country !== "undefined") {
    return `Order ID: ${order.id}
    Customer: ${order.customer.name}
    Email: ${order.customer.email}
    Product: ${order.product.name}
    Price: ${order.product.price}
    Quantity: ${order.product.quantity}
    Shipping: ${order.shippingAddress.city}, ${order.shippingAddress.country}
    Postal Code: ${order.shippingAddress.postalCode}`;
  }
  return `Order ID: ${order.id}
    Customer: ${order.customer.name}
    Email: ${order.customer.email}
    Product: ${order.product.name}
    Price: ${order.product.price}
    Quantity: ${order.product.quantity}
    Shipping: ${order.shippingAddress.city},
    Postal Code: ${order.shippingAddress.postalCode}`;
};

const orderInfo = {
  id: 1,
  customer: {
    name: "Ifty",
    email: "email@example.com",
  },
  shippingAddress: {
    city: "Feni",
    postalCode: "3900",
  },
  product: {
    name: "MacBook Air M5",
    price: 160000,
    quantity: 1,
  },
};

console.log(getOrderSummary(orderInfo));
