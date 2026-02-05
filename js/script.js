// Mobile Menu Toggle
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileBtn.addEventListener('click', () => {
    if (mobileMenu.style.display === 'block') {
        mobileMenu.style.display = 'none';
    } else {
        mobileMenu.style.display = 'block';
    }
});

// Close mobile menu when clicking a link
document.querySelectorAll('#mobile-menu a').forEach(link => {
    link.addEventListener('click', () => {
        mobileMenu.style.display = 'none';
    });
});

// Scroll Reveal Animation
const revealElements = document.querySelectorAll('.reveal');

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const elementVisible = 150;

    revealElements.forEach((element) => {
        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < windowHeight - elementVisible) {
            element.classList.add('visible');
        }
    });
};

window.addEventListener('scroll', revealOnScroll);
// Trigger once on load
revealOnScroll();

// Lightbox
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');

function openLightbox(src) {
    lightboxImg.src = src;
    lightbox.style.display = 'flex';
}

function closeLightbox() {
    lightbox.style.display = 'none';
}


// Make functions global for inline onclick
window.openLightbox = openLightbox;
window.closeLightbox = closeLightbox;

// WhatsApp Form Handler
const waForm = document.getElementById('whatsapp-form');
if (waForm) {
    waForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('form-name').value;
        const message = document.getElementById('form-message').value;
        const phone = '919082658954'; // Client's phone number

        const text = `Hi, I am ${name}. ${message}`;
        const encodedText = encodeURIComponent(text);

        const waUrl = `https://wa.me/${phone}?text=${encodedText}`;
        window.open(waUrl, '_blank');
    });
}

// Splash Screen Handler
window.addEventListener('load', () => {
    const splash = document.getElementById('splash-screen');
    setTimeout(() => {
        splash.classList.add('hidden');
        // Optional: Remove from DOM after transition
        setTimeout(() => {
            splash.style.display = 'none';
        }, 800); // Matches CSS transition duration
    }, 2500); // Display duration (2.5 seconds)
});
