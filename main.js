// Progressive enhancement: the site works without JavaScript.
(() => {
  const root = document.documentElement;
  const themeButton = document.querySelector('.theme-toggle');
  const menuButton = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  const moon = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><path d="M20.3 15.3A8 8 0 0 1 8.7 3.7 8.5 8.5 0 1 0 20.3 15.3Z"/></svg>';
  const sun = '<svg aria-hidden="true" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.65" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2m0 16v2M4.93 4.93l1.42 1.42m11.3 11.3 1.42 1.42M2 12h2m16 0h2M4.93 19.07l1.42-1.42m11.3-11.3 1.42-1.42"/></svg>';
  const applyTheme = theme => {
    root.dataset.theme = theme;
    if (themeButton) {
      themeButton.innerHTML = theme === 'dark' ? sun : moon;
      themeButton.setAttribute('aria-label', theme === 'dark' ? 'Switch to light theme' : 'Switch to dark theme');
      themeButton.setAttribute('aria-pressed', String(theme === 'dark'));
    }
  };
  let storedTheme;
  try { storedTheme = localStorage.getItem('research-portfolio-theme'); } catch { /* Storage may be disabled. */ }
  applyTheme(storedTheme === 'dark' ? 'dark' : 'light');
  themeButton?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    try { localStorage.setItem('research-portfolio-theme', next); } catch { /* ignore */ }
  });

  menuButton?.addEventListener('click', () => {
    const open = !nav.classList.contains('is-open');
    nav.classList.toggle('is-open', open);
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  });
  nav?.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('is-open');
    menuButton?.setAttribute('aria-expanded', 'false');
  }));
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape' && nav?.classList.contains('is-open')) {
      nav.classList.remove('is-open');
      menuButton?.setAttribute('aria-expanded','false');
      menuButton?.focus();
    }
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const publicationItems = document.querySelectorAll('.publication[data-type]');
  const publicationCount = document.getElementById('publication-count');
  filterButtons.forEach(button => button.addEventListener('click', () => {
    const type = button.dataset.filter;
    filterButtons.forEach(item => {
      const active = item === button;
      item.classList.toggle('is-selected', active);
      item.setAttribute('aria-pressed', String(active));
    });
    let visible = 0;
    publicationItems.forEach(item => {
      const show = type === 'all' || item.dataset.type === type;
      item.hidden = !show;
      if (show) visible++;
    });
    if (publicationCount) publicationCount.textContent = `Showing ${visible} sample ${visible === 1 ? 'entry' : 'entries'}.`;
  }));
  document.getElementById('print-cv')?.addEventListener('click', () => window.print());
  const year = document.getElementById('current-year');
  if (year) year.textContent = String(new Date().getFullYear());
})();
