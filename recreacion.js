/* inventario.js */

// librerias
import fs from "fs";
import readline from "readline";
const ruta = "inventario_de_productos.json";
let inventario;
//

// bloque de archivo json
try {
    const data = fs.readFileSync(ruta, "utf-8");
    inventario = JSON.parse(data);
} catch (error) {
    inventario = {};
    fs.writeFileSync(ruta, JSON.stringify(inventario, null, 2));
}

/* bloques de validacion */

// bloque de validar respuesta [s/n]
function validar() {
    return new Promise((resolve) => {
        const preguntar = () => {
            rl.question("[s/n]: ", (respuesta) => {
                const validacion = respuesta.toLowerCase();
                //
                if (["s", "n"].includes(validacion)) {
                    resolve(validacion === "s");
                } else {
                    console.log("Debes poner 's' o 'n'");
                    preguntar();
                }
            });
        };
        preguntar();
    });
}
//

// confirma si esta en inventario()
function confirmacion() {
    
}