import { Dado } from "./dado.js";
class Juego{
    constructor(jugadores) {
        this.jugadores = jugadores;
        if(jugadores <= 2 || jugadores > 6){
            console.log("No cumples con los jugadores míminos para jugar.");
        } else{
            console.log("Cumples con los requisitos minimos");
        }
    }
    turno(){
        
    }
}
export {Juego}