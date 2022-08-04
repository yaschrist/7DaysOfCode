let escolha = 0;

function soma(num1, num2) {
    return Number(num1) + Number(num2);
}

function subtracao(num1, num2) {
    return num1 - num2;
}

function multiplicacao(num1, num2) {
    return num1 * num2;
}

function divisao(num1, num2) {
    return num1/num2;
}

while(escolha != 5) {
    escolha = prompt("Escolha uma : 1-Soma, 2-Subtração, 3-Multiplicação, 4-Divisão, 5-Sair");

    if(escolha == "5") {
        alert(`Obrigada!`)
        break;
    }

    num1 = prompt("Digite o primeiro número: ");
    num2 = prompt("Digite o segundo número: ");


    switch(escolha) {
        case "1":
            alert(`O resultado da soma é: ${soma(num1, num2)}`);
            break;
        case "2":
            alert(`O resultado da subtração é: ${subtracao(num1, num2)}`);
            break;
        case "3":
            alert(`O resultado da multiplicação é: ${multiplicacao(num1, num2)} `);
            break;
        case "4":
            alert(`O resultado da divisão é: ${divisao(num1, num2)}`);
            break;
        default:
            alert(`Opção inválida`);
    }

}

