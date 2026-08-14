//fazendo class utilitaria
//Metodos com o static, faz com que eu possa usar as class sem precisar fazer via new
"use strict" //É essencial para o codigo não quebrar futuramente
class matematica {
    static soma(a, b) {
        return a + b;
    }
    static divisao(a, b) {
        return (b == 0)? `ERRO: Impossivel dividir por zero!`: (a / b);
    };

};

var resultadoSoma = matematica.soma(5, 3);
console.log(resultadoSoma);
var resultadoDiv = matematica.divisao(20, 4);
console.log(resultadoDiv);

