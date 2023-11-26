window.onload = function () {
    crearTablas();
    agregarEvento();
    click();
    mouseovermouseout();
    load();
    focusblur();
    togglePasswordVisibility();
    cordenadas();
}

//1.Evento click con una Imagen
function click() {
    // Evento para mostrar información al hacer clic en la imagen
    document.getElementById('imagenClickable').addEventListener('click', function(event) {
        let infoGato = document.getElementById('infoGato');
        infoGato.textContent = 'Nombre del gato: Periquito. Descripción: Estoy hasta las narices de este trabajo por eso tengo un gato enfadado.';

        // Detiene la propagación del evento para evitar que se active el evento del documento
        event.stopPropagation();
    });

    // Evento para todo el documento
    document.addEventListener('click', function() {
        let infoGato = document.getElementById('infoGato');
        infoGato.textContent = ''; // Borra el texto si se hace clic fuera de la imagen
    });
}

//2. Evento mouseover con una Tabla
function mouseovermouseout(){
    document.getElementById('miTabla').addEventListener('mouseover', function() {
        this.style.backgroundColor = 'yellow';
     });

// 3. Evento mouseout con una Tabla
 document.getElementById('miTabla').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
 });
}
 // 4. Evento load con una Imagen
 function load() {
    document.getElementById('imagenCargada').addEventListener('load', function() {
        let mensajeCarga = document.getElementById('mensajeCarga');
        mensajeCarga.textContent = 'La imagen ha sido cargada';
    });
}

// 5. Evento focus y blur en un Campo de Formulario
function focusblur(){
    document.getElementById('miInput').addEventListener('focus', function() {
        this.style.backgroundColor = 'lightgreen';
    });
   
    document.getElementById('miInput').addEventListener('blur', function() {
        this.style.backgroundColor = '';
    });
}
// 6. Evento submit en un Formulario
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let input = document.getElementById("nombre").value;
        let mensaje = "Texto recibido: " + input;
        document.getElementById("formularioresponse").textContent = mensaje;
    });
});

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
function cordenadas(){
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
function crearTablas() {
    // Crear la primera tabla y añadir contenido
    let tablaConContenido = document.createElement('table');
    tablaConContenido.id = 'tablaConContenido';
    tablaConContenido.style.borderCollapse = 'collapse';

    for (let i = 0; i < 3; i++) {
        let fila = tablaConContenido.insertRow();
        for (let j = 0; j < 3; j++) {
            let celda = fila.insertCell();
            celda.textContent = `Fila ${i + 1}, Columna ${j + 1}`;
            celda.style.border = '3px solid white';
        }
    }

    // Crear la segunda tabla sin contenido
    let tablaSinContenido = document.createElement('table');
    tablaSinContenido.id = 'tablaSinContenido';
       // Crear la misma estructura de filas y celdas pero sin contenido
       for (let i = 0; i < 3; i++) {
        let fila = tablaSinContenido.insertRow();
        for (let j = 0; j < 3; j++) {
            fila.insertCell();
        }
    }

    // Agregar las tablas al cuerpo del documento
    let contenedor = document.getElementById('contenedorTablas');
    contenedor.appendChild(tablaConContenido);
    contenedor.appendChild(tablaSinContenido);
}



function agregarEvento() {
    let fila1Tabla1 = document.querySelector('#tablaConContenido tr');
    let fila1Tabla2 = document.querySelector('#tablaSinContenido tr');

    if (fila1Tabla1 && fila1Tabla2) {
        fila1Tabla1.addEventListener('mouseover', function() {
            fila1Tabla2.style.backgroundColor = 'yellow';
            console.log(fila1Tabla1.textContent);
        });
    }
}

function agregarEvento() {
    let tablaConContenido = document.querySelector('#tablaConContenido');
    let tablaSinContenido = document.querySelector('#tablaSinContenido');

    tablaConContenido.addEventListener('mouseover', function() {
        for (let i = 0; i < tablaConContenido.rows.length; i++) {
            for (let j = 0; j < tablaConContenido.rows[i].cells.length; j++) {
                tablaSinContenido.rows[i].cells[j].textContent = tablaConContenido.rows[i].cells[j].textContent;
            }
        }
    });

    tablaConContenido.addEventListener('mouseout', function() {
        for (let i = 0; i < tablaSinContenido.rows.length; i++) {
            for (let j = 0; j < tablaSinContenido.rows[i].cells.length; j++) {
                tablaSinContenido.rows[i].cells[j].textContent = '';
            }
        }
    });
}


