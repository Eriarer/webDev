window.onload = function () {
  let appfile = (window.file && window.FileReader);
  if (appfile) {
    document.getElementById('error').innerHTML = 'APIs disponibles';
    return;
  }
  document.getElementById('archivos').addEventListener('change', seleccionaArchivo);
}

function seleccionaArchivo(e) {
  let archivo = e.target.files[0];
  muestraDatos(archivo);

  if (!archivo.type.match('image.*')) {
    document.getElementById('salida').innerHTML = "Este archivo no es una imagen";
    setTimeout(function () {
      document.getElementById('salida').innerHTML = "";
      location.reload();
    }, 3000);
    return;
  }

  let datos = new FileReader();
  datos.readAsDataURL(archivo);
  datos.onload = function (e) {
    let resultado = e.target.result;
    let imagen = new Image();
    imagen.src = resultado;
    document.getElementById('salida').appendChild(imagen);
  }
}

function muestraDatos(archivo) {
  document.getElementById('nombre').innerHTML = archivo.name;
  document.getElementById('tamano').innerHTML = archivo.size + " bytes";
  document.getElementById('tipo').innerHTML = archivo.type;
  document.getElementById('data-container').removeAttribute('hidden');
}