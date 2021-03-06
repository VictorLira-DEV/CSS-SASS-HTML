//criando elementos e removendo
let exemplo1 = document.createElement('p')
exemplo1.innerHTML ='casa verde com grama no quintal'

let exemplo2 = document.createElement('p')
exemplo2.innerHTML ='o filme o senhor dos aneis'

document.getElementById('container').appendChild(exemplo1)
document.getElementById('container').appendChild(exemplo2)

document.getElementById('container').removeChild(exemplo2) //insira a variavel no parâmetro

//acessando um elemento existente e removendo elemento
let exemplo3 = document.getElementsByTagName('h1')[1]

document.getElementById('container').removeChild(exemplo3) //insira a variavel no parâmetro
