/*
O IMC - Indice de Massa Corporal é um criterio da Organização mundial da saúde para dar uma indicação
sobre a condição de peso de uma pessoa adulta.

Formula para o IMC:
IMC = peso / (altura * altura)

Elabore um algoritmo que dado o peso e a altura de um adulto mostre a sua condição de acordo
com a tabela abaixo:

IMC em adultos Condição:
- Abaixo de 18.5: Abaixo do peso;
- Entre 18.5 e 25: Peso normal;
- Entre 25 e 30: Acima do peso;
- Entre 30 e 40: Obeso;
- Acima de 40: Obesidade grave
*/

const peso = 73.75;
const altura = 1.69;

const imc = peso / Math.pow(altura,2);
console.log(imc);

if (imc < 18.5) {
    console.log('Abaixo do peso');
} else if (imc >= 18.5 && imc < 25) {
    console.log('Peso normal');
} else if (imc >= 25 && imc < 30) {
    console.log('Acima do peso')
} else if (imc >= 30 && imc < 40) {
    console.log('Obeso');
} else {
    console.log('Obesidade Grave');
}