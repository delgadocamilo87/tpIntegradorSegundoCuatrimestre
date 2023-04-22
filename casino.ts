export class Casino {
  protected casino: string[];

  public constructor(pCasino: string[]) {
    this.casino = pCasino;
  }

  public getCasino(): string[] {
    return this.casino;
  }

  public setCasino(pCasino: string[]) {
    this.casino = pCasino;
  }

  public welcome(pTitulo: string): void {
    console.log(`Bienvenido a ${pTitulo}\n`);
    console.log(`Mucha suerte!`);
  }

  /*public preguntas(){
        let preguntaNombre = readline.question("Dime tu nombre: ".toUpperCase()); 
        this.edad = readline.questionInt("Ahora, dime tu edad: ");
        let Tipos =readline.questionInt("ingrese el numero de juego que desea jugar: ");
        return `Hola ${preguntaNombre}, bienvenido al Casino tal, tu edad es ${this.edad}`

import { Tragamonedas } from './tragamonedas';
import { tragaMonedasChica } from './tragamonedasChico';

export class Casino{  
  protected nombre: string;
  protected edad: number;
  protected tiposDeJuego: number;
  
  
  public constructor(){
    this.nombre;
    this.edad;
    this.tiposDeJuego;
  }
    
    public preguntas(){
        let preguntaNombre = readline.question("Dime tu nombre: ".toUpperCase()); 
        this.edad = readline.questionInt("Ahora, dime tu edad: ");
        let Tipos =readline.questionInt("ingrese el numero de juego que desea jugar: ");
        return `Hola ${preguntaNombre}, bienvenido al Casino tal, tu edad es ${this.edad},`

  }

    public validacionDeEdad(){
      let edadLimite:number = this.edad;
      
          if(edadLimite >= 18){
            console.log("Bienvenido al Casino del indio programador!");
          }
          else{
            console.log("Usted no puede ingresar al establecimiento");
          }

          return edadLimite;
        } */
}
