import { Tragamonedas } from "./tragamonedas";
export class tragaMonedasChica extends Tragamonedas {
    private cantidadSlots: number;
    constructor(pSaldo: number, pSlots: any, pPremioMax: number, pTipos: string, cantidadDeSlots: number) {
        super(pSaldo, pSlots, pPremioMax, pTipos);
        this.cantidadSlots = cantidadDeSlots;
    }
    public validacionDeSlots(): boolean {
        // Lógica de validación de slots
        return true;
    }
    public aciertos(): number {
        return 0;
    }
    public seleccionDePremio(): string {
        // Lógica de selección de premio
        return "Premio";
    }
}