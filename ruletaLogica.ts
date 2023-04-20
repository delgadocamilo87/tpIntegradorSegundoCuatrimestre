

//tirar un número de 1 a 15.

import { Casino } from "./casino";
import { interfazRuleta } from "./interfazRuleta";

//Imprimir todos los números de 1 a 15 pero en el lugar del número Random imprimir el "Numero Ganador."
export class Ruleta extends Casino implements interfazRuleta{
    public apuesta:number;
    public premio:number;
    private color:string;
    private numero:number;
    private inicioRuleta:number = 0;
    private finalRuleta:number = 15;
    private numeroGanador:number;
    private numeroJugador:number = 0;
    private colorJugador:string;
    private colorGanador[]:string=[];//tengo problemas para implementar los arrays
    private colors[]:string=["Rojo","Verde"];//tengo problemas para implementar los arrays
    



​
public constructor(pNombre: string,
    pEdad: number, pTipos: string,pColor:string,pNumero:number,pApuesta:number,pPremio:number){
    super(pNombre,pEdad,pTipos)
    this.color=pColor;
    this.numero=pNumero;
    this.apuesta=pApuesta;
    this.premio=pPremio;
}

public getapuesta():number{
    return this.apuesta;
}
public setapuesta(p_apuesta){
    this.apuesta=p_apuesta;
}

public getpremio():number{
    return this.premio;
}
public setpremio(p_premio){
    this.premio=p_premio;
}

public getcolor():string{
    return this.color;
}
public setcolor(p_color){
    this.color=p_color;
}

public getnumero():number{
    return this.numero;
}
public setnumero(p_numero){
    this.numero=p_numero;
}

public saberColorGanador():string{
    this.colorGanador=Math.round(Math.random() * this.colors.length);
    return this.colorGanador;
}

public tirarColor() {
    const random = Math.random() * this.colors.length;
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


public compararResultados():string{
    if (this.numeroGanador == this.numeroJugador && this.colorGanador == this.colorJugador) {
        return "Wow usted ha Ganadoooo!";
      } else if (this.numeroGanador == this.numeroJugador) {
        return "Usted acepto el numero ganador! recibio X creditos ";
      } else if (this.colorGanador == this.colorJugador) {
        return "Usted acepto el color ganador! recibio X creditos ";
      } else {
        return"Usted no acepto el color ni numero ganador, Vuelva a intentarlo...";
      }
}


//Aqui iria la interaccion con el usuario que nose como aplicarla//







public entregaDePremio(): number {
    return 0
}

}