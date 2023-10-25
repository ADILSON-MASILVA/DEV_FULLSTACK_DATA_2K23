// 6. Crie uma função chamada "imprimeImpares" que recebe um parâmetro "num". A função deve imprimir no console todos os números ímpares de "num" até 0, em ordem decrescente. Em seguida, chame a função "imprimeImpares" com diferentes valores para "num" e exiba o resultado no console.


function imprimeImpares(num) {
    for( let i=0; i<=num; i++){
        if(i%2 !==0){
            console.log(i);
        }
    }  
}

imprimeImpares(70);