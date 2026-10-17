const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

const imagenes = document.querySelectorAll(".carrusel img");
let indiceActual = 0;

function siguienteImagen() {
      // Le sacamos la clase "activa" a la imagen actual
      imagenes[indiceActual].classList.remove("activa");
      // Pasamos a la siguiente; Regresa al inicio si se llega al final
      indiceActual = (indiceActual + 1) % imagenes.length;
      // Se la agregamos a la nueva imagen
      imagenes[indiceActual].classList.add("activa");
    }
// Tiempo en que cambia de imagen en millisegundos, 5 segundos
setInterval(siguienteImagen, 5000);