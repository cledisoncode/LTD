
const projectTeamMembers = [
  { 
    name: 'Larissa Garcia', 
    role: 'Coordenadora do Projeto', 
    photo: 'assets/img_integrantes/perfil_larissa.jpeg', 
    linkedin: 'https://www.linkedin.com/in/larissapsgarcia' 
  },
  { 
    name: 'Cledison Viana', 
    role: 'Desenvolvedor do Projeto', 
    photo: 'assets/img_integrantes/perfil_cledison.jpeg', 
    linkedin: 'https://www.linkedin.com/in/cledison-viana-5579b0355' 
  },
  { 
    name: 'Ericka Vitória', 
    role: 'Densenvolvedora do Projeto', 
    photo: 'assets/img_integrantes/perfil_ericka.jpeg', 
    linkedin: 'www.linkedin.com/in/ericka-vitória-aguiar-alves-824222381' 
  },
  { 
    name: 'Matheus Gaia', 
    role: 'Desenvolvedor do Projeto', 
    photo: 'assets/img_integrantes/perfil_matheus_gaia.jpeg', 
    linkedin: 'www.linkedin.com/in/matheus-gaia-819a8823a' 
  },
  { 
    name: 'Matheus Mar Martins', 
    role: 'Desenvolvedor do Projeto', 
    photo: 'assets/img_integrantes/perfil_matheus_martins.jpeg', 
    linkedin: 'www.linkedin.com/in/matheusmarmartins' 
  }
];

// integrantes da equipe geral do LTD.

const ltdTeamMembers = [
  { name: 'Larissa Garcia', 
    photo: 'assets/img_integrantes/perfil_larissa.jpeg', 
    linkedin: 'https://www.linkedin.com/in/larissapsgarcia' 
  },
  { name: 'Ericka Vitória', 
    photo: 'assets/img_integrantes/perfil_ericka.jpeg', 
    linkedin: 'www.linkedin.com/in/ericka-vitória-aguiar-alves-824222381' 
  },
  { name: 'Cledison Viana', 
    photo: 'assets/img_integrantes/perfil_cledison.jpeg', 
    linkedin: 'https://www.linkedin.com/in/cledison-viana-5579b0355' 
  },
  { name: 'Matheus Gaia', 
    photo: 'assets/img_integrantes/perfil_matheus_gaia.jpeg', 
    linkedin: 'www.linkedin.com/in/matheusmarmartins' 
  },
  { name: 'Matheus Mar Martins', 
    photo: 'assets/img_integrantes/perfil_matheus_martins.jpeg', 
    linkedin: 'www.linkedin.com/in/matheusmarmartins'
  },
];

const photoMarkup = (photo, name, extra = '') => photo
  ? `<img src="${photo}" alt="${name ? `Fotografia de ${name}` : 'Fotografia do integrante'}" class="h-full w-full object-cover ${extra}">`
  : `<div class="placeholder-photo grid h-full w-full place-items-end p-3 ${extra}" role="img" aria-label="Espaço reservado para fotografia"><span class="font-mono text-[9px] uppercase tracking-[.16em] text-gray-400">Foto em breve</span></div>`;

const linkedInIcon = '<svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" class="h-4 w-4 shrink-0 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.064-2.065 2.064 2.064 0 1 1 4.128 0 2.064 2.064 0 0 1-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>';

function normalizeExternalUrl(url) {
  const value = (url || '').trim();
  if (!value) return '';
  return /^https?:\/\//i.test(value) ? value : `https://${value.replace(/^\/+/,'')}`;
}

