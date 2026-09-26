/*A matrix is an array of arrays, representing a grid with rows and columns. Use this task to experiment with matrices!
    * Can you add a single number to an existing row?
    * Can you add a whole new row of numbers?
    * Can you remove a single number from a single row?
    * Can you reverse one of the rows without affecting the others
*/

const arr = [
    [0,1,2,3,4,5,6,7,8,9],
    [10,11,12,13,14,15,16,17,18,19],
    [20,21,22,23,24,25,26,27,28,29]
  ]
  
  // Type your code below this line!
  
  console.log("--- Original Matrix ---");
  arr.forEach(row => console.log(row));
  
  //1. Can you add a single numer to an existing row?
  arr[0].push(999);
  console.log("\n1. Matriz despues de agregar 999 a la fila 0: ")
  arr.forEach(row => console.log(row));

  //2. Can your add a whole new row of numbers?
  arr.push([30,31,32,33,34,35,36,37,38,39]);
  console.log("\n2. Despues de agregar una fila nueva: ");
  arr.forEach(row => console.log(row));

  //3. Can you remove a single number from a single row?
  arr[1].splice(5,1);              //arr[1] = accedes a la fila
  console.log("\n3. Despues de eliminar un elemento de la fila 1: ");
  arr.forEach(row => console.log(row));

  //4. Can you reverse one of the rows without affecting the others?
  arr[2].reverse();
  console.log("\n4. Despues de invertir la fila 2: ");
  arr.forEach(row => console.log(row));

  // Type your code above this line!