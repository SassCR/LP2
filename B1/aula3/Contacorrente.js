import { conta } from "./conta.js";
export class ContaCorrente extends conta {
    Extrato() {
        this.saldo--;
        console.log("A conta"+ " possui R$:" + this.saldo);
    }
}