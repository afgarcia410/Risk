class Tablero{
    constructor(tablero){
        this.tablero = tablero;
        this.ocupado=null;
    }
}
let tablero = {
    Africa: [
      {
        nombre: "Congo",
        posicion: 1,
        ocupado: null
      },
      {
        nombre: "África Oriental",
        posicion: 2,
      },
      {
        nombre: "Egipto",
        posicion: 3,
      },
      {
        nombre: "Madagascar",
        posicion: 4,
      },
      {
        nombre: "África del Norte",
        posicion: 5,
      },
      {
        nombre: "Sudáfrica",
        posicion: 6,
      },
    ],
    Europa: [
      {
        nombre: "Gran Bretaña",
        posicion: 1,
      },
      {
        nombre: "Islandia",
        posicion: 2,
      },
      {
        nombre: "Europa del Norte",
        posicion: 3,
      },
      {
        nombre: "Escandinavia",
        posicion: 4,
      },
      {
        nombre: "Europa del sur",
        posicion: 5,
      },
      {
        nombre: "Rusia",
        posicion: 6,
      },
      {
        nombre: "Europa Occidental",
        posicion: 7,
      },
    ],
    Asia: [
      {
        nombre: "Afganistan",
        posicion: 1,
      },
      {
        nombre: "China",
        posicion: 2,
      },
      {
        nombre: "India",
        posicion: 3,
      },
      {
        nombre: "Irkutsk",
        posicion: 4,
      },
      {
        nombre: "Japon",
        posicion: 5,
      },
      {
        nombre: "Kamchatka",
        posicion: 6,
      },
      {
        nombre: "Oriente Medio",
        posicion: 7,
      },
      {
        nombre: "Mongolia",
        posicion: 8,
      },
      {
        nombre: "Sudeste Asiático",
        posicion: 9,
      },
      {
        nombre: "Siberia",
        posicion: 10,
      },
      {
        nombre: "Ural",
        posicion: 11,
      },
      {
        nombre: "Yatutsk",
        posicion: 12,
      },
    ],
    "America del norte": [
      {
        nombre: "Alaska",
        posicion: 1,
      },
      {
        nombre: "Alberta",
        posicion: 2,
      },
      {
        nombre: "America Central",
        posicion: 3,
      },
      {
        nombre: "Estados Unidos del Este",
        posicion: 4,
      },
      {
        nombre: "Groenlandia",
        posicion: 5,
      },
      {
        nombre: "Territorio del noreste",
        posicion: 6,
      },
      {
        nombre: "Ontario",
        posicion: 7,
      },
      {
        nombre: "Quebec",
        posicion: 8,
      },
      {
        nombre: "Estados Unidos del Oeste",
        posicion: 8,
      },
    ],
    "America del Sur": [
      {
        nombre: "Argentina",
        posicion: 1,
      },
      {
        nombre: "Brasil",
        posicion: 2,
      },
      {
        nombre: "Peru",
        posicion: 3,
      },
      {
        nombre: "Venezuela",
        posicion: 4,
      },
    ],
    Oceania: [
      {
        nombre: "Australia Oriental",
        posicion: 1,
      },
      {
        nombre: "Indonesia",
        posicion: 2,
      },
      {
        nombre: "nueva Guinea",
        posicion: 3,
      },
      {
        nombre: "Australia Occidental",
        posicion: 4,
      },
    ],
  };
  
  let tableroo = new Tablero(tablero);
  console.log(tableroo);
export {Tablero}