/****************** preparativos ************************/

//console.log(process.argv);
//para ver los comandos que le introducimos al llamar el fichero index.js ->process.js
//en el video.

const minimist = require("minimist");
//requiere el modulo minimist

const args = minimist(process.argv);
console.log(args);
//Muestra lo mismo que la linea 3 pero mas bonito, lo mete en un objeto.
