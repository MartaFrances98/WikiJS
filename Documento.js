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
            tabla.innerHTML = ''; 

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



// Crear el elemento original
let divOriginal = document.createElement('div');
divOriginal.id = 'miDiv';
divOriginal.textContent = 'Hola Mundo';

// Agregar el elemento original al cuerpo del documento
document.body.appendChild(divOriginal);

// Ahora que el divOriginal está en el DOM, puedes usar getElementById
let divOriginalEnDOM = document.getElementById('miDiv');

// Crear el elemento para mostrar el resultado
let divResultado = document.createElement('div');
divResultado.id = 'resultado';

// Agregar el elemento de resultado al cuerpo del documento
document.body.appendChild(divResultado);

// Ahora puedes usar getElementById para acceder al divResultado
let divResultadoEnDOM = document.getElementById('resultado');

// Copiar el contenido de divOriginal a divResultado
divResultadoEnDOM.textContent = divOriginalEnDOM.textContent;




let elementos = document.getElementsByClassName('miClase');
let resultado1 = document.getElementById('resultadoElementos');

for (let elemento of elementos) {
    resultado1.innerHTML += elemento.textContent + '<br>';
}



let parrafos = document.getElementsByTagName('p');
let resultado2 = document.getElementById('resultadoParrafos');

for (let parrafo of parrafos) {
    resultado2.innerHTML += parrafo.textContent + '<br>';
}


let div = document.querySelector('.miDiv');
let resultado = document.getElementById('resultado');
resultado.textContent = div.textContent;



let items = document.querySelectorAll('.item');
let resultado = document.getElementById('resultadoItems');

items.forEach(item => {
    resultado.innerHTML += item.textContent + '<br>';
});
