"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Ruleta = void 0;
//tirar un número de 1 a 15.
var readline = require("readline-sync");
var casino_1 = require("./casino");
//Imprimir todos los números de 1 a 15 pero en el lugar del número Random imprimir el "Numero Ganador."
var Ruleta = /** @class */ (function (_super) {
    __extends(Ruleta, _super);
    function Ruleta() {
        var _this = _super.call(this) || this;
        _this.inicioRuleta = 0;
        _this.finalRuleta = 15;
        _this.colorGanador = [];
        _this.colors = ["Rojo", "Verde"];
        return _this;
    }
    Ruleta.prototype.setNumeroJugador = function () {
        var numero = this.numeroJugador;
        numero = readline.questionInt("Ingresa el numero al que quieras apostar de 0 a 15: ");
        if (numero < 0 || numero > 15) {
            console.log("Ingresa un numero valido entre 0 y 15 : ");
        }
        else {
            console.log("El numero del jugador es: ".concat(numero));
        }
    };
    Ruleta.prototype.setApuestaJugador = function () {
        this.apuestaJugador = readline.questionInt("Ingresa el monto al que quieras apostar de ");
        return "La apuesta del jugador es".concat(this.apuestaJugador);
    };
    Ruleta.prototype.setColorJugador = function () {
        this.colorJugador = readline.question("Ingrese que a que color desea apostar verde o rojo");
        return "El color del jugador es ".concat(this.colorJugador);
    };
    Ruleta.prototype.saberColorGanador = function () {
        var colorGanador = Math.round(Math.random() * this.colors.length);
        this.colorGanador.push(this.colors.toString());
        return colorGanador.toString();
    };
    Ruleta.prototype.tirarColor = function () {
        var random = Math.round(Math.random() * this.colors.length);
        return random.toString();
    };
    Ruleta.prototype.tirarRuleta = function () {
        this.numeroGanador = Math.round(Math.random() * (this.finalRuleta - this.inicioRuleta + 1) + this.inicioRuleta);
        for (var i = 0; i <= this.finalRuleta; i++) {
            if (this.numeroGanador == i) {
                console.log("Numero Ganador");
            }
            else {
                console.log(i);
            }
        }
    };
    /*public compararResultados():string{
        if (this.numeroGanador == this.numeroJugador && this.colorGanador == this.colorJugador) {
            return "Wow usted ha Ganadoooo!";
          } else if (this.numeroGanador == this.numeroJugador) {
            return "Usted acepto el numero ganador! recibio X creditos ";
          } else if (this.colorGanador == this.colorJugador) {
            return "Usted acepto el color ganador! recibio X creditos ";
          } else {
            return"Usted no acepto el color ni numero ganador, Vuelva a intentarlo...";
          }
    }*/
    //Aqui iria la interaccion con el usuario que nose como aplicarla//
    Ruleta.prototype.entregaDePremio = function () {
        return 0;
    };
    return Ruleta;
}(casino_1.Casino));
exports.Ruleta = Ruleta;
var ruleta1 = new Ruleta();
console.log(ruleta1.setNumeroJugador());
console.log(ruleta1.tirarColor());
console.log(ruleta1.saberColorGanador());
console.log(ruleta1.tirarRuleta());
