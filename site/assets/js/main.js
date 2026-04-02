/* Savoury Lab — Main JS */

// Language toggle
function toggleLang() {
  const html = document.documentElement;
  const current = html.getAttribute('lang');
  const next = current === 'en' ? 'de' : 'en';
  html.setAttribute('lang', next);
  localStorage.setItem('lang', next);
  // Update all lang toggle buttons across the page
  document.querySelectorAll('.lang-toggle').forEach(btn => {
    btn.textContent = next === 'en' ? 'DE' : 'EN';
  });
}

// Restore language preference
document.addEventListener('DOMContentLoaded', () => {
  const saved = localStorage.getItem('lang');
  if (saved) {
    document.documentElement.setAttribute('lang', saved);
    document.querySelectorAll('.lang-toggle').forEach(btn => {
      btn.textContent = saved === 'en' ? 'DE' : 'EN';
    });
  }
});

// Mobile menu toggle
function toggleMenu() {
  document.querySelector('.nav').classList.toggle('open');
}

// Close mobile menu on link click
document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.nav a').forEach(link => {
    link.addEventListener('click', () => {
      document.querySelector('.nav').classList.remove('open');
    });
  });
});

// Smooth reveal on scroll
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.1 });

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));
});

// Simple contact form handler (mailto fallback)
function handleContactForm(e) {
  e.preventDefault();
  const form = e.target;
  const name = form.querySelector('[name="name"]').value;
  const email = form.querySelector('[name="email"]').value;
  const subject = form.querySelector('[name="subject"]').value;
  const message = form.querySelector('[name="message"]').value;

  const mailto = `mailto:info@savourylab.de?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
  window.location.href = mailto;
}
