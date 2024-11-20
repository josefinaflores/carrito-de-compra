const menus = [{nombre: "Inicio", url:"index.html"},
    {nombre: "Contacto", url:"quienes.html"},
    {nombre:"Carrito de compra", url:"carrito.html"},
]

function cargarelmenu(){
    let enlances = document.getElementById('ulmenu')
    for (const menu of menus){
        let lista = document.createElement("li")
        lista.innerHTML = `<a href="${menu.url}">${menu.nombre}</a>`
        enlances.appendChild(lista)
    }
}
cargarelmenu()

let productocarritos = JSON.parse(localStorage.getItem("carrito")) || []; 

function cargarcarrito() {
    let enlaces = document.getElementById('tablacar');
    for (const productocarrito of productocarritos) {
        let lista = document.createElement("tr");
        lista.id = `${productocarrito.id}`
        lista.innerHTML = `<td><img src="${productocarrito.img}" width="50"></td>
                           <td>${productocarrito.cantidad}</td> 
                           <td>${productocarrito.nombre}</td>
                           <td>${productocarrito.precio}</td>
                           <td>${productocarrito.cantidad * productocarrito.precio}</td>
                           <td><button id="btneliminar" onclick="eliminarproducto('${productocarrito.id}')">Borrar</button></td>`; 
        enlaces.appendChild(lista);
    }
}

cargarcarrito();

function eliminarproducto(id) {
    let nodo = document.getElementById(id);
    nodo.remove();
    productosActualizados = productocarritos.filter(producto => producto.id !== id);
    const enJSON = JSON.stringify(productosActualizados);
    localStorage.setItem("carrito", enJSON)
}