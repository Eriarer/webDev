window.onload = miUbicacion;

function miUbicacion() {
  // Si los servicios de geolocalización están disponibles
  if (navigator.geolocation) {
    // Para obtener la ubicación actual llama getCurrentPosition.
    navigator.geolocation.getCurrentPosition(
      siHayExito,
      siHayError,
      { enableHightAccuracy: false, timeout: Infinity, maximage: 0 });
  } else {
    alert("Los servicios de geolocalización  no están disponibles");
  }
}
function siHayExito(posicion) {
  var latitud = posicion.coords.latitude
  var longitud = posicion.coords.longitude
  var output = document.getElementById("ubicacion");
  output.innerHTML = "Latitud: " + latitud + "  Longitud: " + longitud;
}

function siHayError(error) {//errorHandler
  // el objeto posiblesErrores traduce al castellano los posibles errores
  var posiblesErrores = {
    0: "Error desconocido",
    1: "Permiso denegado por el usuario.",
    2: "Posición no disponible",
    3: "Desconexión por tiempo"
  }
  var mensajeError = posiblesErrores[error.code];
  // error.message : información adicional
  if (error.code == 0 || error.code == 2) {
    mensajeError = mensajeError + " " + error.message;
  }
  var div = document.getElementById("ubicacion");
  div.innerHTML = mensajeError;
}