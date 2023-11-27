
// Al cargar la ventana, se han ejecutado varias funciones
window.onload = function () {
    saludar("Marta");
    demoOperaciones();
    resultadoEdad();
    flecharessuma();
    operadoreslogicos();
    tipodatos();
    operadoresbasicos();
}

// He definido una función para mostrar los tipos de datos en JavaScript
function tipodatos() {
    let contenido = `
        let numero = 5; // Número
        let cadena = "Hola Mundo"; // Cadena de texto (String)
        let booleano = true; // Booleano (true/false)
        let objeto = { nombre: "Juan", edad: 30 }; // Objeto
        let arreglo = [1, 2, 3, 4, 5]; // Array
        let indefinido; // Indefinido (undefined)
        let nulo = null; // Null
    `;
    document.getElementById('codigoJS').textContent = contenido;
}

// He creado una función para saludar a un nombre dado
let saludar = function (nombre) {
    let mensaje = "Hola " + nombre;
    document.getElementById("mensajeSaludo").textContent = mensaje;
};

// He definido una función para mostrar ejemplos de operadores lógicos
function operadoreslogicos() {
    let contenido = `
        let verdadero = true;
        let falso = false;
        let and = verdadero && falso; // AND
        let or = verdadero || falso; // OR
        let not = !verdadero; // NOT 
    `; 
    document.getElementById('operadoreslogicos').textContent = contenido; 
} 

// He creado una función para demostrar operaciones básicas
function demoOperaciones() {
    let num1 = 10;
    let num2 = 5;
    let id = document.getElementById('demoOperaciones');
    let suma = num1 + num2;
    let resta = num1 - num2;
    id.innerHTML = "Si tengo estos dos operandos: " + num1 + " y " + num2 + "<br>" +
                   num1 + " + " + num2 + " = " + suma + "<br>" +
                   num1 + " - " + num2 + " = " + resta;
}

// He implementado una función para mostrar ejemplos de operadores básicos
function operadoresbasicos() {
    let contenido = `
        let suma = 5 + 5; // Suma
        let resta = 10 - 5; // Resta
        let multiplicacion = 5 * 2; // Multiplicación
        let division = 10 / 2; // División
        let modulo = 10 % 3; // Módulo (resto)
    `;
    document.getElementById('operadores').textContent = contenido;
}

// He programado una función para manejar un click y mostrar una alerta con números
function manejarClick() {
    let numeros = [1, 2, 3, 4, 5];
    numeros.forEach(numero => {
        alert(numero);
    });
}

// He creado una función para determinar si una persona es mayor de edad
function resultadoEdad() {
    let edad = 20;
    let esMayorDeEdad;
    if (edad >= 18) {
        esMayorDeEdad = true;
    } else {
        esMayorDeEdad = false;
    }
    document.getElementById('resultadoEdad').textContent = "Es mayor de edad: " + esMayorDeEdad;

    let edad1 = 20;
    let esMayorDeEdad1 = edad1 >= 18 ? true : false;
    document.getElementById('resultadoEdad1').textContent = "Es mayor de edad (ternario): " + esMayorDeEdad1;
}

// He creado una función usando arrow function para sumar dos números
function flecharessuma(){
    const sumar = (a, b) => a + b;
    let resultado = sumar(5, 3);
    document.getElementById('resultadoSuma').textContent = "Resultado de la suma: " + resultado;
}

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
