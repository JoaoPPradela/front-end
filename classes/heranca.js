import { Carro } from "./encapsulamento.js";

class Modelo extends Carro {
    constructor(nome, modelo, ano) {
        super(nome, modelo, ano);
        this.modelo = modelo;

    }
    exibir() {
        return "Este " + this.nome + " é do modelo " + this.modelo +  
        " e tem " + this.idade() + " anos de idade.";        
    }
}
    const meuModelo = new Modelo("Nivus", 2025, "Azul Titan", "SUV Highline");
    console.log(meuModelo.exibir());