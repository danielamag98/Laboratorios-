//Try adding methods to add or remove items from an inventory.
//How can you keep track of the quantity of each item? What **data structure** would you need for this?


//Game --------------------------------------------------------------------------
export class Player {
  constructor(name, level) {
    this.name = name;
    this.level = level;
    this.inventory = {};        // este objeto no es un array, se usara para que la informacion sea anexada
                                // cada nombre de item con un cantidad --> tipo diccionario.
  }

  addItem(itemName, quantity = 1){          //Quantity, por defecto tiene valor 1
    if(this.inventory[itemName]){           //Si el item ya existe en el inventario, se le va sumando la cantidad.
      this.inventory[itemName] += quantity;
    } else {
      this.inventory[itemName] = quantity;  //Si el item no existe todavia, se crea, con la cantidad recibida
    }
    console.log(`- ${this.name} received ${quantity}x ${itemName}.`);
  }

  removeItem(itemName, quantity=1){
    if(!this.inventory[itemName]){            //Si el itemo NO EXISTE en el inventario( es undefined ), salimos del metodo con return
      console.log(`- ${this.name} doesn't have any ${itemName}.`);
      return;
    }

    if(this.inventory[itemName] <= quantity){  //Si la cantidad que tienes es MENOR/IGUAL a la que quieres quitar, se eliminara el item si es 0. 
      delete this.inventory[itemName];
    } else {
      this.inventory[itemName] -= quantity;    //Sti tiene mas de lo que quiero quitar solo restara la cantidad que hay.
    }
    console.log(`\n- ${this.name} lost ${quantity}x ${itemName}`);
  }

  showInventory(){
    console.log(`\n${this.name}'s inventory: `);    //for ... in, recorre los nombres de items del objeto inventory
    for(const item in this.inventory){              //forEach es para arrays y for...in es para objetos
      console.log(`- ${item}: ${this.inventory[item]}`);
    }
  }
}

//Inventory:
console.log("========== Welcome to Vampire Survivors!! =========== \n");

const p1 = new Player("Dynamite", 7);

p1.addItem("Potion", 3);
p1.addItem("Sword");
p1.addItem("Potion", 2);
p1.showInventory();

p1.removeItem("Potion", 4);
p1.showInventory();
