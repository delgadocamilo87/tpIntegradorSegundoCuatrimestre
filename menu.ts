import { Casino } from "./casino";
import { Player } from "./player";
import { Ruleta } from "./ruletaLogica";
import { tragaMonedasChica } from "./tragamonedasChico";
import { TragamonedasGrande } from "./tragamonedasGrande";
import { Cartas } from "./cartas";

export class Menu {

    private game;

    public constructor(){

    }

    public factory(casino: Casino, i:number, player:Player){
        switch(i){
            case 1:
                this.game = new Cartas();
                this.game.game(casino);
             break;
             case 2: 
                this.game = new tragaMonedasChica();                 
                this.game.game(casino);
                break;
             case 3: 
                this.game = new TragamonedasGrande();                 
                this.game.game(casino);
             break;
             case 4:
                this.game = new Cartas();                 
                this.game.game(casino);
             break;
             case 0: 
                console.log('Gracias por haber jugado en el casino del Indio Programador');
             break;
             default:
                console.log('ingrese algun número del indice por favor');
                
                
        }
            
        }
}