const express = require("express");
const logger = require('morgan'); //Morgan es middleware tipo logger
const bodyParser = require('body-parser'); //Para peticiones http
const app = express();

//Se agregan los middlewares
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

require("./routes/views")(app);
require("./routes/special")(app);

console.log("Iniciando Express.js");
app.listen(3000, ()=>{
    console.log("Express ha iniciado correctamente!");
});