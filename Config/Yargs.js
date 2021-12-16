const argv = require("yargs") // argv toma el input del usuario en la consola
  .option("b", {
    // establece la opcion de la base input que el usuario pone
    alias: "base",
    type: "number",
    demandOption: true,
    describe: "Es la base de la tabla de multiplicar",
  })
  .option("l", {
    // establece la opcion de lista input que el usuario pone
    alias: "listar",
    type: "boolean",
    default: false,
    describe: "Muestra la tabla en consola",
  })
  .option("h", {
    // establece la opcion de lista input que el usuario pone
    alias: "hasta",
    type: "number",
    describe: "Especifica el límite de la tabla de multiplicar",
  })
  .check((argv, options) => {
    if (isNaN(argv.b)) {
      throw "La base tiene que ser un número";
    }
    return true;
  }).argv;

module.exports = argv;
