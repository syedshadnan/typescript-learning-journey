// 🟡 Problem 2 — Admin Extension

interface User {
  id: number;
  name: string;
  email: string;
}

interface Admin extends User {
    permissions: string[]
}

const getAdminPermissions = (admin: Admin) => {
  return admin.permissions;
};

const admin:Admin = {
    id: 1,
    name: 'Syed Shadnan Mozammel',
    email: 'syedshadnanmozammel@gmail.com',
    permissions: ['edit', 'remove', 'add']
}

console.log(getAdminPermissions(admin));