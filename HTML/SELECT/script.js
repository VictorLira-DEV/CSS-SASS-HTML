document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('flavours').addEventListener('input', handleSelect);
})

function handleSelect(ev) {
    let select = ev.target; //document.getElementById('flavours')
    console.log(select.value)
}

function handleData(ev) {
    let theInput = ev.target
}