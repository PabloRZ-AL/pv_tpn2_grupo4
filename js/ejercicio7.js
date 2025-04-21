// Declarar un array con al menos 6 nombres
const nombres = ["Pablo", "Carlos", "Eduardo", "Alejandro", "Tiago", "juan"];

// Obtener el nombre más largo
const nombreMasLargo = nombres.reduce((max, nombre) => nombre.length > max.length ? nombre : max, "");

console.log("El nombre más largo es:", nombreMasLargo);