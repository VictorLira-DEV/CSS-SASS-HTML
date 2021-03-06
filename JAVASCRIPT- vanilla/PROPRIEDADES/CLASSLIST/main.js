let box1 = document.querySelector('div#boxOne')
let box2 = document.querySelector('div#boxTwo')

box1.addEventListener('mouseover', turnRed)
box2.addEventListener('mouseover', turnGreen)

box1.addEventListener('mouseout', hideRed)
box2.addEventListener('mouseout', hideGreen)


function turnRed(){
    let change = document.querySelector('div#boxOne')
    change.classList.add('n1')
}

function turnGreen(){
    let change = document.querySelector('div#boxTwo')
    change.classList.add('n2')
}


function hideRed(){
    let change1 = document.querySelector('div#boxOne')
    change1.classList.remove('n1')
    change1.classList.add('hideRed')
}

function hideGreen(){
    let change2 = document.querySelector('div#boxTwo')
    change2.classList.remove('n2')
    change2.classList.add('hideGreen')

}
