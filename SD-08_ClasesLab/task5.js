//How many experience points should result in a level up? 
//How can you keep track of this number?

export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;

      this.experience = 0;
      this.experienceLevelUp = 100 // tope de experiencia
    }

    info(){
      console.log(`- ${this.name} has reached Level ${this.level}!`)
    }
    levelUp(){
      this.level++;   //mi argumento level, se incrementa
    }
    gainExperience(points){
      this.experience += points;
      console.log(`- ${this.name} gained ${points} XP! (${this.experience} / ${this.experienceLevelUp})`);
      
      while(this.experience >= this.experienceLevelUp){
        this.experience -= this.experienceLevelUp;
        this.levelUp();
        this.experienceLevelUp += 50; //Es lo que pide extra de points para cada nivel
        this.info();
      }
    }
}
// player:
console.log("========== Welcome to Vampire Survivors!! =========== \n");
const p1 = new Player("Juancho Banderas", 1);
p1.gainExperience(60);
p1.gainExperience(50);
p1.gainExperience(200);