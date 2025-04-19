// Función para duplicar los números de un arreglo
function duplicar(numeros) {
  return numeros.map(numero => numero * 2);
}

const numeros = [1, 2, 3, 4, 5];
console.log("Array original:", numeros);
console.log("Array duplicado:", duplicar(numeros));