/*
Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de
etiqueta e a escolha da condição de pagamento.
Utilize os códigos da tabela a seguir para ler qual a condiç]ao de pagamento escolhida e efetuar o
calculo adequado:

Código condição de pagamento:
- À vista Débito, recebe 10% de desconto;
- À vista no Dinheiro ou PIX, recebe 15% e desconto;
- Em duas vezes, preço normal de etiqueta sem juros;
- Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/

function aplicarDesconto(valor, desconto) {
    desconto = valor * (desconto / 100);
    return valor - desconto;
}

function aplicarJuros(valor, juros) {
    juros = valor * (juros / 100);
    return valor + juros;
}

const precoEtiqueta = 100;
const formaPagamento = 4;

if (formaPagamento === 1) {
    console.log('Valor a pagar: ' + aplicarDesconto(precoEtiqueta, 10).toFixed(2));
} else if (formaPagamento === 2) {
    console.log('Valor a pagar: ' + aplicarDesconto(precoEtiqueta, 15).toFixed(2));
} else if (formaPagamento === 3) {
    console.log('Valor a pagar: ' + valorTotal.toFixed(2));
} else {
    console.log('Valor a pagar: ' + aplicarJuros(precoEtiqueta, 10).toFixed(2) );
}  