const input = document.getElementById("entrada");
const texto = document.getElementById("salida");

input.addEventListener("input", () => {
    texto.textContent = input.value;
});