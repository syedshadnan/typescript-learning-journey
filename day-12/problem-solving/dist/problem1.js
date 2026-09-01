"use strict";
// 🟢 Problem 1 — User Profile
Object.defineProperty(exports, "__esModule", { value: true });
const getUserSummary = (user) => {
    return `Name: ${user.name} | email: ${user.email} | Role: ${user.role} | Active Status: ${user.isActive}`;
};
const user = {
    id: 1,
    name: 'Ifty',
    email: 'syedshadnanmozammel@gmail.com',
    role: 'admin',
    isActive: true
};
console.log(getUserSummary(user));
//# sourceMappingURL=problem1.js.map