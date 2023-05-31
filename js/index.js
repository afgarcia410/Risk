import { Ejercito } from "./ejercito.js";
import { Dado } from "./dado.js";
import { Tablero } from "./tablero.js";
import { Tarjeta } from "./tarjetas.js";
import { Juego } from "./juego.js";
import { Player } from "./player.js";

let tablero = {
  "Africa": [
    {
      nombre: "Congo",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "África Oriental",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Egipto",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Madagascar",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "África del Norte",
      posicion: 5,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Sudáfrica",
      posicion: 6,
      ocupado: null,
      cantidad: null,
    },
  ],
  "Europa": [
    {
      nombre: "Gran Bretaña",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Islandia",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Europa del Norte",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Escandinavia",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Europa del sur",
      posicion: 5,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Rusia",
      posicion: 6,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Europa Occidental",
      posicion: 7,
      ocupado: null,
      cantidad: null,
    },
  ],
  "Asia": [
    {
      nombre: "Afganistan",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "China",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "India",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Irkutsk",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Japon",
      posicion: 5,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Kamchatka",
      posicion: 6,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Oriente Medio",
      posicion: 7,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Mongolia",
      posicion: 8,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Sudeste Asiático",
      posicion: 9,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Siberia",
      posicion: 10,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Ural",
      posicion: 11,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Yatutsk",
      posicion: 12,
      ocupado: null,
      cantidad: null,
    },
  ],
  "America del norte": [
    {
      nombre: "Alaska",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Alberta",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "America Central",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Estados Unidos del Este",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Groenlandia",
      posicion: 5,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Territorio del noreste",
      posicion: 6,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Ontario",
      posicion: 7,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Quebec",
      posicion: 8,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Estados Unidos del Oeste",
      posicion: 8,
      ocupado: null,
      cantidad: null,
    },
  ],
  "America del Sur": [
    {
      nombre: "Argentina",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Brasil",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Peru",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Venezuela",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
  ],
  "Oceania": [
    {
      nombre: "Australia Oriental",
      posicion: 1,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Indonesia",
      posicion: 2,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Nueva Guinea",
      posicion: 3,
      ocupado: null,
      cantidad: null,
    },
    {
      nombre: "Australia Occidental",
      posicion: 4,
      ocupado: null,
      cantidad: null,
    },
  ],
};

/*Probando juego*/
let tituloBienvenida = document.getElementById("tituloBienvenida");
tituloBienvenida.style.display = "none";
let botonJugador = document.getElementById("botonSelectJugador");
let opcion = document.getElementById("players");
let tituloPlayer = document.getElementById("tituloPlayer");
let reparteTerritorio = document.getElementById("reparteTerritorios");
reparteTerritorio.style.display = "none";
//Aqui tengo que coger el de mesa,que ya está creado en 
let mesa2 = new Tablero(tablero);

botonJugador.addEventListener("click", function () {
  if (opcion.value === "3") {
    console.log("Has escogido la opcion de 3 jugadores");
    let ejercito = new Ejercito(35);
    let player1 = new Player(ejercito);
    let ejercito2 = new Ejercito(35);
    let player2 = new Player(ejercito2);
    let ejercito3 = new Ejercito(35);
    let player3 = new Player(ejercito3);
    let mesa = new Tablero(tablero);
    let tarjeta = new Tarjeta();
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(tarjeta);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "4") {
    console.log("Has escogido la opcion de 4 jugadores");
    let ejercito = new Ejercito(30);
    let player1 = new Player(ejercito);
    let ejercito2 = new Ejercito(30);
    let player2 = new Player(ejercito2);
    let ejercito3 = new Ejercito(30);
    let player3 = new Player(ejercito3);
    let ejercito4 = new Ejercito(30);
    let player4 = new Player(ejercito4);
    let mesa = new Tablero(tablero);
    let tarjeta = new Tarjeta();
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    console.log(tarjeta);
    console.log(mesa);

    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "5") {
    console.log("Has escogido la opcion de 5 jugadores");
    let ejercito = new Ejercito(25);
    let player1 = new Player(ejercito);
    let ejercito2 = new Ejercito(25);
    let player2 = new Player(ejercito2);
    let ejercito3 = new Ejercito(25);
    let player3 = new Player(ejercito3);
    let ejercito4 = new Ejercito(25);
    let player4 = new Player(ejercito4);
    let ejercito5 = new Ejercito(25);
    let player5 = new Player(ejercito5);
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    console.log(player5);
    let mesa = new Tablero(tablero);
    let tarjeta = new Tarjeta();
    console.log(tarjeta);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "6") {
    console.log("Has escogido la opcion de 6 jugadores");
    let ejercito = new Ejercito(20);
    let player1 = new Player(ejercito);
    let ejercito2 = new Ejercito(20);
    let player2 = new Player(ejercito2);
    let ejercito3 = new Ejercito(20);
    let player3 = new Player(ejercito3);
    let ejercito4 = new Ejercito(20);
    let player4 = new Player(ejercito4);
    let ejercito5 = new Ejercito(20);
    let player5 = new Player(ejercito5);
    let ejercito6 = new Ejercito(20);
    let player6 = new Player(ejercito6);
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    console.log(player5);
    console.log(player6);
    let mesa = new Tablero(tablero);
    let tarjeta = new Tarjeta();
    console.log(tarjeta);
    console.log(mesa);

    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else {
    console.log("Tienes que elegir alguna de las opciones.");
    tituloBienvenida.style.display = "none";
  }
  tituloBienvenida.style.display = "block";
  reparteTerritorio.style.display = "block";
});

reparteTerritorio.addEventListener("click",function (){
    console.log("Funciona");
    
    let valor= tablero.Africa
    console.log(valor);
    mesa2.repartirTerritorio();
});
