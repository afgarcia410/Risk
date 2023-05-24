class Ejercito{
    constructor(){
        this.color= ["Rojo","Negro","Verde","Amarillo","Azul","Gris"];
        this.tipo= ["Infanteria","Caballeria","Artilleria"];
        this.puntos = [1,5,10];
    }
    randomColor(){
        let random;
        random = this.color[Math.floor(Math.random() * this.color.length)];
        return random;
    }
}
export {Ejercito}