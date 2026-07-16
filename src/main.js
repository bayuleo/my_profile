const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
toggle?.addEventListener('click', () => { const isOpen = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(isOpen)); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => { nav.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); }));
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav?.classList.contains('is-open')) { nav.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); toggle?.focus(); } });
