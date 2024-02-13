let libros = JSON.parse(localStorage.getItem("libros"));
let indice = -1;
if (libros == null) libros = [];

function lista() {
  let aLength = libros.length;

  document.getElementById("listado").innerHTML = "";
  document.getElementById("total").innerHTML = "";

  let tabla = "<tr><th>Titulo</th><th>Autor</th><th>Editorial</th><th>Anio</th><th>Borrar</th><th>Editar</th></tr>";

  for (let i in libros) {
    console.log(i);
    let libro = JSON.parse(libros[i]);

    tabla += "<tr><td>" + libro.titulo + "</td>";
    tabla += "<td>" + libro.autor + "</td>";
    tabla += "<td>" + libro.editorial + "</td>";
    tabla += "<td>" + libro.anio + "</td>";
    tabla += "<td><button onclick='borrar(" + i + ")'>Borrar</button></td>";
    tabla += "<td><button onclick='editar(" + i + ")'>Editar</button></td>";
    tabla += "</tr>";
  }

  document.getElementById("listado").innerHTML = tabla;
  document.getElementById("total").innerHTML = "Total de libros: " + aLength;
}

function alta() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let editorial = document.getElementById("editorial").value;
  let anio = document.getElementById("anio").value;

  let salir = 1 * titulo.length * autor.length * editorial.length * anio.length;

  if (salir == 0) {
    alert("Faltan datos por capturar");
    return;
  }

  let libro = JSON.stringify(
    {
      titulo: titulo,
      autor: autor,
      editorial: editorial,
      anio: anio,
    });
  if (indice == -1) {
    libros.push(libro);

    localStorage.setItem("libros", JSON.stringify(libros));
    alert("libro anadido exitosamente");
  } else {
    libros[indice] = libro;
    localStorage.setItem("libros", JSON.stringify(libros));
    alert("libro editado exitosamente");
    document.getElementById("altaBtn").innerHTML = "Guardar"
  }
  lista();

  //borramos lo que previamente se habia capturado
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("editorial").value = "";
  document.getElementById("anio").value = "";
  indice = -1;
}

function borrar(id) {
  let libro = JSON.parse(libros[id]);
  let titulo = libro.titulo;
  if (confirm("Desea borrar el libro " + titulo)) {
    libros.splice(id, 1);
    localStorage.setItem("libros", JSON.stringify(libros));
    alert("libro borrado exitosamente");
  }
  lista();
}

cancelar = () => {
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("editorial").value = "";
  document.getElementById("anio").value = "";
  document.getElementById("altaBtn").innerHTML = "Guardar"
  let buttonsTD = document.getElementById("buttonsTD");
  buttonsTD.innerHTML = '<button id="altaBtn" onclick="alta()" />Guardar</button>';
  indice = -1;
}

function editar(id) {
  let libro = JSON.parse(libros[id]);
  document.getElementById("titulo").value = libro.titulo;
  document.getElementById("autor").value = libro.autor;
  document.getElementById("editorial").value = libro.editorial;
  document.getElementById("anio").value = libro.anio;
  document.getElementById("altaBtn").innerHTML = "Editar"
  let buttonsTD = document.getElementById("buttonsTD");
  buttonsTD.innerHTML += "<button onclick='cancelar()'>Cancelar</button>"
  indice = id;
}

window.onload = lista;