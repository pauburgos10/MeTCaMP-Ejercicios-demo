var express = require("express");
var app = express();

app.get('/', function (req, res) {

  let respuesta = {
    nombre: "Paula",
    edad: 36,
    url: req.url

  }
  res.send(respuesta)
})

app.listen(3000, () => {
 console.log("Server running on port 3000");
});
