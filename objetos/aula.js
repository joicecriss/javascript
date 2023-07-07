const pessoa = {
    nome: 'Joice',
    idade: '24',

    descrever: function () {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

class Pessoa {
    nome;
    idade;

    constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
    }

    descrever() {
        console.log(`Meu nome é ${this.nome} e minha idade é ${this.idade}.`);
    }
}

const joice = new Pessoa('Joice', 24);
const joao = new Pessoa('João', 23);

joice.descrever();
joao.descrever();