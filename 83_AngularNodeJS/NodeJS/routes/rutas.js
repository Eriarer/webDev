const express = require("express");
const router = express.Router();
const cuadrado = require("../calculos.js");

const myName = "Abraham Melgoza de la Torre";

router.get("/", (req, res) => {
  res.send({ message: `Hello world! ${myName}` });
});

router.get("/help", (req, res) => {
  res.send({ message: `Help page! ${myName}` });
});

router.get("/test", (req, res) => {
  res.send({ message: `Test page! ${req.query.name} ${req.query.surname}` });
});

router.get("/calculos/:width", (req, res) => {
  const { width } = req.params;
  let area = cuadrado.area(width);
  let perimeter = cuadrado.perimeter(width);
  console.log(`Ancho: ${width}, Area: ${area}, Perimeter: ${perimeter}`);
  let data = {
    data: {
      ancho: width,
      area: area,
      perimetro: perimeter,
    },
  };
  res.json(data);
});

module.exports = router;
