document.addEventListener("DOMContentLoaded", () => {
    const boton = document.getElementById("botonCambiarTexto");
    const mensaje = document.getElementById("mensaje");

    boton.addEventListener("click", () => {
        mensaje.innerText = "¡El mensaje ha cambiado!";
    });
});