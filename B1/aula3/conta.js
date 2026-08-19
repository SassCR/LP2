export class conta {//sempre maiusculo
    constructor(agencia, numero, cliente, saldo = 0) {
        this.agencia = agencia;
        this.numero = numero;
        this.cliente = cliente;
        this.saldo = saldo;
    }
    depositar(valor) {
        if(valor <= 0){
            console.log("ERRO: valor invalido");
        }else {
            this.saldo += valor;
            this.Extrato();
        }
    }
    sacar(valor) {
        if(valor > this.saldo){
             console.log("ERRO:saldo insuficiente");
        }else if(valor <= 0){
             console.log("ERRO:valor invalido");
        }else{
            this.saldo -= valor;
            this.Extrato()
        }
    }
    Extrato() {
        console.log("A conta de " + this.numero + " possui R$:" + this.saldo);

    }
}