import { Dado } from "./dado.js";
class Tablero {
  constructor(tablero) {
    this.tablero = tablero.continentes;
  }
  /*Modificar*/
  repartirTerritorio(jugadores) {
    var jugadoresActuales = jugadores.slice();

    for (var i = 0; i < this.tablero.length; i++) {
      var continente = this.tablero[i];
      var territorios = continente.territorios;

      for (var j = 0; j < territorios.length; j++) {
        var territorio = territorios[j];
        var jugadorIndex = Math.floor(Math.random() * jugadoresActuales.length);
        territorio.propietario = jugadoresActuales[jugadorIndex];
        //jugadoresActuales.splice(jugadorIndex, 1);
      }
    }
  }
  mostrarEstado() {
    console.log("Tablero actualmente:");
    for (let continente of this.tablero) {
      console.log(
        "-----------------Continente: " +
          continente.nombre +
          "--------------------------"
      );
      for (let territorio of continente.territorios) {
        let propietario = territorio.propietario;
        if (propietario) {
          propietario = propietario.nombre;
        } else {
          propietario = "Ninguno";
        }
        console.log(
          "Id:" +
            territorio.id +
            " Territorio: " +
            territorio.nombre +
            ", Propietario: " +
            propietario
        );
      }
    }
  }
 obtenerTerritoriosPorJugador(jugadores) {
  const territoriosPorJugador = {};

  for (const jugador of jugadores) {
    territoriosPorJugador[jugador.nombre] = [];
  }

  for (const continente of this.tablero) {
    for (const territorio of continente.territorios) {
      if (territorio.propietario && territoriosPorJugador[territorio.propietario.nombre]) {
        territoriosPorJugador[territorio.propietario.nombre].push(territorio.nombre);
      }
    }
  }
  return territoriosPorJugador;
}

atacar(idTerritorioAtacante, idTerritorioDefensor) {

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

  let territorioAtacante = null;
  let territorioDefensor = null;

  for (const continente of this.tablero) {
    for (const territorio of continente.territorios) {
      if (territorio.id === idTerritorioAtacante) {
        territorioAtacante = territorio;
      }

      if (territorio.id === idTerritorioDefensor) {
        territorioDefensor = territorio;
      }
    }
  }


  if (!territorioAtacante || !territorioDefensor || !this.sonVecinos(territorioAtacante, territorioDefensor)) {
    console.log("Los territorios no son vecinos o no existen.");
    return;
  }


  if(sumaAtacante > sumaDefensor){
    console.log('Ataque exitoso: '+territorioAtacante.nombre+' atacó a '+ territorioDefensor.nombre+'.');
  } else if(sumaAtacante < sumaDefensor){
    console.log('Ataque fallido.');
  } else {
    console.log('Ataque fallido.');
  }
  
}
sonVecinos(territorio1, territorio2) {
  return territorio1.vecino.includes(territorio2.id) && territorio2.vecino.includes(territorio1.id);
}
}

export { Tablero };