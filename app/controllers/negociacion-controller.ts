import { Negociacion } from "../models/negociacion.js";
import { Negociaciones } from '../models/negociaciones.js';
import { NegociacionesView } from "../views/negociaciones-view.js";
import { MensajeView } from '../views/mensaje-view.js';

export class NegociacionController {
    private inputFecha: HTMLInputElement;
    private inputCantidad: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociaciones = new Negociaciones();
    private negociacionesView = new NegociacionesView('#negociacionesView');
    private mensajeView = new MensajeView('#mensajeview');

    constructor() {
        this.inputFecha = document.querySelector('#fecha');
        this.inputCantidad = document.querySelector('#cantidad');
        this.inputValor = document.querySelector('#valor');
        this.negociacionesView.update(this.negociaciones);
    }

    agrega() : void {
        const negociacion = this.crearNegociacion();
        this.negociaciones.agrega(negociacion);
        this.negociacionesView.update(this.negociaciones);
        this.mensajeView.update('La negociación fue registrada exitosamente');
        this.limpiaFormulario();
    }

    crearNegociacion() : Negociacion {
        const regexp = /-/g;
        const fecha = this.inputFecha.value.replace(regexp,',');
        const cantidad = parseInt(this.inputCantidad.value);
        const valor = parseFloat(this.inputValor.value);
        return new Negociacion(
            new Date(fecha),
            cantidad,
            valor
        );
    }

    limpiaFormulario() : void {
        this.inputFecha.value = '';
        this.inputCantidad.value = '';
        this.inputValor.value = '';
        this.inputFecha.focus();
    }

    
}