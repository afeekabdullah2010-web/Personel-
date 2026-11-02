document.getElementById('year').textContent = new Date().getFullYear();
const menuButton = document.querySelector('.menu-toggle');
const navigation = document.getElementById('main-nav');
function closeMenu() {
  menuButton.setAttribute('aria-expanded', 'false');
  navigation.classList.remove('is-open');
}
menuButton.addEventListener('click', () => {
  const open = menuButton.getAttribute('aria-expanded') !== 'true';
  menuButton.setAttribute('aria-expanded', String(open));
  navigation.classList.toggle('is-open', open);
});
document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menuButton.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 1101px)').addEventListener('change', closeMenu);

// Five-second introduction once per tab session; inner-page navigation stays fast.
const loader = document.querySelector('.site-loader');
let showIntroduction = true;
try {
  showIntroduction = sessionStorage.getItem('portfolio-intro-seen') !== 'yes';
  sessionStorage.setItem('portfolio-intro-seen', 'yes');
} catch (_) { /* Storage may be unavailable for local files. */ }
if (showIntroduction) {
  loader.classList.add('is-loading');
  document.body.classList.add('intro-loading');
  window.setTimeout(() => {
    loader.classList.remove('is-loading');
    document.body.classList.remove('intro-loading');
    loader.setAttribute('aria-hidden', 'true');
  }, 5000);
} else {
  loader.setAttribute('aria-hidden', 'true');
}

// Animate only content near the viewport, in both scroll directions.
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
const revealTargets = document.querySelectorAll('main section, .focus-strip');
if ('IntersectionObserver' in window && !reducedMotion.matches) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => entry.target.classList.toggle('in-view', entry.isIntersecting));
  }, { threshold: 0, rootMargin: '0px 0px -25px 0px' });
  revealTargets.forEach((target) => {
    target.classList.add('scroll-reveal');
    observer.observe(target);
  });
  reducedMotion.addEventListener('change', (event) => {
    if (event.matches) {
      observer.disconnect();
      revealTargets.forEach((target) => target.classList.remove('scroll-reveal'));
    }
  });
}

const chat = document.getElementById('portfolio-chat');
const launcher = document.querySelector('.chat-launcher');
const chatInput = document.getElementById('chat-input');
const messages = document.querySelector('.chat-messages');
let chatOpener = launcher;
function openChat(event) {
  chatOpener = event.currentTarget;
  chat.showModal();
  launcher.setAttribute('aria-expanded', 'true');
  chatInput.focus();
}
document.querySelectorAll('[data-open-chat], .chat-launcher').forEach((button) => button.addEventListener('click', openChat));
document.querySelector('.chat-close').addEventListener('click', () => chat.close());
chat.addEventListener('close', () => {
  launcher.setAttribute('aria-expanded', 'false');
  chatOpener.focus();
});
function portfolioAnswer(message) {
  const text = message.toLowerCase();
  if (/hire|price|cost|quote|project|budget/.test(text)) return 'To hire Afeek, email afeekabdullah2010@gmail.com with your project idea, timeline, and budget. Pricing is discussed directly; I cannot confirm a quote or booking.';
  if (/contact|email|phone|call|number/.test(text)) return 'Email: afeekabdullah2010@gmail.com. Phone: +94 72 210 1064 or +94 75 378 7109. Use the email link below to speak with Afeek directly.';
  if (/skill|python|javascript|language|code/.test(text)) return 'Afeek’s skills include Python, HTML, CSS, JavaScript, TypeScript, PHP, SQL, UI/UX and graphic design, networking, and database administration. The Skills page has the full list.';
  if (/service|website|design|software|repair|network/.test(text)) return 'Services include web development, web and UI/UX design, graphic design, network administration, mobile repair, and construction. See the Services page or email Afeek to discuss your requirements.';
  if (/education|school|study/.test(text)) return 'Afeek studies at Al-Ashraq M.M.V. National School. His education also includes Ma’aariful Wahy and abacus mental arithmetic. Read the Education page for details.';
  if (/experience|award|achievement/.test(text)) return 'His portfolio lists front-end development at Orion International Campus, a gold medal at Orinsto Institute, and National Cadet Corps experience. See Achievements for the details.';
  if (/where|location|address/.test(text)) return 'Afeek is based in Nintavur, Sri Lanka. Full contact details are on the Contact page.';
  if (/hello|hi\b|hey|vanakkam/.test(text)) return 'Hello! I’m the automated portfolio guide. I can help with services, skills, education, hiring, and contact details.';
  return 'I can answer basic questions about Afeek’s portfolio. Try Services, Skills, Hire me, or Contact. For other questions, please email Afeek directly using the link below.';
}
function addMessage(text, sender) {
  const bubble = document.createElement('p');
  bubble.className = `chat-bubble ${sender}`;
  bubble.textContent = text;
  messages.appendChild(bubble);
  messages.scrollTop = messages.scrollHeight;
}
function sendMessage(text) {
  const message = text.trim();
  if (!message) return;
  addMessage(message, 'visitor');
  addMessage(portfolioAnswer(message), 'assistant');
  chatInput.value = '';
  chatInput.focus();
}
document.querySelector('.chat-form').addEventListener('submit', (event) => {
  event.preventDefault();
  sendMessage(chatInput.value);
});
document.querySelectorAll('.chat-suggestions button').forEach((button) => button.addEventListener('click', () => sendMessage(button.textContent)));
