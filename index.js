const express = require("express");
const app = express();

//Glob se encarga de las rutas asignadas
require('./routes/views')(app);
require('./routes/special')(app);

console.log("Iniciando Express.js");
app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});