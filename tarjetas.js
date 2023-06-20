class Tarjeta{
    constructor(){
        this.tarjetas = [];
        this.cantidad=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42];
    }
    cogerCarta(){
        for (let i = this.cantidad.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.cantidad[i], this.cantidad[j]] = [this.cantidad[j], this.cantidad[i]];
          }
          return this.cantidad.splice(0, 1)[0];
    }
    cambioPorEjercito(){
        
    }
}
export {Tarjeta}