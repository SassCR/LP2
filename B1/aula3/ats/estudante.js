import { pessoa } from "./pessoa.js";
export class Estudante extends pessoa {
    constructor(nome, email, telefone, RA) {
        super(nome, email, telefone)
        this.RA = RA;
    }
    saudacao() {
        console.log(`Olá, sou o novo estudante, me chamo ${this.nome} e esse é o meu RA:${this.RA}.
Caso deseje entra em contato, esse é o meu número:${this.telefone}. 
E esse o meu email:${this.email}`);
    }
}

/* Em seguida crie uma Classe Estudante que será subclasse da Classe Pessoa;
- A Classe Estudante deve ter o atributo RA e o método saudacao()
 que contenha uma mensagem de apresentação "Olá, sou FULANO e meu RA é XXXXXX".
*/