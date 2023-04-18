import { Casino } from "./casino";

export class Cartas extends Casino  {
    private baraja:[];
    private puntosJugadores:number;
    private premio:number;
    private apuesta :number;


    constructor(pNombre,pEdad,pTipos,p_baraja:[],p_puntosJugadores:number,p_premio:number,p_apuesta:number){
        super(pNombre,pEdad,pTipos)
        this.baraja=p_baraja;
        this.puntosJugadores=p_puntosJugadores;
        this.premio=p_premio;
        this.apuesta=p_apuesta;

    }
    public getbaraja():[]{
        return this.baraja;
    }
    public setbaraja(p_baraja){
        this.baraja=p_baraja;
    }

    public getpuntosJugadores():number{
        return this.puntosJugadores;
    }
    public setpuntosJugadores(p_puntosJugadores){
        this.puntosJugadores=p_puntosJugadores;
    }

    public getpremio():number{
        return this.premio;
    }
    public setpremio(p_premio){
        this.premio=p_premio;
    }

    public getapuesta():number{
        return this.apuesta;
    }
    public setapuesta(p_apuesta){
        this.apuesta=p_apuesta;
    }

    

    public pedirUnaCarta(){

    }
    public valorDeCarta(){

    }
    public puntosDeJugador(){

    }
    public entregaDePremio(){

    }


    

}