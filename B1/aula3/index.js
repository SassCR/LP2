import { conta } from "./conta.js";
import { ContaCorrente } from "./Contacorrente.js";


var contaRene = new ContaCorrente(12, 21, "Rene", 10)
contaRene.depositar(10);

var contaCleber = new conta(12, 25, "Cleber", 10);
contaCleber.depositar(10);