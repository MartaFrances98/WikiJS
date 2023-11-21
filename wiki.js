window.onload= function () {

    demoOperaciones();
    demoDate()

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
