// bind the console log
let cl = console.log.bind(console);

let init = () => {
  let imagenes = document.querySelectorAll('#cajaimagenes >img');
  imagenes.forEach((imagen) => {
    imagen.addEventListener('dragstart', arrastrado, false);
    imagen.addEventListener('dragend', finalizado, false);
  });
  soltar = document.getElementById('lienzo');
  lienzo = soltar.getContext('2d');
  soltar.addEventListener('dragenter', eventoEnter, false);
  soltar.addEventListener('dragover', eventoOver, false);
  soltar.addEventListener('drop', soltado, false);
}

let eventoEnter = (e) => {
  cl('eventoEnter');
  e.preventDefault();
}

let eventoOver = (e) => {
  cl('eventoOver');
  e.preventDefault();
}

let soltado = (e) => {
  cl('soltado');
  e.preventDefault();
  let id = e.dataTransfer.getData('Text');
  let element = document.getElementById(id);
  let posX = e.pageX - soltar.offsetLeft;
  let posY = e.pageY - soltar.offsetTop;
  lienzo.drawImage(element, posX, posY);
}

let arrastrado = (e) => {
  cl('arrastrado');
  element = e.target;
  e.dataTransfer.setData('Text', element.id);
  e.dataTransfer.setDragImage(element, 0, 0);
}

let finalizado = (e) => {
  cl('finalizado');
  element = e.target;
  element.style.visibility = 'hidden';
}

window.onload = init;