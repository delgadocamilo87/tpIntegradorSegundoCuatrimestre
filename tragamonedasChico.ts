import {Tragamonedas} from './tragamonedas'
export class TragamonedasGrande extends Tragamonedas {
    private cantidadDeSlots: number;
    constructor(pSaldo: number, pSlots: any, pPremioMax: number, pTipos: string, cantidadDeSlots: number) {
        super(pSaldo, pSlots, pPremioMax, pTipos);
        this.cantidadDeSlots = cantidadDeSlots;
    }
    public premioMayorTotal(): number {
        const premioMaximo = this.getPremiomax();
        const cantidadDeSlots = this.cantidadDeSlots;
        const premioMayorTotal = premioMaximo * cantidadDeSlots;
        return premioMayorTotal;
    }
    public validacionDeSlots(): boolean {
        const cantidadSlots = this.getSlots().length;
        return cantidadSlots === this.cantidadDeSlots;
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