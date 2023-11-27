window.onload = function () {
    click();
    mouseovermouseout();
    generarTabla(5, 3);    
    focusblur();
    togglePasswordVisibility();
    cordenadas();
}

//1.Evento click con una Imagen
function click() {
    // Evento para mostrar información al hacer clic en la imagen
    document.getElementById('imagenClickable').addEventListener('click', function (event) {
        let infoGato = document.getElementById('infoGato');
        infoGato.textContent = 'Nombre del gato: Periquito. Descripción: Estoy hasta las narices de este trabajo por eso tengo un gato enfadado.';

        // Detiene la propagación del evento para evitar que se active el evento del documento
        event.stopPropagation();
    });

    // Evento para todo el documento
    document.addEventListener('click', function () {
        let infoGato = document.getElementById('infoGato');
        infoGato.textContent = ''; // Borra el texto si se hace clic fuera de la imagen
    });
}

//2. Evento mouseover con una Tabla
function mouseovermouseout() {
    document.getElementById('miTabla').addEventListener('mouseover', function () {
        this.style.backgroundColor = 'yellow';
    });

    // 3. Evento mouseout con una Tabla
    document.getElementById('miTabla').addEventListener('mouseout', function () {
        this.style.backgroundColor = '';
    });
}
// 4. Evento load con una Imagen
document.addEventListener('DOMContentLoaded', function () {
    var imagen = document.getElementById('imagenCargada');

    imagen.addEventListener('load', function () {
        var mensajeCarga = document.getElementById('mensajeCarga');
        mensajeCarga.innerHTML = 'La imagen ha sido cargada';
    });

    // Este paso es para forzar la recarga de la imagen si ya está en caché
    imagen.src = imagen.src;
});
// 5. Evento focus y blur en un Campo de Formulario
function focusblur() {
    document.getElementById('miInput').addEventListener('focus', function () {
        this.style.backgroundColor = 'lightgreen';
    });

    document.getElementById('miInput').addEventListener('blur', function () {
        this.style.backgroundColor = '';
    });
}


// 7.evento visibilidad
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = 'visibility';
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = 'visibility_off';
    }
}
//8. cordenadas
function cordenadas() {
    let imagen = document.querySelector("#img_gato");
    let coordenadas = document.createElement("span");
    coordenadas.id = "coordenadas";
    let posicion = document.createTextNode("X:  Y:  ");
    posicion.id = "posicion";
    coordenadas.appendChild(posicion);
    coordenadas.appendChild(document.createElement("br"));
    coordenadas.style.display = "none";
    imagen.before(coordenadas);
    imagen.addEventListener("mousemove", function (e) {
        coordenadas.style.display = "inline";
        posicion.nodeValue = "X: " + e.screenX + "Y: " + e.screenY;
    });
    imagen.addEventListener("mouseout", function (e) {
        coordenadas.style.display = "none";
    });
}

//TABLAS
function generarTabla(numFilas, numColumnas) {
    let tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse';

    for (let i = 0; i < numFilas; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < numColumnas; j++) {
            let celda = fila.insertCell();
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            celda.style.border = '1px solid black';
        }

        fila.addEventListener('mouseover', function() {
            mostrarTextoFila(this);
        });
    }

    tabla.addEventListener('mouseleave', function() {
        ocultarTextoFila();
    });

    let contenedorTablas = document.getElementById('contenedorTablas');
    contenedorTablas.appendChild(tabla);

    let divTexto = document.getElementById('textoFila');
    if (!divTexto) {
        divTexto = document.createElement('div');
        divTexto.id = 'textoFila';
        divTexto.textContent = ''; // Inicializar vacío
        document.body.appendChild(divTexto);
    }
}

function mostrarTextoFila(fila) {
    let textoFila = '';
    let celdas = fila.cells;

    for (let celda of celdas) {
        textoFila += celda.textContent + ' ';
    }

    let divTexto = document.getElementById('textoFila');
    divTexto.textContent = textoFila;
}

function ocultarTextoFila() {
    let divTexto = document.getElementById('textoFila');
    divTexto.textContent = ''; // Borrar el contenido cuando el ratón sale de la tabla
}

// Llamar a la función con el número deseado de filas y columnas
// Esto generará una tabla de 5 filas y 3 columnas




//Display
document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('mostrarOcultar');
    var imagenes = document.getElementsByClassName('imagenes');

    boton.addEventListener('click', function () {
        for (var i = 0; i < imagenes.length; i++) {
            if (imagenes[i].style.display === 'none') {
                imagenes[i].style.display = 'block';
            } else {
                imagenes[i].style.display = 'none';
            }
        }
    });
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