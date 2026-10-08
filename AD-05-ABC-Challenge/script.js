//Crear funcion que aplique 3 colores aleatorios

function colorAleatorio(){
    const color = ["green","blue","red"];
    const indice = Math.floor(Math.random()* color.length);
}

//Buscar todos los h5 de la pagina
const titulos = document.querySelectorAll("h5");

titulos.forEach(function(h5){
    //ahora cada h5 recibe un color 
    h5.style.color = colorAleatorio();

    //cuando se da clic, cambia de color
    h5.addEventListener("click", function(){
        h5.style.color = colorAleatorio();
    });
});