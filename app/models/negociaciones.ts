import { Negociacion } from './negociacion.js';

export class Negociaciones {
    private negociaciones: Negociacion[] = [];

    agrega(negociacion : Negociacion) {
        this.negociaciones.push(negociacion);
    }

    lista() : readonly Negociacion[] {
        return this.negociaciones;
    }
}
