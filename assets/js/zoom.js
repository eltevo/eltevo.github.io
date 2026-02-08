document.addEventListener('DOMContentLoaded', () => {
    const zoomTriggers = document.querySelectorAll('.zoom-trigger');
    const dialog = document.querySelector('.image-zoom-dialog');
    if (!dialog) return;
    const dialogImage = dialog.querySelector('img');
    if (!dialogImage) return;

    zoomTriggers.forEach(trigger => {
        trigger.addEventListener('click', () => {
            const sourceImage = trigger.querySelector('img');
            if (!sourceImage) return;
            dialogImage.src = sourceImage.src;
            dialogImage.alt = sourceImage.alt;
            dialog.showModal();
            document.body.classList.add('modal-open'); 
        });
    });

    // Close if the click is on the backdrop or the image itself
    dialog.addEventListener('click', (event) => {
      if (event.target === dialog || event.target === dialogImage) {
        dialog.close();
      }
    });
    // Re-enable scrolling when the dialog is closed
    dialog.addEventListener('close', () => {
      document.body.classList.remove('modal-open');
    });
});
