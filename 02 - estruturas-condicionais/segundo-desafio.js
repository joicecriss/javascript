/*
Faça um programa para calcular o valor de uma viagem.

Você terá 5 variáveis. Sendo elas:
1- Preço do etanol
2- Preço da gasolina
3- O tipo de combustivel que está no seu carro
4- Gasto médio de combustível do carro por Km
5- Distância em Km da viagem

Imprima no console o valor que será gasto para realizar esta viagem
*/ 

// Vídeo parou em 30 minutos

const etanol = 5;
const gasolina = 4.75;
const tipo = 'etanol';
const kmPorLitro = 12;
const distancia = 70;

const litrosConsumidos = distancia / kmPorLitro;
let valorGasto = 0;

if (tipo == 'etanol') {
    valorGasto = litrosConsumidos * etanol;
} else {
    valorGasto = litrosConsumidos * gasolina;
}

console.log(valorGasto.toFixed(2));