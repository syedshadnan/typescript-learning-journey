// 🔥 Problem 4 — Challenge

const getDisplayValue = (value: string | number | boolean) => {
    if (typeof value === 'string' ){
        return `String: ${value}`;
    }
    if (typeof value === 'number'){
        return `Number: ${value}`
    }
    return `Boolean: ${value}`
}

console.log((getDisplayValue("Ifty")));

console.log((getDisplayValue(25)));

console.log((getDisplayValue(true)));