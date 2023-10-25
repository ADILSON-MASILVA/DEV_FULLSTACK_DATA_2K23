// 3. Crie uma função chamada "maiorValor" que recebe três parâmetros, "a", "b" e "c". A função deve retornar o maior valor entre os três. Em seguida, chame a função "maiorValor" com valores diferentes e exiba o resultado no console.

function maiorValor (a,b,c){
    if (a > b && a > c){
        return a;
    }else if (b > a && b >c){
        return b;
    }else{
        return c;
    }
}
const result = maiorValor( 21,9,7);
const result1= maiorValor(4,6,9);

console.log("Resultado 1: " + result); 
console.log("Resultado 2: " + result1); 


