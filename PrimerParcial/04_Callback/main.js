console.log("Ambraham Melgoza de la Torre");
// Function Expression
const mensajeFunctionExpression = function () {
  console.log("Este mensaje se muestra después de 3 segundos - Function Expression");
}
setTimeout(mensajeFunctionExpression, 3000);

// Anonymous Function
setTimeout(function () {
  console.log("Este mensaje se muestra después de 3 segundos - Anonymous Function");
}, 3000);

// Arrow Function
setTimeout(() => {
  console.log("Este mensaje se muestra después de 3 segundos - Arrow Function");
}, 3000);