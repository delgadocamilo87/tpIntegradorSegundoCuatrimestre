import * as readline from "readline-sync";
import { Tragamonedas } from "./tragamonedas";
export class tragaMonedasChica {
  private slots: string[] = ["🖤", "🤍", "🧡", "💙"];
  private slotsjugadorAleatorio: string[];
  private slotsAleatorio: string[];
  constructor() {}

  // inicio el random de los slots que saldran al azar
  public randomSlots() {
    this.slotsAleatorio = [];
    // sorteo 3 slots al azar del array completod de slots
    for (let i = 0; i < 3; i++) {
      const indiceAleatorio = Math.floor(Math.random() * this.slots.length);
      this.slotsAleatorio.push(this.slots[indiceAleatorio]);
    }

    return "SLOTS DE MAQUINA --------->" + this.slotsAleatorio;
  }

  // inicio el random de los slots del Jugador
  public randomSlotsJugador() {
    this.slotsjugadorAleatorio = [];
    // sorteo 3 slots al azar para asignar al jugador
    for (let i = 0; i < 3; i++) {
      const jugadorAleatorio = Math.floor(Math.random() * this.slots.length);
      this.slotsjugadorAleatorio.push(this.slots[jugadorAleatorio]);
    }

    return "SUS SLOTS --------->" + this.slotsjugadorAleatorio;
  }

  //comparo si los slots arrojados al azar coinciden con los slots del jugador

  public compararResultados() {
    let indicesCoinciden = true;

    for (let i = 0; i < this.slotsAleatorio.length; i++) {
      if (this.slotsAleatorio[i] !== this.slotsjugadorAleatorio[i]) {
        indicesCoinciden = false;
        break;
      }
    }

    if (indicesCoinciden) {
      console.log("Felicidades, Usted Gano el premio Mayor!!");
    } else if (
      this.slotsAleatorio[0] === this.slotsjugadorAleatorio[0] ||
      this.slotsAleatorio[1] === this.slotsjugadorAleatorio[1] ||
      this.slotsAleatorio[2] === this.slotsjugadorAleatorio[2]
    ) {
      console.log("usted gano x creditos");
    } else {
      console.log("usted no gano, siga participando");
    }
  }
}

let tragamonedas1 = new tragaMonedasChica();
console.log(tragamonedas1.randomSlots());
console.log(tragamonedas1.randomSlotsJugador());
console.log(tragamonedas1.compararResultados());
