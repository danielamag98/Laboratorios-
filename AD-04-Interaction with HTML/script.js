
// Tarea 2: mensaje secreto en la consola al hacer clic
document.getElementById("burger-town").addEventListener("click", function () {
  console.log("¡Alguien ha hecho clic en BURGER TOWN!");
});


// Tarea 4: al hacer clic en RICE (ARROZ), el titular se vuelve rojo
var arroces = document.querySelectorAll(".rice");
arroces.forEach(function (arroz) {
  arroz.style.cursor = "pointer";
  arroz.addEventListener("click", function () {
    document.getElementById("titular").style.color = "red";
  });
});