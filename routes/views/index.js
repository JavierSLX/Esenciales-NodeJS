const glob = require("glob");
const path = require("path");

//Asigna los archivos de ls rutas
module.exports = function(app){
  
  //Define la ruta de los archivos y de manera asincrona saca cada uno de ellos
  glob.sync("./routes/**/*.js").forEach((file)=>{

    //Si el archivo no es index, lo resuelve con la app solicitada
    if (!file.includes("index.js")) {
      require(path.resolve(file))(app);
    }
  })
}