import { Negociaciones } from '../models/negociaciones.js';
import { View } from './view.js';
export class NegociacionesView extends View<Negociaciones> {
    
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

}