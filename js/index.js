import { Ejercito } from "./ejercito.js";
import { Dado } from "./dado.js";
import { Tablero } from "./tablero.js";
import { Tarjeta } from "./tarjetas.js";
import { Juego } from "./juego.js";

let ejercito = new Ejercito(10);
console.log(ejercito);
console.log(ejercito.randomColor());

let tarj  = new Tarjeta();
console.log(tarj);
