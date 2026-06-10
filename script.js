// script.js

// Función segura para enviar eventos a Meta Pixel
function trackLead(categoria, detalles = {}) {
    if (typeof fbq !== 'undefined') {
        fbq('track', 'Lead', {
            content_name: categoria,
            content_category: 'Web_GuzziAutos',
            ...detalles
        });
        console.log(`📊 Meta Lead registrado: ${categoria}`, detalles);
    } else {
        console.warn('⚠️ Meta Pixel no cargó correctamente');
    }
}

// 1️⃣ INTERCEPTAR TASACIÓN
const formTasacion = document.getElementById('form-tasacion');
if (formTasacion) {
    formTasacion.addEventListener('submit', function(e) {
        e.preventDefault(); // Evita recarga
        const datos = Object.fromEntries(new FormData(this));
        
        trackLead('Tasación de Auto', { auto: `${datos.marca} ${datos.modelo}` });
        
        alert('✅ ¡Datos de tasación enviados! Te contactaremos en breve.');
        this.reset();
        //  Aquí podrías agregar después un fetch() para enviar por email/WhatsApp
    });
}

// 2️⃣ INTERCEPTAR FINANCIACIÓN
const formFinanciacion = document.getElementById('form-financiacion');
if (formFinanciacion) {
    formFinanciacion.addEventListener('submit', function(e) {
        e.preventDefault();
        const datos = Object.fromEntries(new FormData(this));
        
        trackLead('Solicitud de Financiación', { monto: datos.monto_financiar });
        
        alert('✅ ¡Solicitud de crédito enviada! Un asesor te contactará.');
        this.reset();
    });
}

// 3️⃣ INTERCEPTAR CONTACTO
const formContacto = document.getElementById('form-contacto');
if (formContacto) {
    formContacto.addEventListener('submit', function(e) {
        e.preventDefault();
        const datos = Object.fromEntries(new FormData(this));
        
        trackLead('Consulta General', { asunto: datos.asunto });
        
        alert('✅ ¡Mensaje enviado! Pronto nos pondremos en contacto.');
        this.reset();
    });
}