function guardarDatos() {
  let nombre = document.getElementById("nombre");
  let password = document.getElementById("password");
  if (nombre.value == "") {
    alert("El nombre no puede estar vacío");
    nombre.focus();
    return;
  }
  if (password.value == "") {
    alert("El password no puede estar vacío");
    password.focus();
    return;
  }

  localStorage.nombre = nombre.value;
  localStorage.password = password.value;
  alert("Datos guardados exitosamente");
}

function recuperarDatos() {
  let output = document.getElementById("datos");
  if ((localStorage.nombre == undefined) ||
    (localStorage.password == undefined)) {
    output.innerHTML = "No hay datos guardados";
    return;
  }
  output.innerHTML = "Nombre: " + localStorage.nombre + "<br>";
  output.innerHTML += "Password: " + localStorage.password;
}