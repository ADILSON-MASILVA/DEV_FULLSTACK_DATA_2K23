/** let contador = 1;

while (contador <= 50) {
    console.log(contador)
    //contador++;
    contador = contador +1 
}
*/

/** Utilizando a estrutura wile solicite ao usuario que escolha um numero 0 ate 10 apresente apartir do numero escolhido o somatorio ate 7 no console  
let DigNumber = parseFloat(prompt("Digite Um Numero"))

while (DigNumber <= 100) {
    console.log(DigNumber)
    //contador++;
    DigNumber = DigNumber + 5 
}
*/

/** Contagem regressiva de um numero  cuidado póde travar o browser  

let DigNumber = parseFloat(prompt("Digite Um Numero"))

while (DigNumber >= 0) {
    console.log(DigNumber)
    //contador++;
    DigNumber = DigNumber - 5 
    
}

let contador = 5;

do{
    console.log(contador)
    contador--
} while (contador > 0)
Utilizando o comando for neste casso o let i =  e apartir de que numero devo printar e o segundo i definir ate que numero devo buscar.

for(let  i = 20; i <= 100; i++){
    console.log(i)
}

/**utilizando o for escreva os numero de 20 ate cem de 100 
 *  
for(let  i = 20; 1 <= 100; i+=1){
    console.log(i)
}
 // Escreva um programa em js que solicte um numero ao usuario e exiba todos os numeros impares entre 1 e o numero informado. Utilize um estrutura de repetção " laço for" para verificar se cada numero entre 1 e o numero informado e impar, e exiba os numero impares  no console::: 

let numero = parseInt(prompt("Digite Um Numero"))
console.log("Numero impares entre 1 e" + numero + ":")

for(let i = 1; i <= numero; i+=1){
    if(i % 2 !== 0){
        console.log(i)
    }
}

Escreva um programa em js que solicte um numero ao usuario e exiba todos os numeros impares entre 1 e o numero informado. Utilize um estrutura de repetção " laço for" para verificar se cada numero entre 1 e o numero informado e par, e exiba os numero pares no console::: */
let numero = parseInt(prompt("Digite Um Numero"))
console.log("Numero impares entre 1 e" + numero + ":")

for(let i = 1; i <= numero; i++){
    if(i % 2 !== 1){
        console.log(i)
    }
}