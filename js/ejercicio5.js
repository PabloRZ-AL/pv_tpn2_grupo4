let horas = 2;   
let minutos = 30; 

const segundosPorHora = 3600;
const segundosPorMinuto = 60;

let totalSegundos = (horas * segundosPorHora) + (minutos * segundosPorMinuto);

console.log(`Horas: ${horas}`);
console.log(`Minutos: ${minutos}`);
console.log(`Total en segundos: ${totalSegundos}`);