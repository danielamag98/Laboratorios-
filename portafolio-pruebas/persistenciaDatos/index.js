
const boton = document.querySelector("#tema");
const guardado = localStorage.getItem("#tema");


if(guardado === "oscuro"){
    document.body.classList.add("oscuro");
}

boton.addEventListener("click", () => {
    document.body.classList.toggle("oscuro");
    const activo = document.body.classList.contains("oscuro");
    localStorage.setItem("tema", activo ? "oscuro":"claro")
});


