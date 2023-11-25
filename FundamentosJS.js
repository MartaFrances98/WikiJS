window.onload = function () {
    saludar("Marta");
    demoOperaciones();
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

document.addEventListener('DOMContentLoaded', function () {
    tipodatos();
});


let saludar = function (nombre) {
    let mensaje = "Hola " + nombre;
    document.getElementById("mensajeSaludo").textContent = mensaje;
};

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

document.addEventListener('DOMContentLoaded', function () {
    operadoresbasicos();
});


function manejarClick() {
    let numeros = [1, 2, 3, 4, 5];
    numeros.forEach(numero => {
        alert(numero);
    });

}

//5.1 Ejemplo Tradicional:
let edad = 20;
let esMayorDeEdad;

if (edad >= 18) {
    esMayorDeEdad = true;
} else {
    esMayorDeEdad = false;
}
console.log(esMayorDeEdad);

//5.2 Ejemplo con Operador Ternario:
let edad1 = 20;
let esMayorDeEdad1 = edad1 >= 18 ? true : false;

console.log(esMayorDeEdad1);