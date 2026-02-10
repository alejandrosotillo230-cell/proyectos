const mensajeOverlay = document.getElementById("mensaje-derecha-overlay");
const mensajeDerecha = document.getElementById("mensaje-derecha");

export function reproducirLetra() {
    const secuencia = [
        { texto: "Ay amor", duracion: 4500, overlay: true, overlayDuracion: 2250 },
        { texto: "Te fuiste sin decir adiós", duracion: 2500 },
        { texto: "Por favor", duracion: 4000, overlay: true, overlayDuracion: 2000 },
        { texto: "Vuelve con mi corazón", duracion: 3500 },
        { texto: "Tu boca está pintada en las estrellas", duracion: 3000 },
        { texto: "Un color hermoso cantando 'Doncellas'", duracion: 3000 },
        { texto: "Así es amor", duracion: 3500, overlay: true, overlayDuracion: 1750 },
        { texto: "Es tan bonito y hecho pedazos", duracion: 3500 },
        { texto: "...", duracion: 15000 },
        { texto: "Ay amor", duracion: 4500, fondo: true, overlay: true, overlayDuracion: 2250 },
        { texto: "No quiero verte en frente de otra eninsa", duracion: 3500 },
        { texto: "Por favor", duracion: 4000, overlay: true, overlayDuracion: 2000 },
        { texto: "Bailando pasos en tus brazos, que dolor", duracion: 3500 },
        { texto: "Que pasas más nunca me dejas en paz", duracion: 3500 },
        { texto: "Llevo mil años amandote ya", duracion: 3500 },
        { texto: "No me puedo controlar, yo te tengo que borrar", duracion: 3500 },
        { texto: "Fue tan bonito y hecho pedazos", duracion: 3500 },
        { texto: "...", duracion: 30000 },
    ];

    let tiempo = 0;

    secuencia.forEach(item => {

        // TEXTO PRINCIPAL (igual que siempre)
        setTimeout(() => {
            mensajeDerecha.textContent = item.texto;
            mensajeDerecha.classList.add("mostrar");
        }, tiempo);

        setTimeout(() => {
            mensajeDerecha.classList.remove("mostrar");
        }, tiempo + item.duracion);

        // OVERLAY (solo si se indica)
        if (item.overlay) {

            const inicioEco = tiempo + (item.duracion - item.overlayDuracion);

            setTimeout(() => {
                mensajeOverlay.textContent = item.texto;
                mensajeOverlay.classList.add("mostrar");
            }, inicioEco);

            setTimeout(() => {
                mensajeOverlay.classList.remove("mostrar");
            }, tiempo + item.duracion);
        }

        tiempo += item.duracion + 500;
    });
}
