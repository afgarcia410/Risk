class Tarjeta{
    constructor(nombre,cantidad){
        this.nombre = nombre;
        this.cantidad=[1,2,3,4,5,6,7,8,9,10];
    }
    cogerCarta(){
        let random;
        random = this.cantidad[Math.floor(Math.random() *this.cantidad.length)];
        return random;
    }
}
export {Tarjeta}