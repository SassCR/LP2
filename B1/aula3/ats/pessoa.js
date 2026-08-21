export class pessoa {
    constructor(nome, email, telefone) {
        this.nome = nome;
        this.email = email;
        this.telefone = telefone;
    }


    saudacao() {
        console.log(`Olá, eu sou  ${this.nome}! 
Caso deseje entra em contato use esse numero:${this.telefone}! 
E também para assuntos de trabalho use o meu email:${this.email}.
         `);
    }
}
/*Utilizando JS

- Crie uma Classe chamada Pessoa com os atributos nome, email e telefone;
- Crie o método saudacao() que mostre uma mensagem de apresentação "Olá, sou o FULANO...";
-
Encaminhe somente os arquivos .js (Pessoa, Estudante e index)*/