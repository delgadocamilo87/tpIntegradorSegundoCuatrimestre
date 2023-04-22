"use strict";
exports.__esModule = true;
exports.Menu = void 0;
var ruletaLogica_1 = require("./ruletaLogica");
var tragamonedasChico_1 = require("./tragamonedasChico");
var tragamonedasGrande_1 = require("./tragamonedasGrande");
var cartas_1 = require("./cartas");
var Menu = /** @class */ (function () {
    function Menu() {
    }
    Menu.prototype.factory = function (casino, i, player) {
        switch (i) {
            case 1:
                this.game = new cartas_1.Cartas();
                this.game.game(casino);
                break;
            case 2:
                this.game = new tragamonedasChico_1.tragaMonedasChica();
                this.game.game(casino);
                break;
            case 3:
                this.game = new tragamonedasGrande_1.TragamonedasGrande();
                this.game.game(casino);
                break;
            case 4:
                this.game = new ruletaLogica_1.Ruleta();
                this.game.game(casino);
                break;
            case 0:
                console.log('Gracias por haber jugado en el casino del Indio Programador');
                break;
            default:
                console.log('ingrese algun número del indice por favor: ');
        }
    };
    return Menu;
}());
exports.Menu = Menu;
