window.onload= function () {

    demoOperaciones()

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