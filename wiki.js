window.onload= function () {

    demoOperaciones();
    demoDate();
    mostrarInformacionCoche();
    cargarDatosGatos();

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



