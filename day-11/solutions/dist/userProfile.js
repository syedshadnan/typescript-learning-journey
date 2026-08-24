"use strict";
// 🟢 Problem 1 — User Profile
Object.defineProperty(exports, "__esModule", { value: true });
const displayLocation = (user) => {
    return `${user.name} lives in ${user.address.city}, ${user.address.country}`;
};
const userInfo = {
    id: 41,
    name: 'Ifty',
    address: {
        city: 'Feni',
        country: 'Bangladesh'
    }
};
console.log(displayLocation(userInfo));
//# sourceMappingURL=userProfile.js.map