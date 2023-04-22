"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Casino = void 0;
var Casino = /** @class */ (function () {
    function Casino(pCasino) {
        this.casino = pCasino;
    }
    Casino.prototype.getCasino = function () {
        return this.casino;
    };
    Casino.prototype.setCasino = function (pCasino) {
        this.casino = pCasino;
    };
    Casino.prototype.welcome = function (pTitulo) {
        console.log("Bienvenido a ".concat(pTitulo, "\n"));
        console.log("Mucha suerte!");
    };
    return Casino;
}());
exports.Casino = Casino;
