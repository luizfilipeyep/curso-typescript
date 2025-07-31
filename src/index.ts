// Tipos Básicos

let age: number = 5
const firstName: string = "Filipe"
const isValid: boolean = true
let idk: any = 5

const list: number[] = [1 , 2, 3, 4, 5]

// Tupla
const person: [number, string] = [1, "Luiz"]

// Lista  de Tuplas
const people: [number, string][] = [
  [1, "Jane"],
  [2, "Doe"]
]

// Intersections
const productId: string | number | boolean = false

// Enum
enum Direction {
  Up = 1,
  Down = 2,
  Left = "Esquerda"
}
const direction = Direction.Up

// Type Assertions
const productName: any = "Boné"
let itemId = <string>productName 

console.log(age);
