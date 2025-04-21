// Pedir datos al usuario
let km = parseFloat(prompt("Kilómetros recorridos:"));
let litros = parseFloat(prompt("Litros consumidos:"));

// Calcular y mostrar resultado
let consumo = litros / km;
alert("Consumo por km: " + consumo + " litros/km");