import *as readline from 'readline-sync';
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
        }        
        
        public seleccionDeJuego(){
          
        }
      }
  


let casino1 = new Casino();


console.log(casino1.preguntas());
console.log(casino1.validacionDeEdad());