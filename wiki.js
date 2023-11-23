window.onload = function () {

    demoOperaciones();
    demoDate();
    mostrarInformacionCoche();
    cargarDatosGatos();
    saludar("Marta");

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

function demoDate() {
    let hoy = new Date();
    let idFecha = document.getElementById('demoDate');
    idFecha.innerHTML = "Hoy es: " + hoy.toDateString();
}


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

function mostrarInformacionCoche() {
    let miCoche = new Coche("Toyota", "Corolla");
    let infoCoche = document.getElementById('mostrarInformacionCoche');
    infoCoche.innerHTML = "Marca: " + miCoche.marca + ", Modelo: " + miCoche.modelo;
}

function cambiarTexto() {
    document.getElementById("demo").innerHTML = "Texto cambiado";
}

function cargarDatosGatos() {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            llenarSelectorConRazas(datosGatos);
        })
        .catch(error => console.error('Error al cargar los datos de gatos:', error));
}

function llenarSelectorConRazas(datosGatos) {
    const selectorRaza = document.getElementById('selectorRaza');
    const razas = [...new Set(datosGatos.map(gato => gato.raza))];

    razas.forEach(raza => {
        const opcion = document.createElement('option');
        opcion.value = raza;
        opcion.textContent = raza;
        selectorRaza.appendChild(opcion);
    });
}

function mostrarGatosDeRaza(razaSeleccionada) {
    fetch('gatos.json')
        .then(response => response.json())
        .then(datosGatos => {
            const gatosFiltrados = datosGatos.filter(gato => gato.raza === razaSeleccionada);
            const tabla = document.getElementById('tablaGatos');
            tabla.innerHTML = ''; // Limpiar tabla anterior

            if (gatosFiltrados.length) {
                const encabezado = tabla.insertRow();
                ['Nombre', 'Raza', 'Edad', 'Color'].forEach(texto => {
                    const celda = encabezado.insertCell();
                    celda.textContent = texto;
                });

                gatosFiltrados.forEach(gato => {
                    const fila = tabla.insertRow();
                    Object.values(gato).forEach(texto => {
                        const celda = fila.insertCell();
                        celda.textContent = texto;
                    });
                });
            }
        })
        .catch(error => console.error('Error al cargar los datos de gatos:', error));
}

let saludar = function (nombre) {
    let mensaje = "Hola " + nombre;
    document.getElementById("mensajeSaludo").textContent = mensaje;
};

document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.getElementById('formulario');
    formulario.addEventListener('submit', function (event) {
        event.preventDefault();
        let input = document.getElementById("nombre").value;
        let mensaje = "Texto recibido: " + input;
        document.getElementById("formularioresponse").textContent = mensaje;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem("clave", "aaaa");
    const valorAlmacenado = localStorage.getItem("clave");
    document.getElementById("kuki").textContent = valorAlmacenado;
});


fetch('https://api.covidtracking.com/v2/us/daily/2021-01-02/simple.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Respuesta de red no fue ok');
        }
        return response.json();
    })
    .then(data => {
        const divDatosCovid = document.getElementById('datosCovid');
        // Aquí puedes formatear los datos como desees antes de mostrarlos
        divDatosCovid.textContent = JSON.stringify(data, null, 2); // Muestra los datos en formato JSON
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
        document.getElementById('datosCovid').textContent = 'Error al cargar los datos';
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

function togglePasswordVisibility() {
    var passwordField = document.getElementById("password");
    var passwordToggle = document.getElementById("password-toggle");

    if (passwordField.type === "password") {
        passwordField.type = "text";
        passwordToggle.textContent = 'visibility';
    } else {
        passwordField.type = "password";
        passwordToggle.textContent = 'visibility_off';
    }
}

