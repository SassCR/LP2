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
var contaR = new Conta(123, 435, "Cleber", 9);

contaR.Extrato();
contaR.depositar(100);
contaR.Extrato();
contaR.sacar(50);
contaR.Extrato();
