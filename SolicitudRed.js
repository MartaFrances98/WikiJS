window.onload = function () {
    cargarDatosGatos();

}
function cargarDatosGatos() {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            llenarSelectorConRazas(datosGatos);
        })
        .catch(error => console.error('Error al cargar los datos de gatos:', error));
}

function llenarSelectorConRazas(datosGatos) {
    const selectorRaza = document.getElementById('selectorRaza');
    const razas = [...new Set(datosGatos.map(gato => gato.raza))];

    razas.forEach(raza => {
        const opcion = document.createElement('option');
        opcion.value = raza;
        opcion.textContent = raza;
        selectorRaza.appendChild(opcion);
    });
}

function mostrarGatosDeRaza(razaSeleccionada) {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            const gatosFiltrados = datosGatos.filter(gato => gato.raza === razaSeleccionada);
            const tabla = document.getElementById('tablaGatos');
            tabla.innerHTML = ''; // Limpiar tabla anterior

            if (gatosFiltrados.length) {
                const encabezado = tabla.insertRow();
                ['Nombre', 'Raza', 'Edad', 'Color'].forEach(texto => {
                    const celda = encabezado.insertCell();
                    celda.textContent = texto;
                });

                gatosFiltrados.forEach(gato => {
                    const fila = tabla.insertRow();
                    Object.values(gato).forEach(texto => {
                        const celda = fila.insertCell();
                        celda.textContent = texto;
                    });
                });
            }
        })
        .catch(error => console.error('Error al cargar los datos de gatos:', error));
}

fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02/simple.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta de red no fue ok');
        }
        return response.json();
    })
    .then(data => {
        const divDatosCovid = document.getElementById('datosCovid');
        // Aquí puedes formatear los datos como desees antes de mostrarlos
        divDatosCovid.textContent = JSON.stringify(data, null, 2); // Muestra los datos en formato JSON
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('datosCovid').textContent = 'Error al cargar los datos';
    });

    fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02/simple.json', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById('resultadoFetch').textContent = 'Datos recibidos: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
        document.getElementById('resultadoFetch').textContent = 'Error al obtener datos: ' + error;
    });

    function copiarCodigo(elementoCode) {
        // Crear un rango y un objeto de selección para seleccionar el texto
        const rango = document.createRange();
        const selección = window.getSelection();
        rango.selectNodeContents(elementoCode);
        selección.removeAllRanges(); // Limpia selecciones existentes
        selección.addRange(rango); // Añade el rango que contiene el texto del elemento code
    
        try {
            // Ejecutar el comando de copiado
            const exitoso = document.execCommand('copy');
            const mensaje = exitoso ? 'exitoso' : 'fallido';
            console.log(`Copiado ${mensaje}`);
        } catch (err) {
            console.error('Error al copiar', err);
        }
    
        // Limpiar la selección
        selección.removeAllRanges();
    }
    