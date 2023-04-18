"use strict";
exports.__esModule = true;
exports.Slot = void 0;
var Slot = /** @class */ (function () {
    function Slot() {
        this.imgSlot = ["leon", "cabra", "marmota", "serpiente", "elefante", "dinosaurio"];
        this.slotValue = [25, 35, 2, 15, 10, 50];
        this.numActual = [];
        this.cantidadDeSlots = [0, 0, 0];
    }
    Slot.prototype.inicio = function () {
        var prompt = require("prompt-sync")();
        var saludo = prompt("Presione el boton Enter");
        saludo = this.lanzarInicio;
    };
    Slot.prototype.lanzarInicio = function () {
        this.numActual = [];
        for (var n = 0; n < this.imgSlot.length; n++) {
            this.numActual.push(this.escogerValor());
            this.mostrarAnimal(n, this.numActual[n]);
        }
        return this.numActual;
        console.log(this.numActual);
    };
    Slot.prototype.escogerValor = function () {
        var random = Math.floor(Math.random() * this.slotValue.length);
        return random;
    };
    Slot.prototype.mostrarAnimal = function (num, im) {
        this.cantidadDeSlots[num, im], this.imgSlot[im];
    };
    return Slot;
}());
exports.Slot = Slot;
var slots = new Slot();
console.log(slots.lanzarInicio());
