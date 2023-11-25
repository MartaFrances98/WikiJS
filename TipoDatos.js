window.onload = function () {
    demoDate();
    map();
    set();
    array();
    convertirJSON();
}

function map() {
    let mapa = new Map();

    // Añadir elementos
    mapa.set('clave1', 'valor1');
    mapa.set('clave2', 'valor2');

    let divInfoMapa = document.getElementById('infoMapa');
    divInfoMapa.innerHTML = '';

    // Obtener un valor y mostrarlo
    divInfoMapa.innerHTML += 'Valor de clave1: ' + mapa.get('clave1') + '<br>'; // Mostrar valor1

    // Comprobar si una clave existe y mostrarlo
    divInfoMapa.innerHTML += 'Existe clave3: ' + mapa.has('clave3') + '<br>'; // Mostrar false

    // Iterar sobre Map y mostrar cada par clave-valor
    mapa.forEach((valor, clave) => {
        divInfoMapa.innerHTML += clave + ': ' + valor + '<br>';
    });
}

function set(){
let conjunto = new Set();

// Añadir valores
conjunto.add('manzana');
conjunto.add('banana');
conjunto.add('manzana'); // No se añadirá porque ya existe

let divInfoConjunto = document.getElementById('infoConjunto');
divInfoConjunto.innerHTML = '';

// Comprobar si un valor existe y mostrarlo
divInfoConjunto.innerHTML += 'Existe banana: ' + conjunto.has('banana') + '<br>'; // Mostrar true

// Tamaño del Set y mostrarlo
divInfoConjunto.innerHTML += 'Tamaño del conjunto: ' + conjunto.size + '<br>'; // Mostrar 2

// Iterar sobre Set y mostrar cada valor
conjunto.forEach(valor => {
    divInfoConjunto.innerHTML += 'Valor: ' + valor + '<br>';
});
}

function array() {
    let frutas = ['manzana', 'banana', 'naranja'];
    let divInfoArray = document.getElementById('infoArray');
    divInfoArray.innerHTML = '';

    // Acceder a un elemento del array y mostrarlo
    divInfoArray.innerHTML += 'Elemento en índice 1: ' + frutas[1] + '<br>'; // Mostrar banana

    // Añadir un elemento al final del array
    frutas.push('mango');

    // Iterar sobre un array y mostrar cada elemento
    frutas.forEach(fruta => {
        divInfoArray.innerHTML += 'Fruta: ' + fruta + '<br>';
    });
}

function convertirJSON() {
    let objeto = {
        nombre: 'Juan',
        edad: 30,
        hobbies: ['fútbol', 'leer']
    };

    // Convertir el objeto a una cadena JSON
    let jsonStr = JSON.stringify(objeto, null, 2); // El segundo argumento añade formato

    // Actualizar el elemento del DOM
    document.getElementById('jsonString').textContent = jsonStr;
}

function demoDate() {
    let hoy = new Date();
    let idFecha = document.getElementById('demoDate');
    idFecha.innerHTML = "Hoy es: " + hoy.toDateString();
}