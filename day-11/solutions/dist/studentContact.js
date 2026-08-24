"use strict";
// 🟡 Problem 2 — Student Contact
Object.defineProperty(exports, "__esModule", { value: true });
const getStudentContact = (student) => {
    if (typeof student.contact.phone !== 'undefined') {
        return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city} | Phone: ${student.contact.phone}`;
    }
    return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city}`;
};
const studentInfo1 = {
    id: 41,
    name: 'Ifty',
    contact: {
        email: "ifty@example.com",
        phone: '+123456',
    },
    address: {
        city: 'Feni',
        country: 'Bangladesh'
    }
};
const studentInfo2 = {
    id: 41,
    name: 'Ifty',
    contact: {
        email: "ifty@example.com",
    },
    address: {
        city: 'Feni',
        country: 'Bangladesh'
    }
};
console.log(getStudentContact(studentInfo1));
console.log(getStudentContact(studentInfo2));
//# sourceMappingURL=studentContact.js.map