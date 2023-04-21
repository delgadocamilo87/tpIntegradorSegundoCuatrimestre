import { Tragamonedas } from "./tragamonedas";
export class tragaMonedasChica  {
    private cantidadSlots: number;
    constructor(pSaldo: number, pPremioMax: number, pTipos: string) {
       
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