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
  let files = "<div class='row row-cols-1 row-cols-md-2'>";
  for (let i = 0; i < archivo.length; i++) {
    files += "<div class='col mb-1'>"
    files += "  <div class='card h-100'>"
    files += `    <div class='card-header'>Archivo ${i + 1}</div>`;
    files += "    <div class='card-body'>";
    files += `      <h5 class='card-title'>${archivo[i].name}</h5>`;
    files += `      <p class='card-text'>Tamaño: ${archivo[i].size} bytes</p>`;
    files += `      <p class='card-text'>Tipo: ${archivo[i].type}</p>`;
    files += "    </div>";
    files += "  </div>";
    files += "</div>";
    total += archivo[i].size;
  }
  files += "</div>";
  info += "<p>Totla de KB leídos: " + total / 1024 + " en " + archivo.length + "</p>";
  document.getElementById("salida").innerHTML = info;
  document.getElementById("filesOutput").innerHTML = files;
  document.getElementById("dataContainer").removeAttribute("hidden");
}

function moverArchivo(e) {
  e.preventDefault();
}
