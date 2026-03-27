/* Geoplora – main.js */

/* Nav shadow on scroll */
const navWrap = document.querySelector('.nav-wrap');
if (navWrap) {
  window.addEventListener('scroll', () => {
    navWrap.style.boxShadow = window.scrollY > 20
      ? '0 4px 32px rgba(0,0,0,0.5)'
      : 'none';
  }, { passive: true });
}

/* Fade-in on scroll */
const observerOpts = { threshold: 0.12 };
const fadeObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
      fadeObserver.unobserve(entry.target);
    }
  });
}, observerOpts);

document.querySelectorAll('.feature-card, .screenshot-card, .stat-item, .trouble-card, .support-contact-card, .faq-item').forEach(el => {
  el.style.opacity = '0';
  el.style.transform = 'translateY(28px)';
  el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
  fadeObserver.observe(el);
});