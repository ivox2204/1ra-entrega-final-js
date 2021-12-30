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

    function compraTortas(compra) {
        let cartelCompra = parseInt(prompt('¿Qué torta quéres comprar? Ingresar número válido'));

        if (cartelCompra < 0 || cartelCompra > Tiposdetortas.length) {
            let cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));
            compra.push(
                Tiposdetortas[cartelCompra - 1].nombre,
                Tiposdetortas[cartelCompra - 1].sabor,
                Tiposdetortas[cartelCompra - 1].precio,
                cartelCantidad
            );
        } else {
            console.log(cartelCompra);
            while (cartelCompra < 0 || cartelCompra > Tiposdetortas.length) {
                alert('Ingresar número válido');
                cartelCompra = parseInt(prompt('¿Qué torta quéres comprar? Ingresar número válido'));
            }
            cartelCantidad = parseInt(prompt(`¿Qué cantidad de ${Tiposdetortas[cartelCompra - 1].nombre} quéres comprar?`));
            compra.push(
                Tiposdetortas[cartelCompra - 1].nombre,
                Tiposdetortas[cartelCompra - 1].sabor,
                Tiposdetortas[cartelCompra - 1].precio,
                cartelCantidad
            );
        }

        return compra;
    }

    let valor = compraTortas(compra);

    console.log(valor);

   