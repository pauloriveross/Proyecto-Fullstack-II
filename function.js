// 1. Lista de productos
const productos = [
  { codigo: "TC001",imagen:'tortacuadradachocolate.png', categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Chocolate", precio: 45000 , descripcion: "Deliciosa torta de chocolate con capas de ganache y un toque de avellanas personalizable con mensajes especiales"},                                                                                                                                                                                                                            
  { codigo: "TC002",imagen:'tortacuadradafrutas.png', categoria: "Tortas Cuadradas", nombre: "Torta Cuadrada de Frutas", precio: 50000, descripcion : "Una mezcla de frutas frescas y crema chantilly sobre un suave bizcocho de vainilla, ideal para celebraciones."},
  {codigo: "TC003", imagen :'tortasanjorge.png',categoria: "Tortas Cuadradas",nombre : "Torta San Jorge",precio: 27990,descripcion:"Postre tradicional chileno que destaca por su perfecta combinación de texturas, compuesta por múltiples capas de fina y crujiente masa de hojarasca intercaladas con generosos rellenos de manjar y una suave crema de lúcuma."},
  { codigo: "TT001",imagen:'tortacircularvainilla.png', categoria: "Tortas Circulares", nombre: "Torta Circular de Vainilla", precio: 40000 , descripcion : "Bizcocho de vainilla clásico relleno con crema pastelera y cubierto con un glaseado dulce, perfecto para cualquier ocasión."},
  { codigo: "TT002",imagen:'tortacircularmanjar.png', categoria: "Tortas Circulares", nombre: "Torta Circular de Manjar", precio: 42000 , descripcion : "Torta tradicional chilena con manjar y nueces, un deleite para los amantes de los sabores dulces y clásicos."},
  { codigo: "PI001",imagen:'moussechocolate.png', categoria: "Postres Individuales", nombre: "Mousse de Chocolate", precio: 5000 , descripcion : "Postre individual cremoso y suave, hecho con chocolate de alta calidad, ideal para los amantes del chocolate."},
  { codigo: "PI002",imagen:'tiramisu.png', categoria: "Postres Individuales", nombre: "Tiramisú Clásico", precio: 5500 , descripcion : "Un postre italiano individual con capas de café, mascarpone y cacao,perfecto para finalizar cualquier comida." },
  { codigo: "PSA001",imagen:'tortanaranjasinazucar.png', categoria: "Productos Sin Azúcar", nombre: "Torta Sin Azúcar de Naranja", precio: 48000 , descripcion : "Torta ligera y deliciosa, endulzada naturalmente, ideal para quienes buscan opciones más saludables."},
  { codigo: "PSA002",imagen:'cheesecakesinazucar.png', categoria: "Productos Sin Azúcar", nombre: "Cheesecake Sin Azúcar", precio: 47000 , descripcion : "Suave y cremoso, este cheesecake es una opción perfecta para disfrutar sin culpa." },
  { codigo: "PT001",imagen:'empanadamanzana.png', categoria: "Pastelería Tradicional", nombre: "Empanada de Manzana", precio: 3000 , descripcion : "Pastelería tradicional rellena de manzanas especiadas, perfecta para un dulce desayuno o merienda." },
  { codigo: "PT002",imagen:'tartasantiago.png', categoria: "Pastelería Tradicional", nombre: "Tarta de Santiago", precio: 6000 , descripcion : "Tradicional tarta española hecha con almendras, azúcar, y huevos, una delicia para los amantes de los postres clásicos."},
  { codigo: "PG001",imagen:'browniesingluten.png', categoria: "Productos Sin Gluten", nombre: "Brownie Sin Gluten", precio: 4000 , descripcion : "Rico y denso, este brownie es perfecto para quienes necesitan evitar el gluten sin sacrificar el sabor."},
  { codigo: "PG002",imagen:'pansingluten.png', categoria: "Productos Sin Gluten", nombre: "Pan Sin Gluten", precio: 3500 , descripcion : "Suave y esponjoso, ideal para sándwiches o para acompañar cualquier comida."},
  { codigo: "PV001",imagen:'tortaveganachocolate.png', categoria: "Productos Vegana", nombre: "Torta Vegana de Chocolate", precio: 50000 , descripcion : "Torta de chocolate húmeda y deliciosa, hecha sin productos de origen animal, perfecta para veganos."},
  { codigo: "PV002",imagen:'galletasveganasavena.png', categoria: "Productos Vegana", nombre: "Galletas Veganas de Avena", precio: 4500 , descripcion : "Crujientes y sabrosas, estas galletas son una excelente opción para un snack saludable y vegano." },
  { codigo: "TE001",imagen:'tortacumple.png', categoria: "Tortas Especiales", nombre: "Torta Especial de Cumpleaños", precio: 55000 , descripcion : "Diseñada especialmente para celebraciones, personalizable con decoraciones y mensajes únicos."},
  { codigo: "TE002",imagen:'tortaboda.png', categoria: "Tortas Especiales", nombre: "Torta Especial de Boda", precio: 60000 , descripcion : " Elegante y deliciosa, esta torta está diseñada para ser el centro de atención en cualquier boda."}
];

const carrito = []

function crearCard(producto) {
  const card = document.createElement('div');
  card.className = 'card col-4 d-flex';

  card.innerHTML = `
  <div class="d-flex flex-column h-100 p-2">
    <img
          src="img/${producto.imagen}"
          alt="Torta"
          rel ="preload"
          class="img-fluid my-4"
          style="max-height: 300px;"
        />
    <h3>${producto.nombre}</h3>
    <p>$${producto.precio} CLP</p>
    <p> ${producto.descripcion} </p>
    <button class="btn mt-auto" onclick="agregarAlCarrito('${producto.codigo || ''}')">
      Agregar al carro
    </button>
    </div>
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