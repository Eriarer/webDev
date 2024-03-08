window.addEventListener('load', inicio, false);

function inicio() {
  document.getElementById('archivo').addEventListener('change', cargar, false);
}

function cargar(ev) {
  document.getElementById('archivoSelected').innerHTML = ev.target.files[0].name;
  document.getElementById('cardTitle').innerHTML = 'Archivo:' + ev.target.files[0].name;

  let lastMod = new Date(ev.target.files[0].lastModifiedDate);
  document.getElementById('parrafo').innerHTML =
    'Tamaño del archivo: ' + ev.target.files[0].size + '<br>' +
    'Tipo MIME: ' + ev.target.files[0].type + '<br>' +
    'Última modificación: ' + lastMod.toLocaleDateString() + ' ' + lastMod.toLocaleTimeString();

  // quitarle el atributo hidden
  document.getElementById('cartaDatos').removeAttribute('hidden');
  var arch = new FileReader();
  arch.addEventListener('load', leer, false);
  arch.readAsText(ev.target.files[0]);
  // cerrar el archivo
  arch.close();
}

function leer(ev) {
  document.getElementById('editor').value = ev.target.result;
}