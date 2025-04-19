// Obtener el checkbox del idioma
var check = document.querySelector(".check");

// Verificar si hay un valor guardado en localStorage y actualizar el checkbox
if (localStorage.getItem('language') === 'en') {
    check.checked = true; // Si está en inglés, marcar el checkbox
} else {
    check.checked = false; // Si está en español, desmarcar el checkbox
}

// Detectar el cambio en el estado del checkbox
check.addEventListener('change', idioma);

function idioma() {
    let id = check.checked;
    if (id) {
        // Guardar 'en' en localStorage y redirigir a la versión en inglés
        localStorage.setItem('language', 'en');
        location.href = "indexEN.html";
    } else {
        // Guardar 'es' en localStorage y redirigir a la versión en español
        localStorage.setItem('language', 'es');
        location.href = "index.html";
    }
}
