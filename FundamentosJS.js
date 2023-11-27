window.onload = function () {
    saludar("Marta");
    demoOperaciones();
    resultadoEdad();
    flecharessuma();
    operadoreslogicos();
}

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

let saludar = function (nombre) {
    let mensaje = "Hola " + nombre;
    document.getElementById("mensajeSaludo").textContent = mensaje;
};

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


function manejarClick() {
    let numeros = [1, 2, 3, 4, 5];
    numeros.forEach(numero => {
        alert(numero);
    });

}

function resultadoEdad() {
//Ejemplo Tradicional:
let edad = 20;
let esMayorDeEdad;

if (edad >= 18) {
    esMayorDeEdad = true;
} else {
    esMayorDeEdad = false;
}

// Seleccionar el elemento y mostrar el resultado
document.getElementById('resultadoEdad').textContent = "Es mayor de edad: " + esMayorDeEdad;


//Ejemplo Operador Ternario
let edad1 = 20;
let esMayorDeEdad1= edad >= 18 ? true : false;

// Seleccionar el elemento y mostrar el resultado
document.getElementById('resultadoEdad1').textContent = "Es mayor de edad (ternario): " + esMayorDeEdad1;

}

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
