"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const displayUserInfo = (user) => {
    return `ID: ${user.id} | Name: ${user.name} | Email: ${user.email} | Role: ${user.role} | Status: ${user.isActive}`;
};
const userInfo = {
    id: 1,
    name: 'Syed Shadnan Mozammel',
    email: 'syedshadnanmozammel@gmail.com',
    role: 'admin',
    isActive: true
};
console.log(displayUserInfo(userInfo));
//# sourceMappingURL=1.userModel.js.map