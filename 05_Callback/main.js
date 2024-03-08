console.log("Ambraham Melgoza de la Torre");
function solicitudServidor(consulta, callback) {
  setTimeout(function () {
    var respuesta = consulta + "lleno!";
    callback(respuesta);
  }, 5000);
}

// Function Expression
const obtenerResultadosFunctionExpression = function (resultados) {
  console.log("Respuesta del servidor: " + resultados + " - Callback con Function Expression");
}
solicitudServidor("El vaso está medio ", obtenerResultadosFunctionExpression);

// Anonymous Function
solicitudServidor("El vaso está medio ", function (resultados) {
  console.log("Respuesta del servidor: " + resultados + " - Callback con Anonymous Function");
});

// Arrow Function
solicitudServidor("El vaso está medio ", (resultados) => {
  console.log("Respuesta del servidor: " + resultados + " - Callback con Arrow Function");
});