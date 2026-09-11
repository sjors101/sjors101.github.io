// Progressive enhancement: only opt into the hidden-then-reveal animation
// once JS is confirmed running. If this script fails to load (or an old
// cached version runs), the `js` class is never added and all content
// stays fully visible instead of being stuck at opacity 0.
document.documentElement.classList.add('js');

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
