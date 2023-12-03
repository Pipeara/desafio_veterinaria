// index.js

const { registrar, leer } = require('./operaciones');

const argumentos = process.argv.slice(2);
const comando = argumentos[0]?.toLowerCase();

if (comando === 'registrar') {
    const datosCita = argumentos.slice(1);
    if (datosCita.length === 5) {
        registrar(datosCita);
        console.log('Función "registrar" ejecutada correctamente.');
    } else {
        console.log('Se requiere ingresar todos los datos:\n- Nombre\n- Edad\n- Tipo\n- Color\n- Enfermedad');
    }
} else if (comando === 'leer') {
    try {
        const citas = leer();
        if (!citas || citas.length === 0) {
            console.log('No hay citas registradas.');
        } else {
            console.log('Procesando datos individuales de cada cita:');
            citas.forEach((cita, index) => {
                console.log(`Cita ${index + 1}:`);
                console.log(`Nombre: ${cita.nombre}`);
                console.log(`Edad: ${cita.edad}`);
                console.log(`Tipo de animal: ${cita.animal}`);
                console.log(`Color: ${cita.color}`);
                console.log(`Enfermedad: ${cita.enfermedad}`);
                console.log('------------------------');
            });
        }
    } catch (error) {
        console.error('Error al leer el archivo:', error.message);
    }
} else {
    console.log('Método ingresado no válido!\nSolo tenemos 2 métodos:\n- Registrar\n- Leer');
}
