window.onload = function () {
  var apifile = (window.File && window.FileReader);
  if (apifile == false) {
    alert("APIs no soportadas");
    return;
  }

  document.getElementById('soltar').addEventListener('drop', soltarArchivo);
  document.getElementById('soltar').addEventListener('dragover', moverArchivo);
}

function soltarArchivo(e) {
  let archivo = e.dataTransfer.files;
  e.preventDefault();
  let total = 0;
  let info = "";
  for (let i = 0; i < archivo.length; i++) {
    info += "<p>"
    info += "Nombre: " + archivo[i].name + "<br>";
    info += "Tamano: " + archivo[i].size + "<br>";
    info += "Tipo: " + archivo[i].type;
    info += "</p>";
    total += archivo[i].size;
  }
  info += "<p>Totla de KB leídos: " + total / 1024 + " en " + archivo.length + "</p>";
  document.getElementById("salida").innerHTML = info;
}

function moverArchivo(e) {
  e.preventDefault();
}
