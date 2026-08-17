// 🚀 Problem 3 — Real-World Scenario

const formatUserId = (id: number | string)=> {
    if (typeof id === 'number'){
        return `User-ID-${id}`
    }
    return id.toUpperCase()
}

console.log(formatUserId(101))
// "User-ID-101"

console.log(formatUserId('user_101'))
// "USER_101"