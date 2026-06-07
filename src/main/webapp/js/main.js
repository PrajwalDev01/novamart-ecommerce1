// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Product card hover micro-interactions
const cards = document.querySelectorAll('.product-card');
cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.transform = 'translateY(-10px)';
    });
    card.addEventListener('mouseleave', () => {
        card.style.transform = 'translateY(0)';
    });
});

// Add to cart animation (simple feedback)
const cartForm = document.querySelector('form[action="cart"]');
if (cartForm) {
    cartForm.addEventListener('submit', (e) => {
        const btn = cartForm.querySelector('.btn');
        const originalText = btn.innerText;
        btn.innerText = 'Adding to Style...';
        btn.style.opacity = '0.8';
        // Form will submit naturally, this is just for visual feedback
    });
}
