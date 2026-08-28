export class conta {
    //atributos
    numero;
    //O comando readonly faz com que só dê para ler o atribudo com esse comando atribuido, sem pode modificar ele. E para pode editar ele apenas indo diretamente no construtor dele.
    #saldo;
    //O # faz com que deixe um atributo privado, fazendo com que só a class dona dele pode acessar diretamente usando o this.#saldo
    cliente;
    // O public faze com que o atributo que estiver com ela, pode ser usado por qualquer class
    get saldo() {
        return this.#saldo;
    }
    //encapsuladores - getters e setters || gets e sets é usado para modificar e caso seja algo sensivel é bom nem ter nenhum nem outro pra ser apenas modificado aqui.
    set saldo(valor) {
        this.#saldo = valor;
    }
    //Modificadores de acesso: Indica o nivel de acesso dos atributos
    //private - somente a classe em que ele está pode manipular diretamente
    //protected - somente a superclass (mãe) e subclasse (filhas) manipulam diretamente 
    //public - pode ser manipulado diretamente de qualquer lugar
    //Sempre que é necessário mexer em algo tem que usar o this.
    constructor(numero, cliente, saldoInicial) {
        this.numero = numero;
        this.cliente = cliente;
        this.#saldo = saldoInicial || 0;
    }
    //{Metados]
    depositar(valor) {
        if (valor <= 0) {
            console.log("O valor do deposito deve ser positivo!");
        }
        else {
            this.#saldo += valor;
            console.log(`Deposito de R$${valor} realizado com sucesso!`);
            5;
        }
    } //Isso que foi usado no sacar é gambiarra pra não precisar fica usando else
    sacar(valor) {
        if (valor <= 0) {
            console.log("o valor do saque deve ser positivo!");
            return;
        }
        if (valor > this.#saldo) {
            console.log("saldo insuficiente");
            return;
        }
        this.#saldo -= valor;
        console.log(`Saque de R$${valor} realizado com sucesso!`);
    }
    imprimirExtrado() {
        console.log(`Saldo atual é R$${this.#saldo}`);
    }
}
