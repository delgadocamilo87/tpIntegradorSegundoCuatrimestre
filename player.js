"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.player = void 0;
var readline = require("readline-sync");
var readlineSync = require("readline-sync");
var menu_1 = require("./menu");
var player = /** @class */ (function () {
    function player(pNombre, pDinero, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.dinero = pDinero;
        this.montoApuesta = 0;
    }
    ;
    player.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    player.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    ;
    player.prototype.getEdad = function () {
        return this.edad;
    };
    player.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    player.prototype.getDinero = function () {
        return this.dinero;
    };
    ;
    player.prototype.setDinero = function (pDinero) {
        this.dinero = pDinero;
    };
    ;
    player.prototype.getMontoApuesta = function () {
        return this.montoApuesta;
    };
    ;
    player.prototype.setMontoApuesta = function (pMontoApuesta) {
        this.montoApuesta = pMontoApuesta;
    };
    player.prototype.AgregarDinero = function () {
        var monto;
        if (readlineSync.keyInYN("desea agregar más crédito?")) {
            monto = readline.questionInt("Ingrese los créditos que desea agregar");
            if (monto >= 0) {
                this.dinero = this.dinero + monto;
            }
            else {
                console.log("el monto debe ser mayor a cero");
            }
            ;
        }
    };
    player.prototype.playGame = function (pPlay) {
        var valor;
        do {
            valor = pPlay.menu();
            if (valor > 0 && valor < 5) {
                var menu = new menu_1.Menu();
                menu.fabrica(valor, this, pPlay);
            }
            else {
                if (valor < 0 || valor >= 5) {
                    console.log('Debe ingresar un número que este en el menú');
                    pPlay.pausaConsola();
                }
            }
        } while (valor != 0);
    };
    return player;
}());
exports.player = player;
