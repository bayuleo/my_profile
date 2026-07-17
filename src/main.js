const translations = {
  'Skip to main content': 'Lewati ke konten utama',
  'Experience': 'Pengalaman', Projects: 'Proyek', Education: 'Pendidikan', About: 'Tentang', 'Let’s talk ': 'Mari bicara ',
  'Open to mobile engineering roles': 'Terbuka untuk peran mobile engineering', 'Mobile products,': 'Produk mobile,', 'made dependable.': 'yang dapat diandalkan.',
  'View selected work ': 'Lihat karya pilihan ', 'Discuss a role ': 'Diskusikan peran ', 'From incident triage to release day, I bring a calm, structured approach to complex mobile work.': 'Dari penanganan insiden hingga hari rilis, saya membawa pendekatan yang tenang dan terstruktur untuk pekerjaan mobile yang kompleks.',
  'About': 'Tentang', 'Engineering with': 'Engineering dengan', 'the whole picture': 'gambaran utuh', ' in mind.': ' sebagai pertimbangan.',
  'My background spans telecommunications operations, technical support, customer service, network infrastructure, and mobile engineering. That range shapes how I work: investigate carefully, communicate clearly, and keep the user experience at the center.': 'Latar belakang saya mencakup operasi telekomunikasi, dukungan teknis, layanan pelanggan, infrastruktur jaringan, dan mobile engineering. Pengalaman ini membentuk cara kerja saya: menyelidiki dengan teliti, berkomunikasi dengan jelas, dan menempatkan pengalaman pengguna sebagai pusat.',
  'Experience': 'Pengalaman', 'A career built': 'Karier yang dibangun', 'close to the signal.': 'dekat dengan sinyal.',
  'Community leadership': 'Kepemimpinan komunitas', 'Leadership through': 'Kepemimpinan melalui', 'practical ownership.': 'tanggung jawab nyata.', Present: 'Saat ini', Community: 'Komunitas',
  'Education': 'Pendidikan', 'Learning the': 'Mempelajari', 'layers beneath.': 'lapisan di baliknya.', 'Non-formal': 'Non-formal',
  'Selected work': 'Karya pilihan', 'Projects with': 'Proyek dengan', 'practical impact.': 'dampak nyata.',
  'Let’s make something': 'Mari membuat sesuatu', 'work beautifully.': 'bekerja dengan indah.', 'Back to top ': 'Kembali ke atas ',
  'Built with care / Indonesia': 'Dibuat dengan sepenuh perhatian / Indonesia',
  'View on Google Play ': 'Lihat di Google Play ', 'App Store ': 'App Store ', 'Google Play ': 'Google Play '
};
const textNodes = [...document.body.childNodes].flatMap(function collect(node) {
  if (node.nodeType === Node.TEXT_NODE) return [node];
  return [...node.childNodes].flatMap(collect);
});
const englishText = new Map(textNodes.map((node) => [node, node.nodeValue]));
function setLanguage(language) {
  document.documentElement.lang = language;
  textNodes.forEach((node) => {
    const value = englishText.get(node);
    node.nodeValue = language === 'id' && translations[value] !== undefined ? translations[value] : value;
  });
  localStorage.setItem('profile-language', language);
  document.querySelector('.language-toggle').textContent = language === 'id' ? 'EN' : 'ID';
  document.querySelector('.language-toggle').setAttribute('aria-label', language === 'id' ? 'Switch to English' : 'Beralih ke Bahasa Indonesia');
}
const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('#site-nav');
const closeNav = () => { nav?.classList.remove('is-open'); toggle?.setAttribute('aria-expanded', 'false'); };
toggle?.addEventListener('click', () => { const isOpen = nav.classList.toggle('is-open'); toggle.setAttribute('aria-expanded', String(isOpen)); });
nav?.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeNav));
document.addEventListener('click', (event) => { if (nav?.classList.contains('is-open') && !nav.contains(event.target) && !toggle?.contains(event.target)) closeNav(); });
document.addEventListener('keydown', (event) => { if (event.key === 'Escape' && nav?.classList.contains('is-open')) { closeNav(); toggle?.focus(); } });
const languageToggle = document.querySelector('.language-toggle');
languageToggle?.addEventListener('click', () => setLanguage(document.documentElement.lang === 'en' ? 'id' : 'en'));
const themeToggle = document.querySelector('.theme-toggle');
function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem('profile-theme', theme);
  const dark = theme === 'dark';
  if (!themeToggle) return;
  themeToggle.setAttribute('aria-label', dark ? 'Switch to light mode' : 'Switch to dark mode');
  const icon = themeToggle.querySelector('span');
  const label = themeToggle.querySelector('.theme-label');
  if (icon) icon.textContent = dark ? '☀' : '☾';
  if (label) label.textContent = dark ? 'Light' : 'Dark';
}
themeToggle?.addEventListener('click', () => setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark'));
setTheme(document.documentElement.dataset.theme || (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
if (localStorage.getItem('profile-language') === 'id') setLanguage('id');
