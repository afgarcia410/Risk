class Tarjeta{
    constructor(){
        this.tarjetas = [];
        this.cantidad=[1,2,3,4,5,6,7,8,9,10];
    }
    cogerCarta(){
        return this.cantidad[Math.floor(Math.random() *this.cantidad.length)];
    }
}
export {Tarjeta}