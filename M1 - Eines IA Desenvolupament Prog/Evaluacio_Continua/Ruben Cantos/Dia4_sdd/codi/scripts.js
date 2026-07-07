document.addEventListener('DOMContentLoaded', () => {

  /* ── Mobile menu ── */
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (menuBtn && mobileNav) {
    menuBtn.addEventListener('click', () => {
      mobileNav.classList.toggle('hidden');
    });
    mobileNav.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => mobileNav.classList.add('hidden'));
    });
  }

  /* ── Smooth scroll ── */
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
      const href = anchor.getAttribute('href');
      if (href === '#') return;
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });

  /* ── Scroll reveal ── */
  const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

  /* ── FAQ accordion ── */
  document.querySelectorAll('.faq-trigger').forEach(btn => {
    btn.addEventListener('click', () => {
      const body = btn.nextElementSibling;
      const chevron = btn.querySelector('.faq-chevron');
      body.classList.toggle('open');
      if (chevron) chevron.classList.toggle('rotated');
    });
  });

  /* ── Age tabs ── */
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      tabBtns.forEach(b => b.classList.remove('active'));
      tabPanels.forEach(p => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById(btn.dataset.tab);
      if (panel) panel.classList.add('active');
    });
  });

  /* ── WhatsApp button ── */
  const waBtn = document.getElementById('whatsapp-btn');
  if (waBtn) {
    waBtn.addEventListener('click', () => {
      gtag('event', 'click_whatsapp');
    });
  }

  /* ── Contact form ── */
  const form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', async e => {
      e.preventDefault();
      const msg = document.getElementById('form-message');
      const btn = form.querySelector('button[type="submit"]');
      btn.disabled = true;
      btn.textContent = 'Enviant...';
      try {
        const res = await fetch(form.action, {
          method: 'POST',
          body: new FormData(form),
          headers: { 'Accept': 'application/json' }
        });
        if (res.ok) {
          msg.textContent = 'Gràcies! El teu missatge s\'ha enviat correctament. Et respondrem ben aviat.';
          msg.className = 'text-sm text-green-600 mt-3';
          form.reset();
          gtag('event', 'submit_contact_form');
        } else {
          throw new Error('Error en l\'enviament');
        }
      } catch {
        msg.textContent = 'Hi ha hagut un error. Si us plau, torna-ho a intentar o truca\'ns.';
        msg.className = 'text-sm text-red-600 mt-3';
      }
      btn.disabled = false;
      btn.textContent = 'Enviar missatge';
    });
  }
});
