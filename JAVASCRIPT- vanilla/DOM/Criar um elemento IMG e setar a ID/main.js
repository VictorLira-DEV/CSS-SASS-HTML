document.querySelector('input#enviar').addEventListener('click', clicou)

function clicou(){

    let img = document.createElement('img')
    img.setAttribute('src', 'foto-menina.png')
    img.setAttribute('id','imagem1')
    let resposta = document.querySelector('body')
    resposta.appendChild(img)
    
}