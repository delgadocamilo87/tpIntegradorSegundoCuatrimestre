"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var readline = require("readline-sync");
var Casino = /** @class */ (function () {
    function Casino() {
        this.nombre;
        this.edad;
        this.tiposDeJuego;
    }
    Casino.prototype.preguntas = function () {
        var preguntaNombre = readline.question("Dime tu nombre: ".toUpperCase());
        this.edad = readline.questionInt("Ahora, dime tu edad: ");
        var Tipos = readline.questionInt("ingrese el numero de juego que desea jugar: ");
        return "Hola ".concat(preguntaNombre, ", bienvenido al Casino tal, tu edad es ").concat(this.edad, ",");
    };
    Casino.prototype.validacionDeEdad = function () {
        var edadLimite = this.edad;
        if (edadLimite >= 18) {
            console.log("Bienvenido al Casino del indio programador!");
        }
        else {
            console.log("Usted no puede ingresar al establecimiento");
        }
        return edadLimite;
    };
    Casino.prototype.seleccionDeJuego = function () {
    };
    return Casino;
}());
exports.Casino = Casino;
var casino1 = new Casino();
console.log(casino1.preguntas());
console.log(casino1.validacionDeEdad());
