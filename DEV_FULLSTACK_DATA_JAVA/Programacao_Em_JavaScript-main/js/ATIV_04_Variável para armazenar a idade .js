// Solicita ao usuário que insira a idade
var idade = parseInt(prompt("Digite a sua idade:"));

// Verifica se a idade é maior ou igual a 18 (idade de maioridade no Brasil)
if (idade >= 18) {
    console.log("Você é maior de idade.");
} else {
    console.log("Você não é maior de idade.");
}