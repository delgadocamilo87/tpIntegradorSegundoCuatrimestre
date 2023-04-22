"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readline = require("readline-sync");
var player_1 = require("./player");
var Casino = /** @class */ (function () {
    function Casino(pCasino) {
        this.casino = pCasino;
    }
    Casino.prototype.welcome = function (pTitulo) {
        console.log("Bienvenido al ".concat(pTitulo, "\n"));
        console.log("******Mucha suerte!******");
    };
    Casino.prototype.preguntas = function () {
        var pNombre = readline.question("Dime tu nombre: ");
        var pEdad = readline.questionInt("Ahora, dime tu edad: ");
        var pCredito = readline.questionInt('Cuantos créditos deseas comprar?');
        var player = new player_1.Player(pNombre, pEdad, pCredito);
        player.validacionDeEdad();
    };
    Casino.prototype.mostrarInicio = function (pTitulo) {
        console.log("Disfrute mucho de ".concat(pTitulo));
        console.log('mucha suerte!!');
        console.log('\n');
    };
    Casino.prototype.menuCasino = function () {
        console.log('\n');
        console.log("    Bienvenido al Casino del indio programador");
        console.log('\n');
        console.log("ingresa uno de los n\u00FAmeros para iniciar un juego!");
        console.log('\n');
        console.log("1.------------------Cartas----------------------- ");
        console.log('\n');
        console.log("2.----------Tragamoneas de Corazones------------- ");
        console.log('\n');
        console.log("3.-------------Tragamoneas Grande---------------- ");
        console.log('\n');
        console.log("4.------------------Ruleta----------------------- ");
        console.log('\n');
        console.log("0.*******************salir*********************** ");
        console.log('\n');
        return readline.questionInt('Ingrese una opcion del menu: ');
    };
    Casino.prototype.pausa = function () {
        var pausa;
        pausa = readline.keyIn("Presione cualquier letra para continuar... ");
    };
    Casino.prototype.clear = function () {
        console.clear();
    };
    return Casino;
}());
exports.Casino = Casino;
;
var casino1 = new Casino(['']);
console.log(casino1.welcome('Casino del Indio Programador'));
console.log(casino1.preguntas());
console.log(casino1.pausa());
console.log(casino1.clear());
console.log(casino1.menuCasino());
console.log(casino1.mostrarInicio("de esta maquina"));
console.log(casino1.pausa());
