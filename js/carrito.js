const container = document.querySelector ('#container');
const tableContainer = document.querySelector('#contenedor-table');
const itemImg = document.querySelector ('#imagen_table');



miCarrito.forEach( (prod) => {
    const div = document.createElement ("div");

    div.innerHTML = `
    <div class="col d-flex justify-content-center mb-4">
    <div class="card shadow mb-1 bg-light rounded" style="width: 18rem;">
      <img src= ${prod.imagen} alt="" id="imagen_table"> 
      <div class="card-body">
        <h5 class="card-title pt-2 text-center btn-primary">${prod.nombre}</h5>
        <p class="card-text text-black-50 description">${prod.desc}</p>
         <h5 class="text-primary">${prod.precio}<span class ="precio"></span></h5>
        <div class="d-grid gap-d">
        <button onclick='agregarProducto (${prod.id}) ' class="btn btn-primary">Añadir al Carrito</button>
      </div>
      </div>
    </div>
  </div>`;

  container.appendChild (div);
    
});
const carrito = []

function agregarProducto (prodId){
  let producto = miCarrito.find ((item)  => item.id == prodId);
  console.log(carrito);
  carrito.push(producto);

  mostrarCompra ();

 }

 const mostrarCompra = () => {
   tableContainer.innerHTML = "";

   carrito.forEach ((prod)  => {
    const tr = document.createElement ("tr");
    tr.className = "text-primary";
    tr.innerHTML=  `
    
    <th scope="row"> ${prod.id }</th>
    <td class="table__productos"> 
    <img src= ${prod.imagen}  id="imagen_table"> 
    <h5 class="tittle"> ${prod.nombre} </h5>
    </td>
    <td class="table__precio"> ${prod.precio}</td>
    <td class="table__cantidad"> 
      <input type="number" min="1" value="1">
      <button class="delete btn-danger"> x </button>
    </td>
    `;

    tableContainer.appendChild (tr)
    addLocalStorage ()

   });
  }

  function addLocalStorage (){

    localStorage.setItem ('carrito',JSON.stringify (carrito))

  }

  window.onload = function (){
    const storage = JSON.parse (localStorage.getItem ('carrito'));
    if (storage){
      carrito = storage 
      renderCarrito ()
    }

  }