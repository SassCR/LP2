import { conta } from "./conta";
export class contaCorrente extends conta {
    imprimirExtrado() {
        const taxaImpressao = 1;
        if (this.saldo < taxaImpressao) {
            console.log("Saldo insuficiente para impressão!");
        }
        else {
            this.saldo -= taxaImpressao;
            console.log(`Seu saldo atual (Apos impressão de extrato): é R$${this.saldo}`);
        }
    }
}
