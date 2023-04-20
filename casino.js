"use strict";
exports.__esModule = true;
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pNombre, pEdad, pTipos) {
        this.nombre = pNombre;
        this.edad = pEdad;
        this.tiposDeJuego = pTipos;
    }
    Casino.prototype.setNombre = function (pNombre) {
        return this.nombre = pNombre;
    };
    Casino.prototype.getNombre = function () {
        return this.nombre;
    };
    Casino.prototype.setEdad = function (pEdad) {
        return this.edad = pEdad;
    };
    Casino.prototype.getEdad = function () {
        return this.edad;
    };
    Casino.prototype.setTipos = function (pTipos) {
        return this.tiposDeJuego = pTipos;
    };
    Casino.prototype.getTipos = function () {
        return this.tiposDeJuego;
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
var casino1 = new Casino("Juan Perez", 17, "Tragamonedas Chico");
console.log(casino1.validacionDeEdad());
console.log(casino1.getNombre());
console.log(casino1.getTipos());
