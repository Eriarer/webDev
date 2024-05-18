const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 8080;
const myName = "Abraham Melgoza de la Torre";
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: `Hello world! ${myName}` });
});

app.get("/help", (req, res) => {
  res.send({ message: `Help page! ${myName}` });
});

app.get("/test", (req, res) => {
  res.send({ message: `Test page! ${req.query.name} ${req.query.surname}` });
});

app.get("/data", (req, res) => {
  res.send({
    secretBase: "Super tower",
    active: true,
    members: [
      {
        name: "Gina",
        age: 29,
        secretIdentity: "Dan Jukes",
        powers: ["Radiation resistance", "Turning tiny", "Radiation blast"],
      },
      {
        name: "Madame Uppercut",
        age: 39,
        secretIdentity: "Jane Wilson",
        powers: [
          "Million tonne punch",
          "Damage resistance",
          "Superhuman reflexes",
        ],
      },
      {
        name: "Eternal Flame",
        age: 1000000,
        secretIdentity: "Unknown",
        powers: [
          "Immortality",
          "Heat Immunity",
          "Inferno",
          "Teleportation",
          "Interdimensional travel",
        ],
      },
    ],
  });
});

app.post("/help", (req, res) => {
  console.log(`Cuerpo de la petición: ${req.body}`);
  res.send({
    message: `Soy una petición POST`,
  });
});

app.post("/products", (req, res) => {
  console.log(`Cuerpo de la petición: ${req.body}`);
  const { nombre, sueldo, categora } = req.body;
  console.log(`Nombre: ${nombre}`);
  console.log(`Sueldo: ${sueldo}`);
  console.log(`Categoría: ${categora}`);
  res.send({
    message: `Producto recibido`,
  });
});

app.post("/products/:id", (req, res) => {
  const { id } = req.params;
  const { motor } = req.query;
  const { precio } = req.body;
  console.log(`ID: ${id}, Motor: ${motor}, Precio: ${precio}`);
  res.json({
    stockmin: 10,
    stockmax: 100,
    existencia: 50,
  });
});
