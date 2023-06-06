import { Ejercito } from "./ejercito.js";
import { Dado } from "./dado.js";
import { Tablero } from "./tablero.js";
import { Tarjeta } from "./tarjetas.js";
import { Juego } from "./juego.js";
import { Player } from "./player.js";
let tablero2 = {
  continentes: [
    {
      nombre: "America del Norte",
      territorios: [
        { nombre: "Territorio 1", propietario: null },
        { nombre: "Territorio 2", propietario: null },
        { nombre: "Territorio 3", propietario: null }
      ]
    },
    {
      nombre: "Europa",
      territorios: [
        { nombre: "Territorio 4", propietario: null },
        { nombre: "Territorio 5", propietario: null },
        { nombre: "Territorio 6", propietario: null }
      ]
    },
    {
      nombre: "Africa",
      territorios: [
        { nombre: "Congo", propietario: null },
        { nombre: "Territorio 5", propietario: null },
        { nombre: "Territorio 6", propietario: null }
      ]
    },
    {
      nombre: "Asia",
      territorios: [
        { nombre: "Territorio 4", propietario: null },
        { nombre: "Territorio 5", propietario: null },
        { nombre: "Territorio 6", propietario: null }
      ]
    },
    {
      nombre: "America del Sur",
      territorios: [
        { nombre: "Territorio 4", propietario: null },
        { nombre: "Territorio 5", propietario: null },
        { nombre: "Territorio 6", propietario: null }
      ]
    },
    {
      nombre: "Oceania",
      territorios: [
        { nombre: "Territorio 4", propietario: null },
        { nombre: "Territorio 5", propietario: null },
        { nombre: "Territorio 6", propietario: null }
      ]
    }
  ]
}
let tablero = {
  
  "Africa": [
    {
      nombre: "Congo",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "África Oriental",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Egipto",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Madagascar",
      posicion: 4,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "África del Norte",
      posicion: 5,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Sudáfrica",
      posicion: 6,
      propietario: null,
      cantidad: null,
    },
  ],
  "Europa": [
    {
      nombre: "Gran Bretaña",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Islandia",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Europa del Norte",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Escandinavia",
      posicion: 4,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Europa del sur",
      posicion: 5,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Rusia",
      posicion: 6,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Europa Occidental",
      posicion: 7,
      propietario: null,
      cantidad: null,
    },
  ],
  "Asia": [
    {
      nombre: "Afganistan",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "China",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "India",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Irkutsk",
      posicion: 4,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Japon",
      posicion: 5,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Kamchatka",
      posicion: 6,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Oriente Medio",
      posicion: 7,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Mongolia",
      posicion: 8,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Sudeste Asiático",
      posicion: 9,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Siberia",
      posicion: 10,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Ural",
      posicion: 11,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Yatutsk",
      posicion: 12,
      propietario: null,
      cantidad: null,
    },
  ],
  "America del norte": [
    {
      nombre: "Alaska",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Alberta",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "America Central",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Estados Unidos del Este",
      posicion: 4,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Groenlandia",
      posicion: 5,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Territorio del noreste",
      posicion: 6,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Ontario",
      posicion: 7,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Quebec",
      posicion: 8,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Estados Unidos del Oeste",
      posicion: 8,
      propietario: null,
      cantidad: null,
    },
  ],
  "America del Sur": [
    {
      nombre: "Argentina",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Brasil",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Peru",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Venezuela",
      posicion: 4,
      propietario: null,
      cantidad: null,
    },
  ],
  "Oceania": [
    {
      nombre: "Australia Oriental",
      posicion: 1,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Indonesia",
      posicion: 2,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Nueva Guinea",
      posicion: 3,
      propietario: null,
      cantidad: null,
    },
    {
      nombre: "Australia Occidental",
      posicion: 4,
      propietario: null,
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
let mesa;
let ejercito;
let ejercito2;
let ejercito3;
let ejercito4;
let ejercito5;
let ejercito6;
let player1;
let player2;
let player3;
let player4;
let player5;
let player6;

//Aqui tengo que coger el de mesa,que ya está creado en 
//let mesa2 = new Tablero(tablero);

botonJugador.addEventListener("click", function () {
  if (opcion.value === "3") {
    console.log("Has escogido la opcion de 3 jugadores");
    ejercito = new Ejercito(35);
    player1 = new Player(ejercito);
    ejercito2 = new Ejercito(35);
    player2 = new Player(ejercito2);
    ejercito3 = new Ejercito(35);
    player3 = new Player(ejercito3);
    mesa = new Tablero(tablero2);
    const listaJugadores=[player1,player2,player3];
    console.log(player1);
    console.log(player2);
    console.log(player3);
   // console.log(tarjeta);
    console.log(mesa);
    let a=mesa.repartirTerritorio(listaJugadores);
    mesa.mostrarEstado();
console.log(a);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";

  } else if (opcion.value === "4") {
    console.log("Has escogido la opcion de 4 jugadores");
    ejercito = new Ejercito(30);
    player1 = new Player(ejercito);
    ejercito2 = new Ejercito(30);
    player2 = new Player(ejercito2);
    ejercito3 = new Ejercito(30);
    player3 = new Player(ejercito3);
    ejercito4 = new Ejercito(30);
    player4 = new Player(ejercito4);
    mesa = new Tablero(tablero);
    const listaJugadores=[];
    //let tarjeta = new Tarjeta();
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    //console.log(tarjeta);
    console.log(mesa);

    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "5") {
    console.log("Has escogido la opcion de 5 jugadores");
    ejercito = new Ejercito(25);
    player1 = new Player(ejercito);
    ejercito2 = new Ejercito(25);
    player2 = new Player(ejercito2);
    ejercito3 = new Ejercito(25);
    player3 = new Player(ejercito3);
    ejercito4 = new Ejercito(25);
    player4 = new Player(ejercito4);
    ejercito5 = new Ejercito(25);
    player5 = new Player(ejercito5);
    const listaJugadores=[];
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    console.log(player5);
    mesa = new Tablero(tablero);
    //let tarjeta = new Tarjeta();
    //console.log(tarjeta);
    console.log(mesa);
    botonJugador.style.display = "none";
    opcion.style.display = "none";
    tituloPlayer.style.display = "none";
  } else if (opcion.value === "6") {
    console.log("Has escogido la opcion de 6 jugadores");
    ejercito = new Ejercito(20);
    player1 = new Player(ejercito);
    ejercito2 = new Ejercito(20);
    player2 = new Player(ejercito2);
    ejercito3 = new Ejercito(20);
    player3 = new Player(ejercito3);
    ejercito4 = new Ejercito(20);
    player4 = new Player(ejercito4);
    ejercito5 = new Ejercito(20);
    player5 = new Player(ejercito5);
    ejercito6 = new Ejercito(20);
    player6 = new Player(ejercito6);
    console.log(player1);
    console.log(player2);
    console.log(player3);
    console.log(player4);
    console.log(player5);
    console.log(player6);
    mesa = new Tablero(tablero);
    const listaJugadores=[];
    //let tarjeta = new Tarjeta();
   // console.log(tarjeta);
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
    
    //Descomentar para que funcione
    //reparteTerritorio.style.display = "none";
});
