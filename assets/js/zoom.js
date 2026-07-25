document.addEventListener('DOMContentLoaded', () => {
  const dialog = document.querySelector('.image-zoom-dialog');
  if (!dialog || typeof dialog.showModal !== 'function') return;

  const dialogImage = dialog.querySelector('[data-zoom-image]');
  const closeButton = dialog.querySelector('[data-zoom-close]');
  let opener = null;

  document.querySelectorAll('.zoom-trigger').forEach((trigger) => {
    const sourceImage = trigger.querySelector('img');
    if (!sourceImage) return;

    if (!trigger.getAttribute('aria-label')) {
      trigger.setAttribute('aria-label', `Expand figure: ${sourceImage.alt}`);
    }

    trigger.addEventListener('click', () => {
      opener = trigger;
      dialogImage.src = sourceImage.currentSrc || sourceImage.src;
      dialogImage.alt = sourceImage.alt;
      dialog.showModal();
      document.body.classList.add('modal-open');
      closeButton.focus();
    });
  });

  closeButton?.addEventListener('click', () => dialog.close());

  dialog.addEventListener('click', (event) => {
    if (event.target === dialog) dialog.close();
  });

  dialog.addEventListener('close', () => {
    document.body.classList.remove('modal-open');
    dialogImage.src = '';
    dialogImage.alt = '';
    opener?.focus();
    opener = null;
  });
});
