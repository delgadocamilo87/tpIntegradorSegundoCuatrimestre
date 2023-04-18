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
        var saludo = prompt("Presione el boton 1");
        if (saludo == 1) {
            saludo = this.lanzarInicio();
        }
        else {
            console.log("Por favor ingrese el número 1:");
        }
    };
    Slot.prototype.lanzarInicio = function () {
        this.numActual = [];
        for (var n = 0; n < this.cantidadDeSlots.length; n++) {
            this.numActual.push(this.escogerValor());
            this.mostrarAnimal(n, this.numActual[n]);
        }
        return this.numActual;
    };
    Slot.prototype.escogerValor = function () {
        var random = Math.floor(Math.random() * this.imgSlot.length);
        return random;
    };
    Slot.prototype.mostrarAnimal = function (num, im) {
        var aux;
        var animal = this.imgSlot;
        var slot = this.slotValue;
        for (num = 0; num < this.slotValue.length; num++) {
            for (im = num; im < this.slotValue.length; im++) {
                slot[num] = parseInt(animal[im]);
            }
            console.log(animal.length, slot.length);
            return animal.length;
            return slot.length;
        }
    };
    return Slot;
}());
exports.Slot = Slot;
var slots = new Slot();
console.log(slots.lanzarInicio());
