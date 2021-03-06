const pessoas = [
    { name: 'Victor', idade: 25 },
    { name: 'Reinaldo', idade: 37},
    { name: 'Janine', idade: 41 },
    { name: 'Carla', idade: 37 },
    ['primeiro lugar', 'segundo lugar', 'terceiro lugar'],
    [
        { trofeu: 'ouro' },
        { trofeu: 'prata' },
        { trofeu: 'Bronze'}
    ]

]


//REDUCE
// const somaDasIdades = pessoas.reduce((initialValue, idades) => initialValue + idades.idade, 0)
// console.log(somaDasIdades)

const [, , , , , [
    { trofeu: ouro }, ,
    { trofeu: bronze}


]] = pessoas

console.log(ouro, bronze)


const [
    { name: firstPlayerName, idade: FirstPlayerIdade }, , ,
    { name: fourthPlayerName, idade: fouthPlayerIdade },
    [primeiro,, terceiro]
] = pessoas



console.log(firstPlayerName, FirstPlayerIdade)
console.log(fourthPlayerName, fouthPlayerIdade)
console.log(primeiro)
console.log(terceiro)