export class View {
    constructor(selector) {
        this.elemento = document.querySelector(selector);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
}
