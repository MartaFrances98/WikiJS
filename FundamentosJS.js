window.onload = function () {
    tipodatos();
    saludar("Marta");
    demoOperaciones();
}
document.addEventListener('DOMContentLoaded', function() {
    tipodatos();
    let numero = 5; // Número
    let cadena = "Hola Mundo"; // Cadena de texto (String)
    let booleano = true; // Booleano (true/false)
    let objeto = { nombre: "Juan", edad: 30 }; // Objeto
    let arreglo = [1, 2, 3, 4, 5]; // Array
    let indefinido; // Indefinido (undefined)
    let nulo = null; // Null
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
