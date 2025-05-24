document.addEventListener("DOMContentLoaded", () => {
    // Lista de colores posibles
    const colores = [
        "#FF5733",
        "#33FF57",
        "#3357FF",
        "#FFD700",
        "#FF33A6",
        "#00CED1",
        "#6A5ACD",
    ];
    const boton = document.getElementById("cambiar");
    // Detecta clics en cualquier parte del documento
    boton.addEventListener("click", () => {
        // Elige un color aleatorio
        const colorAleatorio =
            colores[Math.floor(Math.random() * colores.length)];

        // Cambia el color de fondo del body
        document.body.style.backgroundColor = colorAleatorio;
        console.log("el color de fondo es: " + colorAleatorio);
    });
});
