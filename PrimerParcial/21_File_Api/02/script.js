window.onload = function () {
  var appfile = (window.file && window.FileReader);
  if (appfile == false) {
    document.getElementById('error').innerHTML = 'API no soportada';
    return;
  }
  document.getElementById('archivos').addEventListener("change", seleccionaArchivo);
}

function seleccionaArchivo(e) {
  var archivo = e.target.files;
  var total = 0;
  var info = "<h2>Arvhivos que seleccionaste</h2>" +
    "<table><tr><th>Nombre</th><th>Tamaño</th><th>Tipo</th></tr>";

  for (let i = 0; i < archivo.length; i++) {
    let file = archivo[i];
    total += file.size;
    info += "<tr><td>" + file.name + "</td><td>" + file.size + "</td><td>" + file.type + "</td></tr>";

  }

  info += "</table>";
  info += "<p>Total leído: " + (total / 1024).toFixed(3) + "Kb en " + archivo.length + " archivos</p>"
  document.getElementById("salida").innerHTML = info;
}