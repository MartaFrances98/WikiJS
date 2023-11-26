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


function agregarEstilosTabla() {
    let estilos = `
        #miTabla {
            width: 100%;
            border-collapse: collapse;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
        }

        #miTabla th, #miTabla td {
            border: 1px solid #ddd;
            padding: 8px;
            text-align: left;
        }

        #miTabla th {
            background-color: #4CAF50;
            color: white;
        }

        #miTabla tr:nth-child(even) {
            background-color: #f2f2f2;
        }

        #miTabla tr:hover {
            background-color: #ddd;
        }
    `;

    let estilo = document.createElement('style');
    estilo.type = 'text/css';
    estilo.appendChild(document.createTextNode(estilos));
    document.head.appendChild(estilo);

}
document.addEventListener('DOMContentLoaded', agregarEstilosTabla);




document.addEventListener('DOMContentLoaded', (event) => {
    let divOriginal = document.createElement('div');
    divOriginal.id = 'miDiv';
    divOriginal.style.visibility = 'hidden'; 
    divOriginal.textContent = 'Hola Mundo';
    document.body.appendChild(divOriginal);

    let divOriginalEnDOM = document.getElementById('miDiv');

    let divResultado = document.createElement('div');
    divResultado.id = 'resultado';
    document.body.appendChild(divResultado);

    let divResultadoEnDOM = document.getElementById('resultado');
    divResultadoEnDOM.textContent = divOriginalEnDOM.textContent;
});

//GetElementsByClassName
document.addEventListener('DOMContentLoaded', function () {
    let elementos = document.getElementsByClassName('miClase');
    let resultado = document.getElementById('resultadoElementos');
    let contenido = ''; // Usamos una variable para almacenar el contenido

    // Iteramos sobre los elementos con la clase 'miClase'
    Array.from(elementos).forEach(function (elemento) {
        contenido += elemento.textContent; // Añadimos el texto al contenido
        contenido += '<br>'; // Añadimos un salto de línea
    });

    // Removemos el último '<br>' añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // Establecemos el contenido en el div de resultados
    resultado.innerHTML = contenido;
});

//By tag Name
document.addEventListener('DOMContentLoaded', function () {
    let parrafos = document.getElementsByTagName('p');
    let resultado = document.getElementById('resultadoParrafos');
    let contenido = ''; // Usamos una variable para almacenar el contenido

    // Iteramos sobre los elementos con la clase 'miClase'
    Array.from(parrafos).forEach(function (parrafo) {
        contenido += parrafo.textContent; // Añadimos el texto al contenido
        contenido += '<br>'; // Añadimos un salto de línea
    });

    // Removemos el último '<br>' añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // Establecemos el contenido en el div de resultados
    resultado.innerHTML = contenido;
});

//qUERY SELECTOR
document.addEventListener('DOMContentLoaded', function () {
    let divs = document.querySelectorAll('.miDiv'); // Obtenemos todos los elementos con la clase 'miDiv'
    let resultado = document.getElementById('resultado3');
    let contenido = ''; // Usamos una variable para almacenar el contenido

    // Iteramos sobre los elementos con la clase 'miDiv'
    divs.forEach(function (div) {
        contenido += div.textContent; // Añadimos el texto al contenido
        contenido += '<br>'; // Añadimos un salto de línea
    });

    // Removemos el último '<br>' añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // Establecemos el contenido en el div de resultados
    resultado.innerHTML = contenido;
});


document.addEventListener('DOMContentLoaded', function () {
    let items = document.querySelectorAll('.item'); // Corrección aquí: '.item' para seleccionar clases
    let resultado = document.getElementById('resultadoItems');

    // Asegúrate de que el elemento resultado existe
    if (!resultado) {
        console.error('El elemento con ID "resultadoItems" no existe en el DOM.');
        return;
    }

    let contenido = ''; // Usamos una variable para almacenar el contenido

    // Iteramos sobre los elementos 
    items.forEach(function (item) {
        contenido += item.textContent; // Añadimos el texto al contenido
        contenido += '<br>'; // Añadimos un salto de línea
    });

    // Removemos el último '<br>' añadido
    if (contenido.endsWith('<br>')) {
        contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));
    }

    // Establecemos el contenido en el div de resultados
    resultado.innerHTML = contenido;
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
