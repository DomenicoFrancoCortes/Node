let counter = 0;
function cargarMiniatura(event) {
    const imagen = event.target.files[0];

    if (counter >= 3) {
      alert('No se pueden cargar más de tres imágenes.');
      return;
    }

    const urlImagen = URL.createObjectURL(imagen);
    const img = document.createElement('img');
    img.src = urlImagen;

    const miniaturas = document.getElementById('miniaturas');
    miniaturas.appendChild(img);

    counter++;
  }