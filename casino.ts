import *as readline from 'readline-sync';
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
  


let casino1 = new Casino();


console.log(casino1.preguntas());
console.log(casino1.validacionDeEdad());
