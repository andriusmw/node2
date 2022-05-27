/****************** preparativos ************************/

//console.log(process.argv);
//para ver los comandos que le introducimos al llamar el fichero index.js ->process.js
//en el video.

const minimist = require("minimist");
//requiere el modulo minimist y este chekea los argumentos con los que se llama al programa

const args = minimist(process.argv);
console.log(args);
//Muestra lo mismo que la linea 3 pero mas bonito, lo mete en un objeto.

if (!args.inputDir || !args.outputDir) {
  console.error("los argumentos --inputDir y --outputDir son obligatorios");
  process.exit(1);
  //chekea cuando se ejecuta si en los argumentos existe inputdir y outpurdir.
  //sin no existen muestra el error y manda el codigo 1 a la salida del proceso
  //(eso se usa en el futuro con otras apps que recogen ese código)
}

if (!args.watermark && !args.resize) {
  console.error("Es necesario alguno de los argumentos --watermark o --resize");
}

console.log("empezamos a procesar las imágenes");
