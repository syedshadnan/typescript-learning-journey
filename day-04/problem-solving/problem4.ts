// 🔥 Problem 4 — Real-world Function

const createProfile = (username:string, age:number, isStudent:boolean):string => {
    if (isStudent){
        return `${username} is ${age} years old and is a student.`
    } else {
        return `${username} is ${age} years old and is not student`
    }
}

console.log(createProfile("Ifty", 25, true));

console.log(createProfile('Rahin', 25, false));
