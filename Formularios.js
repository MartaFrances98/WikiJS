
document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let input = document.getElementById("nombre").value;
        let mensaje = "Texto recibido: " + input;
        document.getElementById("formularioresponse").textContent = mensaje;
    });
});



function validarEmail(valor) {
    let emailInput = document.querySelector("#inputEmail");
    let pass = document.querySelector("#inputpassword");

    // Expresión regular para validar el correo electrónico
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (regexEmail.test(valor)) {
        console.log("La dirección de correo electrónico es válida");
        emailInput.classList.add("inputValido");
        emailInput.classList.remove("inputInvalido");
        pass.removeAttribute("disabled");

    } else {
        console.log("La dirección de correo electrónico no es válida");
        emailInput.classList.add("inputInvalido");
        emailInput.classList.remove("inputValido");
        pass.setAttribute("disabled", true);
    }
}

document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('miFormulario'); // Asegúrate de que este es el ID correcto de tu formulario

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); // Previene el envío por defecto del formulario

        var email = document.querySelector("#inputEmail").value;
        var password = document.querySelector("#inputpassword").value; // Asegúrate de que este es el ID correcto de tu campo de contraseña

        var resultadoDiv = document.getElementById('resultado'); // Asegúrate de tener un elemento con ID 'resultado' en tu HTML
        resultadoDiv.textContent = 'Email: ' + email + ' / Contraseña: ' + password;
    });
});

    document.addEventListener('DOMContentLoaded', function () {
        var texto = document.getElementById('textoParaCopiar').textContent;

        // Crear un elemento textarea temporal
        var textarea = document.createElement('textarea');
        textarea.textContent = texto;
        document.body.appendChild(textarea);

        // Seleccionar el texto del textarea
        textarea.select();

        try {
            // Copiar el texto seleccionado
            var exitoso = document.execCommand('copy');
            var msg = exitoso ? 'exitoso' : 'no exitoso';
            console.log('Copiado ' + msg);
        } catch (err) {
            console.log('Oops, no se pudo copiar');
        }

        // Eliminar el textarea temporal
        document.body.removeChild(textarea);
    });


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