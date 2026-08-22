type Name = string;
const user:Name = 'ifty';

type User = {
    name: string;
    age: number;
    role: "admin" | "editor" | "moderator"
}

const userInfo = (user:User) => {
    return user;
}

const info:User = {
    name: 'ifty',
    age: 25,
    role: 'admin'
}

console.log(userInfo(info))


type UserId = string | number;
const id:UserId = 41;

// real word data modeling:
type Role = 'admin' | 'editor' | 'user';
type Status = 'active' | 'inactive'

type UserType = {
    name: string;
    age: number;
    role: Role;
    status: Status;
}

const DisplayUserInfo = (user:UserType) => {
    return `${user.name} is ${user.age} years old and working as a ${user.role}. Status:${user.status}`;
}

const userInformation:UserType = {
    name: 'Syed Shadnan Mozammel',
    age: 25,
    role: 'admin',
    status: 'active'
}
console.log(DisplayUserInfo(userInformation));
