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

// Lightbox & Project Gallery
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const lightboxNext = document.getElementById('lightbox-next');
const lightboxPrev = document.getElementById('lightbox-prev');
const lightboxClose = document.getElementById('lightbox-close');

let currentProjectImages = [];
let currentImageIndex = 0;

// Project Data (Grouped for demonstration)
// Project Data (Accurate Mapping from PPT)
const projects = {
    1: ['assets/gallery_full/image2.jpeg', 'assets/gallery_full/image3.jpeg', 'assets/gallery_full/image4.jpeg', 'assets/gallery_full/image5.jpeg', 'assets/gallery_full/image6.jpeg', 'assets/gallery_full/image7.jpeg', 'assets/gallery_full/image8.jpeg'],
    2: ['assets/gallery_full/image9.jpeg', 'assets/gallery_full/image10.jpeg', 'assets/gallery_full/image11.jpeg', 'assets/gallery_full/image12.jpeg', 'assets/gallery_full/image13.jpeg'],
    3: ['assets/gallery_full/image14.jpeg', 'assets/gallery_full/image15.jpeg', 'assets/gallery_full/image16.jpeg', 'assets/gallery_full/image17.jpeg'],
    4: ['assets/gallery_full/image18.jpeg', 'assets/gallery_full/image19.jpeg', 'assets/gallery_full/image20.jpeg'],
    5: ['assets/gallery_full/image21.jpeg', 'assets/gallery_full/image22.jpeg', 'assets/gallery_full/image23.jpeg'],
    6: ['assets/gallery_full/image25.jpeg', 'assets/gallery_full/image24.jpeg', 'assets/gallery_full/image26.jpeg', 'assets/gallery_full/image27.jpeg'],
    7: ['assets/gallery_full/image28.jpg', 'assets/gallery_full/image29.jpg', 'assets/gallery_full/image30.jpg', 'assets/gallery_full/image31.jpg', 'assets/gallery_full/image32.jpg', 'assets/gallery_full/image33.jpg', 'assets/gallery_full/image34.jpg', 'assets/gallery_full/image35.jpg', 'assets/gallery_full/image36.jpg', 'assets/gallery_full/image37.jpg', 'assets/gallery_full/image38.jpg']
};

function openProjectGallery(projectId) {
    if (projects[projectId]) {
        currentProjectImages = projects[projectId];
        currentImageIndex = 0;
        updateLightboxImage();
        lightbox.style.display = 'flex';
    }
}

function openProjectImage(projectId, index) {
    if (projects[projectId]) {
        currentProjectImages = projects[projectId];
        currentImageIndex = index;
        updateLightboxImage();
        lightbox.style.display = 'flex';
    }
}

function updateLightboxImage() {
    lightboxImg.src = currentProjectImages[currentImageIndex];
}

function nextImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex + 1) % currentProjectImages.length;
    updateLightboxImage();
}

function prevImage(e) {
    if (e) e.stopPropagation();
    currentImageIndex = (currentImageIndex - 1 + currentProjectImages.length) % currentProjectImages.length;
    updateLightboxImage();
}

function closeLightbox() {
    lightbox.style.display = 'none';
}

// Event Listeners for Lightbox
if (lightboxNext) lightboxNext.addEventListener('click', nextImage);
if (lightboxPrev) lightboxPrev.addEventListener('click', prevImage);
if (lightboxClose) lightboxClose.addEventListener('click', closeLightbox);

// Keyboard Navigation
document.addEventListener('keydown', (e) => {
    if (lightbox.style.display === 'flex') {
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
        if (e.key === 'Escape') closeLightbox();
    }
});

// Expose to window for HTML onclick
window.openProjectGallery = openProjectGallery;
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