function renderPeople() {
  const projectContainer = document.querySelector('#project-people');
  const teamContainer = document.querySelector('#team-grid');
  projectContainer.innerHTML = projectTeamMembers.map((member) => {
    const name = member.name || 'Integrante';
    const role = member.role || 'Função a informar';
    const linkedinUrl = normalizeExternalUrl(member.linkedin);
    const linkedin = linkedinUrl
      ? `<a href="${linkedinUrl}" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Abrir LinkedIn de ${name} em nova aba" 
      class="mt-3 inline-flex items-center justify-center gap-2 rounded-md border border-[#0A66C2] bg-[#0A66C2] px-3 py-2 text-xs font-semibold text-white transition hover:border-[#004182] hover:bg-[#004182]">${linkedInIcon}
        <span>LinkedIn</span>
      </a>
      `
      : `<button type="button" disabled aria-label="Link do LinkedIn ainda não cadastrado" class="mt-3 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[.03] px-3 py-2 text-xs font-semibold text-gray-500">${linkedInIcon}<span>LinkedIn</span></button>`;
    return `<article class="person-card flex min-h-[190px] min-w-[310px] snap-start items-center gap-5 rounded-xl border border-line bg-panel p-4 transition duration-200 hover:border-signal/40 sm:min-w-[370px]"><div class="h-32 w-24 shrink-0 overflow-hidden rounded-lg">${photoMarkup(member.photo, name)}</div><div class="min-w-0"><h4 class="text-base font-bold text-ink">${member.name || 'Nome do integrante'}</h4><p class="mt-2 text-sm leading-5 text-gray-400">${role}</p>${linkedin}</div></article>`;
  }).join('');

  teamContainer.innerHTML = ltdTeamMembers.map((member, index) => {
    const name = member.name || 'Nome do integrante';
    const linkedinUrl = normalizeExternalUrl(member.linkedin);
    const link = linkedinUrl
      ? `<a href="${linkedinUrl}" 
      target="_blank" 
      rel="noopener noreferrer" 
      aria-label="Abrir LinkedIn de ${name} em nova aba" 
      class="mt-4 inline-flex items-center justify-center gap-2 rounded-md border border-[#0A66C2] bg-[#0A66C2] px-3 py-2 text-xs font-semibold text-white transition hover:border-[#004182] hover:bg-[#004182]">${linkedInIcon}
        <span>LinkedIn</span></a>`
      : `
      <button 
        type="button" disabled 
        aria-label="Link do LinkedIn ainda não cadastrado" 
        class="mt-4 inline-flex cursor-not-allowed items-center justify-center gap-2 rounded-md border border-white/10 bg-white/[.03] px-3 py-2 text-xs font-semibold text-gray-500">
        ${linkedInIcon}<span>LinkedIn</span>
      </button>`;
    return `
      <article 
        class="rounded-xl border border-line bg-panel p-3 text-center transition duration-200 hover:-translate-y-1 hover:border-signal/40">
        <div class="aspect-[4/4.5] overflow-hidden rounded-lg">
          ${photoMarkup(member.photo, name)}
        </div>
        <h3 class="mt-4 text-sm font-bold text-ink">
          ${member.name || `Integrante ${String(index + 1).padStart(2, '0')}`}
        </h3>${link}
      </article>`;
  }).join('');
  if (window.lucide) window.lucide.createIcons();
}

