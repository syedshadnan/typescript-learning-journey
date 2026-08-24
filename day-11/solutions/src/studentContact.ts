// 🟡 Problem 2 — Student Contact

type Student = {
    id: number;
    name: string;
    contact: {
        email: string;
        phone?: string;
    }
    address: {
        city: string;
        country: string;
    }
}

const getStudentContact = (student: Student) => {
    if (typeof student.contact.phone !== 'undefined'){
        return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city} | Phone: ${student.contact.phone}`
    }
    return `Name: ${student.name} | Email: ${student.contact.email} | City: ${student.address.city}`
}

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
}

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
}

console.log(getStudentContact(studentInfo1));
console.log(getStudentContact(studentInfo2));