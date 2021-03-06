// const container = document.querySelector('.container')
// const parents = Array.from(container.children)
// const parentOne = parents[0]
// const children = parentOne.children
// // changeColor(container)
// changeColor(children[0])

// // parents.forEach(changeColor)

// function changeColor(element) {
//     element.style.backgroundColor = 'purple'
// }


//-----------------------------------------------------------
// //SELECIONANDO UMA DIV CHILD INTERNA

// //querySeletor pega sempre o primeiro elemento html com a classe ou id em questão

// const container = document.querySelector('.container')
// // const children = container.querySelector('.child')
// // changeColor(children)
// const children = container.querySelectorAll('.child') //<--- nesse caso nos pulamos o parentElement e fomos direto para o child
// console.log(children)
// children.forEach(changeColor)

// function changeColor(element) {
//     element.style.backgroundColor = 'purple'
// }

// //-----------------------------------------------------------
//SELECIONANDO UMA DIV PARENT DE DENTRO DE UMA DIV CHILD

// const childOne = document.querySelector('#child-one')
// // const parent = childOne.parentElement
// // const grandParent = parent.parentElement
// // PULANDO ALGUNS ELEMENTO ACIMA
// const grandParent = childOne.closest('.container') //<-- o método closest, trabalha de dentro para fora
// changeColor(grandParent)

// function changeColor(element) {
//     element.style.backgroundColor = 'purple'
// }

// //-----------------------------------------------------------

// const childOne = document.querySelector('#child-one')
// const childTwo = childOne.nextElementSibling
// changeColor(childTwo.previousElementSibling)

// function changeColor(element) {
//     element.style.backgroundColor = 'purple'
// }