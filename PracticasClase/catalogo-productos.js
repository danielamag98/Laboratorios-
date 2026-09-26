
//Crear mi clase:
class Producto{
    constructor (nombre, precio, disponible){
        this.nombre = nombre;
        this.precio = precio;
        this.disponible = disponible;
    }
    mostrarInfo(){
        return "- El producto " + this.nombre + " cuesta $" + this.precio + ". Este producto " + this.disponible;
    }
}

class Maquillaje extends Producto {  
    constructor(nombre, precio, disponible, tono){  
        super(nombre, precio, disponible);   
        this.tono = tono;  
    }
    mostrarInfo(){
        return super.mostrarInfo().trim() + " en tono " + this.tono;  //trim(), evita el salto de linea del classs prodcuto
    }
}

console.log("---------- BIENVENIDA A QUEGUAPA.COM ----------")
//Crear prodcutos --> instancia:
const p1 = new Maquillaje("labial", 250, "esta disponible", "Rojo pasion");
const p2 = new Maquillaje("rimel", 120, "esta disponible", "negro");
const p3 = new Maquillaje("base", 320, "no esta disponible", "claro");
const p4 = new Maquillaje("sombra", 180, "esta disponible", "Bronce");

//Guardarlos en un array
const productos = [p1, p2, p3, p4];

//Imprimir su info
productos.forEach(producto => {
    console.log(producto.mostrarInfo());
});


