// Importa las clases de animales desde el archivo Tipos.js
import { Leon } from "./clases/Tipos.js";
import { Lobo } from "./clases/Tipos.js";
import { Oso } from "./clases/Tipos.js";
import { Serpiente } from "./clases/Tipos.js";
import { Aguila } from "./clases/Tipos.js";

// Importa las clases de animales desde el archivo Tipos.js
import animalesData from "./Animales.js"; // Importa el módulo de datos de animales desde el archivo Animales.js

let animales = []; // Arreglo para almacenar los objetos de animales registrados

// Función para recargar la tabla de animales en la interfaz de usuario
const reloadTable = () => {
  const animalesTemplate = document.getElementById("Animales"); // Obtiene el contenedor de la tabla de animales
  animalesTemplate.innerHTML = ""; // Limpia el contenido actual de la tabla
  animales.forEach((p, i) => {
    // Itera sobre cada animal en el arreglo
  });
  document
    .querySelectorAll(".card-body button")
    .forEach((b) => b.addEventListener("click", activarHabilidad)); // Agrega un evento de clic a los botones para activar habilidades
};

// Función para reproducir el sonido del animal seleccionado
window.playSound = (nombre) => {
  const animal = animales.find((a) => a.getNombre() == nombre); // Encuentra el objeto de animal correspondiente al nombre
  console.log("Nombre del animal:", nombre); // Imprime el nombre del animal en la consola
  console.log("Objeto animal:", animal); // Imprime el objeto animal en la consola
  if (animal) {
    // Selecciona el método de sonido según el tipo de animal y lo reproduce
    nombre == "Leon"
      ? animal.Rugido()
      : nombre == "Lobo"
      ? animal.Aullido()
      : nombre == "Oso"
      ? animal.Grunido()
      : nombre == "Serpiente"
      ? animal.Siseo()
      : nombre == "Aguila"
      ? animal.Chillido()
      : undefined;
  } else {
    console.log("Objeto animal no encontrado"); // Imprime un mensaje si el objeto animal no se encuentra
  }
};

// Función para mostrar los detalles de un animal en el modal
window.modalDetails = (i) => {
  const modalBody = document.getElementsByClassName("modal-body")[0]; // Obtiene el cuerpo del modal
  const animal = animales[i]; // Obtiene el objeto de animal correspondiente al índice
  modalBody.innerHTML = `
    <img src="${animal.img}" alt="${animal.nombre}">
    <p>Nombre: ${animal.nombre}</p>
    <p>Edad: ${animal.edad}</p>
    <p>Comentario: ${animal.comentarios}</p>
  `; // Agrega el HTML correspondiente al cuerpo del modal para mostrar los detalles del animal
};

// Variable para almacenar la ruta de la imagen del animal seleccionado
let imagenSrc = "";
// Variable para almacenar el sonido del animal seleccionado
let sonido = "";

// Evento de cambio en la selección del tipo de animal
document.getElementById("animal").addEventListener("change", async (e) => {
  const animalSelected = e.target.value; // Obtiene el valor seleccionado en el elemento de selección
  const animales = await animalesData.getData(); // Obtiene los datos de animales del módulo animalesData
  const animalObject = animales.find((a) => a.name == animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado
  imagenSrc = `assets/imgs/${animalObject.imagen}`; // Establece la ruta de la imagen del animal
  console.log(imagenSrc);
  sonido = animalObject.sonido; // Establece el sonido del animal
  const preview = document.getElementById("preview"); // Obtiene el elemento de vista previa de imagen
  preview.parentElement.classList.remove("p-5"); // Remueve una clase de estilo del contenedor de la vista previa
  preview.style.backgroundImage = `url(${imagenSrc})`; // Establece la imagen de fondo de la vista previa
});

// Evento de clic en el botón de registro de animal
document.getElementById("btnRegistrar").addEventListener("click", async () => {
  const animalSelected = document.getElementById("animal").value; // Obtiene el valor seleccionado en el elemento de selección
  const animales = await animalesData.getData(); // Obtiene los datos de animales del módulo animalesData
  const animalObject = animales.find((a) => a.name === animalSelected); // Encuentra el objeto de animal correspondiente al nombre seleccionado

  // Crea el elemento de la tarjeta del animal
  const card = document.createElement("div");
  card.classList.add("card", "col-4", "m-3");

  // Crea el elemento de la imagen del animal
  const animalImage = document.createElement("img");
  animalImage.src = `assets/imgs/${animalObject.imagen}`; // Establece la ruta de la imagen del animal
  card.appendChild(animalImage);

  // Crea el elemento del botón del animal
  const cardButton = document.createElement("button");
  cardButton.textContent = "Reproducir Sonido";
  cardButton.addEventListener("click", () => {
    const nombreAnimal = animalObject.name; // Obtiene el nombre del animal de la tarjeta
    window.playSound(nombreAnimal); // Llama a la función playSound con el nombre del animal
  });
  card.appendChild(cardButton);

  // Agrega la tarjeta del animal al contenedor "Animales"
  const animalesDiv = document.getElementById("Animales");
  animalesDiv.appendChild(card);
});
reloadTable();
