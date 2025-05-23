document.addEventListener("DOMContentLoaded", () => {
    const listaPaises = document.querySelector("#paises");
    const listaCapitales = document.querySelector("#capitales");
    

    listaPaises.addEventListener("change", (e) => {

        const paisID = e.target.value;
        listaCapitales.value = paisID;

        const pais = listaPaises.options[paisID].text;
        const capital = listaCapitales.options[paisID].text;
        

        console.log("El pais seleccionado es: "+ pais + " y su capital es: "+ capital);
    });
})