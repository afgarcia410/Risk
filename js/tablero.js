class Tablero{
    constructor(tablero){
        this.tablero = tablero.continentes;
    }
    repartirTerritorio(jugadores){
      const territorios = [];
    for (let continente of this.tablero) {
      territorios.push(continente.territorios);
    }

    const territoriosNoAsignados = territorios.slice();
    const numJugadores = jugadores.length;

    while (territoriosNoAsignados.length > 0) {
      for (let i = 0; i < numJugadores; i++) {
        if (territoriosNoAsignados.length === 0) break;

        const indiceTerritorio = Math.floor(Math.random() * territoriosNoAsignados.length);
        const territorio = territoriosNoAsignados[indiceTerritorio];
        territorio.propietario = jugadores[i];

        territoriosNoAsignados.splice(indiceTerritorio, 1);
      }
    }
    }

    mostrarEstado() {
      console.log("Tablero actualmente:");
      for (let continente of this.tablero) {
        console.log('Continente: '+continente.nombre);
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