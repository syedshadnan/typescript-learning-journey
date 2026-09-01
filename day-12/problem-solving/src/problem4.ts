// 🔴 Problem 4 — Declaration Merging

interface Customer {
  id: number;
  name: string;
}

interface Customer {
  email: string;
  phone?: string;
}

const customer:Customer = {
    id: 1,
    name: 'Ifty',
    email: 'example@gmail.com'
}