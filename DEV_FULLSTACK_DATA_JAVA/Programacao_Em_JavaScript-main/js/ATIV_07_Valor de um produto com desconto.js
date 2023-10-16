// Solicita ao usuário que insira o valor original do produto e o desconto
var valorOriginal = parseFloat(prompt("Digite o valor original do produto:"));
var desconto = parseFloat(prompt("Digite o valor do desconto (em porcentagem):"));

// Calcula o valor com desconto...
var valorComDesconto = valorOriginal - (valorOriginal * (desconto / 100));

// Exibe o valor original e o valor com desconto no console
console.log("Valor original do produto: R$" + valorOriginal.toFixed(2));
console.log("Valor com desconto: R$" + valorComDesconto.toFixed(2));