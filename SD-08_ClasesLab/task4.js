export class Player {
    constructor(name, level) {
      this.name = name
      this.level = level;
    }
    info(){
      console.log(`${this.name} has reached Level ${this.level}!`)
    }
    levelUp(){
      this.level++;   //mi argumento level, se incrementa
    }
}

console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p0 = new Player("Grog", 4);
const p1 = new Player("Escobedo", 76);
const p2 = new Player("Juancho Banderas", 20);
const p3 = new Player("Muchalucha", 10);

const players = [p0, p1, p2, p3];
players.forEach(player => {
  player.info();
  player.levelUp();
  player.info();
});


