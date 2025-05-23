const input = document.getElementById("entrada");
const texto = document.getElementById("salida");
const p = document.getElementById("salida");
input.addEventListener("input", () => {
    texto.textContent = input.value;

    if(input.value.length > 20) {
        p.style.backgroundColor = "red";
        p.style.color = "white";
    }else {
        p.style.backgroundColor = "#e6f0ff";
        p.style.color = "black";
    }
});

