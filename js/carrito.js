function CargarCarritoLS (){

    return JSON.parse (localStorage.getItem("carrito")) || [];
    
}
function GuardarCarritoLS (carrito){

    localStorage.setItem ("carrito", JSON.stringify (carrito));

}

function AgregarProducto (id){

    const carrito = CargarCarritoLS ();
    let producto = resinas.find (elem => elem.id == id);
    carrito.push (producto);
    GuardarCarritoLS (carrito);
  
    Swal.fire({
        icon: 'success',
        title: 'Su producto se agragó al Carrito'
    })
}

function EliminarProducto (id){

    let carrito = CargarCarritoLS ();
    let posicion = carrito.findIndex (elem => elem.id == id);
    carrito.splice (posicion, 1);
    GuardarCarritoLS (carrito);
    mostrarCarrito ();
}
function totalAPagar () {
    let precioFinal = 0;
    let carrito = CargarCarritoLS(); 
    carrito.forEach(elem => { 
       precioFinal += elem.precio
    });
    return precioFinal 
}

function finalizarCompra () {
    Swal.fire({
        icon: 'success',
        title: 'Gracias por su compra!!',
        text: 'El total a abonar es $' + totalAPagar ()
      })
}  

function vaciarCarrito() {
    localStorage.removeItem("carrito");
    mostrarCarrito ();
}    


   