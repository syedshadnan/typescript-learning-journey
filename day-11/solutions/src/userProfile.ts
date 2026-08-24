// 🟢 Problem 1 — User Profile

type UserProfile = {
    id: number;
    name: string;
    address: {
        city: string;
        country: string;
    }
}

const displayLocation = (user: UserProfile) => {
    return `${user.name} lives in ${user.address.city}, ${user.address.country}`
}


const userInfo = {
    id: 41,
    name: 'Ifty',
    address: {
        city: 'Feni',
        country: 'Bangladesh'
    }
}

console.log(displayLocation(userInfo));