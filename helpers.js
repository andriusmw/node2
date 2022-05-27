const fs = require("fs/promises");

//funcion que comprueba que una ruta existe en disco
async function pathExists(path) {
  try {
    await fs.access(path);
    //fs.access() comprueba si existe la ruta, es funcionalidad de fs. PÍLDORA.
  } catch {
    throw new Error("La ruta path no existe");
  }
}
//funcion que crea una ruta en disco
async function createPathIfNotExists(path) {}

module.exports = {
  pathExists,
  createPathIfNotExists,
};
