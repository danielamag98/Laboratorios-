function Mail(subj, msg) {
    this.subject = subj
    this.message = msg
  }
  
  // Type your code below this line!
  //Declarar una nueva variable con new
  const newMail = new Mail("hello", "world")
  
  // Type your code above this line!
  
  console.log(newMail.subject + ": " + newMail.message)