const arr = [1,2,3,4,5,6,7,9,10,11,12]

// Type your code below this line!
arr.splice(7, 0, 8);  
//7 = en donde empieza | 0 = no elimines nada, solo inserta|8 = numero faltante
// Type your code above this line!

console.log("--- Splice (without deleting) ---")
arr.forEach(element => console.log(element))