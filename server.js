var express = require("express"); // obtener la dependencia de express, lo que nos devuelve una funcion
var app = express(); // esta funcion devuelve un método con todas las funciones de express
// app.get("/", function (req, res) {
//
//   res.send("hola");
// });
//
// app.get("/ilse", function (req, res) {
//
//   res.send("hola, ¿cómo estás?");
// });
app.use(express.static(__dirname + "/public/"));

// que haga caso al puerto 3000
app.listen(3000, function () {console.log("servidor escuchando en el puerto 3000")});
