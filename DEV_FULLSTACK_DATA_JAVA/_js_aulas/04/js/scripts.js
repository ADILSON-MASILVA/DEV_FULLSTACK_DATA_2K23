let nota1 = parseFloat(prompt("nota01"))
let nota2 = parseFloat(prompt("nota02"))
let nota3 = parseFloat(prompt("nota03"))

let media = (nota1 + nota2 + nota3) /3

if (media < 5){
    console.log(`Aluno(a) reprovado(a) com media ${media}`)
} else if (media >= 5 && media < 7) {
    console.log (`Aluno(a) em recuperação com media ${media}`)
} else { 
    console.log (`Aluno(a) em Aparovado  com media ${media}`)
}