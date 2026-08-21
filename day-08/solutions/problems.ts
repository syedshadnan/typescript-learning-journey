// Problem 1 — Basic Inference

// const username = "Ifty";  ==>string
// const age = 25; ==> number
// const isStudent = true; ==>boolean

// Problem 2 — User Role
const createUser = (name:string, role: 'admin' | 'editor' | 'user') =>{
    return `${name} | ${role}`
}   

// Problem 3 — User Configuration 🔥

type Profile = {
    name: string;
    age: number;
    role: "admin" | "editor" | "user";
    status: 'active' | 'inactive'
}
const createUserProfile = (profile: Profile) => {
    return `${profile.name} | ${profile.age} | ${profile.role} | ${profile.status}`;
};


// 🔥 Final Challenge — Don't Use any

type Status = {
    status: 'active' | 'inactive' | 'banned'
}
const formatUserStatus = (status:Status) => {
    return `user is ${status.status}`
}

console.log(formatUserStatus({
    status: 'active'
}))