class Dado {
    constructor(color,tipo){
        this.color=color;
        this.tipo = tipo;
        this.numero = [1,2,3,4,5,6]
    }
    tirarDado(){
        let random;
        random = this.numero[Math.floor(Math.random() *this.numero.length)];
        return random;
    }
}
export {Dado}