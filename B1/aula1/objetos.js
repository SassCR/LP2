/*function Fruta(nome, cor, forma) {
    this.nome = nome;
    this.cor = cor;
    this.forma = forma;
    this.descricao = function () {
        return "Essa fruta se chama " + this.nome + " e possui a cor" + this.cor
    }
}

//Criando uma variavel chamada uva
//do tipo fruta e com nome = " Uva". cor = "Roxo" e forma = "redondo"
var uva = new Fruta("Uva", "Roxa", "Redonda");
var pera = new Fruta("Pera", "verde", "estranha");

//Mostrando no console a descriacao da uva utilizando o metodo "descricao()"
console.log(uva.descricao());
console.log(pera.descricao());
*/
//==============================ES6 add cpmceotp de cçasses no JS =======================
class Fruta { //sempre começando com a letra maiuscula
    constructor(nome, cor, forma) {
        //atributos / propriedades / caracteristiscas / variaveis aqui dentro de construtor
        this.nome = nome;
        this.cor = cor;
        this.forma = forma;
    }
    //metodos / ações / function
    descricao (){
    return "Essa fruta se chama " + this.nome + " e possui a cor" + this.cor
    }
}
var uva = new Fruta ("Uva", "Roxa", "Redondo");
var pera = new Fruta ("Pera", "Verde", "Quadrada");


//Mostrando no console a descriacao da uva utilizando o metodo "descricao()"
console.log(uva.descricao());
console.log(pera.descricao());