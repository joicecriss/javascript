/*
Faça um algoritmo que dada as 3 notas tiradas por um aluno em um semestre da faculdade
calcule e imprima sua média e sua classificação conforme a tabela abaixo:

Média = ( nota 1 + nota 2 + nota 3) / 3;

Classificação:
- Média menor que 5, reprovado;
- Média entre 5 e 7, recuperação;
- Média acima de 7, passou de semestre;
*/ 

const nota1 = 7;
const nota2 = 8;
const nota3 = 8;

const media = (nota1 + nota2 + nota3) / 3;
console.log('Sua média é de: ' + media.toFixed(2));

if (media < 5) {
    console.log('Você foi reprovado!');
} else if (media >= 5 && media <= 7) {
    console.log('Você está de recuperção!');
} else {
    console.log('Você passou de semestre!');
}