// 🔥 Final Challenge — User Account System

type UserAccount = {
  readonly id: number;
  userName: string;
  email: string;
  phone?: string;
  role: "admin" | "moderator" | "user";
  status: "active" | "inactive" | "banned";
  balance: number;
};

const getAccountSummary = (account: UserAccount) => {
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

const updateUsername = (account: UserAccount, newUsername: string) => {
  account.userName = newUsername;
  return account;
};

const user: UserAccount = {
  id: 1,
  userName: "Syed Shadnan Mozammel",
  email: "syedshadnanmozammel@gmail.com",
  role: "admin",
  status: "active",
  balance: 50000000,
};

console.log(getAccountSummary(user));
console.log(updateUsername(user, "Ifty"));
