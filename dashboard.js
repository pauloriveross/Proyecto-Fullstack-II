const productos = [
    { codigo: "TC001", nombre: "Torta Cuadrada de Chocolate", precio: 45000, stock: 8},
    { codigo: "TC002", nombre: "Torta Cuadrada de Frutas", precio: 50000, stock: 12},
    { codigo: "TC003", nombre: "Torta San Jorge", precio: 27990, stock: 15},
    { codigo: "TT001", nombre: "Torta Circular de Vainilla", precio: 40000, stock: 10},
    { codigo: "TT002", nombre: "Torta Circular de Manjar", precio: 42000, stock: 7},
    { codigo: "PI001", nombre: "Mousse de Chocolate", precio: 5000, stock: 25},
    { codigo: "PI002", nombre: "Tiramisú Clásico", precio: 5500, stock: 18},
    { codigo: "PSA001", nombre: "Torta Sin Azúcar de Naranja", precio: 48000, stock: 6},
    { codigo: "PSA002", nombre: "Cheesecake Sin Azúcar", precio: 47000, stock: 9},
    { codigo: "PT001", nombre: "Empanada de Manzana", precio: 3000, stock: 40},
    { codigo: "PT002", nombre: "Tarta de Santiago", precio: 6000, stock: 22},
    { codigo: "PG001", nombre: "Brownie Sin Gluten", precio: 4000, stock: 30},
    { codigo: "PG002", nombre: "Pan Sin Gluten", precio: 3500, stock: 20},
    { codigo: "PV001", nombre: "Torta Vegana de Chocolate", precio: 50000, stock: 5},
    { codigo: "PV002", nombre: "Galletas Veganas de Avena", precio: 4500, stock: 28},
    { codigo: "TE001", nombre: "Torta Especial de Cumpleaños", precio: 55000, stock: 4},
    { codigo: "TE002", nombre: "Torta Especial de Boda", precio: 60000, stock: 2},
    { codigo: "TC004", nombre: "Torta Cuadrada de Trufa", precio: 46990, stock: 11},
    { codigo: "TT003", nombre: "Torta Circular Tres Leches", precio: 38990, stock: 13},
    { codigo: "PI003", nombre: "Suspiro Limeño", precio: 4800, stock: 17},
    { codigo: "PSA003", nombre: "Muffin Integral de Arándanos Sin Azúcar", precio: 2500, stock: 35},
    { codigo: "PT003", nombre: "Kuchen Alemán de Frambuesa", precio: 2990, stock: 14},
    { codigo: "PG003", nombre: "Alfajor Artesanal Sin Gluten", precio: 2200, stock: 45},
    { codigo: "PV003", nombre: "Queque Rústico de Plátano y Nuez Vegano", precio: 3500, stock: 16},
    { codigo: "TE003", nombre: "Torta de Aniversario Corazón", precio: 58000, stock: 3},
    { codigo: "MV001", nombre: "Cheesecake de Frutos Rojos", precio: 42000, stock: 10},
    { codigo: "MV002", nombre: "Kuchen de Manzana Crujiente", precio: 28900, stock: 19},
    { codigo: "MV003", nombre: "Volcán de Chocolate Belga", precio: 6500, stock: 24},
    { codigo: "MV004", nombre: "Torta Hojarasca Manjar Lúcuma", precio: 44000, stock: 8},
    { codigo: "MV005", nombre: "Caja de 6 Alfajores Artesanales", precio: 7500, stock: 33},
    { codigo: "MV006", nombre: "Pie de Limón Con Merengue", precio: 26000, stock: 12},
    { codigo: "MV007", nombre: "Cinnamon Rolls Glaseados (Pack x4)", precio: 6990, stock: 27},
    { codigo: "MV008", nombre: "Torta Red Velvet Clásica", precio: 49000, stock: 6}
]

const clientes = [
      { nombre: "Marcelo", email: "marcelo@email.com" },
      { nombre: "Paulo", email: "paulo@email.com" },
      { nombre: "Joaquín", email: "joaquin@email.com" }
]

const tablaProductos = document.getElementById("tblProductos")
productos.forEach((p) => {
    tablaProductos.innerHTML += `
        <tr>
          <td>${p.codigo}</td>
          <td>${p.nombre}</td>
          <td>${p.precio}</td>
          <td>${p.stock}</td>
        </tr>
      `; 
})

const tablaClientes = document.getElementById("tblClientes")
clientes.forEach((c) => {
    tablaClientes.innerHTML += `
        <tr>
          <td>${c.nombre}</td>
          <td>${c.email}</td>
        </tr>
      `; 
})
