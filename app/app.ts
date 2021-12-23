/*
import { Negociacion } from "./models/negociacion.js";
const negociacion = new Negociacion(new Date(),20,1000);
*/

import { NegociacionController } from "./controllers/negociacion-controller.js";

const negociacionController = new NegociacionController();
const form = document.querySelector('.form');
form.addEventListener('submit',event => {
    event.preventDefault();
    negociacionController.agrega();
})