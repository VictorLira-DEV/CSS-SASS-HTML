//Array retornado: ["Fiat", "Ford"]
//IndexOf diz qua é a posição da primeira letra ou palavra entrontrada 

const marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
const marcasIniciadasComF = [];
let novoIndice = 0;

function selecionarMarcas(item, indice) {
    if (marcas[indice].indexOf("F") == 0) {
        marcasIniciadasComF.push(item)
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);