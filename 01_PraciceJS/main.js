let cl = console.log.bind(console); // <- shortcut al console.log

alert("Hola Mundo! by eri"); // alerta

// variables
let nombre = "Abrhama Melogza";
cl(nombre);

// constantes
const pi = 3.14159265;
cl(pi);

// Concatenar
let concatena = nombre + " " + pi;
cl(concatena);

// Seleccionar elementos del DOM
let datos = document.querySelector("#datos");
datos.innerHTML = `
    <h3>Template string</h1>
    <p>Mi nombre es: ${nombre}</p>
    <p>EL varlo de pi: ${pi}</p>`; // <- template string

// Condiciones
function mayorEdad(edad) {
  return edad >= 18 ? "Es mayor de edad" : "Es menor de edad";
}

datos.innerHTML += `<p>${mayorEdad(18)}</p>`;
datos.innerHTML += `<p>${mayorEdad(17)}</p>`;

// Bucles
datos.innerHtml += `<p>`;
for (let i = 0; i <= 5; i++) {
  datos.innerHTML += `Año: ${2000 + i}  `;
}
datos.innerHTML += `</p>`;

// Arrays 
const nombres = ["Eri", "Abraham", "Carlitos"];
let divNombres = document.querySelector("#nombres");

divNombres.innerHTML = `<h4>Nombre de ${nombres[2]}</h4>`;
divNombres.innerHTML += '<h3> Listado de Nombres</h3>'
divNombres.innerHTML += `<ul>`;


nombres.forEach((nombre) => { // <- arrow function foreach
  divNombres.innerHTML += `<li>${nombre}</li>`;
});

divNombres.innerHTML += `<li style="color: red;">Ciclo 2</li>`;

for (let nombre of nombres) {
  divNombres.innerHTML += `<li>${nombre}</li>`;
}

divNombres.innerHTML += `</ul>`;

// Funciones
const misdatos = (nombre, edad) => {
  return `
  <h1>Mis Datos</h1>
  <p>Nombre: ${nombre}</p>
  <p>Edad: ${edad}</p>
  `;
}

const mostrar = (elementID, data) => {
  document.querySelector(elementID).innerHTML += data;
}

mostrar("#datos", misdatos("Eri", 25));
mostrar("#datos", misdatos("Abraham", 20));
