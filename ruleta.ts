import { Casino } from "./casino"
import { interfazRuleta } from "./interfazRuleta"


export class Ruleta extends Casino implements interfazRuleta{
    apuesta:number;
    premio:number;
    private color:string;
    private numero:number;

    constructor(pNombre: string, pEdad: number, pTipos: string,pColor:string,pNumero:number,pApuesta:number,pPremio:number){
        super(pNombre,pEdad,pTipos)
        this.color=pColor;
        this.numero=pNumero;
        this.apuesta=pApuesta;
        this.premio=pPremio;
    }
    

    public getapuesta():number{
        return this.apuesta;
    }
    public setapuesta(p_apuesta){
        this.apuesta=p_apuesta;
    }
    
    public getpremio():number{
        return this.premio;
    }
    public setpremio(p_premio){
        this.premio=p_premio;
    }

    public getcolor():string{
        return this.color;
    }
    public setcolor(p_color){
        this.color=p_color;
    }

    public getnumero():number{
        return this.numero;
    }
    public setnumero(p_numero){
        this.numero=p_numero;
    }

    entregaDePremio(): number {
        return 0
    }

    
}