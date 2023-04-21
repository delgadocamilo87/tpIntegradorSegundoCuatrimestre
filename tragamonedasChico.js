"use strict";
exports.__esModule = true;
exports.tragaMonedasChica = void 0;
var tragaMonedasChica = /** @class */ (function () {
    function tragaMonedasChica(pSaldo, pPremioMax, pTipos) {
    }
    tragaMonedasChica.prototype.validacionDeSlots = function () {
        // Lógica de validación de slots
        return true;
    };
    tragaMonedasChica.prototype.aciertos = function () {
        return 0;
    };
    tragaMonedasChica.prototype.seleccionDePremio = function () {
        // Lógica de selección de premio
        return "Premio";
    };
    return tragaMonedasChica;
}());
exports.tragaMonedasChica = tragaMonedasChica;
