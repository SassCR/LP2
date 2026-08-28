import { conta } from "./conta";
const conta1 = new conta(123, "Cleber");
conta1.imprimirExtrado();
conta1.depositar(500);
conta1.imprimirExtrado()


import { contaCorrente } from "./contaCorrente";
const conta2 = new contaCorrente(123, "Floresto", 500);
conta2.imprimirExtrado();
conta2.imprimirExtrado()