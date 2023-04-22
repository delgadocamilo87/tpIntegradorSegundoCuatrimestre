import *as readline from 'readline-sync';
import { Player } from './player';
import { Menu } from './menu';

export class Casino {
  protected casino: string[];

  public constructor(pCasino: string[]) {
    this.casino = pCasino;
  }

  public welcome(pTitulo: string): void{
     console.log(`Bienvenido al ${pTitulo}\n`);
     console.log(`******Mucha suerte!******`);     
  }

  public preguntas(): void{
    let pNombre = readline.question("Dime tu nombre: "); 
    let pEdad = readline.questionInt("Ahora, dime tu edad: ");
    let pCredito = readline.questionInt('Cuantos créditos deseas comprar?')
    let player = new Player(pNombre, pEdad, pCredito);
    player.validacionDeEdad();
    }

  public mostrarInicio(pTitulo: string){
     console.log(`Disfrute mucho de ${pTitulo}`);
     console.log('mucha suerte!!');
     console.log('\n');     
  }

  public menuCasino(): number{
    console.log('\n');    
    console.log(`    Bienvenido al Casino del indio programador`);
    console.log('\n');
    console.log( `ingresa uno de los números para iniciar un juego!`);
    console.log('\n');
    console.log(`1.------------------Cartas----------------------- `);
    console.log('\n');
    console.log(`2.----------Tragamoneas de Corazones------------- `);
    console.log('\n');
    console.log(`3.-------------Tragamoneas Grande---------------- `);
    console.log('\n');
    console.log(`4.------------------Ruleta----------------------- `);
    console.log('\n');
    console.log(`0.*******************salir*********************** `);
    console.log('\n');

    return readline.questionInt('Ingrese una opcion del menu: ');
    
  }

  public pausa(){
      let pausa;
       pausa = readline.keyIn("Presione cualquier letra para continuar... ")
  }

  public clear(){
    console.clear();
  }    
};

let casino1 = new Casino(['']);
console.log(casino1.welcome('Casino del Indio Programador'));
console.log(casino1.preguntas());
console.log(casino1.pausa());
console.log(casino1.clear());
console.log(casino1.menuCasino());
console.log(casino1.mostrarInicio("de esta maquina"));
console.log(casino1.pausa());