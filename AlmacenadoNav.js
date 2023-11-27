window.onload = function () {
// He creado y mostrado los valores de las cookies al cargar la ventana
    crearCookie();
    mostrarValorCookie();

}

//1. Función para crear una cookie
function crearCookie() {
    // He configurado una fecha de expiración para la cookie
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));
    // He creado la cookie con un tiempo de expiración
    document.cookie = "nombreUsuario=Marta; expires=" + fechaExpiracion.toUTCString() + "; path=/";

}

// Función para obtener una cookie específica
function obtenerCookie(nombre) {
    // He declarado variables para procesar las cookies
    var nombreIgual = nombre + "=";
    var arrayCookies = document.cookie.split(';');
    //He creado un bucle for para que de tantas vueltas como el valor de la longitud de arrayCookies
    for(var i = 0; i < arrayCookies.length; i++) {
        var c = arrayCookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
         // He buscado la cookie y he devuelto su valor si se encuentra
        if (c.indexOf(nombreIgual) === 0) {
            return c.substring(nombreIgual.length, c.length);
        }
    }
    // He devuelto un string vacío si no se encuentra la cookie
    return "";
}
// Función para mostrar el valor de una cookie
function mostrarValorCookie() {
     // He obtenido el valor de una cookie específica
    var valorCookie = obtenerCookie("nombreUsuario"); // Obtiene el valor de la cookie
    var elementoP = document.getElementById("contenidoCookie");
    // He mostrado el valor de la cookie en un elemento del DOM
    elementoP.textContent = "El valor de la cookie es: " + valorCookie;
}
// Función para eliminar una cookie
function eliminarCookie(nombre) {
    // He eliminado la cookie especificada
    document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

//2.  He configurado localStorage al cargar el contenido del DOM
document.addEventListener('DOMContentLoaded', function () {
     // He guardado un valor en localStorage
    localStorage.setItem("clave", "aaaa");
    // He obtenido y mostrado un valor almacenado en localStorage
    const valorAlmacenado = localStorage.getItem("clave");
    document.getElementById("kuki").textContent = valorAlmacenado;
});

//3. He configurado y trabajado con IndexedDB
    var solicitudDB = window.indexedDB.open("ejemplobasedatoswikijs", 1);
    //He manejado los errores al abrir la base de datos
    solicitudDB.onerror = function(event) {
        document.getElementById('resultadoDB').textContent += "Error al abrir la base de datos: " + event.target.errorCode + "\n";
    };
    // He configurado la base de datos durante su creación o actualización
    solicitudDB.onupgradeneeded = function(event) {
        var db = event.target.result;
        // He creado un almacén de objetos y sus índices
        var objectStore = db.createObjectStore("login", { keyPath: "id" });
        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
    };
    // He manejado operaciones exitosas al abrir la base de datos
    solicitudDB.onsuccess = function(event) {
        var db = event.target.result;
         // He realizado transacciones en la base de datos
        var transaccion = db.transaction("login", "readwrite");
        var objectStore = transaccion.objectStore("login")   
        // He agregado un registro a la base de datos
        var solicitudAgregar = objectStore.add({ id: 1, nombre: "Marta", email: "marta@example.com" });
        solicitudAgregar.onsuccess = function(event) {
            document.getElementById('resultadoDB').textContent += "Datos agregados a la base de datos\n";
        };
        // He leído un registro de la base de datos
        var solicitudLeer = objectStore.get(1);
        solicitudLeer.onsuccess = function(event) {
            if (solicitudLeer.result) {
                document.getElementById('resultadoDB').textContent += "Nombre: " + solicitudLeer.result.nombre + ", Email: " + solicitudLeer.result.email + "\n";
            } else {
                document.getElementById('resultadoDB').textContent += "No se encontró el registro\n";
            }
        };
    };
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


