// operaciones.js

const fs = require('fs');

let citas = {
    nombre: "",
    edad: "",
    tipo: "",
    color: "",
    enfermedad: "",
};

const registrar = (input) => {
    const nuevaCita = {};
    Object.keys(citas).forEach((propiedad, index) => {
        nuevaCita[propiedad] = input[index].toString();
    });

    const archivo = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    archivo.push(nuevaCita);

    fs.writeFileSync('citas.json', JSON.stringify(archivo, null, 2));
    console.log('Cita registrada correctamente.');
};

const leer = () => {
    const archivo = JSON.parse(fs.readFileSync('citas.json', 'utf-8'));
    return archivo;
};

module.exports = { registrar, leer };
