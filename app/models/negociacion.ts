export class Negociacion {
    
    constructor(private _fecha: Date,
        public readonly cantidad: number,
        public readonly valor: number) {}

    get fecha(): Date {
        const nuevaFecha = new Date(this._fecha.getTime());
        return nuevaFecha;
    }
    get total() : number {
        return this.cantidad * this.valor;
    }
}