/*
1. Que extension debe tener la lista? 
2. Como tratar las cantidades multiples para un mismo articulo?
3. Como recopilar los datos?
4. Como almacenar los datos de este objeto?
5. Como seria la funcion constructora de este objeto? 
*/

// Type your code below this line!

function ShoppingList(items){
    this.items = items;
    this.addItems = function(name, quantity){             //Primero declaramos la lista para añadir los items
        this.items.push({name: name, quantity: quantity});
    };
    this.List = function(){                                //Despues declaramos la lista y como va a aparecer
        this.items.forEach(item => {
            console.log("- " + item.name + " x " + item.quantity);            
        });
    };
}

const newlist = new ShoppingList([]);

for(let i = 3; i < process.argv.length; i +=2 ){           // mi [i] es el numero de indice 
    newlist.addItems(process.argv[i], Number(process.argv[i + 1]));
}

console.log("---Lista de compras---")
newlist.List();

// Type your code above this line!
//Ejecutar con "node index.js 6 leche 2 huevos 12 pan 1 jugo 2 carne 4 chocolates 1"

