// Problem 1 — Easy
const greetUser = (name?: string) => {
  if (name) {
    return `Hello ${name}`;
  } 
    return `Hello Guest`;
};

console.log(greetUser());
console.log(greetUser("Ifty"));
