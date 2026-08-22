type Product = {
    id: number;
    name: string;
    price: number;
    category: 'electronics' | 'clothing' | 'food';
}

const createProduct = (product:Product) => {
    return `${product.name} costs ${product.price}`
}

const productInfo:Product = {
    id: 1,
    name: 'Laptop',
    price: 50000,
    category: 'electronics'
}

console.log(createProduct(productInfo));