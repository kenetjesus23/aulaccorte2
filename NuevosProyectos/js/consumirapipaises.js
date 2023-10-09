function poblarDatosPaises(){
    var url = "https://restcountries.com/v3.1/independent?status=true";

    fetch(url)
    .then(respuesta => respuesta.json())
    .then(paises => {
    
        //crearListaPaises (paises)
        adicionarDatosTabla(paises);
        
    })

    function crearListaPaises(paises){

        var ul = crearNodoGenerico('ul');
        for(const pais of paises){
            var li = crearNodoTexto('li', pais.name.common);
            adicionarNodoAContenedor(li, ul)

        }

        adicionarNodoBody(ul)

        
    }

    function mostrarClavesMoneda(paises){
        for(const pais of paises){

            var currencies = pais.currencies;
            var claves = Object.keys(currencies[clave].name)
        }
    }

    function adicionarDatosTabla(paises){
        var tabla = document.getElementById("tablaPaises");

        for (const pais of paises){
            var fila = tabla.insertRow(-1);
            var columnaNombre = fila.insertCell(0);
            var columnaCapital = fila.insertCell(1);
            var columnaRegion = fila.insertCell(2);

            columnaNombre.innerHTML = pais.name.common;
            columnaCapital.innerHTML = pais.capital[0];
            columnaRegion.innerHTML = pais.name.region;
        }
    }


}