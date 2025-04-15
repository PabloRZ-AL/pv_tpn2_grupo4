const ejercicio6 = ()=>{
    let edades = [13,23,26,27,30,65];
    let acumulador = 0;
    edades.forEach((edad,posicion) => {
        acumulador = acumulador + edad;
        console.log("Posicion "+posicion, ": " +edad)
    });
    console.log("El promedio es: ",acumulador/edades.length)
}

ejercicio6();