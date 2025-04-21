function mostrarMensaje() {
    let nombre = document.getElementById("nombreUsuario").value;

    if (nombre.trim() !== "") {
        document.getElementById("mensaje").innerText = `Hola ${nombre}, bienvenido a Programación Visual!`;
    } else {
        document.getElementById("mensaje").innerText = "Por favor, ingresa tu nombre.";
    }
}