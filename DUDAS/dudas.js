alert("Bienvenido a mi tienda online");

const agregarProducto = () =>{
    let producto = "";
    let cant = 0;
    let seguirComprando = false;
    let carrito = [ ];
   
    do {
producto = prompt("¿Desea comprar fideos, salsa o queso, o un combo de los tres?").toLowerCase();

while ((producto !== "fideos") && (producto !== "salsa") && (producto !== "queso") && (producto !== "combo") &&
(producto !== "combo de los tres") && (producto !== "los 3") && (producto !== "3")){
     alert("El producto elegido no se encuentra disponible actualmente.");
     producto = prompt("¿Desea comprar fideos, salsa o queso, o un combo de los tres?").toLowerCase();
}
cant = parseInt(prompt("¿Cuántos quiere llevar?"));

while (Number.isNaN(cant) || cant === 0){
alert("Debe seleccionar una cantidad válida.")
cant = parseInt(prompt("¿Cuántos quiere llevar?"));
    }

for (let i=0; i<= cant; i++){
carrito.push(producto);
}

seguirComprando = confirm('¿Desea seguir comprando?');
    }while (seguirComprando);
    return carrito;
};

function calcularPrecio(){
    let subtotal = 0;
for (let item of carrito){
    if (item === "fideos"){
        subtotal = subtotal + 200;}
        else if (item === "salsa"){
            subtotal = subtotal +300;
        }else if (item === "queso"){
            subtotal = subtotal+150;
            }else{
                subtotal = subtotal + 500;
            }
return subtotal;
}
}
agregarProducto();
calcularPrecio();
alert("El total de su compra es  " + subtotal);