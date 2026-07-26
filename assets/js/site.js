document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('[data-menu-toggle]');
  const navigation = document.querySelector('[data-site-navigation]');

  const closeMenu = () => {
    if (!menuToggle || !navigation) return;
    menuToggle.setAttribute('aria-expanded', 'false');
    navigation.classList.remove('is-open');
  };

  if (menuToggle && navigation) {
    menuToggle.addEventListener('click', () => {
      const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
      menuToggle.setAttribute('aria-expanded', String(!isOpen));
      navigation.classList.toggle('is-open', !isOpen);
    });

    navigation.addEventListener('click', (event) => {
      if (event.target.closest('a')) closeMenu();
    });

    document.addEventListener('keydown', (event) => {
      if (event.key === 'Escape') {
        const wasOpen = menuToggle.getAttribute('aria-expanded') === 'true';
        closeMenu();
        if (wasOpen) menuToggle.focus();
      }
    });

    window.matchMedia('(min-width: 761px)').addEventListener('change', closeMenu);
  }

  document.querySelectorAll('a[href^="http"]').forEach((link) => {
    const url = new URL(link.href, window.location.href);
    if (url.origin === window.location.origin) return;

    link.target = '_blank';
    link.relList.add('noopener', 'noreferrer');
    if (!link.getAttribute('aria-label')) {
      link.setAttribute('aria-label', `${link.textContent.trim()} (opens in a new tab)`);
    }
  });

  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('[data-ambient-video]').forEach((video) => {
      video.pause();
      video.removeAttribute('autoplay');
    });
  }
});
