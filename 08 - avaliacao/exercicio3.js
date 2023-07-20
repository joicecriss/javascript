/*
Faça um programa que calcule e imprima o salário a ser 
transferido para um funcionário.

Para realizar o cálculo receba o valor bruto do sálario e o adicional dos beneficios.
O sálario é transferido e calculado da seguinte maneira:

valor bruto do sálario - percentual de imoposti mediante a faixa salarial + adicional dos beneficios

Para calcular o percentual de imposto segue as aliquotas:

De R$0,00 a R$1100,00 = 5.00%
De R$1100,01 a R$2500,00 = 10.00%
Maior que R$2500,00 = 15.00%

Exemplo: 
Entrada: [ 2000(sálario bruto) , 250(adicional dos beneficios) ]
Saída: 2050,00
*/

const { gets, print } = require('./funcoes-auxiliares-exc3');

const valorSalario = gets();
const valorBeneficio = gets();

function calcularPercentual(valor, percentual) {
    return valor * (percentual / 100);
}

function pegarAliquota(salario) {

    if (salario >= 0 && salario <= 1100) {
        return 5;
    } else if (salario >= 1100.01 && salario <= 2500) {
        return 10;
    } else if (salario > 2500) {
        return 15;
    }
}

const aliquotaImposto = pegarAliquota(valorSalario);
const valorImposto = calcularPercentual(valorSalario, aliquotaImposto);
const valorATransferir = valorSalario - valorImposto + valorBeneficio;

print(valorATransferir);