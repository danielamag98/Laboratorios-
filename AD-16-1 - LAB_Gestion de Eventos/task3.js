
const boton = document.querySelector("#count");

boton.addEventListener("click", () => {
  const enlaces = document.querySelectorAll("a");
  const totalEnlaces = enlaces.length;

  if (totalEnlaces > 0) {
    const primerEnlace = enlaces[0].href;
    const ultimoEnlace = enlaces[totalEnlaces - 1].href;

    alert(
      "Número de enlaces: " + totalEnlaces + "\n" +
      "Primer enlace: " + primerEnlace + "\n" +
      "Último enlace: " + ultimoEnlace
    );
  } else {
    alert("No hay enlaces en la página.");
  }
});