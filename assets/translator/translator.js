function setLanguage(lang) {
    const all = document.querySelectorAll('[data-lang]');
    all.forEach(el => {
        el.style.display = el.getAttribute('data-lang') === lang ? 'inline' : 'none';
    });

    // Placeholder dinámico
    const placeholders = {
        es: {
            name: "Nombre",
            phone: "Celular",
            message: "Escribe el servicio que requieres"
        },
        en: {
            name: "Name",
            phone: "Phone",
            message: "Describe the service you need"
        }
    };

    // Cambiar los placeholders
    document.getElementById("name-Contacto1").placeholder = placeholders[lang].name;
    document.getElementById("phone-Contacto1").placeholder = placeholders[lang].phone;
    document.getElementById("textarea-Contacto1").placeholder = placeholders[lang].message;

    localStorage.setItem('lang', lang);
}

window.addEventListener('DOMContentLoaded', () => {
    const lang = localStorage.getItem('lang') || 'es';
    setLanguage(lang);
});