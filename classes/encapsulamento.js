 export class Carro {
    constructor(nome, ano, cor) {
        this.nome = nome;
        this.ano = ano;
        this.cor = cor;
    }
    idade(){
        const dataAtual = new Date();
        return dataAtual.getFullYear() - this.ano;
    }
}

const meuCarro = new Carro("Creta N line ", 2025, "Cinza Chumbo");   
console.log(meuCarro.nome);
console.log("O ano do meu carro é " + meuCarro.ano);
console.log(meuCarro.cor);