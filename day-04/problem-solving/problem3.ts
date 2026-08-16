// Problem 3 — Default Parameter

const calculateDiscount = (price:number, discount = 0):number => {
    return price - (price / 100 * discount);
}

console.log(calculateDiscount(500));
console.log(calculateDiscount(500, 20));