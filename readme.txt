

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

METER EN FUNCION COORDENADAS
  let imagen = document.querySelector("#img_coche");
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