function setupCarousels() {
  document.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-target][data-direction]');
    if (!button) return;
    event.preventDefault();
    const track = document.getElementById(button.dataset.target);
    if (!track) return;

    const firstItem = track.firstElementChild;
    const itemWidth = firstItem?.getBoundingClientRect().width || track.clientWidth * 0.8;
    const style = window.getComputedStyle(track);
    const gap = parseFloat(style.columnGap || style.gap) || 0;
    const step = itemWidth + gap;
    const maxScroll = Math.max(0, track.scrollWidth - track.clientWidth);
    const direction = Number(button.dataset.direction);
    if (!maxScroll || !step) return;

    const position = track.scrollLeft;
    const atStart = position <= 3;
    const atEnd = position >= maxScroll - 3;
    let destination = position + step * direction;
    if (direction > 0 && atEnd) destination = 0;
    else if (direction < 0 && atStart) destination = maxScroll;

    track.scrollTo({
      left: Math.max(0, Math.min(maxScroll, destination)),
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
    });
  });

  document.querySelectorAll('.project-track').forEach((track) => {
    let startX = 0;
    let startScroll = 0;
    let pointerId = null;
    let pointerDown = false;
    let dragging = false;
    let suppressClick = false;
    track.addEventListener('pointerdown', (event) => {
      if (event.pointerType !== 'mouse' || event.button !== 0) return;
    
      if (event.target.closest('a, button, input, select, textarea')) return;
      pointerDown = true;
      dragging = false;
      pointerId = event.pointerId;
      startX = event.clientX;
      startScroll = track.scrollLeft;
    });
    track.addEventListener('pointermove', (event) => {
      if (!pointerDown || event.pointerId !== pointerId) return;
      const delta = event.clientX - startX;
      if (!dragging && Math.abs(delta) > 6) {
        dragging = true;
        suppressClick = true;
        track.setPointerCapture(event.pointerId);
      }
      if (dragging) track.scrollLeft = startScroll - delta;
    });
    track.addEventListener('click', (event) => {
      if (!suppressClick) return;
      event.preventDefault();
      event.stopPropagation();
      suppressClick = false;
    }, true);
    const stopDragging = (event) => {
      if (event && event.pointerId !== pointerId) return;
      const wasDragging = dragging;
      pointerDown = false;
      dragging = false;
      pointerId = null;
      if (wasDragging) setTimeout(() => { suppressClick = false; }, 0);
    };
    track.addEventListener('pointerup', stopDragging);
    track.addEventListener('pointercancel', stopDragging);
    track.addEventListener('lostpointercapture', stopDragging);
  });
}

function setupNavigation() {
  const toggle = document.querySelector('#menu-toggle');
  const menu = document.querySelector('#mobile-menu');
  const setMenuOpen = (open) => {
    menu.classList.toggle('hidden', !open);
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Fechar menu' : 'Abrir menu');
    toggle.innerHTML = `<i data-lucide="${open ? 'x' : 'menu'}" class="h-5 w-5"></i>`;
    window.lucide?.createIcons();
  };
  toggle.addEventListener('click', () => setMenuOpen(toggle.getAttribute('aria-expanded') !== 'true'));
  menu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => setMenuOpen(false)));
  document.addEventListener('keydown', (event) => { if (event.key === 'Escape') setMenuOpen(false); });

  const sections = [...document.querySelectorAll('main section[id]')];
  const links = [...document.querySelectorAll('.nav-link')];
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      links.forEach((link) => {
        if (link.hash === `#${entry.target.id}`) link.setAttribute('aria-current', 'location');
        else link.removeAttribute('aria-current');
      });
    });
  }, { rootMargin: '-30% 0px -55% 0px' });
  sections.forEach((section) => observer.observe(section));
}

function setupContrastToggle() {
  const buttons = [...document.querySelectorAll('[data-contrast-toggle]')];
  const themeColor = document.querySelector('meta[name="theme-color"]');
  const storageKey = 'ltd-high-contrast';
  let isHighContrast = document.documentElement.dataset.contrast === 'high';

  const updateButton = () => {
    const label = isHighContrast ? 'Desativar alto contraste' : 'Ativar alto contraste';
    buttons.forEach((button) => {
      button.setAttribute('aria-pressed', String(isHighContrast));
      button.setAttribute('aria-label', label);
      button.title = label;
      const visibleLabel = button.querySelector('[data-contrast-label]');
      if (visibleLabel) visibleLabel.textContent = label;
    });
    if (themeColor) themeColor.content = isHighContrast ? '#031C28' : '#FBF7EE';
  };

  updateButton();
  buttons.forEach((button) => button.addEventListener('click', () => {
    isHighContrast = !isHighContrast;
    if (isHighContrast) document.documentElement.dataset.contrast = 'high';
    else delete document.documentElement.dataset.contrast;
    try { localStorage.setItem(storageKey, String(isHighContrast)); } catch {}
    updateButton();
  }));
}

function setupReveals() {
  const items = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    items.forEach((item) => item.classList.add('visible'));
    return;
  }
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  items.forEach((item) => observer.observe(item));
}

document.addEventListener('DOMContentLoaded', () => {
  renderPeople();
  setupCarousels();
  setupNavigation();
  setupContrastToggle();
  setupReveals();
  window.lucide?.createIcons();
});
