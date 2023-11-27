// He cambiado el texto de un elemento en el DOM
function cambiarTexto() {
    document.getElementById("demo").innerHTML = "Texto cambiado";
}

// He agregado estilos a una tabla en el DOM
function agregarEstilosTabla() {
    // He definido una cadena de texto con los estilos CSS
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
// He creado un elemento de estilo y lo he añadido al head del documento
    let estilo = document.createElement('style');
    estilo.type = 'text/css';
    estilo.appendChild(document.createTextNode(estilos));
    document.head.appendChild(estilo);

}

// Al cargar el contenido del DOM, he configurado diversos elementos y manipulaciones
document.addEventListener('DOMContentLoaded', agregarEstilosTabla);
document.addEventListener('DOMContentLoaded', (event) => {
    //He creado el elemento original
    let divOriginal = document.createElement('div');
    divOriginal.id = 'miDiv';
    divOriginal.style.visibility = 'hidden'; 
    divOriginal.textContent = 'Hola Mundo';

    //He buscado el div contenedor y agregarle el div original como hijo
    let contenedor = document.getElementById('contenedor');
    contenedor.appendChild(divOriginal);

    //He obtenido el div original desde el DOM
    let divOriginalEnDOM = document.getElementById('miDiv');

    //He creado el elemento para mostrar el resultado
    let divResultado = document.createElement('div');
    divResultado.id = 'resultadoz';

    //He agregado el div de resultado al mismo contenedor
    contenedor.appendChild(divResultado);

    //He obtenido el div resultado desde el DOM
    let divResultadoEnDOM = document.getElementById('resultadoz');

    //Copiar el contenido del div original al div de resultado
    divResultadoEnDOM.textContent = divOriginalEnDOM.textContent;
});

// He añadido un manejador de eventos para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // He obtenido todos los elementos con la clase 'miClase'
    let elementos = document.getElementsByClassName('miClase');
    // He seleccionado el elemento del DOM donde mostraré los resultados
    let resultado = document.getElementById('resultadoElementos');
    // He inicializado una variable para almacenar el contenido que mostraré
    let contenido = ''; 

    // He iterado sobre cada elemento obtenido anteriormente
    Array.from(elementos).forEach(function (elemento) {
        // He añadido el texto de cada elemento al contenido
        contenido += elemento.textContent; 
        // He añadido un salto de línea después de cada elemento
        contenido += '<br>'; 
    });

    // He eliminado el último salto de línea añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // He establecido el contenido acumulado en el elemento del DOM para mostrarlo
    resultado.innerHTML = contenido;
});

// He añadido un manejador de eventos para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // He obtenido todos los párrafos del documento
    let parrafos = document.getElementsByTagName('p');
    // He seleccionado el elemento del DOM donde mostraré los resultados
    let resultado = document.getElementById('resultadoParrafos');
    // He inicializado una variable para almacenar el contenido que mostraré
    let contenido = ''; 

    // He iterado sobre cada párrafo obtenido
    Array.from(parrafos).forEach(function (parrafo) {
        // He añadido el texto de cada párrafo al contenido
        contenido += parrafo.textContent; 
        // He añadido un salto de línea después de cada párrafo
        contenido += '<br>'; 
    });

    // He eliminado el último salto de línea añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // He establecido el contenido acumulado en el elemento del DOM para mostrarlo
    resultado.innerHTML = contenido;
});

// He añadido un manejador de eventos para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // He seleccionado todos los divs con la clase 'miDiv'
    let divs = document.querySelectorAll('.miDiv'); 
    // He seleccionado el elemento del DOM donde mostraré los resultados
    let resultado = document.getElementById('resultado3');
    // He inicializado una variable para almacenar el contenido que mostraré
    let contenido = ''; 

    // He iterado sobre cada div obtenido
    divs.forEach(function (div) {
        // He añadido el texto de cada div al contenido
        contenido += div.textContent; 
        // He añadido un salto de línea después de cada div
        contenido += '<br>'; 
    });

    // He eliminado el último salto de línea añadido
    contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));

    // He establecido el contenido acumulado en el elemento del DOM para mostrarlo
    resultado.innerHTML = contenido;
});

// He añadido un manejador de eventos para cuando el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function () {
    // He seleccionado todos los elementos con la clase 'item'
    let items = document.querySelectorAll('.item'); 
    // He seleccionado el elemento del DOM donde mostraré los resultados
    let resultado = document.getElementById('resultadoItems');

    // He comprobado si el elemento para mostrar los resultados existe
    if (!resultado) {
        // He mostrado un mensaje de error en la consola si el elemento no existe
        console.error('El elemento con ID "resultadoItems" no existe en el DOM.');
        return;
    }

    // He inicializado una variable para almacenar el contenido que mostraré
    let contenido = ''; 

    // He iterado sobre cada item obtenido
    items.forEach(function (item) {
        // He añadido el texto de cada item al contenido
        contenido += item.textContent; 
        // He añadido un salto de línea después de cada item
        contenido += '<br>'; 
    });

    // He eliminado el último salto de línea añadido
    if (contenido.endsWith('<br>')) {
        contenido = contenido.substring(0, contenido.lastIndexOf('<br>'));
    }

    // He establecido el contenido acumulado en el elemento del DOM para mostrarlo
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
