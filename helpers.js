const chalk = require("chalk");
const fs = require("fs/promises");

//funcion que comprueba que una ruta existe en disco
//esta la querremos para el inputdir
async function pathExists(path) {
  try {
    await fs.access(path);
    console.log(chalk.green("La ruta existe"));
    //fs.access() comprueba si existe la ruta, es funcionalidad de fs. PÍLDORA.
  } catch {
    throw new Error("La ruta path no existe");
  }
}
//funcion que crea una ruta en disco sino existe
//esta la querremos para el outputdir
async function createPathIfNotExists(path) {
  try {
    await fs.access(path);
    //comprueba si existe
  } catch {
    await fs.mkdir(path);
    //crea un directorio en la ruta path
  }
}

module.exports = {
  pathExists,
  createPathIfNotExists,
};
