const radios = document.querySelectorAll('input[name="lenguaje"]');
const resultado = document.getElementById("resultado");

// A cada uno le añade un event listener para "change"
radios.forEach((radio) => {
    radio.addEventListener("change", () => {
        if (radio.checked) {
            resultado.textContent = `Lenguaje seleccionado: ${radio.value}`;
            console.log(`Lenguaje seleccionado: ${radio.value}`);
        }
    });
});
