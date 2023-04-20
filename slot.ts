import { equal } from "assert";

export class Slot{

    private imgSlot: string[] = ["leon", "cabra", "marmota", "serpiente", "elefante", "dinosaurio"];
    private slotValue:number[] = [25,35,2,15,10,50];
    private numActual: number[] = [];
    private cantidadDeSlots = [0,0,0];
    
    public constructor(){

    }

    public inicio():any{
        let prompt = require("prompt-sync")();
        let saludo: any = prompt("Presione el boton 1");
        if(saludo == 1){
        saludo = this.lanzarInicio(); 
        } else {
            console.log("Por favor ingrese el número 1:");            
        }       
    }

    public lanzarInicio(){
        this.numActual = [];
        for(let n=0; n<this.cantidadDeSlots.length;n++) {
            this.numActual.push(this.escogerValor());
            this.mostrarAnimal(n,this.numActual[n])
        }  
        return this.numActual;       
    }

    public escogerValor(){
        let random = Math.floor(Math.random()*this.imgSlot.length);
        return random;
      }

    public mostrarAnimal(num: number, im: number){
        
        
    }
    }


    let slots = new Slot();

    console.log(slots.lanzarInicio());
    

