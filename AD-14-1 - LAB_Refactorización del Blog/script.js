// Tarea6: Alerta en directo al enviar el formulario

// Esperamos a que cargue la página
document.addEventListener("DOMContentLoaded", function() {
    const elFormulario = document.getElementById("contactForm");
    elFormulario.addEventListener("submit", function(evento) {
        // evita que la página se recargue por completo
        evento.preventDefault();
        // muestra la alerta quitando la clase que la oculta
        document.getElementById("miAlerta").classList.remove("d-none");
        // Limpia el formulario
        elFormulario.reset();
    });
});

// Función para cerrar la alerta con la "X"
function ocultarAlerta() {
    document.getElementById("miAlerta").classList.add("d-none");
}