class Carro {
    constructor(nome, ano ){
        this.nome = nome;
        this.ano = ano;
    }
}

const meuCarro = new Carro("Porsche 911 Turbo S", 2026);
console.log(meuCarro.nome);
console.log(meuCarro.ano);