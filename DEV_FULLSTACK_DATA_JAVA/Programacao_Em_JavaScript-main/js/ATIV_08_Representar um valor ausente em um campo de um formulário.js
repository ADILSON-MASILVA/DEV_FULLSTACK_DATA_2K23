// Solicita ao usuário que insira um valor
var userInput = prompt("Por favor, insira um valor:");

// Verifica se o valor inserido está em branco ou é nulo
if (userInput === null || userInput.trim() === "") {
    console.log("Você deixou o campo em branco.");
} else {
    console.log("O valor inserido é: " + userInput);
}