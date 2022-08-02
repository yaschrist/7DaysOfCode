var num = Math.floor(Math.random() * (10 - 0 + 1) + 0);;
tentativa1 = prompt("Que número você acha que é?");
if (tentativa1 != num) {
    for(i=0; i<2; i++){
        tentativa2 = prompt("Mais uma tentativa: ");
        if(tentativa2 == num) {
            alert("Parabéns, você acertou!");
            break;
        }
    }
    alert(`O número era ${num}`);
} else {
    alert("Parabéns, você acertou!")
}
