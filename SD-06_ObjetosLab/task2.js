function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  //process.argv =  es un array que contiene todos los argumentos pasados cuando corres el script, 
  // incluyendo el NODE y el archivo del script. 

  const newMail = new Mail(process.argv[3], process.argv[4]);

  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)
  //Ejecutar con "node index.js 2 tomato sauce"
