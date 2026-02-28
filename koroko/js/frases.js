import { puedeMostrarFrases } from "./app.js";
const container = document.getElementById("frase-container");

const frases = [
    "Eres el mejor",
    "Posdata: Me amanecí haciendo esto",
    "❤️"
];

function crearFrase(x, y) {
    const frase = document.createElement("div");
    frase.className = "frase";
    frase.textContent = frases[Math.floor(Math.random() * frases.length)];

    frase.style.left = `${x}px`;
    frase.style.top = `${y}px`;
    frase.style.transform = "translate(-50%, -50%)";

    container.appendChild(frase);
    setTimeout(() => frase.remove(), 4500);
}

document.body.addEventListener("click", (e) => {
    if (!puedeMostrarFrases) return;
    if (e.target.id === "corazon") return;

    crearFrase(e.clientX, e.clientY);
});
