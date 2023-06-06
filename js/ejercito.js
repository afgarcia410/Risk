import { Dado } from "./dado.js";
let color = ["Rojo", "Negro", "Verde", "Amarillo", "Azul", "Gris"];
class Ejercito {
  constructor(cantidad) {
    this.cantidad = cantidad;
    this.color = color.splice(Math.floor(Math.random() * color.length), 1);
    this.tipo = ["Infanteria", "Caballeria", "Artilleria"];
    this.puntos = [1, 5, 10];
  }
  agregarEjercito(cantidad){
    this.cantidad +=cantidad;
    console.log(this.cantidad);
  }
  //No se si quitarlo o no
  quitarEjercito(cantidad){
    if(this.cantidad > cantidad){
      this.cantidad -=cantidad;
    } else{
      console.log("No tienes cantidad suficiente ");
    }
  }
  ataque(defensa) {
    let dadoAtacante = new Dado("rojo", "atacante");
    let dadoAtacante2 = new Dado("rojo", "atacante");
    let dadoAtacante3 = new Dado("rojo", "atacante");
    let dadoDefensor = new Dado("blanco", "defensor");
    let dadoDefensor2 = new Dado("blanco", "defensor");
    let valorDadoAtacante = dadoAtacante.tirarDado();
    let valorDadoAtacante2 = dadoAtacante2.tirarDado();
    let valorDadoAtacante3 = dadoAtacante3.tirarDado();
    let valorDadoDefensor = dadoDefensor.tirarDado();
    let valorDadoDefensor2 = dadoDefensor2.tirarDado();
    let sumaAtacante = valorDadoAtacante + valorDadoAtacante2 + valorDadoAtacante3;
    let sumaDefensor = valorDadoDefensor + valorDadoDefensor2;
    console.log(sumaAtacante);
    console.log(sumaDefensor);

    if (sumaAtacante > sumaDefensor) {
      console.log("Has ganado");
    } else {
      console.log("Has perdido tropa");
      this.cantidad--;
      console.log(this.cantidad);
    }
    //Comprobar que el jugador que defiende se ha quedado sin ejercito
    if (defensa.cantidad === 0) {
      console.log("Te has quedado sin tropas");
      defensa.cantidad = this.cantidad - 1;
    }
  }
  randomColor() {
    return this.color[Math.floor(Math.random() * this.color.length)];
  }
}
let ejercito1 =new Ejercito(10);
console.log(ejercito1);
ejercito1.agregarEjercito(5);
console.log(ejercito1);
ejercito1.quitarEjercito(10);
console.log(ejercito1);
export { Ejercito };
