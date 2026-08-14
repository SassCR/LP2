class Conta {//sempre maiusculo
    constructor(agencia, numero, cliente, saldo = 0) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    }
    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor;
            // this.saldo = this.saldo = valor; Isso aqui seria de um jeito mais completo se não fosse por aquele +=
        } else {
            console.log("ERRO:Informe um valor.");
        }
    }
    sacar(valor) {
        if (valor > 0 && valor <= this.saldo) {
            this.saldo -= valor;
        } else {
            console.log("ERRO:Informe um valor menor ou igual ao saldo");
        }
    }
    Extrato() {
        console.log("A conta de nr. " + this.numero + " possui R$:" + this.saldo);

    }
}

//Conta Conrrente desconta R$1.00 por extato impresso
//extends faz com que a contaCorrente vire filha da conta.
class ContaCorrente extends Conta {
    constructor(agencia, numero, cliente, saldo, taxa) {
        super(agencia, numero, cliente, saldo);
        this.taxa = taxa;
    }



    Extrato() {
        this.saldo--;
        console.log("A conta de nr. " + this.numero + " possui R$:" + this.saldo);
    }
}
//Essa parte seria como um console.log, aqui você cria a conta e escolhe o que vai ser exibido
var contaR = new Conta(123, 435, "Cleber", 100);

contaR.Extrato();

contaR.Extrato();

contaR.Extrato();

var contaC = new ContaCorrente(123, 111, "Figado", 100);
contaC.Extrato();

contaC.Extrato();

contaC.Extrato();
