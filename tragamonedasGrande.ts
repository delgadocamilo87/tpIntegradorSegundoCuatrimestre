import {Tragamonedas} from './tragamonedas'
export class TragamonedasGrande extends Tragamonedas {
    private cantidadDeSlots: number;
    constructor(pSaldo: number, pSlots: any, pPremioMax: number, pTipos: string, cantidadDeSlots: number) {
        super(pSaldo, pSlots, pPremioMax, pTipos);
        this.cantidadDeSlots = cantidadDeSlots;
    }
    public premioMayorTotal(): number {
        // cálculo del premio mayor total
        return 0;
    }
    public validacionDeSlots(): boolean {
        // alidación de slots
        return true;
    }
    public aciertos(): number {
        // cálculo de aciertos
        return 0;
    }
    public seleccionPremio(): string {
        // selección de premio
        return "Premio";
    }
}