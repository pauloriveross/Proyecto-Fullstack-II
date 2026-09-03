let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

function guardarCarrito() {
  localStorage.setItem("carrito", JSON.stringify(carrito));
}

function agregarAlCarrito(codigo) {
  const producto = productos.find((p) => p.codigo === codigo);
  if (!producto) return;

  const itemExistente = carrito.find((item) => item.codigo === codigo);

  if (itemExistente) {
    itemExistente.cantidad;
  } else {
    carrito.push({ ...producto, cantidad: 1 });
  }

  guardarCarrito();
  actualizarCarrito();

  document.getElementById("mensaje-agregado").textContent =
    `"${producto.nombre}" se agregó al carrito exitosamente.`;
  const modal = new bootstrap.Modal(document.getElementById("agregarModal"));
  modal.show();
}

function eliminarDelCarrito(codigo) {
  carrito = carrito.filter((item) => item.codigo !== codigo);
  guardarCarrito();
  actualizarCarrito();
}

function cambiarCantidad(codigo, sumaOresta) {
  const item = carrito.find((item) => item.codigo === codigo);
  if (!item) return;

  item.cantidad += sumaOresta;

  if (item.cantidad <= 0) {
    eliminarDelCarrito(codigo);
    return;
  }

  guardarCarrito();
  actualizarCarrito();
}

function vaciarCarrito() {
  carrito = [];
  guardarCarrito();
  actualizarCarrito();
}

function calcularTotal() {
  return carrito.reduce((sum, item) => sum + item.precio * item.cantidad, 0);
}

function actualizarCarrito() {
  const contenedor = document.getElementById("items-carrito");
  const totalEl = document.getElementById("total-carrito");

  if (carrito.length === 0) {
    contenedor.innerHTML =
      '<p class="text-muted text-center my-4">El carrito está vacío.</p>';
    totalEl.textContent = "$0 CLP";
    return;
  }

  contenedor.innerHTML = carrito
    .map(
      (item) => `
    <div class="d-flex align-items-center border-bottom py-2">
      <img src="img/${item.imagen}" alt="${item.nombre}" style="width: 50px; height: 50px; object-fit: cover;" class="me-2 rounded">
      <div class="flex-grow-1">
        <h6 class="mb-0">${item.nombre}</h6>
        <small class="text-muted">$${item.precio.toLocaleString()} CLP</small>
      </div>
      <div class="d-flex align-items-center">
        <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad('${item.codigo}', -1)">-</button>
        <span class="mx-2">${item.cantidad}</span>
        <button class="btn btn-sm btn-outline-secondary" onclick="cambiarCantidad('${item.codigo}', 1)">+</button>
        <button class="btn btn-sm btn-outline-danger ms-2" onclick="eliminarDelCarrito('${item.codigo}')">
          <i class="bi bi-trash"></i>
        </button>
      </div>
    </div>
  `,
    )
    .join("");

  totalEl.textContent = `$${calcularTotal().toLocaleString()} CLP`;
}

document.addEventListener("DOMContentLoaded", () => {
  actualizarCarrito();
  document
    .getElementById("btn-vaciar")
    .addEventListener("click", vaciarCarrito);
});

function verCarrito() {
  bootstrap.Modal.getInstance(document.getElementById("agregarModal")).hide();
  new bootstrap.Offcanvas(document.getElementById("carritoOffcanvas")).show();
}
