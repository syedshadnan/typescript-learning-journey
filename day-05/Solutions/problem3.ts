// 🚀 Problem 3 — Intermediate

const createProfile = (name: string, age?: number, country: string = "Bangladesh"
) => {
    if (age !== undefined){
        return `${name} is ${age} years old from ${country}`
    }
    return `${name} is from ${country}`
}

console.log(
    createProfile("Ifty", 25)
)