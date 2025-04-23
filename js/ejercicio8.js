let numero1 = 10;
let numero2 = 15;


const calcularMayor = () => {
    if (numero1 > numero2)
        console.log (numero1 + " es el mayor")
    if (numero1 < numero2)
        console.log (numero2 + " es el mayor")
    if (numero1 == numero2)
        console.log ("Son iguales")
};

/* 
El ejercicio dice usar alert para mostar los valores pero al no utilizar un archivo html se reemplazó por console.log

const calcularMayor = () => {
    if (numero1 > numero2)
        alert (numero1 + " es el mayor")
    if (numero1 < numero2)
        alert (numero2 + " es el mayor")
    if (numero1 == numero2)
        alert ("Son iguales")
};
*/

calcularMayor();

numero1 = 25;
numero2 = 20;

calcularMayor();

numero1 = 30;
numero2 = 30;

calcularMayor();
