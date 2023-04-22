"use strict";
exports.__esModule = true;
exports.Cartas = void 0;
var Cartas = /** @class */ (function () {
    function Cartas() {
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
}());
exports.Cartas = Cartas;
