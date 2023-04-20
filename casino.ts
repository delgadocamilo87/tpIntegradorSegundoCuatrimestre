const readline = require('readline');
const rl = readline.createInterface(process.stdin, process.stdout);

export class Casino{

    protected nombre: string;
    protected edad: number;
    protected tiposDeJuego: string;

    public constructor(pNombre: string, pEdad: number, pTipos: string){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.tiposDeJuego = pTipos;
    }

    public setNombre(pNombre: string):string {
        return this.nombre = pNombre;
    }

    public getNombre():string {
      return this.nombre;
    }

    public setEdad(pEdad:number):number {
        return this.edad = pEdad;
    }

    public getEdad():number {
      return this.edad;
    }

    public setTipos(pTipos: string):string {
        return this.tiposDeJuego = pTipos;
    }

    public getTipos():string {
      return this.tiposDeJuego;
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
        }        
        
        public seleccionDeJuego(){
          
        }
      }
  


let casino1 = new Casino("Juan Perez", 17, "Tragamonedas Chico");

console.log(casino1.validacionDeEdad());
console.log(casino1.getNombre());
console.log(casino1.getTipos());

