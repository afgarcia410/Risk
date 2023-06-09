class Tablero{
    constructor(tablero){
        this.tablero = tablero.continentes;
    }
    /*Modificar*/
    repartirTerritorio(jugadores){
      var jugadoresActuales = jugadores.slice();

      // Recorremos los continentes del tablero
      for (var i = 0; i < this.tablero.length; i++) {
        var continente = this.tablero[i];
        var territorios = continente.territorios;
    
        // Recorremos los territorios del continente
        for (var j = 0; j < territorios.length; j++) {
          var territorio = territorios[j];
    
          // Asignamos un jugador aleatorio al territorio
          var jugadorIndex = Math.floor(Math.random() * jugadoresActuales.length);
          territorio.propietario = jugadoresActuales[jugadorIndex];
    
          // Eliminamos al jugador asignado de la lista de jugadores disponibles
          //jugadoresActuales.splice(jugadorIndex, 1);
        }
      }
    }

    mostrarEstado() {
      console.log("Tablero actualmente:");
      for (let continente of this.tablero) {
        console.log('-----------------Continente: '+continente.nombre+'--------------------------');
        for (let territorio of continente.territorios) {
          let propietario = territorio.propietario;
          if (propietario) {
            propietario = propietario.nombre;
          } else {
            propietario = "Ninguno";
          }
          console.log("Territorio: " + territorio.nombre + ", Propietario: " + propietario);
        }
        }
      }
}  

export {Tablero}