
const titulos = document.querySelectorAll("h1");  // seleccionar todos los h1 de la pagina

titulos[0].textContent = "Adios";  // El primer "Hello world!" ahora dice "Adios"

titulos[4].style.color = "orange";   // El ultimo h1 cambia a naranja

const encabezadoClic = document.getElementById("click");  // Encabezado clicable

encabezadoClic.addEventListener("click", function () {
  encabezadoClic.style.color = "brown";
});