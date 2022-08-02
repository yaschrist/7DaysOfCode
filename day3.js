var resposta1 = prompt("Você quer se especializar em Front (1) ou Back (2) End?");
if (resposta1 == "1") {
    var resposta2 = prompt("Ok Front, você quer aprender React (1) ou Vue (2)?");
    if (resposta2 == 1) {
        var linguagem = "React"
    } else {
        var linguagem = "Vue"
    }
} else {
    var resposta2 = prompt("Ok Back, você quer aprender C# (1) Ou Java (2)?");
    if (resposta2 == "1" ) {
        var linguagem = "C#"
    } else {
        var linguagem = "Java"
    }
}

var resposta3 = prompt("Você quer se especializar (1) ou continuar se desenvolvendo para tornar FullStack? (2)");
if (resposta3 == "1"){
    alert(`Boa sorte! Tenha foco total ${linguagem}`);
} else {
    alert(`Continue se desenvolvendo além de ${linguagem}!`);
}

var resposta4 = prompt("Tem mais alguma tecnologia que você quer aprender? Responda com ok");
while (resposta4 == "ok"){
    var tecnologia = prompt("Qual?");
    alert(`${tecnologia} é uma boa escolha, boa sorte!`);
    resposta4 = prompt("Mais alguma tecnologia? Responda com ok");
}