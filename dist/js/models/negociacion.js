export class Negociacion {
    constructor(_fecha, cantidad, valor) {
        this._fecha = _fecha;
        this.cantidad = cantidad;
        this.valor = valor;
    }
    get fecha() {
        const nuevaFecha = new Date(this._fecha.getTime());
        return nuevaFecha;
    }
    get total() {
        return this.cantidad * this.valor;
    }
}
