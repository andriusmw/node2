/*************************** IMPORTS  ************************* */

//console.log(process.argv);
//para ver los comandos que le introducimos al llamar el fichero index.js ->process.js
//en el video.

const chalk = require("chalk");
const minimist = require("minimist");
//requiere el modulo minimist y este chekea los argumentos con los que se llama al programa
const args = minimist(process.argv);
console.log(args);
//Muestra lo mismo que la linea 3 pero mas bonito, lo mete en un objeto.

const path = require("path");
const fs = require("fs/promises");
//fs/promises lo mismo que fs pero tienes los métodos asyncronos
const { pathExists, createPathIfNotExists } = require("./helpers");

/**************************** PREPARATIVOS ************************/

if (!args.inputDir || !args.outputDir) {
  console.error(
    chalk.red("los argumentos --inputDir y --outputDir son obligatorios")
  );
  process.exit(1);
  //chekea cuando se ejecuta si en los argumentos existe inputdir y outpurdir.
  //sin no existen muestra el error y manda el codigo 1 a la salida del proceso
  //(eso se usa en el futuro con otras apps que recogen ese código)
}

if (!args.watermark && !args.resize) {
  console.error(
    chalk.red("Es necesario alguno de los argumentos --watermark o --resize")
  );
}

console.log(chalk.green("empezamos a procesar las imágenes"));
//chalk.green() le aplica un filtro al texto para que se muestre de un color u otro

const { watermark, resize, inputDir, outputDir } = args;
//destructuring del objeto args para autocomplete y más comodidad al rescribir

/***************************** FUNCIONALIDAD ********************************* */

async function processImages({ inputDir, outputDir, watermark, resize }) {
  console.log(inputDir, outputDir, watermark, resize);
  //crear rutas
  console.log(__dirname); // __dirnamese refiere al directorio actual
  const inputPath = path.resolve(__dirname, inputDir); //crea la ruta donde se va a crear el directorio, primer elemento, es la ruta actual y el segundo el nombre, en este caso, lo que le pasemos al argumento --inputDir
  const outputPath = path.resolve(__dirname, outputDir);
  try {
    await pathExists(inputPath);
    //llamo a la función pathExists del helpers.js que he importado
    //pasando como parámetro el inputPath
  } catch (error) {
    console.log(chalk.red(error.message));
  }

  //comprobar que existe inputDir

  //Crear si no existe outputDIr
  //Comprobar si existe watermark
  //Leer contenidos de inputDir
  //Quedarme solo con los archivos que sean imagenes
  //si existe resize redimensionar
  //si existe watermak poner marca de agua
  //guardar la imagen resultante en outputdir
}

processImages({ inputDir, outputDir, watermark, resize });
