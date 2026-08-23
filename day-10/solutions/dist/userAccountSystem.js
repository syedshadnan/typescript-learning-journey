"use strict";
// 🔥 Final Challenge — User Account System
Object.defineProperty(exports, "__esModule", { value: true });
const getAccountSummary = (account) => {
    if (typeof account.phone !== "undefined") {
        return `Username: ${account.userName}
Email: ${account.email}
Role: ${account.role}
Status: ${account.status}
Balance: ${account.balance}
Phone: ${account.phone}`;
    }
    return `Username: ${account.userName}
Email: ${account.email}
Role: ${account.role}
Status: ${account.status}
Balance: ${account.balance}`;
};
const updateUsername = (account, newUsername) => {
    account.userName = newUsername;
    return account;
};
const user = {
    id: 1,
    userName: "Syed Shadnan Mozammel",
    email: "syedshadnanmozammel@gmail.com",
    role: "admin",
    status: "active",
    balance: 50000000,
};
console.log(getAccountSummary(user));
console.log(updateUsername(user, "Ifty"));
//# sourceMappingURL=userAccountSystem.js.map