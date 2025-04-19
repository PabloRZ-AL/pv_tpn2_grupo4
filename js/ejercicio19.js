document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('#studentForm');
  
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = document.querySelector('#nombre').value.trim();
    const apellido = document.querySelector('#apellido').value.trim();
    const libreta = document.querySelector('#libreta').value.trim();
    
    if (nombre && apellido && libreta) {
      const mensaje = `Los datos ingresados son:\nNombre: ${nombre}\nApellido: ${apellido}\nLibreta Universitaria: ${libreta}`;
      alert(mensaje);
      form.reset();
    }
  });
});