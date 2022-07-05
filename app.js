

const { CrearTabla } = require('./Helpers/multiplicar.js');
const argv = require('./Config/yargs');





CrearTabla(argv)
   .then( base => console.log(`El archivo tabla-${base}.txt ha sido creado correctamente`) )
   .catch( base => `Fallo al crear el archivo tabla-${base}.txt` );




