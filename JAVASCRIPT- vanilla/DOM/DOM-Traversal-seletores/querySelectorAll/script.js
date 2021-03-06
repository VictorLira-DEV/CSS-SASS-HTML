const children = Array.from(document.querySelectorAll('.child'))
const parent = Array.from(document.querySelectorAll('.parent'))
parent.forEach(changeTheColor)


children.forEach((item) => {
    item.style.backgroundColor = 'pink'
})

function changeTheColor(element) {
    element.style.backgroundColor = 'purple'
}