"use strict";
// 🟡 Problem 2 — Admin Extension
Object.defineProperty(exports, "__esModule", { value: true });
const getAdminPermissions = (admin) => {
    return admin.permissions;
};
const admin = {
    id: 1,
    name: 'Syed Shadnan Mozammel',
    email: 'syedshadnanmozammel@gmail.com',
    permissions: ['edit', 'remove', 'add']
};
console.log(getAdminPermissions(admin));
//# sourceMappingURL=problem2.js.map