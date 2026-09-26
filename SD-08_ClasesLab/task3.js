//Metodo info(){...} = Le permite a un objeto "Player" presentarse o reportar su estado actual
//backticks (`) forma especial de escribir strings en JS, permite interpolar variables del texto ${} sin concatenar con +

export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level;
    }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`)
}}

console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p1 = new Player("Escobedo", 4);
const p2 = new Player("Juancho Banderas", 20);
const p3 = new Player("Muchalucha", 10);

const players = [p1, p2, p3];
players.forEach(player => {
  player.info();
});