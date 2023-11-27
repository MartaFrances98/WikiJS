
// Función que se ejecuta al cargar la ventana
window.onload = function () {
    cargarDatosGatos();
}

// Función para cargar los datos de los gatos desde un archivo JSON
function cargarDatosGatos() {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            // He llenado el selector con las razas de los gatos
            llenarSelectorConRazas(datosGatos);
        })
        .catch(error => console.error('Error al cargar los datos de gatos:', error));
}

// Función para llenar el selector con las razas de gatos
function llenarSelectorConRazas(datosGatos) {
    const selectorRaza = document.getElementById('selectorRaza');
    // He creado un conjunto único de razas
    const razas = [...new Set(datosGatos.map(gato => gato.raza))];

    // He iterado sobre las razas y he creado opciones para el selector
    razas.forEach(raza => {
        const opcion = document.createElement('option');
        opcion.value = raza;
        opcion.textContent = raza;
        selectorRaza.appendChild(opcion);
    });
}

// Función para mostrar los gatos de una raza seleccionada
function mostrarGatosDeRaza(razaSeleccionada) {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            // He filtrado los gatos por la raza seleccionada
            const gatosFiltrados = datosGatos.filter(gato => gato.raza === razaSeleccionada);
            const tabla = document.getElementById('tablaGatos');
            tabla.innerHTML = ''; // He limpiado la tabla anterior

            // He comprobado si hay gatos filtrados y he actualizado la tabla
            if (gatosFiltrados.length) {
                const encabezado = tabla.insertRow();
                // He insertado las cabeceras de la tabla
                ['Nombre', 'Raza', 'Edad', 'Color'].forEach(texto => {
                    const celda = encabezado.insertCell();
                    celda.textContent = texto;
                });

                // He iterado sobre los gatos filtrados y he añadido filas a la tabla
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

// Ejemplo de fetch para obtener datos de COVID desde una API
fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02/simple.json')
    .then(response => {
        // He verificado si la respuesta es exitosa
        if (!response.ok) {
            throw new Error('Respuesta de red no fue ok');
        }
        return response.json();
    })
    .then(data => {
        // He procesado los datos recibidos
        const divDatosCovid = document.getElementById('datosCovid');
        divDatosCovid.textContent = JSON.stringify(data, null, 2); // He mostrado los datos en formato JSON
    })
    .catch(error => {
        // He gestionado el error en la obtención de datos
        console.error('Error al obtener los datos:', error);
        document.getElementById('datosCovid').textContent = 'Error al cargar los datos';
    });

// Otro ejemplo de fetch para obtener datos de COVID
fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02/simple.json', {
        method: 'GET'
    })
    .then(response => response.json())
    .then(data => {
        // He mostrado los datos recibidos en un elemento del DOM
        document.getElementById('resultadoFetch').textContent = 'Datos recibidos: ' + JSON.stringify(data, null, 2);
    })
    .catch(error => {
        // He gestionado el error en la obtención de datos
        document.getElementById('resultadoFetch').textContent = 'Error al obtener datos: ' + error;
    });

    function copiarCodigo(elementoCode) {
        // Crear un rango y un objeto de selección para seleccionar el texto
        const rango = document.createRange();
        const selección = window.getSelection();
        rango.selectNodeContents(elementoCode);
        // Limpia selecciones existentes
        selección.removeAllRanges(); 
        // Añade el rango que contiene el texto del elemento code
        selección.addRange(rango); 
    
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
    