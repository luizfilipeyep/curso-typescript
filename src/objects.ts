// Type
type Order = {
  productId: string
  price: number
}

type User = {
  firstName: string
  age: number
  email?: string
  password?: string
  orders: Order[]
}

const user: User = {
  firstName: "Luiz",
  age: 20,
  orders: [{productId: "1", price: 200}]
}

// Unions
type Author = {
  books: string[]
}
const author: Author & User = {
  age: 2,
  books: ["1"],
  firstName: "Filipe",
  orders: []
}

// Interfaces
interface UserInterface {
  readonly firtName: string
  email: string
}
const emailUser: UserInterface = {
  email: "luiz@email.com",
  firtName: "Luiz"
}

