const fs = require("fs");

const crearArchivo = async (base = 5, listar = true, h = 10) => {
  try {
    let salida = "";

    for (let i = 1; i <= h; i++) {
      salida += `${base} x ${i} = ${base * i}\n`;
    }

    if (listar) {
      console.log("**********************");
      console.log("      Tabla de", base);
      console.log("**********************");
      console.log(salida);
    }

    fs.writeFileSync(`./salida/tabla-${base}.txt`, salida);

    return `tabla-${base}.txt`;
  } catch (err) {
    throw err;
  }
};

module.exports = {
  crearArchivo,
};
