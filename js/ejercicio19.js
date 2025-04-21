import { contarLetraA } from "./ejercicio17.js";

document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("#studentForm");

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const nombre = document.querySelector("#nombre").value.trim();
        const apellido = document.querySelector("#apellido").value.trim();
        const libreta = document.querySelector("#libreta").value.trim();

        if (nombre && apellido && libreta) {
            // Usar la función para contar la cantidad de "a" en el nombre
            const cantidadA = contarLetraA(nombre);

            const mensaje = `Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}\nTu nombre tiene ${cantidadA} letras "a".`;
            alert(mensaje);
            form.reset();
        }
    });
});