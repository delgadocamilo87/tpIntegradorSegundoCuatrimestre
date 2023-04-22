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
exports.Cartas = void 0;
var casino_1 = require("./casino");
var Cartas = /** @class */ (function (_super) {
    __extends(Cartas, _super);
    function Cartas(pNombre, pEdad, pTipos, p_baraja, p_puntosJugadores, p_premio, p_apuesta) {
        var _this = _super.call(this, pNombre, pEdad, pTipos) || this;
        _this.baraja = p_baraja;
        _this.puntosJugadores = p_puntosJugadores;
        _this.premio = p_premio;
        _this.apuesta = p_apuesta;
        return _this;
    }
    Cartas.prototype.getbaraja = function () {
        return this.baraja;
    };
    Cartas.prototype.setbaraja = function (p_baraja) {
        this.baraja = p_baraja;
    };
    Cartas.prototype.getpuntosJugadores = function () {
        return this.puntosJugadores;
    };
    Cartas.prototype.setpuntosJugadores = function (p_puntosJugadores) {
        this.puntosJugadores = p_puntosJugadores;
    };
    Cartas.prototype.getpremio = function () {
        return this.premio;
    };
    Cartas.prototype.setpremio = function (p_premio) {
        this.premio = p_premio;
    };
    Cartas.prototype.getapuesta = function () {
        return this.apuesta;
    };
    Cartas.prototype.setapuesta = function (p_apuesta) {
        this.apuesta = p_apuesta;
    };
    Cartas.prototype.pedirUnaCarta = function () {
    };
    Cartas.prototype.valorDeCarta = function () {
    };
    Cartas.prototype.puntosDeJugador = function () {
    };
    Cartas.prototype.entregaDePremio = function () {
    };
    return Cartas;
}(casino_1.Casino));
exports.Cartas = Cartas;
