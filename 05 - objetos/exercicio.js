/*
Crie uma classe para representar carros.
Os carros possuem uma marca, uma cor e um gasto médio de combustivel por km rodado.
Crie um método que dado a quantidade de km e o preço do combustivel nos dê o valor
gasto em reais para realizar este percurso.
*/

class Carro {
    marca;
    cor;
    gastoMedioKm;

    constructor(marca, cor, gastoMedioKm) {
        this.marca = marca;
        this.cor = cor;
        this.gastoMedioKm = gastoMedioKm;
    }

    calcularPercurso(distancia, valorCombustivel) {
        return distancia * this.gastoMedioKm * valorCombustivel;
    }
}

const uno = new Carro('Fiat', 'Prata', 1/12);
console.log(uno.calcularPercurso(70, 5).toFixed(2));
