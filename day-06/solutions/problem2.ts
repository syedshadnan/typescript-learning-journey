// 🔥 Problem 2 — Easy+

const getLength = (value: string | number) => {
    if (typeof value === 'string'){
        return value.length;
    }
    return value * 10;
}

console.log(getLength(54));
console.log(getLength('ifty'))