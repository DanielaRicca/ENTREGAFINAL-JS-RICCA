function mostrarCarrito (){

    let productos = CargarCarritoLS ();
    let contenido = "";
    if (productos.length > 0){
        contenido = `<table class="table">`;
        productos.forEach(elem => {
        contenido+= `<thead>
        <tr>
          <th scope="col">Producto</th>
          <th scope="col">Precio</th>
          <th scope="col">Total</th>
          <th></th>
          
        </tr>
        </thead>
        <tr>
          <td> <img src="${elem.imagen}"  width="60" alt="..."> ${elem.nombre}</td>
          <td> $${elem.precio.toFixed(2)}</td>
          <td> $${elem.precio.toFixed(2)}</td>
          <td class="text-end"> <button type="button" class="btn btn-danger" onclick = "EliminarProducto (${elem.id})" class="card-text">Quitar Producto</button></td>
        </tr>`
    });
        contenido += `<tr>
          <td></td>
          <th>Total a pagar:</th>
          <th>$${totalAPagar().toFixed(2)}</th>
          <td></td>
        </tr> 
        <tr>
          <td class="text-end"><button class="btn text-light btn-danger" onclick="vaciarCarrito();" title="Vaciar Carrito">Vaciar Carrito</button></td>
          <td></td>
          <td class = "text-end"><a href="#" class="btn text-light btn-dark" onClick="finalizarCompra()">Finalizar compra</a>
          </td> 
          <td></td>
        </tr>
        </table>`
        productos.innerHTML = contenido;
    
    } else {
        contenido = `<div class="alert alert-danger text-center" role="alert">
        No se encontraron productos!
      </div>`
    }

    let contenedor = document.getElementById ("contenido")
    contenedor.innerHTML = contenido  
}
mostrarCarrito ();




