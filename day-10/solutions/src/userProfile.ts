// Problem 1 — User Profile
type UserProfile = {
    readonly id: number;
    name: string;
    email: string;
    age?: number;
    role: "admin" | "user" | "editor";
    isActive: boolean;
}

const user:UserProfile = {
    id: 1,
    name: 'Syed Shadnan Mozammel',
    email: 'syedshadnanmozammel@gmail.com',
    age: 25,
    role: 'admin',
    isActive: true
}

console.log(user);