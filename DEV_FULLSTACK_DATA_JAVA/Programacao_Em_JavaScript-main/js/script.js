// Solicita ao usuário que insira a temperatura em graus Celsius
var temperaturaCelsius = parseFloat(prompt("Digite a temperatura em graus Celsius:"));

// Converte a temperatura de Celsius para Fahrenheit..
var temperaturaFahrenheit = (temperaturaCelsius * 9/5) + 32;

// Exibe a temperatura em ambas as escalas no console
console.log("Temperatura em Celsius: " + temperaturaCelsius + "°C");
console.log("Temperatura em Fahrenheit: " + temperaturaFahrenheit + "°F");