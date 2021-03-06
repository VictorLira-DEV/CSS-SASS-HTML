//trocamos a li css por jquery

const mylist = document.getElementById('myList')
const cssListItem = mylist.children[1]

//create a new element/node
const newlistItem = document.createElement('li')
newlistItem.textContent = 'jQuery '

mylist.replaceChild(newlistItem, cssListItem)