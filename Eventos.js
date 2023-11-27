// Función que se ejecuta cuando se carga la ventana
window.onload = function () {
    click();
    mouseovermouseout();
    generarTabla(5, 3);    
    focusblur();
    togglePasswordVisibility();
    cordenadas();
}

// 1. Evento click con una Imagen
function click() {
    // He añadido un evento para mostrar información al hacer clic en la imagen
    document.getElementById('imagenClickable').addEventListener('click', function (event) {
        let infoGato = document.getElementById('infoGato');
        infoGato.textContent = 'Nombre del gato: Periquito. Descripción: Soy un gato enfadado.';
         // He detenido la propagación del evento para evitar que se active el evento del documento
        event.stopPropagation();
    });

    // He añadido un evento para todo el documento
    document.addEventListener('click', function () {
        let infoGato = document.getElementById('infoGato');
        // He borrado el texto si se hace clic fuera de la imagen
        infoGato.textContent = ''; 
    });
}

// 2. Evento mouseover con una Tabla
function mouseovermouseout() {
    document.getElementById('miTabla').addEventListener('mouseover', function () {
        // He cambiado el color de fondo al pasar el ratón
        this.style.backgroundColor = 'yellow'; 
    });

    // 3. Evento mouseout con una Tabla
    document.getElementById('miTabla').addEventListener('mouseout', function () {
         // He restaurado el color de fondo al salir el ratón
        this.style.backgroundColor = '';
    });
}

// 4. Evento load con una Imagen
document.addEventListener('DOMContentLoaded', function () {
    var imagen = document.getElementById('imagenCargada');
    imagen.addEventListener('load', function () {
        var mensajeCarga = document.getElementById('mensajeCarga');
        // He mostrado un mensaje cuando la imagen se carga
        mensajeCarga.innerHTML = 'La imagen ha sido cargada'; 
    });
    // He forzado la recarga de la imagen si ya está en caché
    imagen.src = imagen.src; 
});

// 5. Evento focus y blur en un Campo de Formulario
function focusblur() {
    document.getElementById('miInput').addEventListener('focus', function () {
         // He cambiado el color de fondo al enfocar el input
        this.style.backgroundColor = 'lightgreen';
    });

    document.getElementById('miInput').addEventListener('blur', function () {
        // He restaurado el color de fondo al perder el foco
        this.style.backgroundColor = ''; 
    });
}

// 6. Evento para alternar la visibilidad de la contraseña
function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    // He alternado la visibilidad de la contraseña
    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = 'visibility';
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = 'visibility_off';
    }
}

// 7. Evento para mostrar coordenadas del ratón sobre una imagen
function cordenadas() {
    let imagen = document.querySelector("#img_gato");
    let coordenadas = document.createElement("span");
    coordenadas.id = "coordenadas";
    let posicion = document.createTextNode("X:  Y:  ");
    coordenadas.appendChild(posicion);
    coordenadas.appendChild(document.createElement("br"));
    coordenadas.style.display = "none";
    imagen.before(coordenadas);

    // He añadido eventos para mostrar y ocultar las coordenadas del ratón
    imagen.addEventListener("mousemove", function (e) {
        coordenadas.style.display = "inline";
        posicion.nodeValue = "X: " + e.screenX + " Y: " + e.screenY;
    });
    imagen.addEventListener("mouseout", function (e) {
        coordenadas.style.display = "none";
    });
}
// 8. Función para mostrar las coordenadas del ratón sobre una imagen
function cordenadas() {
    let imagen = document.querySelector("#img_gato");
    let coordenadas = document.createElement("span");
    coordenadas.id = "coordenadas";
    let posicion = document.createTextNode("X:  Y:  ");
    coordenadas.appendChild(posicion);
    coordenadas.appendChild(document.createElement("br"));
    coordenadas.style.display = "none";
    imagen.before(coordenadas);

    // He añadido un evento para mostrar las coordenadas del ratón sobre la imagen
    imagen.addEventListener("mousemove", function (e) {
        coordenadas.style.display = "inline";
        posicion.nodeValue = "X: " + e.screenX + " Y: " + e.screenY;
    });

    // He añadido un evento para ocultar las coordenadas cuando el ratón sale de la imagen
    imagen.addEventListener("mouseout", function (e) {
        coordenadas.style.display = "none";
    });
}

// Función para generar tablas dinámicamente
function generarTabla(numFilas, numColumnas) {
    let tabla = document.createElement('table');
    tabla.style.borderCollapse = 'collapse';

    // He creado filas y columnas para la tabla
    for (let i = 0; i < numFilas; i++) {
        let fila = tabla.insertRow();
        for (let j = 0; j < numColumnas; j++) {
            let celda = fila.insertCell();
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            celda.style.border = '1px solid black';
        }

        // He añadido un evento para mostrar texto cuando el ratón pasa sobre una fila
        fila.addEventListener('mouseover', function() {
            mostrarTextoFila(this);
        });
    }

    // He añadido un evento para ocultar el texto cuando el ratón sale de la tabla
    tabla.addEventListener('mouseleave', function() {
        ocultarTextoFila();
    });

    let contenedorTablas = document.getElementById('contenedorTablas');
    contenedorTablas.appendChild(tabla);

    let divTexto = document.getElementById('textoFila');
    if (!divTexto) {
        divTexto = document.createElement('div');
        divTexto.id = 'textoFila';
        divTexto.textContent = '';
        document.body.appendChild(divTexto);
    }
}

// Funciones para mostrar y ocultar el texto de una fila
function mostrarTextoFila(fila) {
    let textoFila = '';
    let celdas = fila.cells;

    for (let celda of celdas) {
        textoFila += celda.textContent + ' ';
    }

    let divTexto = document.getElementById('textoFila');
    // He mostrado el texto de la fila
    divTexto.textContent = textoFila; 
}

function ocultarTextoFila() {
    let divTexto = document.getElementById('textoFila');
     // He borrado el contenido cuando el ratón sale de la tabla
    divTexto.textContent = '';
}

// Evento para mostrar u ocultar imágenes al hacer clic en un botón
document.addEventListener('DOMContentLoaded', function () {
    var boton = document.getElementById('mostrarOcultar');
    var imagenes = document.getElementsByClassName('imagenes');

    // He añadido un evento al botón para alternar la visibilidad de las imágenes
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

//Para copiar el pre
    function copiarCodigo(elementoCode) {
         // He creado un rango y un objeto de selección para seleccionar el texto
        const rango = document.createRange();
        const selección = window.getSelection();
        rango.selectNodeContents(elementoCode);
        // He limpiado selecciones existentes
        selección.removeAllRanges(); 
        // He añadido el rango que contiene el texto del elemento code
        selección.addRange(rango); 
    
        try {
            // He ejecutado el comando de copiado
            const exitoso = document.execCommand('copy');
            const mensaje = exitoso ? 'exitoso' : 'fallido';
            console.log(`Copiado ${mensaje}`);
        } catch (err) {
            console.error('Error al copiar', err);
        }
    
         // He limpiado la selección
        selección.removeAllRanges();
    }