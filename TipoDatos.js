// Función que se ejecuta al cargar la ventana
window.onload = function () {
    demoDate();
    map();
    set();
    array();
    convertirJSON();
}

// Función para demostrar el uso de Map
function map() {
    let mapa = new Map();

    // He añadido elementos al mapa
    mapa.set('clave1', 'valor1');
    mapa.set('clave2', 'valor2');

    let divInfoMapa = document.getElementById('infoMapa');
    divInfoMapa.innerHTML = '';

    // He obtenido un valor y lo he mostrado
    divInfoMapa.innerHTML += 'Valor de clave1: ' + mapa.get('clave1') + '<br>';

    // He comprobado si una clave existe y lo he mostrado
    divInfoMapa.innerHTML += 'Existe clave3: ' + mapa.has('clave3') + '<br>';

    // He iterado sobre Map y he mostrado cada par clave-valor
    mapa.forEach((valor, clave) => {
        divInfoMapa.innerHTML += clave + ': ' + valor + '<br>';
    });
}

// Función para demostrar el uso de Set
function set() {
    let conjunto = new Set();

    // He añadido valores al conjunto
    conjunto.add('manzana');
    conjunto.add('banana');
    conjunto.add('manzana'); // No se añadirá porque ya existe

    let divInfoConjunto = document.getElementById('infoConjunto');
    divInfoConjunto.innerHTML = '';

    // He comprobado si un valor existe y lo he mostrado
    divInfoConjunto.innerHTML += 'Existe banana: ' + conjunto.has('banana') + '<br>';

    // He mostrado el tamaño del Set
    divInfoConjunto.innerHTML += 'Tamaño del conjunto: ' + conjunto.size + '<br>';

    // He iterado sobre Set y he mostrado cada valor
    conjunto.forEach(valor => {
        divInfoConjunto.innerHTML += 'Valor: ' + valor + '<br>';
    });
}

// Función para demostrar el uso de Arrays
function array() {
    let frutas = ['manzana', 'banana', 'naranja'];
    let divInfoArray = document.getElementById('infoArray');
    divInfoArray.innerHTML = '';

    // He accedido a un elemento del array y lo he mostrado
    divInfoArray.innerHTML += 'Elemento en índice 1: ' + frutas[1] + '<br>';

    // He añadido un elemento al final del array
    frutas.push('mango');

    // He iterado sobre un array y he mostrado cada elemento
    frutas.forEach(fruta => {
        divInfoArray.innerHTML += 'Fruta: ' + fruta + '<br>';
    });
}

// Función para convertir un objeto a JSON
function convertirJSON() {
    let objeto = {
        nombre: 'Juan',
        edad: 30,
        hobbies: ['fútbol', 'leer']
    };

    // He convertido el objeto a una cadena JSON
    let jsonStr = JSON.stringify(objeto, null, 2);

    // He actualizado el elemento del DOM
    document.getElementById('jsonString').textContent = jsonStr;
}

// Función para demostrar el uso de Date
function demoDate() {
    let hoy = new Date();
    let idFecha = document.getElementById('demoDate');
    // He mostrado la fecha actual
    idFecha.innerHTML = "Hoy es: " + hoy.toDateString();
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
