import { Casino } from "./casino";

export class Cartas{
    private baraja:[];
    private puntosJugadores:number;
    private premio:number;
    private apuesta :number;

    constructor(){}

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