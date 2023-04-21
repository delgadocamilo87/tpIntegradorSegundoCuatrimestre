import *as readline from 'readline-sync';
import *as readlineSync from 'readline-sync'
import { Casino } from './casino';
import { Menu } from './menu';

export class player{
    private nombre: string;
    private dinero:number;
    private edad: number
    private montoApuesta: number;
    private casino:Casino;

    public constructor(pNombre: string, pDinero: number, pEdad:number){
        this.nombre = pNombre;
        this.edad = pEdad;
        this.dinero = pDinero;
        this.montoApuesta = 0;
    };

    public getNombre(): string{
        return this.nombre;
    };

    public setNombre(pNombre: string){
        this.nombre = pNombre;
    };   

    public getEdad(): number{
        return this.edad;
    }
    
    public setEdad(pEdad:number){
        this.edad = pEdad;
    }
    public getDinero(): number{
        return this.dinero;
    };

    public setDinero(pDinero:number){
        this.dinero = pDinero;
    };

    public getMontoApuesta(): number{
        return this.montoApuesta;
    };

    public setMontoApuesta(pMontoApuesta: number){
        this.montoApuesta = pMontoApuesta;
    }

    public AgregarDinero():void{
        let monto: number;
        if(readlineSync.keyInYN("desea agregar más crédito?")){
            monto = readline.questionInt("Ingrese los créditos que desea agregar");
            if(monto>=0){
                this.dinero = this.dinero + monto;
            }
            else{
                console.log("el monto debe ser mayor a cero")
            };
        }
    }

    public playGame(pPlay:Casino){
        let valor:number;
        do{
            valor = pPlay.menu();
            if(valor>0 && valor<5){
                let menu = new Menu();
                menu.fabrica(valor,this,pPlay)
            }
            else{
                if(valor<0 || valor>=5){
                    console.log('Debe ingresar un número que este en el menú');
                    pPlay.pausaConsola()
                    
                }
            }
        } while(valor!=0);
    }



    

}