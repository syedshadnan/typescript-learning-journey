type User = {
    id: number;
    name: string;
    email: string;
    role: 'admin' | 'user';
    isActive: boolean;
}

const displayUserInfo = (user:User) => {
    return `ID: ${user.id} | Name: ${user.name} | Email: ${user.email} | Role: ${user.role} | Status: ${user.isActive}`;
}

const userInfo:User = {
    id: 1,
    name: 'Syed Shadnan Mozammel',
    email: 'syedshadnanmozammel@gmail.com',
    role: 'admin',
    isActive: true
}

console.log(displayUserInfo(userInfo));