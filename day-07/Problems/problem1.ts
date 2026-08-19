// problem 1

const createUser = (name:string, role: 'admin' | 'editor' | 'user') => {
    return `${name} crated as ${role}`
}

console.log(createUser('Ifty', 'admin'));