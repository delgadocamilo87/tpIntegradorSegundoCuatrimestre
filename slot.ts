export class Slot{

    private imgSlot: string[] = ["leon", "cabra", "marmota", "serpiente", "elefante", "dinosaurio"];
    private slotValue:number[] = [0,35,25,15,10,50];
    private numActual: number[] = [];
    private cantidadDeSlots = [0,0,0];

    public constructor(){

    }

    public inicio(){
        const prompt = require("prompt-sync")();
        let saludo:any = prompt("Presione el boton Enter");
        saludo = this.lanzarInicio;        
    }

    public lanzarInicio(){
        this.numActual = [];
        for(let n=0; n<this.cantidadDeSlots.length;n++) {
            this.numActual.push(this.escogerValor());
            this.mostrarAnimal(n,this.numActual[n])
        }  
        return this.numActual;
        console.log(this.numActual);        
    }

    public escogerValor(){
        let random = Math.floor(Math.random()*this.slotValue.length);
        return random;
      }

    public mostrarAnimal(num, im){
        this.cantidadDeSlots[num],this.imgSlot[0],this.imgSlot[im]
    }


    }

    let slots = new Slot();

    console.log(slots.lanzarInicio());
    

