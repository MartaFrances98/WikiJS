1. Tipos de Datos, Operadores, Estructuras de Control
function demoOperaciones() {
    let num1 = 5;
    let num2 = 10;
    console.log("Suma: " + (num1 + num2));
    console.log("Resta: " + (num1 - num2));
    // Agrega más operaciones y ejemplos aquí
}
2. Objetos Predefinidos
function demoDate() {
    let hoy = new Date();
    console.log("Hoy es: " + hoy.toDateString());
    // Más ejemplos con Date aquí
}
3. Creación de Objetos y Herencia
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}

class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }
}

4. Manipulación del DOM
<p id="demo">Texto original</p>
<button onclick="cambiarTexto()">Cambiar Texto</button>

<script>
function cambiarTexto() {
    document.getElementById("demo").innerHTML = "Texto cambiado";
}
</script>
5. Tipos de Funciones y Funciones Anónimas
let saludar = function(nombre) {
    console.log("Hola " + nombre);
};
saludar("Marta");

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


EVENTOS:
1.Evento click con una Imagen
 <img id="imagenClickable" src="imagen1.jpg" alt="Haz clic en mí">
document.getElementById('imagenClickable').addEventListener('click', function() {
    alert('Hiciste clic en la imagen');
});

2. Evento mouseover con una Tabla
<table id="miTabla">
    <tr><td>Coloca el ratón sobre esta tabla</td></tr>
</table>
document.getElementById('miTabla').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

3. Evento mouseout con una Tabla
<table id="miTabla">
    <tr><td>Quita el ratón de esta tabla</td></tr>
</table>
document.getElementById('miTabla').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
4. Evento load con una Imagen
<img id="imagenCargada" src="imagen1.jpg" alt="Imagen">
document.getElementById('imagenCargada').addEventListener('load', function() {
    console.log('La imagen ha sido cargada');
});
5. Evento focus y blur en un Campo de Formulario
<input type="text" id="miInput" placeholder="Haz clic y luego haz clic fuera">
document.getElementById('miInput').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById('miInput').addEventListener('blur', function() {
    this.style.backgroundColor = '';
});
6. Evento submit en un Formulario
<form id="miFormulario">
    <input type="text" placeholder="Escribe algo aquí">
    <input type="submit" value="Enviar">
</form>
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});










TIPOS DE DATOS
1. Ejemplo de Uso de Map

let mapa = new Map();

// Añadir elementos
mapa.set('clave1', 'valor1');
mapa.set('clave2', 'valor2');

// Obtener un valor
console.log(mapa.get('clave1')); // Salida: valor1

// Comprobar si una clave existe
console.log(mapa.has('clave3')); // Salida: false

// Iterar sobre Map
mapa.forEach((valor, clave) => {
    console.log(clave + ': ' + valor);
});

2. Ejemplo de Uso de Set
let conjunto = new Set();

// Añadir valores
conjunto.add('manzana');
conjunto.add('banana');
conjunto.add('manzana'); // No se añadirá porque ya existe

// Comprobar si un valor existe
console.log(conjunto.has('banana')); // Salida: true

// Tamaño del Set
console.log(conjunto.size); // Salida: 2

// Iterar sobre Set
conjunto.forEach(valor => {
    console.log(valor);
});

3. Ejemplo de Uso de Array
let frutas = ['manzana', 'banana', 'naranja'];

// Acceder a un elemento del array
console.log(frutas[1]); // Salida: banana

// Añadir un elemento al final del array
frutas.push('mango');

// Iterar sobre un array
frutas.forEach(fruta => {
    console.log(fruta);
});

4. Ejemplo de Uso de JSON.stringify()
let objeto = {
    nombre: 'Juan',
    edad: 30,
    hobbies: ['fútbol', 'leer']
};

// Convertir el objeto a una cadena JSON
let jsonStr = JSON.stringify(objeto);
console.log(jsonStr);

5.Fecha y hora




