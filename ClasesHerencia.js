window.onload = function () {
    mostrarInformacionCoche();
    mostrarInformacionAnimal();
    mostrarInformacionEmpleado();
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

class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    hacerSonido() {
        return "Algun sonido";
    }
}

class Perro extends Animal {
    constructor(nombre) {
        super("Perro");
        this.nombre = nombre;
    }

    hacerSonido() {
        return "Guau Guau";
    }
}

function mostrarInformacionAnimal() {
    let miPerro = new Perro("Firulais");
    let infoAnimal = document.getElementById('mostrarInformacionAnimal');
    infoAnimal.innerHTML = "Especie: " + miPerro.especie + ", Nombre: " + miPerro.nombre + ", Sonido: " + miPerro.hacerSonido();
}

class Empleado {
    constructor(nombre, departamento) {
        this.nombre = nombre;
        this.departamento = departamento;
    }

    presentarse() {
        return "Hola, mi nombre es " + this.nombre + " y trabajo en " + this.departamento;
    }
}

class Gerente extends Empleado {
    constructor(nombre, departamento, equipo) {
        super(nombre, departamento);
        this.equipo = equipo;
    }

    presentarse() {
        return super.presentarse() + ". Soy el gerente del equipo " + this.equipo;
    }
}

function mostrarInformacionEmpleado() {
    let gerente = new Gerente("Ana", "Desarrollo", "Frontend");
    let infoEmpleado = document.getElementById('mostrarInformacionEmpleado');
    infoEmpleado.innerHTML = gerente.presentarse();
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
