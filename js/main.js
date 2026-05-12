// LLM Logistics – main.js

const header     = document.querySelector('.site-header');
const navToggle  = document.getElementById('nav-toggle');
const navLinks   = document.getElementById('primary-navigation');
const yearEl     = document.getElementById('year');
const form       = document.getElementById('contactForm');

const CONTACT_EMAIL = 'info@llmlogistics.de';

// ── Jahr im Footer ──
if (yearEl) yearEl.textContent = new Date().getFullYear();

// ── Header Scroll-Shadow ──
window.addEventListener('scroll', () => {
  header.classList.toggle('is-scrolled', window.scrollY > 10);
}, { passive: true });

// ── Mobile Navigation ──
if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const open = navLinks.classList.toggle('is-open');
    navToggle.classList.toggle('is-active', open);
    navToggle.setAttribute('aria-expanded', String(open));
    navToggle.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
  });

  navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('is-open');
      navToggle.classList.remove('is-active');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Menü öffnen');
    });
  });
}

// ── Scroll-Animationen ──
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.card, .stat-box, .kontakt-row').forEach((el, i) => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(16px)';
    el.style.transition = `opacity 0.45s ease ${i * 0.06}s, transform 0.45s ease ${i * 0.06}s`;
    observer.observe(el);
  });
}

// ── Kontaktformular → E-Mail ──
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    const data = new FormData(form);

    const company = (data.get('company') || '').toString().trim();
    const name    = (data.get('name')    || '').toString().trim();
    const email   = (data.get('email')   || '').toString().trim();
    const route   = (data.get('route')   || '').toString().trim() || 'nicht angegeben';
    const date    = (data.get('date')    || '').toString().trim() || 'nicht angegeben';
    const message = (data.get('message') || '').toString().trim();

    const subject = `Transportanfrage von ${company}`;

    const body = [
      'Neue Transportanfrage über llmlogistics.de',
      '',
      `Unternehmen: ${company}`,
      `Ansprechpartner: ${name}`,
      `E-Mail: ${email}`,
      `Route / Gebiet: ${route}`,
      `Zeitraum: ${date}`,
      '',
      'Nachricht:',
      '',
      message
    ].join('\n');

    // Fallback: Nachricht zusätzlich in die Zwischenablage kopieren.
    // Falls eine Mail-App den Text nicht übernimmt, kann der Nutzer ihn einfügen.
    try {
      await navigator.clipboard.writeText(body);
    } catch (err) {
      // Kein Problem, falls Clipboard nicht erlaubt ist.
    }

    const mailtoUrl =
      `mailto:${CONTACT_EMAIL}` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoUrl;
  });
}