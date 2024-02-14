let productos;
let index = -1;
const productoAlert = document.getElementById("alertas");
const productosCount = document.getElementById("productos");
const precioTotal = document.getElementById("precioTotal");


const init = () => {
  // verificar que exista el vector de productos en el local storage
  productos = JSON.parse(localStorage.getItem("productos"));
  if (productos == null) {
    productos = [];
    document.getElementById("tablaCarrito").innerHTML = "<tr><td>No hay productos</td></tr>"
  } else {
    generateTable();
  }
}

const agregarCarrito = (nombre, precio) => {
  console.log("Agregando al carrito: ",
    nombre, precio.toFixed(2));
  // agregar el producto al carrito, la tabla y el local storage
  productos.push({ nombre, precio });
  index++;
  localStorage.setItem("productos", JSON.stringify(productos));
  generateTable();
}


const eliminarProducto = (id) => {
  // eliminar el producto del vector y del local storage
  console.log("Eliminando producto con id: ", id);
  productos.splice(id, 1);
  localStorage.setItem("productos", JSON.stringify(productos));

  // generar la tabla nuevamente
  generateTable();

  // Crear un div Auxiar
  let element = document.createElement("div");
  element.innerHTML = '<div class="alert alert-danger container" role="alert" id="productoEliminado">Producto eliminado</div >';
  // Agregar el elemento al padre
  productoAlert.appendChild(element);
  // dormir el hilo por 3 segundos
  setTimeout(() => {
    // eliminar el elemento del DOM
    productoAlert.removeChild(element);
  }, 1495);
}

const generateTable = () => {
  index = -1;
  let acum = 0;
  // agregar la tabla a el elemento <tablele id="tablaCarrito"></tablele>
  let table = document.getElementById("tablaCarrito");
  table.innerHTML = "<tr><th>Nombre</th><th>Precio</th><th></th></tr>";
  productos.forEach((producto) => {
    index++;
    acum += producto.precio;
    table.innerHTML += `<tr>
      <td>${producto.nombre}</td>
      <td>${producto.precio.toFixed(2)}</td>
      <td><button onclick="eliminarProducto(${index})"><i class="fa-solid fa-x" style="color: #c20000;"></i></button></td>
    </tr>`;
  });
  let total = acum == 0 ? "No hay productos" : `Total: ${acum.toFixed(2)}`;
  let productoasMSG = acum == 0 ? "" : `Productos: ${productos.length}`;
  productosCount.innerHTML = productoasMSG;
  precioTotal.innerHTML = total;
}

window.onload = init;