let libros = Json.parse(localStorage.getItem("libros"));
let lastId = 0;

if (libros == null) libros = [];
else lastId = seekLastId();

function lista() {
  let aLength = libros.length;

  document.getElementById("listado").innerHTML = "";
  document.getElementById("total").innerHTML = "";

  let tabla = "<tr><th>Titulo</th><th>Autor</th><th>Editorial</th><th>Anio</th><th>Borrar</th><th>Editar</th></tr>";

  for (let i in libros) {
    let libro = JSON.parse(libros[i]);

    tabla += "<tr><td>" + libro.titulo + "</td>";
    tabla += "<td>" + libro.autor + "</td>";
    tabla += "<td>" + libro.editorial + "</td>";
    tabla += "<td>" + libro.anio + "</td>";
    tabla += "<td><button onclick='borrar(" + libro.id + ")'>Borrar</button></td>";
    tabla += "<td><button onclick='editar(" + libro.id + ")'>Editar</button></td>";
    tabla += "</tr>";
  }

  document.getElementById("listado").innerHTML = tabla;
  document.getElementById("total").innerHTML = "Total de libros: " + aLength;
}

function seekLastId() {
  for (let i in libros) {
    let libro = JSON.parse(libros[i]);
    if (libro.id > lastId) {
      lastId = libro.id;
    }
  }
  return lastId;

}

function alta() {
  let titulo = document.getElementById("titulo").value;
  let autor = document.getElementById("autor").value;
  let editorial = document.getElementById("editorial").value;
  let anio = document.getElementById("anio").value;
  lastId++;

  let libro = JSON.stringify(
    {
      titulo: titulo,
      autor: autor,
      editorial: editorial,
      anio: anio,
      id: lastId + 1
    });

  libros.push(libro);

  localStorage.setItem("libros", JSON.stringify(libros));
  alert("libro anadido exitosamente");

  lista();

  //borramos lo que previamente se habia capturado
  document.getElementById("titulo").value = "";
  document.getElementById("autor").value = "";
  document.getElementById("editorial").value = "";
  document.getElementById("anio").value = "";
}

function borrar(id) {
  for (let i in libros) {
    let libro = JSON.parse(libros[i]);
    if (libro.id == id) {
      libros.splice(i, 1);
    }
  }

  localStorage.setItem("libros", JSON.stringify(libros));
  lista();
}

function editar(id) {
  for (let i in libros) {
    let libro = JSON.parse(libros[i]);
    if (libro.id == id) {
      document.getElementById("titulo").value = libro.titulo;
      document.getElementById("autor").value = libro.autor;
      document.getElementById("editorial").value = libro.editorial;
      document.getElementById("anio").value = libro.anio;

      libros.splice(i, 1);
    }
  }

  localStorage.setItem("libros", JSON.stringify(libros));
  lista();
}

//Este codigo comentado es equivalente  a window.onload=lista;
/*window.onload = function(){
    lista();
}*/

window.onload = lista;