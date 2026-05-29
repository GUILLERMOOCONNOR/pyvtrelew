// Smooth scrolling para links de navegación
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Manejador del menú dropdown de ramas
document.querySelectorAll('.dropdown-menu a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const ramaId = this.getAttribute('data-rama');
        const ramaElement = document.getElementById('rama-' + ramaId);
        
        if (ramaElement) {
            // Scroll a la sección de ramas
            document.getElementById('ramas').scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            
            // Highlight la rama seleccionada
            document.querySelectorAll('.rama-card').forEach(card => {
                card.classList.remove('active');
            });
            ramaElement.classList.add('active');
            
            // Animar el highlight
            setTimeout(() => {
                ramaElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'nearest'
                });
            }, 300);
        }
    });
});

// Efecto de hover en items de galería
const galleryItems = document.querySelectorAll('.gallery-item');
galleryItems.forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transition = 'transform 0.3s ease';
    });
});

// Navbar responsiva - cambiar estilo al hacer scroll
window.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 6px 20px rgba(0, 0, 0, 0.2)';
    } else {
        navbar.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.1)';
    }
});

// Animación de números para estadísticas (si las agregas)
function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        element.innerText = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// Lazy loading de imágenes (mejorar rendimiento)
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img').forEach(img => imageObserver.observe(img));
}

// Validación de formularios (si los agregas)
document.addEventListener('submit', function(e) {
    if (e.target.matches('form')) {
        e.preventDefault();
        // Aquí iría la lógica de validación y envío
        console.log('Formulario enviado');
    }
});

// Función para copiar al portapapeles (para enlaces)
function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('¡Copiado al portapapeles!');
    }).catch(err => {
        console.error('Error al copiar:', err);
    });
}

// Event listeners para redes sociales
document.addEventListener('DOMContentLoaded', function() {
    const socialLinks = document.querySelectorAll('.social-links a');
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // Los links de redes sociales abren en nueva ventana
            if (this.target === '_blank') {
                e.preventDefault();
                window.open(this.href, 'popup', 'width=600,height=600');
            }
        });
    });
});

console.log('Página de Principio y Valores - Trelew cargada correctamente');