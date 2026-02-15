const datos = [{
    id: 1,
    title: 'Iron Man',
    year: 2008
}, {
    id: 2,
    title: 'Spiderman: Homecoming',
    year: 2017
}, {
    id: 3,
    title: 'Avengers: Endgame',
    year: 2019
}];

/* funcion arrow que crea una una promesa con el que espera 3000ms (3 seg) para ejecutarse datos */
const getDatos = async () => {
    if (!datos.length)
        throw new Error("No hay datos");
    await new Promise(r => setTimeout(r, 3000));
    return datos;
};

/* crea una funion arrow con async en el cual muestra el resultado*/
const Data = async() => {
    try {
    console.log(await getDatos())
    } catch (err) {
        console.error(err);
    };
};
/* llama funcion */
Data();