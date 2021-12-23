import { Negociaciones } from '../models/negociaciones.js';
export class NegociacionesView {
    private selectorDiv:HTMLElement;

    constructor(selector:string) {
        this.selectorDiv = document.querySelector(selector);
    }

    template(model: Negociaciones) : string {
        return `
        <table class="table">
            <thead>
                <tr>
                    <th>Fecha</th>
                    <th>Cantidad</th>
                    <th>Valor</th>
                </tr>
            </thead>
            <tbody>
            ${model.lista().map(e =>{
                return `
                <tr>
                    <td>${new Intl.DateTimeFormat().format(e.fecha)}</td>
                    <td>${e.cantidad}</td>
                    <td>${e.valor}</td>
                </tr>
                `;
            }).join('')}
            </tbody>
        </table>
        `;
    }

    update(model: Negociaciones):void {
        const template = this.template(model);
        console.log(template);
        this.selectorDiv.innerHTML = template;
    }
}