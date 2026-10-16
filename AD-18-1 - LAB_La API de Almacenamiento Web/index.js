// utilizamos API Fetch para solicitar datos de un recurso web en forma de respuesta JSON
// convertir JSON en cadena - util cuando se necesita almacenar un objeto en algun lugar, 
// como localStorage y utilizarlo mas tarede
//  Podemos  encadenar (  stringify  )  un objeto JSON, almacenarlo  como una cadena y, más tarde, volver a convertir esa cadena en un objeto. 
// const dataSpring = JSON.stringify(response.data);

// convertir cadena a JSON - podemos usar esto en la salid almacenada de JSON.stringify() para convertirla de nuevo
//const dataObject =JSON.parse(dataSpring);


const itemsContainer = document.querySelector("#list-items")

function addItem(item) {
  const colourCard = document.createElement("section")
  colourCard.className = "card w-75"
  itemsContainer.append(colourCard)

  const colourCardBody = document.createElement("article")
  colourCardBody.className = "card-body"
  colourCard.append(colourCardBody)

  const colourCardTitle = document.createElement("h5")
  colourCardTitle.className = "card-title"
  colourCardTitle.innerText = item.name
  colourCardBody.append(colourCardTitle)

  const colourCardText = document.createElement("p")
  colourCardText.className = "card-text"
  colourCardText.innerText = item.pantone_value
  colourCardBody.append(colourCardText)

  const colourCardColour = document.createElement("figure")
  colourCardColour.style = "background-color: " + item.color + ";"
  colourCardColour.innerText = item.color
  colourCardBody.append(colourCardColour)

  const colourCardBreak = document.createElement("br")
  itemsContainer.append(colourCardBreak)
};

// ====================== Tareas =======================================================
function fetchColorsList() {
  fetch('https://reqres.in/api/unknown').then(response => response.json()).then(data => {
      const colores = data.data;
      //Guardar en localStorage
      localStorage.setItem("colors", JSON.stringify(colores));

      // recorrer todos los colores y agregar a la interfaz
      colores.forEach(color => {
        addItem(color);
      });
    })
};

function loadColorsFromStorage() {
  //recuperar lo guardado
  const storedColors = localStorage.getItem("colors");

  if(storedColors){
    //convertir el string en JSON
    const colores = JSON.parse(storedColors);
    
    colores.forEach(color => {
      addItem(color);
    });
  };
};

//Mostrar contenido
const storedColors = localStorage.getItem("colors");
if (storedColors) {
    loadColorsFromStorage();
} else {
    fetchColorsList();
}

// Botón Borrar (Tarea 5)
const clearButton = document.querySelector("#clear-btn");
if (clearButton) {
    clearButton.addEventListener("click", () => {
        localStorage.removeItem("colors");
        itemsContainer.innerHTML = ""; //limpia la pizarra antes de volver a pintar sobre ella
    });
}

// Botón Cargar (Tarea 6)
const loadButton = document.querySelector("#load-btn");
if (loadButton) {
    loadButton.addEventListener("click", () => {
        itemsContainer.innerHTML = "";
        fetchColorsList();
    });
}
