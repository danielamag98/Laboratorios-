// Refer to Task 6 in your Instructions to complete this task
// Guardar los resultados en un array en vez de solo imprimirlos.
// en vez de usar console.log(), hay que usar .push() para agregar elemento en un array
// Esa array nunca se va a mostrar

console.log("This is Task Six!\n");

let resultados = [];    //aqui se van a guardar

for (let i = 1; i <= 105; i++) {
  let texto = "";    // Este marca como vacio, ahi se llenara con el texto o se queda vacia
  
  if (i % 3 === 0) texto += "Fizz";  
  if (i % 5 === 0) texto += "Buzz";
  if (i % 7 === 0) texto += "Woof";

  resultados.push(texto === "" ? i : texto); 

  };

  console.log(resultados);    //imprime el array completo al final