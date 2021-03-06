//methods: getItem, removeItem, setItem
//use string value and string key


localStorage.setItem('name','Victor')
localStorage.removeItem('name')

console.log(localStorage.getItem('name'))


//SESSION STORAGE
sessionStorage.setItem('name', 'John')
sessionStorage.removeItem('name')
console.log(sessionStorage.getItem('name'))

//cookie

document.cookie = 'name=Kyle; expires=' + new Date(2021, 0, 1).toUTCString()
document.cookie = 'lastName=smith; expires=' + new Date(2021, 0, 1).toUTCString()

console.log(document.cookie)