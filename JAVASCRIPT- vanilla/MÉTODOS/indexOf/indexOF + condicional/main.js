/*const items = [
    { name: 'Bike',     price: 100},
    { name: 'TV',       price: 200},
    { name: 'Album',    price: 10},
    { name: 'Book',     price: 5},
    { name: 'Phone',    price: 500},
    { name: 'Computer', price: 1000},
    { name: 'Keyboard', price: 25}

]

const filteredItems = items.filter((item) => {
    return item.price <= 100
})

console.log(items)
console.log(filteredItems)  
*/

/*
const yetAnotherArray = [1,2,3,4,5,2,6,3,7,8,9, 67]

let novoValor = yetAnotherArray.forEach((elem, index, arr) => {
    console.log(index)
})
*/

/*
PENDENCIA 

const currentArray = [1,2,3,4,5,5,6,7,8,9]

const filteredItems = currentArray.filter((item, index, arr)=>{
    return arr.indexOf(item) === index
})

console.log(filteredItems)
*/

/*

FILTER EM OBJETOS

const currentArray = [
    {nome:'victor',     idade: 34},
    {nome:'jessica',    idade: 23},
    {nome:'kamily',     idade: 22},
    {nome:'anna clara', idade:12},
    {nome:'karol',      idade:12}
]

const newArray = currentArray.filter((item, index, arr) => {
    return item.idade < 18
})

console.log(newArray)
*/


//INDEXOF

let currentArray = [
    {nome:'jessica', cor:'loira',  idade: 12},
    {nome:'katia', cor:'loira',  idade: 15},
    {nome:'kelly', cor:'loira',  idade: 17},
    {nome:'cristine', cor:'loira',  idade: 45},
    {nome:'camila',  cor:'morena', idade: 22},
    {nome:'brenda',  cor:'ruiva',  idade: 44}
]

let loiras = 0

let newArray =  currentArray.filter((item, index, arr) => {
    if(item.cor.indexOf('l') == 0 || item.cor.indexOf('L') == 0){
        if(item.idade < 18){
            loiras ++
            return item
        }
    }
})

console.log(newArray)
console.log(`temos ${loiras} loiras maiores de idade`)