const tabla = document.getElementById('tabla-productos');
let counter = 0;
 //JSON con los datos de los productos
const productos = [
  {
    "id": 1,
    "codigo": "STW001001",
    "nombre": "Baby Yoda Blueball",
    "categoria": "STAR WARS",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
    
  },
  {
    "id": 2,
    "codigo": "STW001002",
    "nombre": "Boba Fett Fighter",
    "categoria": "STAR WARS",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 3,
    "codigo": "STW001003",
    "nombre": "Luke Skylwalker & Grogu",
    "categoria": "STAR WARS",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 4,
    "codigo": "STW001004",
    "nombre": "Stormtrooper Lightsaber",
    "categoria": "STAR WARS",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 5,
    "codigo": "PKM001001",
    "nombre": "Charmander Smiley",
    "categoria": "POKEMON",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 6,
    "codigo": "PKM001002",
    "nombre": "Dragonite Hi!",
    "categoria": "POKEMON",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 7,
    "codigo": "PKM001003",
    "nombre": "Pidgeotto Flying",
    "categoria": "POKEMON",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 8,
    "codigo": "PKM001004",
    "nombre": "Pikachu Smiley",
    "categoria": "POKEMON",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 9,
    "codigo": "PKM001005",
    "nombre": "Vulpix Fancy",
    "categoria": "POKEMON",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 10,
    "codigo": "HPT001001",
    "nombre": "Harry Potter & Hegwid",
    "categoria": "HARRY POTTER",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 11,
    "codigo": "HPT001002",
    "nombre": "Herminione Ball Dress",
    "categoria": "HARRY POTTER",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 12,
    "codigo": "HPT001003",
    "nombre": "Luna Lovegood Lion Mask",
    "categoria": "HARRY POTTER",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  },
  {
    "id": 13,
    "codigo": "HPT001004",
    "nombre": "Snape Patronus",
    "categoria": "HARRY POTTER",
    "edit": "../../img/edit.png",
    "eliminar": "../img/delete.png"
  }

];

// Itero sobre el array de productos y creo una fila en la tabla para cada uno
productos.forEach(producto => {
  const nuevaFila = tabla.insertRow();
  const nuevaCeldaId = nuevaFila.insertCell(0);
  const nuevaCeldaCodigo = nuevaFila.insertCell(1);
  const nuevaCeldaNombre = nuevaFila.insertCell(2);
  const nuevaCeldaCategoria = nuevaFila.insertCell(3);
  const nuevaCeldaEdit = nuevaFila.insertCell(4);
  const nuevaCeldaEliminar = nuevaFila.insertCell(5);

  nuevaCeldaId.innerHTML = producto.id;
  nuevaCeldaCodigo.innerHTML = producto.codigo;
  nuevaCeldaNombre.innerHTML = producto.nombre;
  nuevaCeldaCategoria.innerHTML = producto.categoria;

     // Creao un elemento "img" para mostrar la imagen del producto
     const imagenEdit = document.createElement('img');
     const imagenEliminar = document.createElement('img');
     imagenEdit.src = producto.edit;
     imagenEliminar.src = producto.eliminar;
     nuevaCeldaEliminar.appendChild(imagenEliminar);
     nuevaCeldaEdit.appendChild(imagenEdit);
     imagenEdit.addEventListener('click', function() {
      window.location.href = '../edit/index.html';
    });
});




  
