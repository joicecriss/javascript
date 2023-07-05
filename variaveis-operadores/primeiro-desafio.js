/*
Faça um programa para calcular o valor de uma viagem.

Você terá 3 variáveis. Sendo elas:
1- Preço do combustível
2- Gasto médio de combustível do carro por Km
3- Distância em Km da viagem
*/ 

const precoCombustivel = 5.79;
const kmPorLitro = 12;
const distanciaKm = 1580;

const litrosComsumidos = distanciaKm / kmPorLitro;
const valorGasto = litrosComsumidos * precoCombustivel;

console.log(valorGasto.toFixed(2));