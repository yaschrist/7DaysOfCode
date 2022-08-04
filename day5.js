let frutas = [];
let laticinios = [];
let congelados = [];
let higiene = [];

var resposta1 = "sim";
resposta1 = prompt("Deseja adicionar algo a sua lista de compras?");
while (resposta1 != "não") {
    if (resposta1 == "sim") {
        elemento = prompt("O que você deseja adicionar?");
        categoria = prompt("Em qual categoria ele se encaixa? frutas, laticinios, congelados ou higiene");
        if (categoria == "frutas") {
            frutas.push(elemento);
        } else if (categoria == "laticinios") {
            laticinios.push(elemento);
        } else if (categoria == "congelados") {
            congelados.push(elemento);
        } else if (categoria == "higiene") {
            higiene.push(elemento);
        } else {
            alert("Categoria não encontrada!")
        }
    }
    resposta1 = prompt("Deseja adicionar mais alguma coisa?");
    if (resposta1 == "não") {
        break;
    }
}

alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Higiene: ${higiene}`);