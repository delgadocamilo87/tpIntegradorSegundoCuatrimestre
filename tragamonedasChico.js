"use strict";
<<<<<<< HEAD
exports.__esModule = true;
exports.tragaMonedasChica = void 0;
var tragaMonedasChica = /** @class */ (function () {
    function tragaMonedasChica(pSaldo, pPremioMax, pTipos) {
=======
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
exports.tragaMonedasChica = void 0;
var tragamonedas_1 = require("./tragamonedas");
var tragaMonedasChica = /** @class */ (function (_super) {
    __extends(tragaMonedasChica, _super);
    function tragaMonedasChica(pSaldo, pSlots, pPremioMax, pTipos, cantidadDeSlots) {
        var _this = _super.call(this, pSaldo, pSlots, pPremioMax, pTipos) || this;
        _this.cantidadSlots = cantidadDeSlots;
        return _this;
>>>>>>> 4064e300453319d934d2a1c077191bdc686145b2
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
<<<<<<< HEAD
}());
=======
}(tragamonedas_1.Tragamonedas));
>>>>>>> 4064e300453319d934d2a1c077191bdc686145b2
exports.tragaMonedasChica = tragaMonedasChica;
