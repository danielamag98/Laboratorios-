
// Type your code below this line!
/*slice metodo de arreglos que copia un pedazo del arreglo y lo devuelve como un arreglo nuevo
sin modificar el original --> arreglo.slice(inicio, fin) */

function FriendsList(names){
    this.names = names;
}

const count = Number(process.argv[3]);            //Ve a leer la posicion 3 del arreglo
const names = process.argv.slice(4, 4 +count);    //Slice: Posicion donde empieza el primer nombre y posiicion donde termina (sin incluirla)

const friends = new FriendsList(names);
console.log(friends.names);


// Type your code above this line!
//Ejecutar con "node index.js 5 4 Gaby Hector Vale July"
//El "3" del comando node, es el numero de cuantos nombres tomar
