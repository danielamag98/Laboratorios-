// Refer to Task 7 in your Instructions to complete this task
//Reemplazar números primos impares con palabras (buzzWords)
console.log("This is Task Seven! Halloween time!!\n");

const buzzWords = [
    "Calabaza!",
    "Fantasma!",
    "Dracula!",
    "Momia!",
    "Wooo!",
    "Hombre Lobo!"
  ];

// Este fuction es para que mi numero se valore si es primo o no
function primo(n){
  if (n < 2) return false;        // si mi numero es menor a 2, ya no se toma en cuenta 
  for (let j = 2; j < n; j++){    //evaluamos desde el 2, en la condicion es j < n, porque el numero a valorar tiene que ser menor para que se pueda dividir en el if
    if (n % j === 0) return false;    
  } return true;
};

for (let i = 1; i <= 105; i++) {
  let texto = "";                // comenzamos desde el vacio, cada renglon esta vacio hasta antes de valorarse con el for
  let cuenta = 0;                // cuantos numeros primos llevamos
  
  for(let k = 3; k <= i; k += 2){  // usamos += para saltar de dos en dos, ya que comenzamos en 3, si saltamos += entonces siempre nos dara los impares, y de ahi evaluamos
    if(primo(k)){
      if(i % k === 0 && buzzWords[cuenta]){
        texto += buzzWords[cuenta];
      }
      cuenta ++;
    }
  }
  console.log(texto || i); 
  };