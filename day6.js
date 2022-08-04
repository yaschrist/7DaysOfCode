let frutas = [];
let laticinios = [];
let congelados = [];
let higiene = [];

var resposta1 = "sim";
while (resposta1 != "não") {
    if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && higiene.length === 0) {
        resposta1 = prompt("Deseja adicionar algo a sua lista de compras?");
    } else {
        resposta1 = prompt("Digite 'sim' para continuar adicionando, 'remover' para remover um item ou 'não' para sair");
    }

    while (resposta1 != "sim" && resposta1 != "não" && resposta1 != "remover") {
        alert(`Operação não encontrada`);
        resposta1 = prompt("Digite 'sim' para continuar adicionando, 'remover' para remover um item ou 'não' para sair");
    }

    if (resposta1 == "não") {
        break;
    }

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
    if (resposta1 == "remover") {
        if (frutas.length === 0 && laticinios.length === 0 && congelados.length === 0 && higiene.length === 0) {
            alert(`A lista está vazia`);
        } else {
            remover = prompt(`Qual item deseja remover?\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Higiene: ${higiene}`);
            if (frutas.indexOf(remover) != -1){
                frutas.splice(frutas.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso`);
            } else if (laticinios.indexOf(remover) != -1) {
                laticinios.splice(laticinios.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso`);
            } else if (congelados.indexOf(remover) != -1) {
                congelados.splice(congelados.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso`);
            } else if (higiene.indexOf(remover) != -1) {
                higiene.splice(higiene.indexOf(remover), 1);
                alert(`O item ${remover} foi removido com sucesso`);
            } else {
                alert(`Item não encontrado`);
            }

        }
    }
}

alert(`Lista de compras:\n Frutas: ${frutas}\n Laticínios: ${laticinios}\n Congelados: ${congelados}\n Higiene: ${higiene}`);