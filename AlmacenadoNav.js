window.onload = function () {

    crearCookie();
    mostrarValorCookie();

}

//1. Coockie
function crearCookie() {
    var fechaExpiracion = new Date();
    fechaExpiracion.setTime(fechaExpiracion.getTime() + (7 * 24 * 60 * 60 * 1000));
    document.cookie = "nombreUsuario=Marta; expires=" + fechaExpiracion.toUTCString() + "; path=/";

}

function obtenerCookie(nombre) {
    var nombreIgual = nombre + "=";
    var arrayCookies = document.cookie.split(';');
    for(var i = 0; i < arrayCookies.length; i++) {
        var c = arrayCookies[i];
        while (c.charAt(0) === ' ') c = c.substring(1);
        if (c.indexOf(nombreIgual) === 0) {
            return c.substring(nombreIgual.length, c.length);
        }
    }
    return "";
}

function mostrarValorCookie() {
    var valorCookie = obtenerCookie("nombreUsuario"); // Obtiene el valor de la cookie
    var elementoP = document.getElementById("contenidoCookie");
    elementoP.textContent = "El valor de la cookie es: " + valorCookie;
}

function eliminarCookie(nombre) {
    document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/';
}

//2. LocalStorage
document.addEventListener('DOMContentLoaded', function () {
    localStorage.setItem("clave", "aaaa");
    const valorAlmacenado = localStorage.getItem("clave");
    document.getElementById("kuki").textContent = valorAlmacenado;
});

//3. IndexBD
    var solicitudDB = window.indexedDB.open("ejemplobasedatoswikijs", 1);

    solicitudDB.onerror = function(event) {
        document.getElementById('resultadoDB').textContent += "Error al abrir la base de datos: " + event.target.errorCode + "\n";
    };
    
    solicitudDB.onupgradeneeded = function(event) {
        var db = event.target.result;
        var objectStore = db.createObjectStore("login", { keyPath: "id" });
        objectStore.createIndex("nombre", "nombre", { unique: false });
        objectStore.createIndex("email", "email", { unique: true });
    };
    
    solicitudDB.onsuccess = function(event) {
        var db = event.target.result;
        var transaccion = db.transaction("login", "readwrite");
        var objectStore = transaccion.objectStore("login")   
        var solicitudAgregar = objectStore.add({ id: 1, nombre: "Marta", email: "marta@example.com" });
        solicitudAgregar.onsuccess = function(event) {
            document.getElementById('resultadoDB').textContent += "Datos agregados a la base de datos\n";
        };
    
        var solicitudLeer = objectStore.get(1);
        solicitudLeer.onsuccess = function(event) {
            if (solicitudLeer.result) {
                document.getElementById('resultadoDB').textContent += "Nombre: " + solicitudLeer.result.nombre + ", Email: " + solicitudLeer.result.email + "\n";
            } else {
                document.getElementById('resultadoDB').textContent += "No se encontró el registro\n";
            }
        };
    };


