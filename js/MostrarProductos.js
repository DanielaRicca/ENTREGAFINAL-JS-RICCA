function mostrarProductos (){

    let productos = cargarProductosLS ();
    let contenido = "";
    productos.forEach(elem => {
        contenido+= `<div class="card m-5 mx-3 text-center" style="width: 18rem;">
        <img src="${elem.imagen}" class="card-img-top" alt="...">
        <div class="card-body">
          <p class="card-text">${elem.nombre}</p>
          <p class="card-text">${elem.descripcion}</p>
          <p class="card-text">$${elem.precio}</p>
          <button type="button" class="btn btn-danger" onclick = "AgregarProducto (${elem.id})" class="card-text">Agregar a Carrito</button>
          </div>
      </div>`});

    let contenedor = document.getElementById ("contenido")
    contenedor.innerHTML = contenido  
}
mostrarProductos ();