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