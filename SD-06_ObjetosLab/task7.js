/* DESCRIBE A CAR
1. Que datos debe de tener el objeto, como recopilarlos y como los almaceno
2.Datos: marca, modelo, año, color, numero de puertas, kilometraje, motor de combustion o electrico, algo mas...
*/

// Type your code below this line!

function myCar(nameCar, make, model, year, color, doors, mileage, engine){
    this.nameCar = nameCar;
    this.make = make;    
    this.model = model;  
    this.year = year;    
    this.color = color;   
    this.doors = doors;
    this.mileage = mileage; 
    this.engine = engine;  

    this.describe = function(){
        console.log(
            this.nameCar + " is a " + this.make + " " + this.model + " " + this.year + ", " +
            this.color + ", " + this.doors + " doors, with " + this.mileage + " km, and motor " + this. engine
        );
    };
}

const car = new myCar(   //delcarar que posiicion tiene 
  process.argv[3],
  process.argv[4],
  process.argv[5],
  Number(process.argv[6]),
  process.argv[7],
  Number(process.argv[8]),
  Number(process.argv[9]),
  process.argv[10] 
)
car.describe();

// Type your code above this line!
//Ejecutar con "node index.js 7 Troquita Mazda 3 2022 red 4 20000 combustion"

