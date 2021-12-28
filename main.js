function tortas(){
    let numero = parseInt(prompt('ingresa la cantidad de tortas'));

    let funcionamiento = {cantidad:numero, i:0};

    let Tortas = {} 

    for (funcionamiento.i; funcionamiento.i < funcionamiento.cantidad; funcionamiento.i++){
        let nombreTorta = prompt(`Ingresar el nombre de la torta ${funcionamiento.i+1} que deseas`);
        Tortas [funcionamiento.i] = nombreTorta
    }
    console.log (Tortas)
}
tortas()
