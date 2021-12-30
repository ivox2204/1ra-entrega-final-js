class tortas {
    constructor(nombre, sabor, precio) {
        this.nombre = nombre;
        this.sabor = sabor;
        this.precio = parseFloat(precio);
    }
}
const Tiposdetortas = [];

Tiposdetortas.push(new tortas('torta de manzana', 'dulce', 500));
Tiposdetortas.push(new tortas('torta de limon', 'agridulce', 300));
Tiposdetortas.push(new tortas('torta de durazno', 'dulce', 450));
Tiposdetortas.push(new tortas('torta de maracuya', 'agridulce', 600));
let form = document.getElementById('formulario');
form.elements['comprar'].onclick = function () {
    let compra = [];
    function endCompra() {
        let total = 0;
        compraFinal = [];
        for (let i = 0; i < compra.length; i++) {
            total += compra[i].precio * compra[i].cantidad;
            compraFinal.push({ nombre: compra[i].nombre, sabor: compra[i].sabor, precio: compra[i].precio * compra[i].cantidad });
        }
        console.log(compraFinal);
        console.log('El total es: ' + total);
    }

    function compraTortas() {
        let cartelCompra = parseInt(prompt('¿Qué torta quéres comprar? Ingresar número válido'));

        if (cartelCompra < 0 || cartelCompra < Tiposdetortas.length || !isNaN(cartelCompra)) {
            let cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));

            if (!isNaN(cartelCantidad)) {
                compra.push({
                    nombre: Tiposdetortas[cartelCompra - 1].nombre,
                    sabor: Tiposdetortas[cartelCompra - 1].sabor,
                    precio: Tiposdetortas[cartelCompra - 1].precio,
                    cantidad: cartelCantidad,
                });
            } else {
                while (isNaN(cartelCantidad)) {
                    alert('Ingresar número válido');
                    cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));
                }
                compra.push({
                    nombre: Tiposdetortas[cartelCompra - 1].nombre,
                    sabor: Tiposdetortas[cartelCompra - 1].sabor,
                    precio: Tiposdetortas[cartelCompra - 1].precio,
                    cantidad: cartelCantidad,
                });
            }
        } else {
            while (cartelCompra < 0 || cartelCompra > Tiposdetortas.length || isNaN(cartelCompra)) {
                alert('Ingresar número válido');
                cartelCompra = parseInt(prompt('¿Qué torta quéres comprar? Ingresar número válido'));
            }

            cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));

            if (!isNaN(cartelCantidad)) {
                compra.push({
                    nombre: Tiposdetortas[cartelCompra - 1].nombre,
                    sabor: Tiposdetortas[cartelCompra - 1].sabor,
                    precio: Tiposdetortas[cartelCompra - 1].precio,
                    cantidad: cartelCantidad,
                });
            } else {
                while (isNaN(cartelCantidad)) {
                    alert('Ingresar número válido');
                    cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));
                }
                compra.push({
                    nombre: Tiposdetortas[cartelCompra - 1].nombre,
                    sabor: Tiposdetortas[cartelCompra - 1].sabor,
                    precio: Tiposdetortas[cartelCompra - 1].precio,
                    cantidad: cartelCantidad,
                });
            }
        }
    }
    compraTortas();
    function checkout() {
        let cartelSeguir = prompt('querés seguir comprando tortas? CONTESTAR SI O NO');

        if (cartelSeguir.toUpperCase() === 'SI') {
            compraTortas();
            checkout();
        } else if (cartelSeguir.toUpperCase() === 'NO') {
            endCompra();
        } else {
            checkout();
        }
    }
    checkout();
};