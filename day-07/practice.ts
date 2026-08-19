let orderStatus : "pending" | "shipped" | "delivered";

// orderStatus = 'delivered';
// orderStatus = 'pending';


// creates a much stronger contract.

// Now invalid states are rejected during development.

// 4. Literal Types + Function Parameters:
const changeStatus = ( status: 'pending' | 'shipped' | 'delivered'
) => {
    console.log(`order is ${status}`)
}

changeStatus('pending');
changeStatus('shipped');
// The function's parameter itself becomes a contract.

//changeStatus("banana");❌


// 5. Literal Types with Numbers:

let dice: 1 | 2 | 3 | 4 | 5;
dice = 1;
dice = 2;
dice = 3;

// I can also use boolean:
let isAvailable: true;

isAvailable = true;
// isAvailable = false; ❌


// 6. Real-World Example — User Role

type Role = "admin" | "editor" | "user";

let userRole:Role;

userRole = 'admin';
userRole = 'editor';
// userRole = 'Guest' ❌

// this is much safer than (userRole:string)