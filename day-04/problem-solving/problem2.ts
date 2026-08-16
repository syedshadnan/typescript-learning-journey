// Problem 2 — Optional Parameter

const greetUser = (name:string, title?:string) => {
    if (title){
        return `Hello ${title} ${name}`
    } else {
    return `Hello ${name}`
    }
}

console.log(greetUser('Ifty'))
console.log(greetUser('Ifty', 'Developer'))