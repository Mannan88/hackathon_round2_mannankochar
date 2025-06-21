    const items = document.querySelectorAll('.faq-item');

    items.forEach(item => {
      item.querySelector('.faq-question').addEventListener('click', () => {
        item.classList.toggle('open');

        const icon = item.querySelector('.icon');
        icon.textContent = item.classList.contains('open') ? '−' : '+';
      });
    });