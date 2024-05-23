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

const bonos = {
  A: 3000,
  B: 2500,
  C: 2000,
};

router.post("/trabajador", (req, res) => {
  console.log(req.body);
  const { nombre, horas, pago } = req.body;
  const categoria = req.body.categoria.toUpperCase();
  const sueldoBruto = horas * pago;
  const bono = bonos[categoria];
  const sueldoNetoAntesImpuestos = sueldoBruto + bono;
  const impuesto = sueldoNetoAntesImpuestos * 0.1;
  const sueldoNetoDepuesImpuestos = sueldoNetoAntesImpuestos - impuesto;
  const respuesta = {
    nombre,
    categoria,
    bono,
    sueldoBruto,
    sueldoNetoAntesImpuestos,
    sueldoNetoDepuesImpuestos,
  };
  console.log(respuesta);
  res.json(respuesta);
});

module.exports = router;
