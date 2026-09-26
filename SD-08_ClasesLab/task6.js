/*/*Party members
  How should an array of party members be identified in your code?
 Try adding methods to add or remove player objects from a given party.
*/ 

//Game -----------------------------------------------------------------
export class Player {
    constructor(name, level) {
      this.name = name;
      this.level = level;
    }
}

//Members ---------------------------------------------------------------
export class gameParty{
  constructor(members){
    this.members = [];
  }

  addMembers(playerName){
    this.members.push(playerName);
    console.log(`- ${playerName.name} joined the party!!`);
  }

  removeMembers(playerName){
    const index = this.members.indexOf(playerName);      //indexOf checa el resultado y descarta
    if(index !== -1){                                    //Si index da cualquier numero difernete a -1, el jugador esta en el arreglo, en tal posiicon
      this.members.splice(index, 1);                     //splice, modifica el arreglo original
      console.log(`- ${playerName.name} left the party!  `);
    } else{
      console.log(`- ${playerName.name} is not in the party! Check your members. `);
    }
  }

  listPlayer(){
    console.log(`\n Current party members: `);
    this.members.forEach(member => console.log(`- ${member.name}`));
  }
}

//Items: ------------------------------------------------------------------------------
console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p1 = new Player("Escobedo", 4);
const p2 = new Player("Juancho_Banderas", 20);
const p3 = new Player("Muchalucha", 10);
const p4 = new Player("Dynamita", 56);

const party = new gameParty();
party.addMembers(p1);
party.addMembers(p2);
party.addMembers(p3);
party.addMembers(p4)

party.removeMembers(p4);
party.listPlayer();
