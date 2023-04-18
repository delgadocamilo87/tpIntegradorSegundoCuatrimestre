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

    }

    public seleccionDeJuego(){

    }
}