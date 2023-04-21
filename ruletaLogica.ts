

//tirar un número de 1 a 15.
import * as readline from "readline-sync";
import { Casino } from "./casino";
import { interfazRuleta } from "./interfazRuleta";


//Imprimir todos los números de 1 a 15 pero en el lugar del número Random imprimir el "Numero Ganador."
export class Ruleta extends Casino implements interfazRuleta{
    public apuestaJugador:number;
    public premioJugador:number;
    private inicioRuleta:number = 0;
    private finalRuleta:number = 15;
    private numeroGanador:number;
    private numeroJugador:number;
    private colorJugador:string;
    private colorGanador:string[]=[];
    private colors:string[]=["Rojo","Verde"];
    
public constructor(){
    super();
}

public setNumeroJugador(){
    let numero=this.numeroJugador;
    numero=readline.questionInt("Ingresa el numero al que quieras apostar de 0 a 15: ");
    if(numero<0 || numero>15){
       console.log("Ingresa un numero valido entre 0 y 15 : ")
    }else {
    console.log(`El numero del jugador es: ${numero}`)
    }
}
public setApuestaJugador(){
    this.apuestaJugador=readline.questionInt("Ingresa el monto al que quieras apostar de ");
    return `La apuesta del jugador es${this.apuestaJugador}`;
}
public setColorJugador(){
    this.colorJugador=readline.question("Ingrese que a que color desea apostar verde o rojo");
    return `El color del jugador es ${this.colorJugador}`
}

public saberColorGanador(){
    let colorGanador=Math.round(Math.random() * this.colors.length);
    this.colorGanador.push(this.colors.toString());
    return colorGanador.toString();
}

public tirarColor() {
    const random =  Math.round(Math.random()* this.colors.length);
    return random.toString();
}


public tirarRuleta(){
    this.numeroGanador=Math.round(Math.random() * (this.finalRuleta - this.inicioRuleta + 1) + this.inicioRuleta);
    for (let i:number = 0; i <= this.finalRuleta; i++) {
        if (this.numeroGanador == i) {
          console.log("Numero Ganador");
        } else {
          console.log(i);
        }
      }      
}


/*public compararResultados():string{
    if (this.numeroGanador == this.numeroJugador && this.colorGanador == this.colorJugador) {
        return "Wow usted ha Ganadoooo!";
      } else if (this.numeroGanador == this.numeroJugador) {
        return "Usted acepto el numero ganador! recibio X creditos ";
      } else if (this.colorGanador == this.colorJugador) {
        return "Usted acepto el color ganador! recibio X creditos ";
      } else {
        return"Usted no acepto el color ni numero ganador, Vuelva a intentarlo...";
      }
}*/


//Aqui iria la interaccion con el usuario que nose como aplicarla//



public entregaDePremio(): number {
    return 0
}



}
let ruleta1=new Ruleta();
console.log(ruleta1.setNumeroJugador());
console.log(ruleta1.tirarColor());
console.log(ruleta1.saberColorGanador());
console.log(ruleta1.tirarRuleta());



