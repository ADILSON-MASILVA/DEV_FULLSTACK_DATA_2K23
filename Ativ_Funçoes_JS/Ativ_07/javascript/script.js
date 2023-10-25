// 7. Crie uma função chamada "calculaAreaRetangulo" que recebe dois parâmetros, "base" e "altura". A função deve calcular a área de um retângulo utilizando a fórmula "base x altura" e retornar o resultado. Em seguida, chame a função "calculaAreaRetangulo" com diferentes valores para "base" e "altura" e exiba o resultado no console.

function calculaAreaRetangulo(base, altura) {
    return base * altura;
    
}

const area1 = calculaAreaRetangulo(5,3);
const area2 = calculaAreaRetangulo(7,7);
const area3 = calculaAreaRetangulo(5,8);

console.log("a área do primeiro retângulo é "+ area1);
console.log("A área do segundo retângulo é "+ area2);
console.log("A área do terceiro retângulo é "+area3);