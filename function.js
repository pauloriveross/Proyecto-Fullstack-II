// 1. Lista de productos
const productos = [
  { codigo: "TC001",imagen:'tortacuadradachocolate.png', categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Chocolate", precio: 45000 },
  { codigo: "TC002",imagen:'tortacuadradafrutas.png', categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Frutas", precio: 50000 },
  { codigo: "TT001",imagen:'tortacircularvainilla.png', categoria: "Tortas Circulares", nombre: "Torta Circular de Vainilla", precio: 40000 },
  { codigo: "TT002",imagen:'tortacircularmanjar.png', categoria: "Tortas Circulares", nombre: "Torta Circular de Manjar", precio: 42000 },
  { codigo: "PI001",imagen:'moussechocolate.png', categoria: "Postres Individuales", nombre: "Mousse de Chocolate", precio: 5000 },
  { codigo: "PI002",imagen:'tiramisu.png', categoria: "Postres Individuales", nombre: "Tiramisú Clásico", precio: 5500 },
  { codigo: "PSA001",imagen:'tortanaranjasinazucar.png', categoria: "Productos Sin Azúcar", nombre: "Torta Sin Azúcar de Naranja", precio: 48000 },
  { codigo: "PSA002",imagen:'cheesecakesinazucar.png', categoria: "Productos Sin Azúcar", nombre: "Cheesecake Sin Azúcar", precio: 47000 },
  { codigo: "PT001",imagen:'empanadamanzana.png', categoria: "Pastelería Tradicional", nombre: "Empanada de Manzana", precio: 3000 },
  { codigo: "PT002",imagen:'tartasantiago.png', categoria: "Pastelería Tradicional", nombre: "Tarta de Santiago", precio: 6000 },
  { codigo: "PG001",imagen:'browniesingluten.png', categoria: "Productos Sin Gluten", nombre: "Brownie Sin Gluten", precio: 4000 },
  { codigo: "PG002",imagen:'pansingluten.png', categoria: "Productos Sin Gluten", nombre: "Pan Sin Gluten", precio: 3500 },
  { codigo: "PV001",imagen:'tortaveganachocolate.png', categoria: "Productos Vegana", nombre: "Torta Vegana de Chocolate", precio: 50000 },
  { codigo: "PV002",imagen:'galletasveganasavena.png', categoria: "Productos Vegana", nombre: "Galletas Veganas de Avena", precio: 4500 },
  { codigo: "TE001",imagen:'tortacumple.png', categoria: "Tortas Especiales", nombre: "Torta Especial de Cumpleaños", precio: 55000 },
  { codigo: "TE002",imagen:'tortaboda.png', categoria: "Tortas Especiales", nombre: "Torta Especial de Boda", precio: 60000 }
];


function crearCard(producto) {
  const card = document.createElement('div');
  card.className = 'card col-4';

  card.innerHTML = `
    <img
          src="img/${producto.imagen}"
          alt="Torta"
          class="img-fluid my-4"
          style="max-height: 300px;"
        />
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio} CLP</p>
    <button class="btn">Comprar</button>
  `;

  return card;
}

function renderizarProductos(lista) {
  const contenedor = document.getElementById('productos');

  lista.forEach(producto => {
    const card = crearCard(producto);
    contenedor.appendChild(card);
  });
}


renderizarProductos(productos);