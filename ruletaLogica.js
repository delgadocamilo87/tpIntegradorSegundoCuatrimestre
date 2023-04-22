"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ruleta = void 0;
//tirar un número de 1 a 15.
var readline = require("readline-sync");
//Imprimir todos los números de 1 a 15 pero en el lugar del número Random imprimir el "Numero Ganador."
var Ruleta = /** @class */ (function () {
    function Ruleta() {
        this.inicioRuleta = 0;
        this.finalRuleta = 15;
        this.colors = ["Rojo", "Verde"];
        this.colorGanador = [];
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
        return "La apuesta del jugador es ".concat(this.apuestaJugador);
    };
    Ruleta.prototype.setColorJugador = function () {
        this.colorJugador = readline.questionInt("Ingrese que a que color desea apostar 0 para Rojo  1 para Verde: ");
        switch (this.colorJugador) {
            case 0:
                this.colors[0];
                {
                    console.log("tu color elegido es el Rojo");
                    break;
                }
            case 1:
                this.colors[1];
                {
                    console.log("tu color elegido es el Verde");
                    break;
                }
            default: {
                console.log("Ingrese un numero valido");
                break;
            }
        }
    };
    Ruleta.prototype.compararResultados = function () {
        if ((this.numeroGanador == this.numeroJugador &&
            this.colors[0] == this.colorJugador[0]) ||
            this.colors[1] == this.colorJugador[1]) {
            return "Wow usted ha Ganadoooo!";
        }
        else if (this.numeroGanador == this.numeroJugador) {
            return "Usted acepto el numero ganador! recibio X creditos ";
        }
        else if (this.colorGanador[0] == this.colorJugador[0] ||
            this.colorGanador[1] == this.colorJugador[1]) {
            return "Usted acepto el color ganador! recibio X creditos ";
        }
        else {
            return "Usted no acepto el color ni numero ganador, Vuelva a intentarlo...";
        }
    };
    Ruleta.prototype.saberColorGanador = function () {
        this.colorGanador = [];
        var colorGanador = Math.round(Math.random() * this.colors.length);
        this.colorGanador.push(this.colors[colorGanador]);
        return "color ganador es ------> ".concat(this.colorGanador);
    };
    Ruleta.prototype.tirarColor = function () {
        var random = Math.round(Math.random() * this.colors.length);
        return random.toString();
    };
    Ruleta.prototype.tirarRuleta = function () {
        this.numeroGanador = Math.round(Math.random() * (this.finalRuleta - this.inicioRuleta + 1) +
            this.inicioRuleta);
        for (var i = 0; i <= this.finalRuleta; i++) {
            if (this.numeroGanador == i) {
                console.log("Numero Ganador");
            }
            else {
                console.log(i);
            }
        }
    };
    Ruleta.prototype.entregaDePremio = function () {
        return 0;
    };
    return Ruleta;
}());
exports.Ruleta = Ruleta;
var ruleta1 = new Ruleta();
console.log(ruleta1.setNumeroJugador());
console.log(ruleta1.setColorJugador());
console.log(ruleta1.tirarRuleta());
console.log(ruleta1.saberColorGanador());
console.log(ruleta1.compararResultados());
