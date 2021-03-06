verificar()

function verificar(){
    if(typeof(Storage) !== "undefined"){
        alert('O navegador é compatível com Storage')
        initialize()
    }else{
        alert('atualize seu navegador...')
    }
}

function initialize(){
    if(sessionStorage.getItem('nome') !== null){
        alert("Olá " + sessionStorage.nome + " seja bem vindo(a) de volta :)")
    }else{
        alert("olá essa é sua primeira vez no nosso site")
        sessionStorage.nome = 'GuilheVrme'
    }
}