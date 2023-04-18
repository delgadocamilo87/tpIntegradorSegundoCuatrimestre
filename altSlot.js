// Creo los slots
var slots = ["❤️", "🤍", "🖤"];
var slotAzar = ["❤️", "🤍", "🖤"];
// funcion para retornar slots del jugador al azar
function randomSlotsJugador() {
    var resultadojugador;
    resultadojugador = slots.sort(function () {
        return 0.5 - Math.round(Math.random() * slots.length);
    });
    console.log("Slots de jugador -------->" + resultadojugador);
}
// funcion para retornar slots asignados al azar
function randomSlots() {
    var resultado;
    resultado = slotAzar.sort(function () {
        return 0.5 - Math.round(Math.random() * slotAzar.length);
    });
    console.log("Slots sorteados --------->" + resultado);
}
var slotdeJugador = randomSlotsJugador();
var slotSorteados = randomSlots();
//comparo si los slots arrojados al azar coinciden con los slots del jugador
function compararResultados() {
    var indicesCoinciden = true;
    for (var i = 0; i < slots.length; i++) {
        if (slots[i] !== slotAzar[i]) {
            indicesCoinciden = false;
            break;
        }
    }
    if (indicesCoinciden) {
        console.log("Felicidades, Usted Gano el premio Mayor!!");
    }
    else if (slots[0] === slotAzar[0] ||
        slots[1] === slotAzar[1] ||
        slots[2] === slotAzar[2]) {
        console.log("usted gano x creditos");
    }
    else {
        console.log("usted no gano, siga participando");
    }
    return indicesCoinciden;
}
console.log(compararResultados());
