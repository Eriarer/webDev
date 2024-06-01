const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();

const rutas = require("./routes/rutas");
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

app.use("/", rutas);

app.listen(port, (err, res) => {
  if (err) {
    console.log(`Error al iniciar el servidor: ${err}`);
  } else {
    console.log(`Servidor iniciado en: http://localhost:${port}`);
  }
});
