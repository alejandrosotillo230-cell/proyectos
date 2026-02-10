import { bloquearFrases } from "./app.js";
import { reproducirLetra } from "./derecha.js";
const corazon = document.getElementById("corazon");
const overlay = document.getElementById("overlay");
const audioMusica = document.getElementById("audio-musica");
const mensajeDerecha = document.getElementById("mensaje-derecha");
let yaInicio = false;

function tocarCorazon(e) {
    if (yaInicio) return;
    yaInicio = true;

    e.stopPropagation();

    bloquearFrases();              // bloquea frases
    corazon.classList.add("activo"); // crece el corazón
    overlay.style.opacity = "1";   // aparece capa

    // musica
    audioMusica.currentTime = 0;
    audioMusica.volume = 0.7;
    audioMusica.play();

    // intro
    mensajeDerecha.textContent = "...";
    mensajeDerecha.classList.add("mostrar");

    // 30 segundos
    setTimeout(() => {
        mensajeDerecha.classList.remove("mostar");
        reproducirLetra();      
    }, 32000);
}

corazon.addEventListener("click", tocarCorazon);
corazon.addEventListener("touchstart", tocarCorazon);
