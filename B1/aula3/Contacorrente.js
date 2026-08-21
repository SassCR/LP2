import { conta } from "./conta.js";
export class ContaCorrente extends conta {
    constructor(agencia, numero, cliente, saldo, taxa) {
    super(agencia, numero, cliente, saldo);
    this.taxa = taxa;
    }



    Extrato() {
        this.saldo--;
        console.log("A conta" + " possui R$:" + this.saldo);
    }
}