
// 'use '...' para retornar todos os valores'

const alphabet = ['a', 'b', 'c', 'd', 'e', 'f']
const numbers = ['1', '2' ,'3' , '4', '5', '6']
const [a, b, c, ...rest] = alphabet //this is the 'spread operator' 

const newArray = [...alphabet, ...numbers] //this is what spread operador + destruturing is able to do
console.log(newArray)

console.log(a)
console.log(b)
console.log(c)
console.log(rest)
console.log(alphabet.push(...numbers))
console.log(newArray)