// 🟢 Problem 1 — User Profile

interface UserProfile {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    isActive: boolean;
}

const getUserSummary  = (user:UserProfile) => {
    return `Name: ${user.name} | email: ${user.email} | Role: ${user.role} | Active Status: ${user.isActive}`
}

const user:UserProfile = {
    id: 1,
    name: 'Ifty',
    email: 'syedshadnanmozammel@gmail.com',
    role: 'admin',
    isActive: true
}

console.log(getUserSummary(user));