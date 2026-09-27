// Type your code below this line!

function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
    this.printMail = function(){
      console.log(this.subject + ": " + this.message);  //Definir aqui el print, para que pritnMail() lo ejecute
    };
  }
  
  const newMail = new Mail(process.argv[3], process.argv[4]);
  
  // Type your code above this line!
  
  newMail.printMail()
//Ejecutar con "node index.js 3 "Proceso de selección" "Bienvenido, has sido seleccionado" "