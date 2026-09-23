/* Refer to Task 4 in your Instructions to complete this task
Nota: Como en las tareas 1, 2 y 3, solo eran pocas combinaciones se pone if/else
Pero en este caso tenemos 7 combinaciones (3, 5, 7, 3 y 5, 3 y 7, 5 y 7) 
Entonces vamos a implementar otro metódo (+=)... Combinaciones: 
    ""              (vacía — ninguna condición se cumplió)
    "Fizz"
    "Buzz"
    "Woof"
    "FizzBuzz"
    "FizzWoof"
    "BuzzWoof"
    "FizzBuzzWoof"

    */

console.log("This is Task Four!");

for (let i = 1; i <= 105; i++) {
  let texto = "";    // Este marca como vacio, ahi se llenara con el texto o se queda vacia
  
  if (i % 3 === 0) texto += "Fizz";  
  if (i % 5 === 0) texto += "Buzz";
  if (i % 7 === 0) texto += "Woof";

  // se va a imprimir segun el numero sea multiplo de 3, 5 y 7
  // El signo '?' solo checa si el numero quedo vacio o no
  // En i : texto, los ":" si true, y "texto" es si false
  console.log(texto === "" ? i : texto); 
  };