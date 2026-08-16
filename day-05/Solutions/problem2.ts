// Problem 2 — Easy+

const calculateTotal = (price:number, tax:number = 15) =>{
    return price + (price / 100) * tax;
}

console.log(calculateTotal(100))