const children = Array.from(document.getElementsByClassName('child'))
const parent = Array.from(document.getElementsByClassName('parent'))

children.forEach(changeColor)

function changeColor(element) {
    element.style.backgroundColor = 'green'
}

parent.forEach((item) => {
    item.style.backgroundColor = 'red'
})
