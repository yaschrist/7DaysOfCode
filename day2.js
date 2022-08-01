var nome = prompt("Digite seu nome: ");
var idade = prompt("Quantos anos você tem?");
var linguagem = prompt("Qual linguagem de programação você está estudando?");


console.log("Oi " + nome + ", você tem " + idade + " anos e já está estudando " + linguagem);

var decisao = prompt("Você está gostando dessa linguagem? (1 = Sim, 2= Não)");

if (decisao == "1") {
    console.log("Parabéns, você tem um futuro com ela!");
} else {
    consolge.log("Que pena, talvez seja melhor você tentar outra");
}