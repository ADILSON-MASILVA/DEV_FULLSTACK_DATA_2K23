// Solicitação ao usuário que insira a temperatura em graus Celsius
var temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Converção a temperatura de Celsius para Fahrenheit
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Exibir a temperatura em ambas as escalas no console
console.log("Temperatura em Celsius: " + temperaturaCelsius + "°C");
console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit + "°F");