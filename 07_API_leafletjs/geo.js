// Asignar geolocalization como controlador de eventos window.onload
window.onload = function () {
  geolocalization(createMap);
};

function createMap(latitud, longitud) {
  var map = L.map('map').setView([latitud, longitud], 15);
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 20,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
  var marker = L.marker([latitud, longitud]).addTo(map);
  // add a function to the map when the user clicks on it
  map.on('click', function (e) {
    marker.bindPopup("Abraham Melgoza de la Torre");
  });

  document.getElementById('loading').style.display = "none";
  document.getElementById('loader').style.display = "none";
  document.getElementById('map').style.background = "#f2eee8";
  document.getElementById('coord').innerHTML = `<div id="latitud">Latitude: ${latitud}</div>
        <div id="Longitud">Longitude: ${longitud}</div>`;


}

function geolocalization(callback) {
  // Verificar disponibilidad de geolocalización
  let parragraph = document.getElementById('loading');
  let loader = document.getElementById('loader');
  if (!navigator.geolocation) {
    parrafo.innerHTML = "Geolocation is not supported by your browser";
    parragraph.style.color = "red";
    loader.style.display = "none";

    return;
  }
  // Obtener ubicación actual
  navigator.geolocation.getCurrentPosition(
    function (position) { // <-- Success Handler
      var latitud = position.coords.latitude;
      var longitud = position.coords.longitude;
      callback(latitud, longitud); // Llamar a la función callback con las coordenadas
    },
    function (error) { // <-- Error Handler
      var errors = {
        1: 'Permission denied',
        2: 'Position unavailable',
        3: 'Timeout exceeded'
      };
      parragraph.innerHTML = "Map can't load Error: " + errors[error.code];
      parragraph.style.color = "red";
      loader.style.display = "none";
    },
    { enableHighAccuracy: true, timeout: Infinity, maximumAge: 0 }
  );
}

