//1.Evento click con una Imagen
 //<img id="imagenClickable" src="imagen1.jpg" alt="Haz clic en mí">
document.getElementById('imagenClickable').addEventListener('click', function() {
    alert('Hiciste clic en la imagen');
});

//2. Evento mouseover con una Tabla

{/* <table id="miTabla">
    <tr><td>Coloca el ratón sobre esta tabla</td></tr>
</table> */}
document.getElementById('miTabla').addEventListener('mouseover', function() {
    this.style.backgroundColor = 'yellow';
});

// 3. Evento mouseout con una Tabla
{/* <table id="miTabla">
    <tr><td>Quita el ratón de esta tabla</td></tr>
</table> */}
document.getElementById('miTabla').addEventListener('mouseout', function() {
    this.style.backgroundColor = '';
});
// 4. Evento load con una Imagen
{/* <img id="imagenCargada" src="imagen1.jpg" alt="Imagen"> */}
document.getElementById('imagenCargada').addEventListener('load', function() {
    console.log('La imagen ha sido cargada');
});
// 5. Evento focus y blur en un Campo de Formulario
{/* <input type="text" id="miInput" placeholder="Haz clic y luego haz clic fuera"> */}
document.getElementById('miInput').addEventListener('focus', function() {
    this.style.backgroundColor = 'lightgreen';
});

document.getElementById('miInput').addEventListener('blur', function() {
    this.style.backgroundColor = '';
});
// 6. Evento submit en un Formulario
{/* <form id="miFormulario">
    <input type="text" placeholder="Escribe algo aquí">
    <input type="submit" value="Enviar">
</form> */}
document.getElementById('miFormulario').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});