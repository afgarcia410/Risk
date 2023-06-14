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
  mostrarPorJugador() {
    let teritorioPorJugador = {};

    for (let continente of this.tablero) {
      for (let territorio of continente.territorios) {
        let propietario = territorio.propietario;
        if (propietario != undefined) {
          if (!(propietario.nombre in teritorioPorJugador)) {
            teritorioPorJugador[propietario] = [];
          }
          teritorioPorJugador[propietario].push(propietario);
        }
      }
      console.log("Territorio por jugador");
      //jugador sale undefined
      for (let jugador in teritorioPorJugador) {
        console.log(jugador + ":" + teritorioPorJugador[jugador].join(", "));
      }
    }
  }
  atacar() {}
}

export { Tablero };
