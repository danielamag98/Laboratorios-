const form = document.getElementById("form1");  //En getElementary no se agrega #

form.addEventListener("submit", function(event){
    event.preventDefault();

    const firstName = document.querySelector('input[name="fname"]').value;
    const lastName = document.querySelector('input[name="lname"]').value;

    alert(
        "Nombre: " + firstName + "\n" +
        "Apellido: " + lastName
    ); 

})
