alert("Bienvenido a mi tienda online");

const agregarProducto = () =>{
    let producto = "";
    let cant = 0;
    let subtotal = 0;
    let precioProd =0;
    let seguirComprando = false;


   
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

switch(producto){
        case "fideos":
                   precioProd= 200;
                   break;
               case "salsa":
                   precioProd = 280;
                   break;    
               case "queso":
                   precioProd = 150;    
                   break;
               case "combo": case "combo de los tres": case "los 3": case "3":
                   precioProd = 500;
                   break;
               default:("Alguno de los datos ingresados no es correcto")
                   precioProd = 0,
                   cantidad = 0;
                   break;
               }
    subtotal += precioProd * cant;
 seguirComprando = confirm('¿Desea seguir comprando?');
    } while (seguirComprando);
    alert("El total de su compra es de $"+subtotal + ". Muchas gracias por su compra.")
}

agregarProducto();
;