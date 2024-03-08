window.onload = function () {
  var appfile = (window.file && window.FileReader);
  if (appfile == false) {
    document.getElementById('error').innerHTML = 'API no soportada';
    return;
  }
  document.getElementById('archivos').addEventListener("change", seleccionaArchivo);
}

function seleccionaArchivo(e) {
  var archivo = e.target.files[0];

  if (archivo.type != 'text/plain') {
    document.getElementById('error').innerHTML = 'Error: el archivo debe ser de texto plano';
    setTimeout(() => {
      document.getElementById('error').innerHTML = '';
      location.reload();
    }, 3000);
    return;
  }

  muestraDatos(archivo);
  var datos = new FileReader();
  datos.readAsText(archivo);
  datos.onload = function (e) {
    var resultado = e.target.result;
    document.getElementById("salida").innerHTML = resultado;
  }
}

function muestraDatos(archivo) {
  document.getElementById("nombre").innerHTML = archivo.name;
  let sizeText = '';
  let size = archivo.size;
  switch (true) {
    case (size < 1024):
      sizeText = size + ' bytes';
      break;
    case (size < 1048576):
      sizeText = (size / 1024).toFixed(2) + ' KB';
      break;
    case (size < 1073741824):
      sizeText = (size / 1048576).toFixed(2) + ' MB';
      break;
    default:
      sizeText = (size / 1073741824).toFixed(2) + ' GB';
  }
  document.getElementById("tamano").innerHTML = size + sizeText;
  document.getElementById("tipo").innerHTML = archivo.type;
}