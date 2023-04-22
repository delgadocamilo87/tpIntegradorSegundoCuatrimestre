"use strict";
exports.__esModule = true;
exports.tragaMonedasChica = void 0;
var tragaMonedasChica = /** @class */ (function () {
    function tragaMonedasChica() {
        this.slots = ["🖤", "🤍", "🧡", "💙"];
    }
    // inicio el random de los slots que saldran al azar
    tragaMonedasChica.prototype.randomSlots = function () {
        this.slotsAleatorio = [];
        // sorteo 3 slots al azar del array completod de slots
        for (var i = 0; i < 3; i++) {
            var indiceAleatorio = Math.floor(Math.random() * this.slots.length);
            this.slotsAleatorio.push(this.slots[indiceAleatorio]);
        }
        return "SLOTS DE MAQUINA --------->" + this.slotsAleatorio;
    };
    // inicio el random de los slots del Jugador
    tragaMonedasChica.prototype.randomSlotsJugador = function () {
        this.slotsjugadorAleatorio = [];
        // sorteo 3 slots al azar para asignar al jugador
        for (var i = 0; i < 3; i++) {
            var jugadorAleatorio = Math.floor(Math.random() * this.slots.length);
            this.slotsjugadorAleatorio.push(this.slots[jugadorAleatorio]);
        }
        return "SUS SLOTS --------->" + this.slotsjugadorAleatorio;
    };
    //comparo si los slots arrojados al azar coinciden con los slots del jugador
    tragaMonedasChica.prototype.compararResultados = function () {
        var indicesCoinciden = true;
        for (var i = 0; i < this.slotsAleatorio.length; i++) {
            if (this.slotsAleatorio[i] !== this.slotsjugadorAleatorio[i]) {
                indicesCoinciden = false;
                break;
            }
        }
        if (indicesCoinciden) {
            console.log("Felicidades, Usted Gano el premio Mayor!!");
        }
        else if (this.slotsAleatorio[0] === this.slotsjugadorAleatorio[0] ||
            this.slotsAleatorio[1] === this.slotsjugadorAleatorio[1] ||
            this.slotsAleatorio[2] === this.slotsjugadorAleatorio[2]) {
            console.log("usted gano x creditos");
        }
        else {
            console.log("usted no gano, siga participando");
        }
    };
    return tragaMonedasChica;
}());
exports.tragaMonedasChica = tragaMonedasChica;
var tragamonedas1 = new tragaMonedasChica();
console.log(tragamonedas1.randomSlots());
console.log(tragamonedas1.randomSlotsJugador());
console.log(tragamonedas1.compararResultados());
