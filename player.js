"use strict";
exports.__esModule = true;
exports.Player = void 0;
var readline = require("readline-sync");
var readlineSync = require("readline-sync");
var menu_1 = require("./menu");
var Player = /** @class */ (function () {
    function Player(pNombre, pDinero, pEdad) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.dinero = pDinero;
        this.montoApuesta = 0;
    }
    ;
    Player.prototype.getNombre = function () {
        return this.nombre;
    };
    ;
    Player.prototype.setNombre = function (pNombre) {
        this.nombre = pNombre;
    };
    ;
    Player.prototype.getEdad = function () {
        return this.edad;
    };
    Player.prototype.setEdad = function (pEdad) {
        this.edad = pEdad;
    };
    Player.prototype.getDinero = function () {
        return this.dinero;
    };
    ;
    Player.prototype.setDinero = function (pDinero) {
        this.dinero = pDinero;
    };
    ;
    Player.prototype.getMontoApuesta = function () {
        return this.montoApuesta;
    };
    ;
    Player.prototype.setMontoApuesta = function (pMontoApuesta) {
        this.montoApuesta = pMontoApuesta;
    };
    Player.prototype.AgregarDinero = function () {
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
    Player.prototype.playGame = function (pPlay) {
        var valor;
        do {
            valor = pPlay.menuCasino();
            if (valor > 0 && valor < 5) {
                var menu = new menu_1.Menu();
                menu.factory(pPlay, valor, this);
            }
            else {
                if (valor < 0 || valor >= 5) {
                    console.log('Debe ingresar un número que este en el menú');
                    pPlay.pausa();
                }
            }
        } while (valor != 0);
    };
    Player.prototype.validacionDeEdad = function () {
        var edadLimite = this.edad;
        if (edadLimite >= 18) {
            console.log("Bienvenido al Casino del indio programador!");
        }
        else {
            console.log("Usted no puede ingresar al establecimiento");
        }
        return edadLimite;
    };
    ;
    return Player;
}());
exports.Player = Player;
