
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

        // Asegurarse de que no se añadan múltiples event listeners
        pass.removeEventListener("input", validarPassHandler);
        pass.addEventListener("input", validarPassHandler);
    } else {
        console.log("La dirección de correo electrónico no es válida");
        emailInput.classList.add("inputInvalido");
        emailInput.classList.remove("inputValido");
        pass.setAttribute("disabled", true);
    }
}

function validarPassHandler(event) {
    let valorPass = event.target.value;
    validarPass(valorPass); // Asegúrate de que esta función esté definida
}
    document.addEventListener('DOMContentLoaded', function () {
        document.getElementById('botonCopiar').addEventListener('click', function () {
        // Obtener el texto del elemento div
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
});

// function togglePasswordVisibility() {
//     var passwordField = document.getElementById("password");
//     var passwordToggle = document.getElementById("password-toggle");

//     if (passwordField.type === "password") {
//         passwordField.type = "text";
//         passwordToggle.textContent = 'visibility';
//     } else {
//         passwordField.type = "password";
//         passwordToggle.textContent = 'visibility_off';
//     }
// }

