// Reveal elements as they enter the viewport
const revealables = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealables.forEach((el) => observer.observe(el));
} else {
    revealables.forEach((el) => el.classList.add('visible'));
}
