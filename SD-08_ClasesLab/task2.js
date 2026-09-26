export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level;
    }
    mostrarInfo(){
      return "Player's name: " + this.name + " | Level: " + this.level + "\n";
    }
}

console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p1 = new Player("Escobedo", 4);
const p2 = new Player("Juancho Banderas", 20);
const p3 = new Player("Muchalucha", 10);

//Guardar todos los productos:
const players = [p1, p2, p3];
players.forEach(player => {
  console.log(player.mostrarInfo());
});