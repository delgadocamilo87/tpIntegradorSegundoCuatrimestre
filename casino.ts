import *as readline from 'readline-sync';
<<<<<<< HEAD
import { player } from './player';


export class Casino{  
  protected casino: string[];
  
  
  public constructor(pCasino:string[]){
   this.casino = pCasino;
  }

  public getCasino():string[]{
    return this.casino;
  }

  public setCasino(pCasino:string[]){
    this.casino = pCasino;
  }

  public welcome(pTitulo: string): void{
     console.log(`Bienvenido a ${pTitulo}\n`);
     console.log(`Mucha suerte!`);     
  }

    
    /*public preguntas(){
        let preguntaNombre = readline.question("Dime tu nombre: ".toUpperCase()); 
        this.edad = readline.questionInt("Ahora, dime tu edad: ");
        let Tipos =readline.questionInt("ingrese el numero de juego que desea jugar: ");
        return `Hola ${preguntaNombre}, bienvenido al Casino tal, tu edad es ${this.edad}`

=======
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

>>>>>>> 4064e300453319d934d2a1c077191bdc686145b2
    }

    public validacionDeEdad(){
      let edadLimite:number = this.edad;
      
          if(edadLimite >= 18){
            console.log("Bienvenido al Casino del indio programador!");
          }
          else{
            console.log("Usted no puede ingresar al establecimiento");
          }
<<<<<<< HEAD
          return edadLimite;
        } */       
=======
        }        
>>>>>>> 4064e300453319d934d2a1c077191bdc686145b2
        
      }
  


let casino1 = new Casino();


console.log(casino1.preguntas());
<<<<<<< HEAD
console.log(casino1.validacionDeEdad());
=======
console.log(casino1.validacionDeEdad());
>>>>>>> 4064e300453319d934d2a1c077191bdc686145b2
