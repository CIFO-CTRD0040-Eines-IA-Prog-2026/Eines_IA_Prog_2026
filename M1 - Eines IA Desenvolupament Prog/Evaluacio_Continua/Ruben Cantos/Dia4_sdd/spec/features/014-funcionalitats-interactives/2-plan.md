# Plan: Funcionalitats Interactives

## implementació a `codi/scripts.js`

```js
// Mobile menu
function initMobileMenu() { ... }

// Scroll reveal
function initScrollReveal() {
  const observer = new IntersectionObserver(...);
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

// FAQ accordion
function initFaq() {
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.nextElementSibling.classList.toggle('open');
      btn.querySelector('.faq-chevron').classList.toggle('rotated');
    });
  });
}

// WhatsApp button
function initWhatsApp() {
  // Botó flotant amb enllaç wa.me/34932541700
}

// Smooth scroll
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', e => {
      e.preventDefault();
      document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
    });
  });
}

// Contact form
function initForm() { ... }
```

## form enviament

- Action: Formspree (`https://formspree.io/f/...`) o EmailJS
- Validar camps abans d'enviar
- Mostrar spinner + missatge confirmació
