
// Función que se ejecuta después de que se haya cargado completamente el contenido del DOM
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (event) {
        // He prevenido el comportamiento por defecto del formulario
        event.preventDefault();
        let input = document.getElementById("nombre").value;
        let mensaje = "Texto recibido: " + input;
        // He mostrado el mensaje recibido
        document.getElementById("formularioresponse").textContent = mensaje; 
    });
});

// Función para validar el email
function validarEmail(valor) {
    let emailInput = document.querySelector("#inputEmail");
    let pass = document.querySelector("#inputpassword");

    // He definido una expresión regular para validar el correo electrónico
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // He verificado si el email es válido
    if (regexEmail.test(valor)) {
        console.log("La dirección de correo electrónico es válida");
        // He añadido la clase para un input válido
        emailInput.classList.add("inputValido"); 
        // He eliminado la clase de input inválido
        emailInput.classList.remove("inputInvalido"); 
       // He habilitado el campo de contraseña 
        pass.removeAttribute("disabled"); 

    } else {
        console.log("La dirección de correo electrónico no es válida");
        // He añadido la clase para un input inválido
        emailInput.classList.add("inputInvalido"); 
        // He eliminado la clase de input válido
        emailInput.classList.remove("inputValido"); 
        // He deshabilitado el campo de contraseña
        pass.setAttribute("disabled", true); 
    }
}

// Función que se ejecuta después de que se haya cargado completamente el contenido del DOM para otro formulario
document.addEventListener('DOMContentLoaded', function () {
    // He obtenido el formulario por su ID
    var formulario = document.getElementById('miFormulario'); 

    formulario.addEventListener('submit', function (event) {
        // He prevenido el comportamiento por defecto del formulario
        event.preventDefault(); 
        // He obtenido los valores de email y contraseña
        var email = document.querySelector("#inputEmail").value;
        var password = document.querySelector("#inputpassword").value; 
        // He obtenido el elemento para mostrar resultados
        var resultadoDiv = document.getElementById('resultado'); 
        // He mostrado los resultados
        resultadoDiv.textContent = 'Email: ' + email + ' / Contraseña: ' + password; 
    });
});

// Función para copiar un texto al portapapeles
document.addEventListener('DOMContentLoaded', function () {
     // He obtenido el texto a copiar
    var texto = document.getElementById('textoParaCopiar').textContent; 

    // He creado un elemento textarea temporal
    var textarea = document.createElement('textarea');
    textarea.textContent = texto;
    document.body.appendChild(textarea);

    // He seleccionado el texto del textarea
    textarea.select();

    try {
        // He intentado copiar el texto seleccionado
        var exitoso = document.execCommand('copy');
        var msg = exitoso ? 'exitoso' : 'no exitoso';
        console.log('Copiado ' + msg);
    } catch (err) {
        console.log('Oops, no se pudo copiar');
    }

    // He eliminado el textarea temporal
    document.body.removeChild(textarea);
});


function copiarCodigo(elementoCode) {
    // Crear un rango y un objeto de selección para seleccionar el texto
    const rango = document.createRange();
    const selección = window.getSelection();
    rango.selectNodeContents(elementoCode);
    // Limpia selecciones existentes
    selección.removeAllRanges(); 
// Añade el rango que contiene el texto del elemento code
    selección.addRange(rango); 

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