const retornarMes = (numero) =>{
    const meses ={
        1: "enero",
        2: "febrero",
        3: "marzo",
        4: "abril",
        5: "mayo",
        6: "junio",
        7: "julio",
        8: "agosto",
        9: "septiembre",
        10: "octubre",
        11: "noviembre",
        12: "diciembre"
    }

    return (numero >= 1 && numero <=12) ? meses[numero] : "No es un mes";
}

console.log(retornarMes(12))