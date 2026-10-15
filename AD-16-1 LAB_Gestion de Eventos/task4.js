
//Seleccionar la seccion con un id de contenedor
const container = document.querySelector("#container");

//Seleccionar todos los elementos de la lista con una clase de segundo
const segundo = document.querySelectorAll("li.second");

//Seleccionar un elemento de la lista con una clase de tercero que esta dentro de ol
const tercero = document.querySelector("ol li.third");

//Dar el texto hola, a la seccion con un id de un contenedor
//container.textContent = "Hola";

//Añadir la clase principal al div con una clase de pie de pagina
const pieDiv = document.querySelector("div.footer");
pieDiv.classList.add("principal");

//Eliminar la clase principal en el div con una clase de pie de pagina
pieDiv.classList.remove("principal");

//Crear un nuevo elemento li
const nuevoli = document.createElement("li");

//Darle al li el texto four
nuevoli.textContent = "four";

//Añadir li al elemento ul usando append
const addul = document.querySelector("ul");
addul.append(nuevoli);
