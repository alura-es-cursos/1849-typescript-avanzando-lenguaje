export abstract class View<T> {
    protected elemento:HTMLElement;

    constructor(selector:string) {
        this.elemento = document.querySelector(selector);
    }

    abstract template(model: T):string;

    update(model: T):void {
        this.elemento.innerHTML = this.template(model);
    }
}