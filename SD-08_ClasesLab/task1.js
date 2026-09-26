export class Player {
    constructor(name) {
      this.name = name;
    }
    mostrarInfo(){
      return "The player's name is: " + this.name;
}
}
console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p1 = new Player("Escobedo");
const p2 = new Player("Juancho Banderas");
const p3 = new Player("Muchalucha");

//Guardar todos los productos:
const players = [p1, p2, p3];
players.forEach(player => {
  console.log(player.mostrarInfo());
});

