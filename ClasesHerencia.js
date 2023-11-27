// Al cargar la ventana, he mostrado la información de un coche, un animal y un empleado
window.onload = function () {
    mostrarInformacionCoche();
    mostrarInformacionAnimal();
    mostrarInformacionEmpleado();
}
//1.
// He definido una clase Vehiculo con una marca
class Vehiculo {
    constructor(marca) {
        this.marca = marca;
    }
}
// He extendido la clase Vehiculo a Coche, añadiendo un modelo
class Coche extends Vehiculo {
    constructor(marca, modelo) {
        super(marca);
        this.modelo = modelo;
    }
}
// He mostrado la información de un coche en el DOM
function mostrarInformacionCoche() {
    let miCoche = new Coche("Toyota", "Corolla");
    let infoCoche = document.getElementById('mostrarInformacionCoche');
    infoCoche.innerHTML = "Marca: " + miCoche.marca + ", Modelo: " + miCoche.modelo;
}

//2.
// He definido una clase Animal con una especie y un método para hacer un sonido
class Animal {
    constructor(especie) {
        this.especie = especie;
    }

    hacerSonido() {
        return "Algun sonido";
    }
}
// He extendido la clase Animal a Perro, con un nombre y un sonido específico
class Perro extends Animal {
    constructor(nombre) {
        super("Perro");
        this.nombre = nombre;
    }

    hacerSonido() {
        return "Guau Guau";
    }
}
// He mostrado la información de un perro en el DOM
function mostrarInformacionAnimal() {
    let miPerro = new Perro("Firulais");
    let infoAnimal = document.getElementById('mostrarInformacionAnimal');
    infoAnimal.innerHTML = "Especie: " + miPerro.especie + ", Nombre: " + miPerro.nombre + ", Sonido: " + miPerro.hacerSonido();
}

//3.
// He definido una clase Empleado con un nombre y un departamento
class Empleado {
    constructor(nombre, departamento) {
        this.nombre = nombre;
        this.departamento = departamento;
    }

    presentarse() {
        return "Hola, mi nombre es " + this.nombre + " y trabajo en " + this.departamento;
    }
}
// He extendido la clase Empleado a Gerente, añadiendo un equipo y una presentación extendida
class Gerente extends Empleado {
    constructor(nombre, departamento, equipo) {
        super(nombre, departamento);
        this.equipo = equipo;
    }

    presentarse() {
        return super.presentarse() + ". Soy el gerente del equipo " + this.equipo;
    }
}

// He mostrado la información de un gerente en el DOM
function mostrarInformacionEmpleado() {
    let gerente = new Gerente("Ana", "Desarrollo", "Frontend");
    let infoEmpleado = document.getElementById('mostrarInformacionEmpleado');
    infoEmpleado.innerHTML = gerente.presentarse();
}

//Para copiar el pre
function copiarCodigo(elementoCode) {
    // He creado un rango y un objeto de selección para seleccionar el texto
   const rango = document.createRange();
   const selección = window.getSelection();
   rango.selectNodeContents(elementoCode);
   // He limpiado selecciones existentes
   selección.removeAllRanges(); 
   // He añadido el rango que contiene el texto del elemento code
   selección.addRange(rango); 

   try {
       // He ejecutado el comando de copiado
       const exitoso = document.execCommand('copy');
       const mensaje = exitoso ? 'exitoso' : 'fallido';
       console.log(`Copiado ${mensaje}`);
   } catch (err) {
       console.error('Error al copiar', err);
   }

    // He limpiado la selección
   selección.removeAllRanges();
}