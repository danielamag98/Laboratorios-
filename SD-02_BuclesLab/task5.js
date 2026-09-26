// Refer to Task 5 in your Instructions to complete this task
console.log("This is Task Five!");

//node.js usa const junto con require() para importar un modulo (libreria)
const readline = require('readline-sync');
let limite = Number(readline.question("Cuantas lineas quieres generar? "));

for (let i = 1; i <= limite; i++) {
  let texto = "";    // Este marca como vacio, ahi se llenara con el texto o se queda vacia
  
  if (i % 3 === 0) texto += "Fizz";  
  if (i % 5 === 0) texto += "Buzz";
  if (i % 7 === 0) texto += "Woof";

  console.log(texto === "" ? i : texto); 
  };