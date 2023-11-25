

4. Manipulación del DOM
<p id="demo">Texto original</p>
<button onclick="cambiarTexto()">Cambiar Texto</button>

<script>
function cambiarTexto() {
    document.getElementById("demo").innerHTML = "Texto cambiado";
}
</script>


6. Formularios, Validación, Imágenes y Eventos
<form id="formulario">
    <input type="text" id="nombre" required>
    <input type="submit" value="Enviar">
</form>

<script>
document.getElementById("formulario").onsubmit = function(evento) {
    evento.preventDefault();
    let nombre = document.getElementById("nombre").value;
    console.log("Nombre enviado: " + nombre);
    // Agrega más validación aquí
};
</script>

7. Almacenamiento
localStorage.setItem("clave", "valor");
console.log(localStorage.getItem("clave"));

8. Comunicación Asíncrona
fetch('ruta/a/tu/api')
    .then(response => response.json())
    .then(data => console.log(data));

Cambiar Imágenes Utilizando Estructuras de Control (If-Else)
<img id="miImagen" src="imagen1.jpg" alt="Imagen">
<button id="cambiarImagen">Cambiar Imagen</button>
// Evento de clic para cambiar la imagen
document.getElementById('cambiarImagen').addEventListener('click', function() {
    var imagen = document.getElementById('miImagen');

    // Estructura de control if-else para cambiar la fuente de la imagen
    if (imagen.src.endsWith('imagen1.jpg')) {
        imagen.src = 'imagen2.jpg';
    } else {
        imagen.src = 'imagen1.jpg';
    }
});

Mostrar/Ocultar Imágenes Utilizando Bucles y Eventos

<div>
    <img class="imagenes" src="imagen1.jpg" alt="Imagen 1" style="display:none;">
    <img class="imagenes" src="imagen2.jpg" alt="Imagen 2" style="display:none;">
    <img class="imagenes" src="imagen3.jpg" alt="Imagen 3" style="display:none;">
</div>
<button id="mostrarOcultar">Mostrar/Ocultar Imágenes</button>
document.getElementById('mostrarOcultar').addEventListener('click', function() {
    var imagenes = document.getElementsByClassName('imagenes');

    // Bucle para recorrer todas las imágenes y cambiar su visibilidad
    for (var i = 0; i < imagenes.length; i++) {
        if (imagenes[i].style.display === 'none') {
            imagenes[i].style.display = 'block';
        } else {
            imagenes[i].style.display = 'none';
        }
    }
});


DOCUMENTOS
1.estilos
<!DOCTYPE html>
<html>
<head>
    <title>Tabla Estilizada</title>
    <style>
        /* Aquí irán tus estilos CSS */
    </style>
</head>
<body>
    <table id="miTabla">
        <tr>
            <th>Cabecera 1</th>
            <th>Cabecera 2</th>
        </tr>
        <tr>
            <td>Dato 1</td>
            <td>Dato 2</td>
        </tr>
        <tr>
            <td>Dato 3</td>
            <td>Dato 4</td>
        </tr>
    </table>
</body>
</html>

#miTabla {
    width: 100%;
    border-collapse: collapse; /* Elimina el espacio entre bordes */
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.5); /* Sombra para la tabla */
}

#miTabla th, #miTabla td {
    border: 1px solid #ddd; /* Bordes para las celdas y cabeceras */
    padding: 8px; /* Espaciado interno */
    text-align: left; /* Alineación del texto */
}

#miTabla th {
    background-color: #4CAF50; /* Color de fondo para las cabeceras */
    color: white; /* Color del texto para las cabeceras */
}

#miTabla tr:nth-child(even) {
    background-color: #f2f2f2; /* Color de fondo para filas pares */
}

#miTabla tr:hover {
    background-color: #ddd; /* Color de fondo al pasar el ratón sobre una fila */
}


1. getElementById
<div id="miDiv">Hola Mundo</div>
let elemento = document.getElementById('miDiv');
console.log(elemento.textContent); // Salida: Hola Mundo

2. getElementsByClassName
<div class="miClase">Elemento 1</div>
<div class="miClase">Elemento 2</div>
let elementos = document.getElementsByClassName('miClase');
for (let elemento of elementos) {
    console.log(elemento.textContent);
}

3. getElementsByTagName
<p>Parrafo 1</p>
<p>Parrafo 2</p>
let parrafos = document.getElementsByTagName('p');
for (let parrafo of parrafos) {
    console.log(parrafo.textContent);
}


4. querySelector
let div = document.querySelector('.miDiv');
console.log(div.textContent); // Salida: Div 1
 
 
 5.querySelectorAll
 <ul>
    <li class="item">Item 1</li>
    <li class="item">Item 2</li>
    <li class="item">Item 3</li>
</ul>
let items = document.querySelectorAll('.item');
items.forEach(item => {
    console.log(item.textContent);
});
